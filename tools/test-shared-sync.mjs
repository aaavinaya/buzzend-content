// E2E test of the shared-store sync:
//  browser A ticks a task → shared store → fresh browser B (no localStorage,
//  simulating a private window / another device) must show the progress.
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://localhost:8322/sprint';
const browser = await chromium.launch();

// Browser A: tick Day 1 / Avinaya / Task 1
const A = await browser.newContext();
const pa = await A.newPage();
await pa.goto(`${BASE}/day.html?d=1&p=avinaya`, { waitUntil: 'networkidle' });
await pa.click('input[data-id="d01-avinaya-t1"]');
await pa.waitForTimeout(5000); // debounce (2s) + PUT
const statusA = await pa.textContent('#syncLine');
console.log('A status:', statusA.trim());
await A.close();

// Browser B: brand-new context — empty localStorage, like a private window
const B = await browser.newContext();
const pb = await B.newPage();
await pb.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });
await pb.waitForTimeout(3500); // initial pull
const overall = await pb.textContent('#overallCount');
const statusB = await pb.textContent('#syncLine');
console.log('B sees:', overall.trim(), '|', statusB.trim());
await pb.screenshot({ path: process.argv[3] || '/tmp/sync-test.png' });
await B.close();
await browser.close();

const ok = /^1 done/.test(overall.trim());
console.log(ok ? 'SYNC TEST PASSED' : 'SYNC TEST FAILED');
process.exit(ok ? 0 : 1);
