import { MetadataRoute } from "next";

const siteUrl = "https://shia-calendar-online.vercel.app";
const lastModified = new Date("2026-06-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
