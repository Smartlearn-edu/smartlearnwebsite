import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { GalleryPreviewModal } from "@/components/GalleryPreviewModal";
import { Search, Download, Eye, LayoutTemplate } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function GalleryPage() {
  const [sections, setSections] = useState<any[]>([]);
  const [filteredSections, setFilteredSections] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewSection, setPreviewSection] = useState<any | null>(null);

  useEffect(() => {
    fetch("/catalog.json")
      .then(res => res.json())
      .then(data => {
        setSections(data.sections || []);
        setFilteredSections(data.sections || []);
      })
      .catch(err => console.error("Failed to load catalog", err));
  }, []);

  useEffect(() => {
    let result = sections;
    if (activeCategory !== "All") {
      result = result.filter(s => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t: string) => t.toLowerCase().includes(q))
      );
    }
    setFilteredSections(result);
  }, [search, activeCategory, sections]);

  const categories = ["All", ...Array.from(new Set(sections.map(s => s.category)))];

  const handleDownload = (e: React.MouseEvent, url: string, filename: string) => {
    e.stopPropagation();
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <Helmet>
        <title>Section Gallery | Smartlearn AI</title>
      </Helmet>
      
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            SmartLearn <span className="text-indigo-400">Section Gallery</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Browse our library of premium AI-generated Moodle sections. Preview them live and download the JSON to import directly into your LMS.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search sections..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Categories</h3>
                <ul className="space-y-1">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeCategory === cat 
                            ? "bg-indigo-500/20 text-indigo-400 font-medium" 
                            : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            {filteredSections.length === 0 ? (
              <div className="text-center py-20 bg-slate-800/20 border border-slate-800 rounded-2xl border-dashed">
                <LayoutTemplate className="mx-auto h-12 w-12 text-slate-600 mb-4" />
                <h3 className="text-lg font-medium text-white mb-1">No sections found</h3>
                <p className="text-slate-400">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSections.map(section => (
                  <div 
                    key={section.id}
                    onClick={() => setPreviewSection(section)}
                    className="group bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all cursor-pointer flex flex-col"
                  >
                    <div className="aspect-video bg-slate-900 relative flex items-center justify-center border-b border-slate-700/50 overflow-hidden">
                      {section.preview_image ? (
                        <img src={section.preview_image} alt={section.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <LayoutTemplate size={48} className="text-slate-700" />
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-full font-medium shadow-lg">
                          <Eye size={18} /> Live Preview
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-indigo-400 transition-colors">
                          {section.name}
                        </h3>
                        {section.is_new && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold whitespace-nowrap border border-emerald-500/20">
                            NEW
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          {section.category}
                        </span>
                        
                        <button 
                          onClick={(e) => handleDownload(e, section.download_url, section.id)}
                          className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors border border-slate-700"
                        >
                          <Download size={14} /> Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

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
