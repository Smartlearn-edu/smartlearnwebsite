import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

export default function Home() {
  const { t } = useT();

  return (
    <>
      <Helmet>
        <title>Smart Learn</title>
        <meta
          name="description"
          content="Expert Moodle engineering, AI-RAG systems, n8n automation, and LMS plugin development. Serving education institutions worldwide from Egypt."
        />
        <meta
          name="keywords"
          content="Moodle RAG System, Automated Moodle Grading, n8n Moodle Expert Egypt, Mohammad Nabil Moodle, Moodle AI chatbot, LMS automation Egypt, Moodle plugin developer"
        />
        <meta property="og:title" content="Smart Learn" />
        <meta
          property="og:description"
          content="Expert Moodle engineering, AI-RAG systems, n8n automation, and LMS plugin development. Serving education institutions worldwide from Egypt."
        />
        <meta property="og:url" content="https://smartlearn.education" />
        <meta property="og:site_name" content="Smart Learn" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://smartlearn.education/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
        <Navbar />
        <HeroSection />

        <div
          className="max-w-6xl mx-auto"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />

        <ServicesSection />

        <div
          className="max-w-6xl mx-auto"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />

        <AboutSection />

        <div
          className="max-w-6xl mx-auto"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />

        <ContactSection />

        <footer className="py-10 px-6 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
            <SocialLinks size="sm" />
            <p className="text-sm text-slate-600" style={{ fontFamily: "'Cairo', sans-serif" }}>
              © {new Date().getFullYear()} {t.footer}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
