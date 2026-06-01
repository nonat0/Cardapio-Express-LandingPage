// Render candidate brand reds as swatches + buttons for visual comparison.
import { chromium } from "playwright";

const reds = [
  ["#FF4332", "current"],
  ["#FB3B30", "less orange"],
  ["#F5394A", "pinker"],
  ["#FF5436", "more orange"],
  ["#E63B2E", "deeper"],
];

const html = `<!doctype html><html><body style="margin:0;font-family:Inter,system-ui,sans-serif;background:#fff;padding:28px">
<div style="display:flex;gap:20px;align-items:flex-start">
${reds
  .map(
    ([hex, label]) => `
  <div style="text-align:center">
    <div style="width:150px;height:120px;border-radius:20px;background:${hex}"></div>
    <div style="margin-top:10px;font-weight:700;font-size:15px">${hex}</div>
    <div style="font-size:12px;color:#71717a">${label}</div>
    <button style="margin-top:10px;background:${hex};color:#fff;border:none;border-radius:9999px;padding:9px 18px;font-weight:600;font-size:14px">Get Started</button>
  </div>`,
  )
  .join("")}
</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.setContent(html);
await page.locator("body > div").screenshot({ path: "scripts/shots/red-swatches.png" });
await browser.close();
console.log("saved scripts/shots/red-swatches.png");
