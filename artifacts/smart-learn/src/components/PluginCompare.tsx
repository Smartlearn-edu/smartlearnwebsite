import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BarChart2, Check, ChevronRight, ChevronLeft } from "lucide-react";
import type { Plugin } from "@/data/plugins";
import { useT } from "@/i18n";

const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const typeColors: Record<string, { bg: string; text: string }> = {
  local:       { bg: "rgba(59,130,246,0.12)",  text: "#93c5fd" },
  mod:         { bg: "rgba(16,185,129,0.12)",  text: "#6ee7b7" },
  report:      { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  gradereport: { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  paygw:       { bg: "rgba(236,72,153,0.12)",  text: "#f9a8d4" },
  enrol:       { bg: "rgba(168,85,247,0.12)",  text: "#c084fc" },
};

const TEXT = {
  en: {
    compareX: (n: number) => `Compare ${n} plugin${n === 1 ? "" : "s"} →`,
    clear: "Clear",
    modalTitle: "Plugin Comparison",
    close: "Close",
    rowType: "Type",
    rowMoodle: "Moodle Version",
    rowCategory: "Category",
    rowPricing: "Pricing",
    rowFeatures: "Features",
    free: "Free",
    freeSupport: "Free + Paid Support",
    premium: "Premium",
    contactPricing: "Contact for pricing",
    placeholder: "Full details coming soon",
    clearComparison: "Clear comparison",
    removePlugin: "Remove",
  },
  ar: {
    compareX: (n: number) => `← قارن ${n} إضافات`,
    clear: "مسح",
    modalTitle: "مقارنة الإضافات",
    close: "إغلاق",
    rowType: "النوع",
    rowMoodle: "إصدار Moodle",
    rowCategory: "الفئة",
    rowPricing: "التسعير",
    rowFeatures: "المميزات",
    free: "مجاني",
    freeSupport: "مجاني + دعم مدفوع",
    premium: "مميز",
    contactPricing: "تواصل للتسعير",
    placeholder: "التفاصيل الكاملة قريباً",
    clearComparison: "إعادة تعيين المقارنة",
    removePlugin: "إزالة",
  },
};

function PricingBadge({ plugin, txt }: { plugin: Plugin; txt: (typeof TEXT)["en"] }) {
  if (!plugin.free) {
    return (
      <span
        className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full"
        style={{ background: "rgba(105,0,163,0.2)", border: "1px solid rgba(168,85,247,0.4)", color: "#c084fc", ...font }}
      >
        {txt.premium}
        {plugin.price ? ` · $${plugin.price}` : ""}
      </span>
    );
  }
  if (plugin.paidSupport) {
    return (
      <span
        className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full"
        style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", color: "#fbbf24", ...font }}
      >
        {txt.freeSupport}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full"
      style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80", ...font }}
    >
      {txt.free}
    </span>
  );
}

export function ComparisonBar({
  selected,
  onClear,
  onRemove,
  onCompare,
}: {
  selected: Plugin[];
  onClear: () => void;
  onRemove: (slug: string) => void;
  onCompare: () => void;
}) {
  const { lang, isRTL } = useT();
  const txt = TEXT[lang];
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <AnimatePresence>
      {selected.length >= 2 && (
        <motion.div
          key="compare-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 pt-3"
          dir={isRTL ? "rtl" : "ltr"}
          style={{ pointerEvents: "none" }}
        >
          <div
            className="max-w-3xl mx-auto rounded-2xl px-4 py-3 flex items-center gap-3 flex-wrap"
            style={{
              background: "rgba(13,13,26,0.96)",
              border: "1px solid rgba(168,85,247,0.35)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,85,247,0.15)",
              pointerEvents: "all",
            }}
          >
            <BarChart2 size={16} style={{ color: "#a855f7", flexShrink: 0 }} />

            <div className="flex items-center gap-2 flex-1 min-w-0 flex-wrap">
              {selected.map((p) => (
                <span
                  key={p.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg"
                  style={{
                    background: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.25)",
                    color: "#c084fc",
                    ...font,
                  }}
                >
                  {lang === "en" ? p.name : p.nameAr}
                  <button
                    onClick={() => onRemove(p.slug)}
                    className="hover:text-white transition-colors"
                    aria-label={`${txt.removePlugin} ${lang === "en" ? p.name : p.nameAr}`}
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={onClear}
                className="text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
                style={font}
              >
                {txt.clear}
              </button>
              <button
                onClick={onCompare}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-black text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}
              >
                {txt.compareX(selected.length)}
                <ChevronIcon size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ComparisonModal({
  selected,
  onClose,
  onClear,
}: {
  selected: Plugin[];
  onClose: () => void;
  onClear: () => void;
}) {
  const { lang, isRTL } = useT();
  const txt = TEXT[lang];

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handleClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const ROW_LABELS = [
    txt.rowType,
    txt.rowMoodle,
    txt.rowCategory,
    txt.rowPricing,
    txt.rowFeatures,
  ];

  return (
    <motion.div
      key="compare-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex flex-col"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex flex-col h-full max-h-full rounded-t-3xl md:rounded-3xl md:m-6 overflow-hidden"
        style={{ background: "#0d0d1a", border: "1px solid rgba(168,85,247,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2.5">
            <BarChart2 size={18} style={{ color: "#a855f7" }} />
            <h2 className="text-lg font-black text-white" style={font}>{txt.modalTitle}</h2>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(168,85,247,0.12)", color: "#a855f7", ...font }}
            >
              {selected.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { onClear(); handleClose(); }}
              className="text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors"
              style={font}
            >
              {txt.clearComparison}
            </button>
            <button
              onClick={handleClose}
              className="flex items-center justify-center w-8 h-8 rounded-xl hover:bg-white/8 transition-colors"
              style={{ color: "#64748b" }}
              aria-label={txt.close}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="min-w-max p-6">
            <table className="w-full border-collapse" style={{ minWidth: 520 }}>
              <colgroup>
                <col style={{ width: 140 }} />
                {selected.map((p) => <col key={p.slug} style={{ width: 220 }} />)}
              </colgroup>

              <thead>
                <tr>
                  <th className="pb-4 text-start" />
                  {selected.map((p) => {
                    const thumbnail = p.images?.[0];
                    return (
                      <th key={p.slug} className="pb-4 px-3 text-start align-top">
                        <div
                          className="rounded-2xl overflow-hidden mb-3"
                          style={{ height: 100, background: "rgba(105,0,163,0.08)" }}
                        >
                          {thumbnail ? (
                            <img
                              src={`/plugins/${p.slug}/${thumbnail}`}
                              alt={lang === "en" ? p.name : p.nameAr}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = "none";
                                (e.currentTarget.parentElement as HTMLElement).style.background =
                                  "linear-gradient(135deg, rgba(105,0,163,0.15), rgba(168,85,247,0.08))";
                              }}
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center"
                              style={{ background: "linear-gradient(135deg, rgba(105,0,163,0.15), rgba(168,85,247,0.08))" }}
                            >
                              <span className="text-3xl opacity-30">🔌</span>
                            </div>
                          )}
                        </div>
                        <div className="text-sm font-black text-white leading-snug" style={font}>
                          {lang === "en" ? p.name : p.nameAr}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {ROW_LABELS.map((label, ri) => (
                  <tr
                    key={label}
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <td
                      className="py-4 pe-4 text-xs font-black text-slate-500 uppercase tracking-wider align-top"
                      style={{ ...font, width: 140 }}
                    >
                      {label}
                    </td>

                    {selected.map((p) => {
                      const typeStyle = typeColors[p.type] ?? { bg: "rgba(168,85,247,0.1)", text: "#c084fc" };
                      const features = lang === "en" ? p.features : p.featuresAr;
                      const catLabel = lang === "en" ? p.category : p.categoryAr;

                      return (
                        <td key={p.slug} className="py-4 px-3 align-top">
                          {ri === 0 && (
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-md"
                              style={{ background: typeStyle.bg, color: typeStyle.text, fontFamily: "monospace" }}
                            >
                              {p.type}
                            </span>
                          )}

                          {ri === 1 && (
                            <span className="text-sm text-slate-300 font-semibold" style={font}>
                              {p.moodle}
                            </span>
                          )}

                          {ri === 2 && (
                            <span className="text-sm text-slate-300" style={font}>
                              {catLabel}
                            </span>
                          )}

                          {ri === 3 && <PricingBadge plugin={p} txt={txt} />}

                          {ri === 4 && (
                            p.placeholder ? (
                              <span className="text-xs text-slate-600 italic" style={font}>{txt.placeholder}</span>
                            ) : (
                              <ul className="space-y-1.5">
                                {features.map((feat, fi) => (
                                  <li key={fi} className="flex items-start gap-2">
                                    <Check size={12} className="flex-shrink-0 mt-0.5" style={{ color: "#a855f7" }} />
                                    <span className="text-sm text-slate-200 leading-relaxed" style={font}>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            )
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
