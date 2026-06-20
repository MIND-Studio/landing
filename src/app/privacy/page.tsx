import type { Metadata } from "next";
import { CtaButtons } from "@/components/cta-buttons";
import { FigurePanel } from "@/components/figure-panel";
import { Section, SectionHeading } from "@/components/section";
import { SOLID_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy built into how Mind works, not promised in a policy. Your space holds the real copy of your things, you choose who sees what, and no host can hold your data hostage.",
};

const PRINCIPLES = [
  {
    title: "Your space holds the real copy",
    body: "Only your space has the true copy of your things. Apps can come and go without ever touching it.",
    consequence:
      "There's no “export my data” button — because nothing is being held somewhere else to hand back.",
  },
  {
    title: "Your AI's memory is yours",
    body: "What your assistants learn about you stays in your space. Switch to a different assistant and everything it knew is still there.",
    consequence:
      "Your assistant's memory belongs to you, not to whichever AI company you used last.",
  },
  {
    title: "Your password only touches your space",
    body: "Apps never see how you log in. You sign in at your own space, and apps get only what you hand them — read-only, one folder, or nothing at all.",
    consequence: "An app gets the key to one room, never the whole house.",
  },
  {
    title: "You can always leave",
    body: "Move your space to another home — your own computer, a community host, a friend's server — without breaking your sign-in or the apps you use.",
    consequence: "No company can lock you in. Hosting is a service you buy, never a trap.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="Built in, not promised"
          title="Privacy you can't be talked out of"
          lead="Most products ask you to trust a privacy policy. Mind is built so your things were never theirs to misuse in the first place. Here's what that means in plain terms."
          align="center"
        />
      </Section>

      <Section className="py-6">
        <div className="mx-auto max-w-4xl">
          <FigurePanel
            src="/diagrams/you-decide.svg"
            alt="Inside your space your photos and files stay private, while you've shared just your address with the Shop app, which can see only that one thing — and you can take it back at any time."
          />
        </div>
      </Section>

      <Section className="py-6">
        <div className="grid gap-5 md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="tile p-6">
              <h2 className="font-display text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-3 text-muted-foreground">{p.body}</p>
              <p className="mt-4 border-l-2 border-primary/60 pl-3 text-sm">
                <span className="eyebrow">What that means</span>
                <br />
                {p.consequence}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="narrow" className="py-6">
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            You decide who sees what
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything in your space starts out private. From there you can share one photo album
            with a friend, let an app use a single folder, hand a task to an assistant for the day,
            or take any of it back the moment you change your mind.
          </p>
          <p className="mt-4 text-muted-foreground">
            It's all built on{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={SOLID_URL}>
              Solid
            </a>
            , an open web standard for owning your own data — so this isn't a private promise you
            have to trust us to keep.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Own your things. Start now." align="center" />
        <CtaButtons className="mt-8 justify-center" />
      </Section>
    </>
  );
}
