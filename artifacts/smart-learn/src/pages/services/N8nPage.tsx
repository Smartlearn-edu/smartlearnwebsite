import { motion } from "framer-motion";
import { Workflow, ArrowRight, Check, RefreshCw, Server, Bell, GitBranch } from "lucide-react";
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
    icon: "⚙️",
    title: "n8n + Moodle Setup",
    description:
      "The foundation layer: n8n connected to your Moodle via REST API, ready to power any automation you need.",
    bullets: [
      "n8n self-hosted on your server or cloud deployment",
      "Moodle web services configured with scoped API tokens",
      "Authentication, endpoint testing, and error handling",
      "Base workflows for common Moodle actions (get users, courses, grades)",
    ],
    note: "One-time setup fee; included as part of any automation project.",
  },
  {
    icon: "✅",
    title: "Automated Grading Workflows",
    description:
      "Trigger-based grade calculation that runs the moment a student submits — no manual processing, no delays.",
    bullets: [
      "Fires on quiz completion, assignment upload, or activity finish",
      "Weighted grade logic, conditional pass/fail rules, scale conversion",
      "Gradebook updates and student result notifications automated",
      "Audit log for every automated grade action",
    ],
    note: "Complexity and pricing depend on grading rules and number of triggers.",
  },
  {
    icon: "📩",
    title: "Enrollment & Notification Pipelines",
    description:
      "Enrol students, assign cohorts, and notify them at every step of their journey — without anyone touching Moodle manually.",
    bullets: [
      "Auto-enrol on payment confirmation, CRM trigger, or course completion",
      "Personalised email and WhatsApp notifications at each milestone",
      "Group and cohort management synced with external systems",
      "Unenrolment and access expiry handled automatically",
    ],
    note: "Integrates with any CRM or payment system that has a webhook or API.",
  },
  {
    icon: "🔗",
    title: "Moodle Webhooks & Event Triggers",
    description:
      "Custom Moodle plugins that emit real-time events into n8n — enabling automations that Moodle's built-in tools cannot reach.",
    bullets: [
      "Events: enrolment, quiz attempt, forum post, badge award & more",
      "Webhook payload includes full context (user, course, grade, timestamp)",
      "n8n receives events instantly for real-time downstream automation",
      "Event filtering — process only the records that match your criteria",
    ],
    note: "Plugin development quoted separately; works with any n8n-connected system.",
  },
  {
    icon: "🗂️",
    title: "AI Knowledge Base Pipelines",
    description:
      "n8n workflows that keep your AI chatbot's knowledge up to date — automatically extracting and indexing Moodle content as it changes.",
    bullets: [
      "Extract course content, PDFs, and forum posts on a schedule",
      "Embed and upsert into vector store (Pinecone, Qdrant, Weaviate)",
      "Delta sync — only reindex content that has changed",
      "Pairs with the RAG chatbot service for a fully automated AI stack",
    ],
    note: "Requires a RAG system to be in place; can be built as a bundle.",
  },
  {
    icon: "📊",
    title: "Reporting & Data Sync",
    description:
      "Push Moodle data to Google Sheets, dashboards, CRMs, or data warehouses on a schedule or in real time.",
    bullets: [
      "Daily completion reports to Google Sheets or Notion",
      "Sync Moodle user records to HubSpot, Zoho, or any CRM",
      "Revenue and enrolment data to BI dashboards (Metabase, Looker)",
      "Scheduled or event-triggered — your choice",
    ],
    note: "Priced per integration based on complexity and data volume.",
  },
];

const steps = [
  {
    num: "01",
    title: "Process Mapping",
    desc: "We map the exact manual process being automated — inputs, outputs, edge cases, and failure modes.",
  },
  {
    num: "02",
    title: "API & Webhook Audit",
    desc: "I audit your Moodle setup and external systems to confirm all required API endpoints are available.",
  },
  {
    num: "03",
    title: "Workflow Build",
    desc: "Workflows are built and unit-tested in a staging environment connected to a Moodle test instance.",
  },
  {
    num: "04",
    title: "UAT with Real Data",
    desc: "You run real-world test cases. We fix edge cases, adjust logic, and document the workflow behaviour.",
  },
  {
    num: "05",
    title: "Production & Monitoring",
    desc: "Workflows go live with error alerting configured. Monthly review sessions available as a retainer.",
  },
];

const trust = [
  {
    Icon: Server,
    title: "Self-Hosted or Cloud",
    desc: "n8n runs on your server or in your cloud account. No third-party SaaS subscription required.",
  },
  {
    Icon: GitBranch,
    title: "No Vendor Lock-In",
    desc: "All workflows are yours. Exported as JSON, version-controlled, and fully documented.",
  },
  {
    Icon: Bell,
    title: "Error Alerting",
    desc: "Every production workflow has failure alerts. You're notified immediately if automation stops working.",
  },
  {
    Icon: RefreshCw,
    title: "Real-Time Triggers",
    desc: "Workflows fire instantly on Moodle events — not on a slow cron schedule. Actions happen when they should.",
  },
];

export function N8nPage() {
  return (
    <>
      <Helmet>
        <title>n8n Automation for Moodle — Smart Learn</title>
        <meta
          name="description"
          content="Eliminate repetitive Moodle admin work with n8n automation workflows: grading, enrollment, notifications, webhooks, and AI pipelines."
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
              <Workflow size={28} style={{ color: "#a855f7" }} />
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
              Smart Learn · n8n Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
              style={font}
            >
              n8n Automation{" "}
              <span style={gradientText}>for Moodle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4"
              style={font}
            >
              Eliminate repetitive admin work with intelligent workflows that run around the clock — freeing your team for what actually matters.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10"
              style={font}
            >
              Using n8n's visual automation platform connected to the Moodle REST API and custom webhook plugins — every workflow I build is yours to own, extend, and modify.
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
                Automate Your Moodle <ArrowRight size={15} />
              </a>
              <a
                href="/services/ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  ...font,
                }}
              >
                View AI Services
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
                What I <span style={gradientText}>automate</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto" style={font}>
                Six automation areas — from simple notification pipelines to complex AI-powered workflows.
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

        {/* Process */}
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
                From process mapping to live automation — five clear steps.
              </p>
            </motion.div>

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
                    style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", color: "#fff", ...font }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white mb-1" style={font}>{step.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed" style={font}>{step.desc}</p>
                  </div>
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
              What would you automate first?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Describe the manual process you want to eliminate and I'll send you a workflow design and fixed-price quote within 24 hours.
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
              Let's Automate It <ArrowRight size={16} />
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
