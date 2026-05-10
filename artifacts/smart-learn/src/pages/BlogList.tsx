import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
import { useT } from "@/i18n";

const modules = import.meta.glob('../content/blog/*.mdx', { eager: true }) as Record<string, any>;

const posts = Object.entries(modules).map(([path, module]) => {
  const slug = path.replace('../content/blog/', '').replace('.mdx', '');
  return {
    slug,
    title: module.frontmatter?.title || slug,
    date: module.frontmatter?.date || '',
    description: module.frontmatter?.description || '',
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogList() {
  const { t } = useT();
  const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#07070f" }}>
      <Navbar />
      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">SmartLearn Blog</h1>
            <p className="text-lg text-gray-400">News, updates, and educational guides.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group p-6 border border-white/10 rounded-2xl hover:border-primary/50 transition-all cursor-pointer bg-[#12121f]">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-white">{post.title}</h2>
                  <p className="text-sm text-primary mb-4">{post.date}</p>
                  <p className="text-gray-400">{post.description}</p>
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
