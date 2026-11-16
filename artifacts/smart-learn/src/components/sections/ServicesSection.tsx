import { Server, Puzzle, Bot, Workflow, GraduationCap, Smartphone } from "lucide-react";
import { Link } from "wouter";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";

const slugs = ["moodle-core", "plugins", "ai", "n8n", "training", "mobile-app"] as const;
const icons = [Server, Puzzle, Bot, Workflow, GraduationCap, Smartphone];

export function ServicesSection() {
  const { t, isRTL } = useT();

  const services = t.services.items.map((item, i) => ({
    ...item,
    slug: slugs[i],
    icon: icons[i],
    isPrimary: slugs[i] === "plugins",
  }));

  return (
    <section
      id="services"
      className="py-16 sm:py-20 px-5 sm:px-6 bg-[#F2EEE6] border-y border-[#E2DBD0]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
            {t.services.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] mb-3">
            {t.services.heading}{" "}
            <span className="text-[#C2410C]">{t.services.headingGradient}</span>
          </h2>
          <p className="text-base text-[#3F3F46] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.slug}
                className={`rounded-2xl p-6 flex flex-col border transition-all duration-150 ${
                  svc.isPrimary
                    ? "bg-[#FFF3EB] border-[#FDBA74] shadow-xs"
                    : "bg-white border-[#E2DBD0] hover:border-[#C9C0B2]"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      svc.isPrimary
                        ? "bg-[#C2410C] border-[#C2410C] text-white"
                        : "bg-[#FAF8F4] border-[#E2DBD0] text-[#581C87]"
                    }`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  {svc.isPrimary && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#C2410C] border border-[#FED7AA]">
                      {t.services.featured}
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-lg font-bold text-[#18181B] mb-2 leading-snug">
                  {svc.title}
                </h3>

                <p className="text-sm text-[#3F3F46] leading-relaxed mb-4 flex-1">
                  {svc.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md font-medium bg-[#FAF8F4] text-[#3F3F46] border border-[#E2DBD0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${svc.slug}`}
                  className={`inline-flex items-center justify-between gap-2 w-full px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    svc.isPrimary
                      ? "bg-[#C2410C] text-white hover:bg-[#9A3412]"
                      : "bg-[#FAF8F4] text-[#18181B] border border-[#E2DBD0] hover:bg-[#F2EEE6]"
                  }`}
                >
                  <span>{t.services.learnMore}</span>
                  <DirectionalArrow size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
