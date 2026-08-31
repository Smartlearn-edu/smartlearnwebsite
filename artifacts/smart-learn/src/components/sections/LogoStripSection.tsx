import React from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const LOGOS: { initials: string; name: string; color: string; src?: string }[] = [
  { initials: "MDL", name: "Moodle 4.x / 5.x", color: "#f97316" },
  { initials: "PHP", name: "PHP 8.1 - 8.3", color: "#8b5cf6" },
  { initials: "AI", name: "OpenAI & Claude", color: "#10b981" },
  { initials: "N8N", name: "n8n Automation", color: "#ec4899" },
  { initials: "SQL", name: "MariaDB / MySQL", color: "#0284c7" },
  { initials: "RDS", name: "Redis Caching", color: "#dc2626" },
  { initials: "NGX", name: "NGINX & Linux", color: "#16a34a" },
  { initials: "RCT", name: "React & TypeScript", color: "#06b6d4" },
];

const SECTION_TEXT = {
  en: {
    badge: "⚡ Tech Stack",
    heading: "Technologies &",
    headingGradient: "Ecosystem",
  },
  ar: {
    badge: "⚡ بيئة العمل والتقنيات",
    heading: "التقنيات و",
    headingGradient: "بيئة العمل المعتمدة",
  },
};

function LogoBadge({ logo }: { logo: (typeof LOGOS)[number] }) {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (logo.src && !imgFailed) {
    return (
      <img
        src={logo.src}
        alt={logo.name}
        className="w-9 h-9 rounded-xl object-contain flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.06)" }}
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0"
      style={{ background: logo.color, opacity: 0.9 }}
    >
      {logo.initials}
    </div>
  );
}

function LogoItem({ logo }: { logo: (typeof LOGOS)[number] }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-2xl mx-3"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        minWidth: 180,
      }}
    >
      <LogoBadge logo={logo} />
      <span className="text-base font-semibold text-slate-200 leading-tight" style={font}>
        {logo.name}
      </span>
    </div>
  );
}

export function LogoStripSection() {
  const { lang, isRTL } = useT();
  const txt = SECTION_TEXT[lang];

  const duplicated = [...LOGOS, ...LOGOS];

  const gradientText: React.CSSProperties = {
    background: "linear-gradient(135deg, #a855f7, #c084fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section className="py-16 px-0 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-ltr 28s linear infinite;
        }
        .marquee-track-rtl {
          display: flex;
          width: max-content;
          animation: marquee-rtl 28s linear infinite;
        }
        .marquee-track:hover,
        .marquee-track-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs font-black tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "#a855f7",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.2)",
              ...font,
            }}
          >
            {txt.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white" style={font}>
            {txt.heading}{" "}
            <span style={gradientText}>{txt.headingGradient}</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-y-0 start-0 z-10 w-24 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #07070f, transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 end-0 z-10 w-24 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #07070f, transparent)",
          }}
        />

        <div className="overflow-hidden py-2">
          <div className={isRTL ? "marquee-track-rtl" : "marquee-track"}>
            {duplicated.map((logo, i) => (
              <LogoItem key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
