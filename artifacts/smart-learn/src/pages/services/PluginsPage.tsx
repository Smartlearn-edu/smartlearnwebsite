import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Puzzle, ArrowRight, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { plugins, CATEGORIES, type Category, type Plugin } from "@/data/plugins";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const typeColors: Record<string, { bg: string; text: string }> = {
  local:        { bg: "rgba(59,130,246,0.12)",  text: "#93c5fd" },
  mod:          { bg: "rgba(16,185,129,0.12)",  text: "#6ee7b7" },
  report:       { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  gradereport:  { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  paygw:        { bg: "rgba(236,72,153,0.12)",  text: "#f9a8d4" },
  enrol:        { bg: "rgba(168,85,247,0.12)",  text: "#c084fc" },
};

const freeCount = plugins.filter((p) => p.free).length;
const premiumCount = plugins.filter((p) => !p.free).length;

export function PluginsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? plugins : plugins.filter((p) => p.category === active);

  return (
    <>
      <Helmet>
        <title>Moodle Plugins — Smart Learn</title>
        <meta
          name="description"
          content={`${plugins.length} Moodle plugins by Mohammad Nabil: AI-powered learning tools, analytics dashboards, grade reports, payment gateways and more.`}
        />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(105,0,163,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              <Puzzle size={28} style={{ color: "#a855f7" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                background: "rgba(105,0,163,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#c084fc",
                ...font,
              }}
            >
              Smart Learn · Plugins
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
              style={font}
            >
              Moodle{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Plugin Library
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
              style={font}
            >
              {plugins.length} plugins across AI, analytics, content tools, and platform
              management — built to production standards for Moodle 4.0+.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center gap-6 flex-wrap"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  color: "#4ade80",
                  ...font,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                {freeCount} Free Plugins
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(168,85,247,0.12)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#c084fc",
                  ...font,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                {premiumCount} Premium Plugins
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <div
          className="sticky top-16 z-40 px-6 py-3"
          style={{
            backgroundColor: "rgba(7,7,15,0.9)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
              {CATEGORIES.map((cat) => {
                const isActive = active === cat;
                const count =
                  cat === "All"
                    ? plugins.length
                    : plugins.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #6900A3, #a855f7)"
                        : "rgba(255,255,255,0.04)",
                      border: isActive
                        ? "1px solid transparent"
                        : "1px solid rgba(255,255,255,0.07)",
                      color: isActive ? "#fff" : "#94a3b8",
                      ...font,
                    }}
                  >
                    {cat}
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full"
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(255,255,255,0.07)",
                        color: isActive ? "#fff" : "#64748b",
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Plugin Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((plugin, i) => (
                  <PluginCard key={plugin.slug} plugin={plugin} i={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center rounded-2xl py-14 px-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
              Interested in a plugin?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Get in touch and I'll provide pricing, installation details, and a demo for any
              plugin you need.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6900A3, #a855f7)",
                boxShadow: "0 0 36px rgba(105,0,163,0.4)",
                ...font,
              }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </section>

        <footer className="py-8 px-6 text-center border-t border-white/[0.04]">
          <p className="text-sm text-slate-600" style={font}>
            © {new Date().getFullYear()} Smart Learn · Mohammad Nabil · Egypt
          </p>
        </footer>
      </div>
    </>
  );
}

function PluginCard({ plugin, i }: { plugin: Plugin; i: number }) {
  const typeStyle = typeColors[plugin.type] ?? {
    bg: "rgba(168,85,247,0.1)",
    text: "#c084fc",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4), ease: "easeOut" }}
      className="rounded-2xl p-6 flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-black text-white leading-snug mb-2" style={font}>
            {plugin.name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-md"
              style={{ background: typeStyle.bg, color: typeStyle.text, fontFamily: "monospace" }}
            >
              {plugin.type}
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.05)", color: "#64748b", ...font }}
            >
              {plugin.moodle}
            </span>
          </div>
        </div>
        {/* Free / Premium badge */}
        {plugin.free ? (
          <span
            className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#4ade80",
              ...font,
            }}
          >
            Free
          </span>
        ) : (
          <span
            className="flex-shrink-0 text-xs font-black px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(105,0,163,0.2)",
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              ...font,
            }}
          >
            Premium
          </span>
        )}
      </div>

      {/* Body: features or placeholder */}
      <div className="flex-1 mb-5">
        {plugin.placeholder ? (
          <div
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
            style={{
              background: "rgba(105,0,163,0.08)",
              border: "1px solid rgba(168,85,247,0.15)",
              color: "#7c3aed",
              ...font,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse inline-block flex-shrink-0" />
            <span style={{ color: "#94a3b8" }}>Full details coming soon — contact me to learn more.</span>
          </div>
        ) : (
          <ul className="space-y-2">
            {plugin.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2">
                <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }} />
                <span className="text-xs text-slate-400 leading-relaxed" style={font}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA — purple for both free and premium */}
      <a
        href="/#contact"
        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
        style={{
          background: "linear-gradient(135deg, #6900A3, #a855f7)",
          ...font,
        }}
      >
        {plugin.free ? "Get Plugin" : "Contact for Pricing"}
        <ArrowRight size={13} />
      </a>
    </motion.div>
  );
}
