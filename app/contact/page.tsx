import type { Metadata } from "next";
import Image from "../components/SiteImage";
import StoreBadge from "../components/StoreBadge";
import FooterLinks from "../components/FooterLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Görsen Games ile iletişime geçin; Google Play ve App Store profillerimizi ziyaret edin.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Görsen Games İletişim",
    description: "Mobil oyunlarımız, destek ve iş birlikleri için bize ulaşın.",
    url: "/contact",
    images: [{ url: "/og-v5-eight-games.png", width: 1672, height: 941, alt: "Görsen Games'in sekiz mobil bulmaca oyunu" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v5-eight-games.png"] },
};

export default function ContactPage() {
  return (
    <main className="about-page contact-page">
      <nav className="about-nav">
        <Link className="about-brand" href="/">
          <span><Image src="/gorsen-games-logo.png" alt="Görsen Games logosu" fill priority sizes="46px" /></span>
          <b>GÖRSEN <small>GAMES</small></b>
        </Link>
        <div><Link href="/#games">Oyunlar</Link><Link href="/about">Hakkımızda</Link><Link href="/contact">İletişim</Link></div>
        <Link className="about-back" href="/">Ana sayfa <i>↗</i></Link>
      </nav>

      <section className="about-contact contact-standalone">
        <p>GÖRSEN GAMES İLE İLETİŞİM</p>
        <h1>Bir sonraki<br/>bulmacan hazır.</h1>
        <span className="contact-lead">Destek, iş birlikleri ve oyunlarımızla ilgili soruların için bize ulaş.</span>
        <div className="about-store-profiles" aria-label="Görsen Games iletişim ve mağaza bağlantıları">
          <a href="mailto:info@gorsengames.com">
            <i aria-hidden="true">@</i><span><small>E-POSTA</small><b>info@gorsengames.com</b></span><em>↗</em>
          </a>
          <a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer">
            <StoreBadge platform="play" className="profile-store-badge"/><span><small>GOOGLE PLAY</small><b>Görsen Games</b></span><em>↗</em>
          </a>
          <a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer">
            <StoreBadge platform="ios" className="profile-store-badge"/><span><small>APP STORE</small><b>Görkem Şenol</b></span><em>↗</em>
          </a>
        </div>
      </section>

      <footer className="about-footer">
        <Link className="about-brand" href="/"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="46px"/></span><b>GÖRSEN <small>GAMES</small></b></Link>
        <p>Türkiye merkezli bağımsız mobil oyun stüdyosu.</p>
        <FooterLinks />
        <small>© 2026 Görsen Games. Tüm hakları saklıdır.</small>
      </footer>
    </main>
  );
}
