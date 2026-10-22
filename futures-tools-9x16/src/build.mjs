import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slides, total } from './slides.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'slides');
fs.mkdirSync(outDir, { recursive: true });

const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');

const names = [
  '01-cover', '02-painpoint', '03-overview', '04-terminal', '05-orderflow',
  '06-fundamental', '07-quant', '08-option', '09-checklist', '10-caveat', '11-ending'
];

const html = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<style>${css}
body{display:flex;flex-direction:column;align-items:center;gap:40px;padding:40px 0}
</style></head><body>
${slides.map((s, i) => `<section class="slide ${s.cls || ''}" id="s${i + 1}">${s.html}</section>`).join('\n')}
</body></html>`;

fs.writeFileSync(path.join(root, 'src', 'all-slides.html'), html);

const browser = await chromium.launch({ args: ['--font-render-hinting=none', '--force-color-profile=srgb'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(root, 'src', 'all-slides.html'), { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

for (let i = 0; i < slides.length; i++) {
  const el = await page.$('#s' + (i + 1));
  const file = path.join(outDir, `${names[i] || 'slide-' + (i + 1)}.png`);
  await el.screenshot({ path: file });
  console.log('rendered', path.relative(root, file));
}

// 长图（单张竖版长图，供公众号/长图分发使用）
await page.evaluate(() => { document.body.style.gap = '0'; document.body.style.padding = '0'; });
await page.waitForTimeout(200);
const longEl = await page.$('body');
await longEl.screenshot({ path: path.join(root, '长图-全篇-1080x21120.png') });
console.log('rendered 长图-全篇-1080x21120.png');

await browser.close();
console.log('total slides:', total);
