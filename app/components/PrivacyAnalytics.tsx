"use client";

import { useEffect } from "react";

declare global {
  interface Window { zaraz?: { track: (name: string, data?: Record<string, string>) => void } }
}

export default function PrivacyAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      let target: URL;
      try { target = new URL(link.href, window.location.href); } catch { return; }
      const store = target.hostname.includes("play.google.com") ? "google_play" : target.hostname.includes("apps.apple.com") ? "app_store" : null;
      if (!store) return;
      const data = { store, page: window.location.pathname, label: link.getAttribute("aria-label") ?? link.textContent?.trim().slice(0, 80) ?? "store_link" };
      window.zaraz?.track("store_click", data);
      window.dispatchEvent(new CustomEvent("gorsen:store-click", { detail: data }));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
