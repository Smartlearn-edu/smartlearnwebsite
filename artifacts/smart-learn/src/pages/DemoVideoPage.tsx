import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Award,
  Sparkles,
  CreditCard,
  Workflow,
  CheckCircle2,
  MessageSquare,
  Zap,
  ArrowLeft,
  Video,
  Download,
} from "lucide-react";
import { useT } from "@/i18n";
import { Link } from "wouter";

const CHAPTERS = [
  {
    id: "intro",
    time: 0,
    titleEn: "1. Who is MN",
    titleAr: "1. من هو MN",
    labelEn: "The Moodle & AI Architect",
    labelAr: "مهندس Moodle والذكاء الاصطناعي",
  },
  {
    id: "qai",
    time: 20,
    titleEn: "2. Quiz AI Chat",
    titleAr: "2. محادثة الاختبار الذكية",
    labelEn: "AI Tutor inside Moodle Quizzes",
    labelAr: "مرشد ذكي داخل اختبارات Moodle",
  },
  {
    id: "rubric",
    time: 40,
    titleEn: "3. AI Rubric Generator",
    titleAr: "3. المقيم الذكي",
    labelEn: "Automated Essay & Rubric Grading",
    labelAr: "تقييم المقالات التلقائي بالذكاء الاصطناعي",
  },
  {
    id: "kashier",
    time: 60,
    titleEn: "4. Kashier Payments",
    titleAr: "4. بوابة دفع كاشير",
    labelEn: "Fawry, Meeza & Card Checkout",
    labelAr: "فوري وميزة والدفع بالبطاقات",
  },
  {
    id: "automation",
    time: 80,
    titleEn: "5. UX & Automation",
    titleAr: "5. تجربة الاستخدام والأتمتة",
    labelEn: "Custom Home & n8n RAG Pipelines",
    labelAr: "لوحة تحكم حديثة وأتمتة n8n",
  },
  {
    id: "cta",
    time: 100,
    titleEn: "6. Get Started",
    titleAr: "6. ابدأ مشروعك",
    labelEn: "Ready to Scale Your LMS?",
    labelAr: "جاهز لتطوير منصتك التعليمية؟",
  },
];

export function DemoVideoPage() {
  const { lang, isRTL } = useT();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const totalDuration = 120; // 2 minutes
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentChapterIndex = Math.min(
    Math.floor(currentTime / 20),
    CHAPTERS.length - 1
  );
  const activeChapter = CHAPTERS[currentChapterIndex];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 0.1;
        });
      }, 100);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleSeek = (seconds: number) => {
    setCurrentTime(Math.max(0, Math.min(totalDuration, seconds)));
  };

  const handleChapterClick = (time: number) => {
    setCurrentTime(time);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // Screen recording helper using Web MediaRecorder API
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 60 },
        audio: false,
      });
      const recorder = new MediaRecorder(stream, {
        mimeType: "video/webm; codecs=vp9",
      });
      const chunks: BlobPart[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "smart-learn-plugins-demo-2min.webm";
        a.click();
        setIsRecording(false);
      };

      setIsRecording(true);
      setCurrentTime(0);
      setIsPlaying(true);
      recorder.start();

      // Stop after 2 minutes automatically
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
          stream.getTracks().forEach((t) => t.stop());
        }
      }, 120500);
    } catch (err) {
      console.error("Recording cancelled or failed:", err);
      setIsRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden">
      {/* Top Header */}
      <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02] backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{lang === "ar" ? "العودة للرئيسية" : "Back to Home"}</span>
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <span
            className="text-xs md:text-sm font-bold text-purple-300 tracking-wider uppercase"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {lang === "ar"
              ? "عرض فيديو 2 دقيقة · خبراتي وإضافات Moodle"
              : "2-MINUTE INTERACTIVE PLUGINS & EXPERIENCE DEMO"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={startRecording}
            disabled={isRecording}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isRecording
                ? "bg-red-600 animate-pulse text-white cursor-not-allowed"
                : "bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500 hover:text-white"
            }`}
          >
            <Video size={14} />
            <span>
              {isRecording
                ? lang === "ar"
                  ? "جاري التمْرِير والتسجيل (2:00)..."
                  : "Recording in progress (2:00)..."
                : lang === "ar"
                ? "🔴 تسجيل وتحميل فيديو WEBM"
                : "🔴 Record & Download Video"}
            </span>
          </button>
        </div>
      </header>

      {/* Chapter Pills Bar */}
      <div className="px-6 py-3 border-b border-white/5 bg-black/30 overflow-x-auto flex items-center justify-center gap-2 scrollbar-none">
        {CHAPTERS.map((ch, idx) => {
          const isActive = currentChapterIndex === idx;
          return (
            <button
              key={ch.id}
              onClick={() => handleChapterClick(ch.time)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              <span>{lang === "ar" ? ch.titleAr : ch.titleEn}</span>
            </button>
          );
        })}
      </div>

      {/* Video Stage Area */}
      <main className="relative flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(168,85,247,0.2) 0%, transparent 70%)",
          }}
        />

        <AnimatePresence mode="wait">
          {/* SCENE 0: WHO IS MN */}
          {currentChapterIndex === 0 && (
            <motion.div
              key="scene-intro"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl text-center flex flex-col items-center"
            >
              <div
                className="w-28 h-28 md:w-32 md:h-32 rounded-3xl flex items-center justify-center text-4xl md:text-5xl font-black text-white mb-6 shadow-2xl relative"
                style={{
                  background:
                    "linear-gradient(135deg, #6900A3 0%, #a855f7 60%, #c084fc 100%)",
                  boxShadow: "0 0 50px rgba(168,85,247,0.5)",
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                MN
                <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  5+ YRS
                </div>
              </div>

              <h1
                className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {lang === "ar" ? (
                  <>
                    مهندس <span className="gradient-text">Moodle LMS</span> وخبير
                    الذكاء الاصطناعي
                  </>
                ) : (
                  <>
                    Expert <span className="gradient-text">Moodle LMS</span> &
                    AI Architect
                  </>
                )}
              </h1>

              <p
                className="text-slate-300 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {lang === "ar"
                  ? "خبرة أكثر من 5 سنوات في بناء وتطوير منصات Moodle للجامعات والأكاديميات حول العالم — من برمجة الإضافات الخاصة إلى الدمج الكامل للذكاء الاصطناعي والأتمتة."
                  : "Over 5 years of architecting and scaling Moodle platforms for educational institutions worldwide — from custom plugin development to RAG AI & n8n automation."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="text-4xl font-black text-purple-400 mb-1">
                    100,000+
                  </div>
                  <div className="text-sm text-slate-400 uppercase">
                    {lang === "ar" ? "مستخدم ونشط" : "Users Managed"}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="text-4xl font-black text-indigo-400 mb-1">
                    70+
                  </div>
                  <div className="text-sm text-slate-400 uppercase">
                    {lang === "ar" ? "مشروع LMS مكتمل" : "Projects Done"}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-amber-400 font-black text-xl mb-1">
                    <Award size={22} />
                    <span>2020–2025</span>
                  </div>
                  <div className="text-sm text-slate-400 uppercase">
                    {lang === "ar"
                      ? "وسام Moodle.org المتميز"
                      : "Particularly Helpful Badge"}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: QUIZ AI CHAT */}
          {currentChapterIndex === 1 && (
            <motion.div
              key="scene-qai"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-bold mb-3">
                  <Sparkles size={14} />
                  <span>local_qai</span>
                </div>
                <h2
                  className="text-4xl font-black text-white mb-4"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "محادثة الاختبار الذكية في Moodle"
                    : "Quiz AI Chat Tutor"}
                </h2>
                <p
                  className="text-slate-300 text-base md:text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "إضافة تمنح الطلاب زراً ذكياً لطلب شرح السؤال مباشرة أثناء الاختبار، مع 5 مستويات للتحكم في السياق لتقليل استهلاك التوكن بنسبة تصل إلى 70%."
                    : "Embeds a context-aware AI tutor directly into Moodle quizzes. Students click 'Ask AI to Explain' to resolve misunderstandings instantly, with 5 context levels for token cost optimization."}
                </p>

                <div className="space-y-3">
                  {[
                    lang === "ar"
                      ? "شرح فوري على مستوى كل سؤال دون مغادرة الاختبار"
                      : "Question-level real-time explanations inside quizzes",
                    lang === "ar"
                      ? "توفير التوكن عبر إرسال السياق مرة واحدة فقط"
                      : "Token-saving mode cuts API costs by up to 70%",
                    lang === "ar"
                      ? "برومبتات مخصصة لمعلمي المقررات لكل اختبار"
                      : "Custom teacher behavior prompts per quiz",
                  ].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-base text-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-purple-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Quiz Card UI */}
              <div className="p-8 rounded-3xl bg-white/[0.04] border border-purple-500/30 shadow-2xl">
                <div className="flex items-center justify-between text-sm text-slate-400 mb-6 pb-4 border-b border-white/10">
                  <span>
                    {lang === "ar"
                      ? "السؤال 4 · الكيمياء العضوية"
                      : "Question 4 · Organic Chemistry"}
                  </span>
                  <span className="text-purple-400 font-bold">1.00 / 1.00 pt</span>
                </div>
                <p className="text-white text-base font-semibold mb-6">
                  {lang === "ar"
                    ? "لماذا تزداد درجة غليان الكحولات مقارنة بالألكانات المماثلة في الكتلة الجزيئية؟"
                    : "Why do alcohols have higher boiling points than alkanes of similar molecular mass?"}
                </p>
                <div className="p-4 rounded-2xl bg-purple-500/15 border border-purple-400/40 text-purple-200 text-sm flex items-start gap-3">
                  <Sparkles size={20} className="text-purple-300 flex-shrink-0 mt-0.5 animate-spin" />
                  <div>
                    <div className="font-bold mb-1 text-white">
                      {lang === "ar" ? "شرح الذكاء الاصطناعي الفوري" : "AI Tutor Explanation"}
                    </div>
                    <span>
                      {lang === "ar"
                        ? "يرجع ذلك لتكون الروابط الهيدروجينية القوية بين جزيئات الكحول نتيجة وجود مجموعة الهيدروكسيل (-OH) الفعالة..."
                        : "Alcohols form strong intermolecular hydrogen bonds due to the polar -OH group, requiring significantly more thermal energy to vaporize..."}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 2: AI RUBRIC GENERATOR */}
          {currentChapterIndex === 2 && (
            <motion.div
              key="scene-rubric"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-3">
                  <Award size={14} />
                  <span>local_airubricgenerator</span>
                </div>
                <h2
                  className="text-4xl font-black text-white mb-4"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "المقيم الذكي للمقالات والواجبات"
                    : "AI Rubric Assignment Grader"}
                </h2>
                <p
                  className="text-slate-300 text-base md:text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "تقييم المقالات والواجبات تلقائياً وفق معايير Rubric محددة مسبقاً، مما يوفر 80% من وقت تصحيح المعلم ويمنح الطالب تغذية راجعة مفصلة."
                    : "Automatically grades Moodle essay submissions against structured rubrics in seconds, saving 80% of grading time while delivering criterion-by-criterion student feedback."}
                </p>

                <div className="space-y-3">
                  {[
                    lang === "ar"
                      ? "تصحيح تلقائي وفق 4 معايير معقدة في ثوانٍ"
                      : "Grades across structured criteria automatically",
                    lang === "ar"
                      ? "تغذية راجعة فردية ومفصلة لكل معيار من المعايير"
                      : "Detailed criterion-level explanatory feedback",
                    lang === "ar"
                      ? "دعم كامل لـ OpenAI و Anthropic و Gemini"
                      : "Supports OpenAI, Claude & Gemini AI models",
                  ].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-base text-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-indigo-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Rubric Grading UI */}
              <div className="p-8 rounded-3xl bg-white/[0.04] border border-indigo-500/30 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="text-base font-bold text-white">
                    {lang === "ar" ? "تقرير التقييم الذكي للمقال" : "AI Rubric Grade Report"}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                    92 / 100 A+
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 flex items-center justify-between text-sm">
                    <span className="text-slate-300">
                      {lang === "ar" ? "وضوح الأطروحة والتحليل" : "Thesis Clarity & Depth"}
                    </span>
                    <span className="text-emerald-400 font-bold">25 / 25</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 flex items-center justify-between text-sm">
                    <span className="text-slate-300">
                      {lang === "ar" ? "الاستشهاد بالمراجع العلمية" : "Scientific Citations"}
                    </span>
                    <span className="text-emerald-400 font-bold">23 / 25</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 flex items-center justify-between text-sm">
                    <span className="text-slate-300">
                      {lang === "ar" ? "التسلسل المنطقي للأفكار" : "Logical Structure"}
                    </span>
                    <span className="text-emerald-400 font-bold">24 / 25</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 3: KASHIER PAYMENTS */}
          {currentChapterIndex === 3 && (
            <motion.div
              key="scene-kashier"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3">
                  <CreditCard size={14} />
                  <span>paygw_kashier</span>
                </div>
                <h2
                  className="text-4xl font-black text-white mb-4"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "بوابة كاشير للدفع في مصر والشرق الأوسط"
                    : "Kashier Payment Gateway for Moodle"}
                </h2>
                <p
                  className="text-slate-300 text-base md:text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "بوابة الدفع رقم 1 لأكاديميات Moodle في مصر والشرق الأوسط. تدعم الدفع الفوري عبر فوري، ميزة، فيزا، وماستركارد مع تسجيل الطلاب التلقائي."
                    : "The #1 payment gateway solution for Moodle academies in Egypt and MENA. Seamless checkout via Fawry, Meeza, Visa & Mastercard with instant webhook course enrollment."}
                </p>

                <div className="space-y-3">
                  {[
                    lang === "ar"
                      ? "دعم الدفع عبر فوري (Fawry Pay) وميزة (Meeza)"
                      : "Native Fawry Pay & Meeza card integrations",
                    lang === "ar"
                      ? "التسجيل التلقائي الفوري للطالب عند تأكيد الدفع"
                      : "Instant automatic course enrollment via webhooks",
                    lang === "ar"
                      ? "دعم عملات الجنيه المصري EGP والدولار USD"
                      : "Supports EGP & USD multi-currency pricing",
                  ].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-base text-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Payment Cards UI */}
              <div className="p-8 rounded-3xl bg-white/[0.04] border border-emerald-500/30 shadow-2xl">
                <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider">
                  {lang === "ar" ? "اختر وسيلة الدفع" : "Select Payment Method"}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-sm font-bold flex items-center gap-2">
                    <CreditCard size={18} />
                    <span>Fawry Pay</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold flex items-center gap-2">
                    <CreditCard size={18} />
                    <span>Meeza Card</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold flex items-center gap-2">
                    <CreditCard size={18} />
                    <span>Visa / MC</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold flex items-center gap-2">
                    <CreditCard size={18} />
                    <span>Apple Pay</span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-300 text-center text-sm font-bold">
                  {lang === "ar"
                    ? "✓ تم تأكيد التسجيل الفوري في المقرر بنجاح"
                    : "✓ Instant Course Enrollment Confirmed"}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 4: UX & AUTOMATION */}
          {currentChapterIndex === 4 && (
            <motion.div
              key="scene-automation"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold mb-3">
                  <Workflow size={14} />
                  <span>local_customhome & n8n</span>
                </div>
                <h2
                  className="text-4xl font-black text-white mb-4"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "تصاميم عصرية وأتمتة شاملة مع n8n"
                    : "Modern UX & Enterprise n8n Workflows"}
                </h2>
                <p
                  className="text-slate-300 text-base md:text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {lang === "ar"
                    ? "وداعاً لبطء قوالب Moodle التقليدية! نصمم واجهات تفاعلية خفيفة وربط آلي بـ n8n لإرسال إشعارات واتساب وتحويل الفيديو إلى نصوص قابلة للبحث بالذكاء الاصطناعي."
                    : "Ditch bloated Moodle themes for sleek, glassmorphic student dashboards and automated n8n workflows that connect WhatsApp notifications and Video-to-Text RAG pipelines."}
                </p>

                <div className="space-y-3">
                  {[
                    lang === "ar"
                      ? "واجهات بطاقات المقررات العصرية وخفيفة الوزن"
                      : "Ultra-fast glassmorphic course dashboards",
                    lang === "ar"
                      ? "إشعارات واتساب تلقائية للطلاب عند التسجيل"
                      : "Automated WhatsApp notifications via n8n",
                    lang === "ar"
                      ? "تحويل محاضرات الفيديو لنصوص بحث ذكية (RAG)"
                      : "Video-to-Text RAG Search for lecture videos",
                  ].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-base text-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Automation Flow UI */}
              <div className="p-8 rounded-3xl bg-white/[0.04] border border-amber-500/30 shadow-2xl">
                <div className="text-xs text-slate-400 mb-5 uppercase tracking-wider">
                  {lang === "ar" ? "مسار الأتمتة المباشر" : "Automated LMS Workflow"}
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-sm">
                    <span className="text-white font-semibold">1. Student Enrolls in Course</span>
                    <span className="text-amber-400">Moodle Event</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-between text-sm">
                    <span className="text-white font-semibold">2. WhatsApp Welcome Sent</span>
                    <span className="text-amber-300">n8n Webhook</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-sm">
                    <span className="text-white font-semibold">3. Lecture Audio Indexed</span>
                    <span className="text-purple-400">RAG Pipeline</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 5: CALL TO ACTION */}
          {currentChapterIndex === 5 && (
            <motion.div
              key="scene-cta"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl text-center flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-400/40 text-purple-300 text-sm font-bold mb-6">
                <Zap size={16} />
                <span>
                  {lang === "ar"
                    ? "متاح لتنفيذ المشاريع فوراً"
                    : "AVAILABLE FOR PROJECTS WORLDWIDE"}
                </span>
              </div>

              <h2
                className="text-5xl md:text-6xl font-black text-white mb-6"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {lang === "ar" ? (
                  <>
                    جاهز لتطوير منصتك <span className="gradient-text">المستقبلية؟</span>
                  </>
                ) : (
                  <>
                    Ready to Upgrade Your <span className="gradient-text">LMS Platform?</span>
                  </>
                )}
              </h2>

              <p
                className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {lang === "ar"
                  ? "سواء كنت بحاجة لتركيب Moodle جديد، برمجة إضافة مخصصة، أو دمج الذكاء الاصطناعي — دعنا نبدأ العمل على مشروعك اليوم."
                  : "Whether you need custom plugin development, AI chatbot integration, or enterprise Moodle architecture — let's build something exceptional together."}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-5">
                <a
                  href="https://wa.me/201005822858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white shadow-xl transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    boxShadow: "0 0 30px rgba(16,185,129,0.35)",
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  <MessageSquare size={20} />
                  <span>
                    {lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                  </span>
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #6900A3, #a855f7)",
                    boxShadow: "0 0 30px rgba(168,85,247,0.35)",
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  <span>{lang === "ar" ? "اطلب مشروعاً الآن" : "Start a Project"}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Scrubber & Controls */}
      <footer className="px-6 py-5 border-t border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col gap-3">
        {/* Progress Bar */}
        <div
          className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden cursor-pointer relative"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = clickX / rect.width;
            handleSeek(pct * totalDuration);
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 transition-all duration-100"
            style={{ width: `${(currentTime / totalDuration) * 100}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-500/40 text-white flex items-center justify-center hover:bg-purple-600 hover:scale-105 transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={handleReplay}
              className="p-2.5 text-slate-400 hover:text-white transition-colors"
              title="Replay from start"
            >
              <RotateCcw size={20} />
            </button>

            <span
              className="text-sm font-mono text-slate-300 ml-2"
              style={{ fontFamily: "monospace" }}
            >
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-purple-300 font-bold">
              {lang === "ar" ? activeChapter.titleAr : activeChapter.titleEn}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
