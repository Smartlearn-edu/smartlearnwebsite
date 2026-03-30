import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";
import { useT } from "@/i18n";
import { useTestimonials } from "@/hooks/useTestimonials";
import type { Testimonial } from "@/hooks/useTestimonials";
import { Link } from "wouter";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const SECTION_TEXT = {
  en: {
    badge: "🌟 Client Stories",
    heading: "What Clients",
    headingGradient: "Say",
    sub: "Real results from real institutions — from Egypt to the Gulf and beyond.",
    cta: "Read Full Success Stories",
  },
  ar: {
    badge: "🌟 قصص العملاء",
    heading: "ماذا يقول",
    headingGradient: "العملاء",
    sub: "نتائج حقيقية من مؤسسات حقيقية — من مصر إلى الخليج وما وراءها.",
    cta: "اقرأ قصص النجاح كاملة",
  },
};

function Avatar({ src, name }: { src: string; name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const [imgFailed, setImgFailed] = React.useState(false);

  if (src && !imgFailed) {
    return (
      <img
        src={src}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
        style={{ border: "2px solid rgba(168,85,247,0.4)" }}
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm"
      style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)" }}
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ item, lang }: { item: Testimonial; lang: "en" | "ar" }) {
  const name = lang === "ar" && item.nameAr ? item.nameAr : item.name;
  const role = lang === "ar" && item.roleAr ? item.roleAr : item.role;
  const company = lang === "ar" && item.companyAr ? item.companyAr : item.company;
  const quote = lang === "ar" && item.quoteAr ? item.quoteAr : item.quote;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(168,85,247,0.15)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Quote size={20} style={{ color: "#6900A3", marginBottom: 16, flexShrink: 0 }} />
      <p className="text-slate-300 text-sm leading-relaxed flex-1" style={font}>
        "{quote}"
      </p>
      <div className="flex items-center gap-3 mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Avatar src={item.image} name={name} />
        <div>
          <div className="text-white font-bold text-sm" style={font}>{name}</div>
          <div className="text-slate-500 text-xs" style={font}>
            {role}{role && company ? " · " : ""}{company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const { lang, isRTL } = useT();
  const { data: testimonials, isLoading } = useTestimonials();
  const txt = SECTION_TEXT[lang];

  const gradientText: React.CSSProperties = {
    background: "linear-gradient(135deg, #a855f7, #c084fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const featured = (testimonials ?? []).filter((t) => t.featured).slice(0, 6);

  if (!isLoading && featured.length === 0) return null;

  return (
    <section className="py-20 px-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={font}>
            {txt.heading}{" "}
            <span style={gradientText}>{txt.headingGradient}</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto" style={font}>{txt.sub}</p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-52 rounded-2xl animate-pulse"
                style={{ background: "rgba(255,255,255,0.04)" }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <TestimonialCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-10"
        >
          <Link href="/success-stories">
            <span
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer"
              style={{
                background: "rgba(105,0,163,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                ...font,
              }}
            >
              {isRTL && <ArrowLeft size={16} />}
              {txt.cta}
              {!isRTL && <ArrowRight size={16} />}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
