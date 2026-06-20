/**
 * PodConstellation — the signature hero visual.
 *
 * Your pod is the glowing core; the Mind app family orbits it on two slow,
 * counter-rotating rings. Each app's label stays upright (counter-spun), a thin
 * spoke connects it to the core, and a "data mote" streams inward along the
 * spoke — the whole idea of the product in one picture: apps just visit, your
 * data lives in the middle.
 *
 * Pure CSS (deterministic, no JS, no Math.random): angles are computed in CSS
 * from --i / --n. Styles live in globals.css (.pc-*). Respects reduced motion.
 */

const INNER = ["Drive", "Chat", "Calendar", "Photos"];
const OUTER = ["Dock", "Notes", "Slides", "Agents", "Codespaces", "Whiteboard"];

function Ring({ apps, variant }: { apps: string[]; variant: "inner" | "outer" }) {
  const n = apps.length;
  return (
    <div className={`pc-ring pc-ring--${variant}`}>
      <span className="pc-orbit" aria-hidden />
      {apps.map((name, i) => (
        <div key={name} className="pc-node" style={{ ["--i" as string]: i, ["--n" as string]: n }}>
          <span className="pc-spoke" aria-hidden />
          <span className="pc-mote" style={{ ["--i" as string]: i }} aria-hidden />
          <div className={`pc-spin pc-spin--${variant}`}>
            <div className="pc-upright" style={{ ["--i" as string]: i, ["--n" as string]: n }}>
              <span className={`pc-chip pc-chip--${variant}`}>{name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PodConstellation() {
  return (
    <div
      className="pc-stage"
      role="img"
      aria-label="Your pod at the center, with Mind apps — Drive, Chat, Calendar, Photos, Dock, Notes, Agents and more — orbiting it."
    >
      <Ring apps={OUTER} variant="outer" />
      <Ring apps={INNER} variant="inner" />
      <div className="pc-core">
        <span className="pc-core-ring" aria-hidden />
        <span className="pc-core-label">
          <span className="pc-core-kicker">your</span>
          pod
        </span>
      </div>
    </div>
  );
}
