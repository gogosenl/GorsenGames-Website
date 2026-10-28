import type { Metadata } from "next";
import "./english.css";

export const metadata: Metadata = {
  title: { default: "Görsen Games — Colorful Mobile Puzzle Games", template: "%s | Görsen Games" },
  description: "Discover eight colorful mobile puzzle games by Görsen Games for iPhone, iPad, and Android.",
  alternates: { canonical: "/en", languages: { "tr-TR": "/", "en": "/en" } },
  openGraph: { locale: "en_US", siteName: "Görsen Games", images: ["/og-v5-eight-games.png"] },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div className="english-site">{children}</div>;
}
