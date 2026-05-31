import Link from "next/link";
import { Button, Symbol } from "@mind-studio/ui";
import { DOCK_URL, POD_REGISTER_URL } from "@/lib/links";

const NAV = [
  { href: "/apps", label: "Apps" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/pricing", label: "Pricing" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 glass-panel">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Mind — home">
          <Symbol className="h-7 w-7" alt="" />
          <span className="font-display text-lg font-semibold tracking-tight">Mind</span>
        </Link>

        <div className="ml-2 hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href={DOCK_URL}>Sign in</a>
          </Button>
          <Button asChild size="sm">
            <a href={POD_REGISTER_URL}>Create your pod</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
