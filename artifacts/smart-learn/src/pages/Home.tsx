import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mohammad Nabil | Moodle Expert &amp; AI Automation — Smart Learn</title>
        <meta
          name="description"
          content="Expert Moodle engineering, AI-RAG systems, n8n automation, and LMS plugin development. Serving education institutions worldwide from Egypt."
        />
        <meta
          name="keywords"
          content="Moodle RAG System, Automated Moodle Grading, n8n Moodle Expert Egypt, Mohammad Nabil Moodle, Moodle AI chatbot, LMS automation Egypt, Moodle plugin developer"
        />
        <meta property="og:title" content="Mohammad Nabil | Moodle Expert & AI Automation — Smart Learn" />
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

        <footer className="py-8 px-6 text-center border-t border-white/[0.04]">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Smart Learn · Mohammad Nabil · Egypt
          </p>
        </footer>
      </div>
    </>
  );
}
