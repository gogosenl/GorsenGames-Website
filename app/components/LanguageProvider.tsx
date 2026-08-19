"use client";

import Image from "./SiteImage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "tr" | "en";

const translations: Record<string, string> = {
  "Oyunlar": "Games",
  "Hakkımızda": "About",
  "İletişim": "Contact",
  "E-POSTA": "EMAIL",
  "Destek, iş birlikleri ve oyunlarımızla ilgili soruların için bize ulaş.": "Contact us for support, partnerships, and questions about our games.",
  "Oyunları keşfet": "Explore games",
  "Oyunları keşfet ↘": "Explore games ↘",
  "Oyunları incele": "View games",
  "Oyunları incele ↓": "View games ↓",
  "BAĞIMSIZ MOBİL OYUN STÜDYOSU · 2026": "INDEPENDENT MOBILE GAME STUDIO · 2026",
  "Oyunlarımızı": "You should see",
  "bir görsen…": "our games…",
  "Düşünmenin en renkli hâlini keşfetsen.": "Discover the most colorful side of thinking.",
  "Görsen Games’in sade görünen, zekâyı nazikçe zorlayan mobil bulmaca dünyalarıyla tanış.": "Meet Görsen Games’ mobile puzzle worlds: simple at first glance, thoughtfully challenging underneath.",
  "Android ve iOS’ta": "On Android and iOS",
  "Android’de yayında": "Available on Android",
  "iOS’ta yayında": "Available on iOS",
  "iOS yakında": "iOS coming soon",
  "Android yakında": "Android coming soon",
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
  "ANDROID VE iOS OYUNLARI": "GAMES FOR ANDROID AND iOS",
  "Bir sonraki": "Your next",
  "bulmacan hazır.": "puzzle awaits.",
  "Sade, eğlenceli ve düşündürücü mobil oyunlar.": "Simple, playful, and thoughtful mobile games.",
  "Görkem Şenol tarafından kurulan bağımsız mobil oyun stüdyosu.": "An independent mobile game studio founded by Görkem Şenol.",
  "Gizlilik": "Privacy",
  "Koşullar": "Terms",
  "Tüm hakları saklıdır.": "All rights reserved.",

  "Nasıl oynanır?": "How to play",
  "Özellikler": "Features",
  "Görseller": "Screenshots",
  "Şimdi indir": "Download now",
  "iOS ve Android’de Yakında": "Coming soon to iOS and Android",
  "GOOGLE PLAY": "GOOGLE PLAY",
  "APP STORE": "APP STORE",
  "İNDİR": "DOWNLOAD",
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

  "Son güncelleme: 18 Ağustos 2026": "Last updated: August 18, 2026",
  "İndir": "Download",
  "Yakında": "Coming soon",
  "Bu politika; Görsen Games web sitesini ve Puzzle Area, Block Puzzle Grid, BloomShift ve Petal Shift mobil oyunlarını kapsar. Hangi verilerin işlenebileceğini, bu verilerin neden kullanıldığını ve seçimlerinizi açıklar.": "This policy covers the Görsen Games website and the Puzzle Area, Block Puzzle Grid, BloomShift, and Petal Shift mobile games. It explains what data may be processed, why it is used, and your choices.",
  "1. Veri sorumlusu ve kapsam": "1. Data controller and scope",
  "Bu hizmetlerin veri sorumlusu, Görsen Games markasını işleten Görkem Şenol’dur. Gizlilikle ilgili sorular ve talepler için info@gorsengames.com adresinden bize ulaşabilirsiniz.": "The data controller for these services is Görkem Şenol, who operates the Görsen Games brand. Contact us at info@gorsengames.com with privacy questions or requests.",
  "Google Gizlilik Politikası": "Google Privacy Policy",
  "Google reklam teknolojileri": "Google advertising technologies",
  "Apple Gizlilik Politikası": "Apple Privacy Policy",
  "Cloudflare Gizlilik Politikası": "Cloudflare Privacy Policy",
  "2. İşlenebilecek bilgiler": "2. Information that may be processed",
  "Cihazda saklanan oyun verileri": "Game data stored on your device",
  "Bölüm ilerlemesi, oyun içi bakiye, ayarlar, dil, ses ve titreşim tercihleri cihazınızda yerel olarak saklanabilir. Bu oyunlar temel oynanış için hesap açmanızı, adınızı veya e-posta adresinizi vermenizi istemez.": "Level progress, in-game balances, settings, language, sound, and vibration preferences may be stored locally on your device. The games do not require an account, your name, or your email address for core gameplay.",
  "Hizmet sağlayıcıların işleyebileceği veriler": "Data service providers may process",
  "Kullandığınız oyuna, platforma ve uygulama sürümüne bağlı olarak reklam, mağaza, satın alma, güvenlik ve teknik hata hizmetleri; IP adresi, cihaz veya reklam tanımlayıcıları, uygulama etkileşimleri, reklam gösterimleri, tanılama ve çökme bilgileri, satın alma durumu ve IP’den türetilen yaklaşık konum gibi sınırlı teknik verileri işleyebilir.": "Depending on the game, platform, and app version, advertising, store, purchase, security, and diagnostics services may process limited technical data such as IP address, device or advertising identifiers, app interactions, ad impressions, diagnostics and crash information, purchase status, and approximate location inferred from IP.",
  "İletişim bilgileri": "Contact information",
  "Bize e-posta gönderirseniz e-posta adresinizi ve mesajınızda paylaştığınız bilgileri talebinizi yanıtlamak amacıyla işleriz.": "If you email us, we process your email address and the information in your message to respond to your request.",
  "3. Bilgileri kullanma amaçlarımız": "3. How we use information",
  "Oyunun çalışmasını, ilerlemenin kaydedilmesini ve tercihlerin uygulanmasını sağlamak.": "To operate the game, save progress, and apply preferences.",
  "Reklam göstermek, reklam sıklığını ölçmek ve izin verdiğiniz durumlarda reklamları kişiselleştirmek.": "To display ads, measure ad frequency, and personalize ads where you have consented.",
  "Satın alma ve ödüllü reklam işlemlerini doğrulamak.": "To verify purchases and rewarded-ad transactions.",
  "Hataları tespit etmek, güvenliği sağlamak ve performansı iyileştirmek.": "To detect errors, protect security, and improve performance.",
  "Destek taleplerini yanıtlamak ve yasal yükümlülükleri yerine getirmek.": "To answer support requests and meet legal obligations.",
  "4. Üçüncü taraf hizmetleri ve paylaşım": "4. Third-party services and sharing",
  "Oyunlarımız reklam sunmak için Google AdMob’u; dağıtım, satın alma ve platform özellikleri için Google Play ile Apple App Store’u kullanabilir. Web sitesi güvenli barındırma ve trafik koruması sağlayan altyapı hizmetlerinden yararlanır. Bu sağlayıcılar verileri kendi politikaları ve geçerli hukuk kapsamında işler.": "Our games may use Google AdMob for advertising and Google Play and the Apple App Store for distribution, purchases, and platform features. The website uses infrastructure services that provide secure hosting and traffic protection. These providers process data under their own policies and applicable law.",
  "Görsen Games kişisel verilerinizi satmaz. Yasal zorunluluk, hakların korunması veya hizmetin güvenliği gerektirmedikçe verileri burada açıklanan amaçların dışında paylaşmayız.": "Görsen Games does not sell your personal data. We do not share data beyond the purposes described here unless required by law or necessary to protect rights or service security.",
  "5. Reklam tercihleri ve izinler": "5. Advertising choices and consent",
  "Kişiselleştirilmiş reklamların kullanıldığı bölgelerde gerekli izin ekranları gösterilebilir. Seçiminizi uygulama içindeki izin ekranından veya cihazınızın reklam ve gizlilik ayarlarından değiştirebilir, reklam tanımlayıcınızı sıfırlayabilir ya da sınırlayabilirsiniz. İzin vermemeniz temel bulmaca oynanışına erişiminizi engellemez; ancak reklamlar kişiselleştirilmemiş olabilir.": "Where personalized advertising is used, required consent screens may be shown. You can change your choice through the in-app consent screen or your device’s advertising and privacy settings, and reset or limit your advertising identifier. Refusing consent does not prevent access to core puzzle gameplay, but ads may be non-personalized.",
  "6. Saklama ve silme": "6. Retention and deletion",
  "Cihazda tutulan oyun verileri, uygulama verilerini temizleyene veya oyunu kaldırana kadar saklanabilir. E-posta yazışmaları, talebin çözülmesi ve yasal yükümlülükler için gerekli süre boyunca tutulur. Üçüncü tarafların tuttuğu verilerin saklama süreleri kendi politikalarına tabidir.": "Game data stored on your device may remain until you clear the app data or uninstall the game. Email correspondence is retained for as long as needed to resolve the request and meet legal obligations. Data held by third parties is subject to their retention policies.",
  "Görsen Games’in elinde bulunan verilerle ilgili erişim, düzeltme veya silme talebinizi info@gorsengames.com adresine iletebilirsiniz. Yalnızca cihazınızda bulunan oyun verilerini uygulama verilerini temizleyerek veya uygulamayı kaldırarak silebilirsiniz.": "You may request access to, correction of, or deletion of data held by Görsen Games at info@gorsengames.com. You can delete game data that exists only on your device by clearing app data or uninstalling the app.",
  "7. Çocukların gizliliği": "7. Children’s privacy",
  "Oyunlarımız genel kitleye yönelik bulmaca oyunlarıdır ve bilerek çocuklardan ad, adres veya iletişim bilgisi toplamayız. Bir çocuğun bize kişisel bilgi gönderdiğini düşünüyorsanız silme talebi için bizimle iletişime geçin. Uygulanabilir çocuk gizliliği ve mağaza kurallarına uygun reklam ayarları kullanılır.": "Our games are general-audience puzzle games, and we do not knowingly collect names, addresses, or contact information from children. If you believe a child has sent us personal information, contact us to request deletion. Advertising settings are configured to follow applicable children’s privacy and store rules.",
  "8. Güvenlik ve uluslararası aktarım": "8. Security and international transfers",
  "Makul teknik ve idari güvenlik önlemleri uygularız. Google, Apple ve altyapı sağlayıcıları küresel olarak çalıştığından teknik veriler bulunduğunuz ülke dışında işlenebilir. Bu işlemler sağlayıcıların güvenlik önlemleri ve geçerli aktarım mekanizmaları kapsamında gerçekleştirilir.": "We use reasonable technical and organizational safeguards. Because Google, Apple, and infrastructure providers operate globally, technical data may be processed outside your country under their safeguards and applicable transfer mechanisms.",
  "9. Haklarınız": "9. Your rights",
  "Bulunduğunuz ülkeye göre verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama, itiraz etme veya verdiğiniz izni geri çekme haklarına sahip olabilirsiniz. Taleplerinizi e-posta ile iletebilirsiniz. Kimliğinizi ve talebin ilgili olduğu hizmeti doğrulamak için makul ek bilgi isteyebiliriz.": "Depending on where you live, you may have rights to access, correct, delete, restrict processing of, or object to the use of your data, and to withdraw consent. You may submit requests by email. We may ask for reasonable information to verify your identity and the relevant service.",
  "10. Politika değişiklikleri": "10. Changes to this policy",
  "Oyunlar, kullanılan hizmetler veya yasal gereklilikler değiştiğinde bu politikayı güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayımlanır ve “Son güncelleme” tarihi değiştirilir.": "We may update this policy when our games, services, or legal requirements change. The current version will always appear on this page with an updated date.",
  "Bu metin genel bilgilendirme sağlar; bulunduğunuz ülkenin zorunlu tüketici ve veri koruma hakları saklıdır.": "This notice provides general information; mandatory consumer and data-protection rights in your country remain unaffected.",

  "Bu şartlar; Görsen Games web sitesine ve Puzzle Area, Block Puzzle Grid, BloomShift ile Petal Shift oyunlarına erişiminizi ve bu hizmetleri kullanımınızı düzenler. Hizmetleri kullanarak bu şartları kabul etmiş olursunuz.": "These terms govern your access to and use of the Görsen Games website and the Puzzle Area, Block Puzzle Grid, BloomShift, and Petal Shift games. By using the services, you agree to these terms.",
  "1. Hizmet ve uygunluk": "1. Service and eligibility",
  "Hizmetler, Görsen Games markasını işleten Görkem Şenol tarafından sunulur. Görsen Games, kişisel eğlence amacıyla mobil bulmaca oyunları ve bu oyunları tanıtan bir web sitesi sağlar. Yaşadığınız yerde bu şartları kabul etmek için gereken yaşın altındaysanız hizmetleri ebeveyninizin veya yasal temsilcinizin izniyle kullanmalısınız.": "The services are provided by Görkem Şenol, who operates the Görsen Games brand. Görsen Games provides mobile puzzle games for personal entertainment and a website presenting those games. If you are below the age required to accept these terms where you live, you must use the services with permission from a parent or legal guardian.",
  "2. Kullanım lisansı": "2. License to use",
  "Bu şartlara uymanız koşuluyla oyunları sahip olduğunuz uyumlu cihazlarda kişisel ve ticari olmayan amaçlarla kullanmanız için sınırlı, geri alınabilir, devredilemez ve münhasır olmayan bir lisans verilir.": "Subject to these terms, you receive a limited, revocable, non-transferable, non-exclusive license to use the games for personal, non-commercial purposes on compatible devices you own.",
  "Uygulanabilir hukukun açıkça izin verdiği durumlar dışında oyunları veya siteyi kopyalayamaz, yeniden yayımlayamaz, satamaz, kiralayamaz, kaynak koduna dönüştüremez, tersine mühendislik yapamaz ya da güvenlik ve reklam sistemlerini aşmaya çalışamazsınız.": "Except where applicable law expressly permits it, you may not copy, republish, sell, rent, decompile, reverse engineer, or attempt to bypass the security or advertising systems of the games or website.",
  "3. Oyun ilerlemesi ve cihaz verileri": "3. Game progress and device data",
  "Oyun ilerlemesi ve tercihler cihazınızda yerel olarak saklanabilir. Cihazın değiştirilmesi, uygulamanın kaldırılması, uygulama verilerinin temizlenmesi veya teknik bir hata ilerlemenin kaybolmasına yol açabilir. Bulut kaydı açıkça sunulmadıkça ilerlemenin farklı cihazlara aktarılacağı garanti edilmez.": "Game progress and preferences may be stored locally on your device. Changing devices, uninstalling the app, clearing app data, or a technical error may cause progress to be lost. Progress is not guaranteed to transfer between devices unless cloud saving is expressly offered.",
  "4. Reklamlar, ödüller ve satın almalar": "4. Ads, rewards, and purchases",
  "Bazı oyunlar reklam, ödüllü reklam, oyun içi para veya dijital içerik sunabilir. Reklam izleyerek verilen ödüller yalnızca ilgili oyunda kullanılabilir, gerçek para değeri taşımaz ve başka bir kullanıcıya devredilemez.": "Some games may offer ads, rewarded ads, in-game currency, or digital content. Rewards granted for viewing ads may be used only in the relevant game, have no cash value, and cannot be transferred to another user.",
  "Satın almalar Google Play veya Apple App Store üzerinden işlenir ve ilgili mağazanın ödeme, iptal ve iade kurallarına tabidir. Görsen Games ödeme kartı bilgilerinizi doğrudan almaz. Zorunlu tüketici haklarınız saklı kalmak üzere iade talepleri satın almanın yapıldığı mağaza üzerinden değerlendirilir.": "Purchases are processed by Google Play or the Apple App Store and are subject to the relevant store’s payment, cancellation, and refund rules. Görsen Games does not directly receive your payment-card details. Subject to mandatory consumer rights, refund requests are handled through the store where the purchase was made.",
  "5. Kabul edilebilir kullanım": "5. Acceptable use",
  "Hile, otomasyon, değiştirilmiş istemci veya hizmeti bozan araçlar kullanmayın.": "Do not use cheats, automation, modified clients, or tools that disrupt the service.",
  "Hizmete, sunuculara veya diğer kullanıcıların cihazlarına zarar vermeye çalışmayın.": "Do not attempt to harm the service, servers, or other users’ devices.",
  "Oyun görsellerini, markaları ve içerikleri izinsiz ticari amaçla kullanmayın.": "Do not use game artwork, brands, or content commercially without permission.",
  "Mağaza, reklam veya ödül mekanizmalarını kötüye kullanmayın.": "Do not abuse store, advertising, or reward mechanisms.",
  "6. Fikri mülkiyet": "6. Intellectual property",
  "Oyunlar, kaynak kodu, isimler, logolar, arayüzler, görseller, sesler, bölüm tasarımları ve web sitesi içerikleri Görsen Games’e veya ilgili hak sahiplerine aittir. Bu şartlar size mülkiyet hakkı vermez.": "The games, source code, names, logos, interfaces, artwork, sounds, level designs, and website content belong to Görsen Games or the relevant rights holders. These terms do not grant you ownership.",
  "7. Üçüncü taraf hizmetleri": "7. Third-party services",
  "Oyunlar ve web sitesi Google Play, Apple App Store, Google AdMob ve barındırma sağlayıcıları gibi üçüncü taraf hizmetlerine bağlantı verebilir veya bu hizmetleri kullanabilir. Bu hizmetlerin kullanımı kendi şartlarına ve gizlilik politikalarına tabidir.": "The games and website may link to or use third-party services such as Google Play, the Apple App Store, Google AdMob, and hosting providers. Their use is subject to their own terms and privacy policies.",
  "8. Güncellemeler ve hizmet değişiklikleri": "8. Updates and service changes",
  "Oyunları, bölüm yapılarını, ödülleri, fiyatları, reklam biçimlerini veya teknik özellikleri güncelleyebilir; değiştirebilir ya da kullanım dışı bırakabiliriz. Güvenlik, bakım, mağaza kuralları veya teknik nedenlerle hizmet geçici olarak kesilebilir.": "We may update, change, or discontinue games, level structures, rewards, prices, advertising formats, or technical features. Services may be temporarily interrupted for security, maintenance, store-policy, or technical reasons.",
  "9. Garanti ve sorumluluğun sınırı": "9. Warranty and limitation of liability",
  "Hizmetler yürürlükteki hukukun izin verdiği ölçüde “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Kesintisiz, tamamen hatasız veya her cihazla uyumlu çalışma garanti edilmez.": "To the extent permitted by applicable law, the services are provided “as is” and “as available.” We do not guarantee uninterrupted, completely error-free operation or compatibility with every device.",
  "Kanunen sınırlandırılamayan sorumluluklar ile zorunlu tüketici hakları saklıdır. Bunun dışında Görsen Games; dolaylı zararlar, veri veya ilerleme kaybı ve kontrolü dışındaki üçüncü taraf hizmet kesintilerinden yürürlükteki hukukun izin verdiği ölçüde sorumlu değildir.": "Liabilities that cannot be limited by law and mandatory consumer rights remain unaffected. Otherwise, to the extent permitted by law, Görsen Games is not liable for indirect losses, loss of data or progress, or third-party service outages beyond its control.",
  "10. Fesih": "10. Termination",
  "Bu şartların önemli ölçüde ihlal edilmesi, hizmet güvenliğinin tehlikeye atılması veya yasal zorunluluk hâlinde erişimi sınırlandırabiliriz. Oyunu kaldırarak hizmeti kullanmayı istediğiniz zaman bırakabilirsiniz.": "We may restrict access if these terms are materially breached, service security is endangered, or the law requires it. You may stop using the service at any time by uninstalling the game.",
  "11. Uygulanacak hukuk": "11. Governing law",
  "Bu şartlar, bulunduğunuz yerdeki zorunlu tüketici koruma hükümleri saklı kalmak üzere Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda kanunen yetkili tüketici mercileri ve mahkemeler görevli olabilir.": "These terms are governed by the laws of the Republic of Türkiye, without affecting mandatory consumer protections where you live. Legally competent consumer authorities and courts may have jurisdiction over disputes.",
  "12. Değişiklikler ve iletişim": "12. Changes and contact",
  "Bu şartları hizmetlerdeki veya mevzuattaki değişikliklere göre güncelleyebiliriz. Güncel metin ve yürürlük tarihi bu sayfada yayımlanır. Sorularınız için info@gorsengames.com adresine yazabilirsiniz.": "We may update these terms to reflect changes to the services or law. The current text and effective date will be published on this page. Email info@gorsengames.com with questions.",
  "Bu şartlardaki hiçbir hüküm, kanunen vazgeçilemeyen tüketici haklarınızı ortadan kaldırmaz.": "Nothing in these terms removes consumer rights that cannot legally be waived.",
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
