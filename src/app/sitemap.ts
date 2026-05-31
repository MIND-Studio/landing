import type { MetadataRoute } from "next";

const SITE = "https://mindpods.org";

// Static marketing routes. `lastModified` is intentionally omitted — there's no
// build timestamp available in the script sandbox, and a stable sitemap is fine
// for a hand-maintained set of pages.
const ROUTES = ["", "/apps", "/how-it-works", "/privacy", "/pricing"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
