import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Check, ArrowLeft, ArrowRight, Download, MessageCircle, ShoppingCart,
  Tag, Cpu, Wrench, ExternalLink, ImageIcon,
  ChevronLeft, ChevronRight, Sparkles, Copy, CheckCheck, X
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { usePlugins } from "@/hooks/usePlugins";
import { useT } from "@/i18n";
import { SocialLinks } from "@/components/SocialLinks";
import { PluginVideoEmbed } from "@/components/PluginVideoEmbed";
import { openFreemiusCheckout, type FreemiusPurchaseResponse } from "@/lib/freemius";
import { extractYouTubeId, getYouTubeWatchUrl } from "@/lib/youtube";

const ui = {
  en: {
    back: "Back to All Plugins",
    about: "Technical Overview & Details",
    images: "Real Moodle Screenshots",
    pricing: "Licensing & Support",
    free: "Free & Open Source",
    freeSupport: "Free + Paid Support",
    freeSupportBadge: "Free + Support",
    freeDesc: "Download this plugin for free directly from Moodle.org",
    downloadBtn: "Download on Moodle.org",
    buyBtn: "Buy This Plugin",
    paidSupportTitle: "Need Professional Setup?",
    paidSupportDesc: "This plugin is free to download, and you can hire me for server installation, configuration, and ongoing support.",
    paidSupportBtn: "Contact Me for Setup",
    setupTitle: "Need the n8n Workflow?",
    setupDesc: "This plugin connects to an n8n workflow for AI grading. You can self-host your own flow — or hire me to configure the LLM pipeline and test it on your Moodle.",
    setupPrice: "Setup starts at",
    setupBtn: "Hire Me for n8n Setup",
    moodle: "Requires",
    notFound: "Plugin not found",
    backHome: "Back to Plugins",
    placeholderImg: "Screenshots coming soon",
    usd: "USD",
    oneTime: "one-time license",
    of: "of",
    purchaseSuccessTitle: "Purchase Completed",
    purchaseSuccessDesc: "Thank you for your order. Your license key and confirmation details are shown below:",
    licenseKey: "Your License Key",
    buyerEmail: "Registered Email",
    copyKey: "Copy License Key",
    keyCopied: "Key Copied!",
    close: "Close",
  },
  ar: {
    back: "العودة إلى كل الإضافات",
    about: "التفاصيل والمواصفات التقنية",
    images: "لقطات شاشة حقيقية من موودل",
    pricing: "الترخيص والدعم",
    free: "مجاني ومفتوح المصدر",
    freeSupport: "مجاني مع دعم مدفوع",
    freeSupportBadge: "مجاني + دعم",
    freeDesc: "حمّل هذه الإضافة مجاناً من دليل Moodle.org",
    downloadBtn: "تنزيل من Moodle.org",
    buyBtn: "شراء الإضافة الآن",
    paidSupportTitle: "هل تحتاج إعداداً احترافياً؟",
    paidSupportDesc: "هذه الإضافة مجانية للتنزيل، ويمكنك توظيفي للتركيب والتهيئة والدعم المستمر على منصتك.",
    paidSupportBtn: "تواصل لطلب الإعداد",
    setupTitle: "هل تحتاج سير عمل n8n؟",
    setupDesc: "تعتمد هذه الإضافة على سير عمل n8n للتصحيح الذكي. يمكنك بناؤه بنفسك — أو توظيفي لإعداده وربطه بـ LLM واختباره على منصتك.",
    setupPrice: "يبدأ الإعداد من",
    setupBtn: "اطلب إعداد n8n",
    moodle: "يتطلب",
    notFound: "الإضافة غير موجودة",
    backHome: "العودة إلى الإضافات",
    placeholderImg: "لقطات الشاشة قريباً",
    usd: "دولار",
    oneTime: "ترخيص لمرة واحدة",
    of: "من",
    purchaseSuccessTitle: "تمت عملية الشراء بنجاح",
    purchaseSuccessDesc: "شكراً لطلبك. مفتاح الترخيص وبيانات التأكيد موضحة أدناه:",
    licenseKey: "مفتاح الترخيص الخاص بك",
    buyerEmail: "البريد الإلكتروني المسجل",
    copyKey: "نسخ مفتاح الترخيص",
    keyCopied: "تم النسخ بنجاح!",
    close: "إغلاق",
  },
};

function ImageSlider({ images, slug, name }: { images: string[]; slug: string; name: string }) {
  const [current, setCurrent] = useState(0);

  function go(next: number) {
    setCurrent(next);
  }

  function prev() {
    go((current - 1 + images.length) % images.length);
  }

  function next() {
    go((current + 1) % images.length);
  }

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E2DBD0] shadow-xs">
        <img
          src={`/plugins/${slug}/${images[current]}`}
          alt={`${name} screenshot ${current + 1}`}
          className="w-full h-auto block max-h-[520px] object-contain bg-[#F2EEE6]"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-[#18181B]/80 hover:bg-[#C2410C] text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-[#18181B]/80 hover:bg-[#C2410C] text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}

        <div className="absolute bottom-3 end-3 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-[#18181B]/80">
          {current + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`View screenshot ${i + 1}`}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-opacity cursor-pointer ${
                i === current ? "border-[#C2410C] opacity-100" : "border-[#E2DBD0] opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={`/plugins/${slug}/${img}`}
                alt=""
                className="w-20 h-13 object-cover block bg-[#F2EEE6]"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function PluginDetailPage() {
  const { pluginSlug } = useParams<{ pluginSlug: string }>();
  const { lang, isRTL } = useT();
  const t = ui[lang];
  const { data: plugins = [], isFetching } = usePlugins();
  const [purchasedInfo, setPurchasedInfo] = useState<FreemiusPurchaseResponse | null>(null);
  const [copied, setCopied] = useState(false);
  const plugin = plugins.find((p) => p.slug === pluginSlug);

  if (!plugin) {
    if (isFetching) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">
          <Navbar />
        </div>
      );
    }
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F4] text-[#18181B]">
        <Navbar />
        <div className="text-center px-6">
          <p className="font-display text-6xl font-bold mb-4 text-[#C2410C]">404</p>
          <h1 className="text-2xl font-bold mb-4">{t.notFound}</h1>
          <Link
            href="/services/plugins"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412]"
          >
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
  const videoId = extractYouTubeId(plugin.videoUrl);
  const hasFreemius = Boolean(plugin.freemiusProductId && plugin.freemiusPublicKey);

  const handleFreemiusBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasFreemius) return;

    openFreemiusCheckout({
      productId: plugin.freemiusProductId!,
      planId: plugin.freemiusPlanId,
      publicKey: plugin.freemiusPublicKey!,
      name: isRTL ? plugin.nameAr : plugin.name,
      image: plugin.images?.[0] || "https://services.smartlearn.education/opengraph.jpg",
      onPurchaseCompleted: (res) => setPurchasedInfo(res),
      onSuccess: (res) => setPurchasedInfo(res),
    });
  };

  const copyLicenseKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <Helmet>
        <title>{name} — Smart Learn Moodle Plugins</title>
        <meta name="description" content={description.slice(0, 155)} />
        {videoId && <meta property="og:video" content={getYouTubeWatchUrl(videoId)} />}
      </Helmet>

      <div className="min-h-screen bg-[#FAF8F4] text-[#18181B]" dir={isRTL ? "rtl" : "ltr"}>
        <Navbar />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 pt-24 pb-4">
          <Link
            href="/services/plugins"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#52525B] hover:text-[#C2410C] transition-colors"
          >
            {isRTL ? <ArrowRight size={15} aria-hidden="true" /> : <ArrowLeft size={15} aria-hidden="true" />}
            <span>{t.back}</span>
          </Link>
        </div>

        {/* 1. Header & Highlights */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 py-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#E2DBD0] bg-white text-[#581C87]">
              {categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold border border-[#E2DBD0] bg-[#F2EEE6] text-[#18181B] inline-flex items-center gap-1.5">
              <Cpu size={12} aria-hidden="true" /> {t.moodle}: {plugin.moodle}
            </span>
            <span className="font-mono-slug px-3 py-1 rounded-full text-xs font-semibold border border-[#E2DBD0] bg-white text-[#3F3F46] inline-flex items-center gap-1.5">
              <Tag size={12} aria-hidden="true" /> {plugin.slug}
            </span>
            {!plugin.free ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#FED7AA] text-[#C2410C] bg-[#FFF3EB]">
                ${plugin.price} {t.usd}
              </span>
            ) : plugin.paidSupport ? (
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#FDE68A] text-[#B45309] bg-[#FFFBEB]">
                {t.freeSupportBadge}
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#BBF7D0] text-[#15803D] bg-[#ECFDF3]">
                {t.free}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#18181B] mb-6 leading-tight">
            {name}
          </h1>

          {videoId && (
            <div className="mb-8">
              <PluginVideoEmbed
                videoId={videoId}
                pluginName={name}
                slug={plugin.slug}
                lang={lang}
                showTheaterLink
              />
            </div>
          )}

          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E2DBD0] bg-white">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-[#ECFDF3]">
                    <Check size={12} className="text-[#15803D]" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-[#3F3F46] leading-snug">{f}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 2. Pricing & Licensing */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 py-6">
          <h2 className="font-sans text-lg font-bold text-[#18181B] mb-4">{t.pricing}</h2>
          <div className="grid grid-cols-1 gap-4">
            {isPaid && !isSetupPlugin && (
              <div className="rounded-2xl border border-[#FED7AA] bg-[#FFF3EB] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-[#18181B] mb-1">
                    ${plugin.price} <span className="text-xl text-[#52525B] font-sans">{t.usd}</span>
                  </div>
                  <p className="text-[#3F3F46] text-sm font-medium">{t.oneTime}</p>
                </div>
                {hasFreemius ? (
                  <button
                    type="button"
                    onClick={handleFreemiusBuy}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm bg-[#C2410C] hover:bg-[#9A3412] transition-colors cursor-pointer"
                  >
                    <ShoppingCart size={17} aria-hidden="true" />
                    <span>{t.buyBtn}</span>
                  </button>
                ) : (
                  <a
                    href={plugin.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm bg-[#C2410C] hover:bg-[#9A3412] transition-colors"
                  >
                    <ShoppingCart size={17} aria-hidden="true" />
                    <span>{t.buyBtn}</span>
                  </a>
                )}
              </div>
            )}

            {plugin.free && !isSetupPlugin && plugin.downloadUrl && (
              <>
                <div className="rounded-2xl p-6 sm:p-8 border border-[#BBF7D0] bg-[#ECFDF3] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-[#15803D] mb-1">{t.free}</div>
                    <p className="text-[#3F3F46] text-sm">{t.freeDesc}</p>
                  </div>
                  <a
                    href={plugin.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm bg-[#15803D] hover:bg-[#166534] transition-colors"
                  >
                    <Download size={17} aria-hidden="true" />
                    <span>{t.downloadBtn}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>

                {plugin.paidSupport && (
                  <div className="rounded-2xl p-6 sm:p-8 border border-[#FDE68A] bg-[#FFFBEB] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-sans text-lg font-bold text-[#18181B] mb-1">{t.paidSupportTitle}</h3>
                      <p className="text-[#3F3F46] text-sm leading-relaxed">{t.paidSupportDesc}</p>
                    </div>
                    <a
                      href="https://wa.me/201005822858"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm bg-[#B45309] hover:bg-[#92400E] transition-colors"
                    >
                      <MessageCircle size={17} aria-hidden="true" />
                      <span>{t.paidSupportBtn}</span>
                    </a>
                  </div>
                )}
              </>
            )}

            {isSetupPlugin && (
              <>
                {plugin.downloadUrl && (
                  <div className="rounded-2xl border border-[#BBF7D0] bg-[#ECFDF3] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <div className="font-display text-3xl font-bold text-[#15803D] mb-1">{t.free}</div>
                      <p className="text-[#3F3F46] text-sm">{t.freeDesc}</p>
                    </div>
                    <a
                      href={plugin.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm bg-[#15803D] hover:bg-[#166534] transition-colors"
                    >
                      <Download size={17} aria-hidden="true" />
                      <span>{t.downloadBtn}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                )}

                <div className="rounded-2xl border border-[#E2DBD0] bg-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-sans text-lg font-bold text-[#18181B] mb-1">{t.setupTitle}</h3>
                    <p className="text-[#3F3F46] text-sm leading-relaxed mb-3">{t.setupDesc}</p>
                    <div className="text-xl font-bold text-[#18181B]">
                      {t.setupPrice}{" "}
                      <span className="text-[#C2410C]">
                        ${plugin.setupPrice} {t.usd}
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/201005822858?text=Hi! I need the n8n workflow setup for the Smart Grade AI plugin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm bg-[#C2410C] hover:bg-[#9A3412] transition-colors"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    <span>{t.setupBtn}</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        {/* 3. Screenshots */}
        {plugin.images.length > 0 && (
          <section className="max-w-5xl mx-auto px-5 sm:px-6 py-6">
            <h2 className="font-sans text-lg font-bold text-[#18181B] mb-4">{t.images}</h2>
            <ImageSlider images={plugin.images} slug={plugin.slug} name={name} />
          </section>
        )}

        {/* 4. Rich Description */}
        <section className="max-w-5xl mx-auto px-5 sm:px-6 py-6">
          <div className="rounded-2xl border border-[#E2DBD0] bg-white p-6 sm:p-8">
            <h2 className="font-sans text-lg font-bold text-[#18181B] mb-5 flex items-center gap-2">
              <Wrench size={18} className="text-[#C2410C]" aria-hidden="true" />
              <span>{t.about}</span>
            </h2>
            <div className="space-y-4">
              {description.split("\n\n").map((block, i) => {
                if (block.startsWith("###")) {
                  return (
                    <h3 key={i} className="font-sans text-base font-bold text-[#581C87] mt-6 mb-2">
                      {block.replace(/^###\s*/, "")}
                    </h3>
                  );
                }
                if (block.startsWith("**") && block.endsWith("**")) {
                  return (
                    <p key={i} className="text-[#18181B] font-bold text-sm">
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                const imgMatch = block.match(/^!\[(.*?)\]\((.*?)\)$/);
                if (imgMatch) {
                  return (
                    <div key={i} className="my-5">
                      <img
                        src={imgMatch[2]}
                        alt={imgMatch[1]}
                        className="w-full h-auto rounded-xl border border-[#E2DBD0]"
                      />
                    </div>
                  );
                }
                if (block.startsWith("> ")) {
                  return (
                    <blockquote
                      key={i}
                      className="p-4 my-2 rounded-xl border border-[#FED7AA] bg-[#FFF3EB] text-[#18181B] text-sm sm:text-base leading-relaxed flex items-start gap-3"
                    >
                      <Sparkles size={16} className="text-[#C2410C] mt-1 flex-shrink-0" aria-hidden="true" />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: block
                            .replace(/^>\s*/, "")
                            .replace(/\n>\s*/g, "<br/>")
                            .replace(/\*\*(.+?)\*\*/g, "<strong class='font-bold'>$1</strong>"),
                        }}
                      />
                    </blockquote>
                  );
                }
                if (block.startsWith("- ") || block.includes("\n- ")) {
                  const items = block.split("\n").filter((l) => l.trim().startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-[#3F3F46]">
                          <Check size={14} className="mt-1 flex-shrink-0 text-[#15803D]" aria-hidden="true" />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.replace(/^-\s*/, "").replace(/\*\*(.+?)\*\*/g, "<strong class='text-[#18181B]'>$1</strong>"),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[#3F3F46] leading-relaxed text-sm sm:text-base"
                    dangerouslySetInnerHTML={{
                      __html: block.replace(/\*\*(.+?)\*\*/g, "<strong class='text-[#18181B]'>$1</strong>"),
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {plugin.images.length === 0 && (
          <section className="max-w-5xl mx-auto px-5 sm:px-6 pb-8">
            <div className="rounded-2xl border border-dashed border-[#C9C0B2] bg-[#F2EEE6] flex flex-col items-center justify-center py-12 gap-2 text-[#52525B]">
              <ImageIcon size={32} strokeWidth={1.5} aria-hidden="true" />
              <p className="text-sm">{t.placeholderImg}</p>
            </div>
          </section>
        )}

        <footer className="pt-8 pb-24 px-5 sm:px-6 border-t border-[#E2DBD0] bg-[#F2EEE6]">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#52525B]">
              {lang === "ar"
                ? `© ${new Date().getFullYear()} سمارت ليرن · محمد نبيل · مصر`
                : `© ${new Date().getFullYear()} Smart Learn · Mohammad Nabil · Egypt`}
            </p>
            <SocialLinks size="sm" />
          </div>
        </footer>
      </div>

      {/* Purchase Success Modal */}
      <AnimatePresence>
        {purchasedInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={t.purchaseSuccessTitle}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg rounded-3xl p-8 bg-white border border-[#E2DBD0] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setPurchasedInfo(null)}
                aria-label={t.close}
                className="absolute top-5 end-5 w-8 h-8 rounded-full flex items-center justify-center bg-[#F2EEE6] hover:bg-[#E8E2D7] text-[#18181B] cursor-pointer"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#ECFDF3] border border-[#BBF7D0] text-[#15803D]">
                  <CheckCheck size={28} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#18181B] mb-2">
                  {t.purchaseSuccessTitle}
                </h3>
                <p className="text-[#3F3F46] text-sm">{t.purchaseSuccessDesc}</p>
              </div>

              {purchasedInfo.license?.key && (
                <div className="mb-6 p-4 rounded-2xl border border-[#E2DBD0] bg-[#FAF8F4]">
                  <div className="text-xs text-[#52525B] font-bold uppercase tracking-wider mb-2">
                    {t.licenseKey}
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#E2DBD0]">
                    <code className="font-mono-slug text-[#15803D] font-bold text-sm break-all">
                      {purchasedInfo.license.key}
                    </code>
                    <button
                      type="button"
                      onClick={() => copyLicenseKey(purchasedInfo.license?.key || "")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#C2410C] hover:bg-[#9A3412] flex-shrink-0 cursor-pointer"
                    >
                      {copied ? <CheckCheck size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                      <span>{copied ? t.keyCopied : t.copyKey}</span>
                    </button>
                  </div>
                </div>
              )}

              {purchasedInfo.user?.email && (
                <div className="mb-6 text-sm text-[#3F3F46] flex items-center justify-between px-2">
                  <span className="text-[#52525B]">{t.buyerEmail}:</span>
                  <span className="font-semibold text-[#18181B]">{purchasedInfo.user.email}</span>
                </div>
              )}

              <button
                type="button"
                onClick={() => setPurchasedInfo(null)}
                className="w-full py-3 rounded-xl font-bold text-white text-sm bg-[#18181B] hover:bg-[#3F3F46] transition-colors cursor-pointer"
              >
                {t.close}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
