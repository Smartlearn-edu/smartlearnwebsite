import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";

export function ContactSection() {
  const { t } = useT();
  const [fields, setFields] = useState({ name: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = t.contact.errName;
    if (!fields.email.trim()) e.email = t.contact.errEmailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = t.contact.errEmailInvalid;
    if (!fields.message.trim()) e.message = t.contact.errMessage;
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setFields({ name: "", email: "", service: "", message: "" });
  }

  const inputStyle = (hasError: boolean) => ({
    background: "rgba(255,255,255,0.04)",
    border: hasError ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(168,85,247,0.15)",
    outline: "none",
    fontFamily: "'Cairo', sans-serif",
  });

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
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            {t.contact.badge}
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.contact.heading} <span className="gradient-text">{t.contact.headingGradient}</span>
          </h2>
          <p
            className="text-slate-400 max-w-md mx-auto text-lg"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(168,85,247,0.12)" }}
                >
                  <Mail size={18} style={{ color: "#a855f7" }} />
                </div>
                <div>
                  <p
                    className="text-xs text-slate-500 uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.contact.emailLabel}
                  </p>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    contact@smartlearn.education
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(168,85,247,0.12)" }}
                >
                  <MapPin size={18} style={{ color: "#a855f7" }} />
                </div>
                <div>
                  <p
                    className="text-xs text-slate-500 uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.contact.locationLabel}
                  </p>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.contact.locationValue}
                  </p>
                  <p
                    className="text-slate-500 text-xs mt-0.5"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.contact.locationRemote}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(105,0,163,0.15) 0%, rgba(168,85,247,0.08) 100%)",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              <p
                className="text-sm text-slate-300 font-semibold mb-2"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t.contact.responseLabel}
              </p>
              <p
                className="text-2xl font-black gradient-text"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t.contact.responseValue}
              </p>
              <p
                className="text-xs text-slate-500 mt-1"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t.contact.responseDays}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-3 rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={48} style={{ color: "#a855f7" }} />
                <h3
                  className="text-xl font-black text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t.contact.successTitle}
                </h3>
                <p
                  className="text-slate-400 text-sm max-w-xs"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold transition-colors mt-2"
                  style={{ color: "#a855f7", fontFamily: "'Cairo', sans-serif" }}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="text-xs text-slate-500 uppercase tracking-widest mb-2 block"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
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
                    {errors.name && (
                      <p
                        className="text-xs text-red-400 mt-1.5"
                        style={{ fontFamily: "'Cairo', sans-serif" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="text-xs text-slate-500 uppercase tracking-widest mb-2 block"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
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
                    {errors.email && (
                      <p
                        className="text-xs text-red-400 mt-1.5"
                        style={{ fontFamily: "'Cairo', sans-serif" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs text-slate-500 uppercase tracking-widest mb-2 block"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    value={fields.service}
                    onChange={(e) => setFields({ ...fields, service: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm text-white transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(168,85,247,0.15)",
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    <option value="" style={{ background: "#0d0d1a" }}>
                      {t.contact.servicePlaceholder}
                    </option>
                    {t.contact.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} style={{ background: "#0d0d1a" }}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs text-slate-500 uppercase tracking-widest mb-2 block"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
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
                  {errors.message && (
                    <p
                      className="text-xs text-red-400 mt-1.5"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, #6900A3, #a855f7)",
                    boxShadow: "0 0 30px rgba(105,0,163,0.35)",
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  <Send size={15} />
                  {t.contact.submitBtn}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
