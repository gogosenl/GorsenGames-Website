import Image from "../components/SiteImage";
import StoreBadge from "../components/StoreBadge";
import Link from "next/link";

export function EnglishNav() {
  return <nav className="en-nav"><Link className="en-brand" href="/en"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="42px"/></span><b>GÖRSEN GAMES</b></Link><div><a href="/en#games">Games</a><Link href="/en/about">About</Link><Link href="/en/updates">Updates</Link><Link href="/en/contact">Contact</Link></div></nav>;
}

export function EnglishFooter() {
  return <footer className="en-footer"><div><Link className="en-brand" href="/en"><span><Image src="/gorsen-games-logo.png" alt="" fill sizes="42px"/></span><b>GÖRSEN GAMES</b></Link><p>Independent mobile puzzle games with clear mechanics and colorful worlds.</p></div><div><b>Explore</b><a href="/en#games">Games</a><Link href="/en/about">About</Link><Link href="/en/updates">Updates</Link></div><div><b>Legal</b><Link href="/en/privacy-policy">Privacy Policy</Link><Link href="/en/terms">Terms of Use</Link><a href="mailto:info@gorsengames.com">info@gorsengames.com</a></div><div className="en-store-profiles"><b>Stores</b><a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer"><StoreBadge platform="play"/></a><a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer"><StoreBadge platform="ios"/></a></div><small>© 2026 Görsen Games</small></footer>;
}
