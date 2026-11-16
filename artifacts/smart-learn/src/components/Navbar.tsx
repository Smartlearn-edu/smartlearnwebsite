import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, ArrowRight, Puzzle } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useT } from "@/i18n";

const DASHBOARD_URL = "https://smartlearn.education/local/smartdashboard";

function SmartLearnMark() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#18181B" />
        <path
          d="M8.5 10.5C8.5 9.67 9.17 9 10 9H15V22.5H10C9.17 22.5 8.5 21.83 8.5 21V10.5Z"
          fill="#FAF8F4"
        />
        <path
          d="M17 9H22C22.83 9 23.5 9.67 23.5 10.5V21C23.5 21.83 22.83 22.5 22 22.5H17V9Z"
          fill="#C2410C"
        />
        <circle cx="20.25" cy="13.5" r="1.5" fill="#FAF8F4" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-base tracking-tight text-[#18181B]">
          Smart Learn
        </span>
        <span className="text-[10px] font-semibold tracking-wide text-[#52525B]">
          Moodle Studio
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { t, lang, isRTL, toggle } = useT();

  const isSubPage = location !== "/";

  const navLinks = [
    { label: t.nav.plugins, href: "/services/plugins", isRoute: true, highlight: true },
    { label: t.nav.services, href: isSubPage ? "/#services" : "#services", isRoute: false },
    { label: t.nav.pricing, href: "/pricing", isRoute: true },
    { label: t.nav.stories, href: "/success-stories", isRoute: true },
    { label: t.nav.blog, href: "/blog", isRoute: true },
    { label: t.nav.docs, href: "/docs", isRoute: true },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const BackIcon = isRTL ? ArrowRight : ArrowLeft;
  const langLabel = lang === "en" ? "العربية" : "English";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-200 border-b"
      style={{
        backgroundColor: scrolled ? "rgba(250, 248, 244, 0.94)" : "rgba(250, 248, 244, 0.8)",
        backdropFilter: "blur(12px)",
        borderColor: scrolled ? "#E2DBD0" : "rgba(226, 219, 208, 0.55)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {isSubPage && (
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#52525B] hover:text-[#18181B] transition-colors me-1"
            >
              <BackIcon size={15} aria-hidden="true" />
              <span>{t.nav.backToHome}</span>
            </Link>
          )}
          <Link href="/" className="flex items-center focus-visible:rounded-lg">
            <SmartLearnMark />
          </Link>
        </div>

        <nav aria-label={lang === "ar" ? "التنقل الرئيسي" : "Primary"} className="hidden lg:flex items-center gap-5">
          {navLinks.map((l) => {
            const isActive = l.isRoute && location.startsWith(l.href);
            const cls = `inline-flex items-center gap-1.5 text-sm font-semibold transition-colors whitespace-nowrap py-1 ${
              isActive
                ? "text-[#C2410C]"
                : l.highlight
                ? "text-[#18181B] hover:text-[#C2410C]"
                : "text-[#3F3F46] hover:text-[#18181B]"
            }`;
            return l.isRoute ? (
              <Link key={l.href} href={l.href} className={cls}>
                {l.highlight && <Puzzle size={14} className="text-[#C2410C]" aria-hidden="true" />}
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className={cls}>
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-2 rounded-lg font-semibold text-[#3F3F46] hover:text-[#18181B] hover:bg-[#F2EEE6] transition-colors whitespace-nowrap"
          >
            {t.nav.dashboard}
          </a>
          <button
            type="button"
            onClick={toggle}
            className="text-sm px-3 py-2 rounded-lg font-semibold border border-[#E2DBD0] bg-white text-[#18181B] hover:bg-[#F2EEE6] transition-colors cursor-pointer whitespace-nowrap"
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {langLabel}
          </button>
          <a
            href={isSubPage ? "/#contact" : "#contact"}
            className="text-sm px-4 py-2 rounded-lg font-bold text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors whitespace-nowrap shadow-xs"
          >
            {t.nav.hireMe}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            className="text-xs px-2.5 py-1.5 rounded-lg font-semibold border border-[#E2DBD0] bg-white text-[#18181B] cursor-pointer"
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            type="button"
            className="text-[#18181B] hover:bg-[#F2EEE6] p-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={lang === "ar" ? "القائمة المتنقلة" : "Mobile"}
          className="lg:hidden border-t border-[#E2DBD0] bg-[#FAF8F4] px-6 py-5 flex flex-col gap-3 shadow-lg"
        >
          {isSubPage && (
            <Link
              href="/"
              className="text-sm text-[#C2410C] font-semibold flex items-center gap-1.5 py-1.5"
              onClick={() => setOpen(false)}
            >
              <BackIcon size={15} aria-hidden="true" />
              {t.nav.backToHome}
            </Link>
          )}
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-base font-semibold text-[#18181B] hover:text-[#C2410C] py-1.5"
              >
                {l.highlight && <Puzzle size={15} className="text-[#C2410C]" aria-hidden="true" />}
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[#18181B] hover:text-[#C2410C] py-1.5"
              >
                {l.label}
              </a>
            )
          )}
          <div className="pt-3 mt-1 border-t border-[#E2DBD0] flex flex-wrap gap-3">
            <a
              href={isSubPage ? "/#contact" : "#contact"}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412]"
            >
              {t.nav.hireMe}
            </a>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-semibold text-sm border border-[#E2DBD0] bg-white text-[#18181B]"
            >
              {t.nav.dashboard}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
