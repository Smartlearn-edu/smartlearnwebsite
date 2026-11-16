import { useId, useState } from "react";
import { Send, CheckCircle, Mail, MapPin, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import { useT } from "@/i18n";
import { SocialLinks } from "@/components/SocialLinks";

const WA_NUMBER = "201005822858";

const SERVICE_WA_MESSAGES: Record<string, { en: string; ar: string }> = {
  plugins: {
    en: "Hi Mohammad! I'd like to discuss buying or customizing a Moodle plugin.",
    ar: "مرحباً محمد! أريد مناقشة شراء أو تخصيص إضافة لموودل.",
  },
  "moodle-core": {
    en: "Hi Mohammad! I'd like to discuss Moodle installation, upgrade, or migration.",
    ar: "مرحباً محمد! أريد مناقشة تثبيت أو ترقية أو نقل منصة موودل.",
  },
  ai: {
    en: "Hi Mohammad! I'd like to discuss AI grading or tutoring tools for Moodle.",
    ar: "مرحباً محمد! أريد مناقشة أدوات الذكاء الاصطناعي للمقررات والتصحيح في موودل.",
  },
  n8n: {
    en: "Hi Mohammad! I'd like to discuss n8n workflow automation for Moodle.",
    ar: "مرحباً محمد! أريد مناقشة أتمتة عمليات موودل عبر n8n.",
  },
  training: {
    en: "Hi Mohammad! I'd like to book Moodle training or ongoing support.",
    ar: "مرحباً محمد! أريد حجز تدريب أو باقة دعم لمنصة موودل.",
  },
  "mobile-app": {
    en: "Hi Mohammad! I'd like to get a branded Moodle mobile app.",
    ar: "مرحباً محمد! أريد الحصول على تطبيق موودل بهوية مؤسستنا.",
  },
};

export function ContactSection() {
  const { t, lang, isRTL } = useT();
  const baseId = useId();
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
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSendError("");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Failed to send email");
      setSubmitted(true);
      setFields({ name: "", email: "", service: "", message: "" });
    } catch {
      setSendError(t.contact.sendError);
    } finally {
      setSending(false);
    }
  }

  function getWaUrl() {
    const serviceMsg = fields.service
      ? SERVICE_WA_MESSAGES[fields.service]?.[lang] ?? t.contact.waMsgDefault
      : t.contact.waMsgDefault;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(serviceMsg)}`;
  }

  const inputBaseClass =
    "w-full rounded-xl px-4 py-3 text-sm text-[#18181B] bg-[#FAF8F4] placeholder:text-[#71717A] border transition-colors";

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FAF8F4] border-t border-[#E2DBD0]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C2410C] mb-2">
            {t.contact.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] mb-2">
            {t.contact.heading}{" "}
            <span className="text-[#C2410C]">{t.contact.headingGradient}</span>
          </h2>
          <p className="text-base text-[#3F3F46]">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* Contact Info Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl p-6 bg-white border border-[#E2DBD0] space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3EB] border border-[#FED7AA] flex items-center justify-center text-[#C2410C] flex-shrink-0">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#52525B] mb-0.5">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href="mailto:support@smartlearn.education"
                    className="text-sm font-bold text-[#18181B] hover:text-[#C2410C] break-all"
                  >
                    support@smartlearn.education
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F2EEE6] border border-[#E2DBD0] flex items-center justify-center text-[#581C87] flex-shrink-0">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#52525B] mb-0.5">
                    {t.contact.locationLabel}
                  </p>
                  <p className="text-sm font-bold text-[#18181B]">{t.contact.locationValue}</p>
                  <p className="text-xs text-[#52525B] mt-0.5">{t.contact.locationRemote}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-[#FFF3EB] border border-[#FED7AA]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-1">
                {t.contact.responseLabel}
              </p>
              <p className="font-display text-2xl font-bold text-[#18181B]">
                {t.contact.responseValue}
              </p>
              <p className="text-xs text-[#52525B] mt-0.5">{t.contact.responseDays}</p>
            </div>

            <div className="rounded-2xl p-5 bg-white border border-[#E2DBD0]">
              <SocialLinks label size="md" />
            </div>
          </div>

          {/* Form / WhatsApp Column */}
          <div className="md:col-span-3 rounded-2xl p-6 sm:p-8 bg-white border border-[#E2DBD0] shadow-2xs">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                <CheckCircle size={44} className="text-[#15803D]" aria-hidden="true" />
                <h3 className="font-sans text-xl font-bold text-[#18181B]">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-[#3F3F46] max-w-sm">{t.contact.successDesc}</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold text-[#C2410C] hover:text-[#9A3412] mt-2 cursor-pointer"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <>
                <div
                  role="tablist"
                  aria-label={lang === "ar" ? "طريقة التواصل" : "Contact channel"}
                  className="workbench-tablist mb-6"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "email"}
                    onClick={() => setActiveTab("email")}
                    className="workbench-tab inline-flex items-center gap-2"
                  >
                    <Mail size={15} aria-hidden="true" />
                    <span>{t.contact.tabEmail}</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "whatsapp"}
                    onClick={() => setActiveTab("whatsapp")}
                    className="workbench-tab inline-flex items-center gap-2"
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    <span>{t.contact.tabWhatsApp}</span>
                  </button>
                </div>

                {activeTab === "email" ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor={`${baseId}-name`}
                          className="text-xs font-bold uppercase tracking-wider text-[#3F3F46] mb-1.5 block"
                        >
                          {t.contact.nameLabel}
                        </label>
                        <input
                          id={`${baseId}-name`}
                          type="text"
                          required
                          autoComplete="name"
                          value={fields.name}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? `${baseId}-name-err` : undefined}
                          onChange={(e) => setFields({ ...fields, name: e.target.value })}
                          placeholder={t.contact.namePlaceholder}
                          className={`${inputBaseClass} ${
                            errors.name ? "border-red-600" : "border-[#C9C0B2] focus:border-[#C2410C]"
                          }`}
                        />
                        {errors.name && (
                          <p id={`${baseId}-name-err`} className="text-xs text-red-700 font-medium mt-1.5">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor={`${baseId}-email`}
                          className="text-xs font-bold uppercase tracking-wider text-[#3F3F46] mb-1.5 block"
                        >
                          {t.contact.emailFieldLabel}
                        </label>
                        <input
                          id={`${baseId}-email`}
                          type="email"
                          required
                          autoComplete="email"
                          value={fields.email}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? `${baseId}-email-err` : undefined}
                          onChange={(e) => setFields({ ...fields, email: e.target.value })}
                          placeholder={t.contact.emailPlaceholder}
                          className={`${inputBaseClass} ${
                            errors.email ? "border-red-600" : "border-[#C9C0B2] focus:border-[#C2410C]"
                          }`}
                        />
                        {errors.email && (
                          <p id={`${baseId}-email-err`} className="text-xs text-red-700 font-medium mt-1.5">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor={`${baseId}-service`}
                        className="text-xs font-bold uppercase tracking-wider text-[#3F3F46] mb-1.5 block"
                      >
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        id={`${baseId}-service`}
                        value={fields.service}
                        onChange={(e) => setFields({ ...fields, service: e.target.value })}
                        className={`${inputBaseClass} border-[#C9C0B2] focus:border-[#C2410C]`}
                      >
                        <option value="">{t.contact.servicePlaceholder}</option>
                        {t.contact.serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={`${baseId}-message`}
                        className="text-xs font-bold uppercase tracking-wider text-[#3F3F46] mb-1.5 block"
                      >
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        id={`${baseId}-message`}
                        required
                        rows={4}
                        value={fields.message}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? `${baseId}-msg-err` : undefined}
                        onChange={(e) => setFields({ ...fields, message: e.target.value })}
                        placeholder={t.contact.messagePlaceholder}
                        className={`${inputBaseClass} resize-y ${
                          errors.message ? "border-red-600" : "border-[#C9C0B2] focus:border-[#C2410C]"
                        }`}
                      />
                      {errors.message && (
                        <p id={`${baseId}-msg-err`} className="text-xs text-red-700 font-medium mt-1.5">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {sendError && (
                      <div role="alert" className="flex items-start gap-2 text-red-700 text-sm font-medium bg-red-50 border border-red-200 rounded-xl p-3">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{sendError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#C2410C] hover:bg-[#9A3412] transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {sending ? (
                        <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      ) : (
                        <Send size={16} aria-hidden="true" />
                      )}
                      <span>{sending ? t.contact.sendingBtn : t.contact.submitBtn}</span>
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label
                        htmlFor={`${baseId}-wa-service`}
                        className="text-xs font-bold uppercase tracking-wider text-[#3F3F46] mb-1.5 block"
                      >
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        id={`${baseId}-wa-service`}
                        value={fields.service}
                        onChange={(e) => setFields({ ...fields, service: e.target.value })}
                        className={`${inputBaseClass} border-[#C9C0B2]`}
                      >
                        <option value="">{t.contact.servicePlaceholder}</option>
                        {t.contact.serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-xl p-4 bg-[#ECFDF3] border border-[#BBF7D0]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#15803D] mb-1.5">
                        {lang === "ar" ? "نص الرسالة الجاهزة" : "Message Preview"}
                      </p>
                      <p className="text-sm text-[#18181B] leading-relaxed">
                        {fields.service
                          ? SERVICE_WA_MESSAGES[fields.service]?.[lang] ?? t.contact.waMsgDefault
                          : t.contact.waMsgDefault}
                      </p>
                    </div>

                    <p className="text-sm text-[#3F3F46] leading-relaxed">{t.contact.waDesc}</p>

                    <a
                      href={getWaUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#15803D] hover:bg-[#166534] transition-colors"
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      <span>{t.contact.waBtn}</span>
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
