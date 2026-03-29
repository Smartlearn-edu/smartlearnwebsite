import { motion } from "framer-motion";
import { Server, Puzzle, Bot, Workflow, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";

const slugs = ["moodle-core", "plugins", "ai", "n8n", "training"] as const;
const icons = [Server, Puzzle, Bot, Workflow, GraduationCap];
const highlights = [false, true, false, false, false];

export function ServicesSection() {
  const { t } = useT();

  const services = t.services.items.map((item, i) => ({
    ...item,
    slug: slugs[i],
    icon: icons[i],
    iconColor: i % 2 === 0 ? "#c084fc" : "#a855f7",
    iconBg: "rgba(168,85,247,0.12)",
    highlight: highlights[i],
    image: `/img/service-${slugs[i] === "moodle-core" ? "moodle" : slugs[i]}.png`,
  }));

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
            {t.services.badge}
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.services.heading} <span className="gradient-text">{t.services.headingGradient}</span>
          </h2>
          <p
            className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((svc, i) => (
            <ServiceCard key={svc.slug} svc={svc} i={i} learnMore={t.services.learnMore} featured={t.services.featured} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {services.slice(3).map((svc, i) => (
            <ServiceCard key={svc.slug} svc={svc} i={i + 3} learnMore={t.services.learnMore} featured={t.services.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}

type SvcItem = {
  title: string;
  description: string;
  tags: string[];
  slug: (typeof slugs)[number];
  icon: typeof Server;
  iconColor: string;
  iconBg: string;
  highlight: boolean;
  image: string;
};

function ServiceCard({
  svc,
  i,
  learnMore,
  featured,
}: {
  svc: SvcItem;
  i: number;
  learnMore: string;
  featured: string;
}) {
  const Icon = svc.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
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
          className="absolute top-3 end-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            background: "linear-gradient(135deg, #6900A3, #a855f7)",
            color: "#fff",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          {featured}
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
          className="absolute bottom-3 start-4 w-10 h-10 rounded-xl flex items-center justify-center"
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

        <div className="flex flex-wrap gap-1.5 mb-5">
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

        <Link
          href={`/services/${svc.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #6900A3, #a855f7)",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          {learnMore}
          <DirectionalArrow size={15} />
        </Link>
      </div>
    </motion.div>
  );
}

