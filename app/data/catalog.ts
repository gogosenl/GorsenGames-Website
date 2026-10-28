export type CatalogGame = {
  slug: string;
  name: string;
  categoryTr: string;
  categoryEn: string;
  descriptionTr: string;
  descriptionEn: string;
  image: string;
  secondary: string;
  accent: string;
  levels: string;
  platforms: ("ios" | "android")[];
  appStore?: string;
  playStore?: string;
  featuresEn: string[];
};

export const catalogGames: CatalogGame[] = [
  {
    slug: "puzzle-area", name: "Puzzle Area", categoryTr: "Sayı ve alan bulmacası", categoryEn: "Number and area puzzle",
    descriptionTr: "Sayıları takip et, doğru büyüklükteki dikdörtgen alanları bul ve tahtayı tamamla.",
    descriptionEn: "Follow the numbers, find correctly sized rectangular areas, and complete increasingly challenging boards.",
    image: "/optimized/games/puzzle-area/layers/8x8.webp", secondary: "/optimized/games/puzzle-area/levels.webp", accent: "#7b24d5", levels: "1,080",
    platforms: ["ios", "android"], appStore: "https://apps.apple.com/us/app/puzzle-area/id6800594940", playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea",
    featuresEn: ["Rectangular area logic", "Boards up to 11×12", "Hint and star system", "Turkish and English"],
  },
  {
    slug: "block-puzzle-grid", name: "Block Puzzle Grid", categoryTr: "Parça yerleştirme bulmacası", categoryEn: "Piece-placement puzzle",
    descriptionTr: "Renkli parçaları doğru konumlara sürükle ve büyüyen tabloları boşluksuz tamamla.",
    descriptionEn: "Drag colorful pieces into place and complete growing grids without leaving a single gap.",
    image: "/optimized/games/puzzle-grid/layers/7x7.webp", secondary: "/optimized/games/puzzle-grid/levels.webp", accent: "#191716", levels: "850",
    platforms: ["ios", "android"], appStore: "https://apps.apple.com/us/app/block-puzzle-grid/id6800597451", playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlegrid",
    featuresEn: ["Drag-and-drop pieces", "Multiple grid sizes", "Layer progression", "Hints and rewards"],
  },
  {
    slug: "bloomshift", name: "Bloomshift", categoryTr: "Renk ve döndürme bulmacası", categoryEn: "Color and rotation puzzle",
    descriptionTr: "2×2 çiçek gruplarını döndür, renkleri eşleştir ve bahçeyi canlandır.",
    descriptionEn: "Rotate 2×2 flower groups, match every color, and bring the garden back to life.",
    image: "/optimized/games/v2/dalga-game.webp", secondary: "/optimized/games/v2/bloomshift-levels.webp", accent: "#145342", levels: "1,060",
    platforms: ["ios", "android"], appStore: "https://apps.apple.com/tr/app/bloomshift/id6800653408?l=tr", playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.dalgabahcesi",
    featuresEn: ["2×2 rotation mechanic", "21 garden layers", "Calm visual design", "No time pressure"],
  },
  {
    slug: "petal-shift", name: "Petal Shift", categoryTr: "Botanik kaydırma bulmacası", categoryEn: "Botanical sliding puzzle",
    descriptionTr: "Satırları ve sütunları kaydır, çiçek taşlarını doğru zeminlerle eşleştir.",
    descriptionEn: "Slide entire rows and columns, match flower tiles to their colored ground, and make the garden bloom.",
    image: "/optimized/games/ruzgar-korusu/02-oynanis.webp", secondary: "/optimized/games/ruzgar-korusu/01-ana-ekran.webp", accent: "#173f35", levels: "610",
    platforms: ["ios", "android"], appStore: "https://apps.apple.com/us/app/petal-shift-bloom-puzzle/id6801522855", playStore: "https://play.google.com/store/apps/details?id=com.gorsengames.ruzgarkorusu&hl=tr",
    featuresEn: ["Row and column sliding", "Wraparound movement", "12 garden layers", "Relaxed strategic play"],
  },
  {
    slug: "fudu-hex", name: "Fudu Hex", categoryTr: "Altıgen sayı birleştirme", categoryEn: "Hexagonal number merge",
    descriptionTr: "Aynı değerdeki altıgenleri bağla, sayıları büyüt ve bölüm hedeflerine ulaş.",
    descriptionEn: "Connect matching hexagons, build larger values, and reach increasingly ambitious targets.",
    image: "/optimized/games/fudu-hex/02-gameplay.webp", secondary: "/optimized/games/fudu-hex/01-home.webp", accent: "#9d173b", levels: "∞",
    platforms: ["ios"], appStore: "https://apps.apple.com/tr/app/fudu-hex-number-merge/id6808560173?l=tr",
    featuresEn: ["Six-direction chains", "Strategic number merging", "Progressive targets", "Automatic shuffle"],
  },
  {
    slug: "liva-lights", name: "Liva Lights", categoryTr: "Gece bahçesi mantık bulmacası", categoryEn: "Night-garden logic puzzle",
    descriptionTr: "Fenerleri doğru hücrelere yerleştir ve satır-sütun hedeflerini birlikte tamamla.",
    descriptionEn: "Place lanterns in the right cells and satisfy every row and column target under moonlight.",
    image: "/optimized/games/liva-lights/02-gameplay.webp", secondary: "/optimized/games/liva-lights/06-home.webp", accent: "#d0a94f", levels: "1,000",
    platforms: ["ios"], appStore: "https://apps.apple.com/tr/app/liva-lights/id6816842378?l=tr",
    featuresEn: ["Row and column targets", "Irregular gardens", "Three-star system", "Soft light effects"],
  },
  {
    slug: "bubblefin-pop", name: "Bubblefin Pop", categoryTr: "Fizik tabanlı su altı bulmacası", categoryEn: "Physics-based underwater puzzle",
    descriptionTr: "Balonları sürükle, aynı renkteki balon balıklarını birleştir ve özgür bırak.",
    descriptionEn: "Drop water bubbles, merge matching pufferfish, and set them free in a playful physics adventure.",
    image: "/optimized/games/bubblefin-pop/03-gameplay-level-4.webp", secondary: "/optimized/games/bubblefin-pop/01-home.webp", accent: "#079ed1", levels: "800",
    platforms: ["ios"], appStore: "https://apps.apple.com/us/app/bubblefin-pop/id6818507143",
    featuresEn: ["Water-bubble physics", "Color merging", "Moving obstacles", "800 ocean levels"],
  },
  {
    slug: "trail-builder", name: "Trail Builder: Route Craft", categoryTr: "Rota oluşturma ve mantık", categoryEn: "Route-building logic puzzle",
    descriptionTr: "Kenar sayılarını tamamla, engelleri aş ve başlangıçtan bitişe doğru rotayı çiz.",
    descriptionEn: "Complete edge clues, avoid obstacles, and draw the one continuous route from start to finish.",
    image: "/optimized/games/trail-builder/02-gameplay-98.webp", secondary: "/optimized/games/trail-builder/01-home.webp", accent: "#d7a641", levels: "500",
    platforms: [],
    featuresEn: ["Route drawing", "Edge-number clues", "Rocks and checkpoints", "Offline play"],
  },
];

export const catalogBySlug = Object.fromEntries(catalogGames.map((game) => [game.slug, game]));
