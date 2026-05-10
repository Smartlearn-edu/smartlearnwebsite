import { useRoute } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const modules = import.meta.glob('../content/blog/*.mdx', { eager: true }) as Record<string, any>;

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const { t } = useT();
  const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
  
  if (!match || !params?.slug) return null;

  const modulePath = `../content/blog/${params.slug}.mdx`;
  const postModule = modules[modulePath];

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
        <div className="container mx-auto max-w-3xl">
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
