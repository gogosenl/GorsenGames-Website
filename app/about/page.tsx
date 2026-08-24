import type { Metadata } from "next";
import Image from "../components/SiteImage";
import StoreBadge from "../components/StoreBadge";
import FooterLinks from "../components/FooterLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda — Bağımsız Mobil Oyun Stüdyosu",
  description: "Görsen Games; Puzzle Area, Block Puzzle Grid, Bloomshift ve Petal Shift: Bloom Puzzle oyunlarını geliştiren bağımsız mobil oyun stüdyosudur.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Görsen Games Hakkında",
    description: "Türkiye merkezli bağımsız mobil oyun stüdyosu. Sade, eğlenceli ve düşündürücü mobil bulmacalar geliştiriyoruz.",
    url: "/about",
  },
};

const games = [
  { name: "Puzzle Area", href: "/puzzle-area", image: "/games/puzzle-area/layers/8x8.jpeg", note: "Alan bulma bulmacası", count: "1080 bölüm" },
  { name: "Block Puzzle Grid", href: "/block-puzzle-grid", image: "/games/puzzle-grid/layers/7x7.jpeg", note: "Parça yerleştirme bulmacası", count: "850 bölüm" },
  { name: "Bloomshift", href: "/bloomshift", image: "/games/v2/dalga-game.jpg", note: "Renk ve döndürme bulmacası", count: "1060 bölüm" },
  { name: "Petal Shift: Bloom Puzzle", href: "/petal-shift", image: "/games/ruzgar-korusu/02-oynanis.jpg", note: "Botanik kaydırma bulmacası", count: "610 bölüm" },
];

const aboutData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Görsen Games Hakkında",
  url: "https://gorsengames.com/about",
  description: "Görsen Games, Türkiye merkezli bağımsız bir mobil oyun stüdyosudur.",
  mainEntity: {
    "@type": "Organization",
    name: "Görsen Games",
    alternateName: "Gorsen Games",
    url: "https://gorsengames.com",
    logo: "https://gorsengames.com/gorsen-games-logo.png",
    description: "Puzzle Area, Block Puzzle Grid, Bloomshift ve Petal Shift: Bloom Puzzle adlı mobil bulmaca oyunlarını geliştiren bağımsız mobil oyun stüdyosu.",
    email: "info@gorsengames.com",
    sameAs: [
      "https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games",
      "https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr",
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutData) }} />

      <nav className="about-nav">
        <Link className="about-brand" href="/">
          <span><Image src="/gorsen-games-logo.png" alt="Görsen Games logosu" fill priority sizes="46px" /></span>
          <b>GÖRSEN <small>GAMES</small></b>
        </Link>
        <div><Link href="/#games">Oyunlar</Link><Link href="/about">Hakkımızda</Link><Link href="/contact">İletişim</Link></div>
        <Link className="about-back" href="/">Ana sayfa <i>↗</i></Link>
      </nav>

      <header className="about-hero">
        <div className="about-grid" aria-hidden="true" />
        <div className="about-hero-copy">
          <p>BAĞIMSIZ MOBİL OYUN STÜDYOSU · TÜRKİYE</p>
          <h1>Bulmacayı sadece çözmüyoruz.<br/><span>Tasarlıyoruz.</span></h1>
          <div className="about-intro">
            <b>Görsen Games, Türkiye merkezli bağımsız bir mobil oyun stüdyosudur.</b>
            <p>Sade görünen, kolay öğrenilen ve ustalaşması keyifli mobil bulmaca oyunları geliştiriyoruz. Her oyunda net bir mekanik, özenli ilerleme ve kendine özgü bir görsel dünya kuruyoruz.</p>
          </div>
        </div>
        <div className="about-logo-stage">
          <div className="about-orbit one"/><div className="about-orbit two"/>
          <span><Image src="/gorsen-games-logo.png" alt="Görsen Games" fill priority sizes="(max-width:700px) 62vw, 390px"/></span>
        </div>
      </header>

      <section className="about-numbers" aria-label="Görsen Games istatistikleri">
        <article><b>04</b><span>Özgün mobil oyun</span></article>
        <article><b>3.600</b><span>Tasarlanmış bölüm</span></article>
        <article><b>TR · EN</b><span>İki dil desteği</span></article>
        <article><b>2026</b><span>Görsen Games</span></article>
      </section>

      <section className="about-story">
        <div className="about-label"><span>01</span><p>BİZ KİMİZ?</p></div>
        <div className="about-story-copy">
          <h2>Oyunlarımızı<br/><em>bir görsen…</em></h2>
          <p className="about-slogan-line">Düşünmenin en renkli hâlini keşfetsen.</p>
          <p>Görsen Games; gözlem, mantık, planlama ve desen tanıma gibi farklı düşünme biçimlerini mobil ekranlara taşıyan oyunlar üretir. Amacımız yalnızca zor bulmacalar hazırlamak değil; oyuncunun her dokunuşta ne yaptığını anladığı, ilerlemesini hissettiği ve yeniden dönmek istediği dünyalar tasarlamaktır.</p>
          <p>Oyunlarımız kısa molalarda rahatça oynanabilir; ancak ilerleyen bölümlerde gerçek bir strateji ve dikkat ister. Çocukça olmayan renkli tasarım, okunabilir arayüz ve akıcı mobil kontrol bütün projelerimizin ortak temelidir.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-label"><span>02</span><p>TASARIM YAKLAŞIMIMIZ</p></div>
        <div className="about-value-grid">
          <article><i>01</i><h3>Net mekanik</h3><p>Oyuncunun birkaç dokunuşta anlayabileceği, giderek derinleşen özgün kurallar.</p></article>
          <article><i>02</i><h3>Özenli ilerleme</h3><p>Öğreten başlangıçlardan ustalık isteyen tablolara uzanan dengeli bölüm yapısı.</p></article>
          <article><i>03</i><h3>Kendine özgü dünya</h3><p>Her oyunun karakterine göre şekillenen renk, hareket, ses ve atmosfer.</p></article>
        </div>
      </section>

      <section className="about-games">
        <div className="about-games-head"><p>03 · OYUNLARIMIZ</p><h2>Dört oyun.<br/><span>Dört farklı düşünme biçimi.</span></h2></div>
        <div className="about-game-grid">
          {games.map((game, index) => (
            <Link href={game.href} className="about-game" key={game.name}>
              <div><Image src={game.image} alt={`${game.name} oyun ekranı`} fill sizes="(max-width:700px) 92vw, 24vw"/></div>
              <span>0{index + 1}</span><h3>{game.name}</h3><p>{game.note}</p><small>{game.count}</small><i>↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <p>GÖRSEN GAMES İLE İLETİŞİM</p>
        <h2>Yeni dünyalar<br/>üzerinde çalışıyoruz.</h2>
        <div className="about-store-profiles" aria-label="Görsen Games mağaza profilleri">
          <a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer">
            <StoreBadge platform="play" className="profile-store-badge"/><span><small>GOOGLE PLAY</small><b>Görsen Games</b></span><em>↗</em>
          </a>
          <a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer">
            <StoreBadge platform="ios" className="profile-store-badge"/><span><small>APP STORE</small><b>Görsen Games</b></span><em>↗</em>
          </a>
        </div>
        <a href="mailto:info@gorsengames.com">info@gorsengames.com <span>↗</span></a>
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
