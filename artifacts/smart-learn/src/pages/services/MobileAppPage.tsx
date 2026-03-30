import { motion } from "framer-motion";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import { Smartphone, Check, Palette, LogIn, Bell, Upload, Paintbrush, MessageCircle } from "lucide-react";
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

const heroData = {
  en: {
    badge: "Smart Learn · Mobile App",
    title: "Branded Moodle",
    titleGradient: "Mobile App",
    tagline: "Your Moodle platform in your students' pockets — a fully branded Android or iOS app with your logo, colors, and pre-configured login.",
    desc: "Built on the official Moodle Mobile source. Learners download your app and sign in directly to your LMS — no URL entry, no confusion, just your brand.",
    tags: ["Android", "iOS", "White Label", "Push Notifications", "Store Submission"],
    ctaPrimary: "Get Your App",
    includedHeading: "What's",
    includedGradient: "Included",
    includedSub: "Both plans come with full white-label branding applied to the official Moodle Mobile app.",
    plansHeading: "Choose Your",
    plansGradient: "Plan",
    plansSub: "Two clear options — final price depends on your requirements.",
    stepsHeading: "How It",
    stepsGradient: "Works",
    ctaTitle: "Ready to launch your branded app?",
    ctaDesc: "Tell me about your Moodle setup and target platform. I'll send you a quote and timeline within 24 hours.",
    ctaBtn: "Start the Conversation",
    ctaWhatsApp: "Chat on WhatsApp",
    ctaWaMsg: "Hi! I'd like to get a branded Moodle mobile app.",
  },
  ar: {
    badge: "Smart Learn · تطبيق جوال",
    title: "تطبيق Moodle",
    titleGradient: "بهويتك",
    tagline: "منصة Moodle في جيب طلابك — تطبيق Android أو iOS بشعارك وألوانك وتسجيل دخول مباشر لمنصتك.",
    desc: "مبني على المصدر الرسمي لتطبيق Moodle Mobile. يُحمّل الطلاب تطبيقك ويسجلون دخولهم مباشرةً إلى نظامك — لا إدخال للرابط، لا تشويش، فقط علامتك.",
    tags: ["Android", "iOS", "علامة بيضاء", "إشعارات فورية", "نشر على المتاجر"],
    ctaPrimary: "احصل على تطبيقك",
    includedHeading: "ما",
    includedGradient: "يشمله",
    includedSub: "كلا الخطتين تتضمنان علامة تجارية بيضاء كاملة مطبقة على تطبيق Moodle Mobile الرسمي.",
    plansHeading: "اختر",
    plansGradient: "خطتك",
    plansSub: "خياران واضحان — السعر النهائي يعتمد على متطلباتك.",
    stepsHeading: "كيف",
    stepsGradient: "يعمل",
    ctaTitle: "مستعد لإطلاق تطبيقك؟",
    ctaDesc: "أخبرني عن إعداد Moodle الخاص بك والمنصة المستهدفة. سأرسل لك عرضاً وجدولاً زمنياً خلال 24 ساعة.",
    ctaBtn: "ابدأ المحادثة",
    ctaWhatsApp: "تحدث على واتساب",
    ctaWaMsg: "مرحباً! أريد الحصول على تطبيق Moodle بهويتي.",
  },
};

const includedData = {
  en: [
    { Icon: Palette, title: "Custom App Name & Icon", desc: "Your app appears in the store and on-device with your chosen name and icon — not Moodle's." },
    { Icon: LogIn, title: "Branded Splash & Login Screens", desc: "Your logo is displayed on the splash screen and login page every time a learner opens the app." },
    { Icon: Paintbrush, title: "Brand Colors Applied", desc: "The full interface is styled with your primary brand colors for a consistent visual identity." },
    { Icon: Smartphone, title: "Pre-Configured Moodle URL", desc: "Learners open the app and log straight in to your site — no URL entry, no wrong-site risk." },
    { Icon: Bell, title: "Push Notifications & Store Submission", desc: "Keep learners engaged with push notifications, and let me handle Google Play / App Store submission on your behalf." },
  ],
  ar: [
    { Icon: Palette, title: "اسم التطبيق والأيقونة المخصصة", desc: "يظهر تطبيقك في المتجر وعلى الجهاز باسمك وأيقونتك المختارة — وليس Moodle." },
    { Icon: LogIn, title: "شاشتا السبلاش وتسجيل الدخول بهويتك", desc: "يُعرض شعارك على شاشة السبلاش وصفحة تسجيل الدخول في كل مرة يفتح فيها المتعلم التطبيق." },
    { Icon: Paintbrush, title: "ألوان العلامة التجارية مطبّقة", desc: "تُصمَّم الواجهة الكاملة بألوان علامتك التجارية الأساسية لهوية بصرية متسقة." },
    { Icon: Smartphone, title: "رابط Moodle مُعدّ مسبقاً", desc: "يفتح الطلاب التطبيق ويسجلون دخولهم مباشرةً في موقعك — لا إدخال للرابط، لا خطر الدخول إلى موقع خاطئ." },
    { Icon: Bell, title: "إشعارات فورية ونشر على المتاجر", desc: "أبقِ المتعلمين منخرطين بالإشعارات الفورية، ودعني أتولى نشر التطبيق على Google Play / App Store نيابةً عنك." },
  ],
};

const plansData = {
  en: [
    {
      id: "android",
      title: "Android",
      price: "from $100",
      note: "Final price depends on your requirements",
      desc: "For platforms targeting Android users",
      img: "/img/mobile-android.png",
      bullets: ["Branded Android APK", "Logo, icon, splash, colors applied", "Pre-configured Moodle URL", "Google Play submission support"],
    },
    {
      id: "ios",
      title: "Android + iOS",
      price: "from $300",
      note: "Final price depends on your requirements",
      desc: "Full reach across both major mobile platforms",
      img: "/img/mobile-ios.png",
      bullets: ["Everything in Android plan", "Native iOS build (.ipa)", "Push notifications enabled", "Apple App Store submission support"],
      featured: true,
    },
  ],
  ar: [
    {
      id: "android",
      title: "Android",
      price: "من $100",
      note: "السعر النهائي يعتمد على متطلباتك",
      desc: "للمنصات التي تستهدف مستخدمي Android",
      img: "/img/mobile-android.png",
      bullets: ["APK Android مُعلَّم بهويتك", "شعار وأيقونة وسبلاش وألوان مطبّقة", "رابط Moodle مُعدّ مسبقاً", "دعم نشر على Google Play"],
    },
    {
      id: "ios",
      title: "Android + iOS",
      price: "من $300",
      note: "السعر النهائي يعتمد على متطلباتك",
      desc: "وصول كامل عبر كلا المنصتين الرئيسيتين",
      img: "/img/mobile-ios.png",
      bullets: ["كل ما في خطة Android", "بناء iOS أصلي (.ipa)", "إشعارات فورية مفعّلة", "دعم نشر على Apple App Store"],
      featured: true,
    },
  ],
};

const stepsData = {
  en: [
    { num: "01", title: "Share Assets", desc: "Send your logo, brand colors, app name, and developer account details (Google Play / Apple)." },
    { num: "02", title: "Build", desc: "The app is built and branded using the official Moodle Mobile source code — clean, maintainable, upgradable." },
    { num: "03", title: "Test", desc: "You receive a test build to review on your device. We fix any issues before any store submission." },
    { num: "04", title: "Publish", desc: "The app is submitted to Google Play and/or the Apple App Store on your behalf." },
  ],
  ar: [
    { num: "01", title: "شارك مواردك", desc: "أرسل شعارك وألوان علامتك التجارية واسم التطبيق وبيانات حساب المطور (Google Play / Apple)." },
    { num: "02", title: "البناء", desc: "يُبنى التطبيق ويُعلَّم بهويتك باستخدام الكود المصدري الرسمي لـ Moodle Mobile — نظيف وقابل للصيانة والترقية." },
    { num: "03", title: "الاختبار", desc: "تتلقى نسخة اختبارية للمراجعة على جهازك. نُصلح أي مشكلات قبل أي نشر على المتاجر." },
    { num: "04", title: "النشر", desc: "يُقدَّم التطبيق إلى Google Play و/أو Apple App Store نيابةً عنك." },
  ],
};

export function MobileAppPage() {
  const { lang, t } = useT();
  const hero = heroData[lang];
  const included = includedData[lang];
  const plans = plansData[lang];
  const steps = stepsData[lang];

  return (
    <>
      <Helmet>
        <title>Branded Moodle Mobile App — Smart Learn</title>
        <meta name="description" content="A fully branded Android or iOS app for your Moodle platform — your logo, colors, and pre-configured login. Android from $100, Android + iOS from $300." />
        <link rel="canonical" href="https://home.smartlearn.education/services/mobile-app" />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(105,0,163,0.2) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}>
              <Smartphone size={28} style={{ color: "#a855f7" }} />
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
              className="flex flex-col items-center gap-4">
              <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 28px rgba(105,0,163,0.4)", ...font }}>
                {hero.ctaPrimary} <DirectionalArrow size={15} />
              </a>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {hero.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ background: "rgba(168,85,247,0.1)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.25)", ...font }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                {hero.includedHeading} <span style={gradientText}>{hero.includedGradient}</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto" style={font}>{hero.includedSub}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {included.map(({ Icon, title, desc }, i) => (
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

        {/* Plans */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                {hero.plansHeading} <span style={gradientText}>{hero.plansGradient}</span>
              </h2>
              <p className="text-slate-500 text-base max-w-md mx-auto" style={font}>{hero.plansSub}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((plan, i) => (
                <motion.div key={plan.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: plan.featured ? "rgba(105,0,163,0.1)" : "rgba(255,255,255,0.03)",
                    border: plan.featured ? "1px solid rgba(168,85,247,0.35)" : "1px solid rgba(168,85,247,0.12)",
                    boxShadow: plan.featured ? "0 0 40px rgba(105,0,163,0.18)" : "none",
                  }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img src={plan.img} alt={plan.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,7,15,0.7) 0%, transparent 60%)" }} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-white mb-1" style={font}>{plan.title}</h3>
                    <p className="text-sm text-slate-400 mb-4" style={font}>{plan.desc}</p>
                    <ul className="space-y-2 flex-1 mb-5">
                      {plan.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }} />
                          <span className="text-sm text-slate-300 leading-relaxed" style={font}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      <p className="text-2xl font-black text-white mb-0.5" style={font}>{plan.price}</p>
                      <p className="text-xs text-slate-500" style={font}>{plan.note}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                {hero.stepsHeading} <span style={gradientText}>{hero.stepsGradient}</span>
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

        {/* CTA */}
        <section className="py-16 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center rounded-2xl py-14 px-8"
            style={{ background: "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)", border: "1px solid rgba(168,85,247,0.25)" }}>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>{hero.ctaTitle}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>{hero.ctaDesc}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 36px rgba(105,0,163,0.4)", ...font }}>
                {hero.ctaBtn} <DirectionalArrow size={16} />
              </a>
              <a href={`https://wa.me/201005822858?text=${encodeURIComponent(hero.ctaWaMsg)}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 28px rgba(22,163,74,0.25)", ...font }}>
                <MessageCircle size={16} /> {hero.ctaWhatsApp}
              </a>
            </div>
          </motion.div>
        </section>

        <footer className="py-8 px-6 text-center border-t border-white/[0.04]">
          <p className="text-sm text-slate-600" style={font}>© {new Date().getFullYear()} {t.footer}</p>
        </footer>
      </div>
    </>
  );
}
