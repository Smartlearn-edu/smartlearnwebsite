import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Services", "Portfolio", "About"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <span
          className="text-xl font-bold text-cyan-400"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Smart Learn
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 py-1"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
