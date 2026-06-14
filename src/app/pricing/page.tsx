import type { Metadata } from "next";
import { Button } from "@mind-studio/ui";
import { Badge } from "@/components/badge";
import { Section, SectionHeading } from "@/components/section";
import { POD_REGISTER_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free during the alpha. Mind is an early prototype — create a pod on mindpods.org at no cost, paid hosted plans are coming, and you can always self-host instead.",
};

const INCLUDED = [
  "A hosted pod on mindpods.org",
  "Your own WebID — one sign-in across every Mind app",
  "All twelve live apps — Drive, Chat, Calendar, Photos and more",
  "Per-folder privacy controls",
  "Move your pod elsewhere anytime",
];

export default function PricingPage() {
  return (
    <>
      <Section className="pb-6 text-center md:pt-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Free while we're in alpha"
          lead="Mind is an early alpha — we're testing our first prototype in the open. Get a pod on mindpods.org at no cost today. We're still figuring out long-term pricing, and whichever shape it takes, you'll never be locked in."
          align="center"
        />
      </Section>

      <Section width="narrow" className="py-6">
        <div className="glass-panel relative overflow-hidden rounded-2xl p-8 md:p-10">
          <Badge className="absolute right-6 top-6">Alpha</Badge>
          <p className="eyebrow">Hosted pod</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-5xl font-semibold tracking-tight">Free</span>
            <span className="text-muted-foreground">during the alpha</span>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground">
            Everything you need to live on your own pod, hosted for you so there's nothing to
            set up. Expect rough edges — this is our first prototype, and your feedback shapes it.
          </p>

          <ul className="mt-7 space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-primary" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="mt-8">
            <a href={POD_REGISTER_URL}>Create your pod</a>
          </Button>
        </div>
      </Section>

      <Section width="narrow" className="py-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="tile p-6">
            <h3 className="font-display text-lg font-semibold">Paid plans, later</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              As Mind grows we'll offer paid hosted plans with more storage, backups, and
              recovery. Alpha pods won't be left behind.
            </p>
          </div>
          <div className="tile p-6">
            <h3 className="font-display text-lg font-semibold">Or host it yourself</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Hosting is always a choice, never a lock-in. Run your pod on your own VPS, a
              community server, a friend's box, or your laptop — and move it whenever you like.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
