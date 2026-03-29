import { motion } from "framer-motion";
import { Server, ArrowRight, Check, Shield, Zap, Clock, HeadphonesIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ── Service cards ────────────────────────────────────────────────── */
const services = [
  {
    icon: "🚀",
    title: "Fresh Installation",
    description:
      "A production-ready Moodle site from scratch — server included if you need it. I configure the full stack before Moodle even touches the server.",
    bullets: [
      "Any Moodle version (latest stable or custom)",
      "Ubuntu + aapanel, Nginx/Apache, MySQL, PHP & SSL setup",
      "Works on shared hosting, VPS, dedicated, or cloud",
      "Post-install hardening, cron, and cache configuration",
    ],
    note: "Pricing depends on hosting type and server complexity.",
  },
  {
    icon: "⬆️",
    title: "Upgrading",
    description:
      "Jump safely from any Moodle version to your target release — including multi-version leaps. No guesswork, no surprises.",
    bullets: [
      "Full database + files backup before anything is touched",
      "Staging upgrade to validate compatibility before going live",
      "Plugin compatibility audit and replacements sourced",
      "Minimal production downtime, rollback plan in place",
    ],
    note: "Cost scales with the number of version jumps and installed plugins.",
  },
  {
    icon: "🔄",
    title: "Server Migration",
    description:
      "Move your entire Moodle site to a new host or provider without losing a single course, grade, or user record.",
    bullets: [
      "Full database export, transfer, and import verified",
      "Moodledata file sync and integrity check",
      "DNS cutover with zero data loss",
      "Post-migration functional and performance testing",
    ],
    note: "Pricing varies by database size and source environment complexity.",
  },
  {
    icon: "🛡️",
    title: "Ongoing Maintenance",
    description:
      "Keep your Moodle healthy month after month with a retainer plan — so problems never reach your users.",
    bullets: [
      "Core and plugin updates on a regular schedule",
      "Server health checks and database optimisation",
      "Cron monitoring, cache management, and log review",
      "Backup verification and disaster recovery testing",
    ],
    note: "Available as monthly or quarterly retainer plans.",
  },
  {
    icon: "🔧",
    title: "Troubleshooting & Fixes",
    description:
      "Something is broken and you need it fixed fast. I diagnose, explain, and resolve — with emergency response available.",
    bullets: [
      "White screens, 500 errors, and plugin conflicts",
      "Slow page loads and database query bottlenecks",
      "Broken grading, missing files, or enrolment issues",
      "Emergency slots with priority response time",
    ],
    note: "Hourly or fixed-price depending on scope.",
  },
  {
    icon: "⚙️",
    title: "Configuration & Customisation",
    description:
      "Get every Moodle setting tuned for your institution — from role permissions and authentication to themes and language packs.",
    bullets: [
      "Theme setup and custom CSS/logo branding",
      "Role and capability configuration for your workflows",
      "LDAP/OAuth/SSO authentication integration",
      "Language packs, RTL support, and localisation",
    ],
    note: "Quoted per project based on requirements.",
  },
];

/* ── Process steps ────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We discuss your current setup, goals, timeline, and any constraints — free of charge.",
  },
  {
    num: "02",
    title: "Proposal & Quote",
    desc: "You receive a detailed scope document with a fixed-price quote and delivery timeline.",
  },
  {
    num: "03",
    title: "Staging First",
    desc: "All work happens on a staging copy. Production is never touched until everything is validated.",
  },
  {
    num: "04",
    title: "Go Live",
    desc: "Deployment to production with minimal downtime and a verified rollback plan ready.",
  },
  {
    num: "05",
    title: "Handover & Support",
    desc: "Documentation, admin walkthrough, and a 30-day support window included with every project.",
  },
];

/* ── Trust points ─────────────────────────────────────────────────── */
const trust = [
  {
    Icon: Shield,
    title: "Staging-First Approach",
    desc: "Every change is tested on a copy before touching production. No surprises, no emergency rollbacks.",
  },
  {
    Icon: Zap,
    title: "Fixed-Price Quotes",
    desc: "You know the exact cost before work starts. No scope creep, no hidden charges.",
  },
  {
    Icon: Clock,
    title: "24-Hour Response",
    desc: "All project enquiries answered within one business day. Emergency slots available for urgent issues.",
  },
  {
    Icon: HeadphonesIcon,
    title: "Arabic & English Support",
    desc: "Egypt-based expert serving regional and international clients in both languages.",
  },
];

export function MoodleCorePage() {
  return (
    <>
      <Helmet>
        <title>Moodle Core Services — Smart Learn</title>
        <meta
          name="description"
          content="Professional Moodle installation, upgrading, migration, maintenance and troubleshooting by a certified Moodle Community Expert based in Egypt."
        />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        {/* ── Hero ──────────────────────────────────────────────── */}
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
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              <Server size={28} style={{ color: "#c084fc" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                background: "rgba(105,0,163,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#c084fc",
                ...font,
              }}
            >
              Smart Learn · Moodle Core
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
              style={font}
            >
              Moodle{" "}
              <span style={gradientText}>Core Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4"
              style={font}
            >
              Installation, upgrading, migration, maintenance & fixing — handled by a verified Moodle Community Expert.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10"
              style={font}
            >
              Whether you're launching a new platform, rescuing a broken one, or keeping a healthy one running — I've done it for institutions across Egypt and the Arab world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #6900A3, #a855f7)",
                  boxShadow: "0 0 28px rgba(105,0,163,0.4)",
                  ...font,
                }}
              >
                Get a Quote <ArrowRight size={15} />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  ...font,
                }}
              >
                All Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Services Grid ──────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                What's <span style={gradientText}>included</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto" style={font}>
                Six core service areas — pick one or bundle multiple together for a better rate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(168,85,247,0.12)",
                  }}
                >
                  <div className="text-2xl mb-3">{svc.icon}</div>
                  <h3 className="text-base font-black text-white mb-2" style={font}>
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4" style={font}>
                    {svc.description}
                  </p>
                  <ul className="space-y-1.5 flex-1 mb-4">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }} />
                        <span className="text-xs text-slate-400 leading-relaxed" style={font}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="text-xs mt-auto pt-3 border-t"
                    style={{
                      color: "#64748b",
                      borderColor: "rgba(255,255,255,0.06)",
                      ...font,
                    }}
                  >
                    {svc.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                How it <span style={gradientText}>works</span>
              </h2>
              <p className="text-slate-500 text-base max-w-md mx-auto" style={font}>
                A simple, transparent process — no surprises at any stage.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connector line */}
              <div
                className="absolute left-7 top-8 bottom-8 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.4), rgba(168,85,247,0.05))" }}
              />
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-start gap-5 rounded-2xl px-6 py-5"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-black"
                      style={{
                        background: "linear-gradient(135deg, #6900A3, #a855f7)",
                        color: "#fff",
                        ...font,
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white mb-1" style={font}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed" style={font}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Smart Learn ───────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                Why <span style={gradientText}>Smart Learn</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trust.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(168,85,247,0.1)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(168,85,247,0.12)" }}
                  >
                    <Icon size={20} style={{ color: "#a855f7" }} />
                  </div>
                  <h4 className="text-sm font-black text-white mb-2" style={font}>
                    {title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed" style={font}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center rounded-2xl py-14 px-8"
            style={{
              background: "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
              Ready to get started?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Describe your Moodle project and I'll send you a detailed proposal with timeline and fixed price — usually within 24 hours.
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
              Get a Quote <ArrowRight size={16} />
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
