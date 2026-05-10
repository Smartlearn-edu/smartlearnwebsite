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
  const { t, lang: currentLang } = useT();
  const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
  
  if (!match || !params?.slug) return null;

  const modulePath = `../content/blog/${currentLang}/${params.slug}.mdx`;
  const postModule = modules[modulePath];
  const posts = allPosts.filter(p => p.lang === currentLang);

  if (!postModule) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#07070f" }}>
        <Navbar />
        <div className="container mx-auto px-4 pt-48 pb-32 text-center flex-1">
          <h1 className="text-3xl font-bold text-white mb-4">404 - Post Not Found</h1>
          <p className="text-gray-400">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const PostComponent = postModule.default;
  const frontmatter = postModule.frontmatter;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="md:w-1/4 shrink-0 border-t md:border-t-0 md:border-r border-white/10 pt-12 md:pt-0 pr-0 md:pr-8">
            <div className="sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">More Articles</h3>
              <div className="flex flex-col gap-5">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <div className={`cursor-pointer group ${params.slug === post.slug ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                      <h4 className={`text-base font-medium transition-colors leading-snug ${params.slug === post.slug ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:w-3/4 max-w-3xl">
            {frontmatter && (
              <div className="mb-12 pb-8 border-b border-white/10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">{frontmatter.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="text-primary">{frontmatter.date}</span>
                </div>
              </div>
            )}
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80">
              <PostComponent />
            </article>
          </main>

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
