import { useT } from "@/i18n";

const STACK: { slug: string; name: string; role: { en: string; ar: string } }[] = [
  { slug: "MDL", name: "Moodle 4.x / 5.x", role: { en: "Core LMS & APIs", ar: "النظام الأساسي" } },
  { slug: "PHP", name: "PHP 8.1 – 8.3", role: { en: "Plugin Architecture", ar: "هندسة الإضافات" } },
  { slug: "SQL", name: "MariaDB / MySQL", role: { en: "Query Tuning", ar: "قواعد البيانات" } },
  { slug: "NGX", name: "NGINX & Linux", role: { en: "Server Ops", ar: "إدارة الخوادم" } },
  { slug: "RDS", name: "Redis Caching", role: { en: "Exam Scale", ar: "تسريع الأداء" } },
  { slug: "LLM", name: "OpenAI & Claude", role: { en: "RAG & Grading", ar: "الذكاء الاصطناعي" } },
  { slug: "N8N", name: "n8n Automation", role: { en: "Workflows", ar: "أتمتة العمليات" } },
  { slug: "RCT", name: "React & TypeScript", role: { en: "Custom UI", ar: "واجهات تفاعلية" } },
];

export function LogoStripSection() {
  const { lang, isRTL } = useT();

  return (
    <section
      className="py-12 px-5 sm:px-6 bg-[#F2EEE6] border-y border-[#E2DBD0]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#52525B]">
            {lang === "ar" ? "التقنيات المعتمدة في العمل" : "Production Stack"}
          </p>
          <p className="text-xs text-[#52525B]">
            {lang === "ar"
              ? "بيئة تشغيل قياسية متوافقة مع استضافة موودل العالمية"
              : "Standard technologies compatible with cloud, VPS, and on-prem Moodle hosts"}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STACK.map((item) => (
            <div
              key={item.slug}
              className="rounded-xl border border-[#E2DBD0] bg-white px-4 py-3 flex items-center gap-3"
            >
              <span className="font-mono-slug text-[11px] font-bold px-2 py-1 rounded bg-[#FAF8F4] border border-[#E2DBD0] text-[#581C87] flex-shrink-0">
                {item.slug}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-bold text-[#18181B] truncate">{item.name}</div>
                <div className="text-xs text-[#52525B] truncate">{item.role[lang]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
