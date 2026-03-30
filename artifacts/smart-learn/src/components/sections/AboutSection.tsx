import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useT } from "@/i18n";

export function AboutSection() {
  const { t } = useT();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(105,0,163,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#c084fc",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            {t.about.badge}
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.about.heading} <span className="gradient-text">{t.about.headingGradient}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left column: Bio card + Community Expert card stacked */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            {/* Bio card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #6900A3, #c084fc)" }}
                >
                  MN
                </div>
                <div>
                  <h3
                    className="text-xl font-black text-white"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.about.name}
                  </h3>
                  <p
                    className="text-sm text-slate-500"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.about.role}
                  </p>
                </div>
              </div>

              <p
                className="text-slate-400 leading-relaxed mb-6"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t.about.bio}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://mostaql.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold px-3.5 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                  style={{
                    background: "rgba(105,0,163,0.15)",
                    color: "#c084fc",
                    border: "1px solid rgba(168,85,247,0.25)",
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  {t.about.mostaql}
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://khamsat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold px-3.5 py-2 rounded-lg transition-all duration-200 hover:opacity-80"
                  style={{
                    background: "rgba(105,0,163,0.15)",
                    color: "#c084fc",
                    border: "1px solid rgba(168,85,247,0.25)",
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  {t.about.khamsat}
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Moodle Community Expert card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(105,0,163,0.12) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(168,85,247,0.15)" }}
                >
                  <Award size={18} style={{ color: "#c084fc" }} />
                </div>
                <div>
                  <h4
                    className="font-black text-white mb-1"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.about.communityExpert}
                  </h4>
                  <p
                    className="text-sm text-slate-400 leading-relaxed"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.about.badgeDesc.split(t.about.badgeHighlight)[0]}
                    <span style={{ color: "#c084fc", fontWeight: 700 }}>
                      {t.about.badgeHighlight}
                    </span>
                    {t.about.badgeDesc.split(t.about.badgeHighlight)[1]}
                  </p>
                  <a
                    href="https://moodle.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm mt-3 font-bold"
                    style={{ color: "#a855f7", fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.about.viewMoodle}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: Profile photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <div
              className="rounded-2xl overflow-hidden flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(145deg, rgba(105,0,163,0.18) 0%, rgba(168,85,247,0.08) 50%, rgba(105,0,163,0.12) 100%)",
                border: "1px solid rgba(168,85,247,0.2)",
                minHeight: "420px",
              }}
            >
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-black text-white mb-5 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #6900A3 0%, #a855f7 60%, #c084fc 100%)",
                  boxShadow: "0 0 40px rgba(168,85,247,0.35)",
                }}
              >
                MN
              </div>
              <p
                className="text-slate-500 text-sm"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t.about.photoPlaceholder}
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {[
                { value: "100,000+", label: t.about.stat1Label },
                { value: "70+", label: t.about.stat2Label },
                { value: "5+", label: t.about.stat3Label },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-black gradient-text mb-0.5"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-slate-500 uppercase tracking-wide"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
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
