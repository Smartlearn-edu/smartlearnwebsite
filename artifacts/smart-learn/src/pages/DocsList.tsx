import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const modules = import.meta.glob('../content/docs/**/*.mdx', { eager: true }) as Record<string, any>;

const allDocs = Object.entries(modules).map(([path, module]) => {
  const parts = path.split('/');
  const lang = parts[parts.length - 2];
  const slug = parts[parts.length - 1].replace('.mdx', '');
  return {
    lang,
    slug,
    title: module.frontmatter?.title || slug,
    description: module.frontmatter?.description || '',
  };
});

export default function DocsList() {
  const { t, lang: currentLang, isRTL } = useT();

  const docs = allDocs.filter((d) => {
    if (d.lang === currentLang) return true;
    if (d.lang === 'en') {
      const hasTranslation = allDocs.some((other) => other.slug === d.slug && other.lang === currentLang);
      return !hasTranslation;
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <div className="pt-28 pb-20 px-5 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
              {currentLang === "ar" ? "التوثيق والأدلة" : "Documentation"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 text-[#18181B]">
              {currentLang === "ar" ? "مستندات الإضافات والخدمات" : "Documentation"}
            </h1>
            <p className="text-base sm:text-lg text-[#3F3F46]">
              {currentLang === "ar"
                ? "أدلة التثبيت والإعداد والمرجع التقني لإضافات وخدمات Smart Learn."
                : "Setup guides and technical references for Smart Learn plugins and services."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc) => (
              <Link key={doc.slug} href={`/docs/${doc.slug}`}>
                <article className="group p-6 border border-[#E2DBD0] bg-white rounded-2xl hover:border-[#C9C0B2] hover:shadow-md transition-all cursor-pointer h-full">
                  <h2 className="font-sans text-lg font-bold mb-2 group-hover:text-[#C2410C] transition-colors text-[#18181B]">
                    {doc.title}
                  </h2>
                  <p className="text-sm text-[#3F3F46] leading-relaxed">{doc.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="pt-8 pb-24 px-5 sm:px-6 border-t border-[#E2DBD0] bg-[#F2EEE6]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#52525B]">© {new Date().getFullYear()} {t.footer}</p>
          <SocialLinks size="sm" />
        </div>
      </footer>
    </div>
  );
}
