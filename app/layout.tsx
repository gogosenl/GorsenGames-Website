import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./game-pages.css";
import "./home-v2.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin", "latin-ext"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin", "latin-ext"] });

const title = "Görsen Games — Düşünmenin En Renkli Hali";
const description = "Puzzle Area, Puzzle Grid, Dalga Bahçesi ve Rüzgâr Korusu: Görsen Games'in dört özgün mobil bulmaca dünyasını keşfet.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gorsengames.com"),
  title: { default: title, template: "%s | Görsen Games" },
  description,
  applicationName: "Görsen Games",
  keywords: ["Görsen Games", "mobil oyun", "mobil bulmaca oyunu", "Android oyun", "Puzzle Area", "Puzzle Grid", "Dalga Bahçesi", "Rüzgâr Korusu"],
  icons: { icon: "/gorsen-games-logo.png", apple: "/gorsen-games-logo.png" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Görsen Games",
    title,
    description,
    url: "https://www.gorsengames.com",
    images: [{ url: "/og-v2.png", width: 1792, height: 1024, alt: "Görsen Games mobil bulmaca oyunları" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v2.png"] },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Görsen Games",
  alternateName: "Gorsen Games",
  url: "https://www.gorsengames.com",
  logo: "https://www.gorsengames.com/gorsen-games-logo.png",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${manrope.variable} ${display.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        {children}
      </body>
    </html>
  );
}
