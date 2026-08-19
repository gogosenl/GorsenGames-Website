import type { MetadataRoute } from "next";

const baseUrl = "https://gorsengames.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/hakkimizda`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/puzzle-area`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/puzzle-grid`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/dalga-bahcesi`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ruzgar-korusu`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
