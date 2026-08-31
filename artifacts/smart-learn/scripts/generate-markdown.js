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
title: "Moodle Setup & Core Services — Smart Learn"
description: "Complete Moodle setup, version migrations, high-performance tuning, and reliable server maintenance."
url: "https://services.smartlearn.education/services/moodle-core"
---

# Moodle Core Services: Installation, Migration & Maintenance

Ensure your Moodle LMS is fast, secure, and always online.

## Key Offerings
- **Fresh Setup**: Clean, scalable installations on Ubuntu/Debian with NGINX, PHP-FPM, MariaDB/PostgreSQL, and Redis caching.
- **Seamless Migrations**: Upgrade legacy Moodle versions (3.9 - 4.5) to latest Moodle 5.x without loss of user records, course completion data, or grades.
- **Speed & Security Tuning**: Server hardening, SSL/TLS configuration, OPcache optimization, and database query index tuning.
`,
  'services/plugins': `---
title: "Custom Moodle Plugin Development — Smart Learn"
description: "Bespoke Moodle plugins, activity modules, custom blocks, and theme integrations built to official Moodle standards."
url: "https://services.smartlearn.education/services/plugins"
---

# Custom Moodle Plugin Development

Extend Moodle with powerful custom capabilities built by an official Moodle community contributor.

## Published & Custom Plugins
- **AI Rubric Generator**: Automatically generate comprehensive grading rubrics from assignment prompts.
- **Smart Catalog**: Modern filterable course catalog with instant search.
- **Chat With Assignment**: AI assistant allowing students to interactively ask questions about assignment requirements.
- **Smart Grade AI**: Automated feedback assistant for instructors.
`,
  'services/ai': `---
title: "AI Integration for Moodle — Smart Learn"
description: "Supercharge your LMS with Retrieval-Augmented Generation (RAG), course tutors, and automated grading."
url: "https://services.smartlearn.education/services/ai"
---

# AI Integration for Moodle LMS

Bring modern generative AI capabilities directly into your Moodle courses.

## Features
- **Course Tutors**: Interactive AI chatbots grounded specifically in your course PDFs, slides, and syllabus.
- **Automated Rubrics & Feedback**: Provide instant, constructive feedback to students upon assignment submission.
- **Lecture Video Indexing**: Transcribe lecture recordings to searchable text and interactive summaries.
`,
  'services/n8n': `---
title: "n8n Automation for Moodle — Smart Learn"
description: "Connect Moodle to payment gateways, CRMs, WhatsApp, and AI workflows using n8n."
url: "https://services.smartlearn.education/services/n8n"
---

# n8n Automation Workflows for Moodle

Eliminate manual administration by orchestrating Moodle through event-driven n8n workflows.

## Workflow Examples
- Auto-enrollment upon payment via Stripe / PayPal / Local Gateways.
- Automated grade export and multi-channel notification dispatch.
- Syncing student records with external CRM systems and Google Sheets.
`,
  'services/training': `---
title: "Moodle Training & Technical Support — Smart Learn"
description: "Comprehensive training for administrators and educators, plus ongoing LMS support retainers."
url: "https://services.smartlearn.education/services/training"
---

# Training & Technical Consultation

Empower your team with practical, expert-led training on Moodle administration, course creation, and grading workflows.
`,
  'services/mobile-app': `---
title: "Branded Moodle Mobile Apps — Smart Learn"
description: "Launch your own custom-branded Moodle mobile app on iOS and Android."
url: "https://services.smartlearn.education/services/mobile-app"
---

# Branded Moodle Mobile Apps (iOS & Android)

Give your students a unified mobile experience with your academy's logo, colors, and direct authentication.
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
