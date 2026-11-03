import type { Metadata } from "next";
import EnglishHomeClient from "./EnglishHomeClient";

export const metadata: Metadata = { alternates: { canonical: "/en", languages: { "tr-TR": "/", en: "/en" } } };

export default function EnglishHome() {
  return <EnglishHomeClient/>;
}
