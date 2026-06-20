import { Button } from "@mind-studio/ui";
import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { Badge } from "@/components/badge";
import { CtaButtons } from "@/components/cta-buttons";
import { Faq, type QA } from "@/components/faq";
import { LauncherMock } from "@/components/launcher-mock";
import { PodConstellation } from "@/components/pod-constellation";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { LIVE_APPS } from "@/lib/apps";
import { DOCS_URL, SOLID_URL } from "@/lib/links";

const FAQ_ITEMS: QA[] = [
  {
    q: "What is a pod?",
    a: "A pod is a personal data store on the web — think “your own private cloud, but tiny and yours.” Your calendar, contacts, files, and your AI agents' memory live there. Apps read and write to it with your permission instead of keeping their own copy of you.",
  },
  {
    q: "Who can see my data?",
    a: "Only who you allow. Every folder and file in your pod has its own access rules — you can grant read-only, grant a single app one folder, or revoke access entirely. Apps can't peek into each other's private folders without a grant.",
  },
  {
    q: "What happens if I want to leave?",
    a: "You take your pod with you. Because the pod is the real copy of your data, there's nothing to “export” — pod-migration tools move it between hosts without breaking your identity or the apps that point at it. No host can hold your data hostage.",
  },
  {
    q: "Do I have to self-host?",
    a: "No. mindpods.org hosts a pod for you in seconds. But you're never locked in: a pod can live on your own VPS, a community server, a friend's box, or your laptop — and move later.",
  },
  {
    q: "Which apps work today?",
    a: "Twelve apps are live right now — Dock, Drive, Builder, Codespaces, Chat, Calendar, Contacts, Notes, Photos, Slides, Whiteboard and Shell. Agents, Compass, Pages, Sheets and more are on the way — and because they all share one pod, each new app makes the others more useful.",
  },
  {
    q: "Is this Solid?",
    a: (
      <>
        Yes. Mind is built on{" "}
        <a className="text-primary underline-offset-4 hover:underline" href={SOLID_URL}>
          Solid
        </a>{" "}
        — the open web standard Tim Berners-Lee started in 2016 to give people back ownership of
        their data. No blockchain, no new infrastructure — just the web (HTTP and URLs). Mind adds a
        small shared rulebook (the Mind Protocol) so a whole family of apps and agents can work
        together on your one pod.
      </>
    ),
  },
];

const STATS: { value: string; label: string }[] = [
  { value: "12", label: "apps live today" },
  { value: "1", label: "sign-in for all of them" },
  { value: "0", label: "copies on a vendor's server" },
  { value: "∞", label: "hosts you can move to" },
];

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Create your pod",
    body: "Sign up in seconds and get a private space on the web that's yours — free during the alpha.",
  },
  {
    n: "02",
    title: "Sign in once",
    body: "Your WebID is one identity for every app. Apps never see your password — you log in at your own pod.",
  },
  {
    n: "03",
    title: "Open any app",
    body: "Every app reads and writes the same pod, so your data follows you — and you can swap any app anytime.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---------------------------------------------------------- */}
      <section className="relative mx-auto max-w-6xl px-5 pt-14 pb-10 text-center md:pt-20">
        <div className="reveal kicker" style={{ animationDelay: "0ms" }}>
          <span className="kicker-rule" aria-hidden />
          <span className="kicker-body">
            <span className="kicker-live">
              <span className="kicker-dot" aria-hidden />
              Now in alpha
            </span>
            <span className="kicker-sep" aria-hidden>
              /
            </span>
            <span className="kicker-muted">built on Solid</span>
          </span>
          <span className="kicker-rule kicker-rule--r" aria-hidden />
        </div>

        <h1
          className="reveal font-display mx-auto mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Your data. Your apps. <span className="headline-accent">Your AI.</span>
        </h1>

        <p
          className="reveal mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          A privacy-first home for your data — one place you own, where your apps and AI agents all
          work together. Switch apps, your data stays.
        </p>

        <CtaButtons className="reveal mt-9 justify-center" />
        <p
          className="reveal mt-4 text-sm text-muted-foreground"
          style={{ animationDelay: "320ms" }}
        >
          Free during the alpha · an early prototype · your data never leaves your control
        </p>

        <div className="reveal mt-12 md:mt-16" style={{ animationDelay: "420ms" }}>
          <PodConstellation />
        </div>
      </section>

      {/* ---- Stat band (a HUD readout of the proposition) ------------------ */}
      <Section className="!py-8">
        <Reveal>
          <dl className="glass-panel grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center">
                <dt className="font-display text-4xl font-semibold leading-none text-primary md:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 max-w-[16ch] text-xs text-muted-foreground md:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* ---- The inversion ------------------------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The big idea"
            title="Most apps store your data on their servers. Mind inverts that."
            lead="Your data lives in a pod you own. Apps and background workers read and write it over the web — they don't call each other. Switch apps, your data stays. Switch hosts, your apps follow you."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal delay={60}>
            <div className="tile h-full p-6">
              <p className="eyebrow mb-3">Today</p>
              <h3 className="font-display text-xl font-semibold">Apps own your data</h3>
              <div className="mt-5 space-y-2.5 font-mono text-xs text-muted-foreground">
                {[
                  ["Gmail", "Google's DB"],
                  ["Notion", "Notion's DB"],
                  ["your AI", "the vendor's DB"],
                ].map(([app, db]) => (
                  <div key={app} className="flex items-center gap-2">
                    <span className="rounded border border-border px-2 py-1">you</span>
                    <span className="opacity-40">→</span>
                    <span className="rounded border border-border px-2 py-1">{app}</span>
                    <span className="opacity-40">→</span>
                    <span className="rounded border border-border px-2 py-1 opacity-70">{db}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Three copies of “you,” in three locked databases — none of them yours.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="tile card-grad h-full p-6"
              style={{ borderColor: "color-mix(in oklch, var(--primary) 45%, transparent)" }}
            >
              <p className="eyebrow mb-3" style={{ color: "var(--primary)" }}>
                With pods
              </p>
              <h3 className="font-display text-xl font-semibold">You own your data</h3>
              <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs">
                {["Mail", "Notes", "Calendar", "AI"].map((a) => (
                  <span key={a} className="rounded border border-border px-2 py-1">
                    {a}
                  </span>
                ))}
                <span className="opacity-40">↘</span>
                <span className="rounded-md border border-primary/60 bg-primary/10 px-2.5 py-1 text-primary">
                  your pod
                </span>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                One copy of your data, in storage you own. Apps just visit — and you can swap any of
                them without losing a thing.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- AI that remembers you, not a vendor --------------------------- */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="The wedge"
              title="AI that remembers you — not a vendor."
              lead="Today's assistants are vendor-locked: ChatGPT's memory lives with OpenAI, Claude's with Anthropic. Switch, and you start over. Mind flips it — your agents' memory lives in your pod. Swap the model or the runtime; everything they've learned about you stays put."
            />
            <Button asChild variant="outline" className="mt-7">
              <a href={DOCS_URL}>Read the architecture →</a>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <div className="tile card-grad h-full p-6">
              <div className="grid gap-4">
                <div className="rounded-xl border border-border p-4">
                  <p className="eyebrow mb-2">Typical AI</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    you → assistant →{" "}
                    <span className="text-foreground/80">vendor's memory store</span>
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Leave the vendor and the memory stays behind. You're renting your assistant's
                    personality.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/50 bg-primary/5 p-4">
                  <p className="eyebrow mb-2" style={{ color: "var(--primary)" }}>
                    Mind agents
                  </p>
                  <p className="font-mono text-xs">
                    you → agents →{" "}
                    <span className="rounded border border-primary/60 bg-primary/10 px-1.5 py-0.5 text-primary">
                      your pod
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    The runtime is replaceable; the memory is yours. The same primitive that holds
                    your files holds what your AI knows.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- One pod, many apps ------------------------------------------- */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal delay={120} className="md:order-2">
            <LauncherMock />
          </Reveal>
          <Reveal className="md:order-1">
            <SectionHeading
              eyebrow="One source of truth"
              title="One pod, many apps"
              lead="Because your data lives in one place, every app sees the same information. “Family dinner — Sat 19:00” shows up in your calendar, gets referenced by your assistant when it drafts a reply, and travels with you when you switch apps next year."
            />
            <Button asChild variant="outline" className="mt-7">
              <Link href="/how-it-works">See how it works</Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ---- App suite ----------------------------------------------------- */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="The family"
              title="A whole suite, living on your pod"
              lead="Storage, documents, messaging, a calendar, your photos, your passwords — and an AI team. Every one of them reads and writes the same pod, so they all speak to each other for free."
            />
            <Button asChild variant="ghost">
              <Link href="/apps">All apps →</Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LIVE_APPS.slice(0, 8).map((app, i) => (
            <Reveal key={app.name} delay={i * 60}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- How it works (three steps) ----------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Get started"
            title="From stranger to pod owner in three steps"
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="tile h-full p-6">
                <p className="font-mono text-sm text-primary">{s.n}</p>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Mission band -------------------------------------------------- */}
      <Section width="narrow" className="text-center">
        <Reveal>
          <Badge variant="outline" className="mb-5 text-muted-foreground">
            Mind's mission
          </Badge>
          <blockquote className="font-display text-2xl font-medium leading-snug md:text-3xl">
            “This is for everyone.”
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            Tim Berners-Lee · London 2012 — on the web he invented for all
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
            Two decades on, the same web is fenced off — your data sits in vendors' databases. Mind
            is the next move of “for everyone”: this time the line we draw is that{" "}
            <span className="text-foreground">privacy is also for everyone</span> — by architecture,
            not by toggle, not by a trust-us promise.
          </p>
          <Button asChild variant="link" className="mt-4">
            <a href={DOCS_URL}>Read the architecture →</a>
          </Button>
        </Reveal>
      </Section>

      {/* ---- FAQ ----------------------------------------------------------- */}
      <Section width="narrow">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="Frequently asked" align="center" />
        </Reveal>
        <Reveal delay={80} className="mt-9">
          <Faq items={FAQ_ITEMS} />
        </Reveal>
      </Section>

      {/* ---- Closing CTA --------------------------------------------------- */}
      <Section className="text-center">
        <Reveal>
          <div className="glass-panel card-grad mx-auto max-w-3xl overflow-hidden rounded-2xl px-6 py-14">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Get your own corner of the web.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Create a pod in seconds, free while we're in alpha. One sign-in, every app, your data.
            </p>
            <CtaButtons className="mt-8 justify-center" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
