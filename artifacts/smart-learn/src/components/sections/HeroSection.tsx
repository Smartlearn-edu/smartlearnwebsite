import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { useT } from "@/i18n";

export function HeroSection() {
  const { t } = useT();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-24 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(105,0,163,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(168,85,247,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: "rgba(105,0,163,0.15)",
            border: "1px solid rgba(168,85,247,0.3)",
            color: "#c084fc",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#a855f7" }}
          />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {t.hero.title1}{" "}
          <span className="gradient-text">{t.hero.titleGradient}</span>
          <br />
          {t.hero.title2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6900A3, #a855f7)",
              boxShadow: "0 0 40px rgba(105,0,163,0.4)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-300 hover:text-white transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            <Layers size={16} />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16"
        >
          {[
            { value: t.hero.stat1Value, label: t.hero.stat1Label },
            { value: t.hero.stat2Value, label: t.hero.stat2Label },
            { value: t.hero.stat3Value, label: t.hero.stat3Label },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-4xl font-black mb-1 gradient-text"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {s.value}
              </div>
              <div
                className="text-xs text-slate-500 uppercase tracking-widest"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-slate-700" style={{ fontFamily: "'Cairo', sans-serif" }}>
          {t.hero.scrollDown}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent" />
      </motion.div>
    </section>
  );
}
