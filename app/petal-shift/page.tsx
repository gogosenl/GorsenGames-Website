import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Petal Shift – Görsen Games Mobil Bulmaca Oyunu",
  description: "Petal Shift’te çiçek sıralarını kaydır, desenleri tamamla ve 500 özgün bulmacadan oluşan sakin bir bahçe macerasına başla.",
  alternates: { canonical: "/petal-shift" },
  keywords: ["Petal Shift","Görsen Games","mobil bulmaca oyunu","Android bulmaca","düşünme oyunu","strateji bulmacası","çiçek oyunu","2D mobil oyun"],
  openGraph: {
    title: "Petal Shift",
    description: "Her esinti yeni bir yol açar",
    url: "/petal-shift",
    images: [{url:"/games/ruzgar-korusu/feature-graphic.png",width:1792,height:1024,alt:"Petal Shift – Her esinti yeni bir yol açar"}],
  },
  twitter: {card:"summary_large_image",title:"Petal Shift",description:"Her esinti yeni bir yol açar",images:["/games/ruzgar-korusu/feature-graphic.png"]},
};

const game: GameConfig = {
  kind: "wind",
  name: "Petal Shift",
  eyebrow: "2D MOBİL BULMACA VE STRATEJİ OYUNU",
  tagline: "Her esinti yeni bir yol açar.",
  description: "Sıraları kaydır, desenleri tamamla ve yüzlerce sakin bulmacayı çöz. Basit tek parmak kontrolü, büyüyen bahçelerde dikkatli planlamaya dönüşür.",
  heroImage: "/games/ruzgar-korusu/01-ana-ekran.jpg",
  accent: "#173f35",
  stats: [["500","BÖLÜM"],["10","KATMAN"],["3×3–6×8","TAHTA"]],
  steps: [
    ["Bir sıra seç","Çiçeklerden oluşan bir satıra veya sütuna dokun."],
    ["İstediğin yöne sürükle","Sırayı sağa, sola, yukarı veya aşağı kaydır; bütün parçalar birlikte hareket etsin."],
    ["Deseni incele","Her hamleden sonra çiçeklerin hedef renk düzenine ne kadar yaklaştığını gözlemle."],
    ["Bahçeyi tamamla","Doğru hamleleri planla ve bütün çiçekleri hedef desenine yerleştir."],
  ],
  features: [
    "500 özgün bölüm",
    "Her biri 50 bölümlük 10 bahçe katmanı",
    "3×3’ten 6×8’e büyüyen oyun alanları",
    "Tek parmakla hassas satır ve sütun sürükleme",
    "Akıcı kaldırma, kaydırma ve oturma animasyonları",
    "Ücretsiz ve ücretli ipucu sistemi",
    "Koru Taşı ve İpucu Yaprağı kaynakları",
    "İnternet gerektirmeyen temel oynanış",
  ],
  screenshots: [
    {src:"/games/ruzgar-korusu/01-ana-ekran.jpg",label:"Ana ekran"},
    {src:"/games/ruzgar-korusu/02-oynanis.jpg",label:"Oynanış"},
    {src:"/games/ruzgar-korusu/03-bolumler.jpg",label:"Bahçe katmanları"},
  ],
  layersTitle: "Her katmanda büyüyen bir bahçe.",
  layersText: "Filiz Avlusu’nun 3×3 başlangıcından Kadim Çiçeklik’in 6×8 düzenine uzanan on katman, her adımda daha fazla planlama ve daha derin çözümler sunar.",
  layers: ["Filiz · 3×3","Yonca · 4×3","Rüzgâr · 4×4","Mercan · 5×4","Lavanta · 5×5","Ayışığı · 5×6","Dikey Yoncalar · 5×7","Kristal · 6×6","Göğe Uzanan · 6×7","Kadim · 6×8"],
  rewardTitle: "Sakin ilerle, yeni koruları aç.",
  rewardText: "Bölümleri tamamla, Koru Taşı ve İpucu Yaprağı kazan. İpuçlarından yararlan, yeni bahçe katmanlarını aç ve tamamladığın bulmacalara istediğin zaman geri dön.",
  languages: "Türkçe",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Petal Shift",
  applicationCategory: "GameApplication",
  operatingSystem: "Android",
  softwareVersion: "1.0.0",
  inLanguage: "tr",
  description: "Çiçek sıralarını kaydırarak hedef bahçe desenini tamamladığın 2D mobil bulmaca ve strateji oyunu.",
  author: {"@type":"Organization",name:"Görsen Games"},
};

export default function Page(){
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <GameLanding game={game}/>
  </>;
}
