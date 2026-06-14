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

          {/* Mobile menu — a zero-JS <details> disclosure so the nav stays a server
              component. Holds the section links (hidden on mobile above) plus Sign in. */}
          <details className="group relative md:hidden">
            <summary
              className="grid size-9 cursor-pointer list-none place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  className="group-open:hidden"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 5l14 14M19 5L5 19"
                  className="hidden group-open:block"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <div className="glass-panel absolute right-0 top-[calc(100%+0.6rem)] w-60 rounded-xl border border-border p-2 shadow-xl shadow-black/40">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <span className="my-1 block h-px bg-border" aria-hidden />
              <a
                href={DOCK_URL}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Sign in
              </a>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
