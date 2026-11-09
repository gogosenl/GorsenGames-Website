import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./game-pages.css";
import "./home-v2.css";
import "./home-redesign.css";
import "./about.css";
import "./about-slogan.css";
import "./language.css";
import "./store-updates.css";
import LanguageProvider from "./components/LanguageProvider";
import PrivacyAnalytics from "./components/PrivacyAnalytics";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin", "latin-ext"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin", "latin-ext"] });

const title = "Görsen Games — Oyunlarımızı Bir Görsen";
const description = "Görsen Games, bağımsız oyun geliştiricisi Görkem Şenol tarafından kurulan ve geliştirilen mobil oyun stüdyosudur. Puzzle Area, Block Puzzle Grid, Bloomshift ve diğer özgün bulmaca oyunlarını keşfet.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gorsengames.com"),
  title: { default: title, template: "%s | Görsen Games" },
  description,
  applicationName: "Görsen Games",
  alternates: { canonical: "/" },
  authors: [{ name: "Görkem Şenol", url: "https://gorsengames.com/about" }],
  creator: "Görkem Şenol",
  publisher: "Görsen Games",
  keywords: ["Görsen Games", "Görkem Şenol", "Gorkem Senol", "mobil oyun", "mobil bulmaca oyunu", "Android oyun", "iOS oyun", "Puzzle Area", "Block Puzzle Grid", "Bloomshift", "Petal Shift", "Fudu Hex", "Liva Lights", "Bubblefin Pop", "Trail Builder", "Route Craft", "Mirror Lake", "ayna bulmacası", "ışık bulmacası", "fener bulmacası", "number merge", "fizik tabanlı bulmaca", "rota bulmacası"],
  icons: { icon: "/gorsen-games-logo.png", apple: "/gorsen-games-logo.png" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Görsen Games",
    title,
    description,
    url: "https://gorsengames.com",
    images: [{ url: "/og-v6-nine-games.png", width: 1536, height: 864, alt: "Görsen Games'in dokuz mobil bulmaca oyunu" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v6-nine-games.png"] },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Görsen Games",
  alternateName: ["Görsen Games", "Gorsen Games"],
  "@id": "https://gorsengames.com/#organization",
  url: "https://gorsengames.com",
  logo: "https://gorsengames.com/gorsen-games-logo.png",
  description: "Görkem Şenol tarafından geliştirilen Puzzle Area, Block Puzzle Grid, Bloomshift, Petal Shift, Fudu Hex, Liva Lights, Bubblefin Pop, Trail Builder ve Mirror Lake oyunlarının bağımsız mobil oyun stüdyosu.",
  email: "info@gorsengames.com",
  sameAs: [
    "https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games",
    "https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr",
  ],
  founder: { "@id": "https://gorsengames.com/#gorkem-senol" },
};

const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gorsengames.com/#gorkem-senol",
  name: "Görkem Şenol",
  alternateName: "Gorkem Senol",
  url: "https://gorsengames.com/about",
  jobTitle: "Bağımsız oyun geliştiricisi",
  description: "Görsen Games'in kurucusu ve Puzzle Area, Block Puzzle Grid, Bloomshift, Petal Shift, Fudu Hex, Liva Lights, Bubblefin Pop, Trail Builder ve Mirror Lake oyunlarının geliştiricisi.",
  mainEntityOfPage: "https://gorsengames.com/about",
  worksFor: { "@id": "https://gorsengames.com/#organization" },
  sameAs: ["https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${manrope.variable} ${display.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} />
        <LanguageProvider>{children}</LanguageProvider>
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
