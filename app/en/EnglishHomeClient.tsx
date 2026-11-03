"use client";

import { useEffect, useState } from "react";
import Image from "../components/SiteImage";
import StoreBadge from "../components/StoreBadge";
import GameCatalog from "../components/GameCatalog";
import { catalogGames } from "../data/catalog";

const headlines: Record<string, string> = {
  "puzzle-area": "Follow the numbers. Find every area.",
  "block-puzzle-grid": "Place the pieces. Complete the grid.",
  bloomshift: "Rotate the waves. Awaken the garden.",
  "petal-shift": "Slide. Match. Bloom.",
  "fudu-hex": "Merge the numbers. Reach the target.",
  "liva-lights": "Light the garden under moonlight.",
  "bubblefin-pop": "Merge colors. Set the pufferfish free.",
  "trail-builder": "Plan the path. Reach the summit.",
};

function CollectionStore({ platform, href }: { platform: "play" | "ios"; href?: string }) {
  const name = platform === "play" ? "Google Play" : "App Store";
  return href ? <a className={`collection-store ${platform}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open on ${name}`}><StoreBadge platform={platform}/></a>
    : <span className={`collection-store ${platform} is-soon`} aria-label={`Coming soon on ${name}`}><StoreBadge platform={platform}/><b>Coming soon</b></span>;
}

function EnglishFooterLinks() {
  return <div className="footer-links">
    <div className="footer-column" role="navigation" aria-label="Game links"><b>Games</b>{catalogGames.map((game) => <a href={`/en/games/${game.slug}`} key={game.slug}>{game.name}</a>)}</div>
    <div className="footer-column" role="navigation" aria-label="Görsen Games links"><b>Görsen Games</b><a href="/en/about">About</a><a href="/en/updates">Updates</a><a href="/en/contact">Contact</a><a href="/en/privacy-policy">Privacy Policy</a><a href="/en/terms">Terms of Use</a></div>
  </div>;
}

export default function EnglishHomeClient() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const game = catalogGames[active];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .14 });
    document.querySelectorAll("[data-home-reveal]").forEach((node) => observer.observe(node));
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const platformStats = [
    `${game.levels} levels`,
    game.platforms.includes("android") ? "Available on Android" : "Android coming soon",
    game.platforms.includes("ios") ? "Available on iOS" : "iOS coming soon",
  ];

  return <main className="studio-home english-home-parity" style={{ "--home-accent": game.accent, "--home-soft": `${game.accent}18`, "--game-count": catalogGames.length } as React.CSSProperties}>
    <div className="home-progress" style={{ transform: `scaleX(${progress})` }}/>
    <nav className="studio-nav">
      <a className="studio-brand" href="#top" aria-label="Görsen Games home"><span className="brand-logo"><Image src="/gorsen-games-logo.png" alt="" fill sizes="44px"/></span><span><b>GÖRSEN</b><small>GAMES</small></span></a>
      <div className="studio-links"><a href="#games">Games</a><a href="/en/about">About</a><a href="/en/updates">Updates</a><a href="/en/contact">Contact</a></div>
      <a className="nav-cta" href="#games">Explore games <span>↘</span></a>
    </nav>

    <header id="top" className="studio-cover-hero">
      <Image src="/gorsen-games-hero-showcase.png" alt="Görsen Games and eight mobile puzzle games" fill priority sizes="100vw"/>
      <div className="studio-cover-shade"/>
      <a className="studio-cover-scroll" href="#games"><span>Explore games</span><i>↓</i></a>
    </header>

    <div className="studio-marquee" aria-hidden="true"><div>{[...catalogGames, ...catalogGames].map((item, index) => <span key={`${item.slug}-${index}`}>{item.name.toUpperCase()}<i/></span>)}</div></div>

    <section id="games" className="home-games">
      <div className="section-heading" data-home-reveal><p>GAME COLLECTION</p><h2>Eight ways to think.</h2><span>08 GAMES</span></div>
      <div className="game-tabs" role="tablist">{catalogGames.map((item, index) => <button role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={active === index ? "active" : ""} key={item.slug}><span>0{index + 1}</span>{item.name}</button>)}</div>
      <div className="collection-scroll-scene">
        <article className="featured-game" key={game.slug}>
          <div className="featured-copy">
            <p>{game.categoryEn.toUpperCase()}</p><h3>{game.name}</h3><h4>{headlines[game.slug]}</h4><p className="featured-text">{game.descriptionEn}</p>
            <div className="featured-stats">{platformStats.map((stat) => <span key={stat}>{stat}</span>)}</div>
            <div className="collection-stores" aria-label={`${game.name} store links`}><CollectionStore platform="play" href={game.playStore}/><CollectionStore platform="ios" href={game.appStore}/></div>
            <a href={`/en/games/${game.slug}`} aria-label={`Explore ${game.name}`}>Explore game <span>↗</span></a>
          </div>
          <div className="featured-visual"><div className="visual-number">0{active + 1}</div><div className="screen-card screen-main"><Image src={game.image} alt={`${game.name} game screen`} fill sizes="340px"/></div><div className="screen-card screen-secondary"><Image src={game.secondary} alt={`${game.name} second game screen`} fill sizes="250px"/></div><span className="play-note">REAL GAME SCREEN · OFFICIAL ARTWORK</span></div>
        </article>
      </div>
      <div className="game-index">{catalogGames.map((item, index) => <button onClick={() => setActive(index)} className={active === index ? "active" : ""} key={item.slug}><span>0{index + 1}</span><div><b>{item.name}</b><small>{item.categoryEn.toUpperCase()}</small></div><i>↗</i></button>)}</div>
    </section>

    <GameCatalog language="en"/>

    <section className="studio-proof" data-home-reveal>
      <div className="studio-proof-copy"><p>INDEPENDENT GAME STUDIO</p><h2>From first idea to final detail,<br/><span>one coherent design language.</span></h2><p>Görsen Games brings readable mechanics, carefully built levels, and calm visual worlds together. Every game is easy to understand in a short break and rewarding to master over time.</p></div>
      <div className="studio-proof-grid" aria-label="Görsen Games studio facts"><article><b>08</b><span>Original mobile games</span></article><article><b>5,900+</b><span>Designed levels</span></article><article><b>TR · EN</b><span>Two languages</span></article><article className="studio-proof-links"><a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer">Google Play profile <span>↗</span></a><a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer">App Store profile <span>↗</span></a></article></div>
    </section>

    <section className="studio-promise"><div data-home-reveal><p>IN OUR GAMES</p><h2>A good experience<br/><span>comes before competition.</span></h2></div><div className="promise-grid"><article data-home-reveal><b>01</b><h3>Your own pace</h3><p>Pressure-free levels made for short breaks and easy returns.</p></article><article data-home-reveal><b>02</b><h3>Meaningful progress</h3><p>A balanced journey from guided beginnings to boards that reward mastery.</p></article><article data-home-reveal><b>03</b><h3>Made for everyone</h3><p>Clean mobile and tablet interfaces with Turkish and English support.</p></article></div></section>

    <section className="home-cta" id="contact" data-home-reveal><p>ANDROID AND iOS GAMES</p><h2>Your next<br/>puzzle is ready.</h2><div className="home-contact-actions"><a href="mailto:info@gorsengames.com"><small>EMAIL</small><b>info@gorsengames.com</b><span>↗</span></a><a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer"><StoreBadge platform="play"/><span>↗</span></a><a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer"><StoreBadge platform="ios"/><span>↗</span></a></div></section>

    <footer className="studio-footer"><a className="studio-brand" href="#top"><span className="brand-logo"><Image src="/gorsen-games-logo.png" alt="" fill sizes="44px"/></span><span><b>GÖRSEN</b><small>GAMES</small></span></a><p>Independent mobile games with clear mechanics, colorful worlds, and thoughtful challenges.</p><EnglishFooterLinks/><small>© 2026 Görsen Games. All rights reserved.</small></footer>
  </main>;
}
