import { useState } from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { useT } from "@/i18n";

export function AboutSection() {
  const { t, lang, isRTL } = useT();
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FAF8F4]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
            {t.about.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B]">
            {t.about.heading}{" "}
            <span className="text-[#581C87]">{t.about.headingGradient}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: Real founder portrait, bio & verified platforms */}
          <div className="lg:col-span-6 space-y-5">
            <div className="rounded-2xl border border-[#E2DBD0] bg-white p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#E2DBD0] bg-[#F2EEE6] flex items-center justify-center font-display text-xl font-bold text-[#18181B] flex-shrink-0">
                  {!photoError ? (
                    <img
                      src="/img/mohammad-nabil.jpg"
                      alt={t.about.name}
                      className="w-full h-full object-cover"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    "MN"
                  )}
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-[#18181B]">
                    {t.about.name}
                  </h3>
                  <p className="text-sm font-medium text-[#52525B]">{t.about.role}</p>
                </div>
              </div>

              <p className="text-base text-[#3F3F46] leading-relaxed mb-6">
                {t.about.bio}
              </p>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://mostaql.com/u/m_nabil_riad/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg border border-[#E2DBD0] bg-[#FAF8F4] text-[#18181B] hover:border-[#C9C0B2] transition-colors"
                >
                  <span>{t.about.mostaql}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
                <a
                  href="https://khamsat.com/user/mohammadnabilriad/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg border border-[#E2DBD0] bg-[#FAF8F4] text-[#18181B] hover:border-[#C9C0B2] transition-colors"
                >
                  <span>{t.about.khamsat}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/m-n-riad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg border border-[#E2DBD0] bg-[#FAF8F4] text-[#18181B] hover:border-[#C9C0B2] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Official Moodle.org Community Recognition */}
            <div className="rounded-2xl border border-[#FED7AA] bg-[#FFF3EB] p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#FED7AA] flex items-center justify-center text-[#C2410C] flex-shrink-0">
                <Award size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-sans text-base font-bold text-[#18181B] mb-1">
                  {t.about.communityExpert}
                </h4>
                <p className="text-sm text-[#3F3F46] leading-relaxed mb-2.5">
                  {t.about.badgeDesc}
                </p>
                <a
                  href="https://moodle.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#C2410C] hover:text-[#9A3412]"
                >
                  <span>{t.about.viewMoodle}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Engineering Principles Ledger */}
          <div className="lg:col-span-6 rounded-2xl border border-[#E2DBD0] bg-white p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#581C87] mb-5">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>{t.about.principlesTitle}</span>
            </div>

            <ol className="divide-y divide-[#E2DBD0]">
              {t.about.principles.map((item, idx) => (
                <li key={item.title} className="py-5 first:pt-0 last:pb-0 flex gap-4">
                  <span className="font-mono-slug text-xs font-bold text-[#C2410C] bg-[#FFF3EB] border border-[#FED7AA] w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-sans text-base font-bold text-[#18181B] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#3F3F46] leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 pt-5 border-t border-[#E2DBD0] flex flex-wrap items-center justify-between gap-3 text-xs text-[#52525B]">
              <span>
                {lang === "ar"
                  ? "أكثر من ٧٠ مؤسسة تعليمية في مصر والخليج وبريطانيا"
                  : "70+ institutions across Egypt, the Gulf & the UK"}
              </span>
              <a
                href="https://github.com/Smartlearn-edu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#18181B] hover:text-[#C2410C] inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
