import type { MetadataRoute } from "next";

const baseUrl = "https://gorsengames.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/puzzle-area`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/block-puzzle-grid`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/bloomshift`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/petal-shift`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/fudu-hex`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/liva-lights`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
