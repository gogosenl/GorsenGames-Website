import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Puzzle Area – Mobil Alan Bulma Bulmaca Oyunu",
  description: "Sayıları doğru büyüklükte kare ve dikdörtgen alanlara al. 3×3’ten 12×10’a uzanan 1080 mobil bulmacayı keşfet.",
};

const layerScreens = ["3x3", "4x4", "5x5", "6x6", "7x7", "8x8", "9x9", "10x10", "11x10", "12x10"].map((label) => ({
  label,
  src: `/games/puzzle-area/layers/${label}.jpeg`,
}));

const game: GameConfig = {
  kind: "area",
  name: "Puzzle Area",
  eyebrow: "MOBİL ZEKA VE ALAN BULMA OYUNU",
  tagline: "Sayıları doğru alanlara al, bölümü tamamla.",
  description: "Sayıların gösterdiği büyüklükte kare ve dikdörtgen alanları bul. Sade başlayan, her katmanda daha dikkat isteyen renkli bir bulmaca deneyimi.",
  heroImage: "/games/puzzle-area/home.jpeg",
  promoImage: "/games/generated/puzzle-area-promo-square-v3.png",
  iconImage: "/games/generated/puzzle-area-icon-v2.png",
  accent: "#0b78aa",
  stats: [["1080", "BÖLÜM"], ["3×3–12×10", "GRID"], ["TR · EN", "DİL"]],
  steps: [
    ["Sayıyı oku", "Her sayı, seçilecek alanın kaç kutudan oluşacağını gösterir."],
    ["Alanı sınırla", "Kare veya dikdörtgen bir alan seç. L ve U biçimleri kullanılamaz."],
    ["Tahtayı tamamla", "Sayı alanın içinde kalsın; tüm ekran doğru alanlarla dolduğunda bölüm biter."],
  ],
  features: [
    "1080 çözülebilir bölüm",
    "3×3’ten 12×10’a büyüyen gridler",
    "Kare ve dikdörtgen alan mantığı",
    "Animasyonlu başlangıç öğreticisi",
    "İpucu ve katman parası sistemi",
    "Bölüm tamamlama ödülleri",
    "Türkçe ve İngilizce destek",
    "Ses, müzik ve titreşim ayarları",
  ],
  screenshots: [
    { src: "/games/puzzle-area/home.jpeg", label: "Ana ekran" },
    { src: "/games/puzzle-area/levels.jpeg", label: "Bölüm haritası" },
    { src: "/games/puzzle-area/layers/8x8.jpeg", label: "8×8 oynanış" },
  ],
  layersTitle: "Her boyutta farklı bir alan bulmacası.",
  layersText: "3×3 ile temel mantığı öğren, 12×10’a uzanan katmanlarda daha büyük alanları ve daha zorlu sınırları keşfet. Bir boyuta dokunarak gerçek bölüm ekranını incele.",
  layers: layerScreens.map(({ label }) => label.replace("x", "×")),
  layerScreens,
  rewardTitle: "Çöz, kazan, yeni katmanları aç.",
  rewardText: "Bölüm ödülleriyle ipucu ve katman parası kazan. Zorlandığında ipucundan yararlan, biriktirdiğin katman parasıyla daha büyük tabloların kilidini aç.",
};

export default function Page() {
  return <GameLanding game={game} />;
}
