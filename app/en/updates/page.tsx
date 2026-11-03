import type { Metadata } from "next";
import { EnglishFooter, EnglishNav } from "../EnglishChrome";

export const metadata: Metadata = {
  title: "Updates and Release History",
  description: "Görsen Games App Store and Google Play launches, major version updates, and studio news.",
  alternates: { canonical: "/en/updates", languages: { "tr-TR": "/updates", en: "/en/updates" } },
};

const updates = [
  ["28 Oct 2026", "Trail Builder joins the collection", "The 500-level route-building logic game is coming soon to the App Store and Google Play.", "/en/games/trail-builder"],
  ["24 Oct 2026", "Bubblefin Pop 1.0.1 arrives", "The first App Store update improves stability across the underwater adventure.", "/en/games/bubblefin-pop"],
  ["22 Oct 2026", "Bubblefin Pop launches on the App Store", "Merge colorful pufferfish through playful water-bubble physics across 800 levels.", "/en/games/bubblefin-pop"],
  ["13 Oct 2026", "Liva Lights launches on the App Store", "Light moonlit gardens by satisfying every row and column target across 1,000 levels.", "/en/games/liva-lights"],
  ["8 Oct 2026", "Block Puzzle Grid 1.0.21 arrives", "The App Store edition receives a new round of stability and gameplay improvements.", "/en/games/block-puzzle-grid"],
  ["22 Sep 2026", "Puzzle Area updates on both stores", "The App Store and Google Play editions receive new improvements on the same day.", "/en/games/puzzle-area"],
  ["17 Sep 2026", "Bloomshift and Petal Shift update on iOS", "Both botanical puzzle games receive new App Store versions.", "/en/games/bloomshift"],
  ["10 Sep 2026", "Fudu Hex 1.1.0 arrives", "The first major App Store update refines the hexagonal number-merging experience.", "/en/games/fudu-hex"],
  ["9 Sep 2026", "Fudu Hex launches on the App Store", "Connect matching hexagons, build larger values, and chase endless targets.", "/en/games/fudu-hex"],
  ["30 Aug 2026", "Bloomshift launches on Google Play", "The 1,060-level flower-rotation puzzle arrives on Android.", "/en/games/bloomshift"],
  ["21 Aug 2026", "Petal Shift launches on the App Store", "The botanical row-and-column sliding puzzle arrives on iPhone and iPad.", "/en/games/petal-shift"],
  ["19 Aug 2026", "Puzzle Area and Block Puzzle Grid launch on the App Store", "The number-area and piece-placement puzzles make their iOS debut together.", "/en/games/puzzle-area"],
  ["17 Aug 2026", "Bloomshift reaches the App Store and Petal Shift reaches Google Play", "Two distinct garden puzzles launch across iOS and Android on the same day.", "/en/games/bloomshift"],
  ["10 Aug 2026", "Puzzle Area and Block Puzzle Grid launch on Google Play", "The first two Görsen Games Android puzzles become available on Google Play.", "/en/games/puzzle-area"],
];

export default function EnglishUpdates() {
  return <main className="en-standard">
    <EnglishNav/>
    <header><p>RELEASE HISTORY</p><h1>New puzzles.<br/><span>One growing collection.</span></h1><p>Official store launches and major milestones from the Görsen Games collection.</p></header>
    <section className="en-update-list">{updates.map(([date,title,copy,href]) => <a href={href} key={`${date}-${title}`}><time>{date}</time><div><h2>{title}</h2><p>{copy}</p></div><span>↗</span></a>)}</section>
    <EnglishFooter/>
  </main>;
}
