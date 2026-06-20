import type { Metadata } from "next";
import { AppCard } from "@/components/app-card";
import { CtaButtons } from "@/components/cta-buttons";
import { LauncherMock } from "@/components/launcher-mock";
import { Section, SectionHeading } from "@/components/section";
import { LIVE_APPS, SOON_APPS } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "The Mind app family — twelve apps live now, from Drive and Chat to Calendar, Photos and Codespaces, with Agents, Compass and more on the way. Every app works from the same space that's yours.",
};

export default function AppsPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="The family"
          title="One space. A whole family of apps."
          lead="Every Mind app works from the same space — the one that's yours. Sign in once and your things follow you from app to app. A new app doesn't scatter your stuff; it just adds to what's already there."
          align="center"
        />
      </Section>

      <Section className="py-6">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Live now</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LIVE_APPS.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>

        {/* Product peek */}
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2">
          <LauncherMock />
          <div className="glass-panel overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/drive.png"
              alt="Drive — all your files in one space that's yours."
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section className="py-6">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Coming soon</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The rest of the family that's on the way. They all work the same way — a new app just
          reads and writes your space, with no platform deciding whether it's allowed.
        </p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOON_APPS.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Start with one app. Keep your things forever." align="center" />
        <CtaButtons className="mt-8 justify-center" />
      </Section>
    </>
  );
}
