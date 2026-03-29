import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Check, ArrowLeft, ArrowRight, Download, MessageCircle,
  Tag, Cpu, Wrench, ExternalLink, ImageIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { plugins } from "@/data/plugins";
import { useT } from "@/i18n";
import { Link } from "wouter";

const font: React.CSSProperties = { fontFamily: "var(--site-font)" };

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const ui = {
  en: {
    back: "Back to Plugins",
    features: "Key Features",
    about: "About This Plugin",
    images: "Screenshots",
    pricing: "Pricing",
    free: "Free & Open Source",
    freeDesc: "Download this plugin for free on Moodle.org",
    downloadBtn: "Download on Moodle.org",
    buyBtn: "Get This Plugin via WhatsApp",
    setupTitle: "Need the n8n Workflow?",
    setupDesc: "This plugin requires an n8n workflow to handle AI grading. You can build it yourself — or hire me to set it up, configure the LLM connections, and test it on your Moodle instance.",
    setupPrice: "Setup starts at",
    setupBtn: "Hire Me for n8n Setup",
    moodle: "Requires",
    type: "Type",
    notFound: "Plugin not found",
    backHome: "Back to Plugins",
    placeholderImg: "Screenshots coming soon",
    usd: "USD",
    oneTime: "one-time",
  },
  ar: {
    back: "العودة إلى الإضافات",
    features: "المميزات الرئيسية",
    about: "حول هذه الإضافة",
    images: "لقطات الشاشة",
    pricing: "التسعير",
    free: "مجاني ومفتوح المصدر",
    freeDesc: "حمّل هذه الإضافة مجاناً من Moodle.org",
    downloadBtn: "تنزيل من Moodle.org",
    buyBtn: "احصل على الإضافة عبر واتساب",
    setupTitle: "هل تحتاج سير عمل n8n؟",
    setupDesc: "تتطلب هذه الإضافة سير عمل n8n للتعامل مع التصحيح بالذكاء الاصطناعي. يمكنك بناؤه بنفسك — أو توظيفي لإعداده وتهيئة اتصالات LLM واختباره على Moodle الخاص بك.",
    setupPrice: "يبدأ الإعداد من",
    setupBtn: "وظّفني لإعداد n8n",
    moodle: "يتطلب",
    type: "النوع",
    notFound: "الإضافة غير موجودة",
    backHome: "العودة إلى الإضافات",
    placeholderImg: "لقطات الشاشة قريباً",
    usd: "دولار",
    oneTime: "مرة واحدة",
  },
};

export function PluginDetailPage() {
  const { pluginSlug } = useParams<{ pluginSlug: string }>();
  const { lang, isRTL } = useT();
  const t = ui[lang];
  const plugin = plugins.find((p) => p.slug === pluginSlug);

  if (!plugin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#07070f" }}>
        <Navbar />
        <div className="text-center px-6">
          <p className="text-6xl mb-6">404</p>
          <h1 className="text-2xl font-black text-white mb-4" style={font}>{t.notFound}</h1>
          <Link href="/services/plugins" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white"
            style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", ...font }}>
            {t.backHome}
          </Link>
        </div>
      </div>
    );
  }

  const name = lang === "ar" ? plugin.nameAr : plugin.name;
  const features = lang === "ar" ? plugin.featuresAr : plugin.features;
  const description = lang === "ar" ? plugin.descriptionAr : plugin.description;
  const categoryLabel = lang === "ar" ? plugin.categoryAr : plugin.category;

  const isPaid = !plugin.free;
  const isSetupPlugin = plugin.requiresSetup;

  return (
    <>
      <Helmet>
        <title>{name} — Smart Learn Moodle Plugins</title>
        <meta name="description" content={description.slice(0, 155)} />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "#07070f", ...font }}>
        <Navbar />

        {/* Back link */}
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-4">
          <Link href="/services/plugins"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors">
            {isRTL ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
            {t.back}
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-purple-500/30 text-purple-300 bg-purple-900/20">
                {categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-slate-600/30 text-slate-400 bg-slate-900/40 flex items-center gap-1">
                <Cpu size={11} /> {t.moodle}: {plugin.moodle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-slate-600/30 text-slate-400 bg-slate-900/40 flex items-center gap-1">
                <Tag size={11} /> {plugin.type}
              </span>
              {plugin.free ? (
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/40 text-emerald-300 bg-emerald-900/20">
                  {t.free}
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-bold border border-purple-500/40 text-purple-300 bg-purple-900/20">
                  ${plugin.price} {t.usd}
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={font}>
              <span style={gradientText}>{name}</span>
            </h1>

            {/* Features quick grid */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-purple-600/30">
                      <Check size={11} className="text-purple-300" />
                    </span>
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Images */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h2 className="text-lg font-black text-white mb-4" style={font}>{t.images}</h2>
          {plugin.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plugin.images.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
                  <img src={`/plugins/${plugin.slug}/${img}`} alt={`${name} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col items-center justify-center py-16 gap-3 text-slate-600">
              <ImageIcon size={40} strokeWidth={1} />
              <p className="text-sm">{t.placeholderImg}</p>
            </div>
          )}
        </section>

        {/* Description */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-lg font-black text-white mb-5 flex items-center gap-2" style={font}>
              <Wrench size={18} className="text-purple-400" />
              {t.about}
            </h2>
            <div className="prose prose-invert max-w-none">
              {description.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed mb-4 last:mb-0 text-sm md:text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <h2 className="text-lg font-black text-white mb-5" style={font}>{t.pricing}</h2>

          <div className="grid grid-cols-1 gap-4">
            {isPaid && !isSetupPlugin && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="text-5xl font-black text-white mb-2" style={font}>
                      ${plugin.price} <span className="text-2xl text-slate-400">{t.usd}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{t.oneTime}</p>
                  </div>
                  <a href={plugin.buyUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-white text-sm transition-all hover:opacity-90 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 36px rgba(105,0,163,0.4)", ...font }}>
                    <MessageCircle size={18} />
                    {t.buyBtn}
                  </a>
                </div>
              </motion.div>
            )}

            {plugin.free && !isSetupPlugin && plugin.downloadUrl && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/10 to-emerald-800/5 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="text-4xl font-black text-emerald-300 mb-2" style={font}>{t.free}</div>
                    <p className="text-slate-400 text-sm">{t.freeDesc}</p>
                  </div>
                  <a href={plugin.downloadUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-white text-sm transition-all hover:opacity-90 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #065f46, #10b981)", boxShadow: "0 0 36px rgba(16,185,129,0.2)", ...font }}>
                    <Download size={18} />
                    {t.downloadBtn}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            )}

            {isSetupPlugin && (
              <>
                {/* Free download card */}
                {plugin.downloadUrl && (
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/10 to-emerald-800/5 p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <div className="text-4xl font-black text-emerald-300 mb-2" style={font}>{t.free}</div>
                        <p className="text-slate-400 text-sm">{t.freeDesc}</p>
                      </div>
                      <a href={plugin.downloadUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-white text-sm transition-all hover:opacity-90 hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #065f46, #10b981)", boxShadow: "0 0 36px rgba(16,185,129,0.2)", ...font }}>
                        <Download size={18} />
                        {t.downloadBtn}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* n8n setup offer card */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
                  className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-base">⚙️</span>
                        <h3 className="text-xl font-black text-white" style={font}>{t.setupTitle}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.setupDesc}</p>
                      <div className="text-3xl font-black text-white" style={font}>
                        {t.setupPrice} <span className="text-purple-300">${plugin.setupPrice} {t.usd}</span>
                      </div>
                    </div>
                    <a href={`https://wa.me/201005822858?text=Hi! I need the n8n workflow setup for the Smart Grade AI plugin.`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-white text-sm transition-all hover:opacity-90 hover:scale-105 self-end md:self-center"
                      style={{ background: "linear-gradient(135deg, #6900A3, #a855f7)", boxShadow: "0 0 36px rgba(105,0,163,0.4)", ...font }}>
                      <MessageCircle size={18} />
                      {t.setupBtn}
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </section>

        <footer className="py-8 px-6 text-center border-t border-white/[0.04]">
          <p className="text-sm text-slate-600" style={font}>
            © {new Date().getFullYear()} Smart Learn · Mohammad Nabil · Egypt
          </p>
        </footer>
      </div>
    </>
  );
}
