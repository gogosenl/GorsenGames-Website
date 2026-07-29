"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GameConfig = {
  kind: "area" | "grid" | "garden";
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  heroImage: string;
  accent: string;
  stats: [string, string][];
  steps: [string, string][];
  features: string[];
  screenshots: { src: string; label: string }[];
  layersTitle: string;
  layersText: string;
  layers: string[];
  modes?: { name: string; text: string; tone: string }[];
  rewardTitle: string;
  rewardText: string;
};

export default function GameLanding({ game }: { game: GameConfig }) {
  const [wave, setWave] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".gp-reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`game-page ${game.kind}`} style={{ "--game-accent": game.accent } as React.CSSProperties}>
      <nav className="gp-nav">
        <a href="/" className="gp-brand"><span><i/><i/><i/><i/></span><b>GÖRSEN</b><small>GAMES</small></a>
        <div><a href="#how">Nasıl oynanır?</a><a href="#features">Özellikler</a><a href="#screens">Görseller</a></div>
        <span className="store-pill">Google Play’de Yakında</span>
      </nav>

      <header className="gp-hero">
        <div className="gp-shape shape-a"/><div className="gp-shape shape-b"/>
        <div className="gp-hero-copy gp-reveal">
          <p className="gp-eyebrow">{game.eyebrow}</p>
          <h1>{game.name}</h1>
          <h2>{game.tagline}</h2>
          <p>{game.description}</p>
          <div className="gp-actions"><span className="store-button"><i>▶</i><span><small>GOOGLE PLAY’DE</small><b>YAKINDA</b></span></span><a href="#how">Nasıl oynanır? ↓</a></div>
          <div className="gp-proof">{game.stats.map(([value,label])=><span key={label}><b>{value}</b><small>{label}</small></span>)}</div>
        </div>
        <div className="gp-visual gp-reveal">
          <div className="gp-orbit one"/><div className="gp-orbit two"/>
          <div className="gp-phone"><Image src={game.heroImage} alt={`${game.name} oyun ekranı`} fill priority sizes="390px"/></div>
          <span className="float-chip chip-one">TR <i/> EN</span>
          <span className="float-chip chip-two">Mobil bulmaca</span>
        </div>
      </header>

      <section id="how" className="gp-how">
        <div className="gp-section-head gp-reveal"><p>NASIL OYNANIR?</p><h2>Öğrenmesi kolay.<br/><span>Çözmesi ustalık ister.</span></h2></div>
        <div className="gp-steps">
          {game.steps.map(([title,text],index)=><article className="gp-reveal" style={{transitionDelay:`${index*90}ms`}} key={title}><span>0{index+1}</span><b>{title}</b><p>{text}</p></article>)}
        </div>
        <div className={`mechanic-demo ${game.kind}`} onClick={()=>game.kind==="garden"&&setWave(v=>v+1)} aria-label={game.kind==="garden"?"Çiçekleri döndürmek için dokun":undefined}>
          {game.kind==="area" && <><div className="area-grid">{[4,0,0,12,15,0,3,0,0,8,0,4].map((n,i)=><i key={i} className={i<4?"selected":""}>{n||""}</i>)}</div><span>4 KARELİK ALAN</span></>}
          {game.kind==="grid" && <><div className="grid-board">{Array.from({length:25},(_,i)=><i key={i} className={i%6===0?"filled":""}/>)}</div><div className="falling-piece"><i/><i/><i/><i/></div><span>SÜRÜKLE · YERLEŞTİR</span></>}
          {game.kind==="garden" && <><div className="garden-grid" style={{transform:`rotate(${wave*90}deg)`}}>{["blue","gold","gold","blue"].map((c,i)=><i className={c} key={i}>✿</i>)}</div><button aria-label="Dalgayı döndür">↻</button><span>DALGAYA DOKUN</span></>}
        </div>
      </section>

      <section className="gp-layers">
        <div className="gp-layer-copy gp-reveal"><p>BÖLÜM YAPISI</p><h2>{game.layersTitle}</h2><p>{game.layersText}</p></div>
        <div className="layer-track">{game.layers.map((layer,index)=><span className="gp-reveal" style={{transitionDelay:`${index*45}ms`}} key={layer}><i>{String(index+1).padStart(2,"0")}</i><b>{layer}</b></span>)}</div>
      </section>

      {game.modes && <section className="gp-modes"><div className="gp-section-head gp-reveal"><p>ÜÇ OYUN MODU</p><h2>Ritmini seç.<br/><span>Kendi hızında ilerle.</span></h2></div><div>{game.modes.map(mode=><article className="gp-reveal" key={mode.name} style={{"--tone":mode.tone} as React.CSSProperties}><i/><b>{mode.name}</b><p>{mode.text}</p></article>)}</div></section>}

      <section id="features" className="gp-features">
        <div className="gp-feature-intro gp-reveal"><p>OYUN ÖZELLİKLERİ</p><h2>{game.rewardTitle}</h2><p>{game.rewardText}</p></div>
        <div className="feature-list">{game.features.map((feature,index)=><span className="gp-reveal" style={{transitionDelay:`${index*45}ms`}} key={feature}><i>✓</i>{feature}</span>)}</div>
      </section>

      <section id="screens" className="gp-screens">
        <div className="gp-section-head gp-reveal"><p>GERÇEK OYUN EKRANLARI</p><h2>Telefonunda nasıl<br/><span>görünecek?</span></h2></div>
        <div className="screen-row">{game.screenshots.map((shot,index)=><figure className="gp-reveal" style={{transitionDelay:`${index*100}ms`}} key={shot.src}><div><Image src={shot.src} alt={`${game.name} ${shot.label}`} fill sizes="(max-width:700px) 72vw, 28vw"/></div><figcaption><span>0{index+1}</span>{shot.label}</figcaption></figure>)}</div>
      </section>

      <section className="gp-cta gp-reveal"><p>GÖRSEN GAMES SUNAR</p><h2>{game.name}</h2><span>{game.tagline}</span><div className="store-button"><i>▶</i><span><small>GOOGLE PLAY’DE</small><b>YAKINDA</b></span></div></section>
      <footer className="gp-footer"><a href="/" className="gp-brand"><span><i/><i/><i/><i/></span><b>GÖRSEN</b><small>GAMES</small></a><p>Sade, eğlenceli ve düşündürücü mobil oyunlar.</p><div><a href="/privacy-policy">Gizlilik Politikası</a><a href="/terms">Kullanım Şartları</a></div><small>© 2026 Görsen Games</small></footer>
    </main>
  );
}
