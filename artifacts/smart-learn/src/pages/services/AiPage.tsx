import { motion } from "framer-motion";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import { Bot, Check, Layers, Globe, Lock, Cpu } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { useT } from "@/i18n";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const servicesData = {
  en: [
    {
      icon: "🤖",
      title: "AI Chatbots for Moodle",
      description: "A dedicated AI tutor embedded inside your Moodle courses — scoped to your content so it never hallucinates outside its knowledge base.",
      bullets: ["Course-aware chatbot using your PDFs, quizzes & forum posts", "Students get instant answers, teachers get fewer repetitive questions", "5 context-depth levels to balance accuracy vs. API cost", "LLM provider setup (OpenAI, Claude, Gemini, DeepSeek)"],
      note: "Delivered as a Moodle plugin; teacher configuration panel included.",
    },
    {
      icon: "🧠",
      title: "RAG Systems",
      description: "Full Retrieval-Augmented Generation pipeline connecting your Moodle content library to a vector database for accurate, source-cited answers.",
      bullets: ["Indexes course PDFs, video transcripts, quizzes & H5P content", "Multilingual support — Arabic and English in the same index", "Answers include source citations so students can verify", "Auto-reindexing when new content is published in Moodle"],
      note: "Suitable for institutions with large content libraries where accuracy is critical.",
    },
    {
      icon: "🎬",
      title: "Video-to-Text Pipelines",
      description: "Lecture recordings automatically transcribed, indexed, and made searchable — so students can ask questions about what was said in any video.",
      bullets: ["Speech-to-text with Whisper or cloud transcription APIs", "Arabic and English transcription in the same pipeline", "Transcripts fed into the RAG index for AI querying", "Works with Moodle video resources and external platforms"],
      note: "Priced per pipeline based on content volume and update frequency.",
    },
    {
      icon: "📊",
      title: "AI-Assisted Grading",
      description: "Semi-automated grading for essays and short answers — AI suggests grades and writes comments, teachers approve or adjust. Speed without losing control.",
      bullets: ["Rubric-aware: AI selects criterion levels with reasoning", "Human-in-the-loop: teacher approval required before saving", "Multi-model support for cost vs. quality optimisation", "Integrates with Moodle's native gradebook (no data leaves Moodle)"],
      note: "Built on the Smart Grade AI plugin — available separately or as part of this service.",
    },
    {
      icon: "🛠️",
      title: "LLM Admin Tools",
      description: "AI-powered interfaces that help administrators work faster — content summarisers, quiz generators, feedback analysers, and smart dashboards.",
      bullets: ["Quiz generator from uploaded PDFs or course sections", "Automated rubric creation from assignment descriptions", "Student feedback sentiment analysis across courses", "Delivered as Moodle plugins or connected web dashboards"],
      note: "Quoted per tool based on complexity and LLM integration requirements.",
    },
  ],
  ar: [
    {
      icon: "🤖",
      title: "روبوتات المحادثة الذكية لـ Moodle",
      description: "مرشد ذكاء اصطناعي مخصص مدمج داخل مقررات Moodle — محدود بمحتواك بحيث لا يهلوس خارج قاعدة معارفه.",
      bullets: ["روبوت واعٍ بالمقرر يستخدم ملفاتك PDF والاختبارات والمنتديات", "الطلاب يحصلون على إجابات فورية والمعلمون يحصلون على أسئلة متكررة أقل", "5 مستويات عمق سياقية للموازنة بين الدقة وتكلفة الـAPI", "إعداد مزود LLM (OpenAI وClaude وGemini وDeepSeek)"],
      note: "يُسلَّم كإضافة Moodle؛ لوحة إعداد المعلم مشمولة.",
    },
    {
      icon: "🧠",
      title: "أنظمة RAG",
      description: "خط معالجة كامل للاسترجاع المعزز بالتوليد يربط مكتبة محتوى Moodle بقاعدة بيانات متجهية لإجابات دقيقة تستشهد بالمصادر.",
      bullets: ["فهرسة ملفات PDF ونصوص الفيديو والاختبارات ومحتوى H5P", "دعم متعدد اللغات — العربية والإنجليزية في نفس الفهرس", "الإجابات تتضمن استشهادات بالمصادر للتحقق", "إعادة فهرسة تلقائية عند نشر محتوى جديد"],
      note: "مناسب للمؤسسات ذات مكتبات المحتوى الكبيرة.",
    },
    {
      icon: "🎬",
      title: "خطوط تحويل الفيديو إلى نص",
      description: "تُنقَل تسجيلات المحاضرات تلقائياً إلى نصوص وتُفهرس وتُتاح للبحث — حتى يتمكن الطلاب من طرح الأسئلة حول ما قيل في أي فيديو.",
      bullets: ["تحويل الكلام إلى نص باستخدام Whisper أو APIs السحابية", "دعم النصوص العربية والإنجليزية في نفس الخط", "تُغذّى النصوص في فهرس RAG للاستعلام بالذكاء الاصطناعي", "يعمل مع موارد فيديو Moodle والمنصات الخارجية"],
      note: "السعر لكل خط بناءً على حجم المحتوى وتكرار التحديث.",
    },
    {
      icon: "📊",
      title: "التصحيح بمساعدة الذكاء الاصطناعي",
      description: "تصحيح شبه آلي للمقالات والإجابات القصيرة — يقترح الذكاء الاصطناعي الدرجات والتعليقات ثم يوافق المعلم أو يعدّل. السرعة دون فقدان السيطرة.",
      bullets: ["واعٍ بالروبريك: يختار الذكاء الاصطناعي مستويات المعايير مع التبرير", "حلقة بشرية: موافقة المعلم مطلوبة قبل الحفظ", "دعم متعدد النماذج لتحسين الجودة مقابل التكلفة", "يتكامل مع دفتر درجات Moodle الأصلي (لا تغادر البيانات Moodle)"],
      note: "مبني على إضافة Smart Grade AI — متاح بشكل منفصل أو ضمن هذه الخدمة.",
    },
    {
      icon: "🛠️",
      title: "أدوات الإدارة المدعومة بـLLM",
      description: "واجهات مدعومة بالذكاء الاصطناعي تساعد المسؤولين على العمل بسرعة أكبر — ملخصات المحتوى ومولدات الاختبارات ومحللات التغذية الراجعة.",
      bullets: ["مولد اختبارات من ملفات PDF أو أقسام المقرر", "إنشاء روبريك تلقائي من وصف المهمة", "تحليل مشاعر التغذية الراجعة للطلاب عبر المقررات", "يُسلَّم كإضافات Moodle أو لوحات إدارة متصلة"],
      note: "يُقتبس لكل أداة بناءً على التعقيد ومتطلبات تكامل LLM.",
    },
  ],
};

const stepsData = {
  en: [
    { num: "01", title: "Requirements & Use Case", desc: "We define exactly which AI capabilities your institution needs and which data sources will feed the system." },
    { num: "02", title: "Architecture Design", desc: "I design the pipeline — LLM provider, vector store, Moodle integration points — with a written technical spec." },
    { num: "03", title: "Build & Integration", desc: "Plugin installation, API connections, vector indexing, and Moodle web service configuration — all tested in staging." },
    { num: "04", title: "Pilot & Tuning", desc: "A real course is used to test accuracy, response quality, and cost per query. Prompts and context are fine-tuned." },
    { num: "05", title: "Rollout & Handover", desc: "Production deployment, teacher training, and documentation. Ongoing support available as a retainer." },
  ],
  ar: [
    { num: "01", title: "المتطلبات وحالة الاستخدام", desc: "نحدد بالضبط إمكانيات الذكاء الاصطناعي التي تحتاجها مؤسستك ومصادر البيانات التي ستُغذّي النظام." },
    { num: "02", title: "تصميم المعمارية", desc: "أصمم الخط — مزود LLM ومخزن المتجهات ونقاط تكامل Moodle — مع مواصفة تقنية مكتوبة." },
    { num: "03", title: "البناء والتكامل", desc: "تثبيت الإضافات واتصالات API وفهرسة المتجهات وتهيئة خدمات الويب في Moodle — كل ذلك مختبر في بيئة مرحلية." },
    { num: "04", title: "التجربة الأولية والضبط", desc: "يُستخدم مقرر حقيقي لاختبار الدقة وجودة الاستجابة والتكلفة لكل استعلام. يُضبط السياق والبروبت." },
    { num: "05", title: "الطرح والتسليم", desc: "نشر الإنتاج وتدريب المعلمين والتوثيق. الدعم المستمر متاح كخطة شهرية." },
  ],
};

const trustData = {
  en: [
    { Icon: Cpu, title: "Multi-Model Flexibility", desc: "GPT-4, Claude, Gemini, DeepSeek — I choose the right model for your budget and accuracy requirements." },
    { Icon: Layers, title: "Moodle-Native", desc: "AI tools are delivered as Moodle plugins, not external iframes. Grades, data, and users stay inside Moodle." },
    { Icon: Globe, title: "Arabic & English AI", desc: "All AI systems are tested with Arabic-language content. RTL interfaces and bilingual RAG indexes included." },
    { Icon: Lock, title: "Privacy-First Design", desc: "Student data is never used for model training. Data stays on your server or in your cloud account." },
  ],
  ar: [
    { Icon: Cpu, title: "مرونة متعددة النماذج", desc: "GPT-4 وClaude وGemini وDeepSeek — أختار النموذج المناسب لميزانيتك ومتطلبات الدقة." },
    { Icon: Layers, title: "مدمج في Moodle", desc: "تُسلَّم أدوات الذكاء الاصطناعي كإضافات Moodle وليس iframes خارجية. الدرجات والبيانات والمستخدمون يبقون داخل Moodle." },
    { Icon: Globe, title: "ذكاء اصطناعي بالعربية والإنجليزية", desc: "جميع أنظمة الذكاء الاصطناعي مختبرة بالمحتوى العربي. واجهات RTL وفهارس RAG ثنائية اللغة مشمولة." },
    { Icon: Lock, title: "تصميم يحترم الخصوصية", desc: "لا تُستخدم بيانات الطلاب لتدريب النماذج. تبقى البيانات على خادمك أو في حسابك السحابي." },
  ],
};

const heroData = {
  en: {
    badge: "Smart Learn · AI Integration",
    title: "AI Integration",
    titleGradient: "for Moodle",
    tagline: "Bring intelligent automation to your learning platform — students learn smarter, teachers work faster, administrators spend less time on repetitive tasks.",
    desc: "I design and build every AI system from scratch — no off-the-shelf SaaS subscriptions, no vendor lock-in. The AI lives inside your Moodle.",
    ctaPrimary: "Discuss Your Project",
    ctaSecondary: "View AI Plugins",
    sectionHeading: "What I",
    sectionGradient: "build",
    sectionSub: "Five AI capability areas — mix and match based on your institution's priorities.",
    ctaTitle: "Ready to add AI to your Moodle?",
    ctaDesc: "Tell me what you're trying to automate or improve and I'll design a system that fits your platform, budget, and privacy requirements.",
    ctaBtn: "Start a Conversation",
  },
  ar: {
    badge: "Smart Learn · تكامل الذكاء الاصطناعي",
    title: "تكامل الذكاء الاصطناعي",
    titleGradient: "مع Moodle",
    tagline: "أحضر الأتمتة الذكية إلى منصتك التعليمية — يتعلم الطلاب بذكاء أكبر، ويعمل المعلمون بسرعة أكبر، ويقضي المسؤولون وقتاً أقل في المهام المتكررة.",
    desc: "أصمم وأبني كل نظام ذكاء اصطناعي من الصفر — لا اشتراكات SaaS جاهزة ولا تقييد بمورد. يعيش الذكاء الاصطناعي داخل منصة Moodle الخاصة بك.",
    ctaPrimary: "ناقش مشروعك",
    ctaSecondary: "عرض إضافات الذكاء الاصطناعي",
    sectionHeading: "ما",
    sectionGradient: "أبنيه",
    sectionSub: "خمسة مجالات لقدرات الذكاء الاصطناعي — اختر ما يناسب أولويات مؤسستك.",
    ctaTitle: "هل أنت مستعد لإضافة الذكاء الاصطناعي إلى Moodle؟",
    ctaDesc: "أخبرني بما تريد أتمتته أو تحسينه وسأصمم نظاماً يناسب منصتك وميزانيتك ومتطلبات الخصوصية.",
    ctaBtn: "ابدأ محادثة",
  },
};

export function AiPage() {
  const { lang, t } = useT();
  const hero = heroData[lang];
  const services = servicesData[lang];
  const steps = stepsData[lang];
  const trust = trustData[lang];

  return (
    <>
      <Helmet>
        <title>AI Integration for Moodle — Smart Learn</title>
        <meta name="description" content="Embed AI chatbots, RAG systems, automated grading, and LLM admin tools directly into your Moodle platform. Arabic and English support." />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(105,0,163,0.2) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}>
              <Bot size={28} style={{ color: "#c084fc" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(105,0,163,0.15)", border: "1px solid rgba(168,85,247,0.3)", color: "#c084fc", ...font }}>
              {hero.badge}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-5" style={font}>
              {hero.title}{" "}<span style={gradientText}>{hero.titleGradient}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4" style={font}>
              {hero.tagline}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10" style={font}>
              {hero.desc}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
              className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 28px rgba(105,0,163,0.4)", ...font }}>
                {hero.ctaPrimary} <DirectionalArrow size={15} />
              </a>
              <a href="/services/plugins" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", ...font }}>
                {hero.ctaSecondary}
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                {hero.sectionHeading} <span style={gradientText}>{hero.sectionGradient}</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto" style={font}>{hero.sectionSub}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => (
                <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="rounded-2xl p-6 flex flex-col" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.12)" }}>
                  <div className="text-2xl mb-3">{svc.icon}</div>
                  <h3 className="text-base font-black text-white mb-2" style={font}>{svc.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4" style={font}>{svc.description}</p>
                  <ul className="space-y-1.5 flex-1 mb-4">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }} />
                        <span className="text-xs text-slate-400 leading-relaxed" style={font}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs mt-auto pt-3 border-t" style={{ color: "#64748b", borderColor: "rgba(255,255,255,0.06)", ...font }}>{svc.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                {t.howItWorks.split(" ")[0]} <span style={gradientText}>{t.howItWorks.split(" ").slice(1).join(" ")}</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-5 rounded-2xl px-6 py-5" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-black"
                    style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", color: "#fff", ...font }}>{step.num}</div>
                  <div>
                    <h4 className="text-sm font-black text-white mb-1" style={font}>{step.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed" style={font}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                {t.whySL.split(" ")[0]} <span style={gradientText}>{t.whySL.split(" ").slice(1).join(" ")}</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trust.map(({ Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl p-5 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.1)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(168,85,247,0.12)" }}>
                    <Icon size={20} style={{ color: "#a855f7" }} />
                  </div>
                  <h4 className="text-sm font-black text-white mb-2" style={font}>{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed" style={font}>{desc}</p>
                </motion.div>
              ))}
            </div>
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
