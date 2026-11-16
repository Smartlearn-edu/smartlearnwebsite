import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Puzzle, Check, Search, X, BarChart2, ArrowUpRight,
  Tag as TagIcon, Coins, RotateCcw, PlayCircle, Layers
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { CATEGORIES, CATEGORIES_AR, type Category, type CategoryAr, type Plugin } from "@/data/plugins";
import { usePlugins } from "@/hooks/usePlugins";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import { ComparisonBar, ComparisonModal } from "@/components/PluginCompare";
import { extractYouTubeId } from "@/lib/youtube";

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  local:       { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  mod:         { bg: "#ECFDF3", text: "#15803D", border: "#BBF7D0" },
  report:      { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" },
  gradereport: { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" },
  paygw:       { bg: "#FDF2F8", text: "#BE185D", border: "#FBCFE8" },
  enrol:       { bg: "#F5EFFA", text: "#581C87", border: "#E9D5FF" },
  theme:       { bg: "#FFF3EB", text: "#C2410C", border: "#FED7AA" },
};

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
  if (rangeId === "free") return p.free || p.price === null || p.price === 0;
  const price = p.price ?? 0;
  if (rangeId === "0-20") return !p.free && price > 0 && price <= 20;
  if (rangeId === "20-50") return !p.free && price >= 20 && price <= 50;
  if (rangeId === "50-100") return !p.free && price >= 50 && price <= 100;
  if (rangeId === "100-200") return !p.free && price >= 100 && price <= 200;
  if (rangeId === "200+") return !p.free && price > 200;
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
  const { lang, t, isRTL } = useT();
  const { data: plugins = [], isPlaceholderData: isLoading } = usePlugins();
  const [searchQuery, setSearchQuery] = useState("");

  const purelyFreeCount = plugins.filter((p) => p.free && !p.paidSupport).length;
  const freeSupportCount = plugins.filter((p) => p.free && p.paidSupport).length;
  const premiumCount = plugins.filter((p) => !p.free).length;

  const heroData = {
    en: {
      badge: "Smart Learn · Moodle Plugin Directory",
      title: "Moodle ",
      titleGradient: "Plugin Library",
      subtitle: `${plugins.length} production plugins across themes, AI grading, interactive activities, enrolment, and reporting — built to Moodle 4.0+ & 5.x standards.`,
      freePlugins: `${purelyFreeCount} Free Plugins`,
      freeSupportPlugins: `${freeSupportCount} Free + Support`,
      premiumPlugins: `${premiumCount} Commercial Plugins`,
      ctaTitle: "Need a plugin customized or built from scratch?",
      ctaDesc: "Share your Moodle version and workflow — I'll scope a clean, upgrade-safe plugin tailored to your institution.",
      ctaBtn: "Request Custom Plugin",
      comingSoon: "Full details coming soon — contact me to learn more.",
      freeBadge: "Free",
      freeSupportBadge: "Free + Support",
      premiumBadge: "Commercial",
      getPlugin: "Get Plugin",
      contactPricing: "Contact for Pricing",
      learnMore: "Learn More",
      filterByPrice: "Price",
      filterByTag: "Tags",
      allTags: "All Tags",
      allPrices: "All Prices",
      clearFilters: "Reset Filters",
      showing: "Showing",
      of: "of",
      pluginsCount: "plugins",
      noMatches: "No plugins match your current filters.",
    },
    ar: {
      badge: "Smart Learn · دليل إضافات موودل",
      title: "مكتبة إضافات ",
      titleGradient: "Moodle",
      subtitle: `${plugins.length} إضافة جاهزة للإنتاج تشمل القوالب والصفحات الذكية، أدوات التصحيح والاختبارات بالذكاء الاصطناعي، الأنشطة، التسجيل، والتقارير لـ Moodle 4.0+ و5.x.`,
      freePlugins: `${purelyFreeCount} إضافات مجانية`,
      freeSupportPlugins: `${freeSupportCount} مجاني مع دعم`,
      premiumPlugins: `${premiumCount} إضافة تجارية`,
      ctaTitle: "هل تحتاج تخصيص إضافة أو بناء إضافة من الصفر؟",
      ctaDesc: "شاركني إصدار موودل لديك وسير العمل المطلوب — وسأبني لك إضافة نظيفة وآمنة للترقيات المستقبلية.",
      ctaBtn: "اطلب إضافة مخصصة",
      comingSoon: "التفاصيل الكاملة قريباً — تواصل معي لمعرفة المزيد.",
      freeBadge: "مجانية",
      freeSupportBadge: "مجانية + دعم",
      premiumBadge: "تجارية",
      getPlugin: "احصل على الإضافة",
      contactPricing: "تواصل للتسعير",
      learnMore: "اعرف المزيد",
      filterByPrice: "السعر",
      filterByTag: "الوسوم",
      allTags: "جميع الوسوم",
      allPrices: "جميع الأسعار",
      clearFilters: "إعادة ضبط الفلاتر",
      showing: "عرض",
      of: "من إجمالي",
      pluginsCount: "إضافات",
      noMatches: "لا توجد إضافات تطابق معايير البحث المحددة.",
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
      const slug = p.slug.toLowerCase();
      const desc = (lang === "en" ? p.description : p.descriptionAr).toLowerCase();
      const feats = (lang === "en" ? p.features : p.featuresAr).join(" ").toLowerCase();
      const tags = ((p.tags ?? []).join(" ") + " " + (p.tagsAr ?? []).join(" ")).toLowerCase();
      if (!name.includes(q) && !slug.includes(q) && !desc.includes(q) && !feats.includes(q) && !tags.includes(q)) {
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
          content={`${plugins.length} Moodle plugins by Mohammad Nabil: SmartLearn Theme, AI grading tools, dashboards, grade reports, payment gateways and more.`}
        />
        <link rel="canonical" href="https://services.smartlearn.education/services/plugins" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />

        {/* Header */}
        <section className="pt-28 pb-12 px-5 sm:px-6 workbench-grid-bg border-b border-[#E2DBD0]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2DBD0] bg-white text-xs font-bold uppercase tracking-wider text-[#C2410C] mb-5">
              <Puzzle size={14} aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#18181B] mb-4">
              {hero.title}
              <span className="text-[#C2410C]">{hero.titleGradient}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3F3F46] max-w-2xl mx-auto leading-relaxed mb-7">
              {hero.subtitle}
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                type="button"
                aria-pressed={showFree}
                onClick={() => setShowFree((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                  showFree
                    ? "bg-[#ECFDF3] border-[#86EFAC] text-[#15803D]"
                    : "bg-white border-[#E2DBD0] text-[#52525B]"
                }`}
              >
                <Check size={14} aria-hidden="true" />
                <span>{hero.freePlugins}</span>
              </button>

              <button
                type="button"
                aria-pressed={showFreeSupport}
                onClick={() => setShowFreeSupport((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                  showFreeSupport
                    ? "bg-[#FFFBEB] border-[#FDE68A] text-[#B45309]"
                    : "bg-white border-[#E2DBD0] text-[#52525B]"
                }`}
              >
                <Check size={14} aria-hidden="true" />
                <span>{hero.freeSupportPlugins}</span>
              </button>

              <button
                type="button"
                aria-pressed={showPaid}
                onClick={() => setShowPaid((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                  showPaid
                    ? "bg-[#FFF3EB] border-[#FED7AA] text-[#C2410C]"
                    : "bg-white border-[#E2DBD0] text-[#52525B]"
                }`}
              >
                <Check size={14} aria-hidden="true" />
                <span>{hero.premiumPlugins}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Sticky Categories Bar */}
        <div
          className="sticky top-16 z-40 px-5 sm:px-6 py-3 border-b border-[#E2DBD0]"
          style={{ backgroundColor: "rgba(250, 248, 244, 0.94)", backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => {
                const isActive = activeValue === cat;
                const count =
                  lang === "en"
                    ? cat === "All"
                      ? plugins.length
                      : plugins.filter((p) => p.category === cat).length
                    : cat === "الكل"
                    ? plugins.length
                    : plugins.filter((p) => p.categoryAr === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(cat)}
                    className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#18181B] text-white border-[#18181B]"
                        : "bg-white text-[#3F3F46] border-[#E2DBD0] hover:border-[#C9C0B2] hover:text-[#18181B]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-[#F2EEE6] text-[#52525B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search, Price Range, and Tag Filter Toolbar */}
        <div className="px-5 sm:px-6 pt-6 pb-2">
          <div className="max-w-6xl mx-auto space-y-3">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search
                  size={16}
                  className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-[#52525B] start-3.5"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  aria-label={lang === "ar" ? "ابحث في الإضافات" : "Search plugins"}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === "ar" ? "ابحث بالاسم أو الكود البرمجي أو الوسم..." : "Search by name, slug, feature, or tag..."}
                  className="w-full py-2.5 ps-10 pe-9 rounded-xl text-sm text-[#18181B] bg-white border border-[#C9C0B2] placeholder:text-[#71717A] focus:border-[#C2410C]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute top-1/2 -translate-y-1/2 end-3 text-[#52525B] hover:text-[#18181B] cursor-pointer"
                    aria-label={lang === "ar" ? "مسح البحث" : "Clear search"}
                  >
                    <X size={15} aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <span className="text-xs font-bold text-[#52525B] flex items-center gap-1 flex-shrink-0 me-1">
                  <Coins size={14} className="text-[#C2410C]" aria-hidden="true" />
                  {hero.filterByPrice}:
                </span>
                {PRICE_RANGES.map((pr) => {
                  const isSelected = activePriceRange === pr.id;
                  return (
                    <button
                      key={pr.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setActivePriceRange(pr.id)}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#FFF3EB] border-[#C2410C] text-[#C2410C]"
                          : "bg-white border-[#E2DBD0] text-[#3F3F46] hover:border-[#C9C0B2]"
                      }`}
                    >
                      {lang === "ar" ? pr.ar : pr.en}
                    </button>
                  );
                })}
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <RotateCcw size={12} aria-hidden="true" />
                  <span>{hero.clearFilters}</span>
                </button>
              )}
            </div>

            <div className="pt-2 border-t border-[#E2DBD0] flex items-center gap-2 overflow-x-auto pb-1.5">
              <span className="text-xs font-bold text-[#52525B] flex items-center gap-1 flex-shrink-0 me-1">
                <TagIcon size={13} className="text-[#581C87]" aria-hidden="true" />
                {hero.filterByTag}:
              </span>
              {FILTER_TAGS.map((tItem) => {
                const isSelected = activeTag === tItem.id;
                const tagCount =
                  tItem.id === "All"
                    ? byCat.length
                    : byCat.filter((p) => matchTag(p, tItem.id)).length;

                return (
                  <button
                    key={tItem.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setActiveTag((prev) => (prev === tItem.id ? "All" : tItem.id))}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#581C87] border-[#581C87] text-white"
                        : "bg-white border-[#E2DBD0] text-[#3F3F46] hover:border-[#C9C0B2]"
                    }`}
                  >
                    <span>
                      {tItem.id !== "All"
                        ? `#${lang === "ar" ? tItem.ar : tItem.en}`
                        : lang === "ar"
                        ? tItem.ar
                        : tItem.en}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-[#F2EEE6] text-[#52525B]"
                      }`}
                    >
                      {tagCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {isFiltered && (
              <div className="text-xs text-[#52525B] pt-1">
                {hero.showing}{" "}
                <strong className="text-[#C2410C] font-bold">{filtered.length}</strong>{" "}
                {hero.of} {plugins.length} {hero.pluginsCount}
              </div>
            )}
          </div>
        </div>

        {/* Plugin Grid */}
        <section className="py-8 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-80 rounded-2xl border border-[#E2DBD0] bg-[#F2EEE6]" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 rounded-2xl border border-[#E2DBD0] bg-white">
                <p className="text-[#3F3F46] text-base mb-4">{hero.noMatches}</p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#C2410C] hover:bg-[#9A3412] cursor-pointer"
                >
                  <RotateCcw size={14} aria-hidden="true" />
                  <span>{hero.clearFilters}</span>
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((plugin) => (
                  <PluginCard
                    key={plugin.slug}
                    plugin={plugin}
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
              </div>
            )}
          </div>
        </section>

        {/* Bottom Custom Plugin CTA */}
        <section className="py-12 px-5 sm:px-6">
          <div className="max-w-3xl mx-auto text-center rounded-2xl py-10 px-6 sm:px-10 bg-[#F2EEE6] border border-[#E2DBD0]">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181B] mb-2.5">
              {hero.ctaTitle}
            </h2>
            <p className="text-[#3F3F46] mb-6 max-w-xl mx-auto leading-relaxed">{hero.ctaDesc}</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors"
            >
              <span>{hero.ctaBtn}</span>
              <DirectionalArrow size={16} />
            </a>
          </div>
        </section>

        <footer className="pt-8 pb-24 px-6 text-center border-t border-[#E2DBD0]">
          <p className="text-sm text-[#52525B]">© {new Date().getFullYear()} {t.footer}</p>
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
            onClear={() => {
              setCompareIds([]);
              setShowCompareModal(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

type HeroStrings = {
  comingSoon: string;
  freeBadge: string;
  freeSupportBadge: string;
  premiumBadge: string;
  getPlugin: string;
  contactPricing: string;
  learnMore: string;
};

function PluginCard({
  plugin,
  lang,
  hero,
  isCompared,
  onToggleCompare,
  activeTag,
  onSelectTag,
}: {
  plugin: Plugin;
  lang: "en" | "ar";
  hero: HeroStrings;
  isCompared: boolean;
  onToggleCompare: (slug: string) => void;
  activeTag?: string;
  onSelectTag?: (tag: string) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const typeStyle = typeColors[plugin.type] ?? { bg: "#F5EFFA", text: "#581C87", border: "#E9D5FF" };
  const name = lang === "en" ? plugin.name : plugin.nameAr;
  const features = lang === "en" ? plugin.features : plugin.featuresAr;
  const thumb = VERIFIED_PLUGIN_THUMBS[plugin.slug]
    ? VERIFIED_PLUGIN_THUMBS[plugin.slug]
    : plugin.images?.[0]
    ? `/plugins/${plugin.slug}/${plugin.images[0]}`
    : null;
  const hasVideo = Boolean(extractYouTubeId(plugin.videoUrl));
  const compareLabel = lang === "ar" ? "قارن" : "Compare";
  const videoLabel = lang === "ar" ? "فيديو" : "Video";

  return (
    <article
      className={`group rounded-2xl flex flex-col overflow-hidden bg-white border transition-all duration-150 ${
        isCompared ? "border-[#C2410C] ring-2 ring-[#C2410C]/15" : "border-[#E2DBD0] hover:border-[#C9C0B2] hover:shadow-md"
      }`}
    >
      {/* Visual header: Real screenshot OR clean architectural spec header */}
      <div className="relative w-full overflow-hidden flex-shrink-0 bg-[#F2EEE6] border-b border-[#E2DBD0]">
        <Link href={`/services/plugins/${plugin.slug}`} className="block w-full aspect-video">
          {thumb && !imgFailed ? (
            <img
              src={thumb}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center text-[#581C87] mb-2">
                <Layers size={18} aria-hidden="true" />
              </div>
              <span className="font-mono-slug text-xs font-semibold text-[#18181B]">
                {plugin.slug}
              </span>
              <span className="text-[11px] text-[#52525B] mt-0.5">{plugin.moodle}</span>
            </div>
          )}
        </Link>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onToggleCompare(plugin.slug);
          }}
          className={`absolute top-2.5 start-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors z-10 cursor-pointer ${
            isCompared
              ? "bg-[#C2410C] border-[#C2410C] text-white"
              : "bg-white/95 border-[#E2DBD0] text-[#3F3F46] hover:text-[#18181B]"
          }`}
          aria-label={`${compareLabel} ${name}`}
          aria-pressed={isCompared}
        >
          <BarChart2 size={12} aria-hidden="true" />
          <span>{compareLabel}</span>
        </button>

        {hasVideo && (
          <Link
            href={`/services/plugins/${plugin.slug}/video`}
            className="absolute top-2.5 end-2.5 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#18181B] text-white hover:bg-[#C2410C] transition-colors z-10"
            aria-label={`${videoLabel} — ${name}`}
          >
            <PlayCircle size={12} aria-hidden="true" />
            <span>{videoLabel}</span>
          </Link>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link
            href={`/services/plugins/${plugin.slug}`}
            className="font-sans text-lg font-bold text-[#18181B] hover:text-[#C2410C] transition-colors leading-snug flex-1"
          >
            {name}
          </Link>
          <Link
            href={`/services/plugins/${plugin.slug}`}
            aria-label={`${hero.learnMore} ${name}`}
            className="w-7 h-7 rounded-lg border border-[#E2DBD0] bg-[#FAF8F4] flex items-center justify-center text-[#52525B] group-hover:text-[#C2410C] flex-shrink-0"
          >
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <p className="font-mono-slug text-xs text-[#52525B] mb-3">{plugin.slug}</p>

        <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className="font-mono-slug text-xs font-bold px-2 py-0.5 rounded border"
              style={{
                background: typeStyle.bg,
                color: typeStyle.text,
                borderColor: typeStyle.border,
              }}
            >
              {plugin.type}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#FAF8F4] border border-[#E2DBD0] text-[#3F3F46]">
              {plugin.moodle}
            </span>
          </div>

          {!plugin.free ? (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFF3EB] border border-[#FED7AA] text-[#C2410C]">
              {plugin.price !== null && plugin.price > 0 ? `$${plugin.price}` : hero.premiumBadge}
            </span>
          ) : plugin.paidSupport ? (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309]">
              {hero.freeSupportBadge}
            </span>
          ) : (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#ECFDF3] border border-[#BBF7D0] text-[#15803D]">
              {hero.freeBadge}
            </span>
          )}
        </div>

        {plugin.tags && plugin.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
            {plugin.tags.map((tTag, tidx) => {
              const tAr = plugin.tagsAr?.[tidx] ?? tTag;
              const displayTag = lang === "ar" ? tAr : tTag;
              const isSelected = activeTag === tTag;
              return (
                <button
                  key={tTag}
                  type="button"
                  onClick={() => onSelectTag?.(tTag)}
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#581C87] border-[#581C87] text-white"
                      : "bg-[#FAF8F4] border-[#E2DBD0] text-[#52525B] hover:border-[#C9C0B2]"
                  }`}
                >
                  #{displayTag}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex-1">
          {plugin.placeholder && (!features || features.length === 0) ? (
            <div className="px-3 py-2.5 rounded-xl text-xs bg-[#F2EEE6] border border-[#E2DBD0] text-[#52525B]">
              {hero.comingSoon}
            </div>
          ) : (
            <ul className="space-y-1.5">
              {features.slice(0, 3).map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-sm text-[#3F3F46] leading-snug">
                  <Check size={14} className="flex-shrink-0 mt-0.5 text-[#15803D]" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
