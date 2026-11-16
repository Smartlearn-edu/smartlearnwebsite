import { useEffect, useId, useRef, useState } from "react";
import { Link } from "wouter";
import { Check, Play, Puzzle } from "lucide-react";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";

interface ShowcaseItem {
  slug: string;
  tabLabel: { en: string; ar: string };
  title: { en: string; ar: string };
  moodle: string;
  priceLabel: { en: string; ar: string };
  isFree?: boolean;
  image: string;
  imageAlt: { en: string; ar: string };
  summary: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
}

const WORKBENCH_PLUGINS: ShowcaseItem[] = [
  {
    slug: "theme_smartlearn",
    tabLabel: { en: "SmartLearn Theme", ar: "قالب SmartLearn" },
    title: { en: "SmartLearn Moodle Theme", ar: "قالب SmartLearn لموودل" },
    moodle: "Moodle 4.5 – 5.2",
    priceLabel: { en: "$200 · One-time", ar: "$200 · دفعة واحدة" },
    image: "/plugins/theme_smartlearn/0.png",
    imageAlt: {
      en: "SmartLearn Moodle theme frontpage with live course search and dual light/dark mode",
      ar: "الواجهة الرئيسية لقالب SmartLearn لموودل مع شريط بحث فوري للمقررات",
    },
    summary: {
      en: "27 curated presets, drag-and-drop Smart Canvas page builder, and native Bootstrap 5.3 architecture.",
      ar: "٢٧ نمطاً جاهزاً، ومنشئ صفحات بالسحب والإفلات، وبنية Bootstrap 5.3 أصلية.",
    },
    highlights: {
      en: [
        "Instant zero-reload light/dark switcher with brand preset lock",
        "Automated Course JSON-LD rich snippets & agent discovery",
      ],
      ar: [
        "تحويل فوري بين الوضعين الليلي والنهاري مع تثبيت هوية الصفحة الرئيسية",
        "بيانات Schema.org تلقائية لتحسين ظهور المقررات في محركات البحث",
      ],
    },
  },
  {
    slug: "local_smartdashboard",
    tabLabel: { en: "Smart Dashboard", ar: "لوحة التحكم الذكية" },
    title: { en: "Smart Dashboard", ar: "لوحة التحكم الذكية للمستخدمين" },
    moodle: "Moodle 4.0+",
    priceLabel: { en: "$50 · One-time", ar: "$50 · دفعة واحدة" },
    image: "/plugins/local_smartdashboard/admin 1.png",
    imageAlt: {
      en: "Smart Dashboard admin role redirection settings inside Moodle",
      ar: "إعدادات توجيه الأدوار في إضافة لوحة التحكم الذكية داخل موودل",
    },
    summary: {
      en: "Dedicated dashboards for admins, teachers, mentors, and students via clean Moodle navigation hooks.",
      ar: "لوحات مخصصة للمديرين والمعلمين والمشرفين والطلاب عبر خطافات موودل الرسمية.",
    },
    highlights: {
      en: [
        "Role-based redirection without modifying any core Moodle files",
        "Actionable student progress, announcements, and mentor views",
      ],
      ar: [
        "توجيه تلقائي حسب دور المستخدم بدون لمس ملفات موودل الأساسية",
        "متابعة تقدم الطلاب والإعلانات وتقارير الإشراف من مكان واحد",
      ],
    },
  },
  {
    slug: "local_smartgradeai",
    tabLabel: { en: "Smart Grade AI", ar: "التصحيح الذكي AI" },
    title: { en: "Smart Grade AI", ar: "التصحيح الذكي للواجبات" },
    moodle: "Moodle 4.0+",
    priceLabel: { en: "Free on Moodle.org", ar: "مجانية على Moodle.org" },
    isFree: true,
    image: "/plugins/local_smartgradeai/ai-proposed-score.png",
    imageAlt: {
      en: "Smart Grade AI rubric score proposal waiting for teacher approval inside Moodle",
      ar: "مقترح درجات Rubric بالذكاء الاصطناعي بانتظار اعتماد المعلم داخل موودل",
    },
    summary: {
      en: "AI drafts rubric scores and criterion feedback for assignment submissions—teachers approve before saving.",
      ar: "يقترح الذكاء الاصطناعي درجات معايير التقييم والملاحظات ويعتمدها المعلم قبل الحفظ.",
    },
    highlights: {
      en: [
        "Human-in-the-loop: teachers approve, edit, or reject every score",
        "Works cleanly with Moodle rubrics and n8n grading workflows",
      ],
      ar: [
        "المعلم يتحكم دائماً: يعتمد أو يعدل أو يرفض كل درجة مقترحة",
        "متكاملة مع نماذج التقييم (Rubrics) وسير عمل n8n",
      ],
    },
  },
  {
    slug: "local_smartcatalog",
    tabLabel: { en: "Smart Catalog", ar: "كتالوج المقررات" },
    title: { en: "Smart Catalog", ar: "الكتالوج الذكي للمقررات" },
    moodle: "Moodle 4.0+",
    priceLabel: { en: "$50 · One-time", ar: "$50 · دفعة واحدة" },
    image: "/plugins/local_smartcatalog/1.png",
    imageAlt: {
      en: "Smart Catalog filterable course and program directory for Moodle",
      ar: "صفحة كتالوج المقررات والبرامج القابلة للتصفية داخل موودل",
    },
    summary: {
      en: "Turn Moodle's default course list into a fast, filterable catalog by category, teacher, and program.",
      ar: "حوّل قائمة مقررات موودل إلى كتالوج سريع قابل للتصفية حسب التخصص والمعلم والبرنامج.",
    },
    highlights: {
      en: [
        "Multi-filter discovery by teacher, program, and course attributes",
        "Clean quick-info cards built for enrollment conversion",
      ],
      ar: [
        "بحث وتصفية متعددة حسب المعلم والبرنامج وتصنيف المقرر",
        "بطاقات معلومات سريعة تساعد الطالب على اتخاذ قرار التسجيل",
      ],
    },
  },
];

function PluginWorkbench() {
  const { lang, isRTL } = useT();
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sync hidden="until-found" panels when browser find-in-page matches hidden content
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    panelRefs.current.forEach((panel, idx) => {
      if (!panel) return;
      const onBeforeMatch = () => setActiveIndex(idx);
      panel.addEventListener("beforematch", onBeforeMatch);
      cleanups.push(() => panel.removeEventListener("beforematch", onBeforeMatch));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  const selectAndFocusTab = (nextIndex: number) => {
    setActiveIndex(nextIndex);
    const btn = tabRefs.current[nextIndex];
    if (btn) {
      btn.focus();
      btn.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    const last = WORKBENCH_PLUGINS.length - 1;
    let next = idx;
    if (e.key === "ArrowRight") {
      next = isRTL ? (idx === 0 ? last : idx - 1) : (idx === last ? 0 : idx + 1);
    } else if (e.key === "ArrowLeft") {
      next = isRTL ? (idx === last ? 0 : idx + 1) : (idx === 0 ? last : idx - 1);
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = last;
    } else {
      return;
    }
    e.preventDefault();
    selectAndFocusTab(next);
  };

  return (
    <div className="rounded-2xl border border-[#E2DBD0] bg-white shadow-sm overflow-hidden">
      {/* Workbench top bar */}
      <div className="px-4 py-2.5 bg-[#F2EEE6] border-b border-[#E2DBD0] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Puzzle size={15} className="text-[#C2410C]" aria-hidden="true" />
          <span className="text-xs font-bold text-[#18181B]">
            {lang === "ar" ? "معاينة حية من إضافات Smart Learn" : "Inside Smart Learn Plugins"}
          </span>
        </div>
        <Link
          href="/demo-video"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#9A3412] transition-colors"
        >
          <Play size={12} className="fill-current" aria-hidden="true" />
          <span>{lang === "ar" ? "فيديو الاستعراض" : "60s Reel"}</span>
        </Link>
      </div>

      {/* Single-row accessible tablist */}
      <div
        role="tablist"
        aria-label={lang === "ar" ? "أبرز إضافات موودل" : "Featured Moodle plugins"}
        className="workbench-tablist px-3 bg-white"
      >
        {WORKBENCH_PLUGINS.map((item, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={item.slug}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${idx}`}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="workbench-tab"
            >
              {item.tabLabel[lang]}
            </button>
          );
        })}
      </div>

      {/* All tabpanels share a single grid cell; styling lives on inner wrapper per hidden=until-found guidance */}
      <div className="grid">
        {WORKBENCH_PLUGINS.map((item, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <div
              key={item.slug}
              ref={(el) => {
                panelRefs.current[idx] = el;
              }}
              role="tabpanel"
              id={`${baseId}-panel-${idx}`}
              aria-labelledby={`${baseId}-tab-${idx}`}
              tabIndex={isSelected ? 0 : undefined}
              hidden={isSelected ? undefined : ("until-found" as unknown as boolean)}
              className="col-start-1 row-start-1"
            >
              <div className="p-4 sm:p-5 bg-white">
                <div className="relative rounded-xl overflow-hidden border border-[#E2DBD0] bg-[#FAF8F4] aspect-video mb-4">
                  <img
                    src={item.image}
                    alt={item.imageAlt[lang]}
                    className="w-full h-full object-cover object-top"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-slug text-xs font-medium px-2 py-0.5 rounded bg-[#F2EEE6] text-[#18181B] border border-[#E2DBD0]">
                      {item.slug}
                    </span>
                    <span className="text-xs font-medium text-[#52525B]">{item.moodle}</span>
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                      item.isFree
                        ? "bg-[#ECFDF3] text-[#15803D] border-[#BBF7D0]"
                        : "bg-[#FFF3EB] text-[#C2410C] border-[#FED7AA]"
                    }`}
                  >
                    {item.priceLabel[lang]}
                  </span>
                </div>

                <h2 className="font-sans text-lg font-bold text-[#18181B] mb-1.5">
                  {item.title[lang]}
                </h2>
                <p className="text-sm text-[#3F3F46] leading-relaxed mb-3.5">
                  {item.summary[lang]}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {item.highlights[lang].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-[#3F3F46]">
                      <Check size={14} className="text-[#15803D] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#E2DBD0] flex items-center justify-between gap-3">
                  <Link
                    href={`/services/plugins/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C2410C] hover:text-[#9A3412] transition-colors"
                  >
                    <span>
                      {lang === "ar" ? "عرض تفاصيل الإضافة والصور" : "Inspect screenshots & specs"}
                    </span>
                    <DirectionalArrow size={15} />
                  </Link>
                  <Link
                    href="/services/plugins"
                    className="text-xs font-semibold text-[#52525B] hover:text-[#18181B] transition-colors"
                  >
                    {lang === "ar" ? "كل الإضافات (٢٢)" : "All 22 plugins"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HeroSection() {
  const { t, isRTL } = useT();

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 px-5 sm:px-6 workbench-grid-bg border-b border-[#E2DBD0]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Copy & Primary Plugin CTAs */}
        <div className="lg:col-span-6 text-center lg:text-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2DBD0] bg-white text-xs font-semibold text-[#3F3F46] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" aria-hidden="true" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#18181B] tracking-tight mb-5">
            {t.hero.title1}{" "}
            <span className="text-[#C2410C]">{t.hero.titleGradient}</span>{" "}
            {t.hero.title2}
          </h1>

          <p className="text-base sm:text-lg text-[#3F3F46] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
            <Link
              href="/services/plugins"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors shadow-sm"
            >
              <Puzzle size={16} aria-hidden="true" />
              <span>{t.hero.ctaPrimary}</span>
              <DirectionalArrow size={16} />
            </Link>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#18181B] bg-white border border-[#C9C0B2] hover:bg-[#F2EEE6] transition-colors"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Single authoritative proof bar */}
          <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2DBD0] max-w-lg mx-auto lg:mx-0">
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((s, idx) => (
              <div
                key={s.label}
                className={idx > 0 ? "border-s border-[#E2DBD0] ps-3 sm:ps-4" : ""}
              >
                <dt className="text-xs text-[#52525B] font-medium mb-0.5">{s.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-bold text-[#18181B]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Interactive Real-Screenshot Plugin Workbench */}
        <div className="lg:col-span-6 w-full">
          <PluginWorkbench />
        </div>
      </div>
    </section>
  );
}
