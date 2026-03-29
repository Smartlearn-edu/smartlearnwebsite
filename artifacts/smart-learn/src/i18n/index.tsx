import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en } from "./en";
import { ar } from "./ar";

export type Lang = "en" | "ar";
export type Translations = typeof en;

interface LangCtx {
  lang: Lang;
  t: Translations;
  isRTL: boolean;
  toggle: () => void;
  lok: <T extends string>(field: { en: T; ar: T }) => T;
}

const Ctx = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("sl-lang");
      return saved === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  });

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("sl-lang", lang);
    } catch {}
  }, [lang, isRTL]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const t = lang === "ar" ? ar : en;
  const lok = <T extends string>(field: { en: T; ar: T }): T =>
    lang === "ar" ? field.ar : field.en;

  return <Ctx.Provider value={{ lang, t, isRTL, toggle, lok }}>{children}</Ctx.Provider>;
}

export function useT() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useT must be inside LanguageProvider");
  return ctx;
}
