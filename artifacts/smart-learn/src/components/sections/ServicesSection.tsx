import { motion } from "framer-motion";
import { Server, Puzzle, Bot, Workflow, GraduationCap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Server,
    iconColor: "#c084fc",
    iconBg: "rgba(168,85,247,0.12)",
    title: "Moodle Installation, Migration & Maintenance",
    description:
      "Full lifecycle Moodle management: fresh installations, version upgrades, server migrations, performance tuning, and ongoing maintenance. I handle everything from initial setup to disaster recovery so your platform stays online and fast.",
    tags: ["Installation", "Upgrades", "Migration", "Performance", "Bug Fixing"],
    image: "/img/service-moodle.png",
    highlight: false,
  },
  {
    icon: Puzzle,
    iconColor: "#a855f7",
    iconBg: "rgba(168,85,247,0.12)",
    title: "Plugin Development",
    description:
      "Custom Moodle plugin development tailored to your exact requirements. With 4 free plugins published on Moodle.org and 10+ premium plugins, I build activity modules, blocks, local plugins, themes, and custom integrations.",
    tags: ["4 Free on Moodle.org", "10+ Premium Plugins", "PHP", "Moodle API"],
    image: "/img/service-plugins.png",
    highlight: true,
  },
  {
    icon: Bot,
    iconColor: "#c084fc",
    iconBg: "rgba(168,85,247,0.12)",
    title: "AI Integration for Moodle",
    description:
      "Embed AI directly into your Moodle platform: RAG-powered chatbots for every course, Video-to-Text pipelines so students can query lecture content, AI-assisted grading, and LLM-based admin tools that make teaching smarter.",
    tags: ["RAG Chatbots", "LLM Integration", "Video-to-Text", "AI Grading"],
    image: "/img/service-ai.png",
    highlight: false,
  },
  {
    icon: Workflow,
    iconColor: "#a855f7",
    iconBg: "rgba(168,85,247,0.12)",
    title: "n8n Automation for Moodle",
    description:
      "End-to-end automation using n8n and the Moodle REST API: automated grading workflows, enrollment triggers, notification pipelines, and full RAG system builds. Eliminate repetitive admin work for good.",
    tags: ["n8n", "Auto-Grading", "REST API", "Webhooks", "RAG Systems"],
    image: "/img/service-n8n.png",
    highlight: false,
  },
  {
    icon: GraduationCap,
    iconColor: "#c084fc",
    iconBg: "rgba(168,85,247,0.12)",
    title: "Training & Technical Support",
    description:
      "Practical training programs for Moodle administrators and teachers at online academies, schools, and course platforms. Ongoing technical support, documentation, troubleshooting, and remote assistance.",
    tags: ["Admin Training", "Teacher Training", "Remote Support", "Docs"],
    image: "/img/service-training.png",
    highlight: false,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(105,0,163,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#c084fc",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            ⚡ Services
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            What I <span className="gradient-text">Deliver</span>
          </h2>
          <p
            className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            Five focused service areas to cover every aspect of building, improving, and scaling
            your Moodle-powered education platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} i={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {services.slice(3).map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  i,
}: {
  svc: (typeof services)[0];
  i: number;
}) {
  const Icon = svc.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group relative rounded-2xl overflow-hidden cursor-default flex flex-col"
      style={{
        background: svc.highlight
          ? "linear-gradient(160deg, rgba(105,0,163,0.2) 0%, rgba(168,85,247,0.08) 100%)"
          : "rgba(255,255,255,0.03)",
        border: svc.highlight
          ? "1px solid rgba(168,85,247,0.35)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {svc.highlight && (
        <div
          className="absolute top-3 right-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            background: "linear-gradient(135deg, #6900A3, #a855f7)",
            color: "#fff",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          Featured
        </div>
      )}

      <div className="relative h-40 overflow-hidden">
        <img
          src={svc.image}
          alt={svc.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,7,15,0) 30%, rgba(7,7,15,0.95) 100%)",
          }}
        />
        <div
          className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: svc.iconBg, backdropFilter: "blur(8px)" }}
        >
          <Icon size={20} style={{ color: svc.iconColor }} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-black text-white mb-2.5 leading-snug"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {svc.title}
        </h3>
        <p
          className="text-slate-400 leading-relaxed text-sm mb-4 flex-1"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {svc.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {svc.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{
                background: "rgba(168,85,247,0.1)",
                color: "#c084fc",
                border: "1px solid rgba(168,85,247,0.2)",
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{ color: "#a855f7", fontFamily: "'Cairo', sans-serif" }}
        >
          Get a Quote
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}
