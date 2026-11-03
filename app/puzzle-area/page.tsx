import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Puzzle Area – Mobil Alan Bulma Bulmaca Oyunu",
  description: "Sayıları takip et, doğru alanları bul ve katman katman ilerle. Yıldız sistemi ve özel şekilli yüzlerce mobil bulmacayı keşfet.",
  alternates: { canonical: "/puzzle-area", languages: { "tr-TR": "/puzzle-area", en: "/en/games/puzzle-area" } },
};

const layerScreens = [
  { label: "Başlangıç", src: "/optimized/games/puzzle-area/layers/3x3.webp" },
  { label: "7×7", src: "/optimized/games/puzzle-area/layers/7x7.webp" },
  { label: "8×8", src: "/optimized/games/puzzle-area/layers/8x8.webp" },
  { label: "9×9", src: "/optimized/games/puzzle-area/layers/9x9.webp" },
  { label: "10×10", src: "/optimized/games/puzzle-area/layers/10x10.webp" },
  { label: "11×11", src: "/optimized/games/puzzle-area/layers/11x10.webp" },
  { label: "11×12", src: "/optimized/games/puzzle-area/layers/12x10.webp" },
];

const game: GameConfig = {
  kind: "area",
  name: "Puzzle Area",
  eyebrow: "MOBİL ZEKA VE ALAN BULMA OYUNU",
  tagline: "Sayıları takip et, doğru alanları bul ve katman katman ilerle.",
  description: "Her bölümde, tahtadaki sayılardan başlayarak o sayı kadar kare içeren doğru alanları seç. Kare ve dikdörtgen alanları tamamladıkça tahta renklensin; daha büyük katmanlara ve daha yaratıcı şekillere ilerle.",
  heroImage: "/optimized/games/puzzle-area/home.webp",
  promoImage: "/optimized/games/generated/puzzle-area-promo-square-v3.webp",
  iconImage: "/optimized/games/generated/puzzle-area-icon-v2.webp",
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
    { src: "/optimized/games/puzzle-area/home.webp", label: "Ana ekran" },
    { src: "/optimized/games/puzzle-area/levels.webp", label: "Bölüm haritası" },
    { src: "/optimized/games/puzzle-area/layers/9x9.webp", label: "9×9 oynanış" },
    { src: "/optimized/games/puzzle-area/layers/10x10.webp", label: "10×10 oynanış" },
    { src: "/optimized/games/puzzle-area/layers/12x10.webp", label: "11×12 oynanış" },
  ],
  layersTitle: "Her katmanda daha yaratıcı alanlar.",
  layersText: "Öğretici başlangıç bölümleriyle sistemi öğren; 7×7’den 11×12’ye uzanan katmanlarda büyüyen tahtaları, özel şekilleri ve daha dikkatli düşünmeyi gerektiren bulmacaları keşfet.",
  layers: layerScreens.map(({ label }) => label),
  layerScreens,
  rewardTitle: "Daha akıcı bölümler, daha anlamlı ilerleme.",
  rewardText: "Yenilenen bölüm sonu ekranında hamlelerine göre yıldız kazan. İpuçlarından yararlan, katmanlarını aç ve daha büyük, daha yaratıcı alan şekillerine ilerle.",
};

const schema = {
  "@context": "https://schema.org", "@type": ["VideoGame", "MobileApplication"], name: "Puzzle Area", applicationCategory: "GameApplication", applicationSubCategory: "Puzzle Game", operatingSystem: "iOS, Android", inLanguage: ["tr", "en"], url: "https://gorsengames.com/puzzle-area", installUrl: "https://apps.apple.com/us/app/puzzle-area/id6800594940", sameAs: ["https://apps.apple.com/us/app/puzzle-area/id6800594940", "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea"], description: "Sayıların gösterdiği büyüklükte dikdörtgen alanları bulduğun mobil mantık ve bulmaca oyunu.", author: { "@id": "https://gorsengames.com/#gorkem-senol" }, publisher: { "@id": "https://gorsengames.com/#organization" }, offers: [{ "@type": "Offer", price: 0, priceCurrency: "USD", url: "https://apps.apple.com/us/app/puzzle-area/id6800594940" }, { "@type": "Offer", price: 0, priceCurrency: "USD", url: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea" }]
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><GameLanding game={game}/></>;
}
