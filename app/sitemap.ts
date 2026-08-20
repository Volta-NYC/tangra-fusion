import type { MetadataRoute } from "next";

import { site } from "./content";

const routes = ["", "/menu", "/locations", "/story", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/menu" || route === "/locations" ? 0.9 : 0.7,
  }));
}
