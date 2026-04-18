import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Quote, TrendingUp, Link as LinkIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useT } from "@/i18n";
import { useTestimonials } from "@/hooks/useTestimonials";
import type { Testimonial } from "@/hooks/useTestimonials";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const PAGE_TEXT = {
  en: {
    title: "Success Stories — Smart Learn",
    description: "Read real success stories from institutions that transformed their Moodle platforms with Smart Learn.",
    badge: "Smart Learn · Success Stories",
    heading: "Real Results,",
    headingGradient: "Real Clients",
    sub: "From small training centres to university campuses — here's what clients achieved.",
    outcome: "Key Outcome",
    readMore: "Related Service",
    empty: "Success stories coming soon.",
  },
  ar: {
    title: "قصص النجاح — Smart Learn",
    description: "اقرأ قصص نجاح حقيقية من مؤسسات حوّلت منصات Moodle مع Smart Learn.",
    badge: "Smart Learn · قصص النجاح",
    heading: "نتائج حقيقية،",
    headingGradient: "عملاء حقيقيون",
    sub: "من مراكز التدريب الصغيرة إلى حرم الجامعات — إليك ما حققه العملاء.",
    outcome: "النتيجة الرئيسية",
    readMore: "الخدمة ذات الصلة",
    empty: "قصص النجاح قادمة قريباً.",
  },
};

const SERVICE_LABELS: Record<string, { en: string; ar: string }> = {
  n8n: { en: "n8n Automation", ar: "أتمتة n8n" },
  ai: { en: "AI Integration", ar: "تكامل الذكاء الاصطناعي" },
  "moodle-core": { en: "Moodle Core Services", ar: "خدمات Moodle الأساسية" },
  training: { en: "Moodle Training", ar: "تدريب Moodle" },
  "mobile-app": { en: "Branded Mobile App", ar: "التطبيق المخصص" },
  plugins: { en: "Plugins", ar: "الإضافات" },
};

function Avatar({ src, name }: { src: string; name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex-shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
          style={{ border: "2px solid rgba(168,85,247,0.4)" }}
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const fallback = document.createElement("div");
            fallback.className = "w-16 h-16 rounded-full flex items-center justify-center font-black text-white";
            fallback.style.background = "linear-gradient(135deg,#6900A3,#a855f7)";
            fallback.textContent = initials;
            el.parentElement?.appendChild(fallback);
          }}
        />
      ) : (
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center font-black text-white text-lg"
          style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)" }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

function StoryCard({ item, lang, txt }: { item: Testimonial; lang: "en" | "ar"; txt: typeof PAGE_TEXT.en }) {
  const name = lang === "ar" && item.nameAr ? item.nameAr : item.name;
  const role = lang === "ar" && item.roleAr ? item.roleAr : item.role;
  const company = lang === "ar" && item.companyAr ? item.companyAr : item.company;
  const quote = lang === "ar" && item.quoteAr ? item.quoteAr : item.quote;
  const story = lang === "ar" && item.storyAr ? item.storyAr : item.story;
  const outcome = lang === "ar" && item.outcomeAr ? item.outcomeAr : item.outcome;
  const svcLabel = item.serviceSlug ? SERVICE_LABELS[item.serviceSlug]?.[lang] : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(168,85,247,0.15)",
      }}
    >
      <div className="p-8">
        <div className="flex items-start gap-5 mb-6">
          <Avatar src={item.image} name={name} />
          <div className="flex-1">
            <h3 className="text-white font-black text-lg" style={font}>{name}</h3>
            <p className="text-slate-200 text-base" style={font}>
              {role}{role && company ? " · " : ""}{company}
            </p>
            {svcLabel && (
              <span
                className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  color: "#c084fc",
                  ...font,
                }}
              >
                <LinkIcon size={11} /> {txt.readMore}: {svcLabel}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <Quote size={18} style={{ color: "#6900A3", marginBottom: 10 }} />
          <blockquote className="text-slate-300 text-base leading-relaxed italic" style={font}>
            "{quote}"
          </blockquote>
        </div>

        {story && (
          <p className="text-slate-200 text-base leading-relaxed mb-6" style={font}>
            {story}
          </p>
        )}

        {outcome && (
          <div
            className="flex items-start gap-3 p-4 rounded-xl"
            style={{ background: "rgba(105,0,163,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            <TrendingUp size={16} style={{ color: "#a855f7", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-xs font-black text-purple-400 uppercase tracking-widest mb-1" style={font}>
                {txt.outcome}
              </p>
              <p className="text-white text-sm font-semibold" style={font}>{outcome}</p>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function SuccessStoriesPage() {
  const { lang, isRTL } = useT();
  const { data: testimonials, isLoading } = useTestimonials();
  const txt = PAGE_TEXT[lang];

  const gradientText: React.CSSProperties = {
    background: "linear-gradient(135deg, #a855f7, #c084fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <>
      <Helmet>
        <title>{txt.title}</title>
        <meta name="description" content={txt.description} />
        <link rel="canonical" href="https://home.smartlearn.education/success-stories" />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />

        <section className="relative pt-32 pb-16 px-6 text-center" dir={isRTL ? "rtl" : "ltr"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <span
              className="inline-block text-xs font-black tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
              style={{
                color: "#a855f7",
                background: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.2)",
                ...font,
              }}
            >
              {txt.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={font}>
              {txt.heading}{" "}
              <span style={gradientText}>{txt.headingGradient}</span>
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed" style={font}>{txt.sub}</p>
          </motion.div>
        </section>

        <section className="pb-24 px-6" dir={isRTL ? "rtl" : "ltr"}>
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-64 rounded-2xl animate-pulse"
                    style={{ background: "rgba(255,255,255,0.04)" }} />
                ))}
              </div>
            ) : testimonials && testimonials.length > 0 ? (
              <div className="space-y-6">
                {testimonials.map((item) => (
                  <StoryCard key={item.id} item={item} lang={lang} txt={txt} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500 py-16" style={font}>{txt.empty}</p>
            )}
          </div>
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
