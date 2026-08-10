import { useState, useEffect } from "react";
import { Download, X, Eye } from "lucide-react";

export function GalleryPreviewModal({ section, onClose }: { section: any, onClose: () => void }) {
  const [htmlContent, setHtmlContent] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [jsContent, setJsContent] = useState("");

  useEffect(() => {
    // Fetch the JSON to display preview
    fetch(section.download_url)
      .then(res => res.json())
      .then(data => {
        setHtmlContent(data.html || "");
        setCssContent(data.css || "");
        setJsContent(data.js || "");
      });
  }, [section.download_url]);

  const previewDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: system-ui; background: #0f172a; color: white; margin: 0; padding: 2rem; }
          :root {
            --smartlearn-primary: #6366f1;
            --smartlearn-primary-hover: #4f46e5;
            --smartlearn-card-bg: rgba(30, 41, 59, 0.7);
            --smartlearn-text: #f8fafc;
            --smartlearn-text-muted: #cbd5e1;
            --smartlearn-radius: 8px;
          }
          ${cssContent}
        </style>
      </head>
      <body>
        ${htmlContent.replace(/{{image1}}/g, "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000")}
        <script>
          ${jsContent}
        </script>
      </body>
    </html>
  `;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
          <div>
            <h2 className="text-xl font-bold text-white">{section.name}</h2>
            <p className="text-sm text-slate-400">{section.category} - {section.variant}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 bg-slate-950 p-4">
          <iframe 
            srcDoc={previewDoc}
            className="w-full h-full rounded-xl border border-slate-800 bg-slate-900 shadow-inner"
            title="Preview"
          />
        </div>
      </div>
    </div>
  );
}
