import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const LOGO_URL =
  "https://smartlearn.education/pluginfile.php/1/theme_moove/logo/1774651533/2024-10-31_01-57-removebg-preview.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
        <a href="#home" className="flex items-center gap-2.5">
          {!logoError ? (
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
              <span
                className="font-bold text-white text-sm tracking-wide"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                Smart Learn
              </span>
            </div>
          )}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6900A3, #a855f7)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-b border-white/[0.06] px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "rgba(13,13,26,0.97)", backdropFilter: "blur(20px)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-white transition-colors py-1"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
