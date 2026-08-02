// Records video/teaser.html to a 1080×1920 webm with Playwright,
// then converts to H.264 MP4 via ffmpeg-static (see convert step).
// Run from the playwright-equipped dir:  node record.mjs <teaser.html> <out-dir>
import { chromium } from 'playwright';
import { rename, readdir } from 'fs/promises';
import { resolve } from 'path';

const [, , htmlPath, outDir] = process.argv;
const DURATION_MS = 14000;

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1080, height: 1920 },
  recordVideo: { dir: outDir, size: { width: 1080, height: 1920 } },
});
const page = await ctx.newPage();
await page.goto('file://' + resolve(htmlPath), { waitUntil: 'networkidle' });
await page.waitForTimeout(DURATION_MS);
await ctx.close();
await browser.close();

const files = (await readdir(outDir)).filter((f) => f.endsWith('.webm'));
const latest = files.sort().at(-1);
await rename(resolve(outDir, latest), resolve(outDir, 'teaser-raw.webm'));
console.log('OK', resolve(outDir, 'teaser-raw.webm'));
