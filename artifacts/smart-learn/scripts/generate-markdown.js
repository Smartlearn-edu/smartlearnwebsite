import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist/public');
const contentDir = path.resolve(__dirname, '../src/content');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const publicPath = path.resolve(__dirname, '../public');

function writeMarkdown(urlPath, content) {
  const filePath = urlPath === '/' 
    ? path.join(distPath, 'index.md') 
    : path.join(distPath, urlPath, 'index.md');
  
  ensureDir(filePath);
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf-8');

  // Also write to public folder for static persistence
  if (urlPath === '/') {
    fs.writeFileSync(path.join(publicPath, 'index.md'), content.trim() + '\n', 'utf-8');
  }
  console.log(`Generated markdown: ${urlPath} -> ${filePath}`);
}

// 1. Homepage Markdown
const homeMarkdown = `---
title: "SmartLearn - Expert Moodle LMS & AI Solutions"
description: "Empowering online academies and educational institutions with custom Moodle LMS architecture, plugin development, AI chatbots, n8n automations, and branded mobile apps."
url: "https://services.smartlearn.education/"
---

# Smart Learn — Expert Moodle & AI Automation for Education

Smart Learn is founded by Mohammad Nabil, an LMS architect and top-rated Moodle developer bridging the gap between online academies and cutting-edge AI technology. Since 2020, Smart Learn has built and scaled Moodle platforms for over 70 institutions and 100,000+ active learners worldwide.

## Core Capabilities & Services

### 1. [Moodle Setup, Migration & Maintenance](https://services.smartlearn.education/services/moodle-core)
- Fresh Moodle installation, high-availability NGINX / PHP-FPM / MySQL tuning.
- Version upgrades (Moodle 3.x / 4.x to Moodle 5.x) with zero data loss.
- Disaster recovery, automated backups, and 24/7 uptime monitoring.

### 2. [Custom Moodle Plugin Development](https://services.smartlearn.education/services/plugins)
- Full standard-compliant source code for Activity Modules, Blocks, Local Plugins, and Boost child themes.
- 4 free plugins published on official Moodle.org directory and 10+ premium enterprise plugins.
- Built-in compliance with Moodle Plugin Guidelines, accessibility (WCAG 2.1 AA), and multi-language support.

### 3. [AI Integration for Moodle](https://services.smartlearn.education/services/ai)
- RAG-powered AI tutors and course chatbots (OpenAI / Local LLMs) answering student questions 24/7.
- AI Rubric Generator and automated grading assistance for instructors.
- Video-to-Text lecture transcription and indexing for instant student queries.

### 4. [n8n Automation for Moodle](https://services.smartlearn.education/services/n8n)
- Automated student enrollments, payment webhook integrations (Stripe, Kashier, Fawry, PayPal).
- Custom automated grading pipelines, certificate issuance, and WhatsApp / Email notification triggers.

### 5. [Training & Technical Consultation](https://services.smartlearn.education/services/training)
- Structured training tracks for Moodle administrators and course creators.
- Performance optimization workshops and architecture consulting.

### 6. [Branded Moodle Mobile Apps](https://services.smartlearn.education/services/mobile-app)
- Custom branded iOS & Android apps for your academy published to Google Play & Apple App Store.
- Pre-configured login, push notifications, offline course sync, and custom theme styling.

## Machine-Readable Resources for AI Agents

- **API Catalog (RFC 9727)**: [/.well-known/api-catalog](https://services.smartlearn.education/.well-known/api-catalog)
- **MCP Server Card**: [/.well-known/mcp/server-card.json](https://services.smartlearn.education/.well-known/mcp/server-card.json)
- **Agent Skills Discovery**: [/.well-known/agent-skills/index.json](https://services.smartlearn.education/.well-known/agent-skills/index.json)
- **LLM Summary**: [/llms.txt](https://services.smartlearn.education/llms.txt)
- **Pricing Details**: [/pricing](https://services.smartlearn.education/pricing)
- **Success Stories**: [/success-stories](https://services.smartlearn.education/success-stories)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Smart Learn",
  "url": "https://services.smartlearn.education",
  "logo": "https://services.smartlearn.education/img/mohammad-nabil.jpg",
  "description": "Expert Moodle LMS Architecture, Custom Plugin Development & AI Automation",
  "founder": {
    "@type": "Person",
    "name": "Mohammad Nabil",
    "jobTitle": "Moodle LMS Architect & AI Specialist"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@smartlearn.education",
    "contactType": "customer service"
  }
}
\`\`\`
`;

// 2. Pricing Page Markdown
const pricingMarkdown = `---
title: "Pricing — Smart Learn | Mohammad Nabil Moodle Expert"
description: "Transparent pricing for Moodle setup, AI integration, plugin development, n8n automation, training, and branded mobile apps."
url: "https://services.smartlearn.education/pricing"
---

# Smart Learn Services & Pricing

Every project is tailored to your platform requirements. Starting prices are outlined below.

## Service Packages

### 1. Moodle Setup & Maintenance
- **Price:** From $150 (per project)
- **Includes:**
  - Fresh Moodle installation on your server (NGINX, PHP, MySQL)
  - Custom theme & branding configuration
  - Essential plugin installation & setup
  - SSL, Redis caching & performance tuning
  - 30-day post-launch bug fix support

### 2. Custom Plugin Development (Popular)
- **Price:** Contact for custom quote (based on scope)
- **Includes:**
  - Technical requirements analysis & architecture spec
  - Full Moodle-standard compliant source code
  - Activity modules, blocks, local plugins, and custom themes
  - Installation documentation & walkthrough
  - 60-day bug fix warranty
  - Option to publish on Moodle.org

### 3. AI Integration for Moodle
- **Price:** Contact for custom quote (based on scope)
- **Includes:**
  - RAG pipeline setup (OpenAI / Anthropic / Local LLMs)
  - Course-specific AI chatbot deployment
  - Video-to-Text lecture pipeline
  - AI-assisted rubric grading
  - Admin analytics & cost dashboard

### 4. n8n Automation Workflows
- **Price:** Contact for custom quote (based on scope)
- **Includes:**
  - n8n server setup & Moodle REST API connection
  - Auto-grading & automated enrollment pipelines
  - Notification triggers (Email, WhatsApp, Telegram)
  - Full workflow export & documentation

### 5. Training & Technical Support
- **Price:** From $50 (per session)
- **Includes:**
  - Customised training curriculum for your administrators & teachers
  - Live 1-on-1 or group video sessions with recordings
  - Monthly ongoing maintenance retainers available

### 6. Branded Moodle Mobile App
- **Price:** From $300 (one-time setup)
- **Includes:**
  - Branded iOS + Android mobile application
  - Custom logo, color scheme, and pre-configured LMS domain login
  - Push notification setup
  - App Store & Google Play publishing support

## Contact
- **Email:** support@smartlearn.education
- **WhatsApp:** +201005822858
- **Website:** https://services.smartlearn.education
`;

// 3. Success Stories Markdown
const storiesMarkdown = `---
title: "Success Stories — Smart Learn"
description: "Real success stories and verified client results from institutions that transformed their Moodle platforms with Smart Learn."
url: "https://services.smartlearn.education/success-stories"
---

# Smart Learn — Client Success Stories & Case Studies

Discover how institutions, universities, and training academies scaled their platforms and saved hundreds of administrative hours with Smart Learn solutions.

## Featured Highlights

- **Scale:** 100,000+ active learners supported across multiple global platforms.
- **Projects:** 70+ completed Moodle, AI, and automation deployments.
- **Reliability:** 99.9% LMS uptime with optimized caching and database indexing.
- **AI Automation:** Cut assignment grading turnaround time by 65% using AI Rubric workflows.

For more details or custom references, visit [https://services.smartlearn.education/success-stories](https://services.smartlearn.education/success-stories).
`;

// 4. Services Overview Markdown
const servicesMarkdown = {
  'services/moodle-core': `---
title: "Moodle Setup, Migration & Maintenance — Smart Learn"
description: "Production-ready Moodle installations, safe multi-version upgrades (3.9 to 5.x), zero data-loss server migrations, high-concurrency performance tuning, and 24/7 retainer maintenance."
url: "https://services.smartlearn.education/services/moodle-core"
---

# Moodle Core Services: Installation, Upgrades, Migration & Maintenance

Ensure your Moodle LMS platform is robust, secure, highly performant, and continuously supported by an official Moodle Community Expert.

## Core Offerings

### 1. Fresh Production-Ready Installation
- **Full-Stack Architecture**: Configured on Ubuntu/Debian with NGINX/Apache, PHP 8.1 - 8.3 (OPcache optimized), MariaDB/MySQL, and Redis memory caching.
- **Environment Versatility**: Deployed across VPS, dedicated servers, or cloud infrastructure (AWS, Hetzner, DigitalOcean, Contabo).
- **Post-Install Hardening**: Automated cron configuration, SSL/TLS certificates, firewall setup, security directory restrictions, and daily automated backups.

### 2. Version Upgrades (Multi-Version Leaps)
- **Safe Version Progression**: Upgrade legacy Moodle sites (3.9, 3.11, 4.0 - 4.5) to the latest stable release (Moodle 5.x).
- **Zero Data Loss Guarantee**: Complete pre-upgrade database and Moodledata filesystem snapshot.
- **Staging Verification**: Pre-flight test on a staging clone to audit custom plugins, theme compatibility, and custom database tables before production execution.
- **Minimal Downtime & Rollback Plan**: Documented execution with instant rollback capabilities.

### 3. Server & Host Migration
- **Seamless Transfer**: Relocate entire Moodle deployments between hosting providers, control panels (cPanel, aaPanel, CyberPanel), or raw Linux servers.
- **Database & Asset Integrity**: Checksum-verified transfer of MySQL/PostgreSQL databases and large multi-gigabyte Moodledata file repositories.
- **DNS Cutover**: Synchronized DNS switch with zero loss of active student attempts or grade submissions.

### 4. Ongoing Retainer Maintenance & Optimization
- **Proactive Health Checks**: Regular Moodle core and plugin security patches.
- **Database Query Indexing**: Tuning slow database queries, cleaning orphaned task tables, and managing Redis cache hit ratios.
- **Disaster Recovery Audits**: Scheduled automated backups to external S3/remote storage with verified restore drills.
- **Emergency Troubleshooting**: Priority diagnosis for 500 errors, white screens of death (WSOD), broken grading, or plugin conflicts.
`,

  'services/plugins': `---
title: "Custom Moodle Plugin Development — Smart Learn"
description: "Bespoke, standard-compliant Moodle plugins, Activity modules, Local plugins, Blocks, and custom payment gateways built by a recognized Moodle.org contributor."
url: "https://services.smartlearn.education/services/plugins"
---

# Custom Moodle Plugin Development

Extend Moodle beyond default capabilities with bespoke plugins engineered to official Moodle Coding Standards (Moodle CS, PHPUnit, and Behat).

## Supported Plugin Architectures
- **Activity Modules (\`mod_\`)**: Interactive learning activities, custom assessment tools, and completion tracking.
- **Local Plugins (\`local_\`)**: Platform-wide custom logic, event observers, automated background cron tasks, and custom REST API endpoints.
- **Gradebook & Reports (\`gradereport_\`, \`report_\`)**: Custom analytics dashboards, visual progress charts, and multi-format grade exports (PDF, Excel, HTML).
- **Enrolment & Payment Gateways (\`enrol_\`, \`paygw_\`)**: Automated payment verification (Kashier, Fawry, Stripe, PayPal) with instant course enrolment and cohort assignment.
- **Blocks & UI Components (\`block_\`, \`theme_\`)**: Custom Boost child themes, student dashboards, and responsive course navigation.

## Featured & Published Plugins
- **AI Rubric Generator (\`local_airubricgenerator\`)**: Generates multi-criteria grading rubrics from assignment prompts in under 5 seconds using LLMs.
- **Smart Grade AI (\`local_smartgradeai\`)**: AI-assisted assignment evaluation with rubric-aware suggestions and human-in-the-loop teacher review.
- **Quiz AI Chat (\`local_qai\`)**: Interactive AI assistant embedded in quiz reviews to explain incorrect choices to students.
- **Chat With Assignment (\`local_chatwithassignment\`)**: RAG-powered course assistant answering student queries grounded strictly in assignment instructions.
- **Kashier Payment Gateway (\`paygw_kashier\`)**: Middle East payment gateway integration supporting Visa, Mastercard, and Meeza.
- **Smart Catalog (\`local_smartcatalog\`)**: Modern, filterable course catalog with category tags and instant search.
- **Adaptive Study Plan (\`mod_adaptiveplan\`)**: Dynamic learning pathways adjusting course module pacing based on quiz scores.

## Development Standards & Deliverables
- Fully compatible with Moodle 3.9 through 5.0+ and PHP 8.1 - 8.3.
- Native integration with Moodle Form API, DB API (\`$DB\`), Navigation API, and Event Observers.
- Multi-language support (English and Arabic RTL) with full \`lang/en/\` string files.
- Includes comprehensive installation guide, technical documentation, and a 60-day bug-fix warranty.
`,

  'services/ai': `---
title: "AI Integration for Moodle LMS — Smart Learn"
description: "Empower your Moodle platform with course-grounded RAG chatbots, automated rubric generators, video lecture transcriptions, and AI-assisted grading."
url: "https://services.smartlearn.education/services/ai"
---

# AI Integration for Moodle LMS

Integrate modern Large Language Models (LLMs) directly into Moodle without modifying core code or compromising student data privacy.

## Key Capabilities

### 1. Course-Aware RAG Chatbots
- **Course-Grounded Context**: AI tutors answer student questions based exclusively on course PDFs, slides, lecture notes, and forum discussions.
- **No Hallucinations**: Enforced strict citation and source retrieval via vector databases (Qdrant, Pinecone, or pgvector).
- **5 Context-Depth Levels**: Configurable depth to optimize answer precision against API token costs.
- **Multi-LLM Provider Support**: Compatible with OpenAI (GPT-4o), Anthropic (Claude), Google Gemini, and self-hosted local LLMs (DeepSeek, Llama via Ollama/vLLM).

### 2. AI-Assisted Semi-Automated Grading
- **Rubric-Aware Grading**: AI analyzes student submissions against defined rubrics, suggesting criteria levels and qualitative feedback.
- **Human-in-the-Loop**: Instructor maintains full authority — reviews, edits, and approves feedback before grades are published to the Moodle Gradebook.
- **Zero Privacy Leakage**: Strict anonymization ensuring student PII never leaves your institutional boundary.

### 3. Video-to-Text Lecture Pipelines
- **Automated Speech-to-Text**: Transcribes recorded video lectures into timestamped, searchable text transcripts (Whisper AI).
- **Bilingual Transcription**: Full support for Arabic, English, and mixed-language academic lectures.
- **Vector Searchable**: Transcripts are automatically ingested into the course RAG index, allowing students to query spoken lecture content.

### 4. LLM Admin & Teacher Productivity Tools
- **Quiz & Question Bank Generator**: Generate multiple-choice, true/false, and short-answer questions from uploaded course materials.
- **Automated Rubric Builder**: Generate criterion-based assessment rubrics directly from course objectives.
- **Student Sentiment & Feedback Analytics**: Summarize end-of-course student evaluations into actionable instructional insights.
`,

  'services/n8n': `---
title: "n8n Automation Workflows for Moodle — Smart Learn"
description: "Event-driven workflow automations connecting Moodle REST API to payment gateways, CRMs, WhatsApp, Google Sheets, and AI pipelines."
url: "https://services.smartlearn.education/services/n8n"
---

# n8n Workflow Automation for Moodle

Automate repetitive LMS administration, student communication, and grading workflows using self-hosted, open-source n8n orchestration.

## Production Automation Workflows

### 1. Instant Payment & Enrolment Pipelines
- **Payment Webhooks**: Connect Stripe, PayPal, Kashier, or Fawry webhooks directly to Moodle Web Services.
- **Instant Access**: Automatically create user accounts, assign target cohorts, enrol in purchased courses, and issue welcome emails/WhatsApp alerts.
- **Access Expiration**: Automated un-enrolment and certificate revocation upon subscription end.

### 2. Automated Grading & Gradebook Synchronization
- **Trigger-Based Logic**: Execute complex scoring logic upon quiz or assignment completion.
- **Custom Formulas**: Weighted calculations, conditional pass/fail branches, and external grade synchronization with university SIS/ERP platforms.
- **Audit Logging**: Comprehensive execution logs for every automated grading transaction.

### 3. Real-Time Moodle Event Triggers & Webhooks
- **Custom Event Emitters**: Custom Moodle plugins that push real-time webhooks on enrolment, quiz attempt submissions, forum posts, and badge awards.
- **Downstream Actions**: Instant multi-channel notifications via WhatsApp, Telegram, Slack, or Email.

### 4. Dynamic AI Knowledge Base Sync
- **Automated Vector Ingestion**: Scheduled n8n workflows that extract newly uploaded course PDFs and lecture notes from Moodle and upsert them into vector stores.
- **Delta Synchronization**: Only re-indexes modified or newly added course resources to minimize embedding API costs.

### 5. Multi-System Data Synchronization
- **CRM Sync**: Two-way synchronization between Moodle user records and HubSpot, Zoho, or Salesforce.
- **BI Reporting**: Export daily completion and engagement metrics to Google Sheets, Notion, or Metabase dashboards.
`,

  'services/training': `---
title: "Moodle Training & Technical Support — Smart Learn"
description: "Hands-on, expert-led training programs for Moodle administrators, teachers, and technical staff in Arabic and English."
url: "https://services.smartlearn.education/services/training"
---

# Moodle Training & Technical Consultation

Empower your administrators and teaching faculty with structured, practical training led by a certified Moodle Community Expert.

## Training Programs

### 1. Moodle System Administrator Track
- **User & Access Management**: Cohort structures, role permissions, custom capabilities, and bulk user uploads.
- **Course Administration**: Course categories, enrolment methods, backup/restore, and course archiving.
- **Server Health & Optimization**: Cache management (Redis), cron job monitoring, task scheduling, and error log analysis.
- **Security & Hardening**: Access policies, plugin management, and disaster recovery execution.

### 2. Teacher & Course Creator Track
- **Course Architecture**: Section formats, topic layouts, completion tracking, and access restrictions.
- **Assessment Mastery**: Advanced quiz configuration, question bank categorization, assignment rubrics, and Gradebook setup.
- **Interactive Content**: Integrating H5P interactive videos, forums, peer-assessed workshops, and SCORM packages.

### 3. AI & Automation for Educators
- **AI Teaching Assistants**: Leveraging embedded course chatbots for 24/7 student guidance.
- **AI-Assisted Grading**: Best practices for reviewing AI-suggested rubric feedback.
- **Automated Content Generation**: Creating quizzes and course summaries with generative AI tools.

### 4. n8n Automation for Technical Staff
- **Workflow Development**: Building and maintaining n8n workflows connected to the Moodle REST API.
- **Webhook Handling & Error Alerts**: Configuring production alerts for automated pipelines.

## Delivery Format
- Delivered live via Zoom / Google Meet in **Arabic or English** (or bilingual mix).
- Every session is recorded with full video access and supplementary reference documentation.
- Includes a 30-day post-training Q&A support window.
`,

  'services/mobile-app': `---
title: "Branded Moodle Mobile Apps (iOS & Android) — Smart Learn"
description: "Launch your own fully branded, white-label Moodle mobile app on the Apple App Store and Google Play Store."
url: "https://services.smartlearn.education/services/mobile-app"
---

# Branded Moodle Mobile App Development

Put your educational platform in your students' pockets with a fully branded, custom mobile app built on the official Moodle Mobile open-source core.

## Features & Customization
- **100% White-Label Branding**: Your academy's logo, primary and accent brand colors, custom splash screen, and app icon.
- **Direct LMS Authentication**: Pre-configured with your Moodle domain — students simply open the app and log in without typing URLs.
- **Push Notifications**: Integrated Firebase Cloud Messaging (FCM) for assignment deadlines, quiz announcements, grading alerts, and direct messages.
- **Offline Learning**: Students can download course materials, quizzes, and SCORM modules for offline access with automatic progress sync upon reconnection.
- **Biometric Login**: Support for Fingerprint / Face ID authentication on supported Android and iOS devices.

## Publishing & Maintenance Services
- Full compilation of signed Android APK/AAB and iOS IPA application packages.
- Complete Google Play Console and Apple App Store submission assistance.
- App store metadata, preview screenshots, and privacy policy preparation.
- Ongoing version maintenance and compatibility updates with new Moodle and mobile OS releases.
`
};

export async function generateMarkdownFiles() {
  console.log("Generating Markdown versions of all site pages for Agent Content Negotiation...");

  // Write static pages
  writeMarkdown('/', homeMarkdown);
  writeMarkdown('/pricing', pricingMarkdown);
  writeMarkdown('/success-stories', storiesMarkdown);

  // Write service pages
  for (const [route, content] of Object.entries(servicesMarkdown)) {
    writeMarkdown(`/${route}`, content);
  }

  // Generate MDX-based pages (blog and docs)
  const processMdxDir = (section) => {
    const sectionDir = path.join(contentDir, section);
    if (!fs.existsSync(sectionDir)) return;

    const langs = ['en', 'ar'];
    for (const lang of langs) {
      const langDir = path.join(sectionDir, lang);
      if (!fs.existsSync(langDir)) continue;

      const files = fs.readdirSync(langDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
      for (const file of files) {
        const slug = file.replace(/\.(mdx|md)$/, '');
        const rawContent = fs.readFileSync(path.join(langDir, file), 'utf-8');
        
        // Write language-specific route
        const fullRoute = `/${section}/${lang}/${slug}`;
        writeMarkdown(fullRoute, rawContent);

        // Also write default route
        if (lang === 'en') {
          writeMarkdown(`/${section}/${slug}`, rawContent);
        }
      }
    }
  };

  processMdxDir('blog');
  processMdxDir('docs');

  // Write general blog and docs index
  writeMarkdown('/blog', `# Smart Learn Blog\n\nRead insights, guides, and updates on Moodle LMS, AI in education, and e-learning architecture.\n\nVisit [https://services.smartlearn.education/blog](https://services.smartlearn.education/blog) to browse all articles.`);
  writeMarkdown('/docs', `# Smart Learn Documentation\n\nComplete setup guides, documentation, and user manuals for Smart Learn Moodle plugins and tools.\n\nVisit [https://services.smartlearn.education/docs](https://services.smartlearn.education/docs) for full interactive docs.`);

  console.log("✅ All Markdown pages successfully generated in dist/public!");
}

// Execute if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateMarkdownFiles().catch(err => {
    console.error("Error generating markdown files:", err);
    process.exit(1);
  });
}
