import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Lantern Lines – Ay Işığında Mantık Bulmacası",
  description: "Fenerleri doğru hücrelere yerleştir, satır ve sütun hedeflerini tamamla ve 1.000 gece bahçesini ışığa kavuştur.",
  alternates: { canonical: "/lantern-lines" },
  keywords: ["Lantern Lines", "Görsen Games", "fener bulmacası", "mantık oyunu", "satır sütun bulmacası", "mobil bulmaca oyunu"],
  openGraph: {
    title: "Lantern Lines – Ay ışığında bahçeyi aydınlat",
    description: "Satır ve sütun hedeflerini tamamla, fenerleri doğru yerlere koy ve gece bahçelerini aydınlat.",
    url: "/lantern-lines",
  },
};

const game: GameConfig = {
  kind: "lantern",
  name: "Lantern Lines",
  eyebrow: "GECE BAHÇESİ MANTIK BULMACASI",
  tagline: "Ay ışığında bahçeyi aydınlat.",
  description: "Fenerleri doğru hücrelere yerleştir, satır ve sütun hedeflerini aynı anda tamamla ve karanlık bahçeleri ışığa kavuştur. Sakin atmosferi, zarif görselleri ve giderek zorlaşan düzenleriyle rahatlatıcı bir mantık yolculuğuna çık.",
  heroImage: "/games/lantern-lines/02-gameplay.png",
  accent: "#d0a94f",
  stats: [["1.000", "ÖZGÜN BÖLÜM"], ["3", "YILDIZ HEDEFİ"], ["TR · EN", "DİL DESTEĞİ"]],
  steps: [
    ["Hedefleri incele", "Her satırın ve sütunun yanında bulunan sayılara bak; kaç fener gerektiğini birlikte değerlendir."],
    ["Fenerleri yerleştir", "Uygun hücreye dokunarak fener koy. Yanlış yerleştirdiğin feneri aynı hücreye yeniden dokunarak kaldır."],
    ["Bahçeyi aydınlat", "Bütün satır ve sütun hedeflerini tamamla; daha az hamleyle çözerek üç yıldızı kazanmaya çalış."],
  ],
  features: [
    "1.000 özgün mantık bölümü",
    "Kolaydan zora ilerleyen oyun yapısı",
    "Farklı boyut ve şekillerde oyun alanları",
    "Satır ve sütun hedeflerine dayalı özgün mekanik",
    "Taşlar ve özel bahçe düzenleri",
    "Bölüm performansına göre üç yıldız sistemi",
    "Gerektiğinde kullanılabilen ipuçları",
    "Birbirinden farklı gece bahçeleri",
    "Yumuşak animasyonlar ve ışık efektleri",
    "Rahatlatıcı müzikler ve ortam sesleri",
    "Türkçe ve İngilizce dil desteği",
    "iPhone, iPad ve Android desteği",
  ],
  screenshots: [
    { src: "/games/lantern-lines/06-home.png", label: "Ayışığı Korusu" },
    { src: "/games/lantern-lines/02-gameplay.png", label: "Satır ve sütun hedefleri" },
    { src: "/games/lantern-lines/03-shaped-board.png", label: "Özel bahçe düzeni" },
  ],
  layersTitle: "Her bahçe farklı bir gece.",
  layersText: "Küçük öğretici bulmacalarla başlayan yolculuk, giderek büyüyen ve şekil değiştiren oyun alanlarıyla devam eder. Taşları, boşlukları ve tüm hedefleri birlikte düşünerek Ayışığı Korusu’ndan Yıldız Bahçesi’ne ilerle.",
  layers: ["Öğretici", "Ayışığı Korusu", "Gece Bahçesi", "Yıldız Bahçesi", "1.000"],
  modes: [
    { name: "İncele", text: "Satır ve sütun hedeflerini birlikte okuyarak kesin yerleşimleri bul.", tone: "#d0a94f" },
    { name: "Yerleştir", text: "Fenerleri uygun hücrelere koy; taşların kapattığı alanları planına dahil et.", tone: "#2d8a71" },
    { name: "Aydınlat", text: "Tüm hedefleri tamamla, bahçeyi ışığa kavuştur ve üç yıldızı hedefle.", tone: "#17334a" },
  ],
  rewardTitle: "Ayışığı Korusu’ndan Yıldız Bahçesi’ne.",
  rewardText: "Bölümleri tamamla, yıldızlarını topla ve birbirinden farklı gece bahçelerinin kilidini aç. Lantern Lines yakında App Store ve Google Play’de.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Lantern Lines",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  inLanguage: ["tr", "en"],
  url: "https://gorsengames.com/lantern-lines",
  description: "Satır ve sütun hedeflerine göre fener yerleştirerek gece bahçelerini aydınlattığın mobil mantık bulmacası.",
  author: { "@type": "Organization", name: "Görsen Games" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <GameLanding game={game} />
  </>;
}
