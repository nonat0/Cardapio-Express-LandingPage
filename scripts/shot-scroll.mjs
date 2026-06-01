// Screenshot the viewport at a given scroll position (to inspect on-scroll motion).
// Usage: Y=400 OUT=scripts/shots/x.png node scripts/shot-scroll.mjs
import { chromium } from "playwright";

const URL = process.env.SHOT_URL ?? "http://localhost:3000";
const Y = Number(process.env.Y ?? 0);
const OUT = process.env.OUT ?? "scripts/shots/scroll.png";

const H = Number(process.env.H ?? 860);
const W = Number(process.env.W ?? 1280);
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});
await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(1300); // let the entrance animation finish
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), Y);
await page.waitForTimeout(500); // let parallax settle
await page.screenshot({ path: OUT });
console.log("saved", OUT, "at scrollY", Y);
await browser.close();
