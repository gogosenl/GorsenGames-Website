import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Block Puzzle Grid – Modern Mobil Parça Yerleştirme Oyunu",
  description: "Renkli parçaları gride sürükle, sabit parçaları hesaba kat ve 3×3’ten 9×9’a büyüyen tabloları tamamla.",
  alternates: { canonical: "/block-puzzle-grid" },
  openGraph: { title: "Block Puzzle Grid", description: "Renkli parçaları doğru konumlara sürükle ve tabloyu tamamla.", url: "/block-puzzle-grid" },
};

const layerScreens = ["3x3", "4x4", "5x5", "6x6", "7x7", "8x8", "9x9"].map((label) => ({
  label,
  src: `/games/puzzle-grid/layers/${label}.jpeg`,
}));

const game: GameConfig = {
  kind: "grid",
  name: "Block Puzzle Grid",
  eyebrow: "MODERN MOBİL PARÇA YERLEŞTİRME OYUNU",
  tagline: "Parçaları yerleştir, tabloyu tamamla, yeni katmanları aç.",
  description: "Renkli parçaları alt tepsiden gride sürükle, doğru konumlara yerleştir ve bütün hücreleri doldur. İlerleyen bölümlerde sabit parçaları hesaba katarak daha stratejik çözümler üret.",
  heroImage: "/games/puzzle-grid/home.png",
  promoImage: "/games/generated/puzzle-grid-promo-v2.png",
  iconImage: "/games/generated/puzzle-grid-icon-v2.png",
  accent: "#c54d2d",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlegrid",
  appStoreUrl: "https://apps.apple.com/us/app/block-puzzle-grid/id6800597451",
  stats: [["850", "BÖLÜM"], ["3×3–9×9", "GRID"], ["TR · EN", "DİL"]],
  steps: [
    ["Sürükle", "Renkli parçayı tepsiden tut ve tabloya doğru taşı."],
    ["Yerleştir", "Parça yalnızca uygun konuma oturur; yanlış bırakılırsa tepsiye geri döner."],
    ["Planla", "Sabit parçaları ve kalan boşlukları birlikte değerlendir."],
    ["Tamamla", "Bütün parçaları doğru yerlere koy, tabloyu bitir ve yeni katmanları aç."],
  ],
  features: [
    "850 giderek zorlaşan bölüm",
    "3×3’ten 9×9’a gelişen tablolar",
    "Akıcı sürükle-bırak kontrolü",
    "Bazı bölümlerde sabit başlangıç parçaları",
    "Ücretsiz ve ücretli ipucu sistemi",
    "Katman parası ve bölüm haritası",
    "Animasyonlu ödül ekranları",
    "Türkçe ve İngilizce arayüz",
    "Android ve iOS desteği",
    "Müzik, ses ve titreşim ayarları",
  ],
  screenshots: [
    { src: "/games/puzzle-grid/home.png", label: "Ana ekran" },
    { src: "/games/puzzle-grid/levels.jpeg", label: "Bölüm haritası" },
    { src: "/games/puzzle-grid/layers/7x7.jpeg", label: "7×7 oynanış" },
  ],
  layersTitle: "Her katmanda daha büyük bir tablo.",
  layersText: "3×3 ile parçaları yerleştirmeyi öğren, 9×9’a uzanan katmanlarda daha büyük tabloları ve daha stratejik parça düzenlerini keşfet. Bir boyuta dokunarak gerçek bölüm ekranını incele.",
  layers: layerScreens.map(({ label }) => label.replace("x", "×")),
  layerScreens,
  rewardTitle: "İlerlemenin her adımı karşılık bulur.",
  rewardText: "Bölümleri tamamladıkça ipucu ve katman parası kazan. Yeni katmanları aç, gerektiğinde doğru parçayı otomatik yerleştiren ipucunu kullan ve ödülünü reklamla ikiye katlama seçeneğinden yararlan.",
};

export default function Page() {
  return <GameLanding game={game} />;
}
