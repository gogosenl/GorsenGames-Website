import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Puzzle Area – Mobil Alan Bulma Bulmaca Oyunu",
  description: "Sayıları takip et, doğru alanları bul ve katman katman ilerle. Yıldız sistemi ve özel şekilli yüzlerce mobil bulmacayı keşfet.",
  alternates: { canonical: "/puzzle-area" },
};

const layerScreens = [
  { label: "Başlangıç", src: "/games/puzzle-area/layers/3x3.jpeg" },
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
  tagline: "Sayıları takip et, doğru alanları bul ve katman katman ilerle.",
  description: "Her bölümde, tahtadaki sayılardan başlayarak o sayı kadar kare içeren doğru alanları seç. Kare ve dikdörtgen alanları tamamladıkça tahta renklensin; daha büyük katmanlara ve daha yaratıcı şekillere ilerle.",
  heroImage: "/games/puzzle-area/home.jpeg",
  promoImage: "/games/generated/puzzle-area-promo-square-v3.png",
  iconImage: "/games/generated/puzzle-area-icon-v2.png",
  accent: "#0b78aa",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea",
  appStoreUrl: "https://apps.apple.com/us/app/puzzle-area/id6800594940",
  stats: [["1000+", "BÖLÜM"], ["7", "KATMAN"], ["TR · EN", "DİL"]],
  steps: [
    ["Sayıdan başla", "Tahtadaki bir sayıdan başlayarak parmağını sürükle."],
    ["Doğru alanı seç", "Sayının değeri kadar kare içeren kare veya dikdörtgen alanı oluştur."],
    ["Tahtayı renklendir", "Tüm alanları doğru tamamla, yıldızlarını kazan ve yeni katmana ilerle."],
  ],
  features: [
    "Başlangıçtan 11×12’ye uzanan yüzlerce bölüm",
    "Hamle sayısına göre yıldız sistemi",
    "Özel şekilli bulmaca bölümleri",
    "Kare ve dikdörtgen alan mantığı",
    "Hızlı ve öğretici başlangıç bölümleri",
    "İpucu ve katman parası sistemi",
    "Yenilenen bölüm tamamlama ve katman geçişleri",
    "Türkçe ve İngilizce destek",
    "Ses, müzik ve titreşim ayarları",
    "Tek elle oynanabilen sade arayüz",
    "iPhone, iPad ve Android uyumluluğu",
    "Kısa oyun seanslarına uygun akıcı bölümler",
  ],
  screenshots: [
    { src: "/games/puzzle-area/home.jpeg", label: "Ana ekran" },
    { src: "/games/puzzle-area/levels.jpeg", label: "Bölüm haritası" },
    { src: "/games/puzzle-area/layers/9x9.jpeg", label: "9×9 oynanış" },
    { src: "/games/puzzle-area/layers/10x10.jpeg", label: "10×10 oynanış" },
    { src: "/games/puzzle-area/layers/12x10.jpeg", label: "11×12 oynanış" },
  ],
  layersTitle: "Her katmanda daha yaratıcı alanlar.",
  layersText: "Öğretici başlangıç bölümleriyle sistemi öğren; 7×7’den 11×12’ye uzanan katmanlarda büyüyen tahtaları, özel şekilleri ve daha dikkatli düşünmeyi gerektiren bulmacaları keşfet.",
  layers: layerScreens.map(({ label }) => label),
  layerScreens,
  rewardTitle: "Daha akıcı bölümler, daha anlamlı ilerleme.",
  rewardText: "Yenilenen bölüm sonu ekranında hamlelerine göre yıldız kazan. İpuçlarından yararlan, katmanlarını aç ve daha büyük, daha yaratıcı alan şekillerine ilerle.",
};

export default function Page() {
  return <GameLanding game={game} />;
}
