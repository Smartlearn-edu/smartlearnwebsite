import { useRoute } from "wouter";

const modules = import.meta.glob('../content/blog/*.mdx', { eager: true }) as Record<string, any>;

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match || !params?.slug) return null;

  const modulePath = `../content/blog/${params.slug}.mdx`;
  const postModule = modules[modulePath];

  if (!postModule) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">404 - Post Not Found</h1>
        <p className="text-gray-400">The article you are looking for does not exist.</p>
      </div>
    );
  }

  const PostComponent = postModule.default;
  const frontmatter = postModule.frontmatter;

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
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
  );
}
