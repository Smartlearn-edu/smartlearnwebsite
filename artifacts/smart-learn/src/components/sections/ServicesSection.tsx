import { motion } from "framer-motion";
import { Bot, Workflow, Code2, GraduationCap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    iconColor: "#a78bfa",
    iconBg: "rgba(167,139,250,0.12)",
    title: "AI Chatbots & RAG Systems",
    description:
      "Dedicated AI chatbots for every Moodle course using Retrieval-Augmented Generation. Custom plugins for Video-to-Text pipelines — students chat directly with course content and get source-cited answers.",
    tags: ["RAG", "LLM Integration", "Custom Plugins", "Vector Search"],
    tagColor: "rgba(167,139,250,0.12)",
    tagTextColor: "#a78bfa",
    highlight: true,
  },
  {
    icon: Workflow,
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.1)",
    title: "n8n Workflow Automation",
    description:
      "Automated grading and complex workflow engineering to eliminate administrative bottlenecks. Built with n8n Moodle webhooks, REST APIs, and custom nodes that run around the clock.",
    tags: ["n8n", "Auto-Grading", "Moodle API", "Webhooks"],
    tagColor: "rgba(34,211,238,0.08)",
    tagTextColor: "#22d3ee",
  },
  {
    icon: Code2,
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.1)",
    title: "Moodle Development & Plugins",
    description:
      "Full-stack LMS development: 4 free plugins published on Moodle.org and 10+ premium plugins. Deep expertise in migrations, upgrades, and custom theme development.",
    tags: ["Moodle 4.x / 5.x", "PHP", "Plugin Dev", "Migration"],
    tagColor: "rgba(34,211,238,0.08)",
    tagTextColor: "#22d3ee",
  },
  {
    icon: GraduationCap,
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.1)",
    title: "Training & Technical Support",
    description:
      "Structured training programs for Moodle admins and teachers at online academies and schools. Remote troubleshooting, documentation, and ongoing support packages.",
    tags: ["Admin Training", "Teacher Training", "Remote Support", "Documentation"],
    tagColor: "rgba(34,211,238,0.08)",
    tagTextColor: "#22d3ee",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
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
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#a78bfa",
            }}
          >
            ⚡ What I Offer
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Services Built for{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Every service is designed to make your Moodle platform faster, smarter, and more
            autonomous — so you can focus on teaching.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative rounded-2xl p-7 cursor-default"
                style={{
                  background: svc.highlight
                    ? "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(34,211,238,0.04) 100%)"
                    : "rgba(255,255,255,0.03)",
                  border: svc.highlight
                    ? "1px solid rgba(167,139,250,0.2)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {svc.highlight && (
                  <div
                    className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(167,139,250,0.15)",
                      color: "#a78bfa",
                      border: "1px solid rgba(167,139,250,0.3)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: svc.iconBg }}
                >
                  <Icon size={22} style={{ color: svc.iconColor }} />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-5">{svc.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: svc.tagColor,
                        color: svc.tagTextColor,
                        border: `1px solid ${svc.tagTextColor}22`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 opacity-0 group-hover:opacity-100"
                  style={{ color: svc.iconColor }}
                >
                  Discuss This Service
                  <ArrowUpRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
