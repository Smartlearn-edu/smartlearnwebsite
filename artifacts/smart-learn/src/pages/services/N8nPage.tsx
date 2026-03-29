import { Workflow } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export function N8nPage() {
  return (
    <ServicePage
      title="n8n Automation for Moodle"
      tagline="Eliminate Repetitive Work with Intelligent Workflows"
      description="Using n8n's visual automation platform connected to the Moodle REST API, I build workflows that run around the clock — freeing your team from manual, time-consuming tasks."
      icon={Workflow}
      iconColor="#a855f7"
      sections={[
        {
          icon: "⚙️",
          title: "n8n + Moodle Integration",
          placeholder:
            "Full setup and configuration of n8n connected to your Moodle site via the REST API. Covers authentication token setup, Moodle web service configuration, n8n environment installation (self-hosted or cloud), and end-to-end workflow testing. This is the foundation for all automation work.",
        },
        {
          icon: "✅",
          title: "Automated Grading Workflows",
          placeholder:
            "Trigger-based workflows that respond to quiz submissions, assignment uploads, or activity completions — and automatically calculate grades, update the gradebook, and notify students of results. Supports complex grading logic including weighted components and conditional pass/fail rules.",
        },
        {
          icon: "📩",
          title: "Enrollment & Notification Pipelines",
          placeholder:
            "Automated enrollment management: enrol users on course completion, payment confirmation, or external CRM trigger. Send personalised email or WhatsApp notifications at every stage of the learner journey. Integrates with Moodle groups, cohorts, and completion tracking.",
        },
        {
          icon: "🔗",
          title: "Moodle Webhooks & Event Triggers",
          placeholder:
            "Custom Moodle plugins that emit webhook events for any platform action — course enrolment, quiz attempt, forum post, badge award, and more — feeding them into n8n for real-time processing. Enables event-driven automation that Moodle's built-in tools cannot achieve alone.",
        },
        {
          icon: "🗂️",
          title: "RAG System via n8n",
          placeholder:
            "n8n-powered pipelines that extract Moodle course content, process it through an embedding model, and store it in a vector database — keeping the AI chatbot's knowledge base automatically up to date as new content is published. Fully automated, no manual reindexing required.",
        },
      ]}
    />
  );
}
