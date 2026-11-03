import type { Metadata } from "next";
import Image from "../components/SiteImage";
import GameCatalog from "../components/GameCatalog";
import FooterLinks from "../components/FooterLinks";
import { catalogGames } from "../data/catalog";

export const metadata: Metadata = {
  title: "Mobil Bulmaca Oyunları — iOS ve Android Puzzle Oyunları",
  description: "Görkem Şenol tarafından geliştirilen Görsen Games mobil bulmaca oyunlarını keşfet. Sayı, renk, rota, parça yerleştirme ve mantık oyunlarını App Store ve Google Play'de incele.",
  alternates: { canonical: "/mobil-bulmaca-oyunlari", languages: { "tr-TR": "/mobil-bulmaca-oyunlari", en: "/en/mobile-puzzle-games" } },
  openGraph: { title: "Görsen Games Mobil Bulmaca Oyunları", description: "iOS ve Android için sekiz özgün puzzle ve mantık oyunu.", url: "/mobil-bulmaca-oyunlari", images: ["/og-v5-eight-games.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Görsen Games Mobil Bulmaca Oyunları",
  url: "https://gorsengames.com/mobil-bulmaca-oyunlari",
  description: "iOS ve Android için sayı, renk, alan, rota ve mantık temalı mobil bulmaca oyunları koleksiyonu.",
  author: { "@id": "https://gorsengames.com/#gorkem-senol" },
  mainEntity: { "@type": "ItemList", itemListElement: catalogGames.map((game, index) => ({ "@type": "ListItem", position: index + 1, name: game.name, url: `https://gorsengames.com/${game.slug}` })) },
};

export default function MobilePuzzleGamesPage() {
  return <main className="seo-hub">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
    <nav className="seo-hub-nav"><a href="/"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="46px"/></span><b>GÖRSEN GAMES</b></a><div><a href="/">Ana sayfa</a><a href="/about">Hakkımızda</a><a href="/contact">İletişim</a><a href="/en/mobile-puzzle-games">EN</a></div></nav>
    <header className="seo-hub-hero"><p>MOBİL OYUN KOLEKSİYONU</p><h1>Mobil bulmaca oyunları.<br/><span>Sekiz farklı düşünme biçimi.</span></h1><p>Görsen Games, Görkem Şenol tarafından geliştirilen bağımsız bir mobil oyun koleksiyonudur. Sayıları, renkleri, parçaları, rotaları ve mekânsal ilişkileri kullanan özgün puzzle oyunlarını iPhone, iPad ve Android cihazlarda keşfet.</p><div><a href="#oyunlar">Oyunları keşfet ↓</a><a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer">App Store profili ↗</a><a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer">Google Play profili ↗</a></div></header>
    <section className="seo-hub-topics"><article><b>Sayı ve mantık</b><p>Puzzle Area, Fudu Hex ve Liva Lights ile sayı hedeflerini ve mantıksal ilişkileri çöz.</p></article><article><b>Renk ve düzen</b><p>Bloomshift ve Petal Shift ile çiçekleri döndür, satırları kaydır ve renkleri eşleştir.</p></article><article><b>Alan ve rota</b><p>Block Puzzle Grid ve Trail Builder ile parçaları yerleştir, kesintisiz yollar oluştur.</p></article><article><b>Fizik ve eşleştirme</b><p>Bubblefin Pop ile su balonlarını birleştir ve renkli fizik bulmacalarını tamamla.</p></article></section>
    <div id="oyunlar"><GameCatalog/></div>
    <section className="seo-hub-copy"><div><p>NEDEN GÖRSEN GAMES?</p><h2>Kısa molalarda anlaşılır,<br/>ilerledikçe ustalık ister.</h2></div><div><p>Her oyun tek bir açık fikir üzerine kurulur. Öğretici başlangıç bölümleri temel mekaniği gösterir; ilerleyen katmanlar daha büyük tahtalar, daha uzun çözüm yolları ve yeni stratejik kararlar sunar.</p><p>Oyun sayfalarındaki resmi App Store ve Google Play bağlantılarını kullanarak yayınlanan sürümlere doğrudan ulaşabilirsin. Yakında yayınlanacak oyunların mağaza bağlantıları hazır olduğunda aynı sayfalara eklenir.</p></div></section>
    <footer className="studio-footer"><a className="studio-brand" href="/"><span className="brand-logo"><Image src="/gorsen-games-logo.png" alt="" fill sizes="44px"/></span><span><b>GÖRSEN</b><small>GAMES</small></span></a><p>Görkem Şenol tarafından geliştirilen bağımsız mobil bulmaca oyunları.</p><FooterLinks/><small>© 2026 Görsen Games. Tüm hakları saklıdır.</small></footer>
  </main>;
}
