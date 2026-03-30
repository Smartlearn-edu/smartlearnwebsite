import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, MessageCircle, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const WA_URL = "https://wa.me/201005822858";
const MAIL = "info@smartlearn.education";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7, #c084fc)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const SERVICES = [
  {
    icon: "🏗️",
    slug: "moodle-core",
    name: { en: "Moodle Setup & Maintenance", ar: "إعداد وصيانة Moodle" },
    price: { en: "From $150", ar: "يبدأ من $150" },
    priceNote: { en: "per project", ar: "لكل مشروع" },
    featured: false,
    inclusions: {
      en: [
        "Fresh Moodle installation on your server",
        "PHP / MySQL / NGINX server configuration",
        "Custom theme + branding setup",
        "Essential plugin installation & config",
        "SSL, caching & performance tuning",
        "30-day post-launch bug fix support",
      ],
      ar: [
        "تثبيت Moodle الجديد على خادمك",
        "إعداد خادم PHP / MySQL / NGINX",
        "ضبط القالب والهوية البصرية",
        "تثبيت الإضافات الأساسية وضبطها",
        "SSL والتخزين المؤقت وضبط الأداء",
        "دعم إصلاح الأخطاء 30 يوماً بعد الإطلاق",
      ],
    },
    waMsg: { en: "Hi, I'm interested in Moodle Setup & Maintenance service.", ar: "مرحباً، أريد الاستفسار عن خدمة إعداد وصيانة Moodle." },
  },
  {
    icon: "🧩",
    slug: "plugins",
    name: { en: "Plugin Development", ar: "تطوير الإضافات" },
    price: { en: "Contact for pricing", ar: "تواصل للتسعير" },
    priceNote: { en: "based on scope", ar: "حسب النطاق" },
    featured: true,
    inclusions: {
      en: [
        "Requirements analysis & technical spec",
        "Full Moodle-standard compliant source code",
        "Activity modules, blocks, local plugins, themes",
        "Code walkthrough & installation guide",
        "Bug fix warranty for 60 days",
        "Option to publish on Moodle.org",
      ],
      ar: [
        "تحليل المتطلبات والمواصفات التقنية",
        "كود كامل وفق معايير Moodle",
        "وحدات أنشطة، بلوكات، إضافات محلية، قوالب",
        "شرح الكود ودليل التثبيت",
        "ضمان إصلاح الأخطاء 60 يوماً",
        "خيار النشر على Moodle.org",
      ],
    },
    waMsg: { en: "Hi, I need a custom Moodle plugin built. Let me share the requirements.", ar: "مرحباً، أحتاج بناء إضافة Moodle مخصصة. دعني أشارك المتطلبات." },
  },
  {
    icon: "🤖",
    slug: "ai",
    name: { en: "AI Integration for Moodle", ar: "تكامل الذكاء الاصطناعي" },
    price: { en: "Contact for pricing", ar: "تواصل للتسعير" },
    priceNote: { en: "based on scope", ar: "حسب النطاق" },
    featured: false,
    inclusions: {
      en: [
        "RAG pipeline setup (OpenAI / local LLM)",
        "Course-specific AI chatbot deployment",
        "Video-to-Text lecture pipeline",
        "AI-assisted grading integration",
        "Admin analytics dashboard",
        "Team training & handoff documentation",
      ],
      ar: [
        "إعداد خط أنابيب RAG (OpenAI / LLM محلي)",
        "نشر روبوت محادثة خاص بكل مقرر",
        "خط معالجة الفيديو إلى نص",
        "تكامل التصحيح بمساعدة الذكاء الاصطناعي",
        "لوحة تحليلات للمسؤولين",
        "تدريب الفريق وتوثيق التسليم",
      ],
    },
    waMsg: { en: "Hi, I'm interested in AI integration for my Moodle platform.", ar: "مرحباً، أريد الاستفسار عن تكامل الذكاء الاصطناعي مع منصة Moodle لدي." },
  },
  {
    icon: "⚡",
    slug: "n8n",
    name: { en: "n8n Automation", ar: "أتمتة n8n" },
    price: { en: "Contact for pricing", ar: "تواصل للتسعير" },
    priceNote: { en: "based on scope", ar: "حسب النطاق" },
    featured: false,
    inclusions: {
      en: [
        "n8n server setup & configuration",
        "Moodle REST API integration",
        "Auto-grading & enrollment workflows",
        "Notification & reporting pipelines",
        "RAG system automation builds",
        "Full workflow documentation",
      ],
      ar: [
        "إعداد وتهيئة خادم n8n",
        "تكامل Moodle REST API",
        "سير عمل التصحيح والتسجيل التلقائي",
        "خطوط الإشعارات والتقارير",
        "بناء أتمتة أنظمة RAG",
        "توثيق كامل لسير العمل",
      ],
    },
    waMsg: { en: "Hi, I'd like to discuss n8n automation for my Moodle platform.", ar: "مرحباً، أريد مناقشة أتمتة n8n لمنصة Moodle لدي." },
  },
  {
    icon: "🎓",
    slug: "training",
    name: { en: "Training & Technical Support", ar: "التدريب والدعم الفني" },
    price: { en: "From $50", ar: "يبدأ من $50" },
    priceNote: { en: "per session", ar: "لكل جلسة" },
    featured: false,
    inclusions: {
      en: [
        "Customised curriculum for your team",
        "Live online training sessions",
        "Session recordings provided",
        "Admin & teacher-track programs",
        "Q&A + follow-up resources",
        "Ongoing monthly support retainers available",
      ],
      ar: [
        "منهج مخصص لفريقك",
        "جلسات تدريبية مباشرة عبر الإنترنت",
        "تسجيلات الجلسات مضمّنة",
        "برامج مسار المسؤولين والمعلمين",
        "أسئلة وأجوبة + موارد متابعة",
        "خطط دعم شهرية مستمرة متاحة",
      ],
    },
    waMsg: { en: "Hi, I'm interested in Moodle training for my team.", ar: "مرحباً، أريد الاستفسار عن تدريب Moodle لفريقي." },
  },
  {
    icon: "📱",
    slug: "mobile-app",
    name: { en: "Branded Moodle Mobile App", ar: "تطبيق Moodle بهويتك" },
    price: { en: "From $300", ar: "يبدأ من $300" },
    priceNote: { en: "one-time setup", ar: "رسوم إعداد لمرة واحدة" },
    featured: false,
    inclusions: {
      en: [
        "Android + iOS app with your branding",
        "Your logo, colors & custom login screen",
        "Direct LMS sign-in for your students",
        "Push notification configuration",
        "App store submission (Google Play + App Store)",
        "30-day post-launch support",
      ],
      ar: [
        "تطبيق Android + iOS بهويتك البصرية",
        "شعارك وألوانك وشاشة تسجيل دخول مخصصة",
        "تسجيل دخول مباشر لطلابك إلى منصتك",
        "إعداد الإشعارات الفورية",
        "نشر على المتاجر (Google Play + App Store)",
        "دعم 30 يوماً بعد الإطلاق",
      ],
    },
    waMsg: { en: "Hi, I'm interested in a branded Moodle mobile app for my institution.", ar: "مرحباً، أريد الاستفسار عن تطبيق Moodle بهوية مؤسستي." },
  },
];

const PAGE_TEXT = {
  en: {
    badge: "💰 Pricing",
    heading: "Simple, Transparent",
    headingGradient: "Pricing",
    subtitle: "Each service is scoped and quoted based on your specific requirements. Starting prices are shown where applicable — complex or custom work is quoted after a free discovery call.",
    contactPrice: "Contact for pricing",
    getQuote: "Get a Quote",
    chatWA: "Chat on WhatsApp",
    ctaHeading: "Have a custom project in mind?",
    ctaHeadingGradient: "Let's talk.",
    ctaDesc: "Not sure which service fits? Describe your platform and goals — I'll put together a scope and quote within 24 hours. No commitment required.",
    ctaWA: "Chat on WhatsApp",
    ctaMail: "Send an Email",
    pluginsNote: "Looking for individual plugin prices?",
    pluginsLink: "Browse the Plugins catalogue →",
    footerText: "Smart Learn · Mohammad Nabil · Egypt",
  },
  ar: {
    badge: "💰 الأسعار",
    heading: "أسعار بسيطة",
    headingGradient: "وشفافة",
    subtitle: "يُحدَّد كل مشروع ويُسعَّر بناءً على متطلباتك الخاصة. الأسعار المبدئية معروضة عند توفرها — المشاريع المعقدة أو المخصصة تُسعَّر بعد مكالمة استكشافية مجانية.",
    contactPrice: "تواصل للتسعير",
    getQuote: "احصل على سعر",
    chatWA: "تحدث على واتساب",
    ctaHeading: "هل لديك مشروع مخصص؟",
    ctaHeadingGradient: "لنتحدث.",
    ctaDesc: "غير متأكد من الخدمة المناسبة؟ صف منصتك وأهدافك — سأُعدّ النطاق والتسعير خلال 24 ساعة. لا يلزمك أي التزام.",
    ctaWA: "تحدث على واتساب",
    ctaMail: "راسلني بالبريد",
    pluginsNote: "تبحث عن أسعار الإضافات الفردية؟",
    pluginsLink: "← تصفّح كتالوج الإضافات",
    footerText: "Smart Learn · محمد نبيل · مصر",
  },
};

function PricingCard({
  service,
  lang,
  isRTL,
}: {
  service: (typeof SERVICES)[number];
  lang: "en" | "ar";
  isRTL: boolean;
}) {
  const txt = PAGE_TEXT[lang];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const isContact = service.price[lang] === PAGE_TEXT[lang].contactPrice || service.price.en === "Contact for pricing";

  const waLink = `${WA_URL}?text=${encodeURIComponent(service.waMsg[lang])}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: service.featured
          ? "linear-gradient(135deg, rgba(105,0,163,0.18) 0%, rgba(168,85,247,0.08) 100%)"
          : "rgba(255,255,255,0.03)",
        border: service.featured
          ? "1px solid rgba(168,85,247,0.4)"
          : "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {service.featured && (
        <div
          className="absolute top-0 inset-x-0 h-0.5"
          style={{ background: "linear-gradient(90deg, #6900A3, #a855f7, #c084fc)" }}
        />
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{service.icon}</span>
            <h3 className="text-base font-black text-white leading-snug" style={font}>
              {service.name[lang]}
            </h3>
          </div>
          {service.featured && (
            <span
              className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#c084fc",
                ...font,
              }}
            >
              {lang === "en" ? "Popular" : "الأكثر طلباً"}
            </span>
          )}
        </div>

        <div className="mb-5">
          <div className="text-2xl font-black text-white" style={font}>
            {isContact ? (
              <span style={{ color: "#a855f7" }}>{txt.contactPrice}</span>
            ) : (
              service.price[lang]
            )}
          </div>
          <div className="text-xs text-slate-500 mt-0.5" style={font}>
            {service.priceNote[lang]}
          </div>
        </div>

        <ul className="space-y-2 flex-1 mb-6">
          {service.inclusions[lang].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#a855f7" }}
              />
              <span className="text-sm text-slate-400 leading-snug" style={font}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{
            background: service.featured
              ? "linear-gradient(135deg, #6900A3, #a855f7)"
              : "rgba(255,255,255,0.05)",
            border: service.featured ? "none" : "1px solid rgba(168,85,247,0.25)",
            ...font,
          }}
        >
          <MessageCircle size={15} />
          {isContact ? txt.getQuote : txt.chatWA}
          <ArrowIcon size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export function PricingPage() {
  const { t, lang, isRTL } = useT();
  const txt = PAGE_TEXT[lang];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const waCustomLink = `${WA_URL}?text=${encodeURIComponent(
    lang === "ar"
      ? "مرحباً، لديّ مشروع مخصص أريد مناقشته."
      : "Hi, I have a custom project I'd like to discuss."
  )}`;

  return (
    <>
      <Helmet>
        <title>Pricing — Smart Learn | Mohammad Nabil Moodle Expert</title>
        <meta
          name="description"
          content="Transparent pricing for Moodle setup, AI integration, plugin development, n8n automation, training, and branded mobile apps. Contact for a custom quote."
        />
        <link rel="canonical" href="https://home.smartlearn.education/pricing" />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        <div className="pt-28 pb-20 px-6" dir={isRTL ? "rtl" : "ltr"}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span
                className="inline-block text-xs font-black tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
                style={{
                  color: "#a855f7",
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  ...font,
                }}
              >
                {txt.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-5" style={font}>
                {txt.heading}{" "}
                <span style={gradientText}>{txt.headingGradient}</span>
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed" style={font}>
                {txt.subtitle}
              </p>

              <div className="mt-5">
                <a
                  href="/services/plugins"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  style={font}
                >
                  {txt.pluginsNote}{" "}
                  <span className="underline underline-offset-2">{txt.pluginsLink}</span>
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {SERVICES.map((svc) => (
                <PricingCard key={svc.slug} service={svc} lang={lang} isRTL={isRTL} />
              ))}
            </div>

            <div
              className="max-w-6xl mx-auto mb-16"
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-10 md:p-14 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(105,0,163,0.14) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6"
                style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.2)" }}
              >
                💬
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3" style={font}>
                {txt.ctaHeading}{" "}
                <span style={gradientText}>{txt.ctaHeadingGradient}</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed" style={font}>
                {txt.ctaDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={waCustomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}
                >
                  <MessageCircle size={16} />
                  {txt.ctaWA}
                  <ArrowIcon size={14} />
                </a>
                <a
                  href={`mailto:${MAIL}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    ...font,
                  }}
                >
                  <Mail size={16} />
                  {txt.ctaMail}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <footer className="py-10 px-6 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
            <SocialLinks size="sm" />
            <p className="text-sm text-slate-600" style={font}>
              © {new Date().getFullYear()} {t.footer}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
