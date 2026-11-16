import { useState } from "react";
import { Link } from "wouter";
import { Puzzle, Check, ExternalLink, Layers } from "lucide-react";
import { usePlugins } from "@/hooks/usePlugins";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import type { Plugin } from "@/data/plugins";

// Verified hero thumbnails from /public/plugins/<slug>/
const VERIFIED_PLUGIN_THUMBS: Record<string, string> = {
  theme_smartlearn: "/plugins/theme_smartlearn/0.png",
  local_smartdashboard: "/plugins/local_smartdashboard/0.jpg",
  local_smartgradeai: "/plugins/local_smartgradeai/ai-proposed-score.png",
  local_airubricgenerator: "/plugins/local_airubricgenerator/0.jpg",
  local_chatwithassignment: "/plugins/local_chatwithassignment/0.jpg",
  local_smartcatalog: "/plugins/local_smartcatalog/1.png",
  local_smartcoursepage: "/plugins/local_smartcoursepage/0- banner.png",
  mod_adaptiveplan: "/plugins/mod_adaptiveplan/0.jpg",
  mod_gapclose: "/plugins/mod_gapclose/0.jpg",
};

const FEATURED_SLUGS = [
  "theme_smartlearn",
  "local_smartdashboard",
  "local_smartgradeai",
  "local_airubricgenerator",
  "local_chatwithassignment",
  "local_smartcatalog",
  "mod_adaptiveplan",
  "report_studentgrades",
  "paygw_kashier",
];

type FilterId =
  | "featured"
  | "free"
  | "Theme & Smart Pages"
  | "Assignment & Quiz Tools"
  | "Moodle Activities"
  | "Enrollment"
  | "Reporting"
  | "Payment Gateways";

const FILTERS: { id: FilterId; en: string; ar: string }[] = [
  { id: "featured", en: "Featured", ar: "الأبرز" },
  { id: "free", en: "Free on Moodle.org", ar: "مجانية" },
  { id: "Theme & Smart Pages", en: "Themes & Pages", ar: "القوالب والصفحات" },
  { id: "Assignment & Quiz Tools", en: "AI & Quiz Tools", ar: "أدوات الذكاء والاختبارات" },
  { id: "Moodle Activities", en: "Activities", ar: "الأنشطة" },
  { id: "Enrollment", en: "Enrolment", ar: "التسجيل" },
  { id: "Reporting", en: "Reporting", ar: "التقارير" },
  { id: "Payment Gateways", en: "Payments", ar: "بوابات الدفع" },
];

function getPluginThumb(plugin: Plugin): string | null {
  if (VERIFIED_PLUGIN_THUMBS[plugin.slug]) {
    return VERIFIED_PLUGIN_THUMBS[plugin.slug];
  }
  if (plugin.images && plugin.images.length > 0) {
    const first = plugin.images[0];
    return first.startsWith("/") || first.startsWith("http")
      ? first
      : `/plugins/${plugin.slug}/${first}`;
  }
  return null;
}

function PluginSpotlightCard({ plugin }: { plugin: Plugin }) {
  const { lang, t } = useT();
  const [imgFailed, setImgFailed] = useState(false);

  const name = lang === "ar" && plugin.nameAr ? plugin.nameAr : plugin.name;
  const category = lang === "ar" && plugin.categoryAr ? plugin.categoryAr : plugin.category;
  const features = lang === "ar" && plugin.featuresAr?.length ? plugin.featuresAr : plugin.features;
  const thumb = getPluginThumb(plugin);

  const priceBadge = plugin.free
    ? plugin.paidSupport
      ? t.pluginsSpotlight.freeSupportTag
      : t.pluginsSpotlight.freeTag
    : plugin.price != null
    ? `$${plugin.price}`
    : lang === "ar"
    ? "مخصص"
    : "Custom";

  return (
    <article className="group rounded-2xl border border-[#E2DBD0] bg-white overflow-hidden flex flex-col hover:border-[#C9C0B2] hover:shadow-md transition-all duration-150">
      {/* Real screenshot OR architectural spec header (never AI-generated placeholder art) */}
      {thumb && !imgFailed ? (
        <div className="relative aspect-video bg-[#F2EEE6] border-b border-[#E2DBD0] overflow-hidden">
          <img
            src={thumb}
            alt={name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />
          <span
            className={`absolute top-3 end-3 text-xs font-bold px-2.5 py-1 rounded-full border shadow-2xs ${
              plugin.free
                ? "bg-[#ECFDF3] text-[#15803D] border-[#BBF7D0]"
                : "bg-white text-[#18181B] border-[#E2DBD0]"
            }`}
          >
            {priceBadge}
          </span>
        </div>
      ) : (
        <div className="px-5 pt-5 pb-4 bg-[#F2EEE6] border-b border-[#E2DBD0] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#E2DBD0] text-[#581C87] flex-shrink-0">
              <Layers size={15} aria-hidden="true" />
            </span>
            <span className="font-mono-slug text-xs font-semibold text-[#18181B] truncate">
              {plugin.slug}
            </span>
          </div>
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full border flex-shrink-0 ${
              plugin.free
                ? "bg-[#ECFDF3] text-[#15803D] border-[#BBF7D0]"
                : "bg-white text-[#18181B] border-[#E2DBD0]"
            }`}
          >
            {priceBadge}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#52525B]">
            {category}
          </span>
          <span className="font-mono-slug text-[11px] text-[#52525B]">{plugin.moodle}</span>
        </div>

        <h3 className="font-sans text-lg font-bold text-[#18181B] mb-2 leading-snug">
          <Link
            href={`/services/plugins/${plugin.slug}`}
            className="hover:text-[#C2410C] transition-colors"
          >
            {name}
          </Link>
        </h3>

        {thumb && !imgFailed && (
          <p className="font-mono-slug text-xs text-[#52525B] mb-3">{plugin.slug}</p>
        )}

        <ul className="space-y-1.5 mb-5 flex-1">
          {features.slice(0, 2).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-sm text-[#3F3F46] leading-snug">
              <Check size={15} className="text-[#15803D] mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="pt-3.5 border-t border-[#E2DBD0] flex items-center justify-between gap-3">
          <Link
            href={`/services/plugins/${plugin.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C2410C] hover:text-[#9A3412] transition-colors"
          >
            <span>{t.pluginsSpotlight.inspectBtn}</span>
            <DirectionalArrow size={15} />
          </Link>

          {plugin.downloadUrl && (
            <a
              href={plugin.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#52525B] hover:text-[#18181B]"
            >
              <span>Moodle.org</span>
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function FeaturedPluginsSection() {
  const { t, lang, isRTL } = useT();
  const { data: plugins = [] } = usePlugins();
  const [activeFilter, setActiveFilter] = useState<FilterId>("featured");

  const visiblePlugins = (() => {
    if (activeFilter === "featured") {
      const picked = FEATURED_SLUGS.map((slug) => plugins.find((p) => p.slug === slug)).filter(
        Boolean
      ) as Plugin[];
      return picked.slice(0, 6);
    }
    if (activeFilter === "free") {
      return plugins.filter((p) => p.free);
    }
    return plugins.filter((p) => p.category === activeFilter);
  })();

  return (
    <section
      id="plugins"
      className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FAF8F4]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
              {t.pluginsSpotlight.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] mb-3">
              {t.pluginsSpotlight.heading}{" "}
              <span className="text-[#581C87]">{t.pluginsSpotlight.headingHighlight}</span>
            </h2>
            <p className="text-base text-[#3F3F46] leading-relaxed">
              {t.pluginsSpotlight.subtitle}
            </p>
          </div>

          <Link
            href="/services/plugins"
            className="self-start lg:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-[#18181B] bg-white border border-[#C9C0B2] hover:bg-[#F2EEE6] transition-colors whitespace-nowrap"
          >
            <Puzzle size={15} className="text-[#C2410C]" aria-hidden="true" />
            <span>{t.pluginsSpotlight.viewAll}</span>
            <DirectionalArrow size={15} />
          </Link>
        </div>

        {/* Single-row scrollable filter bar */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8"
          role="group"
          aria-label={lang === "ar" ? "تصفية الإضافات حسب الفئة" : "Filter plugins by category"}
        >
          {FILTERS.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveFilter(f.id)}
                className={`flex-none px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                  active
                    ? "bg-[#18181B] text-white border-[#18181B]"
                    : "bg-white text-[#3F3F46] border-[#E2DBD0] hover:border-[#C9C0B2] hover:text-[#18181B]"
                }`}
              >
                {f[lang]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePlugins.map((plugin) => (
            <PluginSpotlightCard key={plugin.slug} plugin={plugin} />
          ))}
        </div>

        {/* Custom Plugin Callout Strip */}
        <div className="mt-10 rounded-2xl border border-[#E2DBD0] bg-[#F2EEE6] p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h3 className="font-sans text-lg font-bold text-[#18181B] mb-1">
              {t.pluginsSpotlight.requestCustom}
            </h3>
            <p className="text-sm text-[#3F3F46] max-w-2xl">
              {lang === "ar"
                ? `تصفح المكتبة الكاملة (${plugins.length} إضافة) مع مقارنة المميزات، أو تواصل معي لبناء إضافة موودل مخصصة لمدرستك أو منصتك.`
                : `Compare all ${plugins.length} Moodle plugins side-by-side, or share your workflow so I can build a custom plugin tailored to your LMS.`}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/services/plugins"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors"
            >
              <span>{t.pluginsSpotlight.viewAll}</span>
              <DirectionalArrow size={15} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#18181B] bg-white border border-[#C9C0B2] hover:bg-[#FAF8F4] transition-colors"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
