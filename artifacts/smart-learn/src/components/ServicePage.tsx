import { LucideIcon, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { DirectionalArrow } from "@/components/DirectionalArrow";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

export interface SubSection {
  title: string;
  placeholder: string;
  icon?: string;
}

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  sections: SubSection[];
}

export function ServicePage({
  title,
  tagline,
  description,
  icon: Icon,
  sections,
}: ServicePageProps) {
  const { lang, isRTL, t } = useT();
  const waLabel = lang === "ar" ? "تحدث على واتساب" : "Chat on WhatsApp";
  const waMsg =
    lang === "ar"
      ? "مرحباً! أريد الاستفسار عن خدمات Moodle لديكم."
      : "Hi! I'd like to ask about your Moodle services.";

  return (
    <>
      <Helmet>
        <title>{title} — Smart Learn</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />

        <section className="pt-28 pb-14 px-5 sm:px-6 workbench-grid-bg border-b border-[#E2DBD0]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-[#FFF3EB] border border-[#FED7AA] text-[#C2410C]">
              <Icon size={26} aria-hidden="true" />
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-3">
              Smart Learn · Service
            </p>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#18181B] leading-tight mb-4">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-[#3F3F46] max-w-2xl mx-auto leading-relaxed mb-3 font-medium">
              {tagline}
            </p>

            <p className="text-base text-[#52525B] max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        <section className="py-14 px-5 sm:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
            {sections.map((sec) => (
              <article
                key={sec.title}
                className="rounded-2xl p-6 sm:p-7 bg-white border border-[#E2DBD0] shadow-2xs"
              >
                <h2 className="font-sans text-lg font-bold text-[#18181B] mb-2">
                  {sec.title}
                </h2>
                <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                  {sec.placeholder}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 px-5 sm:px-6">
          <div className="max-w-2xl mx-auto text-center rounded-2xl py-10 px-6 sm:px-8 bg-[#F2EEE6] border border-[#E2DBD0]">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#18181B] mb-2.5">
              {lang === "ar" ? "مهتم بهذه الخدمة؟" : "Interested in this service?"}
            </h2>
            <p className="text-[#3F3F46] mb-7 leading-relaxed">
              {lang === "ar"
                ? "أرسل تفاصيل منصتك وسأرد عليك خلال 24 ساعة بخطة تنفيذ واضحة."
                : "Send me a message and I'll get back to you within 24 hours with a clear scope."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors"
              >
                <span>{lang === "ar" ? "اطلب عرض سعر" : "Get a Quote"}</span>
                <DirectionalArrow size={16} />
              </a>
              <a
                href={`https://wa.me/201005822858?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#15803D] hover:bg-[#166534] transition-colors"
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>{waLabel}</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-8 pb-24 px-5 sm:px-6 border-t border-[#E2DBD0] bg-[#F2EEE6]">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#52525B]">© {new Date().getFullYear()} {t.footer}</p>
            <SocialLinks size="sm" />
          </div>
        </footer>
      </div>
    </>
  );
}
