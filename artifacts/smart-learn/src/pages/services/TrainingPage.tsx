import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Check, Globe, Users, Clock, BookOpen } from "lucide-react";
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
    { icon: "🎓", title: "Moodle Admin Training", description: "Hands-on training for your administrators, covering every aspect of managing a Moodle platform day-to-day.", bullets: ["User management: enrolment, cohorts, roles, and bulk operations", "Course management: settings, activities, grading, completion tracking", "Site administration: caching, cron, maintenance, and plugin management", "Backup, restore, and disaster recovery procedures"], note: "Delivered as live sessions (Arabic or English). Custom schedule agreed upfront." },
    { icon: "👩‍🏫", title: "Teacher & Instructor Training", description: "Practical Moodle training for teaching staff — focused on building engaging courses, not on technical details.", bullets: ["Course builder walkthrough: topics, sections, and content organisation", "Activity setup: assignments, quizzes, forums, H5P, and workshops", "Grading workflows, rubrics, and feedback best practices", "Tracking student progress and using activity completion"], note: "Group sessions or 1-on-1. Recorded sessions available on request." },
    { icon: "🤖", title: "AI Tools for Educators", description: "Show your teaching staff how to use AI-powered tools built into your Moodle — from chatbots to automated grading assistants.", bullets: ["Using the AI chatbot as a teaching support tool", "Semi-automated grading: reviewing AI suggestions and approving grades", "Generating quizzes and rubrics using AI tools", "Interpreting AI-generated analytics and student feedback summaries"], note: "Requires AI tools to already be installed on your Moodle." },
    { icon: "🔧", title: "n8n Workflow Training", description: "Train your team to build, maintain, and extend n8n automation workflows independently — reducing dependency on external help.", bullets: ["n8n interface, nodes, and data flow fundamentals", "Reading and modifying existing Moodle automation workflows", "Building new triggers and actions using the Moodle API", "Error handling, testing, and production deployment practices"], note: "For technical staff. Requires basic familiarity with APIs." },
    { icon: "📋", title: "Custom Curriculum Design", description: "Not sure what training your team needs? I audit your current Moodle usage and design a training plan tailored to your gaps.", bullets: ["Moodle usage audit and skill gap assessment", "Custom training plan designed around your team's current level", "Blended delivery: live sessions, recordings, and reference guides", "Follow-up Q&A sessions and a 30-day support window"], note: "Full curriculum design included in the package." },
  ],
  ar: [
    { icon: "🎓", title: "تدريب مسؤول Moodle", description: "تدريب عملي لمسؤوليك يغطي كل جانب من جوانب إدارة منصة Moodle يوماً بيوم.", bullets: ["إدارة المستخدمين: التسجيل والمجاميع والأدوار والعمليات الجماعية", "إدارة المقررات: الإعدادات والأنشطة والتصحيح وتتبع الإكمال", "إدارة الموقع: الكاش والـCron والصيانة وإدارة الإضافات", "إجراءات النسخ الاحتياطي والاستعادة والتعافي من الكوارث"], note: "يُقدَّم كجلسات مباشرة (بالعربية أو الإنجليزية). الجدول يُتفق عليه مسبقاً." },
    { icon: "👩‍🏫", title: "تدريب المعلمين والمدربين", description: "تدريب Moodle العملي لهيئة التدريس — مع التركيز على بناء مقررات جذابة وليس على التفاصيل التقنية.", bullets: ["جولة في أداة بناء المقررات: المواضيع والأقسام وتنظيم المحتوى", "إعداد الأنشطة: المهام والاختبارات والمنتديات وH5P وورش العمل", "سير عمل التصحيح والروبريك وأفضل ممارسات التغذية الراجعة", "تتبع تقدم الطلاب واستخدام إكمال الأنشطة"], note: "جلسات جماعية أو فردية. التسجيل متاح عند الطلب." },
    { icon: "🤖", title: "أدوات الذكاء الاصطناعي للمعلمين", description: "أرِ هيئة التدريس كيفية استخدام الأدوات المدعومة بالذكاء الاصطناعي المدمجة في Moodle — من روبوتات المحادثة إلى مساعدي التصحيح الآلي.", bullets: ["استخدام روبوت المحادثة الذكي كأداة دعم تعليمي", "التصحيح شبه الآلي: مراجعة اقتراحات الذكاء الاصطناعي والموافقة على الدرجات", "إنشاء اختبارات وروبريك باستخدام أدوات الذكاء الاصطناعي", "تفسير التحليلات المولدة بالذكاء الاصطناعي وملخصات تغذية الطلاب الراجعة"], note: "يتطلب تثبيت أدوات الذكاء الاصطناعي مسبقاً على Moodle." },
    { icon: "🔧", title: "تدريب سير عمل n8n", description: "درّب فريقك على بناء وصيانة وتوسيع سير عمل أتمتة n8n باستقلالية — مما يقلل الاعتماد على المساعدة الخارجية.", bullets: ["واجهة n8n والعقد وأساسيات تدفق البيانات", "قراءة وتعديل سير عمل أتمتة Moodle الموجودة", "بناء محفزات وإجراءات جديدة باستخدام Moodle API", "معالجة الأخطاء والاختبار وممارسات نشر الإنتاج"], note: "للموظفين التقنيين. يتطلب إلماماً أساسياً بـAPIs." },
    { icon: "📋", title: "تصميم منهج مخصص", description: "غير متأكد من التدريب الذي يحتاجه فريقك؟ أراجع استخدامك الحالي لـMoodle وأصمم خطة تدريب مصممة لثغراتك.", bullets: ["تدقيق استخدام Moodle وتقييم الفجوات في المهارات", "خطة تدريب مخصصة مبنية على مستوى فريقك الحالي", "تسليم مدمج: جلسات مباشرة وتسجيلات وأدلة مرجعية", "جلسات أسئلة وأجوبة للمتابعة و30 يوم دعم"], note: "تصميم المنهج الكامل مشمول في الباقة." },
  ],
};

const stepsData = {
  en: [
    { num: "01", title: "Needs Assessment", desc: "I review your Moodle setup and interview key staff to understand your team's current skill levels and training priorities." },
    { num: "02", title: "Custom Session Plan", desc: "You receive a session-by-session plan — topics, objectives, duration, and pre-reading materials — before training starts." },
    { num: "03", title: "Live Sessions", desc: "Sessions are delivered live via Zoom or Google Meet in Arabic or English, with screen sharing and interactive Q&A." },
    { num: "04", title: "Recordings & Resources", desc: "Every session is recorded and supplemented with written reference guides you can use for future onboarding." },
    { num: "05", title: "Follow-Up Support", desc: "A 30-day Q&A window after training so staff can apply what they learned with confidence." },
  ],
  ar: [
    { num: "01", title: "تقييم الاحتياجات", desc: "أراجع إعداد Moodle وأجري مقابلات مع الموظفين الرئيسيين لفهم مستويات المهارة الحالية وأولويات التدريب." },
    { num: "02", title: "خطة جلسة مخصصة", desc: "تتلقى خطة جلسة بجلسة — المواضيع والأهداف والمدة ومواد القراءة المسبقة — قبل بدء التدريب." },
    { num: "03", title: "الجلسات المباشرة", desc: "تُقدَّم الجلسات مباشرة عبر Zoom أو Google Meet بالعربية أو الإنجليزية مع مشاركة الشاشة وأسئلة وأجوبة تفاعلية." },
    { num: "04", title: "التسجيلات والموارد", desc: "كل جلسة تُسجَّل وتُكمَّل بأدلة مرجعية مكتوبة يمكنك استخدامها للتهيئة المستقبلية." },
    { num: "05", title: "الدعم اللاحق", desc: "نافذة أسئلة وأجوبة لمدة 30 يوماً بعد التدريب حتى يتمكن الموظفون من تطبيق ما تعلموه بثقة." },
  ],
};

const trustData = {
  en: [
    { Icon: Globe, title: "Arabic & English", desc: "All training delivered in Arabic or English — or a mix of both — to match your team's preference." },
    { Icon: Users, title: "Any Team Size", desc: "Solo admin sessions, small group workshops, or institution-wide rollout programs. Pricing scales accordingly." },
    { Icon: Clock, title: "Flexible Scheduling", desc: "Sessions scheduled around your team's availability — mornings, evenings, or weekends where needed." },
    { Icon: BookOpen, title: "Everything Recorded", desc: "All sessions recorded and delivered to you. Perfect for onboarding new staff without rebooking training." },
  ],
  ar: [
    { Icon: Globe, title: "بالعربية والإنجليزية", desc: "كل التدريب يُقدَّم بالعربية أو الإنجليزية — أو مزيج من الاثنتين — حسب تفضيل فريقك." },
    { Icon: Users, title: "أي حجم للفريق", desc: "جلسات فردية أو ورش عمل جماعية صغيرة أو برامج طرح على مستوى المؤسسة. الأسعار تتناسب وفقاً لذلك." },
    { Icon: Clock, title: "جدول مرن", desc: "الجلسات مجدولة حسب توفر فريقك — في الصباح أو المساء أو عطلات نهاية الأسبوع عند الحاجة." },
    { Icon: BookOpen, title: "كل شيء مسجَّل", desc: "جميع الجلسات مسجَّلة ومسلَّمة إليك. مثالي لتهيئة الموظفين الجدد دون الحاجة لإعادة حجز التدريب." },
  ],
};

const heroData = {
  en: {
    badge: "Smart Learn · Training",
    title: "Moodle",
    titleGradient: "Training",
    tagline: "Live, practical training for administrators, teachers, and technical staff — in Arabic and English.",
    desc: "Your platform is only as good as the people who use it. I deliver structured training that gets your team confident on Moodle fast — whether they're brand new or need to level up.",
    ctaPrimary: "Book a Training Session",
    ctaSecondary: "All Services",
    sectionHeading: "Training",
    sectionGradient: "tracks",
    sectionSub: "Five specialised training tracks — pick what your team needs most.",
    ctaTitle: "Ready to train your team?",
    ctaDesc: "Tell me about your team size, current Moodle experience, and what you want them to be able to do — I'll design a training plan and send you a quote.",
    ctaBtn: "Book Training",
  },
  ar: {
    badge: "Smart Learn · التدريب",
    title: "تدريب",
    titleGradient: "Moodle",
    tagline: "تدريب مباشر وعملي للمسؤولين والمعلمين والموظفين التقنيين — بالعربية والإنجليزية.",
    desc: "منصتك جيدة بقدر ما يستخدمها الناس. أقدم تدريباً منظماً يجعل فريقك واثقاً في Moodle بسرعة — سواء كانوا جدداً تماماً أو يحتاجون للارتقاء.",
    ctaPrimary: "احجز جلسة تدريب",
    ctaSecondary: "جميع الخدمات",
    sectionHeading: "مسارات",
    sectionGradient: "التدريب",
    sectionSub: "خمسة مسارات تدريب متخصصة — اختر ما يحتاجه فريقك أكثر.",
    ctaTitle: "هل أنت مستعد لتدريب فريقك؟",
    ctaDesc: "أخبرني عن حجم الفريق وخبرتهم الحالية في Moodle وما تريدهم أن يكونوا قادرين على فعله — سأصمم خطة تدريب وأرسل لك عرض سعر.",
    ctaBtn: "احجز التدريب",
  },
};

export function TrainingPage() {
  const { lang, t } = useT();
  const hero = heroData[lang];
  const services = servicesData[lang];
  const steps = stepsData[lang];
  const trust = trustData[lang];

  return (
    <>
      <Helmet>
        <title>Moodle Training — Smart Learn</title>
        <meta name="description" content="Live Moodle training for admins, teachers, and technical teams in Arabic and English. Practical, structured, and fully recorded." />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(105,0,163,0.2) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}>
              <GraduationCap size={28} style={{ color: "#a855f7" }} />
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
                {hero.ctaPrimary} <ArrowRight size={15} />
              </a>
              <a href="/#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80"
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
              {hero.ctaBtn} <ArrowRight size={16} />
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
