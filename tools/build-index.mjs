// Builds /index.html — a single self-contained reader for every document
// in this repo, so nobody has to open raw .md files.
// Usage: node tools/build-index.mjs   (re-run whenever docs change)
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { marked } from 'marked';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
marked.setOptions({ gfm: true, breaks: false });

// ── manifest: [group, repo-relative path] in reading order ──────────────
const MANIFEST = [
  ['Project', 'README.md'],
  ['Project', 'BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md'],
  ['Project', 'BUZZEND_30_DAY_EXECUTION_PLAN.md'],
  ['Project', 'brand/design-guide.md'],
  ['Project', 'social-media/week1-content-calendar.md'],
  ['Project', 'archive/README.md'],

  ['Marketing OS — 3-person team', 'buzzend-marketing/README.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/00-strategy/what-is-buzzend.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/00-strategy/why-people-stop-scrolling.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/01-research/2026-landscape.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/02-audience/who-we-talk-to.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/03-competitors/competitor-landscape.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/04-content-pillars/pillars.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/05-hooks/hook-system.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/05-hooks/hook-bank.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/06-content-ideas/idea-backlog.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/07-scripts/how-to-write-a-script.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/08-social-media/instagram.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/08-social-media/tiktok.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/08-social-media/youtube-shorts.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/08-social-media/facebook.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/08-social-media/linkedin-and-x.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/08-social-media/repurposing-map.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/09-content-calendar/calendar.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/10-assets/asset-map.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/11-publishing/publishing-playbook.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/12-community/community-playbook.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/13-analytics/metrics-for-beginners.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/14-weekly-reports/README.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/15-team-workflow/team-system.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/15-team-workflow/production-pipeline.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/16-templates/content-templates.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/16-templates/workflow-templates.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/16-templates/planning-templates.md'],
  ['Marketing OS — 3-person team', 'buzzend-marketing/17-archive/README.md'],

  ['Execution plan — solo reference', 'buzzend-execution-plan/README.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/BUZZEND_30_DAY_EXECUTION_MASTER.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/DAILY_EXECUTION_CHECKLIST.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/CONTENT_PRODUCTION_PLAN.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/SOCIAL_MEDIA_EXECUTION.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/KPI_TRACKING.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/WEEKLY_REVIEW_SYSTEM.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/CONTENT_ASSET_INDEX.md'],
  ['Execution plan — solo reference', 'buzzend-execution-plan/REORGANIZATION_CHANGELOG.md'],
];

const slug = (p) => 'doc-' + p.toLowerCase().replace(/\.md$/, '').replace(/[^a-z0-9]+/g, '-');
const idByPath = new Map(MANIFEST.map(([, p]) => [p, slug(p)]));

function stripFrontmatter(src) {
  return src.replace(/^---\n[\s\S]*?\n---\n/, '');
}
function firstH1(src, fallback) {
  const m = src.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/[*_`]/g, '').trim() : fallback;
}
// Rewrite doc-to-doc links → hash anchors; other relative links → repo-root-relative
function rewriteLinks(html, docDir) {
  return html.replace(/href="([^"]+)"/g, (full, href) => {
    if (/^(https?:|mailto:|#)/.test(href)) return full;
    const clean = href.split('#')[0];
    const resolved = path.posix.normalize(path.posix.join(docDir, clean));
    if (idByPath.has(resolved)) return `href="#${idByPath.get(resolved)}"`;
    return `href="${resolved}"`; // relative asset (image/html/mp4) from repo root
  });
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const groups = new Map();
const docs = [];
for (const [group, rel] of MANIFEST) {
  const abs = path.join(ROOT, rel);
  if (!existsSync(abs)) { console.warn('MISSING:', rel); continue; }
  const raw = stripFrontmatter(readFileSync(abs, 'utf8'));
  const title = firstH1(raw, path.basename(rel, '.md'));
  const id = slug(rel);
  const html = rewriteLinks(marked.parse(raw), path.posix.dirname(rel));
  docs.push({ id, rel, title, html, group, text: raw.toLowerCase() });
  if (!groups.has(group)) groups.set(group, []);
  groups.get(group).push({ id, title, rel });
}

// ── assets page (hand-built) ─────────────────────────────────────────────
const gallery = Array.from({ length: 7 }, (_, i) => i + 1).map((d) =>
  `<a class="thumb" href="social-media/rendered/day${d}-feed.png" target="_blank" rel="noopener">
     <img src="social-media/rendered/day${d}-feed.png" loading="lazy" alt="Day ${d} feed post">
     <span>Day ${d} feed</span></a>
   <a class="thumb tall" href="social-media/rendered/day${d}-story.png" target="_blank" rel="noopener">
     <img src="social-media/rendered/day${d}-story.png" loading="lazy" alt="Day ${d} story">
     <span>Day ${d} story</span></a>`).join('\n');

const assetsHtml = `
<h1>Visual assets</h1>
<p class="muted">Everything opens in a new tab. These links work when this file is opened from the repo folder.</p>
<h2>Interactive & reference</h2>
<ul>
<li><a href="buzzend-execution-plan/site/index.html" target="_blank" rel="noopener">⚡ Execution HQ — interactive 30-day dashboard</a></li>
<li><a href="brand/overview.html" target="_blank" rel="noopener">Brand overview card (Energy Orange tokens)</a></li>
<li><a href="video/teaser-1080x1920.mp4" target="_blank" rel="noopener">Launch teaser video (13s, 1080×1920)</a></li>
<li><a href="video/teaser.html" target="_blank" rel="noopener">Teaser animation source</a></li>
</ul>
<h2>Store screenshots</h2>
<ul>
<li><a href="store-assets/ios/" target="_blank" rel="noopener">iOS sets — 1284×2778 (6.5") + 1320×2868 (6.9")</a></li>
<li><a href="store-assets/android/phone/" target="_blank" rel="noopener">Android phone set (1080×1920)</a> ·
    <a href="store-assets/android/tablet-7/" target="_blank" rel="noopener">7" tablet</a> ·
    <a href="store-assets/android/tablet-10/" target="_blank" rel="noopener">10" tablet (1440×2560)</a></li>
<li><a href="store-assets/android/feature-graphic-1024x500.png" target="_blank" rel="noopener">Play feature graphic</a></li>
</ul>
<h2>Week-1 social posts (ready to publish)</h2>
<div class="gallery">${gallery}</div>`;

docs.push({ id: 'assets', rel: '(generated)', title: 'Visual assets', html: assetsHtml, group: 'Project', text: 'assets images store screenshots gallery teaser video' });
groups.get('Project').push({ id: 'assets', title: 'Visual assets', rel: '(generated)' });

// ── page assembly ────────────────────────────────────────────────────────
const navHtml = Array.from(groups.entries()).map(([g, items]) => `
<div class="group"><div class="gtitle">${esc(g)}</div>
${items.map((it) => `<a class="nav" href="#${it.id}" data-id="${it.id}" title="${esc(it.rel)}">${esc(it.title)}</a>`).join('\n')}
</div>`).join('\n');

const docsHtml = docs.map((d) => `
<article id="${d.id}" class="doc">
<div class="crumb">${esc(d.group)} · <code>${esc(d.rel)}</code></div>
${d.html}
</article>`).join('\n');

const searchIndex = JSON.stringify(docs.map((d) => ({ id: d.id, t: d.title.toLowerCase(), x: d.text.slice(0, 20000) })));

const page = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Buzzend Docs</title>
<style>
:root{
  --bg:#ffffff; --side:#faf8f5; --ink:#23272d; --soft:#454c54; --muted:#6e7681;
  --faint:#9aa1a9; --accent:#e25a00; --link:#b34a00; --active-bg:#fceade;
  --border:#e8e3db; --border-soft:#f0ede7; --code-bg:#f6f4f0; --row:#faf9f6;
  --quote-border:#f0a468;
}
html[data-theme="dark"]{
  --bg:#16181c; --side:#1c1f24; --ink:#e4e3df; --soft:#c0c3c8; --muted:#969ca5;
  --faint:#6d747d; --accent:#ff8534; --link:#ffa163; --active-bg:#38281b;
  --border:#2b2f36; --border-soft:#23272d; --code-bg:#20242a; --row:#1b1e23;
  --quote-border:#a35a24;
}
@media (prefers-color-scheme: dark){
  html:not([data-theme="light"]){
    --bg:#16181c; --side:#1c1f24; --ink:#e4e3df; --soft:#c0c3c8; --muted:#969ca5;
    --faint:#6d747d; --accent:#ff8534; --link:#ffa163; --active-bg:#38281b;
    --border:#2b2f36; --border-soft:#23272d; --code-bg:#20242a; --row:#1b1e23;
    --quote-border:#a35a24;
  }
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
a{color:var(--link);text-decoration-thickness:1px;text-underline-offset:2.5px}
a:hover{color:var(--accent)}
.layout{display:grid;grid-template-columns:296px 1fr;min-height:100vh}
aside{border-right:1px solid var(--border);background:var(--side);padding:18px 14px 40px;position:sticky;top:0;height:100vh;overflow-y:auto}
.sidehead{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.mark{width:30px;height:30px;border-radius:8px;background:linear-gradient(150deg,#ff6b00,#ff9f43);color:#fff;display:grid;place-items:center;font-weight:800;font-size:16px;flex:none}
.word{font-weight:800;font-size:16.5px;letter-spacing:-.3px;color:var(--ink)}
#themeBtn{margin-left:auto;font:inherit;font-size:15px;line-height:1;border:1px solid var(--border);background:var(--bg);color:var(--soft);border-radius:8px;padding:6px 9px;cursor:pointer}
#themeBtn:hover{border-color:var(--accent);color:var(--accent)}
#q{width:100%;padding:8px 12px;border-radius:9px;border:1px solid var(--border);background:var(--bg);color:var(--ink);font:inherit;font-size:13.5px;margin-bottom:10px}
#q::placeholder{color:var(--faint)}
#q:focus{outline:2px solid var(--accent);border-color:var(--accent)}
.gtitle{font-size:10.5px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:var(--muted);margin:18px 8px 5px}
a.nav{display:block;padding:5.5px 10px;border-radius:7px;color:var(--soft);text-decoration:none;font-size:13.5px;line-height:1.45;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
a.nav:hover{background:var(--border-soft);color:var(--ink)}
a.nav.on{background:var(--active-bg);color:var(--accent);font-weight:600}
a.nav.hide{display:none}
main{padding:40px clamp(20px,5vw,72px) 100px;max-width:900px;min-width:0}
.doc{display:none}
.doc.on{display:block}
.crumb{font-size:12.5px;color:var(--faint);margin-bottom:22px}
.crumb code{background:none;padding:0;color:var(--faint);font-size:12px}
h1{font-size:29px;font-weight:800;letter-spacing:-.5px;line-height:1.2;margin:0 0 16px;color:var(--ink)}
h2{font-size:21px;font-weight:700;letter-spacing:-.3px;margin:38px 0 12px;padding-top:18px;border-top:1px solid var(--border-soft)}
h3{font-size:17px;font-weight:700;margin:26px 0 8px}
p{margin:12px 0;max-width:76ch}
ul,ol{margin:12px 0 12px 26px;max-width:74ch}
li{margin:5px 0}
li>ul,li>ol{margin:4px 0 4px 22px}
strong{font-weight:650;color:var(--ink)}
blockquote{border-left:3px solid var(--quote-border);padding:2px 0 2px 18px;margin:16px 0;color:var(--soft);max-width:74ch}
blockquote p{margin:6px 0}
blockquote strong{color:var(--ink)}
code{background:var(--code-bg);border:1px solid var(--border-soft);border-radius:5px;padding:1px 5px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.85em;color:var(--soft)}
pre{background:var(--code-bg);border:1px solid var(--border-soft);border-radius:10px;padding:14px 18px;overflow-x:auto;margin:16px 0}
pre code{background:none;border:none;padding:0;font-size:13px;line-height:1.6;color:var(--soft)}
table{border-collapse:collapse;width:100%;font-size:13.5px;line-height:1.55;margin:16px 0;display:block;overflow-x:auto;border:1px solid var(--border);border-radius:10px}
th{background:var(--side);text-align:left;font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);padding:9px 13px;font-weight:700;white-space:nowrap;border-bottom:1px solid var(--border)}
td{padding:9px 13px;border-top:1px solid var(--border-soft);vertical-align:top;min-width:70px;color:var(--soft)}
td b,td strong{color:var(--ink)}
tbody tr:nth-child(even) td{background:var(--row)}
hr{border:none;border-top:1px solid var(--border-soft);margin:30px 0}
hr+h2{border-top:none;padding-top:0;margin-top:26px}
.muted{color:var(--muted)}
img{max-width:100%}
.gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-top:14px;align-items:start}
.thumb{display:block;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:var(--side);text-decoration:none;color:var(--muted);font-size:12px}
.thumb img{width:100%;display:block;aspect-ratio:1/1;object-fit:cover}
.thumb.tall img{aspect-ratio:9/16}
.thumb span{display:block;padding:6px 9px}
.topbar{display:none}
@media (max-width:860px){
  .layout{grid-template-columns:1fr}
  aside{position:fixed;z-index:50;width:min(320px,85vw);transform:translateX(-102%);transition:transform .2s;box-shadow:0 0 40px rgba(0,0,0,.25)}
  aside.open{transform:none}
  .topbar{display:flex;gap:10px;align-items:center;position:sticky;top:0;background:var(--side);border-bottom:1px solid var(--border);padding:10px 14px;z-index:40}
  .topbar button{font:inherit;font-weight:700;border:1px solid var(--border);background:var(--bg);color:var(--ink);border-radius:8px;padding:6px 12px;cursor:pointer}
  .topbar .word{font-size:15px}
  main{padding-top:22px}
}
@media (prefers-reduced-motion: reduce){aside{transition:none}}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
</style></head><body>
<div class="topbar"><button id="menuBtn">☰ Docs</button><div class="word">Buzzend Docs</div></div>
<div class="layout">
<aside id="side">
  <div class="sidehead"><div class="mark">⚡</div><div class="word">Buzzend Docs</div>
    <button id="themeBtn" title="Toggle light/dark" aria-label="Toggle light/dark theme">◐</button></div>
  <input id="q" type="search" placeholder="Search all docs…" aria-label="Search all docs">
  ${navHtml}
</aside>
<main>
${docsHtml}
</main>
</div>
<script>
var IDX=${searchIndex};
var navs=[].slice.call(document.querySelectorAll('a.nav'));
var docs=[].slice.call(document.querySelectorAll('article.doc'));
function show(id){
  var ok=false;
  docs.forEach(function(d){var on=d.id===id;d.classList.toggle('on',on);if(on)ok=true;});
  if(!ok){docs[0].classList.add('on');id=docs[0].id;}
  navs.forEach(function(n){n.classList.toggle('on',n.getAttribute('data-id')===id);});
  document.getElementById('side').classList.remove('open');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',function(){show(location.hash.slice(1));});
show(location.hash.slice(1)||'${docs[0].id}');
document.getElementById('q').addEventListener('input',function(){
  var v=this.value.toLowerCase().trim();
  var match={};
  IDX.forEach(function(d){match[d.id]=!v||d.t.indexOf(v)>-1||d.x.indexOf(v)>-1;});
  navs.forEach(function(n){n.classList.toggle('hide',!match[n.getAttribute('data-id')]);});
});
var mb=document.getElementById('menuBtn');
if(mb)mb.addEventListener('click',function(){document.getElementById('side').classList.toggle('open');});
(function(){
  var KEY='bz-docs-theme';
  var saved=null;
  try{saved=localStorage.getItem(KEY)}catch(e){}
  if(saved==='dark'||saved==='light')document.documentElement.setAttribute('data-theme',saved);
  document.getElementById('themeBtn').addEventListener('click',function(){
    var cur=document.documentElement.getAttribute('data-theme');
    if(!cur)cur=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    var next=cur==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',next);
    try{localStorage.setItem(KEY,next)}catch(e){}
  });
})();
</script>
</body></html>`;

writeFileSync(path.join(ROOT, 'index.html'), page);
console.log('Built index.html —', docs.length, 'documents,', Math.round(page.length / 1024), 'KB');
