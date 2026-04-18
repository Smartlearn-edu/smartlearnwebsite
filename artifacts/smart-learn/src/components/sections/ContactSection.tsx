import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import { useT } from "@/i18n";
import { SocialLinks } from "@/components/SocialLinks";

const WA_NUMBER = "201005822858";
const font: React.CSSProperties = { fontFamily: "'Cairo', sans-serif" };

const SERVICE_WA_MESSAGES: Record<string, { en: string; ar: string }> = {
  "moodle-core": {
    en: "Hi! I'd like to discuss Moodle installation / migration services.",
    ar: "مرحباً! أريد مناقشة خدمات تثبيت / نقل Moodle.",
  },
  plugins: {
    en: "Hi! I'd like to discuss custom Moodle plugin development.",
    ar: "مرحباً! أريد مناقشة تطوير إضافات Moodle مخصصة.",
  },
  ai: {
    en: "Hi! I'd like to discuss AI integration for Moodle (chatbot / RAG).",
    ar: "مرحباً! أريد مناقشة تكامل الذكاء الاصطناعي مع Moodle.",
  },
  n8n: {
    en: "Hi! I'd like to discuss n8n automation for Moodle.",
    ar: "مرحباً! أريد مناقشة أتمتة n8n لـ Moodle.",
  },
  training: {
    en: "Hi! I'd like to book a Moodle training session.",
    ar: "مرحباً! أريد حجز جلسة تدريب Moodle.",
  },
  "mobile-app": {
    en: "Hi! I'd like to get a branded Moodle mobile app.",
    ar: "مرحباً! أريد الحصول على تطبيق Moodle بهويتي.",
  },
};

export function ContactSection() {
  const { t, lang } = useT();
  const [activeTab, setActiveTab] = useState<"email" | "whatsapp">("email");
  const [fields, setFields] = useState({ name: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = t.contact.errName;
    if (!fields.email.trim()) e.email = t.contact.errEmailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = t.contact.errEmailInvalid;
    if (!fields.message.trim()) e.message = t.contact.errMessage;
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSendError("");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      
      if (!res.ok) {
        throw new Error("Failed to send email");
      }
      
      setSubmitted(true);
      setFields({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error("[ContactSection] Error sending email:", err);
      setSendError(t.contact.sendError);
    } finally {
      setSending(false);
    }
  }

  function getWaUrl() {
    const serviceMsg = fields.service
      ? (SERVICE_WA_MESSAGES[fields.service]?.[lang] ?? t.contact.waMsgDefault)
      : t.contact.waMsgDefault;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(serviceMsg)}`;
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    background: "rgba(255,255,255,0.04)",
    border: hasError ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(168,85,247,0.15)",
    outline: "none",
    ...font,
  });

  const tabBase: React.CSSProperties = {
    flex: 1, padding: "10px 0", borderRadius: 10, border: "none", cursor: "pointer",
    fontSize: 13, fontWeight: 700, transition: "all 0.2s", ...font,
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(105,0,163,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#c084fc",
              ...font,
            }}
          >
            {t.contact.badge}
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={font}
          >
            {t.contact.heading} <span className="gradient-text">{t.contact.headingGradient}</span>
          </h2>
          <p className="text-slate-200 max-w-md mx-auto text-lg" style={font}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,85,247,0.12)" }}>
                  <Mail size={18} style={{ color: "#a855f7" }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1" style={font}>{t.contact.emailLabel}</p>
                  <p className="text-white font-semibold text-sm" style={font}>contact@smartlearn.education</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,85,247,0.12)" }}>
                  <MapPin size={18} style={{ color: "#a855f7" }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1" style={font}>{t.contact.locationLabel}</p>
                  <p className="text-white font-semibold text-sm" style={font}>{t.contact.locationValue}</p>
                  <p className="text-slate-500 text-xs mt-0.5" style={font}>{t.contact.locationRemote}</p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              <p className="text-sm text-slate-300 font-semibold mb-2" style={font}>{t.contact.responseLabel}</p>
              <p className="text-2xl font-black gradient-text" style={font}>{t.contact.responseValue}</p>
              <p className="text-xs text-slate-500 mt-1" style={font}>{t.contact.responseDays}</p>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <SocialLinks label size="md" />
            </div>
          </motion.div>

          {/* Right form column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-3 rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={48} style={{ color: "#a855f7" }} />
                <h3 className="text-xl font-black text-white" style={font}>{t.contact.successTitle}</h3>
                <p className="text-slate-200 text-base max-w-xs" style={font}>{t.contact.successDesc}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold transition-colors mt-2"
                  style={{ color: "#a855f7", ...font }}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <>
                {/* Tab Toggle */}
                <div
                  className="flex gap-2 mb-6 p-1 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.12)" }}
                >
                  <button
                    onClick={() => setActiveTab("email")}
                    style={{
                      ...tabBase,
                      background: activeTab === "email" ? "linear-gradient(135deg,#6900A3,#a855f7)" : "transparent",
                      color: activeTab === "email" ? "#fff" : "#64748b",
                      boxShadow: activeTab === "email" ? "0 0 20px rgba(105,0,163,0.3)" : "none",
                    }}
                  >
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <Mail size={13} /> {t.contact.tabEmail}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("whatsapp")}
                    style={{
                      ...tabBase,
                      background: activeTab === "whatsapp" ? "linear-gradient(135deg,#16a34a,#22c55e)" : "transparent",
                      color: activeTab === "whatsapp" ? "#fff" : "#64748b",
                      boxShadow: activeTab === "whatsapp" ? "0 0 20px rgba(22,163,74,0.25)" : "none",
                    }}
                  >
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <MessageCircle size={13} /> {t.contact.tabWhatsApp}
                    </span>
                  </button>
                </div>

                {activeTab === "email" ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block" style={font}>
                          {t.contact.nameLabel}
                        </label>
                        <input
                          type="text"
                          value={fields.name}
                          onChange={(e) => setFields({ ...fields, name: e.target.value })}
                          placeholder={t.contact.namePlaceholder}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-200"
                          style={inputStyle(!!errors.name)}
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1.5" style={font}>{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block" style={font}>
                          {t.contact.emailFieldLabel}
                        </label>
                        <input
                          type="email"
                          value={fields.email}
                          onChange={(e) => setFields({ ...fields, email: e.target.value })}
                          placeholder={t.contact.emailPlaceholder}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-200"
                          style={inputStyle(!!errors.email)}
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1.5" style={font}>{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block" style={font}>
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        value={fields.service}
                        onChange={(e) => setFields({ ...fields, service: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(168,85,247,0.15)",
                          ...font,
                        }}
                      >
                        <option value="" style={{ background: "#0d0d1a" }}>{t.contact.servicePlaceholder}</option>
                        {t.contact.serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} style={{ background: "#0d0d1a" }}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block" style={font}>
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        value={fields.message}
                        onChange={(e) => setFields({ ...fields, message: e.target.value })}
                        placeholder={t.contact.messagePlaceholder}
                        rows={4}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 resize-none transition-all duration-200"
                        style={inputStyle(!!errors.message)}
                      />
                      {errors.message && <p className="text-xs text-red-400 mt-1.5" style={font}>{errors.message}</p>}
                    </div>

                    {sendError && (
                      <div className="flex items-center gap-2 text-red-400 text-sm" style={font}>
                        <AlertCircle size={14} /> {sendError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] disabled:opacity-60"
                      style={{
                        background: "linear-gradient(135deg, #6900A3, #a855f7)",
                        boxShadow: "0 0 30px rgba(105,0,163,0.35)",
                        ...font,
                      }}
                    >
                      {sending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                      {sending ? t.contact.sendingBtn : t.contact.submitBtn}
                    </button>
                  </form>
                ) : (
                  /* WhatsApp Tab */
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block" style={font}>
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        value={fields.service}
                        onChange={(e) => setFields({ ...fields, service: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(168,85,247,0.15)",
                          ...font,
                        }}
                      >
                        <option value="" style={{ background: "#0d0d1a" }}>{t.contact.servicePlaceholder}</option>
                        {t.contact.serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} style={{ background: "#0d0d1a" }}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div
                      className="rounded-xl p-5"
                      style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)" }}
                    >
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-2" style={font}>
                        {lang === "ar" ? "الرسالة المرسلة" : "Message Preview"}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed" style={font}>
                        {fields.service
                          ? (SERVICE_WA_MESSAGES[fields.service]?.[lang] ?? t.contact.waMsgDefault)
                          : t.contact.waMsgDefault}
                      </p>
                    </div>

                    <p className="text-base text-slate-200 leading-relaxed" style={font}>{t.contact.waDesc}</p>

                    <a
                      href={getWaUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, #16a34a, #22c55e)",
                        boxShadow: "0 0 30px rgba(22,163,74,0.3)",
                        ...font,
                      }}
                    >
                      <MessageCircle size={15} />
                      {t.contact.waBtn}
                    </a>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
