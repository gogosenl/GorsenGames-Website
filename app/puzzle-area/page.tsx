import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Puzzle Area – Mobil Alan Bulma Bulmaca Oyunu",
  description: "Sayıları takip et, doğru büyüklükte kare ve dikdörtgen alanları bul. 3×3’ten 11×12’ye uzanan 1080 mobil bulmacayı keşfet.",
};

const layerScreens = [
  { label: "3×3", src: "/games/puzzle-area/layers/3x3.jpeg" },
  { label: "4×4", src: "/games/puzzle-area/layers/4x4.jpeg" },
  { label: "5×5", src: "/games/puzzle-area/layers/5x5.jpeg" },
  { label: "6×6", src: "/games/puzzle-area/layers/6x6.jpeg" },
  { label: "7×7", src: "/games/puzzle-area/layers/7x7.jpeg" },
  { label: "8×8", src: "/games/puzzle-area/layers/8x8.jpeg" },
  { label: "9×9", src: "/games/puzzle-area/layers/9x9.jpeg" },
  { label: "10×10", src: "/games/puzzle-area/layers/10x10.jpeg" },
  { label: "11×11", src: "/games/puzzle-area/layers/11x10.jpeg" },
  { label: "11×12", src: "/games/puzzle-area/layers/12x10.jpeg" },
];

const game: GameConfig = {
  kind: "area",
  name: "Puzzle Area",
  eyebrow: "MOBİL ZEKA VE ALAN BULMA OYUNU",
  tagline: "Alanları bul, bulmacayı tamamla.",
  description: "Her sayının gösterdiği kadar hücreyi kapsayan kare veya dikdörtgen alanı bul. Seçime sayıdan ya da boş bir hücreden başla; bütün tahtayı doğru alanlarla tamamla.",
  heroImage: "/games/puzzle-area/home.jpeg",
  promoImage: "/games/generated/puzzle-area-promo-square-v3.png",
  iconImage: "/games/generated/puzzle-area-icon-v2.png",
  accent: "#0b78aa",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea",
  appStoreUrl: "https://apps.apple.com/us/app/puzzle-area/id6800594940",
  stats: [["1080", "BÖLÜM"], ["3×3–11×12", "GRID"], ["TR · EN", "DİL"]],
  steps: [
    ["Sayıyı oku", "Her sayı, seçilecek alanın kaç kutudan oluşacağını gösterir."],
    ["Alanı sınırla", "Kare veya dikdörtgen bir alan seç. L ve U biçimleri kullanılamaz."],
    ["Tahtayı tamamla", "Sayı alanın içinde kalsın; tüm ekran doğru alanlarla dolduğunda bölüm biter."],
  ],
  features: [
    "1080 çözülebilir bölüm",
    "3×3’ten 11×12’ye büyüyen gridler",
    "Kare ve dikdörtgen alan mantığı",
    "Animasyonlu başlangıç öğreticisi",
    "İpucu ve katman parası sistemi",
    "Bölüm tamamlama ödülleri",
    "Türkçe ve İngilizce destek",
    "Ses, müzik ve titreşim ayarları",
    "Tek elle oynanabilen sade arayüz",
    "Kısa oyun seanslarına uygun akıcı bölümler",
  ],
  screenshots: [
    { src: "/games/puzzle-area/home.jpeg", label: "Ana ekran" },
    { src: "/games/puzzle-area/levels.jpeg", label: "Bölüm haritası" },
    { src: "/games/puzzle-area/layers/8x8.jpeg", label: "8×8 oynanış" },
  ],
  layersTitle: "Her boyutta farklı bir alan bulmacası.",
  layersText: "3×3 ile temel mantığı öğren, 11×12’ye uzanan katmanlarda daha büyük alanları ve daha zorlu sınırları keşfet. Bir boyuta dokunarak gerçek bölüm ekranını incele.",
  layers: layerScreens.map(({ label }) => label),
  layerScreens,
  rewardTitle: "Çöz, kazan, yeni katmanları aç.",
  rewardText: "Bölüm ödülleriyle ipucu ve katman parası kazan. Zorlandığında ipucundan yararlan, biriktirdiğin katman parasıyla daha büyük tabloların kilidini aç.",
};

export default function Page() {
  return <GameLanding game={game} />;
}
