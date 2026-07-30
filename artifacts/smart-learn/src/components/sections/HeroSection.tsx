import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import { ParticleCanvas } from "@/components/ParticleCanvas";

export function HeroSection() {
  const { lang, t } = useT();

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
      <ParticleCanvas count={55} style={{ zIndex: 0, opacity: 0.85 }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Buttons */}
        <div className="lg:col-span-7 text-center lg:text-left">
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
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6"
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
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14"
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
              <DirectionalArrow size={16} />
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
            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-14"
          >
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((s, i) => (
              <div key={i} className="text-center lg:text-left">
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

        {/* Right Column: Autoplay Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div
            className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-2xl group border border-purple-500/30 bg-black/60"
            style={{
              boxShadow: "0 0 50px rgba(105, 0, 163, 0.35)",
            }}
          >
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-purple-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{lang === "ar" ? "فيديو حي · خبراتي وإضافات Moodle" : "LIVE DEMO · PLUGINS & AI"}</span>
            </div>

            <video
              src="/video/smart-learn-plugins-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
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
