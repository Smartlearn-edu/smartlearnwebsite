import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedPluginsSection } from "@/components/sections/FeaturedPluginsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LogoStripSection } from "@/components/sections/LogoStripSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

export default function Home() {
  const { t, isRTL } = useT();

  return (
    <>
      <Helmet>
        <title>Mohammad Nabil | Moodle Plugins &amp; LMS Engineering — Smart Learn</title>
        <meta
          name="description"
          content="Production Moodle plugins, custom LMS development, AI grading & tutoring tools, and n8n automation built for real schools, academies, and universities."
        />
        <meta
          name="keywords"
          content="Moodle Plugins, SmartLearn Moodle Theme, Moodle AI Grading, Moodle RAG System, n8n Moodle Expert Egypt, Mohammad Nabil Moodle, Moodle plugin developer"
        />
        <link rel="canonical" href="https://services.smartlearn.education/" />
        <meta property="og:title" content="Mohammad Nabil | Moodle Plugins & LMS Engineering — Smart Learn" />
        <meta
          property="og:description"
          content="Production Moodle plugins, custom LMS development, AI grading & tutoring tools, and n8n automation built for real schools, academies, and universities."
        />
        <meta property="og:url" content="https://services.smartlearn.education/" />
        <meta property="og:site_name" content="Smart Learn" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://services.smartlearn.education/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammad Nabil | Moodle Plugins & LMS Engineering — Smart Learn" />
        <meta
          name="twitter:description"
          content="Production Moodle plugins, custom LMS development, AI grading & tutoring tools, and n8n automation built for real schools, academies, and universities."
        />
        <meta name="twitter:image" content="https://services.smartlearn.education/opengraph.jpg" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />
        <HeroSection />
        <FeaturedPluginsSection />
        <ServicesSection />
        <AboutSection />
        <LogoStripSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />

        <footer className="pt-10 pb-20 px-5 sm:px-6 bg-[#F2EEE6] border-t border-[#E2DBD0]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#52525B]">
              © {new Date().getFullYear()} {t.footer}
            </p>
            <SocialLinks size="sm" />
          </div>
        </footer>
      </div>
    </>
  );
}
