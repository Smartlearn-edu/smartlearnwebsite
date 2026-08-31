/**
 * WebMCP (Web Model Context Protocol) Integration
 * Exposes site capabilities and tools directly to in-browser AI agents
 * Specification: https://webmachinelearning.github.io/webmcp/
 */

export function initWebMCP() {
  if (typeof window === 'undefined') return;

  const nav = navigator as any;
  if (!nav || !nav.modelContext) {
    return;
  }

  try {
    const mc = nav.modelContext;

    const tools = [
      {
        name: "search_moodle_plugins",
        description: "Search and browse published and premium Moodle LMS plugins created by Smart Learn (e.g. AI Rubric Generator, Smart Catalog, Chat with Assignment, Smart Grade AI).",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search keyword or feature (e.g. 'rubric', 'grading', 'chat', 'catalog', 'video')"
            }
          }
        },
        execute: async (args: { query?: string }) => {
          try {
            const res = await fetch("/catalog.json");
            const data = await res.json();
            const plugins = data.plugins || [];
            if (!args.query) return plugins;
            const q = args.query.toLowerCase();
            return plugins.filter((p: any) =>
              (p.name && p.name.toLowerCase().includes(q)) ||
              (p.description && p.description.toLowerCase().includes(q))
            );
          } catch (e) {
            return { error: "Failed to load plugin catalog" };
          }
        }
      },
      {
        name: "get_service_pricing",
        description: "Retrieve transparent pricing, inclusions, and scope for Smart Learn Moodle & AI automation services.",
        inputSchema: {
          type: "object",
          properties: {
            service: {
              type: "string",
              enum: ["moodle-core", "plugins", "ai", "n8n", "training", "mobile-app"],
              description: "The service identifier to get pricing for"
            }
          }
        },
        execute: async (args: { service?: string }) => {
          const pricingData: Record<string, any> = {
            "moodle-core": {
              name: "Moodle Setup & Maintenance",
              startingPrice: "$150",
              unit: "per project",
              inclusions: [
                "Fresh Moodle installation (NGINX, PHP, MySQL)",
                "Theme & branding setup",
                "Essential plugins setup",
                "Performance tuning & SSL",
                "30-day warranty"
              ]
            },
            "plugins": {
              name: "Custom Plugin Development",
              startingPrice: "Custom quote",
              unit: "based on scope",
              inclusions: [
                "Moodle coding standards compliant",
                "Activity modules, blocks, local plugins, themes",
                "Full documentation & walkthrough",
                "60-day bug fix warranty"
              ]
            },
            "ai": {
              name: "AI Integration for Moodle",
              startingPrice: "Custom quote",
              unit: "based on scope",
              inclusions: [
                "Course RAG tutors",
                "Lecture video transcription",
                "Automated rubric grading",
                "Admin dashboard"
              ]
            },
            "n8n": {
              name: "n8n Automation for Moodle",
              startingPrice: "Custom quote",
              unit: "based on scope",
              inclusions: [
                "n8n workflow setup",
                "Moodle REST API integrations",
                "Payment webhooks (Stripe, Kashier)",
                "Automated grading & enrollment triggers"
              ]
            },
            "training": {
              name: "Training & Technical Support",
              startingPrice: "$50",
              unit: "per session",
              inclusions: [
                "Custom curriculum for team",
                "Live training + recordings",
                "Monthly maintenance retainers available"
              ]
            },
            "mobile-app": {
              name: "Branded Moodle Mobile App",
              startingPrice: "$300",
              unit: "one-time setup",
              inclusions: [
                "iOS and Android app with custom branding",
                "Direct LMS authentication",
                "Push notifications",
                "App store publishing support"
              ]
            }
          };

          if (args.service && pricingData[args.service]) {
            return pricingData[args.service];
          }
          return pricingData;
        }
      },
      {
        name: "get_contact_info",
        description: "Retrieve direct contact information for Smart Learn and Mohammad Nabil (email, WhatsApp, response time).",
        inputSchema: {
          type: "object",
          properties: {}
        },
        execute: async () => {
          return {
            email: "support@smartlearn.education",
            whatsapp: "+201005822858",
            whatsappUrl: "https://wa.me/201005822858",
            location: "Egypt (Available for remote projects worldwide)",
            responseTime: "Usually under 24 hours (Mon - Sat)"
          };
        }
      }
    ];

    if (typeof mc.provideContext === "function") {
      mc.provideContext({ tools });
    } else if (typeof mc.registerTool === "function") {
      tools.forEach((tool) => mc.registerTool(tool));
    }
  } catch (err) {
    console.debug("WebMCP initialization error:", err);
  }
}
