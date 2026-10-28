import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Petal Shift – Slide, Match, Bloom",
  description: "Renkli çiçek taşlarını satır ve sütunlar halinde kaydır, doğru dizilimi bul ve bahçeyi çiçeklendiren rahatlatıcı bulmacaları çöz.",
  alternates: { canonical: "/petal-shift", languages: { "tr-TR": "/petal-shift", en: "/en/games/petal-shift" } },
  keywords: ["Petal Shift","Görsen Games","Görkem Şenol","mobil bulmaca oyunu","satır sütun kaydırma","renk eşleştirme","strateji bulmacası","çiçek oyunu","2D mobil oyun"],
  openGraph: {
    title: "Petal Shift",
    description: "Slide. Match. Bloom.",
    url: "/petal-shift",
    images: [{url:"/optimized/games/petal-shift/feature-graphic-petal-shift-1024x500.webp",width:1024,height:500,alt:"Petal Shift – Slide. Match. Bloom."}],
  },
  twitter: {card:"summary_large_image",title:"Petal Shift",description:"Slide. Match. Bloom.",images:["/optimized/games/petal-shift/feature-graphic-petal-shift-1024x500.webp"]},
};

const game: GameConfig = {
  kind: "wind",
  name: "Petal Shift",
  eyebrow: "2D MOBİL BULMACA VE STRATEJİ OYUNU",
  tagline: "Slide. Match. Bloom.",
  description: "Renkli çiçek taşlarını satır ve sütunlar halinde kaydır. Kenardan çıkan taş karşı taraftan tekrar girsin; her hamlenin bütün bahçeyi değiştirdiği sakin ama stratejik bulmacaları kendi temponda çöz.",
  heroImage: "/optimized/games/ruzgar-korusu/01-ana-ekran.webp",
  promoImage: "/optimized/games/petal-shift/feature-graphic-petal-shift-1024x500.webp",
  accent: "#173f35",
  appStoreUrl: "https://apps.apple.com/us/app/petal-shift-bloom-puzzle/id6801522855",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.gorsengames.ruzgarkorusu&hl=tr",
  stats: [["610","BÖLÜM"],["12","ANA KATMAN"],["3×2–7×8","TAHTA"]],
  steps: [
    ["Bir sıra seç","Çiçeklerden oluşan bir satırı veya sütunu seç."],
    ["İstediğin yöne sürükle","Sıradaki bütün çiçekleri birlikte kaydır; uçtaki çiçek karşı taraftan geri gelsin."],
    ["Renkleri eşleştir","Her çiçeği kendi rengini gösteren bahçe zeminine ulaştır."],
    ["Bahçeyi tamamla","Bütün renkler eşleştiğinde bölümü bitir ve yeni katmana ilerle."],
  ],
  features: [
    "10 alıştırma ve 600 ana bölüm",
    "Her biri 50 bölümlük 12 ana bahçe katmanı",
    "3×2’den 7×8’e büyüyen oyun alanları",
    "2, 3, 4 ve 5 renkli ilerleyen bulmacalar",
    "Uçtan uca döngülü satır ve sütun kaydırma",
    "Akıcı kaldırma, kaydırma ve oturma animasyonları",
    "Daha iyi çözümler için yıldız sistemi",
    "İlk 3 kullanım ücretsiz, ardından 3 yapraklık ipucu sistemi",
    "Koru Taşı ve İpucu Yaprağı kaynakları",
    "İnternet gerektirmeyen temel oynanış",
    "Türkçe ve İngilizce dil desteği",
    "Zaman baskısı olmadan kendi hızında oynanış",
  ],
  screenshots: [
    {src:"/optimized/games/ruzgar-korusu/01-ana-ekran.webp",label:"Ana ekran"},
    {src:"/optimized/games/ruzgar-korusu/02-oynanis.webp",label:"Oynanış"},
    {src:"/optimized/games/ruzgar-korusu/03-bolumler.webp",label:"Bahçe katmanları"},
  ],
  layersTitle: "Her katmanda büyüyen bir bahçe.",
  layersText: "10 bölümlük 3×2 alıştırmayla mekaniği öğren. Ardından Filiz Avlusu’ndan Sonsuz Sarmaşık’a uzanan 12 katmanda daha büyük bahçeler, daha fazla renk ve daha uzun kaydırmalarla karşılaş.",
  layers: ["Alıştırma · 3×2","Filiz Avlusu · 3×3","Yonca Yolu · 4×3","Rüzgâr Bahçesi · 4×4","Mercan Terası · 5×4","Lavanta Korusu · 5×5","Ayışığı Serası · 5×6","Dikey Yoncalar · 5×7","Kristal Bahçe · 6×6","Göğe Uzanan Koru · 6×7","Kadim Çiçeklik · 6×8","Yıldız Çayırı · 7×7","Sonsuz Sarmaşık · 7×8"],
  rewardTitle: "Sakin ilerle, yeni koruları aç.",
  rewardText: "Bölümleri tamamla, Koru Taşı ve İpucu Yaprağı kazan. Her yeni katmanı 50 Koru Taşıyla aç; istersen bölüm ödülünü reklam izleyerek ikiye katla. Bütün ilerleme oynayarak elde edilebilir.",
  languages: "Türkçe · English",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Petal Shift",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, Android",
  softwareVersion: "1.0.0",
  inLanguage: ["tr", "en"],
  url: "https://gorsengames.com/petal-shift",
  sameAs: [
    "https://apps.apple.com/us/app/petal-shift-bloom-puzzle/id6801522855",
    "https://play.google.com/store/apps/details?id=com.gorsengames.ruzgarkorusu&hl=tr",
  ],
  description: "Satırları ve sütunları kaydırarak çiçekleri renkli bahçe zeminleriyle eşleştirdiğin 610 bölümlük mobil bulmaca oyunu.",
  author: {"@type":"Person",name:"Görkem Şenol",worksFor:{"@type":"Organization",name:"Görsen Games"}},
};

export default function Page(){
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <GameLanding game={game}/>
  </>;
}
