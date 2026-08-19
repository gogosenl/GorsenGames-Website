import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./game-pages.css";
import "./home-v2.css";
import "./about.css";
import "./about-slogan.css";
import "./language.css";
import "./store-updates.css";
import LanguageProvider from "./components/LanguageProvider";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin", "latin-ext"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin", "latin-ext"] });

const title = "Görsen Games — Oyunlarımızı Bir Görsen";
const description = "Puzzle Area, Block Puzzle Grid, BloomShift ve Petal Shif: Görsen Games'in dört özgün mobil bulmaca dünyasını keşfet.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gorsengames.com"),
  title: { default: title, template: "%s | Görsen Games" },
  description,
  applicationName: "Görsen Games",
  keywords: ["Görsen Games", "mobil oyun", "mobil bulmaca oyunu", "Android oyun", "iOS oyun", "Puzzle Area", "Block Puzzle Grid", "BloomShift", "Petal Shif"],
  icons: { icon: "/gorsen-games-logo.png", apple: "/gorsen-games-logo.png" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Görsen Games",
    title,
    description,
    url: "https://gorsengames.com",
    images: [{ url: "/og-v4.png", width: 1672, height: 941, alt: "Görsen Games'in dört mobil bulmaca oyunu" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v4.png"] },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Görsen Games",
  alternateName: "Gorsen Games",
  url: "https://gorsengames.com",
  logo: "https://gorsengames.com/gorsen-games-logo.png",
  description: "Puzzle Area, Block Puzzle Grid, BloomShift ve Petal Shif adlı mobil bulmaca oyunlarını geliştiren Türkiye merkezli bağımsız mobil oyun stüdyosu.",
  email: "info@gorsengames.com",
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Görsen Games",
  alternateName: ["Gorsen Games", "gorsengames.com"],
  url: "https://gorsengames.com/",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${manrope.variable} ${display.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
