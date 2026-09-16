// Scans public/images for every image file and records a content hash plus
// its natural width/height, so the app can (a) append a cache-busting query
// param derived from the file's actual bytes — not a filename anyone has to
// remember to change — and (b) size image containers to each photo's real
// aspect ratio instead of a fixed guess that crops or letterboxes it.
//
// Runs automatically before every `next build`/`next dev` (see package.json)
// so replacing a file's content, even under the same name, is picked up on
// the very next build with zero manual steps.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const OUT_FILE = path.join(process.cwd(), "lib", "imageManifest.json");
const EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp"]);

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (EXTS.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function main() {
  const files = walk(IMAGES_DIR);
  const manifest = {};

  for (const file of files) {
    const buf = readFileSync(file);
    const hash = createHash("md5").update(buf).digest("hex").slice(0, 10);
    const webPath = "/" + path.relative(path.join(process.cwd(), "public"), file).split(path.sep).join("/");
    try {
      const meta = await sharp(file).metadata();
      manifest[webPath] = { v: hash, w: meta.width ?? null, h: meta.height ?? null };
    } catch {
      manifest[webPath] = { v: hash, w: null, h: null };
    }
  }

  writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Image manifest: ${files.length} files -> ${path.relative(process.cwd(), OUT_FILE)}`);
}

main();
