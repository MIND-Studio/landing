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
 * Taglines are written in plain language — "your space" rather than "pod", no
 * file paths or protocol jargon — to match the marketing voice (for everyone).
 */
export const LIVE_APPS: AppEntry[] = [
  {
    name: "Dock",
    tagline: "Your front door — one sign-in that opens every app, with your profile in one place.",
    href: DOCK_URL,
    host: "dock.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Drive",
    tagline: "All your files in one place you own — upload, preview, and share in a click.",
    href: DRIVE_URL,
    host: "drive.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Builder",
    tagline: "Describe an app in plain words and watch it get built, right in your space.",
    href: BUILDER_URL,
    host: "builder.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Codespaces",
    tagline: "Push your code and publish your website to the web, hosted in your own space.",
    href: CODESPACES_URL,
    host: "codespaces.mindpods.org",
    status: "live",
  },
  {
    name: "Chat",
    tagline: "Real-time messaging with no company sitting in the middle of your conversations.",
    href: CHAT_URL,
    host: "chat.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Calendar",
    tagline: "One calendar your trusted apps can all see — events that live in your space.",
    href: CALENDAR_URL,
    host: "calendar.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Contacts",
    tagline: "One address book, shared with the apps that need it — and no one else.",
    href: CONTACTS_URL,
    host: "contacts.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Notes",
    tagline: "Notes and documents that live in your space, open to the apps you trust.",
    href: NOTES_URL,
    host: "notes.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Photos",
    tagline: "Your photo gallery — every memory kept in a space that's yours.",
    href: PHOTOS_URL,
    host: "photos.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Slides",
    tagline: "Build and share presentation decks, kept as files in your own space.",
    href: SLIDES_URL,
    host: "slides.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Whiteboard",
    tagline: "A shared canvas — sketch and collaborate live, with boards kept in your space.",
    href: WHITEBOARD_URL,
    host: "whiteboard.apps.mindpods.org",
    status: "live",
  },
  {
    name: "Shell",
    tagline: "Your passwords, sealed so tightly that not even we can read them.",
    href: SHELL_URL,
    host: "shell.apps.mindpods.org",
    status: "live",
  },
];

export const SOON_APPS: AppEntry[] = [
  {
    name: "Agents",
    tagline: "A team of AI helpers whose memory lives in your space — not an AI company's.",
    status: "soon",
  },
  {
    name: "Compass",
    tagline:
      "Your control room for those helpers — pause them, approve their work, see what they did.",
    status: "soon",
  },
  {
    name: "Issues",
    tagline: "Track work where people and AI helpers are teammates on the same board.",
    status: "soon",
  },
  {
    name: "Pages",
    tagline: "Docs and simple databases, written straight to your own space.",
    status: "soon",
  },
  {
    name: "Sheets",
    tagline: "Spreadsheets kept as plain files in your space, open to any app.",
    status: "soon",
  },
  {
    name: "Videos",
    tagline: "Drop in phone clips and let AI cut them together — your space as the master copy.",
    status: "soon",
  },
  {
    name: "Shop",
    tagline:
      "Sell your own way — own your products, orders and customers; no platform takes a cut.",
    status: "soon",
  },
  {
    name: "Health",
    tagline: "Personal health records that never leave your own space.",
    status: "soon",
  },
  {
    name: "Social",
    tagline: "Posts, friends and async game duels — your timeline, your rules.",
    status: "soon",
  },
];
