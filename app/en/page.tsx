import type { Metadata } from "next";
import EnglishHomeClient from "./EnglishHomeClient";

export const metadata: Metadata = {
  title: "Görsen Games — Mobile Games Developed by Görkem Şenol",
  description: "Görsen Games is an independent mobile game studio founded and developed by Görkem Şenol. Discover eight original puzzle games for iOS and Android.",
  alternates: { canonical: "/en", languages: { "tr-TR": "/", en: "/en" } },
};

export default function EnglishHome() {
  return <EnglishHomeClient/>;
}
