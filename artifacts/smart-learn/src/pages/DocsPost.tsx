import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const modules = import.meta.glob('../content/docs/*.mdx', { eager: true }) as Record<string, any>;

// Get sidebar links
const sidebarLinks = Object.entries(modules).map(([path, module]) => {
  const slug = path.replace('../content/docs/', '').replace('.mdx', '');
  return {
    slug,
    title: module.frontmatter?.title || slug,
  };
});

export default function DocsPost() {
  const [match, params] = useRoute("/docs/:slug");
  const { t } = useT();
  const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };
  const [headings, setHeadings] = useState<{id: string, text: string, level: number}[]>([]);
  
  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;
    
    // Slight delay to ensure MDX has rendered
    setTimeout(() => {
      const headingElements = article.querySelectorAll('h2, h3');
      const extractedHeadings: {id: string, text: string, level: number}[] = [];
      
      headingElements.forEach((el, index) => {
        if (!el.id) {
          el.id = (el.textContent || '').toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || `heading-${index}`;
        }
        extractedHeadings.push({
          id: el.id,
          text: el.textContent || '',
          level: el.tagName === 'H2' ? 2 : 3
        });
      });
      
      setHeadings(extractedHeadings);
    }, 100);
  }, [params?.slug]);
  
  if (!match || !params?.slug) return null;

  const modulePath = `../content/docs/${params.slug}.mdx`;
  const postModule = modules[modulePath];

  if (!postModule) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#07070f" }}>
        <Navbar />
        <div className="container mx-auto px-4 pt-48 pb-32 text-center flex-1">
          <h1 className="text-3xl font-bold text-white mb-4">404 - Document Not Found</h1>
          <p className="text-gray-400">The documentation you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const PostComponent = postModule.default;
  const frontmatter = postModule.frontmatter;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Left Sidebar (Navigation) */}
          <aside className="md:w-60 lg:w-64 shrink-0 border-b md:border-b-0 border-white/10 pb-6 md:pb-0">
            <div className="sticky top-28">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">All Documentation</h3>
              <ul className="space-y-2">
                {sidebarLinks.map(link => (
                  <li key={link.slug}>
                    <Link href={`/docs/${link.slug}`}>
                      <span className={`block cursor-pointer text-sm hover:text-primary transition-colors ${params.slug === link.slug ? 'text-primary font-bold' : 'text-gray-400'}`}>
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {frontmatter && (
              <div className="mb-10 pb-6 border-b border-white/10">
                <h1 className="text-4xl font-bold mb-3 text-white">{frontmatter.title}</h1>
                {frontmatter.description && <p className="text-lg text-gray-400">{frontmatter.description}</p>}
              </div>
            )}
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 prose-pre:bg-[#0d0d17] prose-pre:border prose-pre:border-white/10">
              <PostComponent />
            </article>
          </main>

          {/* Right Sidebar (Table of Contents) */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-28">
                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">On this page</h3>
                <ul className="space-y-3 border-l border-white/10 pl-4">
                  {headings.map(h => (
                    <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                      <a href={`#${h.id}`} className="text-sm text-gray-400 hover:text-primary transition-colors block leading-tight">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

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
