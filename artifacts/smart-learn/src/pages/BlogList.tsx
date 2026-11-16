import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const modules = import.meta.glob('../content/blog/**/*.mdx', { eager: true }) as Record<string, any>;

const allPosts = Object.entries(modules).map(([path, module]) => {
  const parts = path.split('/');
  const lang = parts[parts.length - 2];
  const slug = parts[parts.length - 1].replace('.mdx', '');
  return {
    lang,
    slug,
    title: module.frontmatter?.title || slug,
    date: module.frontmatter?.date || '',
    description: module.frontmatter?.description || '',
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogList() {
  const { t, lang: currentLang, isRTL } = useT();

  const posts = allPosts.filter((p) => {
    if (p.lang === currentLang) return true;
    if (p.lang === 'en') {
      const hasTranslation = allPosts.some((other) => other.slug === p.slug && other.lang === currentLang);
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
              {currentLang === "ar" ? "المدونة الهندسية" : "Engineering Notes"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 text-[#18181B]">
              Smart Learn Blog
            </h1>
            <p className="text-base sm:text-lg text-[#3F3F46]">
              {currentLang === "ar"
                ? "مقالات، تحديثات إضافات موودل، وأدلة تقنية عملية."
                : "Plugin release notes, Moodle architecture guides, and field lessons."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group p-6 border border-[#E2DBD0] bg-white rounded-2xl hover:border-[#C9C0B2] hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                  <p className="font-mono-slug text-xs font-semibold text-[#C2410C] mb-2">{post.date}</p>
                  <h2 className="font-sans text-xl font-bold mb-2 group-hover:text-[#C2410C] transition-colors text-[#18181B]">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#3F3F46] leading-relaxed">{post.description}</p>
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
