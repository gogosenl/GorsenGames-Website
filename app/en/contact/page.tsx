import type { Metadata } from "next";
import StoreBadge from "../../components/StoreBadge";
import { EnglishFooter, EnglishNav } from "../EnglishChrome";

export const metadata: Metadata = { title: "Contact", description: "Contact Görsen Games for support, partnerships, and game-related questions.", alternates: { canonical: "/en/contact", languages: { "tr-TR": "/contact", en: "/en/contact" } } };
export default function EnglishContact() { return <main className="en-standard"><EnglishNav/><header><p>CONTACT</p><h1>Your next puzzle<br/><span>is ready.</span></h1><p>Reach out for player support, partnerships, press, and questions about our games.</p></header><section className="en-contact-grid"><a href="mailto:info@gorsengames.com"><small>EMAIL</small><b>info@gorsengames.com</b><span>↗</span></a><a href="https://play.google.com/store/apps/developer?id=G%C3%B6rsen+Games" target="_blank" rel="noopener noreferrer"><StoreBadge platform="play"/><span>↗</span></a><a href="https://apps.apple.com/tr/developer/gorkem-enol/id6800594942?l=tr" target="_blank" rel="noopener noreferrer"><StoreBadge platform="ios"/><span>↗</span></a></section><EnglishFooter/></main>; }
