import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Cpu, Tag, VideoOff, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { PluginVideoEmbed } from "@/components/PluginVideoEmbed";
import { usePlugins } from "@/hooks/usePlugins";
import { useT } from "@/i18n";
import { extractYouTubeId, getYouTubeThumbnailUrl, getYouTubeWatchUrl } from "@/lib/youtube";

const font: React.CSSProperties = { fontFamily: "var(--site-font)" };

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const ui = {
  en: {
    backToPlugin: "Back to Plugin Page",
    backToAll: "All Plugins",
    videoDemo: "Video Demo",
    notFound: "Plugin not found",
    noVideoTitle: "Video coming soon",
    noVideoDesc: "A YouTube demo video hasn't been added for this plugin yet.",
    viewDetails: "View Full Plugin Details & Pricing",
  },
  ar: {
    backToPlugin: "العودة إلى صفحة الإضافة",
    backToAll: "جميع الإضافات",
    videoDemo: "فيديو توضيحي",
    notFound: "الإضافة غير موجودة",
    noVideoTitle: "الفيديو قادم قريباً",
    noVideoDesc: "لم تتم إضافة فيديو يوتيوب توضيحي لهذه الإضافة بعد.",
    viewDetails: "عرض تفاصيل الإضافة والأسعار",
  },
};

export function PluginVideoPage() {
  const { pluginSlug } = useParams<{ pluginSlug: string }>();
  const { lang, isRTL } = useT();
  const t = ui[lang];
  const { data: plugins = [], isFetching } = usePlugins();
  const plugin = plugins.find((p) => p.slug === pluginSlug);

  if (!plugin) {
    if (isFetching) {
      return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#07070f" }}>
          <Navbar />
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#07070f" }}>
        <Navbar />
        <div className="text-center px-6">
          <p className="text-6xl mb-6">404</p>
          <h1 className="text-2xl font-black text-white mb-4" style={font}>{t.notFound}</h1>
          <Link
            href="/services/plugins"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white"
            style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}
          >
            {t.backToAll}
          </Link>
        </div>
      </div>
    );
  }

  const name = lang === "ar" ? plugin.nameAr : plugin.name;
  const categoryLabel = lang === "ar" ? plugin.categoryAr : plugin.category;
  const description = lang === "ar" ? plugin.descriptionAr : plugin.description;
  const videoId = extractYouTubeId(plugin.videoUrl);
  const canonicalUrl = `https://services.smartlearn.education/services/plugins/${plugin.slug}/video`;

  return (
    <>
      <Helmet>
        <title>{name} — {t.videoDemo} | Smart Learn</title>
        <meta name="description" content={description ? description.slice(0, 155) : `${name} ${t.videoDemo}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${name} — ${t.videoDemo}`} />
        {videoId && <meta property="og:video" content={getYouTubeWatchUrl(videoId)} />}
        {videoId && <meta property="og:image" content={getYouTubeThumbnailUrl(videoId)} />}
      </Helmet>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#07070f", ...font }}>
        <Navbar />

        <div className="flex-1 max-w-5xl w-full mx-auto px-6 pt-28 pb-16">
          {/* Navigation breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href={`/services/plugins/${plugin.slug}`}
              className="inline-flex items-center gap-2 text-sm md:text-base text-slate-200 hover:text-purple-400 transition-colors"
            >
              {isRTL ? <ArrowRight size={15} aria-hidden="true" /> : <ArrowLeft size={15} aria-hidden="true" />}
              <span>{t.backToPlugin}</span>
            </Link>

            <Link
              href="/services/plugins"
              className="text-xs font-bold text-slate-400 hover:text-purple-300 transition-colors"
            >
              {t.backToAll}
            </Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-purple-500/30 text-purple-300 bg-purple-900/20">
                {t.videoDemo}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-purple-500/20 text-purple-200 bg-purple-900/10">
                {categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-slate-600/30 text-slate-200 bg-slate-900/40 inline-flex items-center gap-1">
                <Cpu size={11} aria-hidden="true" /> {plugin.moodle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-slate-600/30 text-slate-200 bg-slate-900/40 inline-flex items-center gap-1">
                <Tag size={11} aria-hidden="true" /> {plugin.type}
              </span>
            </div>

            {/* Single page H1 */}
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight" style={font}>
              <span style={gradientText}>{name}</span>
            </h1>

            {/* Video theater or empty fallback */}
            {videoId ? (
              <PluginVideoEmbed
                videoId={videoId}
                pluginName={name}
                slug={plugin.slug}
                lang={lang}
              />
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-20 px-6 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <VideoOff size={26} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-black text-white" style={font}>{t.noVideoTitle}</h2>
                <p className="text-sm text-slate-400 max-w-md">{t.noVideoDesc}</p>
              </div>
            )}

            {/* Primary CTA back to plugin page */}
            <div className="mt-8 flex justify-center">
              <Link
                href={`/services/plugins/${plugin.slug}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #6900A3, #a855f7)",
                  boxShadow: "0 0 32px rgba(105,0,163,0.35)",
                  ...font,
                }}
              >
                <Wrench size={16} aria-hidden="true" />
                <span>{t.viewDetails}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <footer className="py-10 px-6 border-t border-white/[0.04]">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
            <SocialLinks size="sm" />
            <p className="text-sm text-slate-600" style={font}>
              {lang === "ar"
                ? `© ${new Date().getFullYear()} سمارت ليرن · محمد نبيل · مصر`
                : `© ${new Date().getFullYear()} Smart Learn · Mohammad Nabil · Egypt`}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
