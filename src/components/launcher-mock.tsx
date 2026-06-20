import { LIVE_APPS } from "@/lib/apps";

// A built-in-markup stand-in for the Mind app launcher — dark and on-brand,
// matching the rest of the page's CSS-built visuals (the constellation, the
// "today vs pods" diagrams) instead of a light-themed screenshot. Shows the
// real, current live apps so it never drifts from the suite again.
const APPS = LIVE_APPS.slice(0, 9);

export function LauncherMock({ className }: { className?: string }) {
  return (
    <div
      className={`glass-panel card-grad overflow-hidden rounded-2xl p-5 ${className ?? ""}`}
      role="img"
      aria-label="The Mind app launcher — one grid of apps, all working from the same space that's yours."
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow">Your apps</span>
        <span className="grid grid-cols-3 gap-0.5" aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          ))}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-x-3 gap-y-5">
        {APPS.map((app) => (
          <div key={app.name} className="flex flex-col items-center gap-2 text-center">
            <span
              className="grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-display text-lg font-semibold text-primary"
              aria-hidden
            >
              {app.name[0]}
            </span>
            <span className="max-w-full truncate text-xs text-muted-foreground">{app.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-border pt-3 text-center font-mono text-xs text-primary">
        Manage apps
      </div>
    </div>
  );
}
