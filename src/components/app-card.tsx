import { Badge } from "@/components/badge";

export type AppEntry = {
  name: string;
  tagline: string;
  href?: string;
  host?: string;
  status: "live" | "soon";
};

export function AppCard({ app }: { app: AppEntry }) {
  const live = app.status === "live";
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border font-display text-base font-semibold ${
              live
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border text-muted-foreground"
            }`}
            aria-hidden
          >
            {app.name[0]}
          </span>
          <h3 className="font-display text-lg font-semibold tracking-tight">{app.name}</h3>
        </div>
        {live ? (
          <Badge className="shrink-0">Live</Badge>
        ) : (
          <Badge variant="outline" className="shrink-0 text-muted-foreground">
            Soon
          </Badge>
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{app.tagline}</p>
      {live && app.host && (
        <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-primary">
          {app.host}
          <span className="tile-arrow" aria-hidden>
            ↗
          </span>
        </div>
      )}
    </>
  );

  if (live && app.href) {
    return (
      <a href={app.href} className="group tile card-grad block h-full p-5">
        {inner}
      </a>
    );
  }
  return <div className="tile card-grad h-full p-5 opacity-90">{inner}</div>;
}
