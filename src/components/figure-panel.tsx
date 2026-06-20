"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Frames a self-contained Mind diagram SVG (authored by the mind-graphic skill,
 * living in /public/diagrams) and gives it a "live" feel: a soft emerald glow
 * (the brand --primary) that tracks the pointer behind the panel, plus a gentle
 * lift on hover. The SVG carries its own dark panel + border, so we don't
 * double-frame it — we
 * only add the ambient halo around it. Pointer tracking is a progressive
 * enhancement; with no JS / reduced motion the figure is just a crisp static image.
 */
export function FigurePanel({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: decorative pointer-tracking only; no behavior depends on it
    <div ref={ref} className={cn("figure-panel", className)} onPointerMove={onMove}>
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG diagram, intrinsic size, no optimization needed */}
      <img src={src} alt={alt} className="figure-img" loading="lazy" decoding="async" />
    </div>
  );
}
