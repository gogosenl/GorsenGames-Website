import type { Metadata } from "next";
import GameLanding, { type GameConfig } from "../components/GameLanding";

export const metadata: Metadata = {
  title: "Trail Builder: Route Craft – Rota Oluşturma ve Mantık Oyunu",
  description: "Trail Builder: Route Craft ile yolları birleştir, engelleri aş ve 500 farklı rota bulmacasını çöz. Planlama ve mantık becerilerini sınayan sürükleyici bir mobil oyun.",
  alternates: { canonical: "/trail-builder", languages: { "tr-TR": "/trail-builder", en: "/en/games/trail-builder" } },
  keywords: ["Trail Builder", "Route Craft", "rota oyunu", "yol bulmacası", "mantık oyunu", "mobil bulmaca", "bağlantı oyunu", "strateji oyunu", "iOS oyunu", "çevrimdışı oyun"],
  openGraph: {
    title: "Trail Builder: Route Craft – Rotanı oluştur, zirveye ulaş",
    description: "Başlangıçtan bitişe uzanan doğru rotayı oluştur, kenar sayılarını tamamla ve 500 farklı mantık bulmacasını çöz.",
    url: "/trail-builder",
    images: [{ url: "/optimized/games/trail-builder/01-home.webp", width: 1179, height: 2556, alt: "Trail Builder: Route Craft ana ekranı" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trail Builder: Route Craft",
    description: "Yolu planla, parçaları birleştir ve rotayı tamamla!",
    images: ["/optimized/games/trail-builder/01-home.webp"],
  },
};

const game: GameConfig = {
  kind: "trail",
  name: "Trail Builder: Route Craft",
  eyebrow: "ROTA OLUŞTURMA VE MANTIK OYUNU",
  tagline: "Yolu planla, parçaları birleştir ve rotayı tamamla!",
  description: "Başlangıç noktasından bitişe uzanan kesintisiz yolu çiz. Satır ve sütun sayılarını tamamla, kayalıkları aş, kontrol noktalarını doğru sırayla geç ve tek yönlü bağlantıları izleyerek zirveye ulaş.",
  heroImage: "/optimized/games/trail-builder/02-gameplay-98.webp",
  accent: "#d7a641",
  showPlayStore: false,
  availabilityText: "App Store’da Yakında",
  stats: [["500", "FARKLI BÖLÜM"], ["ROTA", "TABANLI MANTIK"], ["TR · EN", "DİL DESTEĞİ"]],
  steps: [
    ["Rotayı çiz", "Başlangıç noktasından itibaren parmağını sürükle ve yolu bitiş noktasına kesintisiz biçimde ulaştır."],
    ["Kuralları tamamla", "Kenar sayılarını karşıla, kayalıklardan uzak dur ve kontrol noktalarını doğru sırayla geç."],
    ["Zirveye ulaş", "Tek yönlü geçişleri izle, hamlelerini azalt ve bölümü üç yıldızla tamamlamaya çalış."],
  ],
  features: [
    "500 farklı ve giderek zorlaşan bölüm",
    "Akıcı sürükleme ve yol oluşturma animasyonları",
    "Satır ve sütun sayılarına dayalı mantık sistemi",
    "Kayalıklar, kontrol noktaları ve tek yönlü geçişler",
    "Bölüm sonu üç yıldız değerlendirmesi",
    "İpucu parası ve katman parası ödülleri",
    "Açılabilir yeni bölüm katmanları",
    "Türkçe ve İngilizce dil seçenekleri",
    "Müzik ve oynanışa uygun ses efektleri",
    "İnternet bağlantısı gerektirmeyen oynanış",
    "Reklam ve kullanıcı takibi içermeyen sade deneyim",
  ],
  screenshots: [
    { src: "/optimized/games/trail-builder/01-home.webp", label: "500 bölümlük macera" },
    { src: "/optimized/games/trail-builder/02-gameplay-98.webp", label: "Kayalık rota" },
    { src: "/optimized/games/trail-builder/03-checkpoints-93.webp", label: "Kontrol noktaları" },
    { src: "/optimized/games/trail-builder/04-clues-69.webp", label: "Satır ve sütun ipuçları" },
  ],
  layersTitle: "Her rotanın bir çözümü var.",
  layersText: "Kolay başlayan yolculukta oyun alanı giderek genişler; rotalar, engeller ve kurallar daha karmaşık hâle gelir. Bölümlerden kazandığın katman paralarını kullanarak yeni parkurların kilidini aç ve daha zorlu zirvelere ilerle.",
  layers: ["Başlangıç", "Kenar Sayıları", "Kayalıklar", "Kontrol Noktaları", "Tek Yön", "500"],
  rewardTitle: "Rotanı oluştur. Kuralları tamamla. Zirveye ulaş.",
  rewardText: "Bir rotada takıldığında ipucu paranla doğru yolun bir bölümünü gör. Daha az hamle kullan, yıldızlarını kazan ve yeni katmanları aç. Trail Builder: Route Craft yakında App Store’da.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Trail Builder: Route Craft",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Puzzle Game",
  operatingSystem: "iOS",
  inLanguage: ["tr", "en"],
  url: "https://gorsengames.com/trail-builder",
  description: "Satır ve sütun sayılarını tamamlayarak başlangıçtan bitişe doğru rotayı oluşturduğun mobil mantık oyunu.",
  author: { "@type": "Organization", name: "Görsen Games" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <GameLanding game={game} />
  </>;
}
