"use client";

import Image from "next/image";
import { useState } from "react";

const games = [
  {
    id: "puzzle-area",
    index: "01",
    title: "Puzzle Area",
    kicker: "Sayıların içindeki alanı gör.",
    description:
      "Tahtadaki her sayı, keşfetmen gereken alanın büyüklüğünü söyler. Doğru hücreleri birleştir, renkli bölgeleri ortaya çıkar ve giderek büyüyen tabloları tamamla.",
    hero: "/games/puzzle-area-hero.png",
    shots: ["/games/puzzle-area-game.png", "/games/puzzle-area-map.png"],
    accent: "#19b9b1",
    soft: "#e9fbf8",
    stats: [["500", "bölüm"], ["3×3–10×10", "tahta"], ["8", "katman"]],
    steps: [
      ["Sayıyı oku", "Her sayı, ait olduğu bölgenin kaç kareden oluşacağını gösterir."],
      ["Alanı çiz", "Komşu kareleri seçerek sayıyla tam eşleşen bir alan oluştur."],
      ["Tahtayı tamamla", "Tüm alanları çakışmadan bul; renkler doğru çözümü görünür kılsın."],
    ],
    features: ["Tek elle rahat oynanış", "İpucu ve geri alma", "Bölüm ödülleri", "Katman haritası"],
  },
  {
    id: "puzzle-grid",
    index: "02",
    title: "Puzzle Grid",
    kicker: "Parçaları al. Kusursuzca yerleştir.",
    description:
      "Alt tepsideki renkli parçaları sürükleyip kareli tabloya bırak. Her parçanın tek bir doğru konumu var; boşluk bırakmadan bütün ızgarayı doldur.",
    hero: "/games/puzzle-grid-game.png",
    shots: ["/games/puzzle-grid-home.png", "/games/puzzle-grid-map.png"],
    accent: "#2b8a57",
    soft: "#edf8ef",
    stats: [["850", "bölüm"], ["3×3–9×9", "ızgara"], ["5", "dünya"]],
    steps: [
      ["Parçayı seç", "Renkli parçaları alt tepsiden tut; şeklin bütün hücreleri birlikte hareket eder."],
      ["Doğru yere sürükle", "Parçayı tahtadaki eşleşen konumuna bırak. Uymayan hamle geri döner."],
      ["Izgarayı kapat", "Her kare dolduğunda bölüm tamamlanır ve yeni rota açılır."],
    ],
    features: ["Akıcı sürükle-bırak", "Deterministik bulmacalar", "Orman, çöl, buz, lav ve gökyüzü", "İki para birimli ödül sistemi"],
  },
  {
    id: "dalga-bahcesi",
    index: "03",
    title: "Dalga Bahçesi",
    kicker: "Renkleri döndür. Bahçeyi uyandır.",
    description:
      "Dört karenin arasındaki dalga noktasına dokun; çiçekler birlikte dönsün. Renkleri kendi bahçelerine ulaştırırken sakin görünen hamlelerin zincir etkisini çöz.",
    hero: "/games/dalga-game.png",
    shots: ["/games/dalga-home.png", "/games/dalga-intro.png"],
    accent: "#238c73",
    soft: "#f4f1e8",
    stats: [["500", "bahçe"], ["4", "boyut"], ["3", "zorluk"]],
    steps: [
      ["Dalga noktasını seç", "Dört komşu karenin ortasındaki döndürme noktasına dokun."],
      ["Yönü belirle", "Dalgayı sola ya da sağa gönder; dört çiçek birlikte yer değiştirsin."],
      ["Renkleri buluştur", "Her çiçeği kendi renk alanına taşı ve bahçeyi tamamla."],
    ],
    features: ["3×3, 4×4, 5×5 ve 6×6", "Sabah’tan Gece’ye dört bahçe", "Kolay, orta ve zor akış", "Çevrimdışı, sakin deneyim"],
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [shot, setShot] = useState(0);
  const game = games[active];

  const choose = (index: number) => {
    setActive(index);
    setShot(0);
    window.setTimeout(() => document.getElementById("oyun")?.scrollIntoView({ behavior: "smooth" }), 20);
  };

  return (
    <main style={{ "--accent": game.accent, "--soft": game.soft } as React.CSSProperties}>
      <nav>
        <a className="brand" href="#top" aria-label="Görsen Games ana sayfa">
          <span className="brand-mark"><i /><i /><i /><i /></span>
          <b>GÖRSEN</b><em>GAMES</em>
        </a>
        <div className="nav-links">
          <a href="#oyunlar">Oyunlar</a>
          <a href="#oyun">Nasıl oynanır?</a>
          <a href="#koleksiyon">Koleksiyon</a>
        </div>
        <a className="nav-cta" href="#oyunlar">Oyunları keşfet <span>↓</span></a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> BAĞIMSIZ MOBİL BULMACALAR</p>
          <h1>Düşünmenin<br /><i>en renkli hali.</i></h1>
          <p className="hero-lead">Üç ayrı dünya. Üç özgün mekanik. Sakin bir dokunuşla başlayıp zihnini içine çeken yüzlerce bölüm.</p>
          <div className="hero-actions">
            <a className="primary" href="#oyunlar">Oyunları keşfet <span>↘</span></a>
            <span className="mini-note"><b>1.850+</b><small>EL YAPIMI HİSSİ VEREN BÖLÜM</small></span>
          </div>
        </div>
        <div className="hero-art">
          <div className="image-window">
            <Image src="/games/puzzle-area-hero.png" alt="Puzzle Area oyun görseli" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <span className="floating-card card-a"><b>3</b><small>OYUN</small></span>
          <span className="floating-card card-b">DÜŞÜN<br />DOKUN<br /><b>ÇÖZ</b></span>
        </div>
      </header>

      <section id="oyunlar" className="games-index">
        <div className="section-heading">
          <p className="eyebrow">KOLEKSİYON / 2026</p>
          <h2>Birini seç.<br />Kaybolmaya başla.</h2>
          <p>Her oyun tek bir fikri alır, onu kolayca öğrenilen ve ustalaşması zaman alan bir deneyime dönüştürür.</p>
        </div>
        <div className="game-list">
          {games.map((item, index) => (
            <button key={item.id} className={index === active ? "active" : ""} onClick={() => choose(index)}>
              <span>{item.index}</span>
              <div><b>{item.title}</b><small>{item.kicker}</small></div>
              <i>↗</i>
            </button>
          ))}
        </div>
      </section>

      <section id="oyun" className="spotlight">
        <div className="spotlight-top">
          <div>
            <p className="eyebrow">{game.index} / OYUN DOSYASI</p>
            <h2>{game.title}</h2>
            <p className="tagline">{game.kicker}</p>
          </div>
          <p className="description">{game.description}</p>
        </div>

        <div className="showcase">
          <div className="phone-stage">
            <span className="stage-label">OYUN İÇİ / GERÇEK EKRAN</span>
            <div className="phone">
              <Image src={game.shots[shot]} alt={`${game.title} oyun ekranı`} fill sizes="420px" />
            </div>
            <div className="shot-switcher">
              {game.shots.map((_, index) => <button aria-label={`${index + 1}. ekranı göster`} className={shot === index ? "active" : ""} onClick={() => setShot(index)} key={index}>{index + 1}</button>)}
            </div>
          </div>
          <div className="game-detail">
            <div className="stats">
              {game.stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
            </div>
            <h3>Nasıl oynanır?</h3>
            <div className="steps">
              {game.steps.map(([title, text], index) => (
                <article key={title}><span>0{index + 1}</span><div><b>{title}</b><p>{text}</p></div></article>
              ))}
            </div>
            <div className="feature-grid">
              {game.features.map((feature) => <span key={feature}><i>✓</i>{feature}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="koleksiyon" className="collection">
        <p className="eyebrow">ÜÇ OYUN / TEK FELSEFE</p>
        <h2>Gürültüyü azalt.<br /><i>Oyunu öne çıkar.</i></h2>
        <div className="collection-grid">
          {games.map((item, index) => (
            <button key={item.id} onClick={() => choose(index)}>
              <span className="collection-image"><Image src={item.shots[0]} alt="" fill sizes="320px" /></span>
              <small>{item.index}</small><b>{item.title}</b><i>↗</i>
            </button>
          ))}
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark"><i /><i /><i /><i /></span><b>GÖRSEN</b><em>GAMES</em></div>
        <p>Renkli düşünceler,<br />özenle tasarlanmış bulmacalar.</p>
        <a href="#top">Başa dön ↑</a>
        <small>© 2026 GÖRSEN GAMES</small>
      </footer>
    </main>
  );
}
