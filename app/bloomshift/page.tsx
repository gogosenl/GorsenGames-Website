import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Bloomshift – Sakin Renk Eşleştirme Bulmaca Oyunu",
  description: "2×2 çiçek gruplarını döndür, renkleri eşleştir ve Kolay, Orta ve Zor modlarda toplam 1060 sakin mobil bulmacayı keşfet.",
  alternates: { canonical: "/bloomshift" },
  openGraph: { title: "Bloomshift", description: "Dört çiçeği birlikte döndür ve renkleri kendi bahçe alanlarıyla eşleştir.", url: "/bloomshift" },
};

const game: GameConfig = {
  kind: "garden",
  name: "Bloomshift",
  eyebrow: "SAKİN RENK EŞLEŞTİRME BULMACASI",
  tagline: "Dalgaları döndür, bahçeyi renklendir.",
  description: "Seçtiğin 2×2 alandaki dört çiçeği saat yönünde veya tersine döndür, bütün çiçekleri kendi renklerindeki bahçe hücrelerine ulaştır. 10 ısınma ve 1050 ana bölümde kendi hızında düşün.",
  heroImage: "/games/v2/bloomshift-home.png",
  accent: "#1b8066",
  appStoreUrl: "https://apps.apple.com/tr/app/bloomshift/id6800653408?l=tr",
  stats: [["1060", "BÖLÜM"], ["21", "ANA KATMAN"], ["3", "MOD"]],
  steps: [
    ["Alanı seç", "Döndürmek istediğin 2×2 çiçek grubunu belirle."],
    ["Yönü seç", "Dört çiçeği saat yönünde veya saat yönünün tersine birlikte döndür."],
    ["Renkleri eşleştir", "Bütün çiçekleri kendi renklerindeki bahçe alanlarına ulaştır."],
  ],
  features: ["1060 çözülebilir bölüm", "10 bölümlük 2×3 ısınma turu", "21 ana bahçe katmanı", "2×3’ten 6×6’ya büyüyen tablolar", "Kolay, Orta ve Zor modlar", "2’den 6’ya çıkan renk sayısı", "Akıcı çiçek döndürme animasyonları", "3 ücretsiz ipucu ve otomatik hamle sistemi", "İsteğe bağlı 2× ödül seçeneği", "Hesapsız ve çevrimdışı temel oynanış", "Türkçe ve İngilizce arayüz"],
  screenshots: [
    { src: "/games/v2/bloomshift-home.png", label: "Ana ekran" },
    { src: "/games/v2/dalga-game.jpg", label: "Oynanış" },
    { src: "/games/v2/bloomshift-levels.png", label: "Bölüm haritası" },
  ],
  layersTitle: "Her dalgada yeni bir bulmaca.",
  layersText: "10 bölümlük 2×3 ısınmanın ardından yedi tahta düzeninin her biri Kolay, Orta ve Zor katmanlara ayrılır. Her ana katman 50 bölüm sunar; böylece toplam 1060 farklı bulmaca oluşur.",
  layers: ["Isınma · 2×3", "3×3", "4×3", "4×4", "5×4", "5×5", "6×5", "6×6"],
  modes: [
    { name: "Kolay", text: "Daha az renk, düzenli hedef alanları ve temel mekaniği öğreten sakin başlangıçlar.", tone: "#35a27d" },
    { name: "Orta", text: "Daha fazla renk, uzayan çözüm yolları ve birkaç hamle sonrasını planlama gerektiren düzenler.", tone: "#e4aa2c" },
    { name: "Zor", text: "Karışık hedef bölgeleri, daha uzun çözümler ve dikkatli planlama isteyen bahçeler.", tone: "#8b6fd6" },
  ],
  rewardTitle: "Oynayarak bütün bahçeyi aç.",
  rewardText: "İlk 3 ipucu ücretsizdir; sonrasında otomatik ipucu 10 ipucu parası kullanır. Kolay bölümler 2, Orta bölümler 3, Zor bölümler 4 ipucu ve katman parası kazandırır. Standart katmanlar 40 katman parasıyla açılır ve bütün içeriğe oynayarak ulaşılabilir.",
};

export default function Page() {
  return <GameLanding game={game} />;
}
