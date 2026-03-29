import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Puzzle, ArrowRight, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

type Category = "All" | "AI-Powered" | "Analytics & Reporting" | "Course Tools" | "Platform & Admin";

interface Plugin {
  name: string;
  slug: string;
  type: string;
  moodle: string;
  category: Category;
  free: boolean;
  features: string[];
}

const plugins: Plugin[] = [
  {
    name: "Quiz AI Chat",
    slug: "local_qai",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    free: false,
    features: [
      "AI tutor embedded inside every quiz attempt",
      "Question-level explanations & overall performance chat",
      "5 context levels to balance detail vs. API cost",
      "Token-saving mode: sends context only on first message",
    ],
  },
  {
    name: "Chat with Assignment",
    slug: "local_chatwithassignment",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    free: false,
    features: [
      "AI chat on assignment feedback & rubric scores",
      "5 context levels from grade-only to full submission",
      "Custom teacher instructions per assignment",
      "GDPR-compliant with student data portability",
    ],
  },
  {
    name: "Smart Grade AI",
    slug: "local_smartgradeai",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    free: false,
    features: [
      "Human-in-the-loop AI grading with teacher review",
      "Rubric-aware: selects levels & writes comments",
      "Multi-model: GPT-4, Claude, Gemini, DeepSeek",
      "n8n integration for flexible grading workflows",
    ],
  },
  {
    name: "AI Rubric Generator",
    slug: "local_airubricgenerator",
    type: "local",
    moodle: "Moodle 4.5+",
    category: "AI-Powered",
    free: false,
    features: [
      "Generate rubrics from assignment description",
      "Tone & framework options (Bloom's, SOLO, etc.)",
      "Test rubric on sample submissions before saving",
      "Also generates full assignment descriptions",
    ],
  },
  {
    name: "Adaptive Study Plan",
    slug: "mod_adaptiveplan",
    type: "mod",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    free: false,
    features: [
      "AI-generated personalised study schedules per student",
      "Onboarding questionnaire for hours & prior knowledge",
      "Dynamic checklists from course activity metadata",
      "AI chat coach to adjust deadlines on demand",
    ],
  },
  {
    name: "Smart Dashboard",
    slug: "local_smartdashboard",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Analytics & Reporting",
    free: false,
    features: [
      "All-in-one analytics: progress, grading, payments",
      "Cross-course student completion tracking",
      "Revenue analytics with category breakdown charts",
      "CSV export for all data, dark UI with sidebar nav",
    ],
  },
  {
    name: "Student Grades Report",
    slug: "report_studentgrades",
    type: "report",
    moodle: "Moodle 4.0+",
    category: "Analytics & Reporting",
    free: true,
    features: [
      "Export all course grades as one HTML file",
      "Hierarchical grade structure with categories",
      "18+ colour settings, RTL support, Word-compatible",
      "Students & admins can view cross-course records",
    ],
  },
  {
    name: "HTML Grade Export",
    slug: "gradereport_htmlexport",
    type: "gradereport",
    moodle: "Moodle 4.0+",
    category: "Analytics & Reporting",
    free: true,
    features: [
      "Per-course grade export as styled HTML file",
      "Bulk ZIP download for all students at once",
      "18+ colour themes, site logo integration",
      "GDPR-compliant, print-ready design",
    ],
  },
  {
    name: "Gap Close",
    slug: "mod_gapclose",
    type: "mod",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    free: true,
    features: [
      "Auto-detects incorrect answers across all course quizzes",
      "Builds a focused review session in one click",
      "Uses Moodle's native Question Engine with live feedback",
      "Resumable sessions; restart to scan fresh gaps",
    ],
  },
  {
    name: "Protected PDF",
    slug: "mod_protectedpdf",
    type: "mod",
    moodle: "Moodle 3.10+",
    category: "Course Tools",
    free: true,
    features: [
      "Watermarks every PDF download with student name & email",
      "FPDI-powered per-page overlay on the original file",
      "Access-controlled to enrolled, authenticated users",
      "Backup & restore and completion tracking support",
    ],
  },
  {
    name: "Private YouTube",
    slug: "mod_privateyoutube",
    type: "mod",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    free: true,
    features: [
      "Embed private or unlisted YouTube videos in courses",
      "Students view content without needing a YouTube link",
      "Completion tracking & activity settings supported",
      "Simple teacher setup with URL and display options",
    ],
  },
  {
    name: "Smart Catalog",
    slug: "local_smartcatalog",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    free: false,
    features: [
      "Enhanced course catalog with advanced filtering",
      "Category browsing with custom display options",
      "Search and sort courses by multiple criteria",
      "Clean, responsive UI for prospective students",
    ],
  },
  {
    name: "Credit Enrollment",
    slug: "enrol_credit",
    type: "enrol",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    free: true,
    features: [
      "Students spend credit balance to enrol in courses",
      "Per-course credit cost set by admin",
      "Auto-deduction on enrolment with balance display",
      "Enrolment keys, periods & max users supported",
    ],
  },
  {
    name: "Custom Home Redirect",
    slug: "local_customhome",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    free: true,
    features: [
      "Replace Moodle front page with any custom URL",
      "Admin bypass so site admins are never locked out",
      "Emergency bypass via ?noredirect=1 parameter",
      "AI Prompt Generator to scaffold landing pages from live data",
    ],
  },
  {
    name: "Parent Assign",
    slug: "local_parentassign",
    type: "local",
    moodle: "Moodle 4.1+",
    category: "Platform & Admin",
    free: true,
    features: [
      "Auto-creates parent accounts from student profile fields",
      "Generates secure passwords and sends welcome emails",
      "Forced password reset on first parent login",
      "Scheduled task sweeps for bulk-uploaded users",
    ],
  },
  {
    name: "Quick Login",
    slug: "local_qlogin",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    free: true,
    features: [
      "One-click login shortcuts for support staff",
      "Configurable per-role access and visibility",
      "Reduces time switching between user accounts",
      "Lightweight with no database overhead",
    ],
  },
  {
    name: "Balance Updater",
    slug: "local_balanceupdater",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    free: false,
    features: [
      "Automated user credit & balance management",
      "Triggered by scheduled tasks or external webhooks",
      "Configurable rules per user group or cohort",
      "Integrates with Credit Enrollment plugin",
    ],
  },
  {
    name: "Kashier Payment Gateway",
    slug: "paygw_kashier",
    type: "paygw",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    free: false,
    features: [
      "Native Moodle payment gateway for Kashier (Egypt)",
      "Secure webhook verification with HMAC signature",
      "Supports EGP, USD, EUR, GBP currencies",
      "Sandbox test mode for safe integration testing",
    ],
  },
];

const CATEGORIES: Category[] = [
  "All",
  "AI-Powered",
  "Analytics & Reporting",
  "Course Tools",
  "Platform & Admin",
];

const typeColors: Record<string, { bg: string; text: string }> = {
  local:        { bg: "rgba(59,130,246,0.12)",  text: "#93c5fd" },
  mod:          { bg: "rgba(16,185,129,0.12)",  text: "#6ee7b7" },
  report:       { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  gradereport:  { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  paygw:        { bg: "rgba(236,72,153,0.12)",  text: "#f9a8d4" },
  enrol:        { bg: "rgba(168,85,247,0.12)",  text: "#c084fc" },
};

export function PluginsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? plugins : plugins.filter((p) => p.category === active);

  const freeCount = plugins.filter((p) => p.free).length;
  const premiumCount = plugins.filter((p) => !p.free).length;

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
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
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
              {plugins.length} plugins across AI, analytics, content tools, and platform management — built to production standards for Moodle 4.0+.
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
        <div className="sticky top-16 z-40 px-6 py-3" style={{ backgroundColor: "rgba(7,7,15,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
              {CATEGORIES.map((cat) => {
                const isActive = active === cat;
                const count = cat === "All" ? plugins.length : plugins.filter((p) => p.category === cat).length;
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
                        background: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)",
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
              background: "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={font}>
              Interested in a plugin?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Get in touch and I'll provide pricing, installation details, and a demo for any plugin you need.
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
  const typeStyle = typeColors[plugin.type] ?? { bg: "rgba(168,85,247,0.1)", text: "#c084fc" };

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
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <h3
            className="text-base font-black text-white leading-snug mb-2"
            style={font}
          >
            {plugin.name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Type badge */}
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-md font-mono"
              style={{
                background: typeStyle.bg,
                color: typeStyle.text,
                fontFamily: "monospace",
              }}
            >
              {plugin.type}
            </span>
            {/* Version badge */}
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-md"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#64748b",
                ...font,
              }}
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

      {/* Features */}
      <ul className="flex-1 space-y-2 mb-5">
        {plugin.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check
              size={13}
              className="flex-shrink-0 mt-0.5"
              style={{ color: "#a855f7" }}
            />
            <span className="text-xs text-slate-400 leading-relaxed" style={font}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/#contact"
        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
        style={{
          background: plugin.free
            ? "rgba(34,197,94,0.15)"
            : "linear-gradient(135deg, #6900A3, #a855f7)",
          border: plugin.free ? "1px solid rgba(34,197,94,0.35)" : "none",
          color: plugin.free ? "#4ade80" : "#fff",
          ...font,
        }}
      >
        {plugin.free ? "Get Plugin" : "Contact for Pricing"}
        <ArrowRight size={13} />
      </a>
    </motion.div>
  );
}
