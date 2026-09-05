export type Category = "All" | "AI-Powered" | "Analytics & Reporting" | "Course Tools" | "Platform & Admin";

export type CategoryAr = "الكل" | "مدعوم بالذكاء الاصطناعي" | "التحليلات والتقارير" | "أدوات المقرر" | "المنصة والإدارة";

export interface Plugin {
  name: string;
  nameAr: string;
  slug: string;
  type: string;
  moodle: string;
  category: Exclude<Category, "All">;
  categoryAr: Exclude<CategoryAr, "الكل">;
  free: boolean;
  paidSupport?: boolean;
  features: string[];
  featuresAr: string[];
  placeholder?: boolean;
  price: number | null;
  buyUrl?: string;
  downloadUrl?: string;
  requiresSetup?: boolean;
  setupPrice?: number;
  images: string[];
  freemiusProductId?: string | number;
  freemiusPlanId?: string | number;
  freemiusPublicKey?: string;
  description: string;
  descriptionAr: string;
}

const WA = "https://wa.me/201005822858";

export const CATEGORIES: Category[] = [
  "All",
  "AI-Powered",
  "Analytics & Reporting",
  "Course Tools",
  "Platform & Admin",
];

export const CATEGORIES_AR: CategoryAr[] = [
  "الكل",
  "مدعوم بالذكاء الاصطناعي",
  "التحليلات والتقارير",
  "أدوات المقرر",
  "المنصة والإدارة",
];

export const plugins: Plugin[] = [
  {
    name: "SmartLearn Moodle Theme",
    nameAr: "قالب SmartLearn المتقدم لمودل",
    slug: "theme_smartlearn",
    type: "theme",
    moodle: "Moodle 4.5+ & 5.1+",
    category: "Platform & Admin",
    categoryAr: "المنصة والإدارة",
    free: false,
    price: 200,
    buyUrl: `${WA}?text=Hi! I'm interested in the SmartLearn Moodle Theme.`,
    freemiusProductId: "38735",
    freemiusPlanId: "64450",
    freemiusPublicKey: "pk_bb28130af22f32f8aa72c880dd38b",
    images: [
      "0.png",
      "1-setting.png",
      "2-select style.png",
      "3- login page option.png",
      "4- coveride style.png",
      "5- navbar.png",
      "6- sections-1.png",
      "7- sections-selection.png",
      "8- section -live editor.png",
      "9- section code editor.png",
      "10-custompages.png",
      "11- custom page edit by select sections.png",
      "12- custom apge code editor.png",
      "13-1- seo.png",
      "13-2-seo.png",
    ],
    features: [
      "Native Bootstrap 5.3 + Glassmorphic UI with zero-reload dark/light mode",
      "27 curated modern style presets & deep CSS override engine",
      "Smart Canvas drag-and-drop section builder & live visual editor",
      "Unlimited custom landing pages with clean URL routing",
      "World's first 100% AI Agent-Ready theme (MCP SEP-1649, A2A & ARD)",
      "Automated Schema.org Course Rich Snippets & Core Web Vitals optimization",
    ],
    featuresAr: [
      "واجهة زجاجية عصرية فائقة الجمال مع دعم Bootstrap 5.3 وتحويل فوري للوضع الليلي والنهاري",
      "27 قالباً لونياً وبصرياً منسقاً مع محرك تخصيص CSS متقدم للظلال والتأثيرات",
      "منشئ أقسام ذكي بالسحب والإفلات ومحرر مرئي حي مع استوديو كود متطور",
      "صفحات هبوط مخصصة غير محدودة بروابط نظيفة وتخصيص شاشات الدخول بالذكاء الاصطناعي",
      "القالب الأول في العالم الجاهز للوكلاء الذكيين بنسبة 100% (MCP SEP-1649 و WebMCP)",
      "سكيما مقررات منظمة تلقائية لمحركات البحث ومحرك تسريع معايير الويب الحيوية",
    ],
    description: "> Transform Moodle into a breathtaking, ultra-modern learning portal. Ditch bloated, clunky legacy themes for sleek glassmorphism, instant zero-reload dark mode, and the world's first 100% AI Agent-Ready theme suite.\n\n**SmartLearn Theme** (`theme_smartlearn`) is engineered with native **Bootstrap 5.3** architecture for **Moodle 4.5 (LTS)**, **Moodle 5.1**, and **Moodle 5.2+**. Build high-converting course landing pages with a visual drag-and-drop Smart Canvas, customize authentication flows, and unlock automated Schema.org Course Rich Snippets.\n\n![SmartLearn Theme Showcase](/plugins/theme_smartlearn/0.png)\n\n### 👑 For Administrators: Unmatched Visual Control & 27 Presets\nTake complete control over your institution's identity without touching a single line of core code.\n\n- **27 Curated Style Presets**: Switch instantly between Dark Glassmorphism, SaaS Slate, Academic Prestige, Vibrant Bento, Nordic Minimalist, and more.\n- **Zero-Reload Switching**: Instant, butter-smooth DOM theme toggle with zero flash of unstyled content (FOUC).\n- **Homepage Preset Lock**: Keep your public homepage locked to your corporate branding while allowing students to personalize their private course dashboard.\n- **Deep CSS Overrides Engine**: Live style editor with direct variable controls for border radiuses, blur strength, shadows, and gradients.\n\n![Style Presets](/plugins/theme_smartlearn/2-select style.png)\n\n### 🎨 Modular Smart Canvas & Live Visual Section Editor\nBuild jaw-dropping landing pages in minutes instead of weeks.\n\n- **Pre-Built Section Gallery**: Insert modern Hero sections, Bento feature grids, Video showcases, Statistics counters, and interactive FAQs.\n- **Live Visual Customizer**: Click and edit text, colors, buttons, and layouts with real-time feedback right inside Moodle.\n- **Built-In Code Studio**: Power users can craft bespoke sections with syntax-highlighted HTML, Mustache, CSS, and JavaScript.\n- **Unlimited Custom Pages**: Create standalone institutional pages (About, Pricing, Programs) with clean URL routing.\n\n![Smart Canvas Sections](/plugins/theme_smartlearn/6- sections-1.png)\n\n![Visual Section Editor](/plugins/theme_smartlearn/8- section -live editor.png)\n\n### 🤖 The World's First 100% AI Agent-Ready LMS Theme\nTurn your Moodle site into an autonomous, AI-discoverable education platform that scores 100/100 on isitagentready.com.\n\n> Give AI agents, LLMs, and intelligent crawlers native access to your course catalog with zero hallucination.\n\n- **Model Context Protocol (MCP)**: Built-in SEP-1649 Server Card and live JSON-RPC transport for Claude and ChatGPT autonomous tools.\n- **Markdown Content Negotiation**: Serves lightweight, token-saving Markdown whenever AI agents request `Accept: text/markdown`.\n- **Course Rich Snippets**: Automated Schema.org Course JSON-LD and FAQ microdata for maximum Google Search visibility.\n- **Agent Discovery Suite**: Native `llms.txt`, `ai-catalog.json`, and `agent-card.json` endpoints baked right in.\n\n![SEO and Schema Engine](/plugins/theme_smartlearn/13-1- seo.png)\n\n### 🔐 High-Converting AI Login Page Customizer\nMake an unforgettable first impression with modern authentication screens.\n\n- **Split-Screen & Glass Formats**: Choose between modern split-screen artwork layouts or floating frosted-glass login cards.\n- **100% Core & SSO Compliant**: Works seamlessly with Moodle standard login, Google/Microsoft OAuth2, SAML, and custom authentication plugins.\n- **Instant Brand Consistency**: Your institutional logo, favicon, and typography match across all devices.\n\n![Login Page Customizer](/plugins/theme_smartlearn/3- login page option.png)",
    descriptionAr: "> حوّل موقع Moodle بالكامل إلى منصة تعليمية عصرية فائقة الجمال. ودّع القوالب التقليدية البطيئة واستمتع بواجهة زجاجية مذهلة، وتحويل فوري للوضع الليلي، وأول قالب في العالم جاهز للوكلاء الذكيين بنسبة 100%.\n\nتم تصميم **قالب SmartLearn المتقدم** (`theme_smartlearn`) وفق أحدث معايير **Bootstrap 5.3** لدعم **Moodle 4.5 (LTS)** و **Moodle 5.1** و **Moodle 5.2+**. ابنِ صفحات هبوط تعليمية ذات معدل تحويل عالٍ عبر منشئ الأقسام المرئي Smart Canvas، وخصص شاشات تسجيل الدخول، وفعل سكيما المقررات لمحرّكات البحث تلقائياً.\n\n![معرض واجهات قالب سمارت ليرن](/plugins/theme_smartlearn/0.png)\n\n### 👑 للمدراء والمؤسسات: تحكم بصري كامل مع 27 قالباً جاهزاً\nتحكم بهوية مؤسستك التعليمية بالكامل من لوحة الإدارة مباشرة وبدون تعديل سطر برمجي واحد.\n\n- **27 قالباً لونياً وبصرياً منسقاً**: تنقل فوراً بين النمط الزجاجي الداكن، أسلوب SaaS العصري، الهيبة الأكاديمية، نمط بينتو الحديث، والغابات الزمردية.\n- **تحويل فوري بدون إعادة تحميل**: تبديل فوري وسلس بين الوضعين الليلي والنهاري دون وميض في الشاشة (FOUC).\n- **قفل مظهر الصفحة الرئيسية**: حافظ على هوية مؤسستك في الصفحة الرئيسية للزوار مع منح الطلاب حرية اختيار مظهر لوحة التحكم الخاصة بهم.\n- **محرك تخصيص CSS متقدم**: تحكم دقيق في درجات التمويه الزجاجي، استدارة الحواف، الظلال، والتدرجات اللونية.\n\n![اختيار الأنماط والقوالب الجاهزة](/plugins/theme_smartlearn/2-select style.png)\n\n### 🎨 منشئ الأقسام المرئي Smart Canvas والمحرر الحي\nصمم صفحات رئيسية تأسر الطلاب في دقائق معدودة بدلاً من أسابيع العمل المضنية.\n\n- **معرض أقسام جاهز ومتكامل**: أقسام Hero مذهلة، شبكات ميزات Bento، معارض فيديو، عدادات إحصائيات، وجداول أسئلة شائعة تفاعلية.\n- **محرر مرئي تفاعلي**: عدّل النصوص والألوان والأزرار والتخطيطات مباشرة مع معاينة فورية داخل بيئة Moodle.\n- **استوديو كود متطور**: يتيح للمطورين بناء أقسام فريدة عبر محرر كود متكامل يدعم HTML و Mustache و CSS و JavaScript.\n- **صفحات هبوط مخصصة غير محدودة**: أنشئ صفحات تعريفية وبرامج دراسية غير محدودة بروابط نظيفة وسريعة.\n\n![أقسام الواجهة الرئيسية](/plugins/theme_smartlearn/6- sections-1.png)\n\n![المحرر المرئي الحي](/plugins/theme_smartlearn/8- section -live editor.png)\n\n### 🤖 أول قالب LMS في العالم جاهز للوكلاء الذكيين بنسبة 100%\nاجعل منصتك التعليمية مكتشفة بالكامل بواسطة أدوات الذكاء الاصطناعي مع تقييم 100/100 على موقع isitagentready.com.\n\n> مكّن الوكلاء الأذكياء ومحركات البحث المدعومة بالذكاء الاصطناعي من فهم مقرراتك وتصفحها بدقة متناهية وبدون هلوسة.\n\n- **بروتوكول سياق النماذج (MCP)**: بطاقة خادم متوافقة مع SEP-1649 وقنوات JSON-RPC مباشرة لأدوات Claude و ChatGPT الذكية.\n- **تبادل المحتوى بنمط ماركداون**: يرسل نصوص ماركداون خفيفة وموفرة للتوكن بمجرد طلب الوكيل الذكي عبر الترويسة `Accept: text/markdown`.\n- **مقتطفات المقررات الغنية لسيو جوجل**: ترميز تلقائي Schema.org JSON-LD لمقرراتك وأسئلتك الشائعة لظهور مميز في نتائج بحث جوجل.\n- **حزمة اكتشاف الوكلاء الكاملة**: دعم مدمج لملفات `llms.txt` و `ai-catalog.json` و `agent-card.json`.\n\n![سيو وبيانات السكيما المنظمة](/plugins/theme_smartlearn/13-1- seo.png)\n\n### 🔐 تخصيص صفحات تسجيل الدخول الجذابة\nاصنع انطباعاً أولاً لا يُنسى لطلابك ومعلميك عبر شاشات تسجيل دخول عصرية.\n\n- **تخطيطات مقسمة وزجاجية طافية**: اختر بين تصميم الشاشة المقسمة الفني أو بطاقات تسجيل الدخول الزجاجية الشفافة.\n- **توافق 100% مع أنظمة الدخول الموحد**: متوافق تماماً مع دخول جوجل ومايكروسوفت OAuth2 وأنظمة SAML وبروتوكولات SSO.\n- **اتساق كامل للهوية**: يظهر شعار مؤسستك وألوانها وخطوطها بتناسق مذهل على كافة الهواتف والشاشات.\n\n![خيارات صفحة الدخول](/plugins/theme_smartlearn/3- login page option.png)",
  },
  {
    name: "Quiz AI Chat",
    nameAr: "محادثة الذكاء الاصطناعي للاختبار",
    slug: "local_qai",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    categoryAr: "مدعوم بالذكاء الاصطناعي",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Quiz AI Chat plugin for Moodle.`,
    images: [],
    description: "**Quiz AI Chat** (`local_qai`) brings a context-aware AI tutor directly into the Moodle quiz interface. Students get an **\"Ask AI to Explain\"** button on individual questions and an **\"Ask AI about Quiz\"** button for overall performance discussions — all without leaving the quiz page.\n\n### Key Features\n\n- **Question-Level Explanations**: AI contextualises the exact question a student struggles with, clearing up misunderstandings in real time\n- **Overall Performance Chat**: Students ask general questions about their quiz results to connect concepts across questions\n- **5 Context Levels**: Balance helpfulness with API cost — Level 1 sends no context; Level 5 sends full questions, choices, answers, and teacher feedback\n- **Token-Saving Mode**: Quiz data attaches only to the first message; follow-ups skip re-sending the full context\n- **Per-Quiz AI Prompts**: Teachers craft unique behavioral instructions for every quiz\n\n### How It Works\n\nTeachers configure AI Chat Settings directly inside the Quiz settings menu — enabling/disabling buttons, choosing a context level, and writing custom prompts. Students see the AI buttons during their quiz attempt or review, click to open a chat panel, and get immediate explanations.",
    descriptionAr: "**Quiz AI Chat** (`local_qai`) يجلب مرشداً ذكياً واعياً بالسياق مباشرة داخل واجهة اختبار Moodle. يحصل الطلاب على زر **\"اطلب من الذكاء الاصطناعي أن يشرح\"** على الأسئلة الفردية وزر **\"اسأل الذكاء الاصطناعي عن الاختبار\"** لمناقشات الأداء الكلي — كل ذلك دون مغادرة صفحة الاختبار.\n\n### المميزات الرئيسية\n\n- **شروحات على مستوى السؤال**: يضع الذكاء الاصطناعي السؤال الذي يعاني منه الطالب في سياقه ويزيل سوء الفهم فوراً\n- **محادثة الأداء الكلي**: يطرح الطلاب أسئلة عامة حول نتائجهم لربط المفاهيم عبر الأسئلة\n- **5 مستويات سياق**: وازن بين المساعدة وتكلفة API — المستوى 1 لا يرسل سياقاً؛ المستوى 5 يرسل الأسئلة والخيارات والإجابات وتغذية المعلم الراجعة\n- **وضع توفير التوكن**: بيانات الاختبار مرفقة بالرسالة الأولى فقط؛ الرسائل اللاحقة لا تعيد إرسال السياق\n- **برومبتات مخصصة لكل اختبار**: يصمم المعلمون تعليمات سلوكية فريدة لكل اختبار\n\n### كيف تعمل\n\nيهيئ المعلمون إعدادات محادثة الذكاء الاصطناعي مباشرة داخل قائمة إعدادات الاختبار. يرى الطلاب أزرار الذكاء الاصطناعي خلال محاولة الاختبار أو المراجعة وينقرون لفتح لوحة محادثة للحصول على شروحات فورية.",
    features: [
      "AI tutor embedded inside every quiz attempt",
      "Question-level explanations & overall performance chat",
      "5 context levels to balance detail vs. API cost",
      "Token-saving mode: sends context only on first message",
    ],
    featuresAr: [
      "مرشد ذكاء اصطناعي مدمج داخل كل محاولة اختبار",
      "شروحات على مستوى السؤال ومحادثة عن الأداء الكلي",
      "5 مستويات سياق للموازنة بين التفصيل وتكلفة الـAPI",
      "وضع توفير التوكن: يرسل السياق عند الرسالة الأولى فقط",
    ],
  },
  {
    name: "Chat with Assignment",
    nameAr: "محادثة مع المهمة",
    slug: "local_chatwithassignment",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    categoryAr: "مدعوم بالذكاء الاصطناعي",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Chat with Assignment plugin for Moodle.`,
    freemiusProductId: "37842",
    freemiusPlanId: "62940",
    freemiusPublicKey: "pk_c220a8b4f76199d825862b9009cbd",
    images: [],
    description: "**Chat with Assignment AI** (`local_chatwithassignment`) transforms how students engage with feedback. An intelligent AI tutor is embedded directly into the Moodle assignment grading interface — students can have a dynamic conversation about their grade, rubric scores, and teacher comments without navigating away.\n\n### Key Features\n\n- **Interactive Grade Discussions**: Students ask specific questions about their submission, feedback, or rubric criteria via a modern chat panel\n- **5 Context Levels**: Teachers control exactly what data the AI sees — from grade-only (Level 2) to full submission text (Level 5)\n- **Cost-Saving Mode**: Assignment context is sent only on the first message; follow-ups skip re-sending the full data\n- **Custom AI Instructions**: Teachers configure the AI's persona per assignment (e.g., \"Be a constructive tutor\" or \"Encourage reflection\")\n- **GDPR Compliant**: Students can view and clear their chat history at any time under Moodle's Privacy API\n\n### Context Levels\n\n- **Level 1 — None**: Only the student's question (very low cost)\n- **Level 2 — Minimal**: Final assignment grade\n- **Level 3 — Summary**: Grade + rubric criterion scores\n- **Level 4 — Standard**: Full rubric details + teacher feedback and comments\n- **Level 5 — Full**: Everything above plus the student's full submission text",
    descriptionAr: "**Chat with Assignment AI** (`local_chatwithassignment`) يحول طريقة تفاعل الطلاب مع التغذية الراجعة. يُدمج مرشد ذكاء اصطناعي ذكي مباشرة في واجهة تصحيح المهام في Moodle — يمكن للطلاب إجراء محادثة ديناميكية حول درجتهم ودرجات الروبريك وتعليقات المعلم دون التنقل بعيداً.\n\n### المميزات الرئيسية\n\n- **مناقشات درجات تفاعلية**: يطرح الطلاب أسئلة محددة حول تقديمهم أو تغذيتهم الراجعة أو معايير الروبريك عبر لوحة محادثة حديثة\n- **5 مستويات سياق**: يتحكم المعلمون بدقة في ما يراه الذكاء الاصطناعي — من الدرجة فقط إلى نص التقديم الكامل\n- **وضع توفير التكلفة**: سياق المهمة مرسل مع الرسالة الأولى فقط؛ الرسائل اللاحقة لا تعيد إرسال البيانات\n- **تعليمات ذكاء اصطناعي مخصصة**: يهيئ المعلمون شخصية الذكاء الاصطناعي لكل مهمة (مثلاً: \"كن مرشداً بنّاء\")\n- **متوافق مع GDPR**: يمكن للطلاب عرض سجل محادثتهم ومسحه في أي وقت\n\n### مستويات السياق\n\n- **المستوى 1 — لا شيء**: سؤال الطالب فقط (تكلفة منخفضة جداً)\n- **المستوى 2 — أدنى حد**: الدرجة النهائية للمهمة\n- **المستوى 3 — ملخص**: الدرجة + درجات معايير الروبريك\n- **المستوى 4 — قياسي**: تفاصيل الروبريك الكاملة + تغذية المعلم الراجعة وتعليقاته\n- **المستوى 5 — كامل**: كل ما سبق + نص تقديم الطالب الكامل",
    features: [
      "AI chat on assignment feedback & rubric scores",
      "5 context levels from grade-only to full submission",
      "Custom teacher instructions per assignment",
      "GDPR-compliant with student data portability",
    ],
    featuresAr: [
      "محادثة ذكاء اصطناعي حول تغذية المهمة ودرجات الروبريك",
      "5 مستويات سياق من الدرجة فقط حتى التقديم الكامل",
      "تعليمات معلم مخصصة لكل مهمة",
      "متوافق مع GDPR مع قابلية نقل بيانات الطالب",
    ],
  },
  {
    name: "Smart Grade AI",
    nameAr: "تصحيح ذكي بالذكاء الاصطناعي",
    slug: "local_smartgradeai",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    categoryAr: "مدعوم بالذكاء الاصطناعي",
    free: true,
    price: null,
    downloadUrl: "https://moodle.org/plugins/local_smartgradeai",
    requiresSetup: true,
    setupPrice: 100,
    images: [
      "settings.png",
      "grade-with-ai.png",
      "student-view.png",
      "grading-triggered.png",
      "pending-reviews.png",
      "ai-proposed-score.png",
      "approved.png",
      "n8n-workflow.png",
    ],
    description: "**Smart Grade AI** (`local_smartgradeai`) integrates advanced AI models into your Moodle grading workflow using a **Human-in-the-Loop** architecture. The AI drafts rubric-level scores and written feedback for each submission — teachers then review, approve, or reject grades from a dedicated dashboard.\n\n### Key Features\n\n- **Multi-Model Support**: Gemini 3.0 Pro, GPT-4o, Claude 3.5 Sonnet, DeepSeek V3, Llama 4\n- **Rubric Grading**: AI understands your assignment rubrics and selects criterion levels with remarks\n- **Human-in-the-Loop Review**: Enable Review Mode so AI grades save as drafts — teachers approve or reject from the Pending AI Reviews dashboard\n- **Student Feedback Button**: Students can request AI feedback before the submission deadline to improve their work — without affecting the final grade\n- **n8n Integration**: Built around n8n as the grading workflow engine for flexible, low-code LLM logic\n- **Privacy Focused**: Configurable via Moodle's Privacy API\n\n### How It Works\n\nThe teacher enables AI grading on any assignment, picks a model and complexity level, then clicks **Grade with AI**. The plugin sends the submission to an n8n webhook, which queries the LLM and calls back to Moodle's web service API with criterion-level rubric scores and detailed remarks.\n\n### n8n Workflow\n\nThis plugin relies on an external n8n workflow to process submissions and query the AI model. You can build the workflow yourself or hire me to set it up — the setup service includes LLM API configuration, webhook wiring, and end-to-end testing on your Moodle instance.",
    descriptionAr: "**Smart Grade AI** (`local_smartgradeai`) تدمج نماذج الذكاء الاصطناعي المتقدمة في سير عمل التصحيح في Moodle باستخدام بنية **الإنسان في الحلقة**. يصيغ الذكاء الاصطناعي درجات الروبريك والتغذية الراجعة المكتوبة لكل تقديم — ثم يراجع المعلمون الدرجات ويوافقون عليها أو يرفضونها من لوحة تحكم مخصصة.\n\n### المميزات الرئيسية\n\n- **دعم متعدد النماذج**: Gemini 3.0 Pro وGPT-4o وClaude 3.5 Sonnet وDeepSeek V3 وLlama 4\n- **تصحيح بالروبريك**: يفهم الذكاء الاصطناعي روبريك مهمتك ويختار مستويات المعايير مع الملاحظات\n- **مراجعة بشرية في الحلقة**: فعّل وضع المراجعة لحفظ درجات الذكاء الاصطناعي كمسودات — يوافق المعلمون عليها أو يرفضونها من لوحة المراجعات المعلقة\n- **زر تغذية راجعة للطالب**: يمكن للطلاب طلب تغذية راجعة من الذكاء الاصطناعي قبل الموعد النهائي دون التأثير على الدرجة النهائية\n- **تكامل n8n**: مبني حول n8n كمحرك سير عمل التصحيح للمنطق المرن وقليل الكود\n- **التركيز على الخصوصية**: قابل للتهيئة عبر Privacy API الخاص بـMoodle\n\n### كيف تعمل\n\nيُفعّل المعلم التصحيح بالذكاء الاصطناعي على أي مهمة، يختار نموذجاً ومستوى تعقيد، ثم ينقر على **التصحيح بالذكاء الاصطناعي**. ترسل الإضافة التقديم إلى Webhook الخاص بـn8n، الذي يستعلم من LLM ويعود إلى Moodle مع درجات الروبريك على مستوى المعيار وملاحظات تفصيلية.\n\n### سير عمل n8n\n\nتعتمد هذه الإضافة على سير عمل n8n خارجي لمعالجة التقديمات والاستعلام من نموذج الذكاء الاصطناعي. يمكنك بناء سير العمل بنفسك أو توظيفي لإعداده — تشمل خدمة الإعداد تهيئة LLM API وربط الـWebhook والاختبار الشامل على Moodle الخاص بك.",
    features: [
      "Human-in-the-loop AI grading with teacher review",
      "Rubric-aware: selects levels & writes comments",
      "Multi-model: GPT-4, Claude, Gemini, DeepSeek",
      "n8n integration for flexible grading workflows",
    ],
    featuresAr: [
      "تصحيح ذكاء اصطناعي مع حلقة مراجعة بشرية من المعلم",
      "واعٍ بالروبريك: يختار المستويات ويكتب التعليقات",
      "متعدد النماذج: GPT-4 وClaude وGemini وDeepSeek",
      "تكامل n8n لسير عمل تصحيح مرنة",
    ],
  },
  {
    name: "AI Rubric Generator",
    nameAr: "مولّد روبريك بالذكاء الاصطناعي",
    slug: "local_airubricgenerator",
    type: "local",
    moodle: "Moodle 4.5+",
    category: "AI-Powered",
    categoryAr: "مدعوم بالذكاء الاصطناعي",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the AI Rubric Generator plugin for Moodle.`,
    images: [],
    description: "**AI Rubric Generator** (`local_airubricgenerator`) uses Moodle's Core AI subsystem to automatically generate, refine, and test grading rubrics for assignments. Teachers configure the number of criteria, tone, and educational framework, and the AI produces a ready-to-use rubric in seconds.\n\n### Rubric Generator\n\n- **Context-Aware**: Generates rubrics based on the assignment description, name, and instructions\n- **Customizable**: Define criteria count, levels, tone (Academic, Professional, Encouraging), and framework (Bloom's Taxonomy, SOLO, etc.)\n- **Refinement Workflow**: Refine the draft rubric using natural language prompts before saving\n- **Pre-Pilot Testing**: Upload sample student submissions (text or PDF) to test the rubric before deploying it\n- **Export**: Export rubrics to Word or PDF for offline review\n\n### Description Generator\n\n- **Course-Aware**: Generates assignment descriptions based on your course structure — full course or selected sections\n- **Assignment Type Templates**: Final Project, Midterm, Chapter Assignment, Research Paper, Presentation, Group Project, Case Study, and more\n- **One-Click Apply**: Apply the generated description directly to the assignment without copy-pasting\n\n### Requirements\n\nRequires Moodle 4.5+ with an enabled and configured AI provider (e.g., OpenAI, Gemini) that supports text generation.",
    descriptionAr: "**AI Rubric Generator** (`local_airubricgenerator`) يستخدم نظام Core AI الخاص بـMoodle لإنشاء روبريك التصحيح وتحسينها واختبارها تلقائياً. يُهيئ المعلمون عدد المعايير والأسلوب والإطار التعليمي، وينتج الذكاء الاصطناعي روبريكاً جاهزاً للاستخدام في ثوانٍ.\n\n### مولّد الروبريك\n\n- **واعٍ بالسياق**: يولّد روبريك بناءً على وصف المهمة واسمها وتعليماتها\n- **قابل للتخصيص**: حدد عدد المعايير والمستويات والأسلوب (أكاديمي، مهني، تشجيعي) والإطار (Bloom's وSOLO وغيرها)\n- **سير عمل التحسين**: حسّن الروبريك المسودة باستخدام برومبتات لغة طبيعية قبل الحفظ\n- **اختبار مسبق**: حمّل تقديمات طلاب نموذجية لاختبار الروبريك قبل نشره\n- **تصدير**: صدّر الروبريك إلى Word أو PDF للمراجعة دون اتصال\n\n### مولّد وصف المهمة\n\n- **واعٍ بالمقرر**: يولّد أوصاف المهام بناءً على هيكل مقررك — المقرر كاملاً أو أقسام مختارة\n- **قوالب أنواع المهام**: مشروع نهائي، اختبار منتصف الفصل، مهمة فصل، بحث، عرض تقديمي، مشروع جماعي، دراسة حالة والمزيد\n- **تطبيق بنقرة واحدة**: طبّق الوصف المولَّد مباشرة على المهمة دون نسخ ولصق\n\n### المتطلبات\n\nيتطلب Moodle 4.5+ مع مزود ذكاء اصطناعي مُمكَّن ومُهيَّأ (مثل OpenAI أو Gemini) يدعم توليد النص.",
    features: [
      "Generate rubrics from assignment description with AI",
      "Tone & framework options (Bloom's, SOLO, Academic…)",
      "Test rubric on sample submissions before saving",
      "Also generates full assignment descriptions by course section",
    ],
    featuresAr: [
      "إنشاء روبريك من وصف المهمة بالذكاء الاصطناعي",
      "خيارات الأسلوب والإطار (Bloom وSOLO وأكاديمي…)",
      "اختبار الروبريك على تقديمات نموذجية قبل الحفظ",
      "يُنشئ أيضاً أوصاف مهام كاملة حسب قسم المقرر",
    ],
  },
  {
    name: "Adaptive Study Plan",
    nameAr: "خطة دراسة تكيفية",
    slug: "mod_adaptiveplan",
    type: "mod",
    moodle: "Moodle 4.0+",
    category: "AI-Powered",
    categoryAr: "مدعوم بالذكاء الاصطناعي",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Adaptive Study Plan plugin for Moodle.`,
    images: [],
    description: "**Adaptive Study Plan** (`mod_adaptiveplan`) is a Moodle activity module that uses AI to create personalised, week-by-week study schedules for each student. During onboarding, students specify their available study hours, prior knowledge level, and planning preferences — the AI then maps every course activity into an optimised learning roadmap.\n\n### Key Features\n\n- **AI-Powered Scheduling**: Automatically scans all course modules and generates an adaptive learning path per student\n- **Onboarding Questionnaire**: Students specify available hours, prior knowledge, and preferences before the plan is created\n- **Dynamic Checklists**: Study items are broken down into actionable sub-activities with intelligent time estimation\n- **Smart Time Detection**: Extracts durations from activity names, descriptions, tags, quiz time limits, and custom fields\n- **AI Chat Coach**: Students chat with an AI coach inside the activity to renegotiate deadlines or adjust the plan on demand\n\n### Smart Time Estimation\n\nThe plugin detects activity duration from multiple sources automatically:\n- Activity name: `Video (15:41)` or `Reading (20 min)`\n- Description keywords: `Duration (15:41)`, `Time: 15 min`, `Pages: 10`\n- Moodle tags: `Estimated Time: 15`\n- Quiz time limit settings (synced automatically)\n- Custom field with shortname `estimated_time`",
    descriptionAr: "**Adaptive Study Plan** (`mod_adaptiveplan`) وحدة نشاط Moodle تستخدم الذكاء الاصطناعي لإنشاء جداول دراسية أسبوعية مخصصة لكل طالب. خلال الإعداد الأولي، يحدد الطلاب ساعات الدراسة المتاحة ومستوى معرفتهم السابقة وتفضيلاتهم، ثم يرسم الذكاء الاصطناعي خارطة تعلم محسّنة تضم كل أنشطة المقرر.\n\n### المميزات الرئيسية\n\n- **جدولة مدعومة بالذكاء الاصطناعي**: يفحص جميع وحدات المقرر تلقائياً ويولّد مسار تعلم تكيفي لكل طالب\n- **استبيان تهيئة**: يحدد الطلاب الساعات المتاحة والمعرفة السابقة والتفضيلات قبل إنشاء الخطة\n- **قوائم مهام ديناميكية**: تُقسَّم عناصر الدراسة إلى أنشطة فرعية قابلة للتنفيذ مع تقدير ذكي للوقت\n- **اكتشاف الوقت الذكي**: يستخرج المدد من أسماء الأنشطة والأوصاف والوسوم وإعدادات الاختبار والحقول المخصصة\n- **مدرب محادثة ذكي**: يتحدث الطلاب مع مدرب ذكاء اصطناعي داخل النشاط لإعادة التفاوض على المواعيد النهائية أو تعديل الخطة\n\n### التقدير الذكي للوقت\n\nيكتشف الإضافة مدة النشاط تلقائياً من مصادر متعددة:\n- اسم النشاط: `فيديو (15:41)` أو `قراءة (20 دقيقة)`\n- كلمات وصف: `Duration (15:41)` أو `Time: 15 min` أو `Pages: 10`\n- وسوم Moodle: `Estimated Time: 15`\n- إعدادات الحد الزمني للاختبار (مزامنة تلقائية)\n- حقل مخصص باسم مختصر `estimated_time`",
    features: [
      "AI-generated personalised study schedules per student",
      "Onboarding questionnaire for hours & prior knowledge",
      "Dynamic checklists from course activity metadata",
      "AI chat coach to adjust deadlines on demand",
    ],
    featuresAr: [
      "جداول دراسة مخصصة يُنشئها الذكاء الاصطناعي لكل طالب",
      "استبيان استيعاب للساعات والمعرفة السابقة",
      "قوائم مهام ديناميكية من بيانات أنشطة المقرر",
      "مدرب محادثة ذكي لتعديل المواعيد النهائية عند الطلب",
    ],
  },
  {
    name: "Smart Dashboard",
    nameAr: "لوحة تحكم ذكية",
    slug: "local_smartdashboard",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Analytics & Reporting",
    categoryAr: "التحليلات والتقارير",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Smart Dashboard plugin for Moodle.`,
    freemiusProductId: "37849",
    freemiusPlanId: "62947",
    freemiusPublicKey: "pk_8f8f2b4359f532f4c425c4ae30edb",
    images: [],
    description: `> Transform your Moodle from a passive repository into an intelligent, real-time command center.

### 🌟 All-in-One Executive Intelligence
**Smart Dashboard** (\`local_smartdashboard\`) aggregates critical data across courses, submissions, grades, student risk metrics, and financial records into a unified, responsive interface with native dark and light mode support.

### 🎓 For Students: Personalized Academic Command Center
- **Personalized Welcome Banner**: Custom avatar, active courses, and quick greeting
- **Customizable Quick Shortcuts**: Up to 10 admin-configured one-click shortcuts to key resources
- **Color-Coded Deadline Timeline**: Visual urgency badges (🔴 Critical, 🟡 Due Soon, 🔵 Upcoming) with direct submission links
- **My Grades Summary & Drill-Down**: Interactive modal breakdown with individual assignment grades, weightings, feedback, and HTML/CSV export
- **Today's Agenda**: Daily task pacing integrated directly with Adaptive Study Plans (\`mod_adaptiveplan\`)
- **AI Performance Analysis**: Instant academic insights and actionable study recommendations

### 👩‍🏫 For Teachers: Zero-Friction Workflow
- **Cross-Course Grading Queue**: Consolidates all pending submissions across all your courses for instant speed grading
- **Student Progress & Completion Tracking**: Real-time completion percentages and student cohort tracking
- **Modular At-Risk Early Warning System**: Dynamic 0–100% risk score with automated warning badges (🟢 On Track, 🟡 Monitor, 🔴 At Risk)
- **Activity Completion Drill-Down**: Inspect activity-by-activity criteria and submission milestones

### 👨‍👩‍👧 For Parents & Mentors: 360° Mentee Oversight
- **Mentee Switcher**: Seamlessly toggle between multiple assigned students or children
- **Grade Progression Analytics**: Multi-axis charts tracking academic performance over time
- **Subject Mastery Radar**: Multi-dimensional radar charts visualizing strengths across subjects
- **Weekly Engagement Heatmaps & Study Streaks**: Visual activity density and daily streak counters
- **KPI At-Risk Alerts**: Real-time notifications on missed deadlines or declining performance

### 👑 For Administrators & Managers: Total Institutional Control
- **AI Magic Reports & SQL Insights Hub**: Ask questions in plain English to automatically generate SQL queries and dynamic interactive charts (Bar, Line, Pie, Radar)
- **Modular Risk Rule Engine**: 6 configurable subplugin rules (\`loginrecency\`, \`coursecompletion\`, \`grades\`, \`safetynet70\`, \`overdue\`, \`adaptiveplan\`)
- **n8n Automation Webhooks**: Automated JSON risk alerts dispatched to Slack, SMS, WhatsApp, or Teams
- **Revenue & Payment Analytics**: Track actual vs. estimated revenue, category ROI, and multi-currency metrics
- **Dashboard Replacement**: Seamlessly replace Moodle's default \`/my/\` page for designated roles`,
    descriptionAr: `> حول موودل من مجرد مستودع تقليدي للملفات إلى مركز قيادة وتحكم ذكي ولحظي لكافة المستخدمين.

### 🌟 مركز تحليلات متكامل وشامل
**لوحة التحكم الذكية** (\`local_smartdashboard\`) تجمع البيانات الحيوية من المقررات والتسليمات والدرجات ومقاييس مخاطر الطلاب والسجلات المالية في واجهة تفاعلية موحدة تدعم الوضعين الداكن والفاتح.

### 🎓 للطلاب: مركز قيادة أكاديمي مخصص
- **لافتة ترحيب مخصصة**: صورة شخصية ومقررات نشطة مع تحية ذكية
- **شبكة اختصارات سريعة**: حتى 10 أزرار قابلة للتخصيص للوصول السريع للموارد
- **جدول زمني مرمز بالألوان للمواعيد النهائية**: شارات استعجال (🔴 حرج، 🟡 يستحق قريبًا، 🔵 قادم) مع روابط تسليم مباشرة
- **ملخص الدرجات والتعمق الأكاديمي**: نافذة تحليلية تفاعلية لتفاصيل الدرجات والأوزان والتعليقات مع تصدير HTML/CSV
- **جدول أعمال اليوم**: مزامنة مهام الدراسة اليومية مع الخطط التكيفية (\`mod_adaptiveplan\`)
- **تحليل الأداء بالذكاء الاصطناعي**: رؤى أكاديمية فورية وتوصيات دراسية عملية

### 👩‍🏫 للمعلمين: سير عمل فائق السرعة
- **طابور تصحيح مركزي**: تجميع كافة التقديمات المعلقة عبر جميع المقررات للتصحيح الفوري بنقرة واحدة
- **تتبع تقدم وإكمال الطلاب**: نسب إكمال لحظية ومراقبة وتيرة الطلاب
- **نظام إنذار مبكر للطلاب المعرضين للخطر**: احتساب درجة المخاطر (0–100%) مع شارات تنبيه تلقائية (🟢 على المسار، 🟡 تحت المراقبة، 🔴 معرض للخطر)
- **تعمق في إكمال الأنشطة**: فحص معايير إكمال كل نشاط وتواريخ التسليم

### 👨‍👩‍👧 لأولياء الأمور والموجهين: إشراف شامل 360 درجة
- **مبدل المتدربين**: التنقل السهل بين الأبناء أو الطلاب المخصصين
- **مخططات تقدم الدرجات**: رسوم بيانية متعددة المحاور لتتبع الأداء عبر الفصول
- **رادار إتقان المواد**: مخططات رادار ثلاثية الأبعاد لإبراز نقاط القوة والكفاءات
- **الخرائط الحرارية للتفاعل الأسبوعي وعداد الاستمرارية**: تتبع كثافة النشاط اليومي وأيام الدراسة المتتالية
- **تنبيهات مؤشرات الأداء (KPIs)**: إشعارات فورية بالمهام المتأخرة وتراجع الدرجات

### 👑 للمسؤولين والمديرين: تحكم مؤسسي كامل
- **التقارير السحرية بالذكاء الاصطناعي (AI Magic Reports)**: طرح الأسئلة باللغة الطبيعية وتوليد استعلامات SQL ورسوم بيانية تفاعلية تلقائيًا
- **محرك قواعد المخاطر المعياري**: 6 قواعد فرعية قابلة للتخصيص (\`loginrecency\`, \`coursecompletion\`, \`grades\`, \`safetynet70\`, \`overdue\`, \`adaptiveplan\`)
- **أتمتة خطافات n8n Webhooks**: إرسال تنبيهات المخاطر فورًا إلى Slack أو WhatsApp أو البريد الإلكتروني
- **تحليلات الإيرادات والمدفوعات**: تتبع الإيرادات الفعلية مقابل التقديرية وعائد الاستثمار ROI وتعدد العملات
- **استبدال لوحة التحكم الافتراضية**: استبدال صفحة \`/my/\` تلقائيًا للأدوار المحددة`,
    features: [
      "AI Magic Reports: Natural language to SQL queries and interactive dynamic charts",
      "Modular At-Risk early warning system (0–100% score) with n8n automated webhooks",
      "Parent & Mentor 360° portal with mentee switcher, mastery radar & engagement heatmaps",
      "Student command center: Color-coded deadlines, daily agenda & grade drill-down",
      "Teacher grading queue across all courses with one-click speed grading",
      "Revenue analytics, category ROI, CSV exports, and full RTL/multilingual support",
    ],
    featuresAr: [
      "التقارير السحرية بالذكاء الاصطناعي: تحويل اللغة الطبيعية لاستعلامات SQL ورسوم بيانية",
      "نظام إنذار مبكر للطلاب المعرضين للخطر (0–100%) مع تكامل خطافات n8n التلقائية",
      "بوابة أولياء الأمور والموجهين 360° مع رادار إتقان المواد والخرائط الحرارية للتفاعل",
      "مركز قيادة الطالب: مواعيد نهائية ملونة، جدول أعمال يومي، وتفصيل معمق للدرجات",
      "طابور تصحيح مركزي للمعلمين عبر كافة المقررات مع تصحيح سريع بنقرة واحدة",
      "تحليلات الإيرادات وعائد الاستثمار وتصدير CSV ودعم كامل للغة العربية والوضع الداكن",
    ],
  },
  {
    name: "Student Grades Report",
    nameAr: "تقرير درجات الطالب",
    slug: "report_studentgrades",
    type: "report",
    moodle: "Moodle 4.0+",
    category: "Analytics & Reporting",
    categoryAr: "التحليلات والتقارير",
    free: true,
    paidSupport: true,
    price: null,
    downloadUrl: "https://moodle.org/plugins/report_studentgrades",
    images: [],
    description: "**Student Course Grades Report** (`report_studentgrades`) lets students and authorised administrators view and export grade reports from **all enrolled courses** as a single, comprehensive HTML document — unlike standard Moodle grade reports that show one course at a time.\n\n### Key Features\n\n- **Cross-Course View**: One student → all enrolled courses displayed in a single document\n- **Hierarchical Structure**: Clear grade structure with categories, grade items, and totals per course\n- **18+ Colour Settings**: Extensive admin settings page for full visual customisation\n- **Brand Integration**: Seamless site logo integration in the exported report\n- **Word-Compatible Output**: HTML formatted perfectly for MS Word document processing\n- **Full RTL Support**: Right-to-left language support and print-ready CSS\n- **GDPR Compliant**: No personal data stored — reports are generated on demand\n\n### Who Can Use It\n\nStudents access their own report from the user profile menu or directly via `/report/studentgrades/`. Teachers and admins with the `viewall` capability can access any student's cross-course report — useful for academic advisors, parents, and end-of-semester grade summaries.",
    descriptionAr: "**Student Course Grades Report** (`report_studentgrades`) يتيح للطلاب والمسؤولين المخوّلين عرض وتصدير تقارير الدرجات من **جميع المقررات المسجل بها** كمستند HTML شامل واحد — على عكس تقارير Moodle القياسية التي تعرض مقرراً واحداً في كل مرة.\n\n### المميزات الرئيسية\n\n- **عرض متعدد المقررات**: طالب واحد ← جميع المقررات المسجل بها في مستند واحد\n- **هيكل هرمي**: هيكل درجات واضح مع الفئات وعناصر الدرجات والمجاميع لكل مقرر\n- **أكثر من 18 إعداد ألوان**: صفحة إعدادات مسؤول واسعة للتخصيص البصري الكامل\n- **تكامل الهوية التجارية**: دمج سلس لشعار الموقع في التقرير المصدَّر\n- **إخراج متوافق مع Word**: HTML منسق بشكل مثالي لمعالجة مستندات MS Word\n- **دعم كامل لـRTL**: دعم اللغات من اليمين إلى اليسار وCSS جاهز للطباعة\n- **متوافق مع GDPR**: لا تُخزَّن بيانات شخصية — تُولَّد التقارير عند الطلب\n\n### من يمكنه استخدامه\n\nيصل الطلاب إلى تقريرهم من قائمة ملف المستخدم أو مباشرة عبر `/report/studentgrades/`. يمكن للمعلمين والمسؤولين الوصول إلى تقرير أي طالب — مفيد للمرشدين الأكاديميين والوالدين وملخصات الدرجات في نهاية الفصل.",
    features: [
      "Export all enrolled course grades as one HTML file",
      "Hierarchical grade structure with categories & totals",
      "18+ colour settings, RTL support, Word-compatible output",
      "Students & authorised admins can view cross-course records",
    ],
    featuresAr: [
      "تصدير جميع درجات المقررات المسجلة كملف HTML واحد",
      "هيكل درجات هرمي مع الفئات والمجاميع",
      "أكثر من 18 إعداد ألوان ودعم RTL وإخراج متوافق مع Word",
      "الطلاب والمسؤولون المخوّلون يمكنهم عرض سجلات متعددة المقررات",
    ],
  },
  {
    name: "HTML Grade Export",
    nameAr: "تصدير درجات HTML",
    slug: "gradereport_htmlexport",
    type: "gradereport",
    moodle: "Moodle 4.0+",
    category: "Analytics & Reporting",
    categoryAr: "التحليلات والتقارير",
    free: true,
    price: null,
    downloadUrl: "https://moodle.org/plugins/gradereport_htmlexport",
    images: [],
    description: "**HTML Export Grade Report** (`gradereport_htmlexport`) empowers teachers to export student grades as beautifully styled, Word-compatible HTML files. The plugin produces a hierarchical grade report mirroring the built-in Moodle gradebook structure — with individual student exports or bulk ZIP downloads for the entire class.\n\n### Key Features\n\n- **Individual Export**: Generate a detailed, standalone HTML grade report per student\n- **Bulk ZIP Download**: Export all students' grade reports simultaneously as a ZIP archive — one click for the whole class\n- **Hierarchical Structure**: Accurately reflects grade groupings, categories, and totals\n- **18+ Custom Colour Options**: Extensive admin settings with modern purple gradient styling\n- **Site Branding**: Automatically integrates your Moodle site logo into every report\n- **RTL & Accessibility**: Full right-to-left language support and cross-browser compatibility\n- **Print-Ready CSS**: Clean printing and Word-compatible output out of the box\n- **GDPR Compliant**: No personal data stored; HTML files are generated on-the-fly and never cached on the server\n\n### Grade Visibility\n\nThe plugin intelligently respects grade visibility, hidden items, and custom grade display settings — the exported report only shows what the student is authorised to see.",
    descriptionAr: "**HTML Export Grade Report** (`gradereport_htmlexport`) يمكّن المعلمين من تصدير درجات الطلاب كملفات HTML منسقة بجمال ومتوافقة مع Word. تنتج الإضافة تقرير درجات هرمي يعكس هيكل دفتر الدرجات المدمج في Moodle — مع تصدير فردي لكل طالب أو تنزيل ZIP جماعي للفصل كله.\n\n### المميزات الرئيسية\n\n- **تصدير فردي**: إنشاء تقرير درجات HTML مستقل وتفصيلي لكل طالب\n- **تنزيل ZIP جماعي**: تصدير تقارير درجات جميع الطلاب في وقت واحد كأرشيف ZIP — نقرة واحدة للفصل كله\n- **هيكل هرمي**: يعكس بدقة تجميعات الدرجات والفئات والمجاميع\n- **أكثر من 18 خيار لون مخصص**: إعدادات مسؤول واسعة مع تصميم تدرج بنفسجي حديث\n- **هوية الموقع التجارية**: يدمج تلقائياً شعار موقع Moodle في كل تقرير\n- **RTL وإمكانية الوصول**: دعم كامل للغات من اليمين إلى اليسار وتوافق مع المتصفحات\n- **CSS جاهز للطباعة**: طباعة نظيفة وإخراج متوافق مع Word مباشرة\n- **متوافق مع GDPR**: لا تُخزَّن بيانات شخصية؛ تُولَّد ملفات HTML فورياً ولا تُخزَّن مؤقتاً",
    features: [
      "Per-course grade export as beautifully styled HTML",
      "Bulk ZIP download for all students at once",
      "18+ colour themes, site logo integration, print-ready CSS",
      "GDPR-compliant, full RTL & accessibility support",
    ],
    featuresAr: [
      "تصدير درجات كل مقرر كـHTML منسق بجمال",
      "تنزيل ZIP جماعي لجميع الطلاب دفعة واحدة",
      "أكثر من 18 ثيم ألوان وتكامل شعار الموقع وCSS جاهز للطباعة",
      "متوافق مع GDPR ودعم كامل لـRTL وإمكانية الوصول",
    ],
  },
  {
    name: "Gap Close",
    nameAr: "سد الفجوات",
    slug: "mod_gapclose",
    type: "mod",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    categoryAr: "أدوات المقرر",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Gap Close plugin for Moodle.`,
    images: [],
    description: "**Gap Close** (`mod_gapclose`) is a Moodle activity that automatically identifies a student's knowledge gaps by scanning all quiz attempts across the course, then assembles a focused remediation session from exactly the questions they answered incorrectly — powered by Moodle's native Question Engine.\n\n### Key Features\n\n- **Automatic Gap Detection**: Scans all visible quizzes in the course and collects incorrectly answered questions from each student's latest finished attempt\n- **Native Question Engine**: Uses Moodle's `question_engine` with interactive behaviour for immediate per-question feedback\n- **Resumable Sessions**: Attempts are saved and can be resumed; students can restart to re-scan for newly created gaps\n- **Smart Filtering**: Skips hidden quizzes, quizzes with no finished attempts, and questions removed after the attempt\n- **No Grade Impact**: A pure learning tool — no gradebook entries, no completion pressure\n\n### How It Works\n\nA teacher adds a Gap Close activity to any course. When a student opens it and clicks **Start Review Session**, the plugin scans all quizzes, collects every question where `fraction < 1.0` (wrong or partial), and presents them in a single targeted session. If the student has no incorrect answers, they see a success message. Students can also restart at any time to detect gaps from new quiz attempts.",
    descriptionAr: "**Gap Close** (`mod_gapclose`) نشاط Moodle يكتشف تلقائياً فجوات معرفة الطالب عن طريق فحص جميع محاولات الاختبار في المقرر، ثم يجمع جلسة علاجية مركّزة من الأسئلة التي أجاب عليها بشكل خاطئ تحديداً — مدعوماً بمحرك أسئلة Moodle الأصلي.\n\n### المميزات الرئيسية\n\n- **اكتشاف تلقائي للفجوات**: يفحص جميع الاختبارات الظاهرة في المقرر ويجمع الأسئلة التي أجاب عليها الطالب بشكل خاطئ في آخر محاولة مكتملة\n- **محرك الأسئلة الأصلي**: يستخدم `question_engine` الخاص بـMoodle مع سلوك تفاعلي للتغذية الراجعة الفورية\n- **جلسات قابلة للاستئناف**: تُحفظ المحاولات ويمكن استئنافها؛ يمكن للطلاب إعادة التشغيل للبحث عن فجوات من محاولات جديدة\n- **تصفية ذكية**: يتخطى الاختبارات المخفية واختبارات بلا محاولات مكتملة والأسئلة المحذوفة\n- **لا تأثير على الدرجات**: أداة تعلم بحتة — لا إدخالات في دفتر الدرجات\n\n### كيف تعمل\n\nيضيف المعلم نشاط Gap Close لأي مقرر. عند فتح الطالب له والنقر على **بدء جلسة المراجعة**، يفحص الإضافة جميع الاختبارات ويجمع كل سؤال حيث `fraction < 1.0` ويعرضهم في جلسة مركّزة واحدة.",
    features: [
      "Auto-detects incorrect answers across all course quizzes",
      "Builds a focused review session from the student's gaps",
      "Native Moodle Question Engine with live feedback",
      "Resumable sessions; restart to scan for fresh gaps",
    ],
    featuresAr: [
      "يكتشف تلقائياً الإجابات الخاطئة في جميع اختبارات المقرر",
      "يبني جلسة مراجعة مركّزة من فجوات الطالب",
      "محرك أسئلة Moodle الأصلي مع تغذية راجعة فورية",
      "جلسات قابلة للاستئناف؛ أعد التشغيل للبحث عن فجوات جديدة",
    ],
  },
  {
    name: "Protected PDF",
    nameAr: "PDF محمي",
    slug: "mod_protectedpdf",
    type: "mod",
    moodle: "Moodle 3.10+",
    category: "Course Tools",
    categoryAr: "أدوات المقرر",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Protected PDF plugin for Moodle.`,
    images: [],
    description: "**Protected PDF** (`mod_protectedpdf`) is a Moodle activity module that watermarks every PDF download with the student's full name and email address. The original file stays safe on the server; a personalised copy is generated on-the-fly for each download using FPDI and TCPDF.\n\n### Key Features\n\n- **Automatic Watermarking**: Every download is stamped with `Downloaded by: [Name] ([Email])` on every page\n- **FPDI-Powered Overlay**: Uses FPDI to overlay watermarks on the original PDF — the source file is never modified\n- **Access Control**: Only enrolled, authenticated users with the `view` capability can download\n- **Completion Tracking**: Supports Moodle's activity completion (tracks views)\n- **Backup & Restore**: Fully compatible with Moodle 2 backup/restore\n- **Privacy Focused**: No personal data is stored — name and email are read from the session at download time only\n\n### How It Works\n\nWhen a student clicks **Download PDF**, the plugin verifies login and enrolment, retrieves the stored PDF from Moodle's file system, imports each page with FPDI, adds the watermark footer via TCPDF on every page, and serves the combined PDF as a forced download. If FPDI is not available, a fallback notice page is generated.",
    descriptionAr: "**Protected PDF** (`mod_protectedpdf`) وحدة نشاط Moodle تضع علامة مائية على كل تنزيل PDF باسم الطالب الكامل وعنوان بريده الإلكتروني. يبقى الملف الأصلي محفوظاً على الخادم؛ تُولَّد نسخة مخصصة فورياً لكل تنزيل باستخدام FPDI وTCPDF.\n\n### المميزات الرئيسية\n\n- **وضع علامة مائية تلقائياً**: كل تنزيل مختوم بـ`حمّله: [الاسم] ([البريد الإلكتروني])` على كل صفحة\n- **تراكب مدعوم بـFPDI**: يستخدم FPDI لتراكب العلامات المائية على PDF الأصلي — الملف المصدر لا يُعدَّل أبداً\n- **التحكم في الوصول**: المستخدمون المسجلون والمصادق عليهم فقط يمكنهم التنزيل\n- **تتبع الإكمال**: يدعم تتبع إكمال نشاط Moodle (يتتبع المشاهدات)\n- **النسخ الاحتياطي والاستعادة**: متوافق تماماً مع نسخ Moodle الاحتياطي\n- **التركيز على الخصوصية**: لا تُخزَّن بيانات شخصية — يُقرأ الاسم والبريد من الجلسة وقت التنزيل فقط\n\n### كيف تعمل\n\nعند نقر الطالب على **تنزيل PDF**، تتحقق الإضافة من تسجيل الدخول والتسجيل في المقرر، تسترجع PDF المحفوظ، تستورد كل صفحة عبر FPDI، تضيف تذييل العلامة المائية عبر TCPDF على كل صفحة، وتقدم PDF المجمّع كتنزيل إجباري.",
    features: [
      "Watermarks every PDF download with student name & email",
      "FPDI-powered per-page overlay on the original file",
      "Access-controlled to enrolled, authenticated users only",
      "Moodle completion tracking & backup/restore support",
    ],
    featuresAr: [
      "يضع علامة مائية على كل تنزيل PDF باسم الطالب وبريده",
      "تراكب لكل صفحة بواسطة FPDI على الملف الأصلي",
      "وصول محكوم للمستخدمين المسجلين والمصادق عليهم فقط",
      "دعم تتبع الإكمال والنسخ الاحتياطي والاستعادة في Moodle",
    ],
  },
  {
    name: "Private YouTube",
    nameAr: "يوتيوب خاص",
    slug: "mod_privateyoutube",
    type: "mod",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    categoryAr: "أدوات المقرر",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Private YouTube plugin for Moodle.`,
    placeholder: true,
    images: [],
    description: "Embed unlisted or private YouTube videos in your Moodle courses without exposing the video URL to students. Full Moodle activity integration with completion tracking.",
    descriptionAr: "ضمّن مقاطع YouTube غير المدرجة أو الخاصة في مقررات Moodle دون الكشف عن رابط الفيديو للطلاب. تكامل كامل مع نشاط Moodle وتتبع الإكمال.",
    features: [],
    featuresAr: [],
  },
  {
    name: "Smart Catalog",
    nameAr: "كتالوج ذكي",
    slug: "local_smartcatalog",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    categoryAr: "أدوات المقرر",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Smart Catalog plugin for Moodle.`,
    placeholder: true,
    images: [],
    description: "A beautiful, filterable course catalog for your Moodle platform. Replaces the default course listing with a modern card-based UI, category filters, search, and enrolment calls-to-action.",
    descriptionAr: "كتالوج مقررات جميل وقابل للتصفية لمنصة Moodle الخاصة بك. يحل محل قائمة المقررات الافتراضية بواجهة مستخدم حديثة قائمة على البطاقات مع فلاتر الفئات والبحث وعبارات حث التسجيل.",
    features: [],
    featuresAr: [],
  },
  {
    name: "Credit Enrollment",
    nameAr: "تسجيل بالرصيد",
    slug: "enrol_credit",
    type: "enrol",
    moodle: "Moodle 4.0+",
    category: "Course Tools",
    categoryAr: "أدوات المقرر",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Credit Enrollment plugin for Moodle.`,
    images: [],
    description: "**Credit Enrollment** (`enrol_credit`) gives students a credit balance they spend to self-enrol in courses. Administrators configure the credit cost per course; the balance is automatically checked and deducted when the student enrols.\n\n### Key Features\n\n- **Credit System**: Uses a custom Moodle user profile field to store and manage each user's credit balance\n- **Per-Course Cost**: Set a different credit cost for each course independently\n- **Balance Display**: Students see their current balance and the required cost before confirming enrolment\n- **Auto-Deduction**: Credits are deducted immediately on successful enrolment\n- **Standard Enrolment Controls**: Supports enrolment keys, enrolment periods, and maximum user limits\n- **Admin Tools**: Global settings for default cost, credit field name, and plugin defaults\n\n### Adding Credits\n\nAdministrators top up credit balances through the standard Moodle user profile editor or via bulk user actions — no custom admin interface required.",
    descriptionAr: "**Credit Enrollment** (`enrol_credit`) يمنح الطلاب رصيداً ائتمانياً ينفقونه للتسجيل الذاتي في المقررات. يُهيئ المسؤولون تكلفة الرصيد لكل مقرر؛ يُفحص الرصيد تلقائياً ويُخصم عند تسجيل الطالب.\n\n### المميزات الرئيسية\n\n- **نظام الرصيد**: يستخدم حقل ملف مستخدم Moodle مخصصاً لتخزين رصيد كل مستخدم وإدارته\n- **تكلفة لكل مقرر**: حدد تكلفة رصيد مختلفة لكل مقرر بشكل مستقل\n- **عرض الرصيد**: يرى الطلاب رصيدهم الحالي والتكلفة المطلوبة قبل تأكيد التسجيل\n- **خصم تلقائي**: يُخصم الرصيد فوراً عند التسجيل الناجح\n- **ضوابط التسجيل القياسية**: يدعم مفاتيح التسجيل وفترات التسجيل وحدود المستخدمين القصوى\n- **أدوات المسؤول**: إعدادات عامة للتكلفة الافتراضية واسم حقل الرصيد\n\n### إضافة الرصيد\n\nيُضيف المسؤولون رصيداً من خلال محرر ملف المستخدم القياسي في Moodle أو عبر إجراءات المستخدم الجماعية — لا يلزم واجهة مسؤول مخصصة.",
    features: [
      "Students spend a credit balance to enrol in courses",
      "Per-course credit cost configured by admins",
      "Auto-deducted on successful enrolment with balance display",
      "Enrolment keys, periods & max user limits supported",
    ],
    featuresAr: [
      "يستخدم الطلاب رصيد ائتماني للتسجيل في المقررات",
      "تكلفة الرصيد لكل مقرر تُهيأ من قِبَل المسؤولين",
      "يُخصم تلقائياً عند التسجيل الناجح مع عرض الرصيد",
      "دعم مفاتيح التسجيل والفترات وحدود المستخدمين القصوى",
    ],
  },
  {
    name: "Custom Home Redirect",
    nameAr: "إعادة توجيه الصفحة الرئيسية",
    slug: "local_customhome",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    categoryAr: "المنصة والإدارة",
    free: true,
    paidSupport: true,
    price: null,
    downloadUrl: "https://moodle.org/plugins/local_customhome",
    images: [],
    description: "**Custom Home Page Redirect** (`local_customhome`) gives you complete control over your Moodle instance's front door. It seamlessly redirects users from the default Moodle front page to any custom URL — your marketing website, landing page, or external portal — without touching Moodle's core files.\n\n### Key Features\n\n- **Custom Redirect URL**: Set any absolute URL to replace the Moodle front page\n- **Admin Bypass**: Site administrators are never redirected — you can always access Moodle's admin interface\n- **Emergency Bypass**: Append `?noredirect=1` to any URL for temporary access without the redirect\n- **No Core Hacks**: Uses Moodle's built-in `before_http_headers` hook — safe across all Moodle core updates\n\n### AI Prompt Generator\n\nThe plugin includes an **AI Prompt Generator** that harvests your live Moodle categories and courses, then generates a comprehensive system prompt you can paste into Claude, ChatGPT, Bolt, or v0 to instantly generate a premium, Tailwind-powered landing page tailored specifically to your site's content.",
    descriptionAr: "**Custom Home Page Redirect** (`local_customhome`) يمنحك سيطرة كاملة على مدخل موقع Moodle الخاص بك. يعيد توجيه المستخدمين من الصفحة الأمامية الافتراضية لـMoodle إلى أي URL مخصص — موقعك التسويقي أو صفحة الهبوط أو البوابة الخارجية — دون لمس ملفات Moodle الأساسية.\n\n### المميزات الرئيسية\n\n- **URL إعادة توجيه مخصص**: حدد أي URL مطلق لاستبدال الصفحة الأمامية لـMoodle\n- **تجاوز للمسؤول**: لا يُعاد توجيه مسؤولو الموقع أبداً — يمكنك الوصول دائماً إلى واجهة مسؤول Moodle\n- **تجاوز طارئ**: أضف `?noredirect=1` لأي URL للوصول المؤقت بدون إعادة توجيه\n- **لا تعديلات على الملفات الأساسية**: يستخدم خطاف `before_http_headers` المدمج في Moodle — آمن عبر جميع تحديثات Moodle\n\n### مولّد البرومبت بالذكاء الاصطناعي\n\nتتضمن الإضافة **مولّد برومبت بالذكاء الاصطناعي** يجمع فئاتك ومقرراتك الحية في Moodle ويولّد برومبت نظام شاملاً يمكنك لصقه في Claude أو ChatGPT أو Bolt أو v0 لإنشاء صفحة هبوط متميزة مدعومة بـTailwind مصممة خصيصاً لمحتوى موقعك.",
    features: [
      "Replace Moodle front page with any custom URL",
      "Admin bypass — site admins are never locked out",
      "Emergency bypass via ?noredirect=1 query parameter",
      "AI Prompt Generator builds a landing page from live Moodle data",
    ],
    featuresAr: [
      "استبدال صفحة Moodle الأمامية بأي URL مخصص",
      "تجاوز للمسؤول — لا يُقفَل مسؤولو الموقع أبداً",
      "تجاوز طارئ عبر معامل ?noredirect=1",
      "مولّد البرومبت الذكي يبني صفحة هبوط من بيانات Moodle الحية",
    ],
  },
  {
    name: "Parent Assign",
    nameAr: "تعيين ولي الأمر",
    slug: "local_parentassign",
    type: "local",
    moodle: "Moodle 4.1+",
    category: "Platform & Admin",
    categoryAr: "المنصة والإدارة",
    free: true,
    price: null,
    downloadUrl: "https://moodle.org/plugins/local_parentassign",
    images: [],
    description: "**Parent Assign** (`local_parentassign`) automatically creates parent/guardian accounts in Moodle based on student profile fields — no manual work required. The moment a student is registered with `parent_email` and `parent_name` fields populated, the plugin provisions the parent account, generates a secure password, and sends a welcome email.\n\n### Key Features\n\n- **Event-Driven**: Acts instantly when a student account is created or updated\n- **Auto-Provisioning**: Creates the parent account if it doesn't exist; links to existing accounts if it does\n- **Secure Passwords**: Generates cryptographically secure 12-character temporary passwords\n- **Welcome Email**: Sends Moodle's standard welcome email with the temporary credentials\n- **Forced Reset**: Parents must set a permanent password on their first login\n- **Scheduled Task Fallback**: Periodically sweeps for missed users — ideal for bulk uploads via CSV\n- **Privacy Compliant**: Stores no personal tracking data; fully implements Moodle's Privacy API\n\n### Prerequisites\n\nTwo custom user profile fields must exist before installing: shortname `parent_email` and shortname `parent_name`. A `parent` system role with the appropriate shortname must also be configured.",
    descriptionAr: "**Parent Assign** (`local_parentassign`) يُنشئ تلقائياً حسابات الوالدين/الأوصياء في Moodle بناءً على حقول ملف الطالب — لا يلزم أي عمل يدوي. بمجرد تسجيل طالب مع ملء حقلي `parent_email` و`parent_name`، تُهيئ الإضافة حساب الوالد وتولّد كلمة مرور آمنة وترسل رسالة ترحيب.\n\n### المميزات الرئيسية\n\n- **مدفوع بالأحداث**: يتصرف فوراً عند إنشاء حساب طالب أو تحديثه\n- **تهيئة تلقائية**: يُنشئ حساب الوالد إن لم يكن موجوداً؛ يرتبط بالحسابات الموجودة إن كانت كذلك\n- **كلمات مرور آمنة**: يولّد كلمات مرور مؤقتة آمنة تشفيرياً مكونة من 12 حرفاً\n- **رسالة ترحيب**: يرسل رسالة ترحيب Moodle القياسية مع بيانات الاعتماد المؤقتة\n- **إعادة تعيين إجبارية**: يجب على الوالدين تعيين كلمة مرور دائمة عند أول تسجيل دخول\n- **مهمة مجدولة احتياطية**: تمسح المستخدمين الفائتين دورياً — مثالية للتحميل الجماعي عبر CSV\n- **امتثال للخصوصية**: لا تُخزَّن بيانات تتبع شخصية؛ تطبّق Privacy API الخاص بـMoodle بالكامل\n\n### المتطلبات المسبقة\n\nيجب وجود حقلين مخصصين في ملف المستخدم: `parent_email` و`parent_name`. يجب أيضاً تهيئة دور نظام `parent` باسم مختصر مناسب.",
    features: [
      "Auto-creates parent accounts from student profile fields",
      "Generates secure passwords and sends welcome emails",
      "Forced password reset on first parent login",
      "Scheduled task sweeps for bulk-uploaded student users",
    ],
    featuresAr: [
      "يُنشئ حسابات الوالدين تلقائياً من حقول ملف الطالب",
      "يُنشئ كلمات مرور آمنة ويرسل رسائل ترحيب",
      "إعادة تعيين إجبارية لكلمة المرور عند أول تسجيل دخول للوالد",
      "مهمة مجدولة لمسح مستخدمي الطلاب المُحمَّلين جماعياً",
    ],
  },
  {
    name: "Quick Login",
    nameAr: "تسجيل دخول سريع",
    slug: "local_qlogin",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    categoryAr: "المنصة والإدارة",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Quick Login plugin for Moodle.`,
    placeholder: true,
    images: [],
    description: "A Moodle plugin for administrators to quickly log in as any user without needing their password. Useful for support and troubleshooting.",
    descriptionAr: "إضافة Moodle للمسؤولين لتسجيل الدخول بسرعة كأي مستخدم دون الحاجة إلى كلمة مروره. مفيدة للدعم الفني واستكشاف الأخطاء.",
    features: [],
    featuresAr: [],
  },
  {
    name: "Balance Updater",
    nameAr: "محدّث الرصيد",
    slug: "local_balanceupdater",
    type: "local",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    categoryAr: "المنصة والإدارة",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Balance Updater plugin for Moodle.`,
    placeholder: true,
    images: [],
    description: "Manage student credit balances in Moodle. Add, subtract, or set balances in bulk via CSV upload or individually through the admin interface.",
    descriptionAr: "إدارة أرصدة رصيد الطلاب في Moodle. أضف أو اطرح أو اضبط الأرصدة جماعياً عبر رفع CSV أو بشكل فردي من خلال واجهة الإدارة.",
    features: [],
    featuresAr: [],
  },
  {
    name: "Kashier Payment Gateway",
    nameAr: "بوابة دفع كاشير",
    slug: "paygw_kashier",
    type: "paygw",
    moodle: "Moodle 4.0+",
    category: "Platform & Admin",
    categoryAr: "المنصة والإدارة",
    free: false,
    price: 50,
    buyUrl: `${WA}?text=Hi! I'm interested in the Kashier Payment Gateway plugin for Moodle.`,
    images: [],
    description: "**Kashier Payment Gateway** (`paygw_kashier`) is a native Moodle payment gateway plugin for Kashier — the leading payment processor in Egypt. It integrates with Moodle's Payment API so any payable service (course enrolment, certificates, etc.) can accept Kashier payments without custom code.\n\n### Key Features\n\n- **Native Moodle Integration**: Built around Moodle's `core_payment` subsystem — works with any payable activity out of the box\n- **Hosted Checkout**: Users are securely redirected to Kashier's responsive payment page (minimises PCI-DSS compliance scope)\n- **Automated Webhooks**: Server-to-server webhook verification using HMAC signature — no browser redirect required for payment confirmation\n- **Sandbox Mode**: Built-in test toggle for end-to-end integration testing before going live\n- **Multi-Currency**: Supports EGP, USD, EUR, and GBP natively\n\n### How Webhooks Work\n\nThe plugin dynamically appends the webhook URL to every checkout session — you do not manually configure endpoints in the Kashier dashboard. Moodle's webhook receiver verifies the `x-kashier-signature` header and fulfils the order automatically.\n\n### Setup\n\nConfigure your Kashier Merchant ID, API Key, and Secret Key from your Kashier Merchant Dashboard. Toggle Test Mode on during development, then switch to live keys when ready to collect real payments.",
    descriptionAr: "**Kashier Payment Gateway** (`paygw_kashier`) بوابة دفع Moodle أصلية لـKashier — معالج الدفع الرائد في مصر. تتكامل مع Payment API الخاص بـMoodle بحيث يمكن لأي خدمة مدفوعة (تسجيل المقررات والشهادات وغيرها) قبول مدفوعات Kashier بدون كود مخصص.\n\n### المميزات الرئيسية\n\n- **تكامل Moodle أصلي**: مبني حول نظام `core_payment` الخاص بـMoodle — يعمل مع أي نشاط قابل للدفع مباشرة\n- **صفحة دفع مستضافة**: يُعاد توجيه المستخدمين بأمان إلى صفحة دفع Kashier المتجاوبة (يقلص نطاق امتثال PCI-DSS)\n- **Webhooks تلقائية**: التحقق من الـWebhook بين الخوادم باستخدام توقيع HMAC — لا يلزم إعادة توجيه المتصفح لتأكيد الدفع\n- **وضع بيئة الاختبار**: مفتاح اختبار مدمج للاختبار الشامل قبل الإطلاق\n- **متعدد العملات**: يدعم EGP وUSD وEUR وGBP أصلياً\n\n### كيف تعمل الـWebhooks\n\nتُلحق الإضافة ديناميكياً عنوان URL الـWebhook بكل جلسة دفع — لا تُهيئ نقاط النهاية يدوياً في لوحة Kashier. يتحقق مستقبل Webhook في Moodle من رأس `x-kashier-signature` ويُنفذ الطلب تلقائياً.\n\n### الإعداد\n\nهيّئ Merchant ID وAPI Key وSecret Key الخاصة بك من لوحة Kashier. فعّل وضع الاختبار أثناء التطوير، ثم انتقل إلى المفاتيح الحقيقية عند الاستعداد لاستقبال المدفوعات الفعلية.",
    features: [
      "Native Moodle payment gateway for Kashier (Egypt)",
      "Secure server-to-server webhook with HMAC verification",
      "Supports EGP, USD, EUR and GBP currencies",
      "Built-in sandbox mode for safe integration testing",
    ],
    featuresAr: [
      "بوابة دفع Moodle الأصلية لكاشير (مصر)",
      "Webhook آمن من خادم إلى خادم مع التحقق بـHMAC",
      "دعم عملات EGP وUSD وEUR وGBP",
      "وضع بيئة اختبار مدمجة لاختبار التكامل بأمان",
    ],
  },
];
