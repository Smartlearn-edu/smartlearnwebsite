import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { BentoGrid } from "@/components/BentoGrid";
import { HeroTile } from "@/components/tiles/HeroTile";
import { AuthorityTile } from "@/components/tiles/AuthorityTile";
import { ScaleTile } from "@/components/tiles/ScaleTile";
import { ServiceAITile } from "@/components/tiles/ServiceAITile";
import { ServiceN8nTile } from "@/components/tiles/ServiceN8nTile";
import { ServiceMoodleTile } from "@/components/tiles/ServiceMoodleTile";
import { FounderTile } from "@/components/tiles/FounderTile";
import { ServiceTrainingTile } from "@/components/tiles/ServiceTrainingTile";
import { ContactTile } from "@/components/tiles/ContactTile";

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

      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <BentoGrid>
          <HeroTile index={0} />
          <AuthorityTile index={1} />
          <ScaleTile index={2} />
          <ServiceAITile index={3} />
          <ServiceN8nTile index={4} />
          <ServiceMoodleTile index={5} />
          <FounderTile index={6} />
          <ServiceTrainingTile index={7} />
          <ContactTile index={8} />
        </BentoGrid>
      </div>
    </>
  );
}
