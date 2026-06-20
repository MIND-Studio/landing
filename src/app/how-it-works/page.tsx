import type { Metadata } from "next";
import { CtaButtons } from "@/components/cta-buttons";
import { Section, SectionHeading } from "@/components/section";
import { SOLID_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Mind in plain English: your photos, files and calendar live in one private space that's yours, and apps gather around it. One sign-in works everywhere, and you choose who sees what.",
};

// Small inline line-icons (24x24, currentColor) so the page stays jargon-free and
// friendly without pulling in an icon library.
const ICONS: Record<string, React.ReactNode> = {
  profile: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  message: <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />,
  sparkle: <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  home: <path d="M4 11l8-7 8 7M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />,
  server: (
    <>
      <rect x="4" y="4" width="16" height="7" rx="2" />
      <rect x="4" y="13" width="16" height="7" rx="2" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18H7z" />,
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0M16 7a3 3 0 0 1 0 6M15 19a6 6 0 0 1 3-5" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.6-7-9.3A3.7 3.7 0 0 1 12 7a3.7 3.7 0 0 1 7 3.7C19 15.4 12 20 12 20z" />
  ),
};

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}

const INSIDE = [
  { icon: "profile", name: "Your profile", note: "the basics about you", tag: "shared" },
  {
    icon: "calendar",
    name: "Calendar, contacts & photos",
    note: "so apps you trust stay in sync",
    tag: "shared",
  },
  {
    icon: "message",
    name: "Your messages",
    note: "notes from other people's spaces",
    tag: "private",
  },
  {
    icon: "sparkle",
    name: "Your AI's memory",
    note: "what your assistants know about you",
    tag: "private",
  },
  {
    icon: "lock",
    name: "A private corner per app",
    note: "each app's own stuff, walled off",
    tag: "private",
  },
];

const SIGN_IN_STEPS = [
  { n: "01", h: "You tap “Sign in” on an app.", d: "Drive or Chat, say." },
  {
    n: "02",
    h: "It asks where your space is.",
    d: "You point it at yours — the same one, every time.",
  },
  {
    n: "03",
    h: "It sends you to your own sign-in page.",
    d: "Like “Sign in with Google,” except the account is yours, not a company's.",
  },
  {
    n: "04",
    h: "You log in at your space.",
    d: "Password or passkey. Your space handles it — the app never sees it.",
  },
  {
    n: "05",
    h: "You're in.",
    d: "The app can now use only the things you've chosen to share with it.",
  },
];

const HOSTS = [
  {
    icon: "home",
    name: "Your own computer",
    desc: "A home server, a Raspberry Pi, or even your laptop.",
  },
  {
    icon: "server",
    name: "A rented server",
    desc: "A cheap virtual server you rent by the month.",
  },
  {
    icon: "cloud",
    name: "A hosting service",
    desc: "Pay-monthly like mindpods.org — and leave whenever.",
  },
  {
    icon: "people",
    name: "A community host",
    desc: "A local non-profit running shared hosting for its members.",
  },
  {
    icon: "heart",
    name: "A friend's server",
    desc: "Someone you trust with a bit of spare capacity.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="In plain English"
          title="How Mind works"
          lead="No jargon required. Here's the whole idea: your things live in one private space that's yours, and your apps gather around it."
          align="center"
        />
      </Section>

      {/* What's inside your space */}
      <Section className="py-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Your space</h2>
            <p className="mt-3 text-muted-foreground">
              Think of it as your own private corner of the web — like a tiny personal cloud that
              belongs to you. Some things you keep <span className="text-foreground">shared</span>,
              so the apps you trust stay in sync; everything else stays{" "}
              <span className="text-foreground">private</span> until you say otherwise.
            </p>
            <p className="mt-3 text-muted-foreground">
              Apps can use what you've shared — a date you saved in one app shows up in another —
              but they can never peek at anything you haven't handed them.
            </p>
          </div>

          <div className="glass-panel card-grad overflow-hidden rounded-2xl p-5">
            <div className="flex items-center gap-2 px-1 pb-3">
              <span className="text-primary">
                <Icon name="home" />
              </span>
              <span className="font-display text-lg font-semibold">Your space</span>
            </div>
            <ul className="space-y-2">
              {INSIDE.map((row) => (
                <li
                  key={row.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-3"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon name={row.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{row.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{row.note}</span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[0.68rem] font-medium ${
                      row.tag === "shared"
                        ? "bg-primary/15 text-primary"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {row.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Sign-in flow */}
      <Section className="py-8">
        <SectionHeading
          eyebrow="One sign-in, every app"
          title="You sign in to your space — not to the app"
          lead="This is the trick that makes one sign-in work everywhere. Your password only ever touches your own space."
        />
        <ol className="mt-9 grid gap-4 md:grid-cols-5">
          {SIGN_IN_STEPS.map((s) => (
            <li key={s.n} className="tile p-5">
              <div className="font-mono text-sm text-primary">{s.n}</div>
              <h3 className="mt-2 font-medium leading-snug">{s.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Open two apps and they each use different things in the same space — but it's still one
          you. It all runs on{" "}
          <a className="text-primary underline-offset-4 hover:underline" href={SOLID_URL}>
            Solid
          </a>
          , an open web standard, so your sign-in isn't tied to any one company.
        </p>
      </Section>

      {/* Where your space lives */}
      <Section className="py-8">
        <SectionHeading
          eyebrow="Your choice, always"
          title="Where your space lives is up to you"
          lead="No company owns your space. Pick where yours runs — and move it later without losing your sign-in or breaking your apps. Whoever hosts it just runs the software; they don't own your things."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOSTS.map((h) => (
            <div key={h.name} className="tile p-5">
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Icon name={h.icon} />
              </span>
              <h3 className="mt-4 font-medium">{h.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Ready? Get your space on mindpods.org." align="center" />
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We'll set it up for you in seconds — and you can take it elsewhere whenever you like.
        </p>
        <CtaButtons className="mt-8 justify-center" />
      </Section>
    </>
  );
}
