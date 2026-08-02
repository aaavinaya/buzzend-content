// Clicks through the prototype's AI workout flow (pick → permission → setup →
// countdown) and screenshots the live "train" counting stage, brand-corrected:
// energyorange landmark figure + orange progress ring, dev controls hidden.
// usage: node capture-workout.mjs <out.png>
import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const out = process.argv[2];
const orangeGif = readFileSync(
  '/Users/avinayaacharya/Development/Buzzend Design/docs/assets/landmark-squat-energyorange.gif'
);

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 360, height: 800 },
  deviceScaleFactor: 3,
});
await ctx.addInitScript(() => {
  localStorage.setItem('buzzend-palette', 'energyorange');
  localStorage.setItem('buzzend-font', 'inter');
  localStorage.setItem('buzzend-theme', 'light');
});
// the prototype hardcodes the teal landmark gif — serve the orange variant instead
await ctx.route('**/assets/landmark-squat.gif', (route) =>
  route.fulfill({ body: orangeGif, contentType: 'image/gif' })
);
const page = await ctx.newPage();
await page.goto('http://localhost:8123/screens/workout/workout.html?v=b', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: `
  .vsw, .theme-toggle, .state-switch { display: none !important; }
  /* keep the landmark figure below the rep ring and above the cue pill */
  .wo-cam { padding: 240px 0 145px !important; box-sizing: border-box !important; }
  .wo-figure { opacity: .9 !important; }
  .wo-count-ring .wo-ringsvg circle:last-child { stroke: #ff6b00 !important; }
` });

await page.getByText('Squats', { exact: true }).first().click();      // pick
await page.getByText('Enable camera').click();                        // permission
await page.waitForSelector('#wo-ready:not([disabled])');               // setup locks in
await page.click('#wo-ready');                                         // → countdown
await page.waitForSelector('#wo-count', { timeout: 10000 });            // → train
// let the simulated counter tick up to a photogenic number
await page.waitForFunction(() => {
  const n = document.querySelector('#wo-count');
  return n && parseInt(n.textContent, 10) >= 9;
}, { timeout: 30000 });
await page.screenshot({ path: out });
await ctx.close();
await browser.close();
console.log('OK', out);
