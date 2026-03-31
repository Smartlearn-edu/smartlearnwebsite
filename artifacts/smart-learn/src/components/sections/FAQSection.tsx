import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useT } from "@/i18n";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const FAQ_ITEMS = [
  {
    q: { en: "What Moodle versions do you support?", ar: "ما إصدارات Moodle التي تدعمها؟" },
    a: {
      en: "I work with Moodle 3.9 through the latest Moodle 4.5. All my plugins and setups are tested on Moodle 4.0+ and actively maintained for every major release.",
      ar: "أعمل مع Moodle 3.9 وحتى أحدث إصدار Moodle 4.5. جميع إضافاتي وإعداداتي مختبرة على Moodle 4.0+ وتُصان بشكل دوري مع كل إصدار رئيسي.",
    },
  },
  {
    q: { en: "How long does a typical Moodle setup take?", ar: "كم يستغرق إعداد Moodle عادةً؟" },
    a: {
      en: "A fresh installation takes 1–3 days. Complex setups with AI integration, custom plugins, or data migration typically take 1–4 weeks depending on scope and existing infrastructure.",
      ar: "التثبيت الجديد يستغرق 1–3 أيام. الإعدادات المعقدة مع تكامل الذكاء الاصطناعي أو الإضافات المخصصة أو نقل البيانات قد تستغرق 1–4 أسابيع حسب النطاق والبنية التحتية الحالية.",
    },
  },
  {
    q: { en: "Do you offer ongoing support after the project?", ar: "هل تقدم دعماً مستمراً بعد المشروع؟" },
    a: {
      en: "Yes. I offer monthly support retainer packages covering Moodle maintenance, plugin updates, bug fixes, and technical consulting. Contact me to discuss the right plan for your institution.",
      ar: "نعم. أقدم باقات دعم شهرية تشمل صيانة Moodle وتحديثات الإضافات وإصلاح الأخطاء والاستشارات التقنية. تواصل معي لمناقشة الخطة المناسبة لمؤسستك.",
    },
  },
  {
    q: { en: "Are your plugins compatible with all Moodle hosting providers?", ar: "هل إضافاتك متوافقة مع جميع مزودي استضافة Moodle؟" },
    a: {
      en: "Yes. My plugins follow Moodle's standard coding guidelines and work on any installation — shared hosting, VPS, cloud, or MoodleCloud — as long as minimum PHP and database requirements are met.",
      ar: "نعم. تتبع إضافاتي إرشادات ترميز Moodle القياسية وتعمل على أي تثبيت — استضافة مشتركة أو VPS أو سحابة أو MoodleCloud — طالما تم استيفاء متطلبات PHP وقاعدة البيانات الدنيا.",
    },
  },
  {
    q: { en: "Can you build a custom plugin for my specific needs?", ar: "هل يمكنك بناء إضافة مخصصة لاحتياجاتي؟" },
    a: {
      en: "Absolutely. I've built custom activity modules, blocks, local plugins, enrolment plugins, and payment gateways. Share your requirements and I'll provide a detailed scope and quote.",
      ar: "بالتأكيد. لقد بنيت وحدات أنشطة مخصصة وبلوكات وإضافات محلية وإضافات تسجيل وبوابات دفع. شارك متطلباتك وسأقدم لك النطاق التفصيلي والتسعير.",
    },
  },
  {
    q: { en: "How does Moodle AI integration work?", ar: "كيف يعمل تكامل الذكاء الاصطناعي مع Moodle؟" },
    a: {
      en: "I integrate large language models (OpenAI, local LLMs) with Moodle through a RAG pipeline — the AI answers course-specific questions, assists with grading, and analyzes learning data without touching Moodle's core code.",
      ar: "أدمج نماذج اللغة الكبيرة (OpenAI، نماذج LLM المحلية) مع Moodle عبر خط أنابيب RAG — يجيب الذكاء الاصطناعي على الأسئلة الخاصة بالمقرر ويساعد في التصحيح ويحلل بيانات التعلم دون المساس بكود Moodle الأساسي.",
    },
  },
  {
    q: { en: "What is your pricing model?", ar: "ما هو نموذج التسعير لديك؟" },
    a: {
      en: "I work on a fixed-price basis for well-defined projects and an hourly rate for consulting, support, or open-ended work. Contact me with your project details for a personalised quote — most requests get a response within 24 hours.",
      ar: "أعمل بنظام السعر الثابت للمشاريع المحددة النطاق، وبالساعة للاستشارات والدعم أو العمل المفتوح. تواصل معي بتفاصيل مشروعك للحصول على سعر مخصص — معظم الطلبات تحصل على رد خلال 24 ساعة.",
    },
  },
  {
    q: { en: "Do you work with institutions outside Egypt?", ar: "هل تعمل مع مؤسسات خارج مصر؟" },
    a: {
      en: "Yes — all my work is remote-first. I've delivered projects for institutions across Egypt, UAE, Saudi Arabia, Kuwait, and the UK. Time zones are easily manageable with async communication and structured handoffs.",
      ar: "نعم — عملي عن بُعد بالكامل. قدمت مشاريع لمؤسسات في مصر والإمارات والسعودية والكويت والمملكة المتحدة. فوارق التوقيت قابلة للإدارة بسهولة بالتواصل غير المتزامن.",
    },
  },
];

const SECTION_TEXT = {
  en: { badge: "❓ FAQ", heading: "Common", headingGradient: "Questions" },
  ar: { badge: "❓ الأسئلة الشائعة", heading: "الأسئلة", headingGradient: "الشائعة" },
};

export function FAQSection() {
  const { lang, isRTL } = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const txt = SECTION_TEXT[lang];

  const gradientText: React.CSSProperties = {
    background: "linear-gradient(135deg, #a855f7, #c084fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section className="py-20 px-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "#a855f7",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.2)",
              ...font,
            }}
          >
            {txt.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={font}>
            {txt.heading}{" "}
            <span style={gradientText}>{txt.headingGradient}</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.4) }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(105,0,163,0.12) 0%, rgba(168,85,247,0.06) 100%)"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isOpen ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.07)"}`,
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm md:text-base font-bold text-white leading-snug flex-1"
                    style={font}
                  >
                    {item.q[lang]}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
                    style={{
                      background: isOpen ? "rgba(168,85,247,0.2)" : "rgba(255,255,255,0.06)",
                      color: isOpen ? "#c084fc" : "#64748b",
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-6 pb-5 text-sm text-slate-400 leading-relaxed"
                        style={font}
                      >
                        {item.a[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
