import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("ana sayfa üretim ortamında başarıyla oluşturulur", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Görsen Games/i);
  assert.match(html, /Liva Lights/i);
  assert.match(html, /Bubblefin Pop/i);
  assert.match(html, /Trail Builder/i);
  assert.doesNotMatch(html, /vinext-starter|Your site is taking shape/i);
});

test("Bubblefin Pop sayfası üretim ortamında başarıyla oluşturulur", async () => {
  const response = await render("/bubblefin-pop");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Bubblefin Pop/i);
  assert.match(html, /800 bölüm/i);
  assert.match(html, /id6818507143/i);
});

test("Trail Builder sayfası üretim ortamında başarıyla oluşturulur", async () => {
  const response = await render("/trail-builder");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Trail Builder: Route Craft/i);
  assert.match(html, /500 bölüm/i);
  assert.match(html, /App Store’da Yakında/i);
});

test("İngilizce ana sayfa ve oyun sayfası ayrı adreslerde oluşturulur", async () => {
  const [homeResponse, gameResponse] = await Promise.all([
    render("/en"),
    render("/en/games/bubblefin-pop"),
  ]);
  assert.equal(homeResponse.status, 200);
  assert.equal(gameResponse.status, 200);
  assert.match(await homeResponse.text(), /Colorful worlds/i);
  const gameHtml = await gameResponse.text();
  assert.match(gameHtml, /Physics-based underwater puzzle/i);
  assert.match(gameHtml, /bubblefin-pop-app-store\.svg/i);
});

test("hafifletilmiş WebP varlıkları ve QR kodları oluşturulmuştur", async () => {
  const [optimized, qr] = await Promise.all([
    readFile(new URL("../public/optimized/games/bubblefin-pop/03-gameplay-level-4.webp", import.meta.url)),
    readFile(new URL("../public/qr/bubblefin-pop-app-store.svg", import.meta.url), "utf8"),
  ]);
  assert.ok(optimized.byteLength > 1000);
  assert.match(qr, /<svg/i);
});

test("SEO ve AdMob doğrulama dosyaları güncel oyun adını içerir", async () => {
  const [layout, sitemap, appAds] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../public/app-ads.txt", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Liva Lights/);
  assert.match(layout, /Bubblefin Pop/);
  assert.match(layout, /Trail Builder/);
  assert.match(layout, /og-v5-eight-games\.png/);
  assert.match(sitemap, /\/liva-lights/);
  assert.match(sitemap, /\/bubblefin-pop/);
  assert.match(sitemap, /\/trail-builder/);
  assert.doesNotMatch(sitemap, /\/lantern-lines/);
  assert.match(appAds.trim(), /^google\.com, pub-\d+, DIRECT, [a-f0-9]+$/i);
});

test("eski oyun adresi yeni Liva Lights adresine yönlendirilir", async () => {
  const legacyRoute = await readFile(
    new URL("../app/lantern-lines/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(legacyRoute, /permanentRedirect\("\/liva-lights"\)/);
});
