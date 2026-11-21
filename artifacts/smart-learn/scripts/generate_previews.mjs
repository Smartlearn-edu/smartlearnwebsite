#!/usr/bin/env node
/**
 * Generate 800x450 compressed .webp preview thumbnails for all sections in public/catalog.json.
 *
 * Usage:
 *   node scripts/generate_previews.mjs [--section=hero-split-01]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(ROOT_DIR, "public", "catalog.json");
const SECTIONS_DIR = path.join(ROOT_DIR, "public", "sections");
const PREVIEWS_DIR = path.join(ROOT_DIR, "public", "previews");

const LIGHT_TOKENS = `
  --smartlearn-bg: #f8fafc;
  --smartlearn-text: #0f172a;
  --smartlearn-text-muted: #475569;
  --smartlearn-primary: #4f46e5;
  --smartlearn-primary-hover: #4338ca;
  --smartlearn-btn-bg: #4f46e5;
  --smartlearn-btn-hover-bg: #4338ca;
  --smartlearn-btn-text: #ffffff;
  --smartlearn-card-bg: #ffffff;
  --smartlearn-card-border: #e2e8f0;
  --smartlearn-input-bg: #ffffff;
  --smartlearn-input-border: #cbd5e1;
  --smartlearn-radius: 12px;
  --smartlearn-body-font: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --smartlearn-heading-font: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --smartlearn-navbar-height: 64px;
`;

const PALETTES = [
  ["#4f46e5", "#0ea5e9"],
  ["#0f766e", "#2dd4bf"],
  ["#7c3aed", "#ec4899"],
  ["#b45309", "#f59e0b"],
  ["#1d4ed8", "#38bdf8"],
  ["#be123c", "#fb7185"],
];

function buildPlaceholderSvg(slot) {
  const palette = PALETTES[(Math.max(1, slot) - 1) % PALETTES.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette[0]}"/><stop offset="100%" stop-color="${palette[1]}"/></linearGradient></defs><rect width="1200" height="800" fill="#eef2ff"/><rect x="64" y="64" width="1072" height="672" rx="36" fill="url(#g)" opacity="0.22"/><circle cx="280" cy="300" r="110" fill="url(#g)" opacity="0.7"/><path d="M220 620 L480 390 L690 540 L840 420 L1020 620 Z" fill="url(#g)" opacity="0.85"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg).replace(/'/g, "%27")}`;
}

function replaceImageTokens(input) {
  const cache = new Map();
  return input.replace(/\{\{image(\d+)\}\}/g, (_m, rawSlot) => {
    const slot = Math.min(20, Math.max(1, Number(rawSlot) || 1));
    if (!cache.has(slot)) {
      cache.set(slot, buildPlaceholderSvg(slot));
    }
    return cache.get(slot);
  });
}

function buildHtml(section) {
  const html = replaceImageTokens(section.html || "");
  const css = replaceImageTokens(section.css || "");
  const js = (section.js || "").replace(/<\/script>/gi, "<\\/script>");
  return `<!DOCTYPE html>
<html lang="en" dir="ltr" data-bs-theme="light" data-smartlearn-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/v4-shims.min.css">
  <style>
    :root { ${LIGHT_TOKENS} }
    html, body {
      margin: 0;
      padding: 0;
      background-color: var(--smartlearn-bg);
      color: var(--smartlearn-text);
      font-family: var(--smartlearn-body-font);
      overflow-x: hidden;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>${js}</script>
</body>
</html>`;
}

async function main() {
  const filterArg = process.argv.find((a) => a.startsWith("--section="));
  const targetId = filterArg ? filterArg.slice("--section=".length).trim() : null;

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
  let entries = catalog.sections || [];
  if (targetId) {
    entries = entries.filter((e) => e.id === targetId);
  }

  fs.mkdirSync(PREVIEWS_DIR, { recursive: true });

  const executablePath = fs.existsSync("/usr/bin/google-chrome")
    ? "/usr/bin/google-chrome"
    : undefined;

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);

    // Pre-warm CDN stylesheets once on a blank page? Each setContent reuses Chrome's cache.
    let done = 0;
    let maxBytes = 0;

    for (const entry of entries) {
      const secPath = path.join(SECTIONS_DIR, `${entry.id}.json`);
      const sec = JSON.parse(fs.readFileSync(secPath, "utf8"));
      await page.setContent(buildHtml(sec), { waitUntil: "load", timeout: 45000 });
      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await new Promise((r) => setTimeout(r, 120));

      const pngBase64 = await page.screenshot({ type: "png", encoding: "base64" });
      const webpDataUrl = await page.evaluate(async (b64) => {
        const img = new Image();
        img.src = "data:image/png;base64," + b64;
        await img.decode();
        const canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 450;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 800, 450);
        for (const q of [0.8, 0.72, 0.62, 0.5]) {
          const url = canvas.toDataURL("image/webp", q);
          const approxBytes = Math.ceil((url.length - 23) * 0.75);
          if (approxBytes <= 40000 || q === 0.5) {
            return url;
          }
        }
        return canvas.toDataURL("image/webp", 0.5);
      }, pngBase64);

      const buf = Buffer.from(webpDataUrl.split(",")[1], "base64");
      const outPath = path.join(PREVIEWS_DIR, `${entry.id}.webp`);
      fs.writeFileSync(outPath, buf);
      if (buf.length > maxBytes) maxBytes = buf.length;
      done++;
      if (done % 20 === 0 || done === entries.length) {
        console.log(`Generated ${done}/${entries.length} previews (max size so far: ${(maxBytes / 1024).toFixed(1)} KB)`);
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
