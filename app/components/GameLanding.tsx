"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GameConfig = {
  kind: "area" | "grid" | "garden" | "wind";
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  heroImage: string;
  promoImage?: string;
  iconImage?: string;
  accent: string;
  stats: [string, string][];
  steps: [string, string][];
  features: string[];
  screenshots: { src: string; label: string }[];
  layersTitle: string;
  layersText: string;
  layers: string[];
  layerScreens?: { src: string; label: string }[];
  modes?: { name: string; text: string; tone: string }[];
  rewardTitle: string;
  rewardText: string;
  languages?: string;
};

export default function GameLanding({ game }: { game: GameConfig }) {
  const [wave, setWave] = useState(0);
  const [demo, setDemo] = useState(0);
  const [activeShot, setActiveShot] = useState<number | null>(null);
  const [activeLayer, setActiveLayer] = useState(0);
  const [layerDirection, setLayerDirection] = useState<"next" | "previous">("next");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".gp-reveal").forEach((node) => observer.observe(node));
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveShot(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <main className={`game-page ${game.kind}`} style={{ "--game-accent": game.accent } as React.CSSProperties}>
      <div className="gp-progress" style={{transform:`scaleX(${progress})`}}/>
      <nav className="gp-nav">
        <a href="/" className="gp-brand"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="38px"/></span><b>GÖRSEN</b><small>GAMES</small></a>
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
          <span className="float-chip chip-one">{game.languages ?? <><span>TR</span> <i/> <span>EN</span></>}</span>
          <span className="float-chip chip-two">Mobil bulmaca</span>
        </div>
      </header>

      {game.promoImage && <section className="gp-campaign gp-reveal" aria-label={`${game.name} tanıtım görseli`}>
        <div className="gp-campaign-art">
          <Image src={game.promoImage} alt={`${game.name} resmi tanıtım tasarımı`} fill priority sizes="(max-width: 700px) 100vw, 72vw"/>
          <div className="gp-campaign-sheen"/>
        </div>
        <div className="gp-campaign-copy">
          {game.iconImage && <span className="gp-game-icon"><Image src={game.iconImage} alt={`${game.name} ikonu`} fill sizes="96px"/></span>}
          <p>GÖRSEN GAMES ORIGINAL</p>
          <h2>{game.name}</h2>
          <span>{game.tagline}</span>
          <a href="#screens">Gerçek oyun ekranlarını gör <i>↓</i></a>
        </div>
      </section>}

      <section id="how" className="gp-how">
        <div className="gp-section-head gp-reveal"><p>NASIL OYNANIR?</p><h2>Öğrenmesi kolay.<br/><span>Çözmesi ustalık ister.</span></h2></div>
        <div className="gp-steps">
          {game.steps.map(([title,text],index)=><article className="gp-reveal" style={{transitionDelay:`${index*90}ms`}} key={title}><span>0{index+1}</span><b>{title}</b><p>{text}</p></article>)}
        </div>
        <button className={`mechanic-demo ${game.kind} demo-${demo%2}`} onClick={()=>{setDemo(v=>v+1);if(game.kind==="garden")setWave(v=>v+1)}} aria-label={`${game.name} mekanik örneğini oynat`}>
          {game.kind==="area" && <><div className="area-grid">{[4,0,0,12,15,0,3,0,0,8,0,4].map((n,i)=><i key={i} className={i<4?"selected":""}>{n||""}</i>)}</div><span>ALANI DEĞİŞTİRMEK İÇİN DOKUN</span></>}
          {game.kind==="grid" && <><div className="grid-board">{Array.from({length:25},(_,i)=><i key={i} className={i%6===0?"filled":""}/>)}</div><div className="falling-piece"><i/><i/><i/><i/></div><span>PARÇAYI YERLEŞTİRMEK İÇİN DOKUN</span></>}
          {game.kind==="garden" && <><div className="garden-grid" style={{transform:`rotate(${wave*90}deg)`}}>{["blue","gold","gold","blue"].map((c,i)=><i className={c} key={i}>✿</i>)}</div><i className="wave-button">↻</i><span>DALGAYA DOKUN</span></>}
          {game.kind==="wind" && <><div className="wind-grid">{["purple","green","green","gold","gold","green","coral","coral","gold"].map((color,i)=><i className={color} key={i}>✿</i>)}</div><i className="wind-arrow">→</i><span>SIRAYI KAYDIRMAK İÇİN DOKUN</span></>}
        </button>
      </section>

      <section className={`gp-layers ${game.layerScreens ? "has-layer-gallery" : ""}`}>
        <div className="gp-layer-copy gp-reveal"><p>BÖLÜM YAPISI</p><h2>{game.layersTitle}</h2><p>{game.layersText}</p></div>
        {game.layerScreens ? (
          <div className="layer-gallery gp-reveal">
            <div className="layer-switcher" role="tablist" aria-label={`${game.name} bölüm boyutları`}>
              {game.layerScreens.map((layer, index) => (
                <button
                  className={activeLayer === index ? "active" : ""}
                  key={layer.label}
                  onClick={() => {
                    if (index === activeLayer) return;
                    setLayerDirection(index > activeLayer ? "next" : "previous");
                    setActiveLayer(index);
                  }}
                  role="tab"
                  aria-selected={activeLayer === index}
                  aria-controls="layer-preview"
                >
                  {layer.label.replace("x", "×")}
                </button>
              ))}
            </div>
            <div className="layer-preview" id="layer-preview" role="tabpanel">
              <div className={`layer-phone ${layerDirection}`} key={game.layerScreens[activeLayer].src}>
                <Image
                  src={game.layerScreens[activeLayer].src}
                  alt={`${game.name} ${game.layerScreens[activeLayer].label} bölüm ekranı`}
                  fill
                  sizes="(max-width: 620px) 82vw, 360px"
                />
              </div>
              <div className="layer-preview-copy" key={`copy-${game.layerScreens[activeLayer].src}`}>
                <span>SEÇİLİ KATMAN</span>
                <b>{game.layerScreens[activeLayer].label.replace("x", "×")}</b>
                <small>Gerçek oyun ekranı</small>
              </div>
            </div>
          </div>
        ) : (
          <div className="layer-track">{game.layers.map((layer,index)=><span className="gp-reveal" style={{transitionDelay:`${index*45}ms`}} key={layer}><i>{String(index+1).padStart(2,"0")}</i><b>{layer}</b></span>)}</div>
        )}
      </section>

      {game.modes && <section className="gp-modes"><div className="gp-section-head gp-reveal"><p>ÜÇ OYUN MODU</p><h2>Ritmini seç.<br/><span>Kendi hızında ilerle.</span></h2></div><div>{game.modes.map(mode=><article className="gp-reveal" key={mode.name} style={{"--tone":mode.tone} as React.CSSProperties}><i/><b>{mode.name}</b><p>{mode.text}</p></article>)}</div></section>}

      <section id="features" className="gp-features">
        <div className="gp-feature-intro gp-reveal"><p>OYUN ÖZELLİKLERİ</p><h2>{game.rewardTitle}</h2><p>{game.rewardText}</p></div>
        <div className="feature-list">{game.features.map((feature,index)=><span className="gp-reveal" style={{transitionDelay:`${index*45}ms`}} key={feature}><i>✓</i>{feature}</span>)}</div>
      </section>

      <section id="screens" className="gp-screens">
        <div className="gp-section-head gp-reveal"><p>GERÇEK OYUN EKRANLARI</p><h2>Telefonunda nasıl<br/><span>görünecek?</span></h2></div>
        <div className="screen-row">{game.screenshots.map((shot,index)=><figure className="gp-reveal" style={{transitionDelay:`${index*100}ms`}} key={shot.src}><button onClick={()=>setActiveShot(index)} aria-label={`${shot.label} görselini büyüt`}><Image src={shot.src} alt={`${game.name} ${shot.label}`} fill sizes="(max-width:700px) 72vw, 28vw"/><span>GÖRSELİ BÜYÜT ↗</span></button><figcaption><span>0{index+1}</span>{shot.label}</figcaption></figure>)}</div>
      </section>

      <section className="gp-cta gp-reveal"><p>GÖRSEN GAMES SUNAR</p><h2>{game.name}</h2><span>{game.tagline}</span><div className="store-button"><i>▶</i><span><small>GOOGLE PLAY’DE</small><b>YAKINDA</b></span></div></section>
      <footer className="gp-footer"><a href="/" className="gp-brand"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="38px"/></span><b>GÖRSEN</b><small>GAMES</small></a><p>Sade, eğlenceli ve düşündürücü mobil oyunlar.</p><div><a href="/privacy-policy">Gizlilik Politikası</a><a href="/terms">Kullanım Şartları</a></div><small>© 2026 Görsen Games</small></footer>
      {activeShot !== null && <div className="shot-modal" role="dialog" aria-modal="true" aria-label={`${game.screenshots[activeShot].label} ekran görüntüsü`} onClick={()=>setActiveShot(null)}>
        <button className="modal-close" onClick={()=>setActiveShot(null)} aria-label="Galeriyi kapat">KAPAT ×</button>
        <button className="modal-arrow prev" onClick={(event)=>{event.stopPropagation();setActiveShot((activeShot-1+game.screenshots.length)%game.screenshots.length)}} aria-label="Önceki görsel">←</button>
        <div className="modal-phone" onClick={(event)=>event.stopPropagation()}><Image src={game.screenshots[activeShot].src} alt={`${game.name} ${game.screenshots[activeShot].label}`} fill sizes="430px"/></div>
        <div className="modal-caption"><span>0{activeShot+1} / 0{game.screenshots.length}</span><b>{game.screenshots[activeShot].label}</b></div>
        <button className="modal-arrow next" onClick={(event)=>{event.stopPropagation();setActiveShot((activeShot+1)%game.screenshots.length)}} aria-label="Sonraki görsel">→</button>
      </div>}
    </main>
  );
}
