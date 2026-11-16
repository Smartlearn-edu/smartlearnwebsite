import { Helmet } from "react-helmet-async";
import { Quote, TrendingUp, Link as LinkIcon, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useT } from "@/i18n";
import { useTestimonials } from "@/hooks/useTestimonials";
import type { Testimonial } from "@/hooks/useTestimonials";
import { SocialLinks } from "@/components/SocialLinks";
import React from "react";

const PAGE_TEXT = {
  en: {
    title: "Success Stories — Smart Learn",
    description: "Read real success stories from institutions that transformed their Moodle platforms with Smart Learn.",
    badge: "Client Case Studies",
    heading: "Real results from",
    headingGradient: "real institutions",
    sub: "From private academies to university campuses — verified Moodle outcomes across Egypt, the Gulf, and beyond.",
    outcome: "Key Outcome",
    readMore: "Related Service",
    empty: "Institutional case studies are loaded from the live database. You can also browse verified client reviews directly on Mostaql and Khamsat.",
  },
  ar: {
    title: "قصص النجاح — Smart Learn",
    description: "اقرأ قصص نجاح حقيقية من مؤسسات طوّرت منصات موودل مع Smart Learn.",
    badge: "دراسات حالة",
    heading: "نتائج حقيقية مع",
    headingGradient: "مؤسسات حقيقية",
    sub: "من الأكاديميات الخاصة إلى الجامعات — نتائج موثقة لمنصات موودل في مصر والخليج.",
    outcome: "النتيجة الرئيسية",
    readMore: "الخدمة ذات الصلة",
    empty: "قصص النجاح التفصيلية تُحمَّل من قاعدة البيانات الحية، ويمكنك أيضاً الاطلاع على تقييمات العملاء الموثقة مباشرة على مستقل وخمسات.",
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
  const [failed, setFailed] = React.useState(false);
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex-shrink-0">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-[#E2DBD0]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-base bg-[#581C87]">
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
    <article className="rounded-2xl overflow-hidden bg-white border border-[#E2DBD0] shadow-2xs p-6 sm:p-8">
      <div className="flex items-start gap-4 mb-5">
        <Avatar src={item.image} name={name} />
        <div className="flex-1">
          <h3 className="font-sans text-lg font-bold text-[#18181B]">{name}</h3>
          <p className="text-sm text-[#52525B]">
            {role}
            {role && company ? " · " : ""}
            {company}
          </p>
          {svcLabel && (
            <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F2EEE6] border border-[#E2DBD0] text-[#581C87]">
              <LinkIcon size={11} aria-hidden="true" />
              <span>
                {txt.readMore}: {svcLabel}
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="mb-5">
        <Quote size={18} className="text-[#C2410C] mb-2" aria-hidden="true" />
        <blockquote className="text-[#18181B] text-base leading-relaxed font-medium">
          "{quote}"
        </blockquote>
      </div>

      {story && <p className="text-[#3F3F46] text-sm sm:text-base leading-relaxed mb-5">{story}</p>}

      {outcome && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#ECFDF3] border border-[#BBF7D0]">
          <TrendingUp size={16} className="text-[#15803D] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold text-[#15803D] uppercase tracking-wider mb-0.5">
              {txt.outcome}
            </p>
            <p className="text-[#18181B] text-sm font-semibold">{outcome}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export function SuccessStoriesPage() {
  const { lang, isRTL, t } = useT();
  const { data: testimonials, isLoading } = useTestimonials();
  const txt = PAGE_TEXT[lang];

  return (
    <>
      <Helmet>
        <title>{txt.title}</title>
        <meta name="description" content={txt.description} />
        <link rel="canonical" href="https://services.smartlearn.education/success-stories" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />

        <section className="pt-28 pb-12 px-5 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C2410C] mb-3">
              {txt.badge}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#18181B] mb-4 leading-tight">
              {txt.heading} <span className="text-[#581C87]">{txt.headingGradient}</span>
            </h1>
            <p className="text-[#3F3F46] text-base sm:text-lg leading-relaxed">{txt.sub}</p>
          </div>
        </section>

        <section className="pb-20 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="space-y-5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-52 rounded-2xl bg-[#F2EEE6] border border-[#E2DBD0]" />
                ))}
              </div>
            ) : testimonials && testimonials.length > 0 ? (
              <div className="space-y-6">
                {testimonials.map((item) => (
                  <StoryCard key={item.id} item={item} lang={lang} txt={txt} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-[#E2DBD0] bg-white p-8 text-center">
                <p className="text-[#3F3F46] mb-5">{txt.empty}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://mostaql.com/u/m_nabil_riad/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C2410C] text-white text-sm font-bold"
                  >
                    <span>{lang === "ar" ? "تقييمات مستقل" : "Mostaql Reviews"}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  <a
                    href="https://khamsat.com/user/mohammadnabilriad/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F2EEE6] border border-[#C9C0B2] text-[#18181B] text-sm font-bold"
                  >
                    <span>{lang === "ar" ? "تقييمات خمسات" : "Khamsat Reviews"}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        <footer className="pt-8 pb-24 px-5 sm:px-6 border-t border-[#E2DBD0] bg-[#F2EEE6]">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#52525B]">© {new Date().getFullYear()} {t.footer}</p>
            <SocialLinks size="sm" />
          </div>
        </footer>
      </div>
    </>
  );
}
