#!/usr/bin/env node
/**
 * Zero-dependency QA gate for SmartLearn ready-made sections & catalog.json.
 *
 * Usage:
 *   node scripts/validate_sections.mjs [--summary] [--category=Hero] [--section=hero-split-01] [--json] [--no-fail]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(ROOT_DIR, "public", "catalog.json");
const SECTIONS_DIR = path.join(ROOT_DIR, "public", "sections");

const ALLOWED_SMARTLEARN_TOKENS = new Set([
  "--smartlearn-bg",
  "--smartlearn-text",
  "--smartlearn-text-muted",
  "--smartlearn-primary",
  "--smartlearn-primary-hover",
  "--smartlearn-btn-bg",
  "--smartlearn-btn-hover-bg",
  "--smartlearn-btn-text",
  "--smartlearn-card-bg",
  "--smartlearn-card-border",
  "--smartlearn-input-bg",
  "--smartlearn-input-border",
  "--smartlearn-radius",
  "--smartlearn-body-font",
  "--smartlearn-heading-font",
  "--smartlearn-navbar-height",
]);

const FORBIDDEN_MEDIA_PATTERNS = [
  { id: "media/hotlink-unsplash", regex: /images\.unsplash\.com/i, label: "Unsplash hotlink" },
  { id: "media/hotlink-pravatar", regex: /i\.pravatar\.cc/i, label: "Pravatar hotlink" },
  { id: "media/hotlink-picsum", regex: /picsum\.photos/i, label: "Picsum hotlink" },
  { id: "media/hotlink-randomuser", regex: /randomuser\.me/i, label: "RandomUser hotlink" },
  { id: "media/hotlink-mixkit", regex: /assets\.mixkit\.co/i, label: "Mixkit hotlink" },
  { id: "media/rickroll", regex: /dQw4w9WgXcQ/, label: "Rickroll YouTube URL (dQw4w9WgXcQ)" },
];

const FORBIDDEN_UTILITY_CLASSES = new Set([
  "py-6", "py-7", "py-8", "py-9", "py-10",
  "pt-6", "pt-7", "pt-8", "pt-9",
  "pb-6", "pb-7", "pb-8", "pb-9",
  "mb-6", "mb-7", "mb-8", "mb-9",
  "p-md-6", "p-md-7", "p-md-8", "p-md-9",
  "py-md-6", "py-md-7", "py-md-8", "py-md-9", "py-md-10",
  "py-lg-6", "py-lg-7", "py-lg-8", "py-lg-9",
  "inset-0", "min-vh-50", "position-lg-absolute", "border-start-md",
  "border-dashed", "border-transparent", "pointer-events-none",
  "text-sm", "fw-black", "tracking-wide", "bg-tertiary", "font-weight-bold",
  "max-w-700", "max-w-600", "sl-bg-main-secondary", "sl-bg-primary-subtle",
]);

const FORBIDDEN_TRAP_INNER_TAGS = [
  "svg", "img", "i", "div", "p",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li", "a", "button",
];

function parseArgs(argv) {
  const opts = {
    summary: false,
    category: null,
    section: null,
    json: false,
    noFail: false,
  };
  for (const arg of argv) {
    if (arg === "--summary") {
      opts.summary = true;
    } else if (arg === "--json") {
      opts.json = true;
    } else if (arg === "--no-fail") {
      opts.noFail = true;
    } else if (arg === "--all") {
      // Default behavior; accepted explicitly.
    } else if (arg.startsWith("--category=")) {
      opts.category = arg.slice("--category=".length).trim();
    } else if (arg.startsWith("--section=")) {
      opts.section = arg.slice("--section=".length).trim();
    } else {
      console.error(`Unknown option: ${arg}`);
      process.exit(2);
    }
  }
  return opts;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripCssComments(css) {
  let out = "";
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    const next = css[i + 1];
    if (!inSingle && !inDouble && ch === "/" && next === "*") {
      const end = css.indexOf("*/", i + 2);
      if (end === -1) {
        break;
      }
      i = end + 1;
      continue;
    }
    if (!inDouble && ch === "'" && css[i - 1] !== "\\") {
      inSingle = !inSingle;
    } else if (!inSingle && ch === '"' && css[i - 1] !== "\\") {
      inDouble = !inDouble;
    }
    out += ch;
  }
  return out;
}

function checkBalancedCssBraces(css) {
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  const cleaned = stripCssComments(css);
  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];
    if (!inDouble && ch === "'" && cleaned[i - 1] !== "\\") {
      inSingle = !inSingle;
    } else if (!inSingle && ch === '"' && cleaned[i - 1] !== "\\") {
      inDouble = !inDouble;
    } else if (!inSingle && !inDouble) {
      if (ch === "{") {
        depth++;
      } else if (ch === "}") {
        depth--;
        if (depth < 0) {
          return false;
        }
      }
    }
  }
  return depth === 0 && !inSingle && !inDouble;
}

function parseCssBlocks(css) {
  const blocks = [];
  let inSingle = false;
  let inDouble = false;
  let parenDepth = 0;
  let bracketDepth = 0;
  let start = 0;

  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (!inDouble && ch === "'" && css[i - 1] !== "\\") {
      inSingle = !inSingle;
    } else if (!inSingle && ch === '"' && css[i - 1] !== "\\") {
      inDouble = !inDouble;
    } else if (!inSingle && !inDouble) {
      if (ch === "(") parenDepth++;
      else if (ch === ")" && parenDepth > 0) parenDepth--;
      else if (ch === "[") bracketDepth++;
      else if (ch === "]" && bracketDepth > 0) bracketDepth--;
      else if (ch === ";" && parenDepth === 0 && bracketDepth === 0) {
        const stmt = css.slice(start, i).trim();
        if (stmt) {
          blocks.push({ type: "statement", prelude: stmt });
        }
        start = i + 1;
      } else if (ch === "{" && parenDepth === 0 && bracketDepth === 0) {
        const prelude = css.slice(start, i).trim();
        let depth = 1;
        let j = i + 1;
        let subSingle = false;
        let subDouble = false;
        for (; j < css.length && depth > 0; j++) {
          const c = css[j];
          if (!subDouble && c === "'" && css[j - 1] !== "\\") {
            subSingle = !subSingle;
          } else if (!subSingle && c === '"' && css[j - 1] !== "\\") {
            subDouble = !subDouble;
          } else if (!subSingle && !subDouble) {
            if (c === "{") depth++;
            else if (c === "}") depth--;
          }
        }
        const body = css.slice(i + 1, j - 1);
        blocks.push({ type: "block", prelude, body });
        i = j - 1;
        start = j;
      }
    }
  }
  return blocks;
}

function splitSelectors(prelude) {
  const selectors = [];
  let current = "";
  let parenDepth = 0;
  let bracketDepth = 0;
  let inSingle = false;
  let inDouble = false;

  for (let i = 0; i < prelude.length; i++) {
    const ch = prelude[i];
    if (!inDouble && ch === "'" && prelude[i - 1] !== "\\") {
      inSingle = !inSingle;
    } else if (!inSingle && ch === '"' && prelude[i - 1] !== "\\") {
      inDouble = !inDouble;
    } else if (!inSingle && !inDouble) {
      if (ch === "(") parenDepth++;
      else if (ch === ")" && parenDepth > 0) parenDepth--;
      else if (ch === "[") bracketDepth++;
      else if (ch === "]" && bracketDepth > 0) bracketDepth--;
      else if (ch === "," && parenDepth === 0 && bracketDepth === 0) {
        if (current.trim()) selectors.push(current.trim());
        current = "";
        continue;
      }
    }
    current += ch;
  }
  if (current.trim()) selectors.push(current.trim());
  return selectors;
}

function flattenCssRules(css, outRules = [], inAtMedia = false) {
  const blocks = parseCssBlocks(css);
  for (const blk of blocks) {
    if (blk.type === "statement") {
      continue;
    }
    const prelude = blk.prelude.trim();
    if (/^@(?:-\w+-)?keyframes\b/i.test(prelude) || /^@font-face\b/i.test(prelude) || /^@property\b/i.test(prelude)) {
      continue;
    }
    if (/^@(?:media|supports|container|layer)\b/i.test(prelude)) {
      flattenCssRules(blk.body, outRules, true);
    } else {
      outRules.push({ prelude, body: blk.body, inAtMedia });
    }
  }
  return outRules;
}

function stripJsComments(js) {
  let out = "";
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  for (let i = 0; i < js.length; i++) {
    const ch = js[i];
    const next = js[i + 1];
    if (!inSingle && !inDouble && !inTemplate) {
      if (ch === "/" && next === "/") {
        const nl = js.indexOf("\n", i + 2);
        if (nl === -1) break;
        i = nl - 1;
        continue;
      }
      if (ch === "/" && next === "*") {
        const end = js.indexOf("*/", i + 2);
        if (end === -1) break;
        i = end + 1;
        continue;
      }
    }
    if (!inDouble && !inTemplate && ch === "'" && js[i - 1] !== "\\") inSingle = !inSingle;
    else if (!inSingle && !inTemplate && ch === '"' && js[i - 1] !== "\\") inDouble = !inDouble;
    else if (!inSingle && !inDouble && ch === "`" && js[i - 1] !== "\\") inTemplate = !inTemplate;
    out += ch;
  }
  return out;
}

function extractRootElementInfo(html, id) {
  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, "").trimStart();
  const m = withoutComments.match(/^<([a-zA-Z0-9-]+)([^>]*)>/);
  if (!m) {
    return { tagName: null, classes: [], rootClass: null };
  }
  const tagName = m[1].toLowerCase();
  const attrs = m[2] || "";
  const classMatch = attrs.match(/\bclass\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
  const rawClasses = classMatch ? (classMatch[1] ?? classMatch[2] ?? "") : "";
  const classes = rawClasses.trim().split(/\s+/).filter(Boolean);
  const expected = `sl-${id.replace(/_/g, "-")}`;
  const slClasses = classes.filter((c) => c.startsWith("sl-"));
  const rootClass = slClasses.includes(expected) ? expected : (slClasses[0] || null);
  return { tagName, classes, rootClass };
}

function findEditableTextTraps(html) {
  const traps = [];
  const openRe = /<([a-zA-Z][a-zA-Z0-9-]*)\b([^>]*\bdata-sl-edit\s*=\s*(?:"text"|'text')[^>]*)>/gi;
  const tagTokenRe = /<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>/g;
  let match;

  while ((match = openRe.exec(html)) !== null) {
    const tag = match[1].toLowerCase();
    const startInner = match.index + match[0].length;
    if (match[0].endsWith("/>")) {
      continue;
    }
    tagTokenRe.lastIndex = startInner;
    let depth = 1;
    let endInner = html.length;
    let tok;
    while ((tok = tagTokenRe.exec(html)) !== null) {
      const tokStr = tok[0];
      const tokTag = tok[1].toLowerCase();
      if (tokTag === tag) {
        if (tokStr.startsWith("</")) {
          depth--;
          if (depth === 0) {
            endInner = tok.index;
            break;
          }
        } else if (!tokStr.endsWith("/>")) {
          depth++;
        }
      }
    }
    const inner = html.slice(startInner, endInner);
    const badChildMatch = inner.match(new RegExp(`<(${FORBIDDEN_TRAP_INNER_TAGS.join("|")})\\b`, "i"));
    if (badChildMatch) {
      traps.push({ outerTag: tag, innerTag: badChildMatch[1].toLowerCase() });
    }
  }
  return traps;
}

function validateSection(id, filePath, catalogEntry) {
  const issues = [];
  const addError = (rule, message) => issues.push({ level: "error", rule, message });
  const addWarn = (rule, message) => issues.push({ level: "warning", rule, message });

  let raw;
  try {
    raw = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    addError("json/read", `Cannot read file: ${err.message}`);
    return issues;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    addError("json/parse", `Invalid JSON: ${err.message}`);
    return issues;
  }

  if (data.smartlearn_section !== true) {
    addError("json/schema", "smartlearn_section must equal true");
  }
  if (typeof data.html !== "string" || typeof data.css !== "string" || typeof data.js !== "string") {
    addError("json/fields", "html, css, and js must all be strings");
    return issues;
  }

  const meta = data.meta || {};
  if (!catalogEntry) {
    addError("catalog/missing-entry", `Missing entry for "${id}" in public/catalog.json`);
  } else {
    if (catalogEntry.download_url !== `/sections/${id}.json`) {
      addError("catalog/download-url", `download_url "${catalogEntry.download_url}" !== "/sections/${id}.json"`);
    }
    for (const field of ["name", "category", "variant", "description", "image_count"]) {
      if (meta[field] !== catalogEntry[field]) {
        addError("catalog/meta-drift", `meta.${field} differs from catalog.json (${JSON.stringify(meta[field])} vs ${JSON.stringify(catalogEntry[field])})`);
      }
    }
    if (catalogEntry.category === "custom" || meta.category === "custom") {
      addError("catalog/custom-category", 'Section still categorized under "custom"');
    }
  }

  const html = data.html;
  const css = data.css;
  const js = data.js;
  const combined = `${html}\n${css}\n${js}`;

  // 2. Media & {{imageN}} contract
  const slotMatches = [...combined.matchAll(/\{\{image(\d+)\}\}/g)].map((m) => Number(m[1]));
  const uniqueSlots = [...new Set(slotMatches)].sort((a, b) => a - b);
  for (const slot of uniqueSlots) {
    if (slot < 1 || slot > 20) {
      addError("media/slot-range", `Placeholder {{image${slot}}} out of supported 1..20 range`);
    }
  }
  const declaredCount = Number(meta.image_count ?? 0);
  if (uniqueSlots.length !== declaredCount) {
    addError(
      "media/image-count-mismatch",
      `Unique {{imageN}} slots (${uniqueSlots.length}: ${uniqueSlots.join(",") || "none"}) !== meta.image_count (${declaredCount})`
    );
  } else if (declaredCount > 0) {
    for (let i = 1; i <= declaredCount; i++) {
      if (!uniqueSlots.includes(i)) {
        addError("media/non-contiguous-slots", `Expected contiguous slots 1..${declaredCount}, missing {{image${i}}}`);
        break;
      }
    }
  }

  for (const pat of FORBIDDEN_MEDIA_PATTERNS) {
    if (pat.regex.test(combined)) {
      addError(pat.id, `Forbidden external media or Rickroll reference found: ${pat.label}`);
    }
  }

  const imgTagRe = /<img\b[^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgTagRe.exec(html)) !== null) {
    if (!/\balt\s*=/i.test(imgMatch[0])) {
      addError("html/img-missing-alt", `<img> tag missing alt attribute: ${imgMatch[0].slice(0, 80)}`);
    }
  }

  // 3. CSS Scoping, Tokens & Sanitizer Safety
  const smartlearnTokens = [...new Set((css + "\n" + html).match(/--smartlearn-[a-z0-9-]+/gi) || [])];
  for (const tok of smartlearnTokens) {
    if (!ALLOWED_SMARTLEARN_TOKENS.has(tok)) {
      addError("css/undefined-smartlearn-token", `Undefined SmartLearn token "${tok}" (not in 16 canonical tokens)`);
    }
  }

  const slVarDefs = new Set();
  for (const m of (css + "\n" + html).matchAll(/(--sl-[a-z0-9-]+)\s*:/gi)) {
    slVarDefs.add(m[1]);
  }
  const slVarUses = [...new Set(((css + "\n" + html).match(/var\(\s*(--sl-[a-z0-9-]+)/gi) || []).map((s) => s.replace(/^var\(\s*/i, "")))];
  for (const usedVar of slVarUses) {
    if (!slVarDefs.has(usedVar)) {
      addError("css/undefined-sl-var", `CSS variable var(${usedVar}) used without local definition in section`);
    }
  }

  if (/rgba\(\s*var\(\s*--smartlearn-/i.test(css)) {
    addError("css/rgba-var", "Invalid CSS rgba(var(--smartlearn-...)) syntax");
  }
  if (/color-mix\(\s*in\s+oklch/i.test(css)) {
    addError("css/oklch-color-mix", "Forbidden color-mix(in oklch, ...) (use oklab or srgb)");
  }
  if (/@import\b/i.test(css)) {
    addError("css/import-stripped", "Forbidden CSS @import rule (stripped by theme_smartlearn_sanitize_custom_css)");
  }
  if (!checkBalancedCssBraces(css)) {
    addError("css/unbalanced-braces", "Unbalanced braces or unclosed string/comment in CSS");
  }

  const rootInfo = extractRootElementInfo(html, id);
  if (!rootInfo.rootClass) {
    addError("html/missing-root-sl-class", "Root HTML element must have an identifying .sl-* class");
  } else {
    const rootTokenRegex = new RegExp(`(?:^|[^a-zA-Z0-9_-])\\.${escapeRegExp(rootInfo.rootClass)}(?![a-zA-Z0-9_-])`);
    const cleanedCss = stripCssComments(css);
    const rules = flattenCssRules(cleanedCss);

    for (const rule of rules) {
      const selectors = splitSelectors(rule.prelude);
      for (const sel of selectors) {
        if (!rootTokenRegex.test(sel)) {
          addError(
            rule.inAtMedia ? "css/unscoped-media-selector" : "css/unscoped-selector",
            `CSS selector "${sel}" is not scoped to .${rootInfo.rootClass}`
          );
        }
        if (/\.sl-[a-z0-9_-]+[^,{]*\[data-(?:bs-theme|smartlearn-mode)="dark"\]/i.test(sel)) {
          addError("css/backwards-dark-selector", `Backwards dark-mode descendant selector "${sel}"`);
        }
        for (const extraClass of rootInfo.classes) {
          if (extraClass === rootInfo.rootClass) continue;
          const descBugRe = new RegExp(
            `\\.${escapeRegExp(rootInfo.rootClass)}\\s+\\.${escapeRegExp(extraClass)}(?![a-zA-Z0-9_-])`
          );
          if (descBugRe.test(sel)) {
            addError(
              "css/root-descendant-bug",
              `Selector "${sel}" uses descendant space for class ".${extraClass}" placed directly on the root element`
            );
          }
        }
      }

      if (/background(?:-color)?\s*:\s*var\(\s*--smartlearn-card-border\b/i.test(rule.body)) {
        addError("css/card-border-background", "Using --smartlearn-card-border as background/background-color");
      }
      const hasPrimaryBg = /background(?:-color)?\s*:\s*[^;]*var\(\s*--smartlearn-(?:primary|btn-bg)\b/i.test(rule.body);
      const hasWhiteFg = /(?:^|;)\s*color\s*:\s*(?:#fff(?:fff)?\b|rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)|white\b)/i.test(rule.body);
      if (hasPrimaryBg && hasWhiteFg) {
        addError("css/hardcoded-white-on-primary", "Hardcoded white foreground paired with --smartlearn-primary/--smartlearn-btn-bg (use var(--smartlearn-btn-text))");
      }
    }
  }

  // Invalid Bootstrap 5 / Tailwind utility classes in HTML
  const foundBadUtils = new Set();
  for (const m of html.matchAll(/\bclass\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
    const classList = (m[1] ?? m[2] ?? "").trim().split(/\s+/).filter(Boolean);
    for (const cls of classList) {
      if (FORBIDDEN_UTILITY_CLASSES.has(cls)) {
        foundBadUtils.add(cls);
      }
    }
  }
  if (foundBadUtils.size > 0) {
    addError("html/invalid-bs5-utilities", `Non-existent BS5/Tailwind utilities: ${[...foundBadUtils].join(", ")}`);
  }

  // 4. HTML, Live Editor & Accessibility Checks
  if (!/<!--\s*sl-section:/i.test(html)) {
    addError("html/missing-header-comment", "Missing <!-- sl-section: <id> | v2.0 --> header comment");
  }
  if (/<h1\b/i.test(html)) {
    addError("html/h1-present", "<h1> tag present (Moodle frontpage already renders <h1 class=\"visually-hidden\">)");
  }
  if (/\sid\s*=\s*(?:"[^"]+"|'[^']+')/i.test(html)) {
    addError("html/hardcoded-id", 'Hardcoded id="..." attribute breaks multi-instance sections');
  }
  for (const tagMatch of html.matchAll(/<([a-zA-Z][a-zA-Z0-9-]*)\b([^>]*)>/g)) {
    const tagName = tagMatch[1].toLowerCase();
    const attrs = tagMatch[2] || "";
    if (/\bon[a-z]+\s*=/i.test(attrs)) {
      addError("html/inline-event-handler", `Inline event handler attribute in <${tagName}>`);
    }
    if (/target\s*=\s*(?:"_blank"|'_blank')/i.test(attrs) && !/\brel\s*=\s*(?:"[^"]*noopener[^"]*"|'[^']*noopener[^']*')/i.test(attrs)) {
      addError("html/blank-without-noopener", `<${tagName} target="_blank"> missing rel="noopener noreferrer"`);
    }
    if (/\sviewbox\s*=/.test(attrs)) {
      addError("html/lowercase-viewbox", 'Lowercase SVG attribute viewbox="..." (must be viewBox="...")');
    }
  }
  if (/<script\b/i.test(html)) {
    addError("html/raw-script-tag", "Raw <script> tag found inside HTML");
  }
  if (/<iframe\b/i.test(html)) {
    addError("html/raw-iframe-tag", "Raw <iframe> tag found inside HTML");
  }
  if (/sl-item-video-url[^>]*data-sl-edit\s*=\s*["']text["']|data-sl-edit\s*=\s*["']text["'][^>]*sl-item-video-url/i.test(html)) {
    addError("editor/hidden-video-url", 'Hidden sl-item-video-url with data-sl-edit="text" leaks into Live Editor');
  }
  if (/data-sl-edit\s*=\s*["']list-item["']/i.test(html)) {
    addError("editor/invalid-list-item-attr", 'Unsupported data-sl-edit="list-item" attribute');
  }
  const traps = findEditableTextTraps(html);
  for (const t of traps) {
    addError("editor/ancestor-trap", `<${t.outerTag} data-sl-edit="text"> wraps nested <${t.innerTag}> child`);
  }

  // 5. JS Multi-Instance & Security Checks
  const jsTrimmed = js.trim();
  if (jsTrimmed.length > 0) {
    const jsClean = stripJsComments(jsTrimmed);
    const hasDomAction = /(?:querySelector|getElement|addEventListener|IntersectionObserver|MutationObserver|ResizeObserver|setInterval|setTimeout|requestAnimationFrame)/.test(jsClean);
    if (!hasDomAction) {
      addError("js/noop-stub", "Non-empty JS performs no DOM or observer work (use \"\" for static sections)");
    } else {
      if (/\bdocument\.querySelector\s*\(/.test(jsClean)) {
        addError("js/single-instance-querySelector", "Uses single-instance document.querySelector() instead of document.querySelectorAll()");
      }
      if (!/(?:dataset\.slInit|dataset\.scInit)/.test(jsClean)) {
        addError("js/missing-slInit", "Missing dataset.slInit idempotency guard");
      }
      if (!/document\.readyState/.test(jsClean)) {
        addError("js/missing-readyState", "Missing document.readyState === 'loading' check");
      }
    }
    if (/sl-editor-mode/.test(jsClean)) {
      addError("js/sl-editor-mode", "Checks non-existent body.sl-editor-mode class");
    }
    if (/\balert\s*\(/.test(jsClean)) {
      addError("js/alert-call", "Uses blocking alert() dialog");
    }
    if (/\.innerHTML\s*\+?=/.test(jsClean)) {
      addError("js/innerhtml-assignment", "Assigns .innerHTML directly in JS (DOM XSS risk)");
    }
    if (/\bsetInterval\s*\(/.test(jsClean) && !/\bclearInterval\s*\(/.test(jsClean)) {
      addError("js/uncleaned-setInterval", "Uses setInterval() without clearInterval()");
    }
    if (/\[class\*=["']play["']\]/.test(jsClean)) {
      addError("js/class-play-hijack", 'Dangerous selector [class*="play"] matches display-* headings');
    }
  }

  return issues;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
  const catalogEntries = catalog.sections || [];
  const catalogMap = new Map(catalogEntries.map((s) => [s.id, s]));

  const filesOnDisk = fs
    .readdirSync(SECTIONS_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();
  const diskIds = filesOnDisk.map((f) => f.replace(/\.json$/, ""));
  const diskIdSet = new Set(diskIds);

  const globalErrors = [];
  if (catalog.total_count !== catalogEntries.length) {
    globalErrors.push(`catalog.json total_count (${catalog.total_count}) !== sections.length (${catalogEntries.length})`);
  }
  if (!opts.category && !opts.section) {
    for (const id of catalogMap.keys()) {
      if (!diskIdSet.has(id)) {
        globalErrors.push(`catalog.json entry "${id}" has no matching public/sections/${id}.json file`);
      }
    }
    for (const id of diskIds) {
      if (!catalogMap.has(id)) {
        globalErrors.push(`public/sections/${id}.json is missing from catalog.json`);
      }
    }
  }

  let targetIds = [...new Set([...diskIds, ...catalogMap.keys()])].sort();
  if (opts.section) {
    targetIds = targetIds.filter((id) => id === opts.section);
  } else if (opts.category) {
    const wanted = opts.category.toLowerCase();
    targetIds = targetIds.filter((id) => {
      const c = catalogMap.get(id);
      return c && String(c.category || "").toLowerCase() === wanted;
    });
  }

  if (targetIds.length === 0) {
    console.error("No matching sections found for the specified filter.");
    process.exit(2);
  }

  const results = [];
  let totalErrors = globalErrors.length;
  let totalWarnings = 0;

  for (const id of targetIds) {
    const filePath = path.join(SECTIONS_DIR, `${id}.json`);
    const catalogEntry = catalogMap.get(id);
    const issues = validateSection(id, filePath, catalogEntry);
    const errors = issues.filter((i) => i.level === "error");
    const warnings = issues.filter((i) => i.level === "warning");
    totalErrors += errors.length;
    totalWarnings += warnings.length;
    results.push({
      id,
      category: catalogEntry?.category || "unknown",
      errors,
      warnings,
    });
  }

  if (opts.json) {
    console.log(JSON.stringify({ globalErrors, totalSections: results.length, totalErrors, totalWarnings, results }, null, 2));
    process.exit(opts.noFail || totalErrors === 0 ? 0 : 1);
  }

  if (globalErrors.length > 0) {
    console.log("GLOBAL PARITY ERRORS:");
    for (const e of globalErrors) {
      console.log(`  - ${e}`);
    }
    console.log("");
  }

  if (opts.summary) {
    const byCat = new Map();
    for (const r of results) {
      if (!byCat.has(r.category)) {
        byCat.set(r.category, { sections: 0, passed: 0, errors: 0, warnings: 0, rules: new Map() });
      }
      const bucket = byCat.get(r.category);
      bucket.sections++;
      if (r.errors.length === 0) bucket.passed++;
      bucket.errors += r.errors.length;
      bucket.warnings += r.warnings.length;
      for (const err of r.errors) {
        bucket.rules.set(err.rule, (bucket.rules.get(err.rule) || 0) + 1);
      }
    }
    console.log(`SmartLearn Section Validator Summary (${results.length} sections)`);
    console.log("---------------------------------------------------------------------------------------");
    console.log(
      "Category".padEnd(24) +
      "Secs".padStart(6) +
      "Pass".padStart(6) +
      "Errors".padStart(8) +
      "  Top Rules"
    );
    console.log("---------------------------------------------------------------------------------------");
    for (const [cat, info] of [...byCat.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      const topRules = [...info.rules.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([rule, count]) => `${rule}(${count})`)
        .join(", ");
      console.log(
        cat.padEnd(24) +
        String(info.sections).padStart(6) +
        String(info.passed).padStart(6) +
        String(info.errors).padStart(8) +
        "  " +
        (topRules || "PASS")
      );
    }
    console.log("---------------------------------------------------------------------------------------");
    console.log(`Total sections: ${results.length} | Passed: ${results.filter((r) => r.errors.length === 0).length} | Total errors: ${totalErrors} | Total warnings: ${totalWarnings}`);
  } else {
    for (const r of results) {
      if (r.errors.length === 0 && r.warnings.length === 0) {
        console.log(`PASS  [${r.category}] ${r.id}`);
        continue;
      }
      console.log(`${r.errors.length > 0 ? "FAIL" : "WARN"}  [${r.category}] ${r.id} (${r.errors.length} errors, ${r.warnings.length} warnings)`);
      for (const e of r.errors) {
        console.log(`  [error]   ${e.rule}: ${e.message}`);
      }
      for (const w of r.warnings) {
        console.log(`  [warn]    ${w.rule}: ${w.message}`);
      }
    }
    console.log(`\nSummary: ${results.filter((r) => r.errors.length === 0).length}/${results.length} sections passed | ${totalErrors} errors | ${totalWarnings} warnings`);
  }

  process.exit(opts.noFail || totalErrors === 0 ? 0 : 1);
}

main();
