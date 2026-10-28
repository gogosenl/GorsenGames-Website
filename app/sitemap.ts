import type { MetadataRoute } from "next";
import { catalogGames } from "./data/catalog";

const baseUrl = "https://gorsengames.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/en`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/en/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/en/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/updates`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/en/updates`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/puzzle-area`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/block-puzzle-grid`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/bloomshift`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/petal-shift`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/fudu-hex`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/liva-lights`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/bubblefin-pop`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/trail-builder`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/en/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/en/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
  return [...routes, ...catalogGames.map((game) => ({ url: `${baseUrl}/en/games/${game.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
