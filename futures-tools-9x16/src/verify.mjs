import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto('file://' + path.join(root, 'src', 'all-slides.html'), { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const report = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('.slide').forEach((s, i) => {
    const sb = s.getBoundingClientRect();
    const footer = s.querySelector('.ft');
    const fb = footer ? footer.getBoundingClientRect().top : sb.bottom - 100;
    let maxB = 0, maxR = 0, minL = 1e9, minT = 1e9, worst = '';
    s.querySelectorAll('*').forEach((el) => {
      if (el.closest('.ft') || el.closest('.bar') || el.classList.contains('ghost') || el.classList.contains('chart')) return;
      if (el.classList.contains('slide')) return;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.bottom - sb.top > maxB) { maxB = r.bottom - sb.top; worst = el.className || el.tagName; }
      if (r.right - sb.left > maxR) maxR = r.right - sb.left;
      if (r.left - sb.left < minL) minL = r.left - sb.left;
      if (r.top - sb.top < minT) minT = r.top - sb.top;
    });
    out.push({
      slide: i + 1,
      contentBottom: Math.round(maxB),
      footerTop: Math.round(fb - sb.top),
      gapToFooter: Math.round((fb - sb.top) - maxB),
      rightEdge: Math.round(maxR),
      leftEdge: Math.round(minL),
      topEdge: Math.round(minT),
      bottomClipped: maxB > 1920,
      worst: String(worst).slice(0, 40)
    });
  });
  return out;
});

console.table(report);
const bad = report.filter((r) => r.bottomClipped || r.gapToFooter < 24 || r.rightEdge > 1080 - 40 || r.leftEdge < 40 || r.topEdge < 40);
console.log(bad.length ? 'PROBLEMS: ' + JSON.stringify(bad, null, 1) : 'ALL OK');
await browser.close();
