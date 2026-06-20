import type { Metadata } from "next";
import { AppCard } from "@/components/app-card";
import { CtaButtons } from "@/components/cta-buttons";
import { LauncherMock } from "@/components/launcher-mock";
import { Section, SectionHeading } from "@/components/section";
import { LIVE_APPS, SOON_APPS } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "The Mind app family — twelve apps live now, from Drive and Chat to Calendar, Photos and Codespaces, with Agents, Compass and more on the way. Every app reads and writes the same pod.",
};

export default function AppsPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="The family"
          title="One pod. A whole family of apps."
          lead="Every Mind app reads and writes the same pod — your single source of truth. Sign in once and your data follows you from app to app. New apps don't fragment your data; they add to it."
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
              alt="Drive — a file browser for your pod."
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
          The rest of the family from the Mind spec. They all speak the same protocol — adding a new
          app means writing one that reads your pod, not getting approved by a platform.
        </p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOON_APPS.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading title="Start with one app. Keep your data forever." align="center" />
        <CtaButtons className="mt-8 justify-center" />
      </Section>
    </>
  );
}
