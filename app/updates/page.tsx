import type { Metadata } from "next";
import Link from "next/link";
import Image from "../components/SiteImage";
import FooterLinks from "../components/FooterLinks";

export const metadata: Metadata = {
  title: "Güncellemeler ve Yayın Geçmişi",
  description: "Görsen Games oyunlarının App Store ve Google Play çıkışları, önemli sürüm güncellemeleri ve stüdyo duyuruları.",
  alternates: { canonical: "/updates", languages: { "tr-TR": "/updates", en: "/en/updates" } },
};

const updates = [
  { date: "28 Ekim 2026", title: "Trail Builder koleksiyona katıldı", copy: "Kenar sayıları, kayalıklar ve kontrol noktalarıyla şekillenen 500 bölümlük rota bulmacası App Store ve Google Play’de yakında.", href: "/trail-builder", tag: "Yakında" },
  { date: "24 Ekim 2026", title: "Bubblefin Pop 1.0.1 güncellemesi", copy: "App Store’daki ilk güncelleme ile su altı macerasının kararlılığı ve oyun deneyimi geliştirildi.", href: "/bubblefin-pop", tag: "App Store" },
  { date: "22 Ekim 2026", title: "Bubblefin Pop App Store’da yayınlandı", copy: "Fizik tabanlı su balonları ve renkli balon balıklarıyla 800 bölümlük okyanus macerası başladı.", href: "/bubblefin-pop", tag: "App Store" },
  { date: "13 Ekim 2026", title: "Liva Lights App Store’da yayınlandı", copy: "Satır ve sütun hedeflerine dayanan 1.000 bölümlük gece bahçesi bulmacası oyuncularla buluştu.", href: "/liva-lights", tag: "App Store" },
  { date: "8 Ekim 2026", title: "Block Puzzle Grid 1.0.21 güncellemesi", copy: "App Store sürümü yeni iyileştirmeler ve daha kararlı bir parça yerleştirme deneyimi kazandı.", href: "/block-puzzle-grid", tag: "App Store" },
  { date: "22 Eylül 2026", title: "Puzzle Area iki mağazada güncellendi", copy: "Puzzle Area’nın App Store ve Google Play sürümleri aynı gün yeni iyileştirmelerle güncellendi.", href: "/puzzle-area", tag: "iOS · Android" },
  { date: "17 Eylül 2026", title: "Bloomshift ve Petal Shift iOS güncellemeleri", copy: "İki botanik bulmaca da App Store’da yeni sürümlerine kavuştu.", href: "/bloomshift", tag: "App Store" },
  { date: "10 Eylül 2026", title: "Fudu Hex 1.1.0 yayınlandı", copy: "Altıgen sayı birleştirme deneyimi, App Store’daki ilk büyük sürüm güncellemesiyle geliştirildi.", href: "/fudu-hex", tag: "App Store" },
  { date: "9 Eylül 2026", title: "Fudu Hex App Store’da yayınlandı", copy: "Aynı değerdeki altıgenleri bağlayarak büyüyen sayılara ulaştığın sınırsız bulmaca yayına çıktı.", href: "/fudu-hex", tag: "App Store" },
  { date: "30 Ağustos 2026", title: "Bloomshift Google Play’de yayınlandı", copy: "Çiçek gruplarını döndürerek bahçeyi canlandırdığın 1.060 bölümlük oyun Android’e geldi.", href: "/bloomshift", tag: "Google Play" },
  { date: "21 Ağustos 2026", title: "Petal Shift App Store’da yayınlandı", copy: "Satır ve sütun kaydırmaya dayanan botanik bulmaca iPhone ve iPad kullanıcılarıyla buluştu.", href: "/petal-shift", tag: "App Store" },
  { date: "19 Ağustos 2026", title: "Puzzle Area ve Block Puzzle Grid App Store’da", copy: "Görsen Games’in sayı-alan ve parça yerleştirme bulmacaları aynı gün iOS’ta yayınlandı.", href: "/puzzle-area", tag: "App Store" },
  { date: "17 Ağustos 2026", title: "Bloomshift App Store’da, Petal Shift Google Play’de", copy: "İki farklı bahçe bulmacası aynı gün iOS ve Android mağazalarında oyuncularla buluştu.", href: "/bloomshift", tag: "iOS · Android" },
  { date: "10 Ağustos 2026", title: "Puzzle Area ve Block Puzzle Grid Google Play’de", copy: "Görsen Games’in ilk iki Android bulmaca oyunu Google Play’de yayınlandı.", href: "/puzzle-area", tag: "Google Play" },
];

export default function UpdatesPage() {
  return <main className="about-page">
    <nav className="about-nav">
      <Link className="about-brand" href="/"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="46px"/></span><b>GÖRSEN <small>GAMES</small></b></Link>
      <div><Link href="/#games">Oyunlar</Link><Link href="/about">Hakkımızda</Link><Link href="/updates">Güncellemeler</Link><Link href="/contact">İletişim</Link></div>
    </nav>
    <section className="updates-hero">
      <p>YAYIN GEÇMİŞİ</p>
      <h1>Yeni bulmacalar.<br/><span>Büyüyen bir koleksiyon.</span></h1>
      <p>Resmî App Store ve Google Play yayın tarihleriyle, Görsen Games koleksiyonunun ilk çıkışlardan bugüne gelişimi.</p>
    </section>
    <section className="updates-list">
      {updates.map((update) => <Link href={update.href} key={`${update.date}-${update.title}`}>
        <time>{update.date}</time>
        <div><small className="updates-tag">{update.tag}</small><h2>{update.title}</h2><p>{update.copy}</p></div>
        <span>↗</span>
      </Link>)}
    </section>
    <footer className="about-footer"><Link className="about-brand" href="/"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="46px"/></span><b>GÖRSEN <small>GAMES</small></b></Link><p>Türkiye merkezli bağımsız mobil oyun stüdyosu.</p><FooterLinks/><small>© 2026 Görsen Games</small></footer>
  </main>;
}
