"use client";

import Image from "./SiteImage";
import Link from "next/link";
import StoreBadge from "./StoreBadge";
import FooterLinks from "./FooterLinks";
import NextGamesShowcase from "./NextGamesShowcase";
import { useEffect, useState } from "react";

export type GameConfig = {
  kind: "area" | "grid" | "garden" | "wind" | "hex";
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
  playStoreUrl?: string;
  appStoreUrl?: string;
};

function StoreButton({ platform, href }: { platform: "play" | "ios"; href?: string }) {
  const label = platform === "play" ? "GOOGLE PLAY" : "APP STORE";
  const content = <><StoreBadge platform={platform}/>{!href && <b className="store-soon-label">YAKINDA</b>}</>;

  return href
    ? <a className="store-button badge-button" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} mağazasında aç`}>{content}</a>
    : <span className="store-button badge-button is-soon" aria-label={`${label} için yakında`}>{content}</span>;
}

export default function GameLanding({ game }: { game: GameConfig }) {
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
        <Link href="/" className="gp-brand"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="38px"/></span><b>GÖRSEN</b><small>GAMES</small></Link>
        <div><a href="#how">Nasıl oynanır?</a><a href="#features">Özellikler</a><a href="#screens">Görseller</a></div>
        {game.playStoreUrl || game.appStoreUrl
          ? <a className="store-pill" href={game.playStoreUrl ?? game.appStoreUrl} target="_blank" rel="noopener noreferrer">Şimdi indir</a>
          : <span className="store-pill">iOS ve Android’de Yakında</span>}
      </nav>

      <header className="gp-hero">
        <div className="gp-shape shape-a"/><div className="gp-shape shape-b"/>
        <div className="gp-hero-copy gp-reveal">
          <p className="gp-eyebrow">{game.eyebrow}</p>
          <h1>{game.name}</h1>
          <h2>{game.tagline}</h2>
          <p>{game.description}</p>
          <div className="gp-actions"><StoreButton platform="play" href={game.playStoreUrl}/><StoreButton platform="ios" href={game.appStoreUrl}/><a className="how-link" href="#how">Nasıl oynanır? ↓</a></div>
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

      <section className="gp-cta gp-reveal"><p>GÖRSEN GAMES SUNAR</p><h2>{game.name}</h2><span>{game.tagline}</span><div className="gp-store-row"><StoreButton platform="play" href={game.playStoreUrl}/><StoreButton platform="ios" href={game.appStoreUrl}/></div></section>
      <NextGamesShowcase currentGame={game.name}/>
      <footer className="gp-footer"><Link href="/" className="gp-brand"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="38px"/></span><b>GÖRSEN</b><small>GAMES</small></Link><p>Sade, eğlenceli ve düşündürücü mobil oyunlar.</p><FooterLinks/><small>© 2026 Görsen Games</small></footer>
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
