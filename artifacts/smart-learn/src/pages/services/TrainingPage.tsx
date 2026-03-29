import { GraduationCap } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export function TrainingPage() {
  return (
    <ServicePage
      title="Training & Technical Support"
      tagline="Empowering Your Team to Get the Most from Moodle"
      description="Practical, hands-on training programs for administrators and educators, plus ongoing technical support that keeps your team unblocked and your platform running smoothly."
      icon={GraduationCap}
      iconColor="#c084fc"
      sections={[
        {
          icon: "🖥️",
          title: "Admin Training",
          placeholder:
            "Structured training program for Moodle administrators at online academies, schools, and course platforms. Covers platform configuration, user management, course creation, plugin administration, backup and restore, gradebook setup, and performance monitoring. Delivered via live remote sessions with recorded replays.",
        },
        {
          icon: "👩‍🏫",
          title: "Teacher Training",
          placeholder:
            "Practical Moodle training for teachers and course designers: building engaging courses, using activities and resources effectively, configuring quizzes and assignments, managing grades, communicating with students, and using AI tools. Available as group sessions or one-on-one coaching.",
        },
        {
          icon: "📞",
          title: "Ongoing Technical Support",
          placeholder:
            "Monthly or quarterly support retainers for institutions that need reliable, fast access to expert help. Covers bug diagnosis, plugin troubleshooting, user issue resolution, performance fixes, and urgent emergency support. Response time SLAs available. Support delivered via chat, email, or video call.",
        },
        {
          icon: "📖",
          title: "Documentation & Knowledge Bases",
          placeholder:
            "Custom documentation written specifically for your Moodle setup: admin manuals, teacher guides, student how-tos, and troubleshooting runbooks. Delivered as Google Docs, Notion pages, or embedded Moodle resources. Keeps institutional knowledge inside the team and reduces repeat support requests.",
        },
        {
          icon: "🔍",
          title: "Platform Audits & Reviews",
          placeholder:
            "In-depth review of your existing Moodle setup: identifying security vulnerabilities, outdated plugins, performance bottlenecks, accessibility issues, and configuration mistakes. Delivered as a written report with prioritised recommendations and estimated remediation effort.",
        },
      ]}
    />
  );
}
