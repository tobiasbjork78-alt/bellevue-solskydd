import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://bellevuesolskydd.se";

const mainProducts = ["persienner", "markiser", "plissegardiner", "rullgardiner"];

const otherProducts = [
  "trapersienner",
  "lamellgardiner",
  "panelgardiner",
  "draperier",
  "terrassmarkiser",
  "fonstermarkiser",
  "zip-screen",
  "pergola",
  "parasoller",
  "insektsskydd",
  "korgmarkiser",
  "vindskydd",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...mainProducts.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...otherProducts.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
