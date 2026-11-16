import React from "react";
import { Quote, ExternalLink } from "lucide-react";
import { useT } from "@/i18n";
import { useTestimonials } from "@/hooks/useTestimonials";
import type { Testimonial } from "@/hooks/useTestimonials";
import { Link } from "wouter";
import { DirectionalArrow } from "@/components/DirectionalArrow";

const SECTION_TEXT = {
  en: {
    badge: "Client Feedback",
    heading: "What schools &",
    headingHighlight: "academies say",
    sub: "Real feedback from Moodle administrators, academy founders, and training centers.",
    cta: "Read Full Success Stories",
    fallbackNote: "Verified reviews are published on Mostaql & Khamsat, alongside detailed institutional case studies.",
  },
  ar: {
    badge: "آراء العملاء",
    heading: "ماذا تقول المدارس",
    headingHighlight: "والأكاديميات",
    sub: "تجارب حقيقية لمديري منصات موودل ومؤسسي الأكاديميات ومراكز التدريب.",
    cta: "اقرأ قصص النجاح كاملة",
    fallbackNote: "التقييمات الموثقة منشورة على منصتي مستقل وخمسات إلى جانب دراسات حالة لمشاريع المؤسسات.",
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
        className="w-11 h-11 rounded-full object-cover border border-[#E2DBD0]"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm bg-[#581C87]">
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
    <article className="flex flex-col h-full rounded-2xl p-6 bg-white border border-[#E2DBD0] shadow-2xs">
      <Quote size={18} className="text-[#C2410C] mb-3 flex-shrink-0" aria-hidden="true" />
      <p className="text-[#3F3F46] text-sm leading-relaxed flex-1">"{quote}"</p>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#E2DBD0]">
        <Avatar src={item.image} name={name} />
        <div>
          <div className="text-[#18181B] font-bold text-sm">{name}</div>
          <div className="text-[#52525B] text-xs">
            {role}
            {role && company ? " · " : ""}
            {company}
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const { lang, isRTL } = useT();
  const { data: testimonials, isLoading } = useTestimonials();
  const txt = SECTION_TEXT[lang];

  const featured = (testimonials ?? []).filter((t) => t.featured).slice(0, 6);

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FAF8F4]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
              {txt.badge}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] mb-2">
              {txt.heading}{" "}
              <span className="text-[#581C87]">{txt.headingHighlight}</span>
            </h2>
            <p className="text-base text-[#3F3F46]">{txt.sub}</p>
          </div>

          <Link
            href="/success-stories"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-[#18181B] bg-white border border-[#C9C0B2] hover:bg-[#F2EEE6] transition-colors whitespace-nowrap"
          >
            <span>{txt.cta}</span>
            <DirectionalArrow size={15} />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-44 rounded-2xl bg-[#F2EEE6] border border-[#E2DBD0]" />
            ))}
          </div>
        ) : featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <TestimonialCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#E2DBD0] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#3F3F46] max-w-2xl">{txt.fallbackNote}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://mostaql.com/u/m_nabil_riad/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C2410C] hover:text-[#9A3412]"
              >
                <span>{lang === "ar" ? "تقييمات مستقل" : "Mostaql Reviews"}</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a
                href="https://khamsat.com/user/mohammadnabilriad/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#581C87]"
              >
                <span>{lang === "ar" ? "تقييمات خمسات" : "Khamsat Reviews"}</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
