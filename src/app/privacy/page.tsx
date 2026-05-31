import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { CtaButtons } from "@/components/cta-buttons";
import { SOLID_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy by architecture, not by promise. Your pod is the source of truth, workers are replaceable, and no host can hold your data hostage.",
};

const PRINCIPLES = [
  {
    title: "Your pod is the source of truth",
    body: "Only your pod holds the real, authoritative copy of your data. Apps and workers can be swapped without touching it.",
    consequence: "There's no “export my data” feature — because nothing is being held hostage in the first place.",
  },
  {
    title: "Your AI's memory is yours",
    body: "The agent runtime that powers your assistants is replaceable. Swap it out and everything your agents have learned about you stays where it lives — in your pod.",
    consequence: "Your assistant's memory belongs to you, not to whichever model vendor you used last.",
  },
  {
    title: "Your password only touches your pod",
    body: "Apps never see your credentials. You log in at your own pod, and apps are handed access only to the folders you grant — read-only, a single folder, or revoked entirely.",
    consequence: "An app gets the keys to one room, not the whole house.",
  },
  {
    title: "You can always leave",
    body: "Your pod can move between hosts — your own VPS, a community server, a friend's box — without breaking your identity or the apps that point at it.",
    consequence: "No host can lock you in. Hosting is a service you buy, never a hostage situation.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="By architecture, not by promise"
          title="Privacy you can't be talked out of"
          lead="Most products ask you to trust a privacy policy. Mind is built so the data was never theirs to misuse. Here's what that means in practice."
          align="center"
        />
      </Section>

      <Section className="py-6">
        <div className="grid gap-5 md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="tile p-6">
              <h2 className="font-display text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-3 text-muted-foreground">{p.body}</p>
              <p className="mt-4 border-l-2 border-primary/60 pl-3 text-sm">
                <span className="eyebrow">Consequence</span>
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
            Per-resource control
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every folder and file in your pod carries its own access rules. You can grant a
            friend read access to one album, give an app write access to a single folder, hand a
            task to an agent for a day, or revoke any of it the moment you change your mind. The
            default is private.
          </p>
          <p className="mt-4 text-muted-foreground">
            It's all standard{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={SOLID_URL}>
              Solid
            </a>{" "}
            — the open, vendor-neutral web standard for data ownership — so this isn't a
            proprietary lock you have to trust us to honor.
          </p>
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Own your data. Start now." align="center" />
        <CtaButtons className="mt-8 justify-center" />
      </Section>
    </>
  );
}
