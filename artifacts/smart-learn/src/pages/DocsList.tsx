import { Link } from "wouter";

const modules = import.meta.glob('../content/docs/*.mdx', { eager: true }) as Record<string, any>;

const docs = Object.entries(modules).map(([path, module]) => {
  const slug = path.replace('../content/docs/', '').replace('.mdx', '');
  return {
    slug,
    title: module.frontmatter?.title || slug,
    description: module.frontmatter?.description || '',
  };
});

export default function DocsList() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
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
  );
}
