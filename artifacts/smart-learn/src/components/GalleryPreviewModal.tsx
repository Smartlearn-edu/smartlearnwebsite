import { useEffect, useState } from "react";
import { X, Sun, Moon, Contrast, Languages } from "lucide-react";

type PreviewMode = "light" | "dark" | "hc-dark";
type PreviewDir = "ltr" | "rtl";

export interface GallerySection {
  id: string;
  name: string;
  category: string;
  variant?: string;
  download_url: string;
}

const TOKEN_PRESETS: Record<
  PreviewMode,
  {
    bsTheme: "light" | "dark";
    label: string;
    tokens: Record<string, string>;
  }
> = {
  light: {
    bsTheme: "light",
    label: "Light",
    tokens: {
      "--smartlearn-bg": "#f8fafc",
      "--smartlearn-text": "#0f172a",
      "--smartlearn-text-muted": "#475569",
      "--smartlearn-primary": "#4f46e5",
      "--smartlearn-primary-hover": "#4338ca",
      "--smartlearn-btn-bg": "#4f46e5",
      "--smartlearn-btn-hover-bg": "#4338ca",
      "--smartlearn-btn-text": "#ffffff",
      "--smartlearn-card-bg": "#ffffff",
      "--smartlearn-card-border": "#e2e8f0",
      "--smartlearn-input-bg": "#ffffff",
      "--smartlearn-input-border": "#cbd5e1",
      "--smartlearn-radius": "12px",
      "--smartlearn-body-font": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      "--smartlearn-heading-font": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      "--smartlearn-navbar-height": "64px",
    },
  },
  dark: {
    bsTheme: "dark",
    label: "Dark",
    tokens: {
      "--smartlearn-bg": "#0f172a",
      "--smartlearn-text": "#f8fafc",
      "--smartlearn-text-muted": "#94a3b8",
      "--smartlearn-primary": "#818cf8",
      "--smartlearn-primary-hover": "#6366f1",
      "--smartlearn-btn-bg": "#818cf8",
      "--smartlearn-btn-hover-bg": "#6366f1",
      "--smartlearn-btn-text": "#0f172a",
      "--smartlearn-card-bg": "#1e293b",
      "--smartlearn-card-border": "#334155",
      "--smartlearn-input-bg": "#0f172a",
      "--smartlearn-input-border": "#475569",
      "--smartlearn-radius": "12px",
      "--smartlearn-body-font": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      "--smartlearn-heading-font": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      "--smartlearn-navbar-height": "64px",
    },
  },
  "hc-dark": {
    bsTheme: "dark",
    label: "HC Dark",
    tokens: {
      "--smartlearn-bg": "#000000",
      "--smartlearn-text": "#ffffff",
      "--smartlearn-text-muted": "#e2e8f0",
      "--smartlearn-primary": "#ffff00",
      "--smartlearn-primary-hover": "#facc15",
      "--smartlearn-btn-bg": "#ffff00",
      "--smartlearn-btn-hover-bg": "#facc15",
      "--smartlearn-btn-text": "#000000",
      "--smartlearn-card-bg": "#0a0a0a",
      "--smartlearn-card-border": "#ffff00",
      "--smartlearn-input-bg": "#000000",
      "--smartlearn-input-border": "#ffff00",
      "--smartlearn-radius": "8px",
      "--smartlearn-body-font": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      "--smartlearn-heading-font": "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      "--smartlearn-navbar-height": "64px",
    },
  },
};

const PLACEHOLDER_PALETTES = [
  ["#4f46e5", "#0ea5e9"],
  ["#0f766e", "#2dd4bf"],
  ["#7c3aed", "#ec4899"],
  ["#b45309", "#f59e0b"],
  ["#1d4ed8", "#38bdf8"],
  ["#be123c", "#fb7185"],
];

function buildPlaceholderSvg(slot: number, mode: PreviewMode): string {
  const palette = PLACEHOLDER_PALETTES[(Math.max(1, slot) - 1) % PLACEHOLDER_PALETTES.length];
  const bg = mode === "light" ? "#eef2ff" : "#111827";
  const fg = mode === "light" ? "#1e293b" : "#f8fafc";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette[0]}"/><stop offset="100%" stop-color="${palette[1]}"/></linearGradient></defs><rect width="1200" height="800" fill="${bg}"/><rect x="64" y="64" width="1072" height="672" rx="36" fill="url(#g)" opacity="0.22"/><circle cx="280" cy="300" r="110" fill="url(#g)" opacity="0.7"/><path d="M220 620 L480 390 L690 540 L840 420 L1020 620 Z" fill="url(#g)" opacity="0.85"/><rect x="110" y="120" width="210" height="48" rx="24" fill="${bg}" opacity="0.92"/><text x="215" y="151" font-family="system-ui,sans-serif" font-size="22" font-weight="700" fill="${fg}" text-anchor="middle">Image Slot ${slot}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg).replace(/'/g, "%27")}`;
}

function replaceImageTokens(input: string, mode: PreviewMode): string {
  const cache = new Map<number, string>();
  return input.replace(/\{\{image(\d+)\}\}/g, (_match, rawSlot) => {
    const slot = Math.min(20, Math.max(1, Number(rawSlot) || 1));
    if (!cache.has(slot)) {
      cache.set(slot, buildPlaceholderSvg(slot, mode));
    }
    return cache.get(slot)!;
  });
}

export function GalleryPreviewModal({
  section,
  onClose,
}: {
  section: GallerySection;
  onClose: () => void;
}) {
  const [htmlContent, setHtmlContent] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [jsContent, setJsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<PreviewMode>("light");
  const [dir, setDir] = useState<PreviewDir>("ltr");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(section.download_url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setHtmlContent(data.html || "");
        setCssContent(data.css || "");
        setJsContent(data.js || "");
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load section preview");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [section.download_url]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const preset = TOKEN_PRESETS[mode];
  const tokenCss = Object.entries(preset.tokens)
    .map(([key, val]) => `  ${key}: ${val};`)
    .join("\n");

  const bootstrapCssUrl =
    dir === "rtl"
      ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css"
      : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

  const resolvedHtml = replaceImageTokens(htmlContent, mode);
  const resolvedCss = replaceImageTokens(cssContent, mode);
  const safeJs = jsContent.replace(/<\/script>/gi, "<\\/script>");

  const previewDoc = `<!DOCTYPE html>
<html lang="${dir === "rtl" ? "ar" : "en"}" dir="${dir}" data-bs-theme="${preset.bsTheme}" data-smartlearn-mode="${preset.bsTheme}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${bootstrapCssUrl}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/v4-shims.min.css">
    <style>
      :root {
${tokenCss}
      }
      body {
        margin: 0;
        padding: 0;
        background-color: var(--smartlearn-bg);
        color: var(--smartlearn-text);
        font-family: var(--smartlearn-body-font);
      }
      ${resolvedCss}
    </style>
  </head>
  <body>
    ${resolvedHtml}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
      ${safeJs}
    </script>
  </body>
</html>`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sl-gallery-preview-title"
        className="bg-slate-900 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-slate-800 bg-slate-900/90">
          <div className="min-w-0">
            <h2 id="sl-gallery-preview-title" className="text-lg sm:text-xl font-bold text-white truncate">
              {section.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {section.category} {section.variant ? `· ${section.variant}` : ""}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              className="inline-flex items-center rounded-lg bg-slate-800 p-1 border border-slate-700"
              role="group"
              aria-label="Theme mode"
            >
              {(["light", "dark", "hc-dark"] as PreviewMode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  aria-pressed={mode === m}
                  onClick={() => setMode(m)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    mode === m
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {m === "light" && <Sun size={13} aria-hidden="true" />}
                  {m === "dark" && <Moon size={13} aria-hidden="true" />}
                  {m === "hc-dark" && <Contrast size={13} aria-hidden="true" />}
                  <span>{TOKEN_PRESETS[m].label}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-pressed={dir === "rtl"}
              aria-label={`Switch layout direction (currently ${dir.toUpperCase()})`}
              onClick={() => setDir((prev) => (prev === "ltr" ? "rtl" : "ltr"))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
            >
              <Languages size={14} aria-hidden="true" />
              <span>{dir.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-950 p-3 sm:p-4 overflow-hidden">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 text-sm">
              Loading section preview...
            </div>
          ) : error ? (
            <div className="w-full h-full flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-rose-400 text-sm">
              Failed to load preview ({error})
            </div>
          ) : (
            <iframe
              key={`${section.id}-${mode}-${dir}`}
              srcDoc={previewDoc}
              sandbox="allow-scripts"
              className={`w-full h-full rounded-xl border border-slate-800 shadow-inner ${
                mode === "light" ? "bg-white" : mode === "dark" ? "bg-slate-900" : "bg-black"
              }`}
              title={`Live preview: ${section.name}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
