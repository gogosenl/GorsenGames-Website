import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import QRCode from "qrcode";

const root = process.cwd();
const sourceRoot = path.join(root, "public", "games");
const outputRoot = path.join(root, "public", "optimized", "games");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(fullPath);
  }
  return files;
}

for (const source of await walk(sourceRoot)) {
  const relative = path.relative(sourceRoot, source).replace(/\.(png|jpe?g)$/i, ".webp");
  const destination = path.join(outputRoot, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await sharp(source)
    .rotate()
    .resize({ width: 1000, height: 2160, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 5, smartSubsample: true })
    .toFile(destination);
}

const qrCodes = {
  "puzzle-area-app-store": "https://apps.apple.com/us/app/puzzle-area/id6800594940",
  "puzzle-area-google-play": "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlearea",
  "block-puzzle-grid-app-store": "https://apps.apple.com/us/app/block-puzzle-grid/id6800597451",
  "block-puzzle-grid-google-play": "https://play.google.com/store/apps/details?id=com.gorsengames.puzzlegrid",
  "bloomshift-app-store": "https://apps.apple.com/tr/app/bloomshift/id6800653408?l=tr",
  "bloomshift-google-play": "https://play.google.com/store/apps/details?id=com.gorsengames.dalgabahcesi",
  "petal-shift-app-store": "https://apps.apple.com/us/app/petal-shift-bloom-puzzle/id6801522855",
  "petal-shift-google-play": "https://play.google.com/store/apps/details?id=com.gorsengames.ruzgarkorusu&hl=tr",
  "fudu-hex-app-store": "https://apps.apple.com/tr/app/fudu-hex-number-merge/id6808560173?l=tr",
  "liva-lights-app-store": "https://apps.apple.com/tr/app/liva-lights/id6816842378?l=tr",
  "bubblefin-pop-app-store": "https://apps.apple.com/us/app/bubblefin-pop/id6818507143",
};

const qrRoot = path.join(root, "public", "qr");
await fs.mkdir(qrRoot, { recursive: true });
for (const [name, url] of Object.entries(qrCodes)) {
  await QRCode.toFile(path.join(qrRoot, `${name}.svg`), url, {
    type: "svg",
    margin: 1,
    width: 280,
    color: { dark: "#06142FFF", light: "#FFFFFFFF" },
    errorCorrectionLevel: "M",
  });
}

console.log(`Optimized ${await walk(sourceRoot).then((files) => files.length)} images and generated ${Object.keys(qrCodes).length} QR codes.`);
