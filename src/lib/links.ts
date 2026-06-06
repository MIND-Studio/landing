/**
 * Every outbound URL the marketing site points at, in one place.
 *
 * Values are read from NEXT_PUBLIC_* (inlined at build time by the Dockerfile /
 * release workflow) with production defaults, so `npm run dev` works with no env
 * file and the prod image bakes in the real hosts. Pages must import from here —
 * never hard-code a mindpods.org URL.
 */

/** Self-serve "Create your pod" — the live CommunitySolidServer registration page. */
export const POD_REGISTER_URL =
  process.env.NEXT_PUBLIC_POD_REGISTER_URL ??
  "https://pods.mindpods.org/.account/login/password/register/";

/** The post-login front door (the dock) — "Sign in". */
export const DOCK_URL =
  process.env.NEXT_PUBLIC_APP_DOCK_URL ?? "https://dock.mindpods.org";

export const DRIVE_URL =
  process.env.NEXT_PUBLIC_APP_DRIVE_URL ?? "https://drive.mindpods.org";

export const BUILDER_URL =
  process.env.NEXT_PUBLIC_APP_BUILDER_URL ?? "https://builder.mindpods.org";

export const CODESPACES_URL =
  process.env.NEXT_PUBLIC_APP_CODESPACES_URL ?? "https://codespaces.mindpods.org";

/** The published architecture / protocol spec (external). */
export const DOCS_URL =
  process.env.NEXT_PUBLIC_DOCS_URL ??
  "https://mind-studio.github.io/mind-specification/";

export const SOLID_URL = "https://solidproject.org";
