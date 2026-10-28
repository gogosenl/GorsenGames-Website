import type { Metadata } from "next";
import Link from "next/link";
import Image from "../components/SiteImage";
import FooterLinks from "../components/FooterLinks";

export const metadata: Metadata = { title: "Güncellemeler", description: "Görsen Games oyunları, yeni çıkışlar ve stüdyo duyuruları.", alternates: { canonical: "/updates", languages: { "tr-TR": "/updates", en: "/en/updates" } } };
const updates = [
  { date: "28 Ekim 2026", title: "Trail Builder koleksiyona katıldı", copy: "Kenar sayıları, kayalıklar ve kontrol noktalarıyla şekillenen 500 bölümlük rota bulmacası.", href: "/trail-builder" },
  { date: "28 Eylül 2026", title: "Bubblefin Pop App Store’da", copy: "Renkli balon balıklarını fizik tabanlı su balonlarında birleştiren 800 bölümlük okyanus macerası.", href: "/bubblefin-pop" },
  { date: "14 Eylül 2026", title: "Liva Lights App Store’da", copy: "Satır ve sütun hedeflerini tamamlayarak ay ışığındaki bahçeleri aydınlat.", href: "/liva-lights" },
];
export default function UpdatesPage() { return <main className="about-page"><nav className="about-nav"><Link className="about-brand" href="/"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="46px"/></span><b>GÖRSEN <small>GAMES</small></b></Link><div><Link href="/#games">Oyunlar</Link><Link href="/about">Hakkımızda</Link><Link href="/updates">Güncellemeler</Link><Link href="/contact">İletişim</Link></div></nav><section className="updates-hero"><p>STÜDYO GÜNCELLEMELERİ</p><h1>Yeni bulmacalar.<br/><span>Yeni dünyalar.</span></h1><p>Görsen Games koleksiyonundaki yeni çıkışlar ve önemli geliştirmeler.</p></section><section className="updates-list">{updates.map((update) => <Link href={update.href} key={update.title}><time>{update.date}</time><div><h2>{update.title}</h2><p>{update.copy}</p></div><span>↗</span></Link>)}</section><footer className="about-footer"><Link className="about-brand" href="/"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="46px"/></span><b>GÖRSEN <small>GAMES</small></b></Link><p>Türkiye merkezli bağımsız mobil oyun stüdyosu.</p><FooterLinks/><small>© 2026 Görsen Games</small></footer></main>; }
