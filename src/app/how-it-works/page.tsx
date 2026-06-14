import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { CtaButtons } from "@/components/cta-buttons";
import { SOLID_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Pods, WebID, and single sign-on in plain English. Your data lives in a pod you own; apps sign you in against your pod and read only what you grant.",
};

const SIGN_IN_STEPS = [
  { n: "01", h: "You click “Sign in” on an app.", d: "Say, Drive or Chat." },
  { n: "02", h: "The app asks: what's your pod?", d: "You point it at your pod — the same one, every time." },
  { n: "03", h: "The app sends you to your pod's login page.", d: "Same shape as “Sign in with Google,” except the identity is yours, not a platform's." },
  { n: "04", h: "You log in at your pod.", d: "Password, passkey, or hardware key. Your pod host handles it — the app never sees your credentials." },
  { n: "05", h: "You're back in the app, signed in.", d: "It can now read and write only the folders you granted — typically its own." },
];

const HOSTS = [
  { icon: "⌂", name: "A home box", desc: "A Raspberry Pi, NAS, or mini-PC in your house." },
  { icon: "☁", name: "Your VPS", desc: "A cheap virtual server you rent." },
  { icon: "◆", name: "A commercial host", desc: "Pod-as-a-service like mindpods.org — pay monthly, leave anytime." },
  { icon: "▲", name: "A community server", desc: "A local non-profit running shared pod infrastructure." },
  { icon: "◉", name: "A friend's box", desc: "Someone you trust with spare server capacity." },
  { icon: "▢", name: "Your laptop", desc: "Local-first, sync up when you're online." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="In plain English"
          title="How Mind works"
          lead="No jargon required. Here's the whole idea: your data lives in one private space you own, and apps gather around it."
          align="center"
        />
      </Section>

      {/* What a pod is + what's inside */}
      <Section className="py-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Your pod</h2>
            <p className="mt-3 text-muted-foreground">
              A pod is a personal data store on the web — “your own private cloud, but tiny and
              yours.” It looks like a folder: shared spaces for your calendar, contacts and
              photos, plus a private sandbox for each app you use. Each item has its own access
              rules, so you decide who sees what.
            </p>
            <p className="mt-3 text-muted-foreground">
              Apps can read your <em>shared</em> data (so a date you wrote in one app shows up in
              another) but can't peek into another app's private folder without your grant.
            </p>
          </div>
          <div className="tile p-6 font-mono text-sm">
            <div className="text-primary">you.mindpods.org/</div>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li>├─ profile/card <span className="opacity-60"># who you are</span></li>
              <li>├─ calendar/ <span className="opacity-60"># your events</span></li>
              <li>├─ contacts/ <span className="opacity-60"># your address book</span></li>
              <li>├─ photos/ <span className="opacity-60"># your images</span></li>
              <li>├─ inbox/ <span className="opacity-60"># messages from other pods</span></li>
              <li>├─ agents/ <span className="opacity-60"># your AI agents</span></li>
              <li>└─ apps/ <span className="opacity-60"># a sandbox per app</span></li>
            </ul>
            <div className="mt-4 flex gap-4 text-xs">
              <span><span className="text-primary">▍</span> shared — apps you trust can read</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Sign-in flow */}
      <Section className="py-8">
        <SectionHeading
          eyebrow="One sign-in, every app"
          title="You sign in to your pod — not to the app"
          lead="This is the magic that makes one identity work everywhere. Your password only ever touches your own pod."
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
          Sign in to two apps and they read different folders in the same pod — but it's still
          one you. That's standard{" "}
          <a className="text-primary underline-offset-4 hover:underline" href={SOLID_URL}>
            Solid
          </a>{" "}
          identity (a WebID): a web address that points to a document describing you.
        </p>
      </Section>

      {/* Where pods live */}
      <Section className="py-8">
        <SectionHeading
          eyebrow="Your choice, always"
          title="Where your pod lives is up to you"
          lead="Pods aren't owned by any company. Pick where yours runs — and move it later without losing your identity or breaking your apps. Whoever hosts it just runs the server; they don't own your data."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOSTS.map((h) => (
            <div key={h.name} className="tile p-5">
              <div className="text-2xl" aria-hidden>
                {h.icon}
              </div>
              <h3 className="mt-2 font-medium">{h.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Ready? Get a pod on mindpods.org." align="center" />
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We'll host it for you in seconds — and you can take it elsewhere whenever you like.
        </p>
        <CtaButtons className="mt-8 justify-center" />
      </Section>
    </>
  );
}
