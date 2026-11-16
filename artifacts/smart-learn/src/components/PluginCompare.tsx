import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BarChart2, Check, ChevronRight, ChevronLeft, Layers } from "lucide-react";
import type { Plugin } from "@/data/plugins";
import { useT } from "@/i18n";

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  local:       { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  mod:         { bg: "#ECFDF3", text: "#15803D", border: "#BBF7D0" },
  report:      { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" },
  gradereport: { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" },
  paygw:       { bg: "#FDF2F8", text: "#BE185D", border: "#FBCFE8" },
  enrol:       { bg: "#F5EFFA", text: "#581C87", border: "#E9D5FF" },
  theme:       { bg: "#FFF3EB", text: "#C2410C", border: "#FED7AA" },
};

const TEXT = {
  en: {
    compareX: (n: number) => `Compare ${n} plugin${n === 1 ? "" : "s"}`,
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
    premium: "Commercial",
    contactPricing: "Contact for pricing",
    placeholder: "Full details coming soon",
    clearComparison: "Clear comparison",
    removePlugin: "Remove",
  },
  ar: {
    compareX: (n: number) => `قارن ${n} إضافات`,
    clear: "مسح",
    modalTitle: "مقارنة الإضافات",
    close: "إغلاق",
    rowType: "النوع",
    rowMoodle: "إصدار Moodle",
    rowCategory: "الفئة",
    rowPricing: "التسعير",
    rowFeatures: "المميزات",
    free: "مجانية",
    freeSupport: "مجانية + دعم مدفوع",
    premium: "تجارية",
    contactPricing: "تواصل للتسعير",
    placeholder: "التفاصيل الكاملة قريباً",
    clearComparison: "إعادة تعيين المقارنة",
    removePlugin: "إزالة",
  },
};

function PricingBadge({ plugin, txt }: { plugin: Plugin; txt: (typeof TEXT)["en"] }) {
  if (!plugin.free) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FED7AA] text-[#C2410C]">
        {txt.premium}
        {plugin.price ? ` · $${plugin.price}` : ""}
      </span>
    );
  }
  if (plugin.paidSupport) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309]">
        {txt.freeSupport}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#ECFDF3] border border-[#BBF7D0] text-[#15803D]">
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
          transition={{ type: "spring", damping: 24, stiffness: 280 }}
          className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 pt-3 pointer-events-none"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="max-w-3xl mx-auto rounded-2xl px-4 py-3 flex items-center gap-3 flex-wrap bg-white border border-[#C9C0B2] shadow-xl pointer-events-auto">
            <BarChart2 size={18} className="text-[#C2410C] flex-shrink-0" aria-hidden="true" />

            <div className="flex items-center gap-2 flex-1 min-w-0 flex-wrap">
              {selected.map((p) => (
                <span
                  key={p.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-[#F2EEE6] border border-[#E2DBD0] text-[#18181B]"
                >
                  {lang === "en" ? p.name : p.nameAr}
                  <button
                    type="button"
                    onClick={() => onRemove(p.slug)}
                    className="hover:text-[#C2410C] transition-colors cursor-pointer"
                    aria-label={`${txt.removePlugin} ${lang === "en" ? p.name : p.nameAr}`}
                  >
                    <X size={12} aria-hidden="true" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={onClear}
                className="text-xs font-bold text-[#52525B] hover:text-[#18181B] transition-colors px-2.5 py-1.5 rounded-lg hover:bg-[#F2EEE6] cursor-pointer"
              >
                {txt.clear}
              </button>
              <button
                type="button"
                onClick={onCompare}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors cursor-pointer"
              >
                <span>{txt.compareX(selected.length)}</span>
                <ChevronIcon size={15} aria-hidden="true" />
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
    return () => {
      document.body.style.overflow = prev;
    };
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
      className="fixed inset-0 z-[60] flex flex-col bg-black/55 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={txt.modalTitle}
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 32, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col h-full max-h-full rounded-t-3xl md:rounded-3xl md:m-6 overflow-hidden bg-[#FAF8F4] border border-[#E2DBD0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0 bg-white border-b border-[#E2DBD0]">
          <div className="flex items-center gap-2.5">
            <BarChart2 size={18} className="text-[#C2410C]" aria-hidden="true" />
            <h2 className="font-sans text-lg font-bold text-[#18181B]">{txt.modalTitle}</h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FFF3EB] text-[#C2410C] border border-[#FED7AA]">
              {selected.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClear();
                handleClose();
              }}
              className="text-xs font-bold text-[#52525B] hover:text-[#18181B] transition-colors cursor-pointer"
            >
              {txt.clearComparison}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center justify-center w-8 h-8 rounded-xl border border-[#E2DBD0] bg-[#FAF8F4] text-[#52525B] hover:text-[#18181B] transition-colors cursor-pointer"
              aria-label={txt.close}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="min-w-max p-6">
            <table className="w-full border-collapse" style={{ minWidth: 520 }}>
              <colgroup>
                <col style={{ width: 140 }} />
                {selected.map((p) => (
                  <col key={p.slug} style={{ width: 230 }} />
                ))}
              </colgroup>

              <thead>
                <tr>
                  <th className="pb-4 text-start" />
                  {selected.map((p) => {
                    const thumbnail = p.images?.[0];
                    return (
                      <th key={p.slug} className="pb-4 px-3 text-start align-top">
                        <div className="rounded-xl overflow-hidden mb-3 border border-[#E2DBD0] bg-[#F2EEE6] h-28 flex items-center justify-center">
                          {thumbnail ? (
                            <img
                              src={`/plugins/${p.slug}/${thumbnail}`}
                              alt={lang === "en" ? p.name : p.nameAr}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <Layers size={28} className="text-[#581C87] opacity-50" aria-hidden="true" />
                          )}
                        </div>
                        <div className="text-sm font-bold text-[#18181B] leading-snug">
                          {lang === "en" ? p.name : p.nameAr}
                        </div>
                        <div className="font-mono-slug text-xs text-[#52525B] mt-0.5">{p.slug}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {ROW_LABELS.map((label, ri) => (
                  <tr key={label} className="border-t border-[#E2DBD0]">
                    <th
                      scope="row"
                      className="py-4 pe-4 text-xs font-bold text-[#52525B] uppercase tracking-wider align-top text-start"
                    >
                      {label}
                    </th>

                    {selected.map((p) => {
                      const typeStyle = typeColors[p.type] ?? {
                        bg: "#F5EFFA",
                        text: "#581C87",
                        border: "#E9D5FF",
                      };
                      const features = lang === "en" ? p.features : p.featuresAr;
                      const catLabel = lang === "en" ? p.category : p.categoryAr;

                      return (
                        <td key={p.slug} className="py-4 px-3 align-top">
                          {ri === 0 && (
                            <span
                              className="font-mono-slug text-xs font-bold px-2 py-0.5 rounded border"
                              style={{
                                background: typeStyle.bg,
                                color: typeStyle.text,
                                borderColor: typeStyle.border,
                              }}
                            >
                              {p.type}
                            </span>
                          )}

                          {ri === 1 && (
                            <span className="text-sm text-[#18181B] font-semibold">
                              {p.moodle}
                            </span>
                          )}

                          {ri === 2 && (
                            <span className="text-sm text-[#3F3F46]">{catLabel}</span>
                          )}

                          {ri === 3 && <PricingBadge plugin={p} txt={txt} />}

                          {ri === 4 &&
                            (p.placeholder && (!features || features.length === 0) ? (
                              <span className="text-xs text-[#52525B] italic">{txt.placeholder}</span>
                            ) : (
                              <ul className="space-y-1.5">
                                {features.map((feat, fi) => (
                                  <li key={fi} className="flex items-start gap-2">
                                    <Check
                                      size={14}
                                      className="flex-shrink-0 mt-0.5 text-[#15803D]"
                                      aria-hidden="true"
                                    />
                                    <span className="text-sm text-[#3F3F46] leading-relaxed">
                                      {feat}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ))}
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
