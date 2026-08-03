import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import "./game-pages.css";
import "./home-v2.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin", "latin-ext"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Görsen Games — Düşünmenin En Renkli Hali";
  const description = "Puzzle Area, Puzzle Grid, Dalga Bahçesi ve Rüzgâr Korusu: Görsen Games'in dört özgün mobil bulmaca dünyasını keşfet.";
  return {
    title,
    description,
    icons: { icon: "/gorsen-games-logo.png", apple: "/gorsen-games-logo.png" },
    openGraph: { title, description, images: [{ url: `${origin}/og-v2.png`, width: 1792, height: 1024 }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og-v2.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={`${manrope.variable} ${display.variable}`}>{children}</body></html>;
}
