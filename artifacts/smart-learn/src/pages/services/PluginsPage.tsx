import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Puzzle, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { plugins, CATEGORIES, CATEGORIES_AR, type Category, type CategoryAr, type Plugin } from "@/data/plugins";
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

const freeCount = plugins.filter((p) => p.free).length;
const premiumCount = plugins.filter((p) => !p.free).length;

const heroData = {
  en: {
    badge: "Smart Learn · Plugins",
    title: "Moodle ",
    titleGradient: "Plugin Library",
    subtitle: `${plugins.length} plugins across AI, analytics, content tools, and platform management — built to production standards for Moodle 4.0+.`,
    freePlugins: `${freeCount} Free Plugins`,
    premiumPlugins: `${premiumCount} Premium Plugins`,
    ctaTitle: "Interested in a plugin?",
    ctaDesc: "Get in touch and I'll provide pricing, installation details, and a demo for any plugin you need.",
    ctaBtn: "Get in Touch",
    comingSoon: "Full details coming soon — contact me to learn more.",
    freeBadge: "Free",
    premiumBadge: "Premium",
    getPlugin: "Get Plugin",
    contactPricing: "Contact for Pricing",
  },
  ar: {
    badge: "Smart Learn · الإضافات",
    title: "مكتبة إضافات ",
    titleGradient: "Moodle",
    subtitle: `${plugins.length} إضافة في مجالات الذكاء الاصطناعي والتحليلات وأدوات المحتوى وإدارة المنصة — مبنية بمعايير إنتاجية لـMoodle 4.0+.`,
    freePlugins: `${freeCount} إضافة مجانية`,
    premiumPlugins: `${premiumCount} إضافة مميزة`,
    ctaTitle: "مهتم بإضافة معينة؟",
    ctaDesc: "تواصل معي وسأقدم لك التسعير وتفاصيل التثبيت وعرضاً توضيحياً لأي إضافة تحتاجها.",
    ctaBtn: "تواصل معي",
    comingSoon: "التفاصيل الكاملة قريباً — تواصل معي لمعرفة المزيد.",
    freeBadge: "مجاني",
    premiumBadge: "مميز",
    getPlugin: "احصل على الإضافة",
    contactPricing: "تواصل للتسعير",
  },
};

export function PluginsPage() {
  const { lang, t } = useT();
  const hero = heroData[lang];

  const [activeEn, setActiveEn] = useState<Category>("All");
  const [activeAr, setActiveAr] = useState<CategoryAr>("الكل");

  const filtered =
    lang === "en"
      ? activeEn === "All"
        ? plugins
        : plugins.filter((p) => p.category === activeEn)
      : activeAr === "الكل"
      ? plugins
      : plugins.filter((p) => p.categoryAr === activeAr);

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
              className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80", ...font }}>
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                {hero.freePlugins}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)", color: "#c084fc", ...font }}>
                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                {hero.premiumPlugins}
              </div>
            </motion.div>
          </div>
        </section>

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
            <AnimatePresence mode="wait">
              <motion.div key={activeValue + lang} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((plugin, i) => (
                  <PluginCard key={plugin.slug} plugin={plugin} i={i} lang={lang} hero={hero} />
                ))}
              </motion.div>
            </AnimatePresence>
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

function PluginCard({ plugin, i, lang, hero }: { plugin: Plugin; i: number; lang: "en" | "ar"; hero: typeof heroData["en"] }) {
  const typeStyle = typeColors[plugin.type] ?? { bg: "rgba(168,85,247,0.1)", text: "#c084fc" };
  const name = lang === "en" ? plugin.name : plugin.nameAr;
  const features = lang === "en" ? plugin.features : plugin.featuresAr;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
      className="rounded-2xl p-6 flex flex-col"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>

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
        {plugin.free ? (
          <span className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80", ...font }}>
            {hero.freeBadge}
          </span>
        ) : (
          <span className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{ background: "rgba(105,0,163,0.2)", border: "1px solid rgba(168,85,247,0.4)", color: "#c084fc", ...font }}>
            {hero.premiumBadge}
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

      <a href="/#contact"
        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}>
        {plugin.free ? hero.getPlugin : hero.contactPricing}
        <DirectionalArrow size={13} />
      </a>
    </motion.div>
  );
}
