import { useRoute, Link } from "wouter";

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
  
  if (!match || !params?.slug) return null;

  const modulePath = `../content/docs/${params.slug}.mdx`;
  const postModule = modules[modulePath];

  if (!postModule) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">404 - Document Not Found</h1>
        <p className="text-gray-400">The documentation you are looking for does not exist.</p>
      </div>
    );
  }

  const PostComponent = postModule.default;
  const frontmatter = postModule.frontmatter;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="md:w-64 shrink-0">
        <div className="sticky top-24">
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
    </div>
  );
}
