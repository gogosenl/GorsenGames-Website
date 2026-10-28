import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "../../../components/SiteImage";
import StoreBadge from "../../../components/StoreBadge";
import { catalogBySlug, catalogGames } from "../../../data/catalog";
import { EnglishFooter, EnglishNav } from "../../EnglishChrome";

export function generateStaticParams() { return catalogGames.map((game) => ({ slug: game.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = catalogBySlug[slug];
  if (!game) return {};
  return {
    title: game.name,
    description: game.descriptionEn,
    alternates: { canonical: `/en/games/${slug}`, languages: { "tr-TR": `/${slug}`, en: `/en/games/${slug}` } },
    openGraph: { title: `${game.name} | Görsen Games`, description: game.descriptionEn, images: [{ url: game.image }] },
  };
}

export default async function EnglishGamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = catalogBySlug[slug];
  if (!game) notFound();
  const schema = { "@context": "https://schema.org", "@type": "VideoGame", name: game.name, description: game.descriptionEn, url: `https://gorsengames.com/en/games/${game.slug}`, image: `https://gorsengames.com${game.image}`, applicationCategory: "GameApplication", operatingSystem: game.platforms.length ? game.platforms.map((platform) => platform === "ios" ? "iOS" : "Android").join(", ") : "iOS, Android", author: { "@type": "Organization", name: "Görsen Games" } };
  return <main className="en-game" style={{ "--en-accent": game.accent } as React.CSSProperties}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><EnglishNav/><header className="en-game-hero"><div><p>{game.categoryEn.toUpperCase()}</p><h1>{game.name}</h1><h2>{game.descriptionEn}</h2><div className="en-game-actions">{game.playStore && <a href={game.playStore} target="_blank" rel="noopener noreferrer"><StoreBadge platform="play"/></a>}{game.appStore && <a href={game.appStore} target="_blank" rel="noopener noreferrer"><StoreBadge platform="ios"/></a>}{!game.platforms.length && <span>Coming soon on the App Store</span>}</div><div className="en-game-facts"><span><b>{game.levels}</b><small>levels</small></span><span><b>TR · EN</b><small>languages</small></span><span><b>{game.platforms.length ? game.platforms.map((p) => p === "ios" ? "iOS" : "Android").join(" · ") : "Soon"}</b><small>availability</small></span></div></div><div className="en-game-phone"><Image src={game.image} alt={`${game.name} gameplay`} fill priority sizes="(max-width:800px) 78vw, 390px"/></div></header><section className="en-feature-band"><div><small>THE PUZZLE</small><h2>A clear idea,<br/>designed to deepen.</h2><p>{game.descriptionEn}</p></div><div>{game.featuresEn.map((feature, index) => <span key={feature}><i>0{index + 1}</i>{feature}</span>)}</div></section><section className="en-screens"><div><small>REAL GAME SCREENS</small><h2>See it in action.</h2></div><figure><div><Image src={game.image} alt={`${game.name} gameplay screen`} fill sizes="(max-width:700px) 82vw, 380px"/></div><figcaption>Gameplay</figcaption></figure><figure><div><Image src={game.secondary} alt={`${game.name} second screen`} fill sizes="(max-width:700px) 82vw, 380px"/></div><figcaption>Game world</figcaption></figure></section>{(game.appStore || game.playStore) && <section className="en-qr"><div><small>OPEN ON YOUR PHONE</small><h2>Scan. Download. Play.</h2><p>Use your phone camera to open the official store page.</p></div><div>{game.playStore && <figure><Image src={`/qr/${game.slug}-google-play.svg`} alt={`${game.name} Google Play QR code`} width={170} height={170}/><figcaption>Google Play</figcaption></figure>}{game.appStore && <figure><Image src={`/qr/${game.slug}-app-store.svg`} alt={`${game.name} App Store QR code`} width={170} height={170}/><figcaption>App Store</figcaption></figure>}</div></section>}<section className="en-game-cta"><small>GÖRSEN GAMES PRESENTS</small><h2>{game.name}</h2><a href="/en#games">Explore the full collection →</a></section><div className="en-mobile-download">{game.playStore && <a href={game.playStore}><StoreBadge platform="play"/></a>}{game.appStore && <a href={game.appStore}><StoreBadge platform="ios"/></a>}{!game.platforms.length && <span>Coming soon</span>}</div><EnglishFooter/></main>;
}
