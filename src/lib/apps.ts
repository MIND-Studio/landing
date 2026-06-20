import type { AppEntry } from "@/components/app-card";
import {
  BUILDER_URL,
  CALENDAR_URL,
  CHAT_URL,
  CODESPACES_URL,
  CONTACTS_URL,
  DOCK_URL,
  DRIVE_URL,
  NOTES_URL,
  PHOTOS_URL,
  SHELL_URL,
  SLIDES_URL,
  WHITEBOARD_URL,
} from "@/lib/links";

/**
 * The Mind app family. "live" apps are deployed to production today (each at
 * `<name>.apps.mindpods.org`) with a working link; "soon" apps come from the
 * architecture spec (apps.md / roadmap.md) and are listed without a link.
 * Taglines paraphrase mind-specification/src/apps.md.
 */
export const LIVE_APPS: AppEntry[] = [
  {
    name: "Dock",
    tagline: "Your front door — one sign-in, every app, your profile and account in one place.",
    href: DOCK_URL,
    host: "dock.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Drive",
    tagline:
      "A file browser for your pod — upload, preview, and share, all stored in storage you own.",
    href: DRIVE_URL,
    host: "drive.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Builder",
    tagline:
      "Wish an app into being — describe what you want and watch it get built into your pod.",
    href: BUILDER_URL,
    host: "builder.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Codespaces",
    tagline: "git push your site straight into your pod, then publish it to the web.",
    href: CODESPACES_URL,
    host: "codespaces.mindpods.org",
    status: "live",
  },
  {
    name: "Chat",
    tagline: "Pod-to-pod conversations with real-time delivery — no central server in the middle.",
    href: CHAT_URL,
    host: "chat.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Calendar",
    tagline: "A surface over your /calendar/ — one set of events every trusted app can see.",
    href: CALENDAR_URL,
    host: "calendar.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Contacts",
    tagline: "Your address book as pod data, shared across the apps that need it.",
    href: CONTACTS_URL,
    host: "contacts.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Notes",
    tagline: "Notes and documents that live in your pod, readable by every app you trust.",
    href: NOTES_URL,
    host: "notes.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Photos",
    tagline: "A photo gallery backed by your pod — your memories, in storage you own.",
    href: PHOTOS_URL,
    host: "photos.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Slides",
    tagline: "Build and publish presentation decks stored as files in your pod.",
    href: SLIDES_URL,
    host: "slides.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Whiteboard",
    tagline: "A collaborative canvas — draw and live-collaborate with boards kept in your pod.",
    href: WHITEBOARD_URL,
    host: "whiteboard.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Shell",
    tagline:
      "An identity surface with a zero-knowledge vault — your passwords, encrypted in your pod.",
    href: SHELL_URL,
    host: "shell.apps.mindpods.org",
    status: "live",
  },
];

export const SOON_APPS: AppEntry[] = [
  {
    name: "Agents",
    tagline: "A team of AI specialists whose memory lives in your pod — not the model vendor's.",
    status: "soon",
  },
  {
    name: "Compass",
    tagline:
      "The operator's cockpit for your worker fleet — pause agents, approve drafts, watch the log.",
    status: "soon",
  },
  {
    name: "Issues",
    tagline: "Work tracking where humans and agents are teammates on the same board.",
    status: "soon",
  },
  {
    name: "Pages",
    tagline: "Notion-style pages and databases written straight to your pod.",
    status: "soon",
  },
  {
    name: "Sheets",
    tagline: "Spreadsheets stored as plain files in your pod, readable by any app.",
    status: "soon",
  },
  {
    name: "Sites",
    tagline: "Wish a website in chat — it gets built, published, and lives in your pod.",
    status: "soon",
  },
  {
    name: "Videos",
    tagline: "Drop phone clips and let AI auto-edit and render, your pod as the source of truth.",
    status: "soon",
  },
  {
    name: "Shop",
    tagline:
      "Commerce, pod-first — own your products, orders, and customers; no platform takes a cut.",
    status: "soon",
  },
  { name: "Health", tagline: "Personal health records that never leave your pod.", status: "soon" },
  {
    name: "Social",
    tagline: "Posts, friends, and async game duels — your timeline, your rules.",
    status: "soon",
  },
];
