#!/usr/bin/env python3
"""Generate static gallery index.html pages for the store-asset folders so
directory links work on GitHub Pages (which has no directory listings).
Re-run after adding/removing images:  python3 tools/make-galleries.py
"""
import os, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

GALLERIES = {
    "store-assets/ios": "App Store — iPhone screenshots",
    "store-assets/android/phone": "Google Play — phone screenshots",
    "store-assets/android/tablet-7": "Google Play — 7″ tablet screenshots",
    "store-assets/android/tablet-10": "Google Play — 10″ tablet screenshots",
}

PAGE = """<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>
  :root {{ --primary:#ff6b00; --ink:#222; --canvas:#fff8f2; --border:#f5ddc8; --muted:#6b7280; }}
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
         background:var(--canvas); color:var(--ink); padding:32px 24px 64px; }}
  a.back {{ color:var(--primary); text-decoration:none; font-weight:700; font-size:14px; }}
  h1 {{ font-size:24px; font-weight:900; margin:10px 0 4px; }}
  p.meta {{ color:var(--muted); font-size:13px; margin-bottom:24px; }}
  .grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:18px;
          max-width:1200px; }}
  figure {{ background:#fff; border:1px solid var(--border); border-radius:14px;
           padding:10px; }}
  figure img {{ width:100%; border-radius:8px; display:block; }}
  figcaption {{ font-size:11.5px; color:var(--muted); margin-top:8px; word-break:break-all;
              display:flex; justify-content:space-between; gap:8px; }}
  figcaption a {{ color:var(--primary); font-weight:700; text-decoration:none; flex:none; }}
</style></head><body>
<a class="back" href="{home}">← Buzzend docs</a>
<h1>{title}</h1>
<p class="meta">{count} images · click any file name to open full size</p>
<div class="grid">
{cells}
</div>
</body></html>
"""

CELL = """<figure><a href="{f}"><img src="{f}" alt="{f}" loading="lazy"></a>
<figcaption><span>{f}</span><a href="{f}">open</a></figcaption></figure>"""

for rel, title in GALLERIES.items():
    d = os.path.join(ROOT, rel)
    if not os.path.isdir(d):
        print("skip (missing):", rel); continue
    imgs = sorted(f for f in os.listdir(d)
                  if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")))
    depth = rel.count("/") + 1
    home = "../" * depth + "index.html"
    cells = "\n".join(CELL.format(f=html.escape(f)) for f in imgs)
    out = os.path.join(d, "index.html")
    with open(out, "w") as fh:
        fh.write(PAGE.format(title=html.escape(title), home=home,
                             count=len(imgs), cells=cells))
    print(f"wrote {rel}/index.html ({len(imgs)} images)")
