import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { GalleryPreviewModal } from "@/components/GalleryPreviewModal";
import { Search, Download, Eye, LayoutTemplate } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useT } from "@/i18n";

function GalleryCard({
  section,
  onPreview,
  onDownload,
}: {
  section: any;
  onPreview: () => void;
  onDownload: (e: React.MouseEvent) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article
      onClick={onPreview}
      className="group bg-white border border-[#E2DBD0] rounded-2xl overflow-hidden hover:border-[#C9C0B2] hover:shadow-md transition-all cursor-pointer flex flex-col"
    >
      <div className="aspect-video bg-[#F2EEE6] relative flex items-center justify-center border-b border-[#E2DBD0] overflow-hidden">
        {section.preview_image && !imgFailed ? (
          <img
            src={`/${section.preview_image.replace(/^\//, "")}`}
            alt={section.name}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-1.5 px-4 text-center">
            <LayoutTemplate size={28} className="text-[#581C87] opacity-70" aria-hidden="true" />
            <span className="font-mono-slug text-[11px] font-semibold text-[#52525B]">
              {section.variant || section.category}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-[#18181B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-2 bg-[#C2410C] text-white px-4 py-2 rounded-full text-sm font-bold shadow">
            <Eye size={16} aria-hidden="true" />
            <span>Live Preview</span>
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-sans font-bold text-[#18181B] text-base leading-snug group-hover:text-[#C2410C] transition-colors">
            {section.name}
          </h3>
          {section.is_new && (
            <span className="px-2 py-0.5 rounded-full bg-[#ECFDF3] text-[#15803D] text-[11px] font-bold whitespace-nowrap border border-[#BBF7D0]">
              NEW
            </span>
          )}
        </div>

        <p className="text-sm text-[#3F3F46] line-clamp-2 mb-4 flex-1">
          {section.description}
        </p>

        <div className="flex items-center justify-between pt-3.5 border-t border-[#E2DBD0]">
          <span className="text-xs font-semibold text-[#52525B] uppercase tracking-wider">
            {section.category}
          </span>

          <button
            type="button"
            onClick={onDownload}
            className="flex items-center gap-1.5 text-xs font-bold text-[#18181B] hover:text-[#C2410C] bg-[#FAF8F4] hover:bg-[#F2EEE6] px-3 py-1.5 rounded-lg transition-colors border border-[#E2DBD0] cursor-pointer"
          >
            <Download size={13} aria-hidden="true" />
            <span>JSON</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export function GalleryPage() {
  const { isRTL } = useT();
  const [sections, setSections] = useState<any[]>([]);
  const [filteredSections, setFilteredSections] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewSection, setPreviewSection] = useState<any | null>(null);

  useEffect(() => {
    fetch("/catalog.json")
      .then((res) => res.json())
      .then((data) => {
        setSections(data.sections || []);
        setFilteredSections(data.sections || []);
      })
      .catch((err) => console.error("Failed to load catalog", err));
  }, []);

  useEffect(() => {
    let result = sections;
    if (activeCategory !== "All") {
      result = result.filter((s) => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t: string) => t.toLowerCase().includes(q))
      );
    }
    setFilteredSections(result);
  }, [search, activeCategory, sections]);

  const categories = ["All", ...Array.from(new Set(sections.map((s) => s.category)))];

  const handleDownload = (e: React.MouseEvent, url: string, filename: string) => {
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
      <Helmet>
        <title>Section Gallery | SmartLearn Theme for Moodle</title>
      </Helmet>

      <Navbar />

      <div className="pt-28 pb-24 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
            SmartLearn Theme · Canvas Library
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#18181B] mb-3">
            SmartLearn <span className="text-[#C2410C]">Section Gallery</span>
          </h1>
          <p className="text-base text-[#3F3F46] leading-relaxed">
            Browse reusable Moodle landing-page sections included with{" "}
            <code className="font-mono-slug text-xs px-1.5 py-0.5 rounded bg-[#F2EEE6] border border-[#E2DBD0]">
              theme_smartlearn
            </code>
            . Preview layouts live and export JSON directly into your LMS.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="relative">
                <Search
                  className="absolute start-3 top-1/2 -translate-y-1/2 text-[#52525B] pointer-events-none"
                  size={16}
                  aria-hidden="true"
                />
                <input
                  type="search"
                  aria-label="Search sections"
                  placeholder="Search sections..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-[#C9C0B2] rounded-xl py-2.5 ps-9 pe-4 text-sm text-[#18181B] placeholder:text-[#71717A] focus:border-[#C2410C]"
                />
              </div>

              <div>
                <h2 className="text-xs font-bold text-[#52525B] uppercase tracking-wider mb-3">
                  Categories
                </h2>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-start px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                          activeCategory === cat
                            ? "bg-[#18181B] text-white"
                            : "text-[#3F3F46] hover:bg-[#F2EEE6] hover:text-[#18181B]"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filteredSections.length === 0 ? (
              <div className="text-center py-20 bg-white border border-[#E2DBD0] rounded-2xl">
                <LayoutTemplate className="mx-auto h-10 w-10 text-[#52525B] mb-3" aria-hidden="true" />
                <h3 className="text-base font-bold text-[#18181B] mb-1">No sections found</h3>
                <p className="text-sm text-[#52525B]">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSections.map((section) => (
                  <GalleryCard
                    key={section.id}
                    section={section}
                    onPreview={() => setPreviewSection(section)}
                    onDownload={(e) => handleDownload(e, section.download_url, section.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {previewSection && (
        <GalleryPreviewModal
          section={previewSection}
          onClose={() => setPreviewSection(null)}
        />
      )}
    </div>
  );
}

export default GalleryPage;
