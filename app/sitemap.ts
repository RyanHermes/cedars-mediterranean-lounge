import type { MetadataRoute } from "next";

import { isFestivalActive } from "./festival/festival-config";

const SITE_URL = "https://cedarsmediterraneanlounge.ca";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/catering`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hall-rental`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  if (isFestivalActive()) {
    routes.push({
      url: `${SITE_URL}/festival`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  return routes;
}
