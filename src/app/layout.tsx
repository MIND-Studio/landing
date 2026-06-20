import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@mind-studio/ui";
import { mind } from "@mind-studio/ui/themes";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
import { version as buildVersion } from "../../package.json";

// Fleet type (ui ^0.4.0): Fraunces display, Hanken Grotesk body, JetBrains Mono
// for the HUD micro-labels — mirroring the rest of the Mind fleet so the
// marketing site shares the dock's type. Exposed as CSS vars; globals.css
// rebinds the @mind-studio/ui font tokens to these so the UI primitives
// (Button, Accordion …) render in the brand type, not system font.
const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mindpods.org"),
  title: {
    default: "Mind — your data, your apps, your AI",
    template: "%s · Mind",
  },
  description:
    "A privacy-first home for your data — one place you own, where your apps and AI agents all work together. Create a pod on mindpods.org.",
  openGraph: {
    title: "Mind — your data, your apps, your AI",
    description:
      "A privacy-first home for your data — one place you own, where your apps and AI agents all work together.",
    url: "https://mindpods.org",
    siteName: "Mind",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mind-theme="mind"
      data-build={buildVersion}
      // Font vars must live on :root (the <html> element) so the derived
      // --font-* / --mind-font-* tokens composed in globals.css :root can resolve
      // them; on <body> they'd be out of scope and collapse to the UA serif.
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      // ^ exposes --font-fraunces / --font-hanken / --font-jb on :root
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          theme={mind}
          defaultTheme="dark"
          enableSystem={false}
          storageKey="mind-landing-theme-v1"
        >
          <div className="aurora" aria-hidden />
          <div className="bg-grid" aria-hidden />
          <div className="starfield" aria-hidden />
          <div className="bg-vignette" aria-hidden />
          <div className="grain" aria-hidden />
          <div className="relative flex min-h-screen flex-col" style={{ overflowX: "clip" }}>
            <SiteNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
