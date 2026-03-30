import { db, testimonialsTable } from "./index";

const testimonials = [
  {
    name: "Dr. Sarah Al-Mansouri",
    nameAr: "د. سارة المنصوري",
    role: "E-Learning Director",
    roleAr: "مديرة التعليم الإلكتروني",
    company: "Gulf University for Science",
    companyAr: "جامعة الخليج للعلوم",
    image: "",
    quote: "Mohammad transformed our Moodle platform from a basic LMS into a fully automated, AI-powered learning hub. Our faculty productivity increased dramatically and students are more engaged than ever.",
    quoteAr: "حوّل محمد منصة Moodle لدينا من نظام أساسي بسيط إلى مركز تعلّم ذكي مؤتمت بالكامل. ارتفع إنتاج أعضاء هيئة التدريس بشكل ملحوظ وأصبح الطلاب أكثر تفاعلاً من أي وقت مضى.",
    story: "We had a Moodle instance with 4,000 students but were barely using 20% of its capabilities. Mohammad conducted a full audit, migrated us to a modern infrastructure, and integrated custom AI chatbots and n8n automation workflows for grading notifications and enrollment.",
    storyAr: "كانت لدينا منصة Moodle تضم 4,000 طالب لكننا كنا نستخدم 20% فقط من إمكاناتها. أجرى محمد مراجعة شاملة، ونقلنا إلى بنية تحتية حديثة، ودمج روبوتات محادثة ذكية وسير عمل n8n آلية لإشعارات التقييم والتسجيل.",
    outcome: "85% reduction in manual admin tasks — faculty now focus fully on teaching",
    outcomeAr: "تراجع 85% في المهام الإدارية اليدوية — أصبح أعضاء هيئة التدريس يركزون كليًا على التعليم",
    serviceSlug: "n8n",
    featured: true,
    displayOrder: 1,
    active: true,
  },
  {
    name: "Ahmed Khalil",
    nameAr: "أحمد خليل",
    role: "Head of Training",
    roleAr: "رئيس قسم التدريب",
    company: "National Telecom Training Centre",
    companyAr: "مركز التدريب الوطني للاتصالات",
    image: "",
    quote: "The branded mobile app Mohammad delivered exceeded all expectations. Our trainees now access courses offline and love the professional look and feel. Enrollment went up 40% in the first month.",
    quoteAr: "تطبيق الجوال المخصص الذي سلّمه محمد فاق كل توقعاتنا. يمكن للمتدربين الآن الوصول إلى الدورات دون اتصال بالإنترنت وهم يحبون المظهر الاحترافي. ارتفاع التسجيل 40% في الشهر الأول.",
    story: "We needed a branded mobile experience for our 1,200 trainees across 6 governorates. Mohammad built us a fully white-labeled Moodle mobile app with our logo, colors, and custom splash screen — delivered in under 3 weeks.",
    storyAr: "احتجنا إلى تطبيق جوال يحمل هويتنا لـ 1,200 متدرب في 6 محافظات. بنى محمد لنا تطبيق Moodle بعلامتنا التجارية الكاملة مع شعارنا وألواننا وشاشة البداية المخصصة — في أقل من 3 أسابيع.",
    outcome: "40% increase in enrollment + 3× more course completions",
    outcomeAr: "ارتفاع بنسبة 40% في التسجيل + 3 أضعاف معدل إكمال الدورات",
    serviceSlug: "mobile-app",
    featured: true,
    displayOrder: 2,
    active: true,
  },
  {
    name: "Nour Hassan",
    nameAr: "نور حسن",
    role: "Moodle Administrator",
    roleAr: "مسؤولة Moodle",
    company: "Cairo Language Institute",
    companyAr: "معهد القاهرة للغات",
    image: "",
    quote: "We were struggling with a poorly configured Moodle site and slow servers. Mohammad migrated everything to a VPS, configured it properly, and now our 600 students have zero downtime. The AI assistant plugin is a game changer.",
    quoteAr: "كنا نعاني من موقع Moodle سيء الإعداد وخوادم بطيئة. نقل محمد كل شيء إلى VPS وضبطه بشكل صحيح، والآن طلابنا الـ 600 يعملون دون أي توقف. مكوّن المساعد الذكي غيّر قواعد اللعبة.",
    story: "Our old shared hosting was causing weekly outages. Mohammad moved our Moodle to a properly sized VPS, secured it, and installed a custom AI assistant plugin that answers student questions 24/7 in Arabic and English.",
    storyAr: "كانت استضافتنا المشتركة القديمة تتسبب في انقطاع أسبوعي. نقل محمد Moodle لدينا إلى VPS مناسب، وأمّنه، وثبّت مكوّن مساعد ذكي مخصص يجيب على أسئلة الطلاب 24/7 بالعربية والإنجليزية.",
    outcome: "Zero downtime since migration + 70% fewer support tickets",
    outcomeAr: "صفر توقف منذ الترحيل + تراجع 70% في تذاكر الدعم",
    serviceSlug: "moodle-core",
    featured: true,
    displayOrder: 3,
    active: true,
  },
];

async function seed() {
  console.log("Seeding testimonials...");
  await db.delete(testimonialsTable);
  for (const t of testimonials) {
    const [row] = await db.insert(testimonialsTable).values(t).returning();
    console.log(`  ✓ ${row.name} (id=${row.id})`);
  }
  console.log("Done! Seeded", testimonials.length, "testimonials.");
  process.exit(0);
}

seed().catch((e) => { console.error(e); process.exit(1); });
