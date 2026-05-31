# This is NOT the Next.js you know

This version (16.2.6) has breaking changes — APIs, conventions, and file structure
may differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# mind-landing-v0 — agent rules

The **public, pre-login marketing site** for mindpods.org. It is the apex
(`mindpods.org`) front door and exists to explain Mind and convert a stranger into
a pod owner. Hand-off, not product: every CTA links out to `pod.mindpods.org`
(create) or `dock.mindpods.org` (sign in).

## Hard boundaries (what this app must NEVER grow)

- **No auth, no sessions, no pod I/O.** No `@inrupt/*`, no `useSession`, no
  `/api/*` account routes. If you find yourself reaching for a Solid client, you
  are building the dock, not the landing page. Stop.
- **No database.** No `better-sqlite3`, no `.css-data/`, no seed scripts. The site
  is static (SSG); everything renders from in-repo copy + `public/` images.
- **No user content.** It collects nothing. (No waitlist form in v0 — the CTA is
  self-serve registration on the pod.)

## Design system & voice

Uses the shared **`@mind-studio/ui`** on the **default Mind brand** (teal-green),
**dark** default — same as the dock. `globals.css` does
`@import "../../node_modules/@mind-studio/ui/dist/styles.css"` +
`@source "../../node_modules/@mind-studio/ui/dist"`; `layout.tsx` sets
`<html data-mind-theme="mind">` + `<ThemeProvider theme={mind} defaultTheme="dark"
enableSystem={false}>`. Build UI from `@mind-studio/ui` components
(`Button`, `Card`, `Badge`, `Accordion`, `Logo`, `Symbol`, `Pattern`, `cn`).
Installs from **GitHub Packages** — `export NODE_AUTH_TOKEN=<PAT read:packages>`
before `npm install`.

Voice = **for everyone, plain words**. The marketing pages may name the concepts
(pod, WebID, Solid) because *explaining* them is the job — but lead with plain
language ("your own private space", "one sign-in") and treat the jargon as the
reveal, mirroring `architecture/src/architecture.md`. Source copy from
`../../architecture/src/{architecture,apps,roadmap}.md`.

## Outbound links live in one place

All external URLs (register, dock, drive, builder, codespaces, docs) come from
`src/lib/links.ts`, which reads `NEXT_PUBLIC_*` with production defaults. Don't
hard-code `mindpods.org` URLs in pages.

## Ports

Dev app `:3090`. Production container listens on `:3000` (Caddy proxies the apex).
