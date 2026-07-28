"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const games = [
  {
    id: "area",
    no: "01",
    title: "PUZZLE\nAREA",
    shortTitle: "Puzzle Area",
    claim: "Sayıların ardındaki alanı keşfet.",
    body: "Her sayı bir alanın boyutunu tarif eder. Hücreleri doğru sınırlar içinde birleştir, renkli bölgeleri ortaya çıkar ve gittikçe büyüyen tabloları çöz.",
    cinematic: "/games/puzzle-area-cinematic.png",
    screen: "/games/puzzle-area-game.png",
    screenTwo: "/games/puzzle-area-map.png",
    color: "#58e7ff",
    rgb: "88,231,255",
    stats: [["500", "BÖLÜM"], ["3×3—10×10", "TABLO"], ["8", "KATMAN"]],
    modes: ["Sayıyı oku", "Alanı sınırla", "Tabloyu tamamla"],
  },
  {
    id: "grid",
    no: "02",
    title: "PUZZLE\nGRID",
    shortTitle: "Puzzle Grid",
    claim: "Her parçanın tek bir doğru yeri var.",
    body: "Renkli parçaları tepsiden al, kusursuz konumuna sürükle ve boşluk bırakmadan ızgarayı kapat. Basit görünen şekiller yüzlerce farklı düzen kurar.",
    cinematic: "/games/puzzle-grid-cinematic.png",
    screen: "/games/puzzle-grid-game.png",
    screenTwo: "/games/puzzle-grid-map.png",
    color: "#88ff43",
    rgb: "136,255,67",
    stats: [["850", "BÖLÜM"], ["3×3—9×9", "IZGARA"], ["5", "DÜNYA"]],
    modes: ["Parçayı seç", "Konumuna sürükle", "Izgarayı kapat"],
  },
  {
    id: "garden",
    no: "03",
    title: "DALGA\nBAHÇESİ",
    shortTitle: "Dalga Bahçesi",
    claim: "Bir dokunuş. Dört çiçek. Sonsuz olasılık.",
    body: "Dört karenin arasındaki dalga noktasını döndür. Zincirleme hamleleri planla, çiçekleri kendi renk alanlarına taşı ve gece bahçesini uyandır.",
    cinematic: "/games/dalga-bahcesi-cinematic.png",
    screen: "/games/dalga-game.png",
    screenTwo: "/games/dalga-home.png",
    color: "#38e4c2",
    rgb: "56,228,194",
    stats: [["500", "BAHÇE"], ["4", "BOYUT"], ["3", "ZORLUK"]],
    modes: ["Dalga noktasını seç", "Yönü belirle", "Renkleri buluştur"],
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState(0);
  const [progress, setProgress] = useState(0);
  const game = games[active];

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("seen")),
      { threshold: 0.13 },
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => reveal.observe(node));
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? (scrollY / max) * 100 : 0);
    };
    const pointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
      document.documentElement.style.setProperty("--px", `${(event.clientX / innerWidth - 0.5) * 2}`);
      document.documentElement.style.setProperty("--py", `${(event.clientY / innerHeight - 0.5) * 2}`);
    };
    addEventListener("scroll", scroll, { passive: true });
    addEventListener("pointermove", pointer, { passive: true });
    scroll();
    return () => {
      reveal.disconnect();
      removeEventListener("scroll", scroll);
      removeEventListener("pointermove", pointer);
    };
  }, []);

  const tilt = (event: React.PointerEvent<HTMLElement>) => {
    if (matchMedia("(pointer: coarse)").matches) return;
    const card = event.currentTarget;
    const box = card.getBoundingClientRect();
    card.style.setProperty("--rx", `${((event.clientY - box.top) / box.height - 0.5) * -7}deg`);
    card.style.setProperty("--ry", `${((event.clientX - box.left) / box.width - 0.5) * 7}deg`);
  };

  const untilt = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  const selectGame = (index: number, jump = false) => {
    setActive(index);
    setScreen(0);
    if (jump) setTimeout(() => document.querySelector("#game")?.scrollIntoView({ behavior: "smooth" }), 20);
  };

  return (
    <main style={{ "--accent": game.color, "--accent-rgb": game.rgb } as React.CSSProperties}>
      <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="cursor-glow" />
      <div className="cursor-dot" />
      <div className="transition-flash" key={`flash-${active}`} />
      <nav>
        <a href="#top" className="logo"><span className="logo-grid"><i/><i/><i/><i/></span><b>GÖRSEN</b><small>GAMES</small></a>
        <div className="nav-center"><a href="#games">OYUNLAR</a><a href="#game">OYUN DÜNYASI</a><a href="#studio">STÜDYO</a></div>
        <a href="#games" className="menu-action">KOLEKSİYONU KEŞFET <span>↘</span></a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="particle p-one" /><div className="particle p-two" /><div className="particle p-three" />
        {games.map((item, index) => (
          <Image key={item.id} src={item.cinematic} alt="" fill priority={index === 0}
            className={`hero-bg ${active === index ? "active" : ""}`} sizes="100vw" />
        ))}
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="kicker"><i /> BAĞIMSIZ MOBİL OYUN STÜDYOSU · 2026</p>
          <h1 key={`title-${active}`}><em>PLAY</em><br/><span>BEYOND</span><br/><em>THE GRID.</em></h1>
          <div className="hero-bottom">
            <p>Üç özgün mekanik.<br/>Tek bir tasarım fikri:<br/><b>her dokunuş anlamlı.</b></p>
            <a href="#games" className="round-link"><span>OYUNLARI<br/>İNCELE</span><i>↘</i></a>
          </div>
        </div>
        <div className="hero-selector">
          {games.map((item, index) => (
            <button key={item.id} onClick={() => selectGame(index)} className={active === index ? "active" : ""}>
              <span>{item.no}</span><b>{item.shortTitle}</b><i />
            </button>
          ))}
        </div>
        <span className="scroll-note">KAYDIR <i /></span>
      </header>

      <section className="manifesto" id="studio">
        <p data-reveal>GÖRSEN / OYUN FELSEFESİ</p>
        <h2 data-reveal>Öğrenmesi <span>bir an.</span><br/>Ustalaşması <span>bir yolculuk.</span></h2>
        <div className="manifesto-foot" data-reveal>
          <p>Görsel gürültüyü azaltıyor, bulmacanın özünü büyütüyoruz. Her oyun kendi ritmine, dünyasına ve düşünme biçimine sahip.</p>
          <span>1.850+<small>ÖZGÜN BÖLÜM</small></span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>THINK <i>✦</i> TOUCH <i>✦</i> TRANSFORM <i>✦</i> PUZZLE AREA <i>✦</i> PUZZLE GRID <i>✦</i> DALGA BAHÇESİ <i>✦</i> THINK <i>✦</i> TOUCH <i>✦</i> TRANSFORM <i>✦</i></div>
      </div>

      <section id="games" className="game-rail">
        <div className="rail-title" data-reveal><span>SEÇİLMİŞ OYUNLAR</span><b>03 / 03</b></div>
        <div className="rail-grid">
          {games.map((item, index) => (
            <button className="tilt-card" key={item.id} onClick={() => selectGame(index, true)} onPointerMove={tilt} onPointerLeave={untilt} data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
              <Image src={item.cinematic} alt={`${item.shortTitle} özel oyun görseli`} fill sizes="(max-width: 760px) 100vw, 33vw" />
              <span className="rail-cover" />
              <small>{item.no}</small>
              <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p>{item.claim}</p>
              <i>↗</i>
            </button>
          ))}
        </div>
      </section>

      <section id="game" className="game-focus">
        <div className="focus-head" data-reveal>
          <div><p>{game.no} / OYUN DÜNYASI</p><h2>{game.shortTitle}</h2></div>
          <p>{game.body}</p>
        </div>
        <div className="cinema tilt-cinema" onPointerMove={tilt} onPointerLeave={untilt} data-reveal>
          <Image key={game.cinematic} src={game.cinematic} alt={`${game.shortTitle} sinematik oyun görseli`} fill sizes="92vw" />
          <div className="scan-line" />
          <div className="cinema-label"><span>ORIGINAL GAME ART</span><b>{game.claim}</b></div>
          <span className="cinema-index">{game.no}</span>
        </div>
        <div className="game-facts" data-reveal>
          {game.stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
        </div>
        <div className="experience">
          <div className="experience-copy" data-reveal>
            <p className="micro">OYUN DÖNGÜSÜ</p>
            <h3>Basit bir hareket.<br/><span>Derin bir karar.</span></h3>
            <ol>
              {game.modes.map((mode, index) => <li key={mode}><span>0{index + 1}</span><b>{mode}</b></li>)}
            </ol>
          </div>
          <div className="device-stage" data-reveal>
            <div className="halo" />
            <div className="orbit orbit-a"><i /></div><div className="orbit orbit-b"><i /></div>
            <div className="device">
              <Image key={`${game.id}-${screen}`} src={screen ? game.screenTwo : game.screen} alt={`${game.shortTitle} gerçek oyun ekranı`} fill sizes="350px" />
            </div>
            <div className="screen-toggle">
              <button className={!screen ? "active" : ""} onClick={() => setScreen(0)}>OYUN</button>
              <button className={screen ? "active" : ""} onClick={() => setScreen(1)}>HARİTA</button>
            </div>
          </div>
        </div>
      </section>

      <section className="all-games">
        <p data-reveal>SONRAKİ OYUNUNU SEÇ</p>
        {games.map((item, index) => (
          <button key={item.id} onClick={() => selectGame(index, true)} data-reveal>
            <span>{item.no}</span><b>{item.shortTitle}</b><small>{item.claim}</small><i>↗</i>
          </button>
        ))}
      </section>

      <footer>
        <div><p>GÖRSEN GAMES</p><h2>Think.<br/>Touch.<br/><span>Transform.</span></h2></div>
        <div className="footer-meta"><p>Renkli düşünceler.<br/>Keskin mekanikler.<br/>Sessizce büyüyen dünyalar.</p><a href="#top">BAŞA DÖN ↑</a></div>
        <small>© 2026 GÖRSEN GAMES · TÜM HAKLARI SAKLIDIR.</small>
      </footer>
    </main>
  );
}
