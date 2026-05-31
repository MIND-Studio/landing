import Link from "next/link";
import { Symbol } from "@mind-studio/ui";
import { DOCK_URL, DOCS_URL, POD_REGISTER_URL, SOLID_URL } from "@/lib/links";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/apps", label: "Apps", external: false },
      { href: "/how-it-works", label: "How it works", external: false },
      { href: "/pricing", label: "Pricing", external: false },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/privacy", label: "Privacy", external: false },
      { href: SOLID_URL, label: "Built on Solid", external: true },
      { href: DOCS_URL, label: "Architecture & spec", external: true },
    ],
  },
  {
    title: "Get started",
    links: [
      { href: POD_REGISTER_URL, label: "Create your pod", external: true },
      { href: DOCK_URL, label: "Sign in", external: true },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <Symbol className="h-6 w-6" alt="" />
              <span className="font-display text-base font-semibold">Mind</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your data. Your apps. Your AI. A privacy-first home for your data — by
              architecture, not by promise.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>“This is for everyone.” — privacy is also for everyone.</p>
          <p>mindpods.org · a Mind project</p>
        </div>
      </div>
    </footer>
  );
}
