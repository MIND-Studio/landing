# landing

The **public marketing site** for [mindpods.org](https://mindpods.org) — the
**pre-login** front door that explains what Mind is, shows the apps, and sends a
new visitor to create a pod.

It is deliberately *not* the dock. The **dock** (`dock`,
`dock.mindpods.org`) is the post-login launcher/profile/account hub for people who
already have a pod. This site sits in front of it: the apex `mindpods.org` reverse
proxies here, and the page's primary CTA hands off to pod/dock.

## What it is

A static-leaning Next.js site on the shared `@mind-studio/ui` design system. No
auth, no pod I/O, no database — just marketing pages:

| Route | Purpose |
|---|---|
| `/` | Hero, the data-ownership inversion, one-pod-many-apps, app teaser, FAQ, CTA |
| `/apps` | The Mind app family — "live now" (Dock, Drive, Builder, Codespaces) + "coming soon" |
| `/how-it-works` | Plain-English Solid primer: pods, WebID, the sign-in flow, where pods live |
| `/privacy` | The four load-bearing principles + data portability story |
| `/pricing` | "Free during the beta" (paid hosted plans + self-hosting noted) |

Primary CTA **Create your pod** → `pod.mindpods.org` self-serve registration.
Secondary CTA **Sign in** → `dock.mindpods.org`.

## Shared packages (GitHub Packages)

Installs `@mind-studio/ui` from **GitHub Packages**. A committed `.npmrc` scopes
`@mind-studio` to that registry; export a GitHub token with `read:packages` before
installing:

```bash
export NODE_AUTH_TOKEN=<a GitHub PAT with read:packages>
npm install
```

## Dev

```bash
export NODE_AUTH_TOKEN=<PAT>
npm install
npm run dev          # http://localhost:3090
```

No Docker / CSS instance needed for dev — there is no backend.

## Ports

| Service | Port |
|---|---|
| mind-landing (Next.js) | 3090 |

(In production the container listens on `:3000` and Caddy proxies the apex to it.)
