import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Check, Users, Video, FileText, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const services = [
  {
    icon: "🖥️",
    title: "Admin Training",
    description:
      "A structured training program that turns your Moodle admins into confident platform owners — no more relying on external support for day-to-day tasks.",
    bullets: [
      "Platform configuration, user management & role setup",
      "Course creation, plugin administration & gradebook",
      "Backup, restore, cron monitoring & performance checks",
      "Live remote sessions with recorded replays included",
    ],
    note: "Delivered as a structured program (4–8 sessions) or on-demand.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher Training",
    description:
      "Practical Moodle training for educators — building engaging courses, designing assessments, and using AI tools effectively.",
    bullets: [
      "Course design with activities, resources & H5P content",
      "Quiz and assignment setup with rubrics and grading",
      "Grade management, student communication & tracking",
      "AI plugin usage: chatbots, rubric generators & grading assists",
    ],
    note: "Available as group sessions or one-on-one coaching.",
  },
  {
    icon: "📞",
    title: "Technical Support Retainer",
    description:
      "Reliable, expert support on a monthly or quarterly basis — so your team is never blocked and issues never reach students.",
    bullets: [
      "Bug diagnosis, plugin troubleshooting & user issue resolution",
      "Performance fixes, cron checks & database optimisation",
      "Priority response SLA — fast turnaround for urgent issues",
      "Support via chat, email, or video call — whichever suits you",
    ],
    note: "Monthly and quarterly retainer plans available; contact for pricing.",
  },
  {
    icon: "📖",
    title: "Documentation & Knowledge Bases",
    description:
      "Custom documentation written for your specific Moodle setup — so institutional knowledge stays in the team and support requests go down.",
    bullets: [
      "Admin manuals, teacher guides & student how-tos",
      "Troubleshooting runbooks and FAQ libraries",
      "Delivered as Google Docs, Notion pages, or Moodle resources",
      "Branded and formatted to match your institution's style",
    ],
    note: "Priced per document set based on scope and depth required.",
  },
  {
    icon: "🔍",
    title: "Platform Audits & Reviews",
    description:
      "An in-depth review of your existing Moodle installation — uncovering security risks, outdated plugins, performance bottlenecks, and configuration mistakes before they cause problems.",
    bullets: [
      "Security vulnerability scan and plugin version audit",
      "Performance bottleneck analysis (DB queries, cache, cron)",
      "Accessibility, RTL, and mobile usability review",
      "Written report with prioritised recommendations and effort estimates",
    ],
    note: "Delivered as a fixed-price engagement; results in 5–7 business days.",
  },
];

const formats = [
  {
    icon: "🎥",
    label: "Live Remote",
    detail: "Interactive sessions via Zoom or Google Meet. Q&A, screen-sharing, and real-time exercises.",
  },
  {
    icon: "⏺️",
    label: "Recorded Replays",
    detail: "Every session recorded and shared. Teams can rewatch at any time, including new hires.",
  },
  {
    icon: "🌍",
    label: "Arabic & English",
    detail: "Training delivered in your preferred language. Bilingual teams welcome.",
  },
  {
    icon: "🎯",
    label: "Your Moodle",
    detail: "All training is done on your actual Moodle instance — not a generic sandbox.",
  },
];

const trust = [
  {
    Icon: Users,
    title: "Team-Focused",
    desc: "Training is designed around your team's current skill level and daily workflows — not a generic curriculum.",
  },
  {
    Icon: Video,
    title: "Recorded Sessions",
    desc: "Every session is recorded and shared with your team. New staff can catch up at their own pace.",
  },
  {
    Icon: FileText,
    title: "Written Deliverables",
    desc: "Every training engagement includes written guides, checklists, or runbooks tailored to your setup.",
  },
  {
    Icon: Search,
    title: "Audit-Driven",
    desc: "Platform audits give you an objective, prioritised picture of what to fix — not just a generic checklist.",
  },
];

export function TrainingPage() {
  return (
    <>
      <Helmet>
        <title>Training & Support — Smart Learn</title>
        <meta
          name="description"
          content="Moodle admin and teacher training, technical support retainers, platform audits, and custom documentation — delivered in Arabic and English."
        />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        {/* Hero */}
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
              <GraduationCap size={28} style={{ color: "#c084fc" }} />
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
              Smart Learn · Training & Support
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
              style={font}
            >
              Training &{" "}
              <span style={gradientText}>Technical Support</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4"
              style={font}
            >
              Empower your team to get the most from Moodle — with practical training and reliable expert support that keeps your platform running smoothly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10"
              style={font}
            >
              Whether you need to onboard a new admin, upskill your teaching team, or just have someone to call when things go wrong — I've got you covered.
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
                Book a Session <ArrowRight size={15} />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  ...font,
                }}
              >
                Request an Audit
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services */}
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
                What's <span style={gradientText}>available</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto" style={font}>
                Five engagement types — standalone or combined into a support package.
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
                  <p
                    className="text-xs mt-auto pt-3 border-t"
                    style={{ color: "#64748b", borderColor: "rgba(255,255,255,0.06)", ...font }}
                  >
                    {svc.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How training is delivered */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
                How training is <span style={gradientText}>delivered</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {formats.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(168,85,247,0.1)",
                  }}
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h4 className="text-sm font-black text-white mb-1.5" style={font}>{f.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed" style={font}>{f.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
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
                  <h4 className="text-sm font-black text-white mb-2" style={font}>{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed" style={font}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
              Ready to upskill your team?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Tell me who needs training, what they struggle with, and I'll design a program specifically for your team and your Moodle setup.
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
              Book a Training Session <ArrowRight size={16} />
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
