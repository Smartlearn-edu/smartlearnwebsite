import { useRoute, Link } from "wouter";
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
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const { t, lang: currentLang, isRTL } = useT();

  if (!match || !params?.slug) return null;

  let modulePath = `../content/blog/${currentLang}/${params.slug}.mdx`;
  let postModule = modules[modulePath];

  if (!postModule && currentLang !== 'en') {
    modulePath = `../content/blog/en/${params.slug}.mdx`;
    postModule = modules[modulePath];
  }

  const posts = allPosts.filter((p) => {
    if (p.lang === currentLang) return true;
    if (p.lang === 'en') {
      const hasTranslation = allPosts.some((other) => other.slug === p.slug && other.lang === currentLang);
      return !hasTranslation;
    }
    return false;
  });

  if (!postModule) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />
        <div className="container mx-auto px-4 pt-36 pb-24 text-center flex-1">
          <h1 className="font-display text-3xl font-bold text-[#18181B] mb-3">404 - Post Not Found</h1>
          <p className="text-[#52525B]">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const PostComponent = postModule.default;
  const frontmatter = postModule.frontmatter;

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <div className="pt-28 pb-20 px-5 sm:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row gap-10">
          <aside className="md:w-1/4 shrink-0 border-t md:border-t-0 md:border-e border-[#E2DBD0] pt-8 md:pt-0 md:pe-8">
            <div className="sticky top-28">
              <h3 className="font-sans text-base font-bold text-[#18181B] mb-5">
                {currentLang === "ar" ? "مقالات أخرى" : "More Articles"}
              </h3>
              <div className="flex flex-col gap-4">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <div className="cursor-pointer group">
                      <h4
                        className={`text-sm font-semibold transition-colors leading-snug ${
                          params.slug === post.slug
                            ? "text-[#C2410C]"
                            : "text-[#3F3F46] group-hover:text-[#C2410C]"
                        }`}
                      >
                        {post.title}
                      </h4>
                      <p className="font-mono-slug text-xs text-[#52525B] mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:w-3/4 max-w-3xl">
            {frontmatter && (
              <div className="mb-10 pb-6 border-b border-[#E2DBD0]">
                <p className="font-mono-slug text-xs font-semibold text-[#C2410C] mb-2">
                  {frontmatter.date}
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#18181B] leading-tight">
                  {frontmatter.title}
                </h1>
              </div>
            )}
            <article className="prose prose-zinc prose-lg max-w-none prose-headings:font-display prose-headings:text-[#18181B] prose-a:text-[#C2410C] hover:prose-a:text-[#9A3412]">
              <PostComponent />
            </article>
          </div>
        </div>
      </div>
      <footer className="pt-8 pb-24 px-5 sm:px-6 border-t border-[#E2DBD0] bg-[#F2EEE6]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#52525B]">© {new Date().getFullYear()} {t.footer}</p>
          <SocialLinks size="sm" />
        </div>
      </footer>
    </div>
  );
}
