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
  const { t, lang: currentLang } = useT();
  const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
  
  // Filter docs to show current language, fallback to English if translation is missing
  const docs = allDocs.filter(d => {
    if (d.lang === currentLang) return true;
    if (d.lang === 'en') {
      const hasTranslation = allDocs.some(other => other.slug === d.slug && other.lang === currentLang);
      return !hasTranslation;
    }
    return false;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Documentation</h1>
            <p className="text-lg text-gray-400">Guides and references for SmartLearn plugins and services.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc) => (
              <Link key={doc.slug} href={`/docs/${doc.slug}`}>
                <div className="group p-6 border border-white/10 rounded-2xl hover:border-primary/50 transition-all cursor-pointer bg-[#12121f] h-full">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-white">{doc.title}</h2>
                  <p className="text-sm text-gray-400">{doc.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <SocialLinks size="sm" />
          <p className="text-sm text-slate-600" style={font}>
            © {new Date().getFullYear()} {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
