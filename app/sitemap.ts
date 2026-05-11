import type { MetadataRoute } from "next";

const SITE_URL = "https://cedarsmediterraneanlounge.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
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
}
