// Full-page screenshot helper for pixel-perfect comparison.
// Scrolls through the page first so framer-motion `whileInView` sections animate in,
// then returns to top and captures the full page.
import { chromium } from "playwright";

const URL = process.env.SHOT_URL ?? "http://localhost:3000";
const OUT = process.env.SHOT_OUT ?? "scripts/shots/current.png";
const WIDTH = Number(process.env.SHOT_WIDTH ?? 1920);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: WIDTH, height: 1080 },
  deviceScaleFactor: 1,
});

await page.goto(URL, { waitUntil: "networkidle" });

// Trigger in-view animations: step-scroll to the bottom.
await page.evaluate(async () => {
  const step = Math.floor(window.innerHeight * 0.8);
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 180));
  }
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise((r) => setTimeout(r, 600));
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 800));
});

await page.screenshot({ path: OUT, fullPage: true });
const dims = await page.evaluate(() => ({
  w: document.documentElement.scrollWidth,
  h: document.documentElement.scrollHeight,
}));
console.log(`Saved ${OUT} @ ${dims.w}x${dims.h}`);
await browser.close();
