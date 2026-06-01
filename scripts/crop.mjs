// Crop a region of an image for close inspection.
// Usage: SRC=path OUT=path X=.. Y=.. W=.. H=.. node scripts/crop.mjs
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import path from "node:path";

const SRC = process.env.SRC ?? "scripts/shots/goal.png";
const OUT = process.env.OUT ?? "scripts/shots/crop.png";
const b64 = readFileSync(path.resolve(SRC)).toString("base64");
const dataUri = `data:image/png;base64,${b64}`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(
  `<body style="margin:0"><img id="g" src="${dataUri}" style="display:block"></body>`,
);
await page.waitForFunction(() => {
  const img = document.getElementById("g");
  return img && img.complete && img.naturalWidth > 0;
});
const dim = await page.locator("#g").evaluate((img) => ({
  w: img.naturalWidth,
  h: img.naturalHeight,
}));
console.log("natural", dim.w, "x", dim.h);

const x = Number(process.env.X ?? 0);
const y = Number(process.env.Y ?? 0);
const w = Number(process.env.W ?? dim.w);
const h = Number(process.env.H ?? Math.round(dim.w * 0.42));

await page.setViewportSize({ width: dim.w, height: Math.min(dim.h, 30000) });
await page.screenshot({ path: OUT, clip: { x, y, width: w, height: h } });
console.log("saved", OUT, `(${w}x${h} @ ${x},${y})`);
await browser.close();
