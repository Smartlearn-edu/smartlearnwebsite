import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Puzzle, Check, Search, X, BarChart2, ArrowUpRight,
  Tag as TagIcon, Coins, RotateCcw, Filter
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { CATEGORIES, CATEGORIES_AR, type Category, type CategoryAr, type Plugin } from "@/data/plugins";
import { usePlugins } from "@/hooks/usePlugins";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import { ComparisonBar, ComparisonModal } from "@/components/PluginCompare";

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
  theme:        { bg: "rgba(14,165,233,0.12)",  text: "#38bdf8" },
};

const FILTER_TAGS = [
  { id: "All", en: "All Tags", ar: "الكل" },
  { id: "AI", en: "AI", ar: "ذكاء اصطناعي" },
  { id: "Grade", en: "Grade", ar: "درجات" },
  { id: "Reporting", en: "Reporting", ar: "تقارير" },
  { id: "Profile", en: "Profile", ar: "الملف الشخصي" },
  { id: "Quiz", en: "Quiz", ar: "اختبارات" },
  { id: "Question", en: "Question", ar: "أسئلة" },
  { id: "Assignment", en: "Assignment", ar: "واجبات" },
  { id: "Auto-Grading", en: "Auto-Grading", ar: "تصحيح آلي" },
  { id: "Courses", en: "Courses", ar: "مقررات" },
  { id: "Enrollment", en: "Enrollment", ar: "تسجيل" },
  { id: "Payment", en: "Payment", ar: "دفع" },
  { id: "Security", en: "Security", ar: "أمان" },
  { id: "Analytics", en: "Analytics", ar: "تحليلات" },
  { id: "Theme & UI", en: "Theme & UI", ar: "قوالب وتصميم" },
];

const PRICE_RANGES = [
  { id: "all", en: "All Prices", ar: "جميع الأسعار" },
  { id: "free", en: "Free", ar: "مجاني" },
  { id: "0-20", en: "$0 – $20", ar: "0 – 20 $" },
  { id: "20-50", en: "$20 – $50", ar: "20 – 50 $" },
  { id: "50-100", en: "$50 – $100", ar: "50 – 100 $" },
  { id: "100-200", en: "$100 – $200", ar: "100 – 200 $" },
  { id: "200+", en: "> $200", ar: "أكثر من 200 $" },
];

function matchPrice(p: Plugin, rangeId: string): boolean {
  if (rangeId === "all") return true;
  if (rangeId === "free") {
    return p.free || p.price === null || p.price === 0;
  }
  const price = p.price ?? 0;
  if (rangeId === "0-20") {
    return !p.free && price > 0 && price <= 20;
  }
  if (rangeId === "20-50") {
    return !p.free && price >= 20 && price <= 50;
  }
  if (rangeId === "50-100") {
    return !p.free && price >= 50 && price <= 100;
  }
  if (rangeId === "100-200") {
    return !p.free && price >= 100 && price <= 200;
  }
  if (rangeId === "200+") {
    return !p.free && price > 200;
  }
  return true;
}

function matchTag(p: Plugin, tagId: string): boolean {
  if (tagId === "All") return true;
  const target = tagId.toLowerCase();
  const inEn = (p.tags ?? []).some((t) => t.toLowerCase() === target);
  const inAr = (p.tagsAr ?? []).some((t) => t.toLowerCase() === target);
  return inEn || inAr;
}

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
      subtitle: `${plugins.length} plugins across theme pages, quiz tools, activities, enrollment, and platform management — built to production standards for Moodle 4.0+.`,
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
      filterByPrice: "Price Range",
      filterByTag: "Filter by Tag",
      allTags: "All Tags",
      allPrices: "All Prices",
      clearFilters: "Reset All Filters",
      showing: "Showing",
      of: "of",
      pluginsCount: "plugins",
      noMatches: "No plugins match your search criteria.",
    },
    ar: {
      badge: "Smart Learn · الإضافات",
      title: "مكتبة إضافات ",
      titleGradient: "Moodle",
      subtitle: `${plugins.length} إضافة متقدمة تشمل القالب والصفحات الذكية، أدوات الواجبات والاختبارات، أنشطة التعلم، التسجيل وإدارة المنصة — مبنية بمعايير إنتاجية لـMoodle 4.0+.`,
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
      filterByPrice: "نطاق السعر",
      filterByTag: "تصفية بالوسم",
      allTags: "جميع الوسوم",
      allPrices: "جميع الأسعار",
      clearFilters: "إعادة ضبط الفلاتر",
      showing: "عرض",
      of: "من إجمالي",
      pluginsCount: "إضافات",
      noMatches: "لا توجد إضافات تطابق معايير الفلترة المحددة.",
    },
  };

  const hero = heroData[lang];

  const [activeEn, setActiveEn] = useState<Category>("All");
  const [activeAr, setActiveAr] = useState<CategoryAr>("الكل");
  const [activePriceRange, setActivePriceRange] = useState<string>("all");
  const [activeTag, setActiveTag] = useState<string>("All");

  const [showFree, setShowFree] = useState(true);
  const [showFreeSupport, setShowFreeSupport] = useState(true);
  const [showPaid, setShowPaid] = useState(true);

  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (slug: string) => {
    setCompareIds((prev) => {
      if (prev.includes(slug)) return prev.filter((id) => id !== slug);
      if (prev.length >= 3) return [...prev.slice(1), slug];
      return [...prev, slug];
    });
  };

  const selectedPlugins = compareIds
    .map((id) => plugins.find((p) => p.slug === id))
    .filter(Boolean) as Plugin[];

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

  const filtered = byType.filter((p) => {
    if (!matchPrice(p, activePriceRange)) return false;
    if (!matchTag(p, activeTag)) return false;
    if (q) {
      const name = (lang === "en" ? p.name : p.nameAr).toLowerCase();
      const desc = (lang === "en" ? p.description : p.descriptionAr).toLowerCase();
      const feats = (lang === "en" ? p.features : p.featuresAr).join(" ").toLowerCase();
      const tags = ((p.tags ?? []).join(" ") + " " + (p.tagsAr ?? []).join(" ")).toLowerCase();
      if (!name.includes(q) && !desc.includes(q) && !feats.includes(q) && !tags.includes(q)) {
        return false;
      }
    }
    return true;
  });

  const categories = lang === "en" ? CATEGORIES : CATEGORIES_AR;

  function setActive(cat: string) {
    if (lang === "en") setActiveEn(cat as Category);
    else setActiveAr(cat as CategoryAr);
  }

  const activeValue = lang === "en" ? activeEn : activeAr;

  const isFiltered =
    activeEn !== "All" ||
    activeAr !== "الكل" ||
    activePriceRange !== "all" ||
    activeTag !== "All" ||
    searchQuery.trim() !== "" ||
    !showFree ||
    !showFreeSupport ||
    !showPaid;

  const resetAllFilters = () => {
    setActiveEn("All");
    setActiveAr("الكل");
    setActivePriceRange("all");
    setActiveTag("All");
    setSearchQuery("");
    setShowFree(true);
    setShowFreeSupport(true);
    setShowPaid(true);
  };

  return (
    <>
      <Helmet>
        <title>Moodle Plugins — Smart Learn</title>
        <meta
          name="description"
          content={`${plugins.length} Moodle plugins by Mohammad Nabil: AI-powered learning tools, analytics dashboards, grade reports, payment gateways and more.`}
        />
        <link rel="canonical" href="https://services.smartlearn.education/services/plugins" />
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
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8" style={font}>
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

        {/* Sticky Categories Bar */}
        <div className="sticky top-16 z-40 px-6 py-3"
          style={{ backgroundColor: "rgba(7,7,15,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeValue === cat;
                const count =
                  lang === "en"
                    ? (cat === "All" ? plugins.length : plugins.filter((p) => p.category === cat).length)
                    : (cat === "الكل" ? plugins.length : plugins.filter((p) => p.categoryAr === cat).length);
                return (
                  <button key={cat} onClick={() => setActive(cat)}
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer"
                    style={{
                      background: isActive ? "linear-gradient(135deg, #6900A3, #a855f7)" : "rgba(255,255,255,0.04)",
                      border: isActive ? "1px solid rgba(168,85,247,0.4)" : "1px solid rgba(255,255,255,0.07)",
                      color: isActive ? "#fff" : "#94a3b8",
                      boxShadow: isActive ? "0 0 16px rgba(168,85,247,0.3)" : "none",
                      ...font,
                    }}>
                    {cat}
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: isActive ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.07)", color: isActive ? "#fff" : "#64748b" }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Filter Toolbar: Search, Price Range, and Tags */}
        <div className="px-6 pt-6 pb-2">
          <div className="max-w-6xl mx-auto space-y-4">
            {/* Top Toolbar Row: Search + Price Filter + Reset */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search
                  size={16}
                  className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "#64748b", [lang === "ar" ? "right" : "left"]: "1rem" }}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === "ar" ? "ابحث بالاسم، الوصف، أو الوسم..." : "Search by name, feature, or tag..."}
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
                    aria-label={lang === "ar" ? "مسح البحث" : "Clear search"}
                  >
                    <X size={15} style={{ color: "#64748b" }} />
                  </button>
                )}
              </div>

              {/* Price Range Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 flex-shrink-0 me-1" style={font}>
                  <Coins size={14} className="text-purple-400" />
                  {hero.filterByPrice}:
                </span>
                {PRICE_RANGES.map((pr) => {
                  const isSelected = activePriceRange === pr.id;
                  return (
                    <button
                      key={pr.id}
                      onClick={() => setActivePriceRange(pr.id)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer"
                      style={{
                        background: isSelected ? "rgba(168,85,247,0.25)" : "rgba(255,255,255,0.04)",
                        border: isSelected ? "1px solid rgba(168,85,247,0.6)" : "1px solid rgba(255,255,255,0.08)",
                        color: isSelected ? "#e9d5ff" : "#94a3b8",
                        ...font,
                      }}
                    >
                      {lang === "ar" ? pr.ar : pr.en}
                    </button>
                  );
                })}
              </div>

              {/* Clear all filters button */}
              {isFiltered && (
                <button
                  onClick={resetAllFilters}
                  className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer hover:bg-purple-950/40"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    color: "#f87171",
                    ...font,
                  }}
                >
                  <RotateCcw size={12} />
                  {hero.clearFilters}
                </button>
              )}
            </div>

            {/* Bottom Toolbar Row: Filter by Tag Chips */}
            <div className="pt-2 border-t border-white/[0.05] flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 flex-shrink-0 me-1" style={font}>
                <TagIcon size={13} className="text-purple-400" />
                {hero.filterByTag}:
              </span>
              {FILTER_TAGS.map((tItem) => {
                const isSelected = activeTag === tItem.id;
                const tagCount = tItem.id === "All"
                  ? byCat.length
                  : byCat.filter((p) => matchTag(p, tItem.id)).length;

                return (
                  <button
                    key={tItem.id}
                    onClick={() => setActiveTag((prev) => (prev === tItem.id ? "All" : tItem.id))}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                    style={{
                      background: isSelected ? "linear-gradient(135deg, #6900A3, #a855f7)" : "rgba(255,255,255,0.03)",
                      border: isSelected ? "1px solid rgba(168,85,247,0.5)" : "1px solid rgba(255,255,255,0.07)",
                      color: isSelected ? "#ffffff" : "#94a3b8",
                      boxShadow: isSelected ? "0 0 12px rgba(168,85,247,0.35)" : "none",
                      ...font,
                    }}
                  >
                    <span>{tItem.id !== "All" ? `#${lang === "ar" ? tItem.ar : tItem.en}` : (lang === "ar" ? tItem.ar : tItem.en)}</span>
                    <span
                      className="text-[10px] px-1.5 py-0.2 rounded-full"
                      style={{
                        background: isSelected ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.06)",
                        color: isSelected ? "#fff" : "#64748b",
                      }}
                    >
                      {tagCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active filter summary pill bar */}
            {isFiltered && (
              <div className="flex items-center justify-between gap-2 pt-1 text-xs text-slate-400" style={font}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-300">
                    {hero.showing} <strong className="text-purple-400 font-bold">{filtered.length}</strong> {hero.of} {plugins.length} {hero.pluginsCount}
                  </span>
                  {activeTag !== "All" && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium">
                      #{activeTag}
                      <button onClick={() => setActiveTag("All")} className="hover:text-white ms-1 cursor-pointer">×</button>
                    </span>
                  )}
                  {activePriceRange !== "all" && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium">
                      {PRICE_RANGES.find((pr) => pr.id === activePriceRange)?.[lang === "ar" ? "ar" : "en"]}
                      <button onClick={() => setActivePriceRange("all")} className="hover:text-white ms-1 cursor-pointer">×</button>
                    </span>
                  )}
                  {activeValue !== (lang === "en" ? "All" : "الكل") && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium">
                      {activeValue}
                      <button onClick={() => setActive(lang === "en" ? "All" : "الكل")} className="hover:text-white ms-1 cursor-pointer">×</button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery("")} className="hover:text-white ms-1 cursor-pointer">×</button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Plugin Cards Grid */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <PluginCardSkeleton key={i} />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-24 rounded-2xl border border-white/[0.05]" style={{ background: "rgba(255,255,255,0.02)" }}>
                <p className="text-slate-400 text-lg mb-4" style={font}>
                  {hero.noMatches}
                </p>
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #6900A3, #a855f7)",
                    boxShadow: "0 0 20px rgba(168,85,247,0.3)",
                    ...font,
                  }}
                >
                  <RotateCcw size={14} />
                  {hero.clearFilters}
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue + activePriceRange + activeTag + lang + q}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filtered.map((plugin, i) => (
                    <PluginCard
                      key={plugin.slug}
                      plugin={plugin}
                      i={i}
                      lang={lang}
                      hero={hero}
                      isCompared={compareIds.includes(plugin.slug)}
                      onToggleCompare={toggleCompare}
                      activeTag={activeTag}
                      onSelectTag={(clickedTag) => {
                        setActiveTag((prev) => (prev === clickedTag ? "All" : clickedTag));
                      }}
                    />
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
            <p className="text-slate-200 mb-8 leading-relaxed" style={font}>{hero.ctaDesc}</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 36px rgba(105,0,163,0.4)", ...font }}>
              {hero.ctaBtn} <DirectionalArrow size={16} />
            </a>
          </motion.div>
        </section>

        <footer className="py-8 px-6 text-center border-t border-white/[0.04]">
          <p className="text-sm text-slate-600" style={font}>© {new Date().getFullYear()} {t.footer}</p>
        </footer>

        <ComparisonBar
          selected={selectedPlugins}
          onClear={() => setCompareIds([])}
          onRemove={(slug) => setCompareIds((prev) => prev.filter((id) => id !== slug))}
          onCompare={() => setShowCompareModal(true)}
        />
      </div>

      <AnimatePresence>
        {showCompareModal && (
          <ComparisonModal
            selected={selectedPlugins}
            onClose={() => setShowCompareModal(false)}
            onClear={() => { setCompareIds([]); setShowCompareModal(false); }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function PluginCardSkeleton() {
  return (
    <div
      className="rounded-2xl flex flex-col overflow-hidden animate-pulse"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div
        className="w-full flex-shrink-0"
        style={{ height: 160, background: "rgba(255,255,255,0.06)" }}
      />
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <div className="h-5 rounded-lg" style={{ background: "rgba(255,255,255,0.08)", width: "75%" }} />
            <div className="flex gap-2">
              <div className="h-3.5 w-14 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="h-3.5 w-20 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>
          </div>
          <div className="h-6 w-16 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>
        <div className="flex-1 space-y-2.5">
          {[80, 65, 72, 55].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }} />
              <div className="h-3 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type HeroStrings = {
  comingSoon: string; freeBadge: string; freeSupportBadge: string; premiumBadge: string;
  getPlugin: string; contactPricing: string; learnMore: string;
};

const titleThemes = [
  { text: "#fde047", border: "rgba(253, 224, 71, 0.35)", dot: "#facc15", badgeBg: "rgba(250, 204, 21, 0.15)", badgeText: "#fef08a" },
  { text: "#f472b6", border: "rgba(244, 114, 182, 0.35)", dot: "#ec4899", badgeBg: "rgba(236, 72, 153, 0.15)", badgeText: "#fbcfe8" },
  { text: "#38bdf8", border: "rgba(56, 189, 248, 0.35)", dot: "#0ea5e9", badgeBg: "rgba(14, 165, 233, 0.15)", badgeText: "#bae6fd" },
  { text: "#4ade80", border: "rgba(74, 222, 128, 0.35)", dot: "#22c55e", badgeBg: "rgba(34, 197, 94, 0.15)", badgeText: "#bbf7d0" },
  { text: "#fb923c", border: "rgba(251, 146, 60, 0.35)", dot: "#f97316", badgeBg: "rgba(249, 115, 22, 0.15)", badgeText: "#fed7aa" },
  { text: "#c084fc", border: "rgba(192, 132, 252, 0.35)", dot: "#a855f7", badgeBg: "rgba(168, 85, 247, 0.15)", badgeText: "#e9d5ff" },
];

function PluginCard({
  plugin, i, lang, hero, isCompared, onToggleCompare, activeTag, onSelectTag,
}: {
  plugin: Plugin;
  i: number;
  lang: "en" | "ar";
  hero: HeroStrings;
  isCompared: boolean;
  onToggleCompare: (slug: string) => void;
  activeTag?: string;
  onSelectTag?: (tag: string) => void;
}) {
  const typeStyle = typeColors[plugin.type] ?? { bg: "rgba(168,85,247,0.1)", text: "#c084fc" };
  const name = lang === "en" ? plugin.name : plugin.nameAr;
  const features = lang === "en" ? plugin.features : plugin.featuresAr;
  const thumbnail = plugin.images?.[0];
  const compareLabel = lang === "ar" ? "قارن" : "Compare";
  const theme = titleThemes[i % titleThemes.length];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
      className="group rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: isCompared ? "1px solid rgba(168,85,247,0.6)" : "1px solid rgba(255,255,255,0.07)",
      }}>

      {/* Clickable Thumbnail */}
      <div className="relative w-full overflow-hidden flex-shrink-0"
        style={{ height: 160, background: "rgba(105,0,163,0.08)" }}>
        <Link href={`/services/plugins/${plugin.slug}`} className="block w-full h-full cursor-pointer">
          {thumbnail ? (
            <img
              src={`/plugins/${plugin.slug}/${thumbnail}`}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ display: "block" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.parentElement as HTMLElement).style.background =
                  "linear-gradient(135deg, rgba(105,0,163,0.15), rgba(168,85,247,0.08))";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, rgba(105,0,163,0.15), rgba(168,85,247,0.08))" }}>
              <span className="text-3xl opacity-30">🔌</span>
            </div>
          )}
        </Link>

        {/* Compare toggle button */}
        <button
          onClick={(e) => { e.preventDefault(); onToggleCompare(plugin.slug); }}
          className="absolute top-2 start-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 hover:scale-105 z-10 cursor-pointer"
          style={{
            background: isCompared ? "rgba(168,85,247,0.9)" : "rgba(13,13,26,0.75)",
            border: isCompared ? "1px solid rgba(168,85,247,0.8)" : "1px solid rgba(255,255,255,0.15)",
            color: isCompared ? "#fff" : "#94a3b8",
            backdropFilter: "blur(8px)",
            ...font,
          }}
          aria-label={`${compareLabel} ${name}`}
          aria-pressed={isCompared}
        >
          <BarChart2 size={11} />
          {compareLabel}
        </button>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title Button Box with Dark Background & Vibrant Border/Text */}
        <div className="mb-3.5">
          <Link
            href={`/services/plugins/${plugin.slug}`}
            className="group/title flex items-center justify-between gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            style={{
              background: "rgba(6, 6, 12, 0.95)",
              border: `1px solid ${theme.border}`,
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.45)",
            }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover/title:scale-125"
                style={{ backgroundColor: theme.dot, boxShadow: `0 0 8px ${theme.dot}` }}
              />
              <h3
                className="text-base md:text-lg font-black tracking-tight truncate transition-all duration-200"
                style={{ color: theme.text, ...font }}
              >
                {name}
              </h3>
            </div>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 group-hover/title:scale-110 flex-shrink-0"
              style={{
                background: theme.badgeBg,
                border: `1px solid ${theme.border}`,
                color: theme.badgeText,
              }}
            >
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>

        {/* Badges row: Type + Moodle + Price status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md"
              style={{ background: typeStyle.bg, color: typeStyle.text, fontFamily: "monospace" }}>
              {plugin.type}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.05)", color: "#94a3b8", ...font }}>
              {plugin.moodle}
            </span>
            {plugin.price !== null && plugin.price > 0 && !plugin.free && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-md"
                style={{ background: "rgba(168,85,247,0.12)", color: "#d8b4fe", ...font }}>
                ${plugin.price}
              </span>
            )}
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

        {/* Clickable Tag Badges */}
        {plugin.tags && plugin.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
            {plugin.tags.map((t, tidx) => {
              const tAr = plugin.tagsAr?.[tidx] ?? t;
              const displayTag = lang === "ar" ? tAr : t;
              const isSelected = activeTag === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTag?.(t);
                  }}
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-md transition-all duration-150 cursor-pointer"
                  style={{
                    background: isSelected ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isSelected ? "rgba(168,85,247,0.6)" : "rgba(255,255,255,0.08)"}`,
                    color: isSelected ? "#e9d5ff" : "#94a3b8",
                    ...font,
                  }}
                >
                  #{displayTag}
                </button>
              );
            })}
          </div>
        )}

        {/* Feature List */}
        <div className="flex-1">
          {plugin.placeholder && (!features || features.length === 0) ? (
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
              style={{ background: "rgba(105,0,163,0.08)", border: "1px solid rgba(168,85,247,0.15)", color: "#7c3aed", ...font }}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse inline-block flex-shrink-0" />
              <span style={{ color: "#94a3b8" }}>{hero.comingSoon}</span>
            </div>
          ) : (
            <ul className="space-y-2">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-2">
                  <Check size={13} className="flex-shrink-0 mt-1" style={{ color: "#a855f7" }} />
                  <span className="text-sm text-slate-300 leading-relaxed" style={font}>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
