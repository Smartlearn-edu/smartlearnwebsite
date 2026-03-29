import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";

export interface SubSection {
  title: string;
  placeholder: string;
  icon?: string;
}

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  sections: SubSection[];
}

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

export function ServicePage({
  title,
  tagline,
  description,
  icon: Icon,
  iconColor = "#a855f7",
  sections,
}: ServicePageProps) {
  return (
    <>
      <Helmet>
        <title>{title} — Smart Learn</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
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
              <Icon size={28} style={{ color: iconColor }} />
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
              Smart Learn · Service
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
              style={font}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4"
              style={font}
            >
              {tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed"
              style={font}
            >
              {description}
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((sec, i) => (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="rounded-2xl p-7"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(168,85,247,0.12)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base mt-0.5"
                      style={{ background: "rgba(168,85,247,0.12)" }}
                    >
                      {sec.icon ?? "🔧"}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-white mb-3" style={font}>
                        {sec.title}
                      </h3>
                      <p
                        className="text-sm text-slate-400 leading-relaxed italic mb-4"
                        style={font}
                      >
                        {sec.placeholder}
                      </p>
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(105,0,163,0.12)",
                          border: "1px solid rgba(168,85,247,0.2)",
                          color: "#a855f7",
                          ...font,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
                        Content coming soon
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
              Interested in this service?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Send me a message and I'll get back to you within 24 hours with a detailed proposal.
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
              Get a Quote
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
