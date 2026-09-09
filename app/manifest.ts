import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Görsen GAMES",
    short_name: "Görsen Games",
    description: "Görsen Games mobil bulmaca oyunları.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f0",
    theme_color: "#0b2a61",
    icons: [
      { src: "/gorsen-games-logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
