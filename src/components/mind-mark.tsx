/**
 * The animated brand wordmark — "Decentralized Network In Mind" collapses into
 * MIND. Markup + CSS ported from architecture/shared/brand.css (the spec site's
 * hero glyph). Each capital flies to its place in MIND; the lowercase letters
 * fade out. Pure CSS, runs on render. Styles live in globals.css (.mind-mark).
 */

const PHRASE = "Decentralized Network In Mind";

// The four surviving capitals, in reading order, and how far each travels (ch)
// to form a centered "MIND". Lifted verbatim from the spec site.
const DX = [20, 2, -10, -17];

export function MindMark({ className = "" }: { className?: string }) {
  let capIndex = 0;

  return (
    <div className={`mind-mark panel ${className}`} aria-label="Decentralized Network In Mind, collapsing into MIND">
      <div className="ln">
        {Array.from(PHRASE).map((char, i) => {
          const isCap = char >= "A" && char <= "Z";
          const isSpace = char === " ";
          if (isCap) {
            const dx = DX[capIndex] ?? 0;
            capIndex += 1;
            return (
              <span key={i} className="ch c" style={{ ["--dx" as string]: `${dx}ch` }}>
                <span className="g">{char}</span>
              </span>
            );
          }
          return (
            <span key={i} className="ch l">
              <span className="g">{isSpace ? " " : char}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
