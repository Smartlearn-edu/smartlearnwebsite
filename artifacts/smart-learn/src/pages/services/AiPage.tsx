import { motion } from "framer-motion";
import { Bot, ArrowRight, Check, Layers, Globe, Lock, Cpu } from "lucide-react";
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
    icon: "🤖",
    title: "AI Chatbots for Moodle",
    description:
      "A dedicated AI tutor embedded inside your Moodle courses — scoped to your content so it never hallucinates outside its knowledge base.",
    bullets: [
      "Course-aware chatbot using your PDFs, quizzes & forum posts",
      "Students get instant answers, teachers get fewer repetitive questions",
      "5 context-depth levels to balance accuracy vs. API cost",
      "LLM provider setup (OpenAI, Claude, Gemini, DeepSeek)",
    ],
    note: "Delivered as a Moodle plugin; teacher configuration panel included.",
  },
  {
    icon: "🧠",
    title: "RAG Systems",
    description:
      "Full Retrieval-Augmented Generation pipeline connecting your Moodle content library to a vector database for accurate, source-cited answers.",
    bullets: [
      "Indexes course PDFs, video transcripts, quizzes & H5P content",
      "Multilingual support — Arabic and English in the same index",
      "Answers include source citations so students can verify",
      "Auto-reindexing when new content is published in Moodle",
    ],
    note: "Suitable for institutions with large content libraries where accuracy is critical.",
  },
  {
    icon: "🎬",
    title: "Video-to-Text Pipelines",
    description:
      "Lecture recordings automatically transcribed, indexed, and made searchable — so students can ask questions about what was said in any video.",
    bullets: [
      "Speech-to-text with Whisper or cloud transcription APIs",
      "Arabic and English transcription in the same pipeline",
      "Transcripts fed into the RAG index for AI querying",
      "Works with Moodle video resources and external platforms",
    ],
    note: "Priced per pipeline based on content volume and update frequency.",
  },
  {
    icon: "📊",
    title: "AI-Assisted Grading",
    description:
      "Semi-automated grading for essays and short answers — AI suggests grades and writes comments, teachers approve or adjust. Speed without losing control.",
    bullets: [
      "Rubric-aware: AI selects criterion levels with reasoning",
      "Human-in-the-loop: teacher approval required before saving",
      "Multi-model support for cost vs. quality optimisation",
      "Integrates with Moodle's native gradebook (no data leaves Moodle)",
    ],
    note: "Built on the Smart Grade AI plugin — available separately or as part of this service.",
  },
  {
    icon: "🛠️",
    title: "LLM Admin Tools",
    description:
      "AI-powered interfaces that help administrators work faster — content summarisers, quiz generators, feedback analysers, and smart dashboards.",
    bullets: [
      "Quiz generator from uploaded PDFs or course sections",
      "Automated rubric creation from assignment descriptions",
      "Student feedback sentiment analysis across courses",
      "Delivered as Moodle plugins or connected web dashboards",
    ],
    note: "Quoted per tool based on complexity and LLM integration requirements.",
  },
];

const steps = [
  {
    num: "01",
    title: "Requirements & Use Case",
    desc: "We define exactly which AI capabilities your institution needs and which data sources will feed the system.",
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "I design the pipeline — LLM provider, vector store, Moodle integration points — with a written technical spec.",
  },
  {
    num: "03",
    title: "Build & Integration",
    desc: "Plugin installation, API connections, vector indexing, and Moodle web service configuration — all tested in staging.",
  },
  {
    num: "04",
    title: "Pilot & Tuning",
    desc: "A real course is used to test accuracy, response quality, and cost per query. Prompts and context are fine-tuned.",
  },
  {
    num: "05",
    title: "Rollout & Handover",
    desc: "Production deployment, teacher training, and documentation. Ongoing support available as a retainer.",
  },
];

const trust = [
  {
    Icon: Cpu,
    title: "Multi-Model Flexibility",
    desc: "GPT-4, Claude, Gemini, DeepSeek — I choose the right model for your budget and accuracy requirements.",
  },
  {
    Icon: Layers,
    title: "Moodle-Native",
    desc: "AI tools are delivered as Moodle plugins, not external iframes. Grades, data, and users stay inside Moodle.",
  },
  {
    Icon: Globe,
    title: "Arabic & English AI",
    desc: "All AI systems are tested with Arabic-language content. RTL interfaces and bilingual RAG indexes included.",
  },
  {
    Icon: Lock,
    title: "Privacy-First Design",
    desc: "Student data is never used for model training. Data stays on your server or in your cloud account.",
  },
];

export function AiPage() {
  return (
    <>
      <Helmet>
        <title>AI Integration for Moodle — Smart Learn</title>
        <meta
          name="description"
          content="Embed AI chatbots, RAG systems, automated grading, and LLM admin tools directly into your Moodle platform. Arabic and English support."
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
              <Bot size={28} style={{ color: "#c084fc" }} />
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
              Smart Learn · AI Integration
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
              style={font}
            >
              AI Integration{" "}
              <span style={gradientText}>for Moodle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4"
              style={font}
            >
              Bring intelligent automation to your learning platform — students learn smarter, teachers work faster, administrators spend less time on repetitive tasks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10"
              style={font}
            >
              I design and build every AI system from scratch — no off-the-shelf SaaS subscriptions, no vendor lock-in. The AI lives inside your Moodle.
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
                Discuss Your Project <ArrowRight size={15} />
              </a>
              <a
                href="/services/plugins"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  ...font,
                }}
              >
                View AI Plugins
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
                What I <span style={gradientText}>build</span>
              </h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto" style={font}>
                Five AI capability areas — mix and match based on your institution's priorities.
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
                From first conversation to production AI system — a clear five-step process.
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
              Ready to add AI to your Moodle?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={font}>
              Tell me what you're trying to automate or improve and I'll design a system that fits your platform, budget, and privacy requirements.
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
              Start a Conversation <ArrowRight size={16} />
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
