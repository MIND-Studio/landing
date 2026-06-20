import { Button } from "@mind-studio/ui";
import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { Badge } from "@/components/badge";
import { CtaButtons } from "@/components/cta-buttons";
import { Faq, type QA } from "@/components/faq";
import { FigurePanel } from "@/components/figure-panel";
import { PodConstellation } from "@/components/pod-constellation";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { LIVE_APPS } from "@/lib/apps";
import { DOCS_URL, SOLID_URL } from "@/lib/links";

const FAQ_ITEMS: QA[] = [
  {
    q: "What's a “space” — and what's a pod?",
    a: "Your space is your own private corner of the web — like a tiny personal cloud that belongs to you. Your photos, calendar, files, and even what your AI assistant knows about you all live there. (The techie name for it is a “pod.”) Apps borrow what they need with your permission, instead of each keeping their own copy of you.",
  },
  {
    q: "Who can see my things?",
    a: "Only the people and apps you allow. You can share one folder with one app, keep it read-only, or take access back at any time. Apps can't peek at anything you haven't shared with them.",
  },
  {
    q: "What if I want to leave?",
    a: "You take your space with you. Because it holds the real copy of your things, there's nothing to “export” — tools move it to another home without breaking your sign-in or the apps you use. No company can hold your data hostage.",
  },
  {
    q: "Do I have to set it up myself?",
    a: "No. mindpods.org gives you a space in seconds, free during the alpha. But you're never stuck with us: your space can live on your own computer, a friend's server, or a community host — and move later if you change your mind.",
  },
  {
    q: "Which apps work today?",
    a: "Twelve are live right now — Dock, Drive, Builder, Codespaces, Chat, Calendar, Contacts, Notes, Photos, Slides, Whiteboard and Shell. More are on the way, and because they all share one space, each new app makes the others more useful.",
  },
  {
    q: "Is this built on something open?",
    a: (
      <>
        Yes. Mind is built on{" "}
        <a className="text-primary underline-offset-4 hover:underline" href={SOLID_URL}>
          Solid
        </a>{" "}
        — an open web standard Tim Berners-Lee started to give people back ownership of their data.
        No blockchain, no lock-in, just the open web. That's why your space is never tied to us.
      </>
    ),
  },
];

const STATS: { value: string; label: string }[] = [
  { value: "12", label: "apps live today" },
  { value: "1", label: "sign-in for all of them" },
  { value: "0", label: "ads or trackers, ever" },
  { value: "100%", label: "yours to keep" },
];

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Get your space",
    body: "Sign up in seconds and get a private corner of the web that's yours — free during the alpha.",
  },
  {
    n: "02",
    title: "Sign in once",
    body: "One sign-in works across every app. Apps never see your password — you sign in at your own space.",
  },
  {
    n: "03",
    title: "Open any app",
    body: "Every app reads and writes the same space, so your things follow you — and you can swap any app anytime.",
  },
];

const PRIVACY_POINTS: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "Nothing to leak",
    body: "There's no company database holding everyone's life, so there's simply nothing in the middle to spill.",
    icon: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  },
  {
    title: "You hold the keys",
    body: "Share one thing with one app, keep it read-only, and take it back whenever you like.",
    icon: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M11 12l9-9M17 6l2 2M14 9l2 2" />
      </>
    ),
  },
  {
    title: "Sealed tight",
    body: "Your passwords are locked so well that not even we can read them.",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
];

const PORTABLE_POINTS: { title: string; body: string }[] = [
  {
    title: "Nothing to export",
    body: "Your space is the real copy, so there's nothing to download and re-upload.",
  },
  {
    title: "Move it anytime",
    body: "Pick it up and put it down somewhere else whenever you like.",
  },
  {
    title: "Same you everywhere",
    body: "Your one sign-in comes along, so every app keeps working.",
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
            <span className="kicker-muted">free to try</span>
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
          One private space on the web that's truly yours — where all your apps and AI helpers work
          together. Switch apps anytime; your things stay put.
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

      {/* ---- Stat band ---------------------------------------------------- */}
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

      {/* ---- The big idea ------------------------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The big idea"
            title="Most apps keep your stuff on their servers. Mind flips that."
            lead="Your photos, chats and files live in one private space that's yours. Apps just visit to do their job — so when you switch apps, everything stays right where it is."
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          <FigurePanel
            src="/diagrams/the-shift.svg"
            alt="Today your photos, messages and files each sit locked inside a separate company's app. With Mind they all live in one private space you own, and your apps simply visit — so you can switch apps anytime and your things stay put."
          />
        </Reveal>
      </Section>

      {/* ---- Everything in sync (interop) -------------------------------- */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Everything in sync"
              title="Save it once. Every app just knows."
              lead="Your apps all look at the same space, so they're never out of step. Add a dinner to your calendar and your assistant already knows — nothing to copy, export, or type twice."
            />
            <p className="mt-6 text-sm text-muted-foreground">
              Built on the open web, so your space is never locked to us.
            </p>
            <Button asChild variant="outline" className="mt-7">
              <Link href="/how-it-works">See how it works</Link>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <FigurePanel
              src="/diagrams/one-place.svg"
              alt="A single plan saved in your space — dinner with Mum on Saturday at 7pm — shows up the same in your Calendar, your assistant and your messages."
            />
          </Reveal>
        </div>
      </Section>

      {/* ---- AI that's yours (the wedge) --------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="AI that's yours"
            title="AI that remembers you — not a company."
            lead="Most assistants keep what they learn about you on their own servers. Switch, and you start over. With Mind, what your assistant knows lives in your space — so you can change assistants and it still knows you."
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          <FigurePanel
            src="/diagrams/ai-memory.svg"
            alt="What your AI assistant has learned about you — your preferences, an allergy to flag, a hobby — is kept in your space, not the AI company's. You can switch assistants anytime and it still knows you."
          />
        </Reveal>
      </Section>

      {/* ---- Private by design ------------------------------------------- */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal delay={120} className="md:order-2">
            <SectionHeading
              eyebrow="Private by design"
              title="Privacy that's built in — not a setting to trust."
              lead="There's no giant pile of everyone's data to leak, sell, or train on. You choose who sees what, one thing at a time — and you can change your mind whenever."
            />
            <Button asChild variant="outline" className="mt-7">
              <Link href="/privacy">How we handle privacy</Link>
            </Button>
          </Reveal>
          <Reveal className="md:order-1">
            <FigurePanel
              src="/diagrams/you-decide.svg"
              alt="Inside your space your photos and files stay private, while you've shared just your address with the Shop app, which can see only that one thing — and you can take it back at any time."
            />
          </Reveal>
        </div>
      </Section>

      {/* ---- Three reasons it stays private (icon trio) ------------------ */}
      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {PRIVACY_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="tile h-full p-6">
                <span className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {p.icon}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Yours to keep (portability) --------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="No lock-in"
            title="Yours to keep — and to take anywhere."
            lead="Your space goes where you go. Move it to another home and nothing breaks — same sign-in, same apps, same things."
            align="center"
          />
        </Reveal>
        <Reveal delay={80} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {["mindpods.org", "your own computer", "a friend's server", "a community host"].map(
            (h) => (
              <span
                key={h}
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground"
              >
                {h}
              </span>
            ),
          )}
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PORTABLE_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="tile h-full p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- App suite ----------------------------------------------------- */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="The family"
              title="A whole suite, all in your space"
              lead="Files, photos, messages, a calendar, your passwords — and an AI team. Every one of them works from the same space, so they all fit together without any setup."
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
            title="From stranger to space owner in three steps"
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
            Two decades on, the same web is fenced off — your life sits in companies' databases.
            Mind is the next step of “for everyone”: this time the line we draw is that{" "}
            <span className="text-foreground">privacy is for everyone too</span> — built into how it
            works, not a promise you have to trust.
          </p>
          <Button asChild variant="link" className="mt-4">
            <a href={DOCS_URL}>Read the deeper story →</a>
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
              Set up your space in seconds, free while we're in alpha. One sign-in, every app, all
              yours.
            </p>
            <CtaButtons className="mt-8 justify-center" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
