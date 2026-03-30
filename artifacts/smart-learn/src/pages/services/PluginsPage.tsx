import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Puzzle, Check, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { CATEGORIES, CATEGORIES_AR, type Category, type CategoryAr, type Plugin } from "@/data/plugins";
import { usePlugins } from "@/hooks/usePlugins";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const typeColors: Record<string, { bg: string; text: string }> = {
  local:        { bg: "rgba(59,130,246,0.12)",  text: "#93c5fd" },
  mod:          { bg: "rgba(16,185,129,0.12)",  text: "#6ee7b7" },
  report:       { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  gradereport:  { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  paygw:        { bg: "rgba(236,72,153,0.12)",  text: "#f9a8d4" },
  enrol:        { bg: "rgba(168,85,247,0.12)",  text: "#c084fc" },
};

export function PluginsPage() {
  const { lang, t } = useT();
  const { data: plugins = [], isPlaceholderData: isLoading } = usePlugins();
  const [searchQuery, setSearchQuery] = useState("");

  const purelyFreeCount = plugins.filter((p) => p.free && !p.paidSupport).length;
  const freeSupportCount = plugins.filter((p) => p.free && p.paidSupport).length;
  const premiumCount = plugins.filter((p) => !p.free).length;

  const heroData = {
    en: {
      badge: "Smart Learn · Plugins",
      title: "Moodle ",
      titleGradient: "Plugin Library",
      subtitle: `${plugins.length} plugins across AI, analytics, content tools, and platform management — built to production standards for Moodle 4.0+.`,
      freePlugins: `${purelyFreeCount} Free Plugins`,
      freeSupportPlugins: `${freeSupportCount} Free + Support`,
      premiumPlugins: `${premiumCount} Premium Plugins`,
      ctaTitle: "Interested in a plugin?",
      ctaDesc: "Get in touch and I'll provide pricing, installation details, and a demo for any plugin you need.",
      ctaBtn: "Get in Touch",
      comingSoon: "Full details coming soon — contact me to learn more.",
      freeBadge: "Free",
      freeSupportBadge: "Free + Support",
      premiumBadge: "Premium",
      getPlugin: "Get Plugin",
      contactPricing: "Contact for Pricing",
      learnMore: "Learn More",
    },
    ar: {
      badge: "Smart Learn · الإضافات",
      title: "مكتبة إضافات ",
      titleGradient: "Moodle",
      subtitle: `${plugins.length} إضافة في مجالات الذكاء الاصطناعي والتحليلات وأدوات المحتوى وإدارة المنصة — مبنية بمعايير إنتاجية لـMoodle 4.0+.`,
      freePlugins: `${purelyFreeCount} إضافة مجانية`,
      freeSupportPlugins: `${freeSupportCount} مجاني مع دعم`,
      premiumPlugins: `${premiumCount} إضافة مميزة`,
      ctaTitle: "مهتم بإضافة معينة؟",
      ctaDesc: "تواصل معي وسأقدم لك التسعير وتفاصيل التثبيت وعرضاً توضيحياً لأي إضافة تحتاجها.",
      ctaBtn: "تواصل معي",
      comingSoon: "التفاصيل الكاملة قريباً — تواصل معي لمعرفة المزيد.",
      freeBadge: "مجاني",
      freeSupportBadge: "مجاني + دعم",
      premiumBadge: "مميز",
      getPlugin: "احصل على الإضافة",
      contactPricing: "تواصل للتسعير",
      learnMore: "اعرف المزيد",
    },
  };

  const hero = heroData[lang];

  const [activeEn, setActiveEn] = useState<Category>("All");
  const [activeAr, setActiveAr] = useState<CategoryAr>("الكل");
  const [showFree, setShowFree] = useState(true);
  const [showFreeSupport, setShowFreeSupport] = useState(true);
  const [showPaid, setShowPaid] = useState(true);

  const byCat =
    lang === "en"
      ? activeEn === "All"
        ? plugins
        : plugins.filter((p) => p.category === activeEn)
      : activeAr === "الكل"
      ? plugins
      : plugins.filter((p) => p.categoryAr === activeAr);

  const allOff = !showFree && !showFreeSupport && !showPaid;
  const byType = allOff
    ? byCat
    : byCat.filter((p) => {
        if (!p.free) return showPaid;
        if (p.paidSupport) return showFreeSupport;
        return showFree;
      });

  const q = searchQuery.trim().toLowerCase();
  const filtered = q
    ? byType.filter((p) =>
        (lang === "en" ? p.name : p.nameAr).toLowerCase().includes(q)
      )
    : byType;

  const categories = lang === "en" ? CATEGORIES : CATEGORIES_AR;

  function setActive(cat: string) {
    if (lang === "en") setActiveEn(cat as Category);
    else setActiveAr(cat as CategoryAr);
  }

  const activeValue = lang === "en" ? activeEn : activeAr;

  return (
    <>
      <Helmet>
        <title>Moodle Plugins — Smart Learn</title>
        <meta
          name="description"
          content={`${plugins.length} Moodle plugins by Mohammad Nabil: AI-powered learning tools, analytics dashboards, grade reports, payment gateways and more.`}
        />
        <link rel="canonical" href="https://home.smartlearn.education/services/plugins" />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(105,0,163,0.2) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}>
              <Puzzle size={28} style={{ color: "#a855f7" }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(105,0,163,0.15)", border: "1px solid rgba(168,85,247,0.3)", color: "#c084fc", ...font }}>
              {hero.badge}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-4" style={font}>
              {hero.title}<span style={gradientText}>{hero.titleGradient}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8" style={font}>
              {hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-4 flex-wrap">
              {/* Free checkbox filter */}
              <button
                onClick={() => setShowFree((v) => !v)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer"
                style={{
                  background: showFree ? "rgba(34,197,94,0.15)" : "rgba(34,197,94,0.04)",
                  border: `1px solid ${showFree ? "rgba(34,197,94,0.5)" : "rgba(34,197,94,0.15)"}`,
                  color: showFree ? "#4ade80" : "#4ade8066",
                  opacity: showFree ? 1 : 0.6,
                  ...font,
                }}
              >
                <span
                  className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: showFree ? "#4ade80" : "transparent",
                    border: `2px solid ${showFree ? "#4ade80" : "rgba(74,222,128,0.4)"}`,
                  }}
                >
                  {showFree && <Check size={10} color="#000" strokeWidth={3} />}
                </span>
                {hero.freePlugins}
              </button>

              {/* Free + Support checkbox filter */}
              <button
                onClick={() => setShowFreeSupport((v) => !v)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer"
                style={{
                  background: showFreeSupport ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.04)",
                  border: `1px solid ${showFreeSupport ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.15)"}`,
                  color: showFreeSupport ? "#fbbf24" : "#fbbf2466",
                  opacity: showFreeSupport ? 1 : 0.6,
                  ...font,
                }}
              >
                <span
                  className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: showFreeSupport ? "#f59e0b" : "transparent",
                    border: `2px solid ${showFreeSupport ? "#f59e0b" : "rgba(245,158,11,0.4)"}`,
                  }}
                >
                  {showFreeSupport && <Check size={10} color="#000" strokeWidth={3} />}
                </span>
                {hero.freeSupportPlugins}
              </button>

              {/* Premium checkbox filter */}
              <button
                onClick={() => setShowPaid((v) => !v)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer"
                style={{
                  background: showPaid ? "rgba(168,85,247,0.15)" : "rgba(168,85,247,0.04)",
                  border: `1px solid ${showPaid ? "rgba(168,85,247,0.5)" : "rgba(168,85,247,0.15)"}`,
                  color: showPaid ? "#c084fc" : "#c084fc66",
                  opacity: showPaid ? 1 : 0.6,
                  ...font,
                }}
              >
                <span
                  className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: showPaid ? "#a855f7" : "transparent",
                    border: `2px solid ${showPaid ? "#a855f7" : "rgba(168,85,247,0.4)"}`,
                  }}
                >
                  {showPaid && <Check size={10} color="#fff" strokeWidth={3} />}
                </span>
                {hero.premiumPlugins}
              </button>
            </motion.div>
          </div>
        </section>

        {/* Search input */}
        <div className="px-6 pb-4 -mt-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative max-w-md">
              <Search
                size={16}
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "#64748b", [lang === "ar" ? "right" : "left"]: "1rem" }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === "ar" ? "ابحث عن إضافة..." : "Search plugins..."}
                className="w-full py-2.5 rounded-xl text-sm text-white outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  fontFamily: "'Cairo', sans-serif",
                  paddingLeft: lang === "ar" ? "1rem" : "2.75rem",
                  paddingRight: lang === "ar" ? "2.75rem" : "1rem",
                  direction: lang === "ar" ? "rtl" : "ltr",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
                  style={{ [lang === "ar" ? "left" : "right"]: "0.75rem" }}
                  aria-label="Clear search"
                >
                  <X size={15} style={{ color: "#64748b" }} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="sticky top-16 z-40 px-6 py-3"
          style={{ backgroundColor: "rgba(7,7,15,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
              {categories.map((cat) => {
                const isActive = activeValue === cat;
                const count =
                  lang === "en"
                    ? (cat === "All" ? plugins.length : plugins.filter((p) => p.category === cat).length)
                    : (cat === "الكل" ? plugins.length : plugins.filter((p) => p.categoryAr === cat).length);
                return (
                  <button key={cat} onClick={() => setActive(cat)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                    style={{
                      background: isActive ? "linear-gradient(135deg, #6900A3, #a855f7)" : "rgba(255,255,255,0.04)",
                      border: isActive ? "1px solid transparent" : "1px solid rgba(255,255,255,0.07)",
                      color: isActive ? "#fff" : "#94a3b8",
                      ...font,
                    }}>
                    {cat}
                    <span className="text-xs px-1.5 py-0.5 rounded-full"
                      style={{ background: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)", color: isActive ? "#fff" : "#64748b" }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <PluginCardSkeleton key={i} />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-slate-500 text-lg" style={font}>
                  {lang === "ar" ? "لا توجد إضافات تطابق بحثك." : "No plugins match your search."}
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "#a855f7", fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar" ? "مسح البحث" : "Clear search"}
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div key={activeValue + lang + q} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((plugin, i) => (
                    <PluginCard key={plugin.slug} plugin={plugin} i={i} lang={lang} hero={hero} />
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>

        <section className="py-16 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center rounded-2xl py-14 px-8"
            style={{ background: "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)", border: "1px solid rgba(168,85,247,0.25)" }}>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>{hero.ctaTitle}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>{hero.ctaDesc}</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 36px rgba(105,0,163,0.4)", ...font }}>
              {hero.ctaBtn} <DirectionalArrow size={16} />
            </a>
          </motion.div>
        </section>

        <footer className="py-8 px-6 text-center border-t border-white/[0.04]">
          <p className="text-sm text-slate-600" style={font}>© {new Date().getFullYear()} {t.footer}</p>
        </footer>
      </div>
    </>
  );
}

function PluginCardSkeleton() {
  return (
    <div
      className="rounded-2xl flex flex-col overflow-hidden animate-pulse"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Thumbnail */}
      <div
        className="w-full flex-shrink-0"
        style={{ height: 160, background: "rgba(255,255,255,0.06)" }}
      />

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Title + badges row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <div className="h-4 rounded-lg" style={{ background: "rgba(255,255,255,0.08)", width: "75%" }} />
            <div className="flex gap-2">
              <div className="h-3 w-14 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="h-3 w-20 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>
          </div>
          <div className="h-6 w-16 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* Feature list */}
        <div className="flex-1 space-y-2.5">
          {[80, 65, 72, 55].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }} />
              <div className="h-3 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", width: `${w}%` }} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="h-10 rounded-xl mt-1" style={{ background: "rgba(168,85,247,0.12)" }} />
      </div>
    </div>
  );
}

type HeroStrings = {
  comingSoon: string; freeBadge: string; freeSupportBadge: string; premiumBadge: string;
  getPlugin: string; contactPricing: string; learnMore: string;
};

function PluginCard({ plugin, i, lang, hero }: { plugin: Plugin; i: number; lang: "en" | "ar"; hero: HeroStrings }) {
  const typeStyle = typeColors[plugin.type] ?? { bg: "rgba(168,85,247,0.1)", text: "#c084fc" };
  const name = lang === "en" ? plugin.name : plugin.nameAr;
  const features = lang === "en" ? plugin.features : plugin.featuresAr;
  const thumbnail = plugin.images?.[0];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
      className="rounded-2xl flex flex-col overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>

      {/* Thumbnail */}
      <div className="w-full overflow-hidden flex-shrink-0"
        style={{ height: 160, background: "rgba(105,0,163,0.08)" }}>
        {thumbnail ? (
          <img
            src={`/plugins/${plugin.slug}/${thumbnail}`}
            alt={name}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              (e.currentTarget.parentElement as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(105,0,163,0.15), rgba(168,85,247,0.08))";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(105,0,163,0.15), rgba(168,85,247,0.08))" }}>
            <span className="text-3xl opacity-30">🔌</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-black text-white leading-snug mb-2" style={font}>{name}</h3>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md"
              style={{ background: typeStyle.bg, color: typeStyle.text, fontFamily: "monospace" }}>
              {plugin.type}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.05)", color: "#64748b", ...font }}>
              {plugin.moodle}
            </span>
          </div>
        </div>
        {!plugin.free ? (
          <span className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{ background: "rgba(105,0,163,0.2)", border: "1px solid rgba(168,85,247,0.4)", color: "#c084fc", ...font }}>
            {hero.premiumBadge}
          </span>
        ) : plugin.paidSupport ? (
          <span className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", color: "#fbbf24", ...font }}>
            {hero.freeSupportBadge}
          </span>
        ) : (
          <span className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80", ...font }}>
            {hero.freeBadge}
          </span>
        )}
      </div>

      <div className="flex-1 mb-5">
        {plugin.placeholder ? (
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
            style={{ background: "rgba(105,0,163,0.08)", border: "1px solid rgba(168,85,247,0.15)", color: "#7c3aed", ...font }}>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse inline-block flex-shrink-0" />
            <span style={{ color: "#94a3b8" }}>{hero.comingSoon}</span>
          </div>
        ) : (
          <ul className="space-y-2">
            {features.map((feat) => (
              <li key={feat} className="flex items-start gap-2">
                <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }} />
                <span className="text-xs text-slate-400 leading-relaxed" style={font}>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link href={`/services/plugins/${plugin.slug}`}
        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}>
        {hero.learnMore}
        <DirectionalArrow size={13} />
      </Link>
      </div>
    </motion.div>
  );
}
