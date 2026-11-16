import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useT } from "@/i18n";

const FAQ_ITEMS = [
  {
    q: { en: "What Moodle versions do your plugins and setups support?", ar: "ما إصدارات موودل التي تدعمها إضافاتك وخدماتك؟" },
    a: {
      en: "I work with Moodle 3.9 through the latest Moodle 4.5 LTS and 5.x releases. All active Smart Learn plugins are tested on Moodle 4.0+ and maintained across major upgrades.",
      ar: "أعمل مع إصدارات Moodle 3.9 وحتى أحدث إصدارات Moodle 4.5 LTS و5.x. جميع إضافات Smart Learn الحديثة مختبرة على Moodle 4.0+ وتُحدّث مع كل إصدار رئيسي.",
    },
  },
  {
    q: { en: "Do your plugins modify core Moodle files?", ar: "هل تعدّل إضافاتك في ملفات موودل الأساسية؟" },
    a: {
      en: "Never. Every plugin is built strictly inside Moodle's standard plugin types (local_, mod_, theme_, report_, enrol_, paygw_) using official hooks and APIs, so future Moodle upgrades stay safe.",
      ar: "أبداً. كل إضافة مبنية بالكامل ضمن أنواع إضافات موودل القياسية (local_ و mod_ و theme_ و report_ و enrol_ و paygw_) عبر الخطافات والواجهات الرسمية، فتبقى ترقيات منصتك آمنة.",
    },
  },
  {
    q: { en: "Can you customize an existing Smart Learn plugin for our academy?", ar: "هل يمكن تخصيص إضافة جاهزة من Smart Learn لتناسب منصتنا؟" },
    a: {
      en: "Yes. Many academies start with Smart Dashboard, Smart Catalog, or Smart Grade AI and ask for custom fields, branding, or payment/CRM hooks tailored to their workflow.",
      ar: "نعم. كثير من الأكاديميات تبدأ بإضافة مثل Smart Dashboard أو Smart Catalog أو Smart Grade AI ثم تطلب حقولاً أو صلاحيات أو ربطاً مخصصاً يناسب طريقة عملها.",
    },
  },
  {
    q: { en: "Are your plugins compatible with any Moodle hosting?", ar: "هل تعمل الإضافات على جميع شركات استضافة موودل؟" },
    a: {
      en: "Yes—VPS, cloud servers, shared hosting, or dedicated Linux/NGINX setups, provided standard Moodle PHP and database requirements are met.",
      ar: "نعم — تعمل على خوادم VPS والسحابة والاستضافة المشتركة وخوادم Linux/NGINX طالما تتوفر متطلبات PHP وقاعدة البيانات القياسية لموودل.",
    },
  },
  {
    q: { en: "How does Moodle AI integration work without exposing private data?", ar: "كيف يعمل تكامل الذكاء الاصطناعي داخل موودل؟" },
    a: {
      en: "Plugins like Smart Grade AI, Quiz AI Chat, and AI Rubric Generator connect via configurable API endpoints (OpenAI, Claude, or self-hosted models via n8n), with teacher-approval steps and token-saving context controls.",
      ar: "تتصل إضافات مثل Smart Grade AI وQuiz AI Chat وAI Rubric Generator عبر واجهات API قابلة للضبط (OpenAI أو Claude أو نماذج محلية عبر n8n) مع اعتماد المعلم وضوابط توفير استهلاك التوكن.",
    },
  },
  {
    q: { en: "How long does a typical Moodle setup or custom plugin take?", ar: "كم يستغرق إعداد موودل أو تطوير إضافة مخصصة؟" },
    a: {
      en: "A fresh server setup takes 1–3 days. Custom plugins, migrations, or n8n + AI pipelines typically take 1–4 weeks depending on scope.",
      ar: "التثبيت الجديد وضبط الخادم يستغرق ١–٣ أيام. أما الإضافات المخصصة أو الترحيل أو ربط n8n والذكاء الاصطناعي فيستغرق عادةً ١–٤ أسابيع حسب النطاق.",
    },
  },
  {
    q: { en: "Do you work with institutions outside Egypt?", ar: "هل تعمل مع مؤسسات خارج مصر؟" },
    a: {
      en: "Yes—all projects are delivered remotely. I actively work with schools, training centers, and universities across Egypt, Saudi Arabia, the UAE, Kuwait, and the UK.",
      ar: "نعم — العمل عن بُعد بالكامل، وقد نفذت مشاريع لمدارس ومراكز تدريب وجامعات في مصر والسعودية والإمارات والكويت والمملكة المتحدة.",
    },
  },
];

const SECTION_TEXT = {
  en: { badge: "Common Questions", heading: "Practical answers before", headingHighlight: "we start" },
  ar: { badge: "الأسئلة الشائعة", heading: "إجابات واضحة قبل", headingHighlight: "أن نبدأ" },
};

export function FAQSection() {
  const { lang, isRTL } = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const txt = SECTION_TEXT[lang];

  return (
    <section
      className="py-16 sm:py-20 px-5 sm:px-6 bg-[#F2EEE6] border-t border-[#E2DBD0]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
            {txt.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B]">
            {txt.heading}{" "}
            <span className="text-[#581C87]">{txt.headingHighlight}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div
                key={item.q.en}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "bg-white border-[#C9C0B2] shadow-2xs"
                    : "bg-white/80 border-[#E2DBD0] hover:border-[#C9C0B2]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-start cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm sm:text-base font-bold text-[#18181B] leading-snug">
                    {item.q[lang]}
                  </span>
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border ${
                      isOpen
                        ? "bg-[#FFF3EB] border-[#FED7AA] text-[#C2410C]"
                        : "bg-[#FAF8F4] border-[#E2DBD0] text-[#52525B]"
                    }`}
                  >
                    {isOpen ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
                  </span>
                </button>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-5 pt-0 text-sm sm:text-base text-[#3F3F46] leading-relaxed"
                >
                  {item.a[lang]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
