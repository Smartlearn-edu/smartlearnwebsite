import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useT } from "@/i18n";

const DASHBOARD_URL = "https://smartlearn.education/local/smartdashboard";

const LOGO_URL =
  "https://smartlearn.education/pluginfile.php/1/theme_moove/logo/1774651533/2024-10-31_01-57-removebg-preview.png";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [location] = useLocation();
  const { t, lang, isRTL, toggle } = useT();

  const isServicePage = location.startsWith("/services/") || location.startsWith("/success-stories");

  const homeLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stories, href: "/success-stories", isRoute: true },
    { label: t.nav.contact, href: "#contact" },
  ];

  const serviceLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.stories, href: "/success-stories", isRoute: true },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const navLinks = isServicePage ? serviceLinks : homeLinks;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const LogoContent = () =>
    !logoError ? (
      <img
        src={LOGO_URL}
        alt="Smart Learn"
        className="h-8 w-auto object-contain"
        onError={() => setLogoError(true)}
      />
    ) : (
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
          style={{ background: "linear-gradient(135deg, #6900A3, #c084fc)" }}
        >
          SL
        </div>
        <span className="font-bold text-white text-sm tracking-wide" style={font}>
          Smart Learn
        </span>
      </div>
    );

  const BackIcon = isRTL ? ArrowRight : ArrowLeft;
  const langLabel = lang === "en" ? "🇸🇦 عربي" : "🇬🇧 EN";
  const langLabelShort = lang === "en" ? "عربي" : "EN";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.06]" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(7,7,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isServicePage && (
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
              style={font}
            >
              <BackIcon size={15} />
              {t.nav.backToHome}
            </Link>
          )}
          <Link href={isServicePage ? "/" : "/#home"} className="flex items-center gap-2.5">
            <LogoContent />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                style={font}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                style={font}
              >
                {l.label}
              </a>
            )
          )}
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg font-semibold text-purple-300 transition-all duration-200 hover:text-white hover:bg-white/10"
            style={{ border: "1px solid rgba(168,85,247,0.4)", ...font }}
          >
            {t.nav.dashboard}
          </a>
          <a
            href={isServicePage ? "/#contact" : "#contact"}
            className="text-sm px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}
          >
            {t.nav.hireMe}
          </a>
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg font-bold transition-all duration-200 hover:opacity-80"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c084fc",
              ...font,
            }}
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {langLabel}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="text-slate-400 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-b border-white/[0.06] px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "rgba(13,13,26,0.97)", backdropFilter: "blur(20px)" }}
        >
          {isServicePage && (
            <Link
              href="/"
              className="text-sm text-purple-400 font-semibold flex items-center gap-1.5 py-1"
              style={font}
              onClick={() => setOpen(false)}
            >
              <BackIcon size={14} />
              {t.nav.backToHome}
            </Link>
          )}
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 hover:text-white transition-colors py-1"
                style={font}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 hover:text-white transition-colors py-1"
                style={font}
              >
                {l.label}
              </a>
            )
          )}
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex text-sm px-4 py-2 rounded-lg font-semibold text-purple-300 self-start"
            style={{ border: "1px solid rgba(168,85,247,0.4)", ...font }}
          >
            {t.nav.dashboard}
          </a>
          <button
            onClick={() => { toggle(); setOpen(false); }}
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg font-bold transition-all duration-200 self-start"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c084fc",
              ...font,
            }}
          >
            {langLabelShort === "عربي" ? "🇸🇦" : "🇬🇧"} {langLabelShort}
          </button>
        </div>
      )}
    </header>
  );
}
