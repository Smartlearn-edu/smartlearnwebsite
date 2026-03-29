import { Server } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export function MoodleCorePage() {
  return (
    <ServicePage
      title="Moodle Core Services"
      tagline="Installation, Upgrading, Migration, Maintenance & Fixing"
      description="Everything you need to get your Moodle platform running, keep it healthy, and rescue it when things go wrong — handled by a verified Moodle Community Expert."
      icon={Server}
      iconColor="#c084fc"
      sections={[
        {
          icon: "🚀",
          title: "Installation",
          placeholder:
            "Fresh Moodle installations from the latest stable release or any specific version you require. I work with any hosting environment: shared hosting, VPS, dedicated servers, or cloud providers. I can also configure the server from zero — setting up Ubuntu, installing aapanel, configuring Nginx/Apache, MySQL, PHP, and SSL before deploying Moodle. Pricing depends on hosting type and configuration complexity.",
        },
        {
          icon: "⬆️",
          title: "Upgrading",
          placeholder:
            "Safe upgrades from any Moodle version to the latest release or a specific target version. Upgrade cost depends on how many major versions are being jumped, the number of installed plugins, and the current database size. I run a full backup, test the upgrade on a staging copy first, then apply it to production with minimal downtime.",
        },
        {
          icon: "🔄",
          title: "Migration",
          placeholder:
            "Moving your Moodle site from one server or hosting provider to another — without losing any data, files, courses, or user records. Covers database export/import, file transfer, DNS changeover, and post-migration testing. Pricing varies by database size and complexity of the source environment.",
        },
        {
          icon: "🛡️",
          title: "Maintenance",
          placeholder:
            "Ongoing maintenance packages to keep your platform healthy: regular Moodle core and plugin updates, server health checks, database optimisation, cache management, cron verification, and backup monitoring. Available as monthly or quarterly retainer plans.",
        },
        {
          icon: "🔧",
          title: "Fixing Problems",
          placeholder:
            "Diagnosis and resolution of any Moodle error, performance issue, or broken functionality. From white screens and plugin conflicts to slow page loads and broken grading — I identify the root cause and fix it. Emergency support available with fast response times.",
        },
      ]}
    />
  );
}
