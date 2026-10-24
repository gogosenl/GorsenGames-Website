import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

const appStoreUrl = "https://apps.apple.com/us/app/bubblefin-pop/id6818507143";

export const metadata: Metadata = {
  title: "Bubblefin Pop – Renkli Su Balonu Bulmaca Oyunu",
  description: "Bubblefin Pop’ta renkli balon balıklarını birleştir, su balonlarını patlat ve 800 farklı fizik tabanlı bulmaca bölümünü tamamla.",
  alternates: { canonical: "/bubblefin-pop" },
  keywords: ["Bubblefin Pop", "Görsen Games", "balon balığı oyunu", "fizik tabanlı bulmaca", "renk eşleştirme", "mobil bulmaca oyunu"],
  openGraph: {
    title: "Bubblefin Pop – Renkleri birleştir, balonları patlat",
    description: "Renkli balon balıklarını birleştir, su balonlarını patlat ve 800 bölümlük su altı macerasına katıl.",
    url: "/bubblefin-pop",
    images: [{ url: "/games/bubblefin-pop/01-home.png", width: 1242, height: 2688, alt: "Bubblefin Pop ana ekranı" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubblefin Pop",
    description: "Renkleri birleştir, balonları patlat, balon balıklarını özgür bırak!",
    images: ["/games/bubblefin-pop/01-home.png"],
  },
};

const game: GameConfig = {
  kind: "ocean",
  name: "Bubblefin Pop",
  eyebrow: "FİZİK TABANLI SU ALTI BULMACASI",
  tagline: "Renkleri birleştir, balonları patlat, balon balıklarını özgür bırak!",
  description: "Renkli balon balıklarını aynı renkteki su balonlarında buluştur. Balonu istediğin noktaya sürükle, bırak ve fizik tabanlı hareketini izle. Hedef sayıya ulaşan balon patladığında içindeki balon balıkları özgürlüğe yüzsün.",
  heroImage: "/games/bubblefin-pop/03-gameplay-level-4.png",
  accent: "#079ed1",
  appStoreUrl,
  stats: [["800", "FARKLI BÖLÜM"], ["FİZİK", "TABANLI OYNANIŞ"], ["TR · EN", "DİL DESTEĞİ"]],
  steps: [
    ["Balonu yerleştir", "Balona veya alt hizasına dokun, istediğin noktaya sürükle ve suyun içine bırak."],
    ["Renkleri birleştir", "Aynı renkteki balonlar temas ettiğinde balon balıkları kesintisiz biçimde birleşir."],
    ["Balıkları özgür bırak", "Hedef sayıya ulaşan balonu patlat ve içindeki balon balıklarının okyanusa yüzmesini izle."],
  ],
  features: [
    "800 farklı ve aşamalı bölüm",
    "Gerçekçi su balonu fiziği",
    "Akıcı sürükleme, düşme ve birleşme mekanikleri",
    "Renk eşleştirmeye dayalı rahatlatıcı oynanış",
    "Hareketli engeller, akıntılar ve girdaplar",
    "Farklı şekillere sahip oyun alanları",
    "Yumuşak animasyonlar ve su temalı ses efektleri",
    "Üç öğretici başlangıç bölümü",
    "İnternet bağlantısı gerektirmeyen oynanış",
    "Türkçe ve İngilizce dil desteği",
  ],
  screenshots: [
    { src: "/games/bubblefin-pop/01-home.png", label: "Su altı macerası" },
    { src: "/games/bubblefin-pop/02-levels.png", label: "Mercan Bahçesi" },
    { src: "/games/bubblefin-pop/03-gameplay-level-4.png", label: "Fizik tabanlı birleşme" },
    { src: "/games/bubblefin-pop/04-gameplay-level-7.png", label: "Hareketli engeller" },
    { src: "/games/bubblefin-pop/05-gameplay-level-9.png", label: "İleri seviye hedefler" },
  ],
  layersTitle: "Her bölüm farklı bir su altı macerası.",
  layersText: "Üç öğretici bölümle başlayan yolculuk; yeni renkler, eğimli yüzeyler, hareketli engeller, akıntılar ve girdaplarla giderek derinleşir. Her balonun düşüşünü planla ve fiziksel hareketini çözümünün bir parçası hâline getir.",
  layers: ["Alıştırma", "Mercan Bahçesi", "Akıntılar", "Girdaplar", "800"],
  rewardTitle: "Okyanusun balon balıkları seni bekliyor.",
  rewardText: "Her hamleni dikkatle planla, aynı renkleri buluştur ve tüm balon balıklarını kurtar. Bubblefin Pop şimdi App Store’da; Google Play sürümü yakında.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Bubblefin Pop",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Puzzle Game",
  operatingSystem: "iOS",
  inLanguage: ["tr", "en"],
  url: "https://gorsengames.com/bubblefin-pop",
  installUrl: appStoreUrl,
  description: "Renkli su balonlarını fizik tabanlı hareketlerle birleştirerek balon balıklarını kurtardığın mobil bulmaca oyunu.",
  author: { "@type": "Organization", name: "Görsen Games" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <GameLanding game={game} />
  </>;
}
