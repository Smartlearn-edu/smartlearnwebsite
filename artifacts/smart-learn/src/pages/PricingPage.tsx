import { Helmet } from "react-helmet-async";
import { Check, MessageCircle, Mail, ArrowRight, ArrowLeft, Layers } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const WA_URL = "https://wa.me/201005822858";
const MAIL = "support@smartlearn.education";

const SERVICES = [
  {
    slug: "plugins",
    name: { en: "Plugin Development", ar: "تطوير إضافات موودل" },
    price: { en: "From $50 / Custom", ar: "من $50 / حسب النطاق" },
    priceNote: { en: "ready-made licenses or bespoke builds", ar: "تراخيص جاهزة أو تطوير مخصص" },
    featured: true,
    inclusions: {
      en: [
        "Requirements analysis & technical spec",
        "100% Moodle-standard compliant source code",
        "Activity modules, blocks, local plugins, themes",
        "Full Arabic RTL & English support",
        "Code walkthrough & installation guide",
        "60-day post-launch bug warranty",
      ],
      ar: [
        "تحليل المتطلبات والمواصفات التقنية",
        "كود نظيف متوافق 100% مع معايير موودل",
        "وحدات أنشطة، إضافات محلية، قوالب، تقارير",
        "دعم كامل للغة العربية RTL والإنجليزية",
        "شرح الاستخدام ودليل التثبيت الكامل",
        "ضمان إصلاح الأخطاء لمدة ٦٠ يوماً",
      ],
    },
    waMsg: {
      en: "Hi, I need a custom Moodle plugin built or customized. Let me share the requirements.",
      ar: "مرحباً، أحتاج بناء أو تخصيص إضافة Moodle. دعني أشارك المتطلبات.",
    },
  },
  {
    slug: "moodle-core",
    name: { en: "Moodle Setup & Maintenance", ar: "إعداد وصيانة موودل" },
    price: { en: "From $150", ar: "يبدأ من $150" },
    priceNote: { en: "per project", ar: "لكل مشروع" },
    featured: false,
    inclusions: {
      en: [
        "Fresh Moodle installation on your server",
        "PHP / MariaDB / NGINX configuration",
        "Theme & institutional branding setup",
        "Essential plugin installation & tuning",
        "SSL, Redis caching & performance tuning",
        "30-day post-launch support",
      ],
      ar: [
        "تثبيت موودل النظيف على خادمك",
        "ضبط خادم PHP / MariaDB / NGINX",
        "إعداد القالب والهوية البصرية للمؤسسة",
        "تثبيت الإضافات الأساسية وتهيئتها",
        "SSL وRedis وضبط سرعة المنصة",
        "دعم فني 30 يوماً بعد الإطلاق",
      ],
    },
    waMsg: {
      en: "Hi, I'm interested in Moodle Setup & Maintenance service.",
      ar: "مرحباً، أريد الاستفسار عن خدمة إعداد وصيانة موودل.",
    },
  },
  {
    slug: "ai",
    name: { en: "AI Integration for Moodle", ar: "تكامل الذكاء الاصطناعي" },
    price: { en: "Contact for pricing", ar: "تواصل للتسعير" },
    priceNote: { en: "based on scope", ar: "حسب النطاق" },
    featured: false,
    inclusions: {
      en: [
        "Course-scoped RAG pipeline (OpenAI / Claude / local)",
        "Quiz & Assignment AI tutor deployment",
        "Video-to-Text lecture indexing",
        "Teacher-approved AI rubric grading",
        "Token-saving context controls",
        "Team training & documentation",
      ],
      ar: [
        "بناء خط RAG خاص بالمقررات",
        "تفعيل مساعد ذكي داخل الاختبارات والواجبات",
        "تحويل المحاضرات المرئية إلى نصوص قابلة للبحث",
        "تصحيح مقترح بالذكاء الاصطناعي باعتماد المعلم",
        "تحكم ذكي في استهلاك التوكن",
        "تدريب الفريق وتوثيق التسليم",
      ],
    },
    waMsg: {
      en: "Hi, I'm interested in AI integration for my Moodle platform.",
      ar: "مرحباً، أريد الاستفسار عن تكامل الذكاء الاصطناعي مع منصة موودل لدي.",
    },
  },
  {
    slug: "n8n",
    name: { en: "n8n Automation", ar: "أتمتة العمليات بـ n8n" },
    price: { en: "Contact for pricing", ar: "تواصل للتسعير" },
    priceNote: { en: "based on scope", ar: "حسب النطاق" },
    featured: false,
    inclusions: {
      en: [
        "n8n server setup & configuration",
        "Moodle REST API integration",
        "Auto-grading & enrolment workflows",
        "WhatsApp & email notification pipelines",
        "CRM & payment webhook sync",
        "Full workflow documentation",
      ],
      ar: [
        "إعداد وتهيئة خادم n8n",
        "ربط واجهة Moodle REST API",
        "سير عمل التصحيح والتسجيل التلقائي",
        "إشعارات واتساب والبريد التلقائية",
        "ربط أنظمة المبيعات وبوابات الدفع",
        "توثيق كامل لسير العمل",
      ],
    },
    waMsg: {
      en: "Hi, I'd like to discuss n8n automation for my Moodle platform.",
      ar: "مرحباً، أريد مناقشة أتمتة n8n لمنصة موودل لدي.",
    },
  },
  {
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
        "Q&A + follow-up documentation",
        "Ongoing monthly support retainers available",
      ],
      ar: [
        "منهج عملي مخصص لفريقك",
        "جلسات تدريبية مباشرة عبر الإنترنت",
        "تسجيلات الجلسات محفوظة لفريقك",
        "مسار خاص للمديرين ومسار للمعلمين",
        "إجابات ومتابعة مستمرة",
        "باقات دعم شهرية اختيارية",
      ],
    },
    waMsg: {
      en: "Hi, I'm interested in Moodle training for my team.",
      ar: "مرحباً، أريد الاستفسار عن تدريب موودل لفريقي.",
    },
  },
  {
    slug: "mobile-app",
    name: { en: "Branded Moodle Mobile App", ar: "تطبيق موودل بهويتك" },
    price: { en: "From $300", ar: "يبدأ من $300" },
    priceNote: { en: "one-time setup", ar: "رسوم إعداد لمرة واحدة" },
    featured: false,
    inclusions: {
      en: [
        "Android + iOS app with your branding",
        "Your logo, colors & custom login screen",
        "Pre-configured LMS domain sign-in",
        "Push notification configuration",
        "Google Play + App Store submission",
        "30-day post-launch support",
      ],
      ar: [
        "تطبيق Android + iOS بهوية مؤسستك",
        "شعارك وألوانك وشاشة تسجيل دخول مخصصة",
        "ربط مسبق بعنوان منصتك للدخول السريع",
        "إعداد الإشعارات الفورية للطلاب",
        "الرفع على Google Play وApp Store",
        "دعم فني 30 يوماً بعد الإطلاق",
      ],
    },
    waMsg: {
      en: "Hi, I'm interested in a branded Moodle mobile app for my institution.",
      ar: "مرحباً، أريد الاستفسار عن تطبيق موودل بهوية مؤسستي.",
    },
  },
];

const PAGE_TEXT = {
  en: {
    badge: "Transparent Pricing",
    heading: "Clear scopes,",
    headingGradient: "honest pricing",
    subtitle: "Starting prices are listed where fixed scopes apply. Ready-made plugins have flat one-time licenses, and custom builds are scoped within 24 hours.",
    contactPrice: "Contact for pricing",
    getQuote: "Request a Quote",
    chatWA: "Chat on WhatsApp",
    ctaHeading: "Have a custom plugin or LMS project?",
    ctaHeadingGradient: "Let's scope it.",
    ctaDesc: "Describe your Moodle version, learner count, and goal — I will reply with a realistic plan and timeline within 24 hours.",
    ctaWA: "Chat on WhatsApp",
    ctaMail: "Send an Email",
    pluginsNote: "Looking for individual ready-made Moodle plugins?",
    pluginsLink: "Browse all 22 plugins",
  },
  ar: {
    badge: "تسعير واضح",
    heading: "نطاق عمل واضح،",
    headingGradient: "وأسعار شفافة",
    subtitle: "الإضافات الجاهزة لها ترخيص واضح لمرة واحدة، والخدمات الأساسية لها أسعار بداية محددة، والمشاريع المخصصة تُسعَّر خلال 24 ساعة.",
    contactPrice: "تواصل للتسعير",
    getQuote: "اطلب عرض سعر",
    chatWA: "تحدث على واتساب",
    ctaHeading: "لديك إضافة مخصصة أو مشروع لمنصتك؟",
    ctaHeadingGradient: "دعنا نرتب الخطة.",
    ctaDesc: "اذكر إصدار موودل لديك وعدد الطلاب والهدف — وسأرد عليك بخطة عملية وتقدير واضح خلال 24 ساعة.",
    ctaWA: "تحدث على واتساب",
    ctaMail: "راسلني بالبريد",
    pluginsNote: "تبحث عن أسعار الإضافات الجاهزة؟",
    pluginsLink: "تصفّح كل الإضافات (٢٢)",
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
    <article
      className={`relative flex flex-col rounded-2xl overflow-hidden border transition-shadow ${
        service.featured
          ? "bg-[#FFF3EB] border-[#FDBA74] shadow-sm"
          : "bg-white border-[#E2DBD0]"
      }`}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#FAF8F4] border border-[#E2DBD0] flex items-center justify-center text-[#C2410C] flex-shrink-0">
              <Layers size={16} aria-hidden="true" />
            </span>
            <h3 className="font-sans text-lg font-bold text-[#18181B] leading-snug">
              {service.name[lang]}
            </h3>
          </div>
          {service.featured && (
            <span className="flex-shrink-0 text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#FED7AA] text-[#C2410C]">
              {lang === "en" ? "Core Focus" : "الطلب الأعلى"}
            </span>
          )}
        </div>

        <div className="mb-5 pb-4 border-b border-[#E2DBD0]">
          <div className="font-display text-2xl font-bold text-[#18181B]">
            {isContact ? <span className="text-[#581C87]">{txt.contactPrice}</span> : service.price[lang]}
          </div>
          <div className="text-xs text-[#52525B] mt-0.5">{service.priceNote[lang]}</div>
        </div>

        <ul className="space-y-2.5 flex-1 mb-6">
          {service.inclusions[lang].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check size={15} className="flex-shrink-0 mt-0.5 text-[#15803D]" aria-hidden="true" />
              <span className="text-sm text-[#3F3F46] leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-colors ${
            service.featured
              ? "bg-[#C2410C] text-white hover:bg-[#9A3412]"
              : "bg-[#FAF8F4] text-[#18181B] border border-[#C9C0B2] hover:bg-[#F2EEE6]"
          }`}
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span>{isContact ? txt.getQuote : txt.chatWA}</span>
          <ArrowIcon size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
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
          content="Transparent pricing for Moodle plugins, setup, AI integration, n8n automation, training, and branded mobile apps."
        />
        <link rel="canonical" href="https://services.smartlearn.education/pricing" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />

        <div className="pt-28 pb-16 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-3">
                {txt.badge}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#18181B] mb-4">
                {txt.heading} <span className="text-[#C2410C]">{txt.headingGradient}</span>
              </h1>
              <p className="text-[#3F3F46] max-w-2xl mx-auto leading-relaxed mb-5">
                {txt.subtitle}
              </p>

              <Link
                href="/services/plugins"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#581C87] hover:text-[#C2410C] transition-colors"
              >
                <span>{txt.pluginsNote}</span>
                <span className="underline underline-offset-4">{txt.pluginsLink}</span>
                <ArrowIcon size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {SERVICES.map((svc) => (
                <PricingCard key={svc.slug} service={svc} lang={lang} isRTL={isRTL} />
              ))}
            </div>

            <div className="rounded-2xl p-8 sm:p-12 text-center bg-[#F2EEE6] border border-[#E2DBD0]">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] mb-2.5">
                {txt.ctaHeading} <span className="text-[#C2410C]">{txt.ctaHeadingGradient}</span>
              </h2>
              <p className="text-[#3F3F46] max-w-xl mx-auto mb-7 leading-relaxed">
                {txt.ctaDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={waCustomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#15803D] hover:bg-[#166534] transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>{txt.ctaWA}</span>
                  <ArrowIcon size={14} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${MAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#18181B] bg-white border border-[#C9C0B2] hover:bg-[#FAF8F4] transition-colors"
                >
                  <Mail size={16} aria-hidden="true" />
                  <span>{txt.ctaMail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-8 pb-24 px-5 sm:px-6 border-t border-[#E2DBD0] bg-[#F2EEE6]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#52525B]">© {new Date().getFullYear()} {t.footer}</p>
            <SocialLinks size="sm" />
          </div>
        </footer>
      </div>
    </>
  );
}
