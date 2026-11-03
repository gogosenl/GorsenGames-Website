import type { Metadata } from "next";
import Image from "../../components/SiteImage";
import GameCatalog from "../../components/GameCatalog";
import { catalogGames } from "../../data/catalog";
import { EnglishFooter, EnglishNav } from "../EnglishChrome";

export const metadata: Metadata = {
  title: "Mobile Puzzle Games — iOS and Android Games",
  description: "Discover eight original mobile puzzle games developed by Görkem Şenol at Görsen Games, with official App Store and Google Play links.",
  alternates: { canonical: "/en/mobile-puzzle-games", languages: { "tr-TR": "/mobil-bulmaca-oyunlari", en: "/en/mobile-puzzle-games" } },
};

const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Görsen Games Mobile Puzzle Games", url: "https://gorsengames.com/en/mobile-puzzle-games", author: { "@id": "https://gorsengames.com/#gorkem-senol" }, mainEntity: { "@type": "ItemList", itemListElement: catalogGames.map((game, index) => ({ "@type": "ListItem", position: index + 1, name: game.name, url: `https://gorsengames.com/en/games/${game.slug}` })) } };

export default function MobilePuzzleGamesEnglishPage() {
  return <main className="seo-hub english-seo-hub"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><EnglishNav/><header className="seo-hub-hero"><p>MOBILE GAME COLLECTION</p><h1>Mobile puzzle games.<br/><span>Eight ways to think.</span></h1><p>Görsen Games is an independent collection developed by Görkem Şenol. Discover original number, color, spatial, route-building, and logic games for iPhone, iPad, and Android.</p><div><a href="#games">Explore the games ↓</a><a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer">App Store profile ↗</a><a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer">Google Play profile ↗</a></div></header><section className="seo-hub-topics"><article><b>Numbers and logic</b><p>Read clues, merge values, and solve row-and-column targets.</p></article><article><b>Color and order</b><p>Rotate flowers, slide rows, and match every color.</p></article><article><b>Space and routes</b><p>Place pieces, fill grids, and build continuous paths.</p></article><article><b>Physics and matching</b><p>Merge water bubbles in a playful underwater physics puzzle.</p></article></section><div id="games"><GameCatalog language="en"/></div><section className="seo-hub-copy"><div><p>WHY GÖRSEN GAMES?</p><h2>Clear in a short break.<br/>Rewarding to master.</h2></div><div><p>Each game begins with one clear interaction and grows through carefully designed levels, larger boards, and deeper decisions.</p><p>Every published game page includes crawlable links to its official App Store and Google Play listing. Upcoming store links are added to the same pages when available.</p></div></section><EnglishFooter/></main>;
}
