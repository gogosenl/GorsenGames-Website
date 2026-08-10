"use client";

import Image from "./SiteImage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "tr" | "en";

const translations: Record<string, string> = {
  "Oyunlar": "Games",
  "Hakkımızda": "About",
  "İletişim": "Contact",
  "Oyunları keşfet": "Explore games",
  "Oyunları keşfet ↘": "Explore games ↘",
  "Oyunları incele": "View games",
  "Oyunları incele ↓": "View games ↓",
  "BAĞIMSIZ MOBİL OYUN STÜDYOSU · 2026": "INDEPENDENT MOBILE GAME STUDIO · 2026",
  "Oyunlarımızı": "You should see",
  "bir görsen…": "our games…",
  "Düşünmenin en renkli hâlini keşfetsen.": "Discover the most colorful side of thinking.",
  "Görsen Games’in sade görünen, zekâyı nazikçe zorlayan mobil bulmaca dünyalarıyla tanış.": "Meet Görsen Games’ mobile puzzle worlds: simple at first glance, thoughtfully challenging underneath.",
  "Android için yakında": "Coming soon to Android",
  "özgün oyun": "original games",
  "tasarlanmış bölüm": "designed levels",
  "iki dil desteği": "two-language support",
  "ŞİMDİ KEŞFET": "DISCOVER NOW",
  "GÖRSEN GAMES / TASARIM YAKLAŞIMI": "GÖRSEN GAMES / DESIGN APPROACH",
  "Kolay öğrenilen mekanikler.": "Easy-to-learn mechanics.",
  "Uzun süre akılda kalan dünyalar.": "Worlds that stay with you.",
  "Gereksiz gürültüyü azaltıyor; dokunma hissine, okunabilirliğe ve iyi tasarlanmış bölümlere odaklanıyoruz. Her oyun kendi karakterini taşırken aynı kalite anlayışını paylaşır.": "We remove unnecessary noise and focus on tactile feedback, readability, and carefully designed levels. Every game has its own character while sharing the same standard of quality.",
  "Net mekanik": "Clear mechanics",
  "Özenli ilerleme": "Thoughtful progression",
  "Sakin görsel dil": "Calm visual language",
  "OYUN KOLEKSİYONU": "GAME COLLECTION",
  "Dört farklı düşünme biçimi.": "Four different ways to think.",
  "04 OYUN": "04 GAMES",
  "ALAN BULMA BULMACASI": "AREA-FINDING PUZZLE",
  "PARÇA YERLEŞTİRME BULMACASI": "PIECE-PLACEMENT PUZZLE",
  "BOTANİK KAYDIRMA BULMACASI": "BOTANICAL SLIDING PUZZLE",
  "Sayıları doğru alanlara al.": "Place the numbers in the right areas.",
  "Her parça doğru yerini bekliyor.": "Every piece is waiting for its place.",
  "Dalgaları döndür, bahçeyi renklendir.": "Turn the waves, bring the garden to color.",
  "Her esinti yeni bir yol açar.": "Every breeze opens a new path.",
  "Her sayının tarif ettiği kare veya dikdörtgen alanı bul. 3×3’ten 12×10’a uzanan 1080 bölümde sınırları doğru çiz ve bütün tabloyu tamamla.": "Find the square or rectangular area described by each number. Draw the right boundaries and complete the board across 1,080 levels from 3×3 to 12×10.",
  "Renkli parçaları çerçeveden al, grid üzerinde doğru konuma sürükle ve tabloyu boşluksuz tamamla. Yumuşak renkler, akıcı kontrol ve giderek derinleşen strateji.": "Take the colorful pieces from the frame, drag them into place, and complete the grid without gaps. Soft colors, fluid controls, and strategy that deepens over time.",
  "Dört çiçeği tek dalgayla birlikte döndür, renkleri kendi bahçe alanlarıyla eşleştir. Yedi tahta düzeni ve üç zorluk modunda 1050 sakin bulmaca.": "Rotate four flowers together with a single wave and match them to their garden colors. Explore 1,050 calm puzzles across seven boards and three difficulty modes.",
  "Çiçeklerden oluşan satır ve sütunları kaydır, hedef bahçe desenini tamamla. 3×3’ten 6×8’e büyüyen 10 katmanda 500 sakin ve stratejik bulmaca.": "Slide rows and columns of flowers to complete the target garden pattern. Solve 500 calm, strategic puzzles across ten layers from 3×3 to 6×8.",
  "bölüm": "levels",
  "Türkçe · English": "Turkish · English",
  "Android · iOS yakında": "Android · iOS coming soon",
  "tahta düzeni": "board layouts",
  "Kolay · Orta · Zor": "Easy · Medium · Hard",
  "bahçe katmanı": "garden layers",
  "Oyunun dünyasını keşfet": "Explore the game",
  "Oyunun dünyasını keşfet ↗": "Explore the game ↗",
  "TANITIM TASARIMI · GERÇEK OYUN EKRANI": "REAL IN-GAME PHONE SCREENS",
  "OYUNLARIMIZDA": "IN OUR GAMES",
  "Rekabetten önce": "Before competition,",
  "iyi bir deneyim.": "a great experience.",
  "Kendi ritminde": "At your own pace",
  "Kısa molalara uygun, baskı kurmayan ve her an yeniden dönebileceğin bölümler.": "Pressure-free levels made for short breaks and easy returns.",
  "Gerçek ilerleme": "Meaningful progression",
  "Öğreten başlangıçlardan ustalık isteyen tablolara uzanan dengeli bir yolculuk.": "A balanced journey from guided beginnings to boards that demand mastery.",
  "Herkes için": "For everyone",
  "Türkçe ve İngilizce destekli, mobil ve tablet ekranlarına uyumlu temiz arayüzler.": "Clean interfaces in Turkish and English, designed for phones and tablets.",
  "YAKINDA GOOGLE PLAY’DE": "COMING SOON TO GOOGLE PLAY",
  "Bir sonraki": "Your next",
  "bulmacan hazır.": "puzzle awaits.",
  "Sade, eğlenceli ve düşündürücü mobil oyunlar.": "Simple, playful, and thoughtful mobile games.",
  "Gizlilik": "Privacy",
  "Koşullar": "Terms",
  "Tüm hakları saklıdır.": "All rights reserved.",

  "Nasıl oynanır?": "How to play",
  "Özellikler": "Features",
  "Görseller": "Screenshots",
  "Google Play’de Yakında": "Coming soon to Google Play",
  "GOOGLE PLAY’DE": "ON GOOGLE PLAY",
  "YAKINDA": "COMING SOON",
  "Mobil bulmaca": "Mobile puzzle",
  "GÖRSEN GAMES ORIGINAL": "A GÖRSEN GAMES ORIGINAL",
  "Gerçek oyun ekranlarını gör": "View real game screens",
  "NASIL OYNANIR?": "HOW TO PLAY",
  "Öğrenmesi kolay.": "Easy to learn.",
  "Çözmesi ustalık ister.": "Mastery takes thought.",
  "ALANI DEĞİŞTİRMEK İÇİN DOKUN": "TAP TO CHANGE THE AREA",
  "PARÇAYI YERLEŞTİRMEK İÇİN DOKUN": "TAP TO PLACE THE PIECE",
  "DALGAYA DOKUN": "TAP THE WAVE",
  "SIRAYI KAYDIRMAK İÇİN DOKUN": "TAP TO SLIDE THE ROW",
  "BÖLÜM YAPISI": "LEVEL STRUCTURE",
  "SEÇİLİ KATMAN": "SELECTED LAYER",
  "Gerçek oyun ekranı": "Real game screen",
  "ÜÇ OYUN MODU": "THREE GAME MODES",
  "Ritmini seç.": "Choose your rhythm.",
  "Kendi hızında ilerle.": "Progress at your pace.",
  "OYUN ÖZELLİKLERİ": "GAME FEATURES",
  "GERÇEK OYUN EKRANLARI": "REAL GAME SCREENS",
  "Telefonunda nasıl": "How will it look",
  "görünecek?": "on your phone?",
  "GÖRSELİ BÜYÜT ↗": "ENLARGE IMAGE ↗",
  "GÖRSEN GAMES SUNAR": "PRESENTED BY GÖRSEN GAMES",
  "Gizlilik Politikası": "Privacy Policy",
  "Kullanım Şartları": "Terms of Use",
  "KAPAT ×": "CLOSE ×",
  "Önceki görsel": "Previous image",
  "Sonraki görsel": "Next image",
  "Galeriyi kapat": "Close gallery",

  "MOBİL ZEKA VE ALAN BULMA OYUNU": "MOBILE LOGIC AND AREA-FINDING GAME",
  "Sayıları doğru alanlara al, bölümü tamamla.": "Place the numbers in the right areas and complete the level.",
  "Sayıların gösterdiği büyüklükte kare ve dikdörtgen alanları bul. Sade başlayan, her katmanda daha dikkat isteyen renkli bir bulmaca deneyimi.": "Find square and rectangular areas matching the numbers. A colorful puzzle experience that starts simply and asks for more focus with every layer.",
  "Saylıyı oku": "Read the number",
  "Sayıyı oku": "Read the number",
  "Her sayı, seçilecek alanın kaç kutudan oluşacağını gösterir.": "Each number shows how many cells the selected area must contain.",
  "Alanı sınırla": "Define the area",
  "Kare veya dikdörtgen bir alan seç. L ve U biçimleri kullanılamaz.": "Select a square or rectangle. L and U shapes are not allowed.",
  "Tahtayı tamamla": "Complete the board",
  "Sayı alanın içinde kalsın; tüm ekran doğru alanlarla dolduğunda bölüm biter.": "Keep the number inside its area; the level ends when the whole board is filled correctly.",
  "1080 çözülebilir bölüm": "1,080 solvable levels",
  "3×3’ten 12×10’a büyüyen gridler": "Grids growing from 3×3 to 12×10",
  "Kare ve dikdörtgen alan mantığı": "Square and rectangular area logic",
  "Animasyonlu başlangıç öğreticisi": "Animated beginner tutorial",
  "İpucu ve katman parası sistemi": "Hint and layer currency system",
  "Bölüm tamamlama ödülleri": "Level completion rewards",
  "Türkçe ve İngilizce destek": "Turkish and English support",
  "Ses, müzik ve titreşim ayarları": "Sound, music, and vibration settings",
  "Ana ekran": "Home screen",
  "Bölüm haritası": "Level map",
  "8×8 oynanış": "8×8 gameplay",
  "Her boyutta farklı bir alan bulmacası.": "A different area puzzle at every size.",
  "3×3 ile temel mantığı öğren, 12×10’a uzanan katmanlarda daha büyük alanları ve daha zorlu sınırları keşfet. Bir boyuta dokunarak gerçek bölüm ekranını incele.": "Learn the core logic at 3×3, then discover larger areas and tougher boundaries up to 12×10. Tap a size to view its real level screen.",
  "Çöz, kazan, yeni katmanları aç.": "Solve, earn, and unlock new layers.",
  "Bölüm ödülleriyle ipucu ve katman parası kazan. Zorlandığında ipucundan yararlan, biriktirdiğin katman parasıyla daha büyük tabloların kilidini aç.": "Earn hint and layer currency from level rewards. Use a hint when needed and unlock larger boards with the currency you collect.",

  "MODERN MOBİL PARÇA YERLEŞTİRME OYUNU": "MODERN MOBILE PIECE-PLACEMENT GAME",
  "Parçaları çerçeveden al, tabloyu tamamla.": "Take the pieces from the frame and complete the board.",
  "Yumuşak renkli parçaları gride sürükle, doğru konumlarına yerleştir ve her hücreyi doldur. Rahatlatıcı görünen, ilerledikçe stratejikleşen premium bir puzzle deneyimi.": "Drag softly colored pieces onto the grid, fit them into place, and fill every cell. A premium puzzle experience that feels relaxing and becomes more strategic as you progress.",
  "Sürükle": "Drag",
  "Renkli parçayı tepsiden tut ve tabloya doğru taşı.": "Pick up a colorful piece from the tray and drag it toward the board.",
  "Yerleştir": "Place",
  "Parça yalnızca uygun konuma oturur; yanlış bırakılırsa tepsiye döner.": "A piece fits only in a valid position; a wrong drop returns it to the tray.",
  "Tamamla": "Complete",
  "Bütün parçaları doğru yerlere koy ve boşluksuz tabloyu bitir.": "Place every piece correctly and finish the board without gaps.",
  "850 deterministik bölüm": "850 deterministic levels",
  "3×3’ten 9×9’a gelişen tablolar": "Boards growing from 3×3 to 9×9",
  "Akıcı sürükle-bırak kontrolü": "Fluid drag-and-drop controls",
  "Ücretsiz ve ücretli ipucu sistemi": "Free and currency-based hint system",
  "Katman parası ve bölüm haritası": "Layer currency and level map",
  "Animasyonlu ödül ekranları": "Animated reward screens",
  "Türkçe ve İngilizce arayüz": "Turkish and English interface",
  "Android ve gelecekte iOS": "Android, with iOS planned",
  "7×7 oynanış": "7×7 gameplay",
  "Her katmanda daha büyük bir tablo.": "A larger board in every layer.",
  "Çöz, ödülünü al, daha büyük tabloları aç.": "Solve, collect rewards, and unlock larger boards.",

  "SAKİN RENK EŞLEŞTİRME BULMACASI": "CALM COLOR-MATCHING PUZZLE",
  "Çiçekleri dalgalarla kaydır, renkleri eşleştir ve 1050 sakin bulmacadan oluşan bahçeyi keşfet. Refleksten çok gözlem, planlama ve birkaç hamle sonrasını düşün.": "Move flowers with waves, match the colors, and explore a garden of 1,050 calm puzzles. Observation and planning matter more than reflexes.",
  "Yönü seç": "Choose a direction",
  "Çiçeklerin sağa veya sola hareket edeceği yönü belirle.": "Choose whether the flowers move clockwise or counterclockwise.",
  "Dalgaya dokun": "Tap the wave",
  "Dört hücrenin ortasındaki dalga düğmesine dokun; dört çiçek birlikte dönsün.": "Tap the wave button between four cells to rotate all four flowers together.",
  "Renkleri eşleştir": "Match the colors",
  "Bütün çiçekleri kendi renklerindeki bahçe alanlarına ulaştır.": "Move every flower to the garden area matching its color.",
  "1050 çözülebilir bölüm": "1,050 solvable levels",
  "7 farklı tahta düzeni": "7 board layouts",
  "Kolay, Orta ve Zor modlar": "Easy, Medium, and Hard modes",
  "Akıcı çiçek kayma animasyonları": "Fluid flower movement animations",
  "10 ipucu parasına otomatik hamle": "Automatic move for 10 hint coins",
  "Oynayarak açılabilen tüm içerik": "All content unlockable through play",
  "Çevrimdışı temel oynanış": "Offline core gameplay",
  "Oynanış": "Gameplay",
  "Her dalgada yeni bir bulmaca.": "A new puzzle with every wave.",
  "Kolay": "Easy",
  "Orta": "Medium",
  "Zor": "Hard",
  "Oynayarak bütün bahçeyi aç.": "Unlock the entire garden by playing.",

  "2D MOBİL BULMACA VE STRATEJİ OYUNU": "2D MOBILE PUZZLE AND STRATEGY GAME",
  "Sıraları kaydır, desenleri tamamla ve yüzlerce sakin bulmacayı çöz. Basit tek parmak kontrolü, büyüyen bahçelerde dikkatli planlamaya dönüşür.": "Slide rows, complete patterns, and solve hundreds of calm puzzles. Simple one-finger controls grow into careful planning across expanding gardens.",
  "Bir sıra seç": "Choose a row",
  "Çiçeklerden oluşan bir satıra veya sütuna dokun.": "Touch a row or column of flowers.",
  "İstediğin yöne sürükle": "Slide in any direction",
  "Sırayı sağa, sola, yukarı veya aşağı kaydır; bütün parçalar birlikte hareket etsin.": "Move the row right, left, up, or down so every piece shifts together.",
  "Deseni incele": "Study the pattern",
  "Her hamleden sonra çiçeklerin hedef renk düzenine ne kadar yaklaştığını gözlemle.": "After each move, observe how close the flowers are to the target color pattern.",
  "Bahçeyi tamamla": "Complete the garden",
  "Doğru hamleleri planla ve bütün çiçekleri hedef desenine yerleştir.": "Plan the right moves and place every flower into the target pattern.",
  "500 özgün bölüm": "500 original levels",
  "Her biri 50 bölümlük 10 bahçe katmanı": "10 garden layers with 50 levels each",
  "3×3’ten 6×8’e büyüyen oyun alanları": "Boards growing from 3×3 to 6×8",
  "Tek parmakla hassas satır ve sütun sürükleme": "Precise one-finger row and column sliding",
  "Akıcı kaldırma, kaydırma ve oturma animasyonları": "Fluid lift, slide, and settle animations",
  "Koru Taşı ve İpucu Yaprağı kaynakları": "Grove Stone and Hint Leaf resources",
  "İnternet gerektirmeyen temel oynanış": "Offline core gameplay",
  "Bahçe katmanları": "Garden layers",
  "Her katmanda büyüyen bir bahçe.": "A garden that grows with every layer.",
  "Sakin ilerle, yeni koruları aç.": "Progress calmly and unlock new groves.",
  "Türkçe": "Turkish",

  "Ana sayfa": "Home",
  "BAĞIMSIZ MOBİL OYUN STÜDYOSU · TÜRKİYE": "INDEPENDENT MOBILE GAME STUDIO · TÜRKİYE",
  "Bulmacayı sadece çözmüyoruz.": "We do more than solve puzzles.",
  "Tasarlıyoruz.": "We design them.",
  "Görsen Games, Türkiye merkezli bağımsız bir mobil oyun stüdyosudur.": "Görsen Games is an independent mobile game studio based in Türkiye.",
  "Sade görünen, kolay öğrenilen ve ustalaşması keyifli mobil bulmaca oyunları geliştiriyoruz. Her oyunda net bir mekanik, özenli ilerleme ve kendine özgü bir görsel dünya kuruyoruz.": "We create mobile puzzle games that look simple, feel easy to learn, and are rewarding to master. Each game combines a clear mechanic, thoughtful progression, and a distinctive visual world.",
  "Özgün mobil oyun": "Original mobile games",
  "Tasarlanmış bölüm": "Designed levels",
  "İki dil desteği": "Two-language support",
  "BİZ KİMİZ?": "WHO WE ARE",
  "Görsen Games; gözlem, mantık, planlama ve desen tanıma gibi farklı düşünme biçimlerini mobil ekranlara taşıyan oyunlar üretir. Amacımız yalnızca zor bulmacalar hazırlamak değil; oyuncunun her dokunuşta ne yaptığını anladığı, ilerlemesini hissettiği ve yeniden dönmek istediği dünyalar tasarlamaktır.": "Görsen Games brings observation, logic, planning, and pattern recognition to mobile screens. Our goal is not simply to make difficult puzzles, but to build worlds where every touch feels clear, progress feels meaningful, and players want to return.",
  "Oyunlarımız kısa molalarda rahatça oynanabilir; ancak ilerleyen bölümlerde gerçek bir strateji ve dikkat ister. Çocukça olmayan renkli tasarım, okunabilir arayüz ve akıcı mobil kontrol bütün projelerimizin ortak temelidir.": "Our games fit comfortably into short breaks, yet later levels demand real strategy and focus. Mature color, readable interfaces, and fluid mobile controls form the shared foundation of every project.",
  "TASARIM YAKLAŞIMIMIZ": "OUR DESIGN APPROACH",
  "Oyuncunun birkaç dokunuşta anlayabileceği, giderek derinleşen özgün kurallar.": "Original rules players can understand within a few touches and master over time.",
  "Öğreten başlangıçlardan ustalık isteyen tablolara uzanan dengeli bölüm yapısı.": "Balanced progression from guided beginnings to boards that demand mastery.",
  "Kendine özgü dünya": "Distinctive worlds",
  "Her oyunun karakterine göre şekillenen renk, hareket, ses ve atmosfer.": "Color, motion, sound, and atmosphere shaped around each game’s personality.",
  "03 · OYUNLARIMIZ": "03 · OUR GAMES",
  "Dört oyun.": "Four games.",
  "Alan bulma bulmacası": "Area-finding puzzle",
  "Parça yerleştirme bulmacası": "Piece-placement puzzle",
  "Renk ve döndürme bulmacası": "Color and rotation puzzle",
  "Botanik kaydırma bulmacası": "Botanical sliding puzzle",
  "GÖRSEN GAMES İLE İLETİŞİM": "CONTACT GÖRSEN GAMES",
  "Yeni dünyalar": "We are building",
  "üzerinde çalışıyoruz.": "new worlds.",
  "Türkiye merkezli bağımsız mobil oyun stüdyosu.": "An independent mobile game studio based in Türkiye.",

  "Son güncelleme: 29 Temmuz 2026": "Last updated: July 29, 2026",
  "Genel bilgi": "General information",
  "Görsen Games, Puzzle Area, Puzzle Grid ve Dalga Bahçesi oyunlarını geliştirir. Oyunlarımızın temel ilerleme ve tercih verileri cihazınızda saklanabilir.": "Görsen Games develops Puzzle Area, Puzzle Grid, Dalga Bahçesi, and Rüzgâr Korusu. Basic progress and preference data may be stored on your device.",
  "Üçüncü taraf hizmetleri": "Third-party services",
  "Uygulamalarda reklam, uygulama içi satın alma, mağaza dağıtımı veya hata raporlama hizmetleri kullanıldığında ilgili hizmet sağlayıcıları cihaz ve kullanım bilgilerini kendi politikaları kapsamında işleyebilir.": "When our apps use advertising, in-app purchases, store distribution, or crash reporting, the relevant providers may process device and usage information under their own policies.",
  "Hesap ve çevrimdışı kullanım": "Accounts and offline use",
  "Temel bulmaca deneyimi için hesap açılması gerekmez. Çevrimdışı kullanılabilen özellikler oyuna göre değişebilir.": "An account is not required for the core puzzle experience. Offline features may vary by game.",
  "Gizlilikle ilgili sorularınız için gorsengames@gmail.com adresinden bize ulaşabilirsiniz.": "For privacy questions, contact us at gorsengames@gmail.com.",
  "Kullanım": "Use",
  "Görsen Games oyunları kişisel ve eğlence amaçlı kullanım için sunulur. Oyunların veya görsel varlıkların izinsiz kopyalanması, dağıtılması ya da tersine mühendisliği yasaktır.": "Görsen Games titles are provided for personal entertainment. Unauthorized copying, distribution, or reverse engineering of the games or visual assets is prohibited.",
  "Dijital içerikler": "Digital content",
  "Oyun içi kaynaklar ve satın alımlar ilgili uygulama mağazasının kurallarına tabidir. Özellikler ve bölüm içerikleri güncellemelerle değişebilir.": "In-game resources and purchases are subject to the rules of the relevant app store. Features and level content may change with updates.",
  "Sorumluluk": "Liability",
  "Hizmetlerin kesintisiz veya hatasız olacağı garanti edilmez. Yasal olarak izin verilen ölçüde hizmetler mevcut hâliyle sunulur.": "Services are not guaranteed to be uninterrupted or error-free. To the extent permitted by law, they are provided as available.",
  "Sorularınız için gorsengames@gmail.com adresine yazabilirsiniz.": "For questions, email gorsengames@gmail.com.",
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([tr, en]) => [en, tr]));

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({ language: "tr", setLanguage: () => undefined });

function translateValue(value: string, language: Language) {
  const dictionary = language === "en" ? translations : reverseTranslations;
  const direct = dictionary[value.trim()];
  if (direct) return value.replace(value.trim(), direct);
  if (language === "en") {
    return value
      .replace(/ oyun ekranı/g, " game screen")
      .replace(/ bölüm ekranı/g, " level screen")
      .replace(/ bölüm boyutları/g, " level sizes")
      .replace(/ görselini büyüt/g, " — enlarge image")
      .replace(/ mekanik örneğini oynat/g, " — play mechanic demo")
      .replace(/ ekran görüntüsü/g, " screenshot");
  }
  return value
    .replace(/ game screen/g, " oyun ekranı")
    .replace(/ level screen/g, " bölüm ekranı")
    .replace(/ level sizes/g, " bölüm boyutları")
    .replace(/ — enlarge image/g, " görselini büyüt")
    .replace(/ — play mechanic demo/g, " mekanik örneğini oynat")
    .replace(/ screenshot/g, " ekran görüntüsü");
}

function translateTree(root: HTMLElement, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (parent && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName) && node.nodeValue?.trim()) {
      const translated = translateValue(node.nodeValue, language);
      if (translated !== node.nodeValue) node.nodeValue = translated;
    }
    node = walker.nextNode();
  }
  root.querySelectorAll<HTMLElement>("[aria-label], [title], [alt], [placeholder]").forEach((element) => {
    ["aria-label", "title", "alt", "placeholder"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, translateValue(value, language));
    });
  });
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");
  const [promptOpen, setPromptOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("gorsen-language");
    if (saved === "tr" || saved === "en") setLanguageState(saved);
    else setPromptOpen(true);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.querySelector<HTMLElement>(".site-language-content");
    if (!root) return;
    document.documentElement.lang = language;
    translateTree(root, language);
    const observer = new MutationObserver(() => translateTree(root, language));
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language, ready]);

  const setLanguage = (next: Language) => {
    window.localStorage.setItem("gorsen-language", next);
    setLanguageState(next);
    setPromptOpen(false);
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      <div className="site-language-content">{children}</div>
      {ready && (
        <div className="language-switcher" role="group" aria-label={language === "tr" ? "Site dili" : "Site language"}>
          <button className={language === "tr" ? "active" : ""} onClick={() => setLanguage("tr")} aria-pressed={language === "tr"}>TR</button>
          <span />
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      )}
      {promptOpen && (
        <div className="language-gate" role="dialog" aria-modal="true" aria-labelledby="language-title">
          <div className="language-gate-card">
            <span className="language-gate-logo"><Image src="/gorsen-games-logo.png" alt="Görsen Games" fill priority sizes="72px" /></span>
            <p>GÖRSEN GAMES</p>
            <h2 id="language-title">Dilini seç<br/><em>Choose your language</em></h2>
            <span className="language-gate-copy">Bu seçimi daha sonra sağ üst köşeden değiştirebilirsin.<br/>You can change this later from the top-right corner.</span>
            <div>
              <button onClick={() => setLanguage("tr")}><b>Türkçe</b><small>Siteyi Türkçe görüntüle</small><i>→</i></button>
              <button onClick={() => setLanguage("en")}><b>English</b><small>View the site in English</small><i>→</i></button>
            </div>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
}
