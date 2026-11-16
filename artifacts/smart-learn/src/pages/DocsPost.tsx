import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
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
  };
});

export default function DocsPost() {
  const [match, params] = useRoute("/docs/:slug");
  const { t, lang: currentLang, lok, isRTL } = useT();
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  const modulePathEn = params?.slug ? `../content/docs/en/${params.slug}.mdx` : "";
  const modulePathCur = params?.slug ? `../content/docs/${currentLang}/${params.slug}.mdx` : "";
  const postModule = modules[modulePathCur] ?? (currentLang !== "en" ? modules[modulePathEn] : undefined);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const timer = setTimeout(() => {
      const headingElements = article.querySelectorAll("h2, h3");
      const extractedHeadings: { id: string; text: string; level: number }[] = [];

      headingElements.forEach((el, index) => {
        if (!el.id) {
          el.id =
            (el.textContent || "")
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "") || `heading-${index}`;
        }
        extractedHeadings.push({
          id: el.id,
          text: el.textContent || "",
          level: el.tagName === "H2" ? 2 : 3,
        });
      });

      setHeadings(extractedHeadings);
    }, 100);

    return () => clearTimeout(timer);
  }, [params?.slug, currentLang, postModule]);

  if (!match || !params?.slug) return null;

  const sidebarLinks = allDocs.filter((d) => {
    if (d.lang === currentLang) return true;
    if (d.lang === "en") {
      const hasTranslation = allDocs.some((other) => other.slug === d.slug && other.lang === currentLang);
      return !hasTranslation;
    }
    return false;
  });

  if (!postModule) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />
        <div className="container mx-auto px-4 pt-36 pb-24 text-center flex-1">
          <h1 className="font-display text-3xl font-bold text-[#18181B] mb-3">
            404 - Document Not Found
          </h1>
          <p className="text-[#52525B]">The documentation you are looking for does not exist.</p>
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
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-8 lg:gap-12">
          {headings.length > 0 && (
            <aside className="hidden lg:block w-56 shrink-0 pb-6 md:pb-0">
              <div className="sticky top-28">
                <h3 className="text-xs font-bold text-[#52525B] mb-4 uppercase tracking-wider">
                  {lok({ en: "ON THIS PAGE", ar: "في هذه الصفحة" })}
                </h3>
                <ul className="space-y-2.5 border-s border-[#E2DBD0] ps-4">
                  {headings.map((h) => (
                    <li key={h.id} className={h.level === 3 ? "ps-3" : ""}>
                      <a
                        href={`#${h.id}`}
                        className="text-sm text-[#3F3F46] hover:text-[#C2410C] transition-colors block leading-snug"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          <div className="flex-1 min-w-0">
            {frontmatter && (
              <div className="mb-8 pb-6 border-b border-[#E2DBD0]">
                <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-[#18181B]">
                  {frontmatter.title}
                </h1>
                {frontmatter.description && (
                  <p className="text-base sm:text-lg text-[#3F3F46]">{frontmatter.description}</p>
                )}
              </div>
            )}
            <article className="prose prose-zinc prose-lg max-w-none prose-headings:font-display prose-headings:text-[#18181B] prose-a:text-[#C2410C] hover:prose-a:text-[#9A3412] prose-pre:bg-[#18181B] prose-pre:text-[#FAF8F4]">
              <PostComponent />
            </article>
          </div>

          <aside className="md:w-60 lg:w-64 shrink-0">
            <div className="sticky top-28 rounded-2xl border border-[#E2DBD0] bg-white p-5">
              <h3 className="font-sans text-sm font-bold text-[#18181B] mb-3 border-b border-[#E2DBD0] pb-2">
                {lok({ en: "All Documentation", ar: "جميع الوثائق" })}
              </h3>
              <ul className="space-y-2">
                {sidebarLinks.map((link) => (
                  <li key={link.slug}>
                    <Link href={`/docs/${link.slug}`}>
                      <span
                        className={`block cursor-pointer text-sm transition-colors ${
                          params.slug === link.slug
                            ? "text-[#C2410C] font-bold"
                            : "text-[#3F3F46] hover:text-[#C2410C]"
                        }`}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
