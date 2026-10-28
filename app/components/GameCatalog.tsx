"use client";

import { useMemo, useState } from "react";
import Image from "./SiteImage";
import StoreBadge from "./StoreBadge";
import { catalogGames } from "../data/catalog";

type Filter = "all" | "ios" | "android" | "soon";

export default function GameCatalog({ language = "tr" }: { language?: "tr" | "en" }) {
  const [filter, setFilter] = useState<Filter>("all");
  const labels = language === "tr"
    ? { title: "Bütün oyunlar bir arada.", all: "Tümü", ios: "App Store", android: "Google Play", soon: "Yakında", inspect: "Oyunu incele", levels: "bölüm" }
    : { title: "Every game in one place.", all: "All", ios: "App Store", android: "Google Play", soon: "Coming soon", inspect: "Explore game", levels: "levels" };
  const games = useMemo(() => catalogGames.filter((game) => {
    if (filter === "all") return true;
    if (filter === "soon") return game.platforms.length === 0;
    return game.platforms.includes(filter);
  }), [filter]);

  return (
    <section className="catalog-shell" aria-label={language === "tr" ? "Oyun kataloğu" : "Game catalog"}>
      <div className="catalog-head">
        <div><small>{language === "tr" ? "OYUN KATALOĞU" : "GAME CATALOG"}</small><h2>{labels.title}</h2></div>
        <div className="catalog-filters" role="group" aria-label={language === "tr" ? "Oyunları filtrele" : "Filter games"}>
          {(["all", "ios", "android", "soon"] as Filter[]).map((value) => <button key={value} onClick={() => setFilter(value)} className={filter === value ? "active" : ""} aria-pressed={filter === value}>{labels[value]}</button>)}
        </div>
      </div>
      <div className="catalog-grid">
        {games.map((game, index) => (
          <article className="catalog-card" key={game.slug} style={{ "--catalog-accent": game.accent } as React.CSSProperties}>
            <a className="catalog-image" href={language === "tr" ? `/${game.slug}` : `/en/games/${game.slug}`}>
              <Image className="catalog-image-primary" src={game.image} alt={`${game.name} ${language === "tr" ? "oyun ekranı" : "game screen"}`} fill sizes="(max-width:700px) 92vw, 25vw" />
              <Image className="catalog-image-secondary" src={game.secondary} alt="" fill sizes="(max-width:700px) 92vw, 25vw" />
              <span>0{index + 1}</span>
              <small>{language === "tr" ? "GERÇEK OYUN EKRANI" : "REAL GAME SCREEN"}</small>
            </a>
            <div className="catalog-copy">
              <small>{language === "tr" ? game.categoryTr : game.categoryEn}</small>
              <h3>{game.name}</h3>
              <p>{language === "tr" ? game.descriptionTr : game.descriptionEn}</p>
              <div className="catalog-meta"><b>{game.levels} {labels.levels}</b><span>{game.platforms.length ? game.platforms.map((platform) => platform === "ios" ? "iOS" : "Android").join(" · ") : labels.soon}</span></div>
              <div className="catalog-actions">
                <a href={language === "tr" ? `/${game.slug}` : `/en/games/${game.slug}`}>{labels.inspect} <span>↗</span></a>
                {game.playStore && <a href={game.playStore} target="_blank" rel="noopener noreferrer" aria-label={`${game.name} Google Play`}><StoreBadge platform="play" /></a>}
                {game.appStore && <a href={game.appStore} target="_blank" rel="noopener noreferrer" aria-label={`${game.name} App Store`}><StoreBadge platform="ios" /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
