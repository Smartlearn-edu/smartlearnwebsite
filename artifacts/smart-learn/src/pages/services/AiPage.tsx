import { Bot } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export function AiPage() {
  return (
    <ServicePage
      title="AI Integration for Moodle"
      tagline="Bring Intelligent Automation to Your Learning Platform"
      description="I embed AI tools directly into Moodle so that students learn smarter, teachers work faster, and administrators spend less time on repetitive tasks."
      icon={Bot}
      iconColor="#c084fc"
      sections={[
        {
          icon: "🤖",
          title: "AI Chatbots for Moodle",
          placeholder:
            "Dedicated AI chatbots embedded into every Moodle course, powered by large language models. Students ask questions about course material and receive instant, accurate answers. The chatbot is scoped to the course content so it cannot hallucinate outside its knowledge base. Setup includes LLM provider integration, Moodle plugin installation, and teacher-facing configuration panel.",
        },
        {
          icon: "🧠",
          title: "RAG Systems (Retrieval-Augmented Generation)",
          placeholder:
            "Full RAG pipeline implementation connecting your Moodle content to a vector database. Course PDFs, videos, quizzes, and forum posts are indexed and made queryable by the AI. Supports multilingual content and produces source-cited answers. Suitable for institutions with large content libraries where accuracy is critical.",
        },
        {
          icon: "🎬",
          title: "Video-to-Text Pipelines",
          placeholder:
            "Automated transcription of lecture recordings and video content using speech-to-text AI. Transcripts are indexed into the RAG system so students can search and ask questions about video lectures just like written materials. Supports Arabic and English. Works with Moodle's built-in video resources and external platforms.",
        },
        {
          icon: "📊",
          title: "AI-Assisted Grading",
          placeholder:
            "Semi-automated grading tools powered by LLMs for short-answer and essay questions. AI generates grading suggestions with reasoning that the teacher can approve, adjust, or override. Reduces marking time significantly while keeping teachers in control of final grades.",
        },
        {
          icon: "🛠️",
          title: "LLM Admin Tools",
          placeholder:
            "AI-powered admin interfaces: course content summarisers, quiz generator from uploaded PDFs, automated user feedback analysis, and smart reporting dashboards. These tools are delivered as Moodle plugins or standalone dashboards connected to Moodle via web services.",
        },
      ]}
    />
  );
}
