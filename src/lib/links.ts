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

/**
 * Sibling Mind apps. In production the release workflow bakes these in as
 * NEXT_PUBLIC_APP_*; the defaults below mirror the real cutover scheme — every
 * app lives at `<name>.apps.mindpods.org`, except Codespaces (its own subdomain)
 * and the pod server (pods.mindpods.org).
 */

/** The post-login front door (the dock) — "Sign in". */
export const DOCK_URL = process.env.NEXT_PUBLIC_APP_DOCK_URL ?? "https://dock.apps.mindpods.org";

export const DRIVE_URL = process.env.NEXT_PUBLIC_APP_DRIVE_URL ?? "https://drive.apps.mindpods.org";

export const BUILDER_URL =
  process.env.NEXT_PUBLIC_APP_BUILDER_URL ?? "https://builder.apps.mindpods.org";

export const CHAT_URL = process.env.NEXT_PUBLIC_APP_CHAT_URL ?? "https://chat.apps.mindpods.org";

export const WHITEBOARD_URL =
  process.env.NEXT_PUBLIC_APP_WHITEBOARD_URL ?? "https://whiteboard.apps.mindpods.org";

export const CALENDAR_URL =
  process.env.NEXT_PUBLIC_APP_CALENDAR_URL ?? "https://calendar.apps.mindpods.org";

export const CONTACTS_URL =
  process.env.NEXT_PUBLIC_APP_CONTACTS_URL ?? "https://contacts.apps.mindpods.org";

export const NOTES_URL = process.env.NEXT_PUBLIC_APP_NOTES_URL ?? "https://notes.apps.mindpods.org";

export const PHOTOS_URL =
  process.env.NEXT_PUBLIC_APP_PHOTOS_URL ?? "https://photos.apps.mindpods.org";

export const SLIDES_URL =
  process.env.NEXT_PUBLIC_APP_SLIDES_URL ?? "https://slides.apps.mindpods.org";

export const SHELL_URL = process.env.NEXT_PUBLIC_APP_SHELL_URL ?? "https://shell.apps.mindpods.org";

export const CODESPACES_URL =
  process.env.NEXT_PUBLIC_APP_CODESPACES_URL ?? "https://codespaces.mindpods.org";

/** The published architecture / protocol spec (external). */
export const DOCS_URL =
  process.env.NEXT_PUBLIC_DOCS_URL ?? "https://mind-studio.github.io/mind-specification/";

export const SOLID_URL = "https://solidproject.org";
