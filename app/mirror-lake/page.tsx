import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Mirror Lake – Işık ve Yansıma Bulmaca Oyunu",
  description: "Aynaları doğru açılara çevir, ay ışığının yolunu oluştur ve 500 farklı Mirror Lake bulmacasında saklı nilüferleri uyandır.",
  alternates: { canonical: "/mirror-lake", languages: { "tr-TR": "/mirror-lake", en: "/en/games/mirror-lake" } },
  keywords: ["Mirror Lake", "ayna bulmacası", "ışık bulmacası", "yansıma oyunu", "mobil bulmaca", "mantık oyunu", "iOS oyunu", "Android oyunu"],
  openGraph: {
    title: "Mirror Lake – Aynaları çevir, ışığın yolunu bul",
    description: "Ay ışığını gölün üzerinde yönlendir, engelleri aş ve nilüferleri uyandır.",
    url: "/mirror-lake",
    images: [{ url: "/optimized/games/mirror-lake/01-home.webp", width: 900, height: 1951, alt: "Mirror Lake ana ekranı" }],
  },
  twitter: { card: "summary_large_image", title: "Mirror Lake", description: "Işığı yansıt. Nilüferleri uyandır.", images: ["/optimized/games/mirror-lake/01-home.webp"] },
};

const game: GameConfig = {
  kind: "mirror",
  name: "Mirror Lake",
  eyebrow: "IŞIK VE YANSIMA BULMACASI",
  tagline: "Işığı yansıt. Nilüferleri uyandır.",
  description: "Aynaları doğru açılara çevirerek ay ışığının göl üzerindeki yolunu oluştur. Kayaları, geçitleri ve portalları aş; ışığı hedefe ulaştırarak karanlıkta saklanan nilüferleri yeniden uyandır.",
  heroImage: "/optimized/games/mirror-lake/02-gameplay.webp",
  accent: "#d8bd69",
  availabilityText: "App Store ve Google Play’de Yakında",
  stats: [["500", "FARKLI BÖLÜM"], ["IŞIK", "TABANLI MANTIK"], ["TR · EN", "DİL DESTEĞİ"]],
  steps: [
    ["Aynaları incele", "Işık kaynağını, hedef nilüferi ve göl üzerindeki aynaların başlangıç açılarını dikkatle incele."],
    ["Işığı yönlendir", "Aynalara dokunarak onları döndür ve ay ışığının kesintisiz bir rota izlemesini sağla."],
    ["Nilüferi uyandır", "Kayaları ve özel engelleri aş, ışığı hedefe ulaştır ve bölümü mümkün olan en iyi çözümle tamamla."],
  ],
  features: [
    "500 farklı ve giderek zorlaşan bölüm",
    "Gerçekçi ışık ve yansıma efektleri",
    "Dönen, hareket eden, donmuş ve bağlantılı aynalar",
    "Kayalar, geçitler, portallar ve farklı engel türleri",
    "Bölüm sonlarında altın ödülleri ve kutlama animasyonları",
    "Atmosferik göl manzaraları ve sakin müzikler",
    "Türkçe ve İngilizce dil desteği",
    "Kolay öğrenilen, ustalaşması zor oynanış",
  ],
  screenshots: [
    { src: "/optimized/games/mirror-lake/01-home.webp", label: "Ay ışığındaki göl" },
    { src: "/optimized/games/mirror-lake/02-gameplay.webp", label: "Işığın ilk yolu" },
    { src: "/optimized/games/mirror-lake/05-gameplay.webp", label: "İleri seviye yansımalar" },
  ],
  layersTitle: "Her yansıma yeni bir yol açar.",
  layersText: "İlk bölümlerde tek bir ışık yolunu kurarken ilerledikçe hareketli, donmuş ve birbirine bağlı aynalarla karşılaşırsın. Portallar ve engeller, her gölde farklı düşünmeni gerektirir.",
  layers: ["Başlangıç", "Dönen Aynalar", "Kayalar", "Hareketli Aynalar", "Portallar", "500"],
  rewardTitle: "Aynaları çevir. Işığın yolunu bul. Gölü uyandır.",
  rewardText: "Her doğru yansıma gölün karanlıkta kalan bir bölümünü aydınlatır. Bölümleri tamamla, altınlarını kazan ve Mirror Lake’in huzurlu ama giderek zorlaşan dünyasını keşfet.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["VideoGame", "MobileApplication"],
  name: "Mirror Lake",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Puzzle Game",
  operatingSystem: "iOS, Android",
  inLanguage: ["tr", "en"],
  url: "https://gorsengames.com/mirror-lake",
  image: "https://gorsengames.com/optimized/games/mirror-lake/01-home.webp",
  description: "Aynaları çevirerek ay ışığını nilüferlere ulaştırdığın 500 bölümlük mobil yansıma bulmacası.",
  author: { "@id": "https://gorsengames.com/#gorkem-senol" },
  publisher: { "@id": "https://gorsengames.com/#organization" },
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><GameLanding game={game}/></>;
}
