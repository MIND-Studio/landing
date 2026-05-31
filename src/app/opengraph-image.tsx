import { ImageResponse } from "next/og";

export const alt = "Mind — your data, your apps, your AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card. Uses the default font (no remote fetch) so it renders
// deterministically at build time. Teal-on-dark to match the site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 50% 0%, #0e2b2a 0%, #0b0d12 55%, #07080b 100%)",
          color: "#e8edf2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 6,
            color: "#2dd4bf",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#2dd4bf" }} />
          Now in alpha · built on Solid
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          <span>Your data. Your apps.&nbsp;</span>
          <span style={{ color: "#2dd4bf" }}>Your AI.</span>
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#9aa6b2", marginTop: 28, maxWidth: 900 }}>
          A privacy-first home for your data — one place you own, where your apps and AI agents
          all work together.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5f6b78", marginTop: 40 }}>
          mindpods.org
        </div>
      </div>
    ),
    { ...size },
  );
}
