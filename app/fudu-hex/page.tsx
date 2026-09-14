import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Fudu Hex: Number Merge – Altıgen Sayı Birleştirme Oyunu",
  description: "Aynı değerdeki komşu altıgenleri bağla, daha büyük sayılar oluştur ve giderek yükselen bölüm hedeflerine ulaş.",
  alternates: { canonical: "/fudu-hex" },
  openGraph: {
    title: "Fudu Hex: Number Merge",
    description: "Altıgenleri bağla, sayıları birleştir ve hedefe ulaş.",
    url: "/fudu-hex",
  },
};

const game: GameConfig = {
  kind: "hex",
  name: "Fudu Hex",
  eyebrow: "ALTIGEN SAYI BİRLEŞTİRME BULMACASI",
  tagline: "Sayıları birleştir, hedefe ulaş.",
  description: "Aynı değerdeki komşu altıgenleri parmağınla bağla, uzun zincirlerle daha güçlü sayılar oluştur ve her bölümün giderek yükselen hedefini tamamla.",
  heroImage: "/games/fudu-hex/02-gameplay.png",
  appStoreUrl: "https://apps.apple.com/tr/app/fudu-hex-number-merge/id6808560173?l=tr",
  accent: "#ff6d21",
  stats: [["6", "BAĞLANTI YÖNÜ"], ["TR · EN", "DİL DESTEĞİ"], ["∞", "STRATEJİ"]],
  steps: [
    ["Altıgenleri bağla", "Aynı değere sahip en az iki komşu parçadan başla ve parmağını geçerli yol üzerinde sürükle."],
    ["Sayıyı büyüt", "Bağlantının toplamı yeterli olduğunda daha büyük değerlere geç; küçük değerlere geri dönmeden zincirini planla."],
    ["Hedefe ulaş", "Parmağını kaldır; parçalar son altıgende birleşsin ve bölüm hedefini oluşturana kadar devam et."],
  ],
  features: [
    "Altı farklı yönde yatay ve çapraz bağlantılar",
    "Toplama ve yükseltmeye dayalı stratejik sayı sistemi",
    "Giderek yükselen bölüm hedefleri",
    "Yumuşak birleşme ve parça düşme animasyonları",
    "Geçerli hamle kalmadığında otomatik karıştırma",
    "Yarı hedef ve tam hedef başarı işaretleri",
    "Cihazda otomatik ilerleme kaydı",
    "Türkçe ve İngilizce dil desteği",
    "Ayrı müzik ve ses kontrolleri",
    "Renklerle kolay ayırt edilen sayı seviyeleri",
  ],
  screenshots: [
    { src: "/games/fudu-hex/01-home.png", label: "Ana ekran" },
    { src: "/games/fudu-hex/02-gameplay.png", label: "2048 hedefi" },
    { src: "/games/fudu-hex/03-gameplay.png", label: "Başlangıç bölümü" },
    { src: "/games/fudu-hex/04-gameplay.png", label: "1 milyon hedefi" },
    { src: "/games/fudu-hex/05-gameplay.png", label: "İleri seviye" },
  ],
  layersTitle: "Her bölümde daha büyük bir hedef.",
  layersText: "Bölümler ilerledikçe hedef değerleri ve oyun alanındaki sayı aralığı yükselir. Daha güçlü parçalar açılırken nadir sayıların gelme ihtimali azalır; uzun bağlantıları doğru altıgende bitirmek daha önemli hâle gelir.",
  layers: ["8", "32", "512", "2048", "1m+"],
  modes: [
    { name: "Bağla", text: "Aynı değerdeki komşu altıgenlerden geçerli ve mümkün olduğunca uzun bir yol kur.", tone: "#ff6d21" },
    { name: "Birleştir", text: "Seçilen parçaları yolun sonundaki altıgende daha büyük bir sayıya dönüştür.", tone: "#e22e57" },
    { name: "Planla", text: "Yeni düşen parçaları ve hedef değerini birlikte değerlendirerek sonraki zincirini hazırla.", tone: "#169d98" },
  ],
  rewardTitle: "Hamle bitse bile oyun devam eder.",
  rewardText: "Geçerli bir bağlantı kalmadığında alan otomatik olarak karıştırılır. Yeni düzeni incele, en güçlü zinciri bul ve yarı hedeften bölüm hedefine uzanan ilerleme yolunu tamamla.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Fudu Hex: Number Merge",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS",
  inLanguage: ["tr", "en"],
  url: "https://gorsengames.com/fudu-hex",
  description: "Aynı değerdeki komşu altıgenleri bağlayarak daha büyük sayılar oluşturduğun stratejik mobil sayı bulmacası.",
  author: { "@type": "Organization", name: "Görsen Games" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <GameLanding game={game} />
  </>;
}
