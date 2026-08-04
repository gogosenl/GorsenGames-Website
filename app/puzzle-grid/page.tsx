import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Puzzle Grid – Modern Mobil Parça Yerleştirme Oyunu",
  description: "Renkli parçaları doğru konumlara sürükle, 3×3’ten 9×9’a büyüyen tabloları tamamla.",
};

const layerScreens = ["3x3", "4x4", "5x5", "6x6", "7x7", "8x8", "9x9"].map((label) => ({
  label,
  src: `/games/puzzle-grid/layers/${label}.jpeg`,
}));

const game: GameConfig = {
  kind: "grid",
  name: "Puzzle Grid",
  eyebrow: "MODERN MOBİL PARÇA YERLEŞTİRME OYUNU",
  tagline: "Parçaları çerçeveden al, tabloyu tamamla.",
  description: "Yumuşak renkli parçaları gride sürükle, doğru konumlarına yerleştir ve her hücreyi doldur. Rahatlatıcı görünen, ilerledikçe stratejikleşen premium bir puzzle deneyimi.",
  heroImage: "/games/puzzle-grid/home.png",
  accent: "#c54d2d",
  stats: [["850", "BÖLÜM"], ["3×3–9×9", "GRID"], ["TR · EN", "DİL"]],
  steps: [
    ["Sürükle", "Renkli parçayı tepsiden tut ve tabloya doğru taşı."],
    ["Yerleştir", "Parça yalnızca uygun konuma oturur; yanlış bırakılırsa tepsiye döner."],
    ["Tamamla", "Bütün parçaları doğru yerlere koy ve boşluksuz tabloyu bitir."],
  ],
  features: [
    "850 deterministik bölüm",
    "3×3’ten 9×9’a gelişen tablolar",
    "Akıcı sürükle-bırak kontrolü",
    "Ücretsiz ve ücretli ipucu sistemi",
    "Katman parası ve bölüm haritası",
    "Animasyonlu ödül ekranları",
    "Türkçe ve İngilizce arayüz",
    "Android ve gelecekte iOS",
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
