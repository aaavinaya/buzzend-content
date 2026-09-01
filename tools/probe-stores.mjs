// Probe JSON-storage services from a REAL browser context (CORS included):
// create → PUT update → GET back. Prints what actually works for our pages.
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await (await browser.newContext()).newPage();
await page.goto('http://localhost:8322/sprint/index.html', { waitUntil: 'domcontentloaded' });

const result = await page.evaluate(async () => {
  const out = {};
  // jsonblob.com
  try {
    const r = await fetch('https://jsonblob.com/api/jsonBlob', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ probe: 1 }),
    });
    const loc = r.headers.get('Location');
    out.jsonblob = { create: r.status, location: loc };
    if (loc) {
      const url = loc.startsWith('http') ? loc.replace('http://', 'https://') : 'https://jsonblob.com' + loc;
      const p = await fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' },
                                   body: JSON.stringify({ probe: 2 }) });
      const g = await fetch(url);
      out.jsonblob.put = p.status;
      out.jsonblob.get = g.status;
      out.jsonblob.roundtrip = (await g.json()).probe;
      out.jsonblob.url = url;
    }
  } catch (e) { out.jsonblob = { error: String(e) }; }
  return out;
});
console.log(JSON.stringify(result, null, 2));
await browser.close();
