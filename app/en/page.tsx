import type { Metadata } from "next";
import Image from "../components/SiteImage";
import GameCatalog from "../components/GameCatalog";
import { catalogGames } from "../data/catalog";
import { EnglishFooter, EnglishNav } from "./EnglishChrome";

export const metadata: Metadata = { alternates: { canonical: "/en", languages: { "tr-TR": "/", en: "/en" } } };

export default function EnglishHome() {
  return <main><EnglishNav/><header className="en-hero"><div><p>INDEPENDENT MOBILE GAME STUDIO</p><h1>Colorful worlds.<br/><span>Thoughtful puzzles.</span></h1><p className="en-lead">Meet eight mobile games built around clear mechanics, satisfying progress, and visual worlds with a character of their own.</p><div className="en-hero-actions"><a href="#games">Explore the games ↓</a><a href="/en/about">Meet the studio ↗</a></div><div className="en-metrics"><span><b>8</b><small>original games</small></span><span><b>5,900+</b><small>designed levels</small></span><span><b>TR · EN</b><small>language support</small></span></div></div><div className="en-cover"><Image src="/og-v5-eight-games.png" alt="Eight Görsen Games mobile puzzle games" fill priority sizes="(max-width:900px) 94vw, 50vw"/></div></header><section className="en-intro"><p>DESIGN APPROACH</p><h2>Easy to understand.<br/><span>Rewarding to master.</span></h2><div><p>We focus on tactile interactions, readable rules, and progression that respects the player’s pace.</p><span>Clear mechanics</span><span>Thoughtful progression</span><span>Distinct visual worlds</span></div></section><div id="games"><GameCatalog language="en"/></div><section className="en-news"><div><small>WHAT’S NEW</small><h2>Eight games.<br/>One growing collection.</h2></div><div>{catalogGames.slice(-3).reverse().map((game) => <a href={`/en/games/${game.slug}`} key={game.slug}><span>2026</span><b>{game.name}</b><small>{game.categoryEn} ↗</small></a>)}</div><a className="en-news-all" href="/en/updates">View all updates →</a></section><EnglishFooter/></main>;
}
