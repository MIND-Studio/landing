import type { AppEntry } from "@/components/app-card";
import { BUILDER_URL, CODESPACES_URL, DOCK_URL, DRIVE_URL } from "@/lib/links";

/**
 * The Mind app family. "live" apps have a production host on mindpods.org and a
 * working link; "soon" apps are from the architecture spec (apps.md) and listed
 * without a link. Taglines paraphrase architecture/src/apps.md.
 */
export const LIVE_APPS: AppEntry[] = [
  {
    name: "Dock",
    tagline: "Your front door — launch every app, edit your profile, manage your account.",
    href: DOCK_URL,
    host: "dock.mindpods.org",
    status: "live",
  },
  {
    name: "Drive",
    tagline: "A file browser for your pod — upload, preview, and share, all stored in storage you own.",
    href: DRIVE_URL,
    host: "drive.mindpods.org",
    status: "live",
  },
  {
    name: "Builder",
    tagline: "Wish an app into being — describe what you want and watch it get built into your pod.",
    href: BUILDER_URL,
    host: "builder.mindpods.org",
    status: "live",
  },
  {
    name: "Codespaces",
    tagline: "git push your site straight into your pod, then publish it to the web.",
    href: CODESPACES_URL,
    host: "codespaces.mindpods.org",
    status: "live",
  },
];

export const SOON_APPS: AppEntry[] = [
  { name: "Agents", tagline: "A team of AI specialists whose memory lives in your pod — not the model vendor's.", status: "soon" },
  { name: "Chat", tagline: "Pod-to-pod conversations, with no central server in the middle.", status: "soon" },
  { name: "Social", tagline: "Posts, friends, and async game duels — your timeline, your rules.", status: "soon" },
  { name: "Docs", tagline: "Notes and documents that live in your pod, readable by every app you trust.", status: "soon" },
  { name: "Todo", tagline: "Shared task lists — hand a task to a friend or an agent with the same grant.", status: "soon" },
  { name: "Calendar", tagline: "A surface over your /calendar/ — one set of events every app can see.", status: "soon" },
  { name: "Contacts", tagline: "Your address book as pod data, shared across the apps that need it.", status: "soon" },
  { name: "Health", tagline: "Personal health records that never leave your pod.", status: "soon" },
  { name: "Marketplace", tagline: "Privacy-first listings — cash and meet, pod-first, no platform in between.", status: "soon" },
  { name: "Compass", tagline: "The operator's cockpit for your worker fleet — pause agents, approve drafts, watch the log.", status: "soon" },
  { name: "Video", tagline: "Edit and publish video with your pod as the source of truth.", status: "soon" },
  { name: "Flow", tagline: "Wire your apps and agents together — automations that read and write your pod.", status: "soon" },
];
