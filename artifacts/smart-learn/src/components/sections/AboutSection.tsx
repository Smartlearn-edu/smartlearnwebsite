import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.18)",
              color: "#22d3ee",
            }}
          >
            👤 About Me
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Who Is Behind <span className="gradient-text">Smart Learn</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #22d3ee, #a78bfa)" }}
              >
                MN
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Mohammad Nabil
                </h3>
                <p className="text-sm text-slate-500">Founder, Smart Learn · Egypt 🇪🇬</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              A top-rated freelancer and LMS architect bridging the gap between online academies
              and cutting-edge AI technology. Since 2020, I've been building and scaling Moodle
              platforms for institutions worldwide — from plugin development to full AI integration.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://mostaql.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(34,211,238,0.08)",
                  color: "#22d3ee",
                  border: "1px solid rgba(34,211,238,0.15)",
                }}
              >
                Mostaql Profile
                <ExternalLink size={13} />
              </a>
              <a
                href="https://khamsat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(34,211,238,0.08)",
                  color: "#22d3ee",
                  border: "1px solid rgba(34,211,238,0.15)",
                }}
              >
                Khamsat Profile
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.07) 0%, rgba(167,139,250,0.05) 100%)",
                border: "1px solid rgba(34,211,238,0.18)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(34,211,238,0.12)" }}
                >
                  <Award size={18} style={{ color: "#22d3ee" }} />
                </div>
                <div>
                  <h4
                    className="font-bold text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Moodle Community Expert
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Recipient of the <span className="text-cyan-400 font-medium">Particularly Helpful Moodle Badge</span> every
                    year from 2020–2025, awarded by the Moodle.org community for sustained,
                    high-quality technical contributions.
                  </p>
                  <a
                    href="https://moodle.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm mt-3 font-medium"
                    style={{ color: "#22d3ee" }}
                  >
                    View on Moodle.org →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-3 gap-4 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {[
                { value: "100,000+", label: "Users Managed" },
                { value: "70+", label: "Projects" },
                { value: "5+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold gradient-text mb-0.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
