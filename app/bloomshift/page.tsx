import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "BloomShift – Sakin Renk Eşleştirme Bulmaca Oyunu",
  description: "Dalgaları döndür, çiçekleri renkli alanlarına ulaştır ve Kolay, Orta ve Zor modlarda toplam 1050 sakin mobil bulmacayı keşfet.",
  alternates: { canonical: "/bloomshift" },
  openGraph: { title: "BloomShift", description: "Dalgaları döndür, çiçekleri renkli alanlarına ulaştır.", url: "/bloomshift" },
};

const game: GameConfig = {
  kind: "garden",
  name: "BloomShift",
  eyebrow: "SAKİN RENK EŞLEŞTİRME BULMACASI",
  tagline: "Dalgaları döndür, bahçeyi renklendir.",
  description: "Çiçekleri dalgalarla kaydır, renkleri eşleştir ve 1050 sakin bulmacadan oluşan bahçeyi keşfet. Refleksten çok gözlem, planlama ve birkaç hamle sonrasını düşün.",
  heroImage: "/games/v2/dalga-home.jpg",
  accent: "#1b8066",
  appStoreUrl: "https://apps.apple.com/tr/app/bloomshift/id6800653408?l=tr",
  stats: [["1050", "BÖLÜM"], ["7", "TAHTA"], ["3", "MOD"]],
  steps: [
    ["Yönü seç", "Çiçeklerin sağa veya sola hareket edeceği yönü belirle."],
    ["Dalgaya dokun", "Dört hücrenin ortasındaki dalga düğmesine dokun; dört çiçek birlikte dönsün."],
    ["Renkleri eşleştir", "Bütün çiçekleri kendi renklerindeki bahçe alanlarına ulaştır."],
  ],
  features: ["1050 çözülebilir bölüm", "7 farklı tahta düzeni", "Kolay, Orta ve Zor modlar", "Akıcı çiçek kayma animasyonları", "10 ipucu parasına otomatik hamle", "Oynayarak açılabilen tüm içerik", "Türkçe ve İngilizce arayüz", "Çevrimdışı temel oynanış"],
  screenshots: [
    { src: "/games/v2/dalga-home.jpg", label: "Ana ekran" },
    { src: "/games/v2/dalga-game.jpg", label: "Oynanış" },
    { src: "/games/v2/dalga-levels.jpg", label: "Bölüm haritası" },
  ],
  layersTitle: "Her dalgada yeni bir bulmaca.",
  layersText: "3×3 bahçelerden 6×6 düzenlere uzanan 1050 bölümde renk sayısı ve çözüm yolları giderek gelişir. Yedi tahta düzeninin her biri üç zorluk modu ve 50 özgün bölüm sunar.",
  layers: ["3×3", "4×3", "4×4", "5×4", "5×5", "6×5", "6×6"],
  modes: [
    { name: "Kolay", text: "Daha az renk, düzenli hedef alanları ve temel mekaniği öğreten sakin başlangıçlar.", tone: "#35a27d" },
    { name: "Orta", text: "Daha fazla renk, uzayan çözüm yolları ve birkaç hamle sonrasını planlama gerektiren düzenler.", tone: "#e4aa2c" },
    { name: "Zor", text: "Karışık hedef bölgeleri, daha uzun çözümler ve dikkatli planlama isteyen bahçeler.", tone: "#8b6fd6" },
  ],
  rewardTitle: "Oynayarak bütün bahçeyi aç.",
  rewardText: "Kolay bölümler 2, Orta bölümler 3, Zor bölümler 4 ipucu ve katman parası kazandırır. Mağaza yalnızca ilerlemeyi hızlandırır; bütün katmanlara satın alma yapmadan ulaşabilirsin.",
};

export default function Page() {
  return <GameLanding game={game} />;
}
