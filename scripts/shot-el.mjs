// Close-up screenshots of specific sections (located by heading text).
import { chromium } from "playwright";

const URL = process.env.SHOT_URL ?? "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 2,
});
await page.goto(URL, { waitUntil: "networkidle" });

// Trigger in-view animations.
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 500));
});

const targets = [
  ["Cardápio digital com pedidos", "scripts/shots/sec-hero.png"],
  ["Recursos poderosos", "scripts/shots/sec-alternating.png"],
  ["O que você resolve", "scripts/shots/sec-outcomes.png"],
  ["Pare de perder tempo", "scripts/shots/sec-cta.png"],
];
for (const [text, out] of targets) {
  const el = page.locator(`section:has-text("${text}")`).first();
  await el.scrollIntoViewIfNeeded();
  await new Promise((r) => setTimeout(r, 450));
  await el.screenshot({ path: out });
  console.log("saved", out);
}
await browser.close();
