# syntax=docker/dockerfile:1.7
#
# Production image for mind-landing (the public marketing site). Two stages:
#   builder — installs deps and runs `next build` to emit .next/standalone.
#   runtime — minimal Debian-slim running the standalone server as non-root.
#
# Unlike the dock, this app has NO native modules (no better-sqlite3), so the
# builder needs no C toolchain. The only thing it pulls that needs auth is the
# @mind-studio/ui design system from GitHub Packages.

# --- Stage 1: build --------------------------------------------------------
FROM node:22-bookworm-slim AS builder
WORKDIR /app

RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# `.npmrc` points the @mind-studio scope at GitHub Packages and reads the auth
# token from $NODE_AUTH_TOKEN. The token is passed as a BuildKit secret (never
# baked into a layer) and exported only for this npm ci invocation.
COPY package.json package-lock.json .npmrc ./
RUN --mount=type=secret,id=node_auth_token \
    NODE_AUTH_TOKEN="$(cat /run/secrets/node_auth_token 2>/dev/null || true)" \
    npm ci --no-audit --no-fund

# Guarantee Next's native swc binary. `npm ci` intermittently omits a
# platform-optional native dep even when it's correctly in the lockfile
# (npm/cli #4828) — and Next 16's Turbopack has NO WASM fallback, so a missing
# binary aborts the build ("Turbopack is not supported on this platform"). We
# force-install the binary matching the build platform's arch + the resolved
# next version (process.arch is "x64"/"arm64", matching the package names) so the
# build never depends on npm-ci luck. It's a public package (no GHCR auth), and
# `--no-save` leaves package.json/lock untouched.
RUN npm install --no-save "@next/swc-linux-$(node -p process.arch)-gnu@$(node -p "require('next/package.json').version")"

COPY . .

# NEXT_PUBLIC_* are inlined at build time, so the outbound links (register page,
# sibling app hosts, docs) are baked into the image here by the release workflow.
ARG NEXT_PUBLIC_POD_REGISTER_URL
ARG NEXT_PUBLIC_APP_DOCK_URL
ARG NEXT_PUBLIC_APP_DRIVE_URL
ARG NEXT_PUBLIC_APP_BUILDER_URL
ARG NEXT_PUBLIC_APP_CODESPACES_URL
ARG NEXT_PUBLIC_DOCS_URL
ENV NEXT_PUBLIC_POD_REGISTER_URL=$NEXT_PUBLIC_POD_REGISTER_URL \
    NEXT_PUBLIC_APP_DOCK_URL=$NEXT_PUBLIC_APP_DOCK_URL \
    NEXT_PUBLIC_APP_DRIVE_URL=$NEXT_PUBLIC_APP_DRIVE_URL \
    NEXT_PUBLIC_APP_BUILDER_URL=$NEXT_PUBLIC_APP_BUILDER_URL \
    NEXT_PUBLIC_APP_CODESPACES_URL=$NEXT_PUBLIC_APP_CODESPACES_URL \
    NEXT_PUBLIC_DOCS_URL=$NEXT_PUBLIC_DOCS_URL

RUN npm run build

# --- Stage 2: runtime ------------------------------------------------------
FROM node:22-bookworm-slim AS runtime
WORKDIR /app

# ca-certificates for TLS; tini as PID 1 so SIGTERM is propagated and zombies reaped.
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates tini \
 && rm -rf /var/lib/apt/lists/*

# node:22-bookworm-slim ships a non-root `node` user at uid 1000.
USER node

# Next.js standalone output: server.js + only the traced node_modules.
COPY --chown=node:node --from=builder /app/.next/standalone ./
COPY --chown=node:node --from=builder /app/.next/static ./.next/static
COPY --chown=node:node --from=builder /app/public ./public

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

EXPOSE 3000

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "server.js"]
