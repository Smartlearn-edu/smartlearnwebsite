import { useState } from "react";
import { Link } from "wouter";
import { Check, Copy, ExternalLink, Maximize2, PlayCircle } from "lucide-react";
import { getYouTubeEmbedUrl, getYouTubeWatchUrl } from "@/lib/youtube";

interface PluginVideoEmbedProps {
  videoId: string;
  pluginName: string;
  slug: string;
  lang: "en" | "ar";
  autoplay?: boolean;
  showTheaterLink?: boolean;
}

const labels = {
  en: {
    badge: "Plugin Video Demo",
    iframeSuffix: "Demo Video",
    theaterLink: "Open Dedicated Video Page",
    copyLink: "Copy Video Link",
    copied: "Link Copied!",
    watchYoutube: "Watch on YouTube",
  },
  ar: {
    badge: "فيديو توضيحي للإضافة",
    iframeSuffix: "فيديو توضيحي",
    theaterLink: "فتح صفحة الفيديو المخصصة",
    copyLink: "نسخ رابط الفيديو",
    copied: "تم نسخ الرابط!",
    watchYoutube: "مشاهدة على يوتيوب",
  },
};

export function PluginVideoEmbed({
  videoId,
  pluginName,
  slug,
  lang,
  autoplay = false,
  showTheaterLink = false,
}: PluginVideoEmbedProps) {
  const [copied, setCopied] = useState(false);
  const t = labels[lang];
  const videoPagePath = `/services/plugins/${slug}/video`;
  const embedUrl = getYouTubeEmbedUrl(videoId, autoplay);
  const watchUrl = getYouTubeWatchUrl(videoId);

  const handleCopyLink = () => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://services.smartlearn.education";
    navigator.clipboard.writeText(`${origin}${videoPagePath}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="rounded-2xl border border-purple-500/25 bg-white/[0.02] p-3 md:p-4 shadow-2xl shadow-purple-950/20">
      {/* Direct YouTube iframe inside a 16:9 responsive container */}
      <div className="relative w-full aspect-video rounded-xl bg-black">
        <iframe
          src={embedUrl}
          title={`${pluginName} — ${t.iframeSuffix}`}
          className="w-full h-full rounded-xl border-0 block"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Action bar */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-300">
          <PlayCircle size={15} className="text-purple-400" aria-hidden="true" />
          <span>{t.badge}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {showTheaterLink && (
            <Link
              href={videoPagePath}
              className="inline-flex items-center gap-1.5 min-h-9 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 bg-white/[0.05] border border-white/10 hover:border-purple-400/50 hover:text-white transition-colors"
            >
              <Maximize2 size={13} aria-hidden="true" />
              <span>{t.theaterLink}</span>
            </Link>
          )}

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 min-h-9 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 bg-white/[0.05] border border-white/10 hover:border-purple-400/50 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <Check size={13} className="text-emerald-400" aria-hidden="true" />
            ) : (
              <Copy size={13} aria-hidden="true" />
            )}
            <span>{copied ? t.copied : t.copyLink}</span>
          </button>

          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-9 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-purple-600/80 hover:bg-purple-600 transition-colors"
          >
            <span>{t.watchYoutube}</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
