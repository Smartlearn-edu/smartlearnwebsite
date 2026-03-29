import { Puzzle } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export function PluginsPage() {
  return (
    <ServicePage
      title="Plugin Development"
      tagline="Custom Moodle Plugins Built to Your Exact Specification"
      description="With 4 free plugins published on Moodle.org and 10+ premium plugins in active use, I build production-grade Moodle plugins that integrate seamlessly with your platform."
      icon={Puzzle}
      iconColor="#a855f7"
      sections={[
        {
          icon: "🧩",
          title: "Custom Plugin Development",
          placeholder:
            "Fully bespoke Moodle plugins built to solve your specific problem: activity modules, blocks, local plugins, admin tools, grade reports, authentication plugins, and more. I follow Moodle coding standards, write clean PHPDoc, and provide full source code. Pricing is project-based and depends on complexity and estimated development time.",
        },
        {
          icon: "🌐",
          title: "Free Plugins on Moodle.org",
          placeholder:
            "I have 4 approved free plugins published on the official Moodle.org plugin directory, each reviewed by the Moodle community and used by institutions worldwide. Detailed information about each plugin — including what it does, screenshots, and installation guides — will be listed here.",
        },
        {
          icon: "💎",
          title: "Premium Plugins",
          placeholder:
            "10+ premium plugins available for purchase covering advanced grading, AI integration, reporting, and automation workflows. Includes installation support, documentation, and 3 months of bug-fix updates. A full catalogue with pricing and demo videos will be listed here.",
        },
        {
          icon: "🎨",
          title: "Themes & UI Customisation",
          placeholder:
            "Custom Moodle themes built on Boost or Moove — or fully bespoke themes from scratch. Includes responsive design, branding (logo, colours, fonts), custom homepage layouts, and course page redesigns. I also modify existing themes to match your brand guidelines without breaking Moodle's upgrade path.",
        },
        {
          icon: "🔌",
          title: "Third-Party Integrations",
          placeholder:
            "Custom plugins to connect Moodle to external systems: payment gateways, CRMs, HR systems, video platforms, and more. Built using Moodle's external services framework and web services API for secure, maintainable integrations.",
        },
      ]}
    />
  );
}
