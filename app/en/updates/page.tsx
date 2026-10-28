import type { Metadata } from "next";
import { EnglishFooter, EnglishNav } from "../EnglishChrome";

export const metadata: Metadata = { title: "Updates", description: "Latest Görsen Games releases and studio updates.", alternates: { canonical: "/en/updates", languages: { "tr-TR": "/updates", en: "/en/updates" } } };
const updates = [
  ["28 Oct 2026", "Trail Builder joins the collection", "A 500-level route-building logic game with edge clues, rocks, checkpoints, and offline play.", "/en/games/trail-builder"],
  ["28 Sep 2026", "Bubblefin Pop is available on the App Store", "Merge colorful pufferfish through playful water-bubble physics across 800 levels.", "/en/games/bubblefin-pop"],
  ["14 Sep 2026", "Liva Lights is available on the App Store", "Light moonlit gardens by satisfying every row and column target.", "/en/games/liva-lights"],
];
export default function EnglishUpdates() { return <main className="en-standard"><EnglishNav/><header><p>STUDIO UPDATES</p><h1>New puzzles.<br/><span>New worlds.</span></h1><p>Release notes and highlights from the Görsen Games collection.</p></header><section className="en-update-list">{updates.map(([date,title,copy,href]) => <a href={href} key={title}><time>{date}</time><div><h2>{title}</h2><p>{copy}</p></div><span>↗</span></a>)}</section><EnglishFooter/></main>; }
