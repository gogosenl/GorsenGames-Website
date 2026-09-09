"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "./SiteImage";

const allGames = [
  {
    name: "Puzzle Area",
    href: "/puzzle-area",
    image: "/games/puzzle-area/layers/8x8.jpeg",
    accent: "#7b24d5",
    category: "Sayı ve alan bulmacası",
  },
  {
    name: "Block Puzzle Grid",
    href: "/block-puzzle-grid",
    image: "/games/puzzle-grid/layers/7x7.jpeg",
    accent: "#1b1817",
    category: "Parça yerleştirme bulmacası",
  },
  {
    name: "Bloomshift",
    href: "/bloomshift",
    image: "/games/v2/dalga-game.jpg",
    accent: "#145342",
    category: "Renk ve döndürme bulmacası",
  },
  {
    name: "Petal Shift",
    href: "/petal-shift",
    image: "/games/ruzgar-korusu/01-ana-ekran.jpg",
    accent: "#173f35",
    category: "Botanik kaydırma bulmacası",
  },
  {
    name: "Fudu Hex",
    href: "/fudu-hex",
    image: "/games/fudu-hex/02-gameplay.png",
    accent: "#9d173b",
    category: "Altıgen sayı birleştirme bulmacası",
  },
];

export default function NextGamesShowcase({ currentGame }: { currentGame: string }) {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const games = useMemo(() => {
    const currentIndex = allGames.findIndex((game) => game.name === currentGame);
    if (currentIndex < 0) return allGames;
    return [...allGames.slice(currentIndex + 1), ...allGames.slice(0, currentIndex)];
  }, [currentGame]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      { threshold: [0.35, 0.55, 0.75], rootMargin: "-22% 0px -34%" },
    );
    root.querySelectorAll<HTMLElement>(".next-game-step").forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [games]);

  const game = games[active];

  return (
    <section className="next-games-scroll" ref={rootRef} style={{ "--next-accent": game.accent } as React.CSSProperties}>
      <div className="next-games-heading">
        <p>GÖRSEN GAMES KOLEKSİYONU</p>
        <h2>Bir sonraki bulmacanı<br/><span>kaydırarak keşfet.</span></h2>
      </div>
      <div className="next-games-layout">
        <div className="next-games-sticky" aria-live="polite">
          <div className="next-game-number">0{active + 1}</div>
          <div className="next-game-phone" key={game.href}>
            <Image src={game.image} alt={`${game.name} oyun ekranı`} fill sizes="(max-width: 700px) 66vw, 320px" />
          </div>
          <div className="next-game-caption" key={`${game.href}-caption`}>
            <small>{game.category}</small>
            <b>{game.name}</b>
            <a href={game.href}>Oyunu keşfet <span>↗</span></a>
          </div>
        </div>
        <div className="next-games-track">
          {games.map((item, index) => (
            <article className={`next-game-step ${active === index ? "active" : ""}`} data-index={index} key={item.href}>
              <span>0{index + 1}</span>
              <div><small>{item.category}</small><h3>{item.name}</h3></div>
              <i aria-hidden="true">↓</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
