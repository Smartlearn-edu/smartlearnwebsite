import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email";
    if (!fields.message.trim()) e.message = "Please describe your project";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
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
            📧 Contact
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p
            className="text-slate-400 max-w-md mx-auto text-lg"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            Have a project in mind? I'll reply within 24 hours.
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
                    Email
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
                    Location
                  </p>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    Egypt 🇪🇬
                  </p>
                  <p
                    className="text-slate-500 text-xs mt-0.5"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    Available for remote work worldwide 🌍
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
                Typical response time
              </p>
              <p
                className="text-2xl font-black gradient-text"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                &lt; 24 hours
              </p>
              <p
                className="text-xs text-slate-500 mt-1"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                Mon – Sat
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
                  Message Sent!
                </h3>
                <p
                  className="text-slate-400 text-sm max-w-xs"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold transition-colors mt-2"
                  style={{ color: "#a855f7", fontFamily: "'Cairo', sans-serif" }}
                >
                  Send another message
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
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={fields.name}
                      onChange={(e) => setFields({ ...fields, name: e.target.value })}
                      placeholder="Mohammad Ali"
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={(e) => setFields({ ...fields, email: e.target.value })}
                      placeholder="you@example.com"
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
                    Service Needed
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
                    <option value="" style={{ background: "#0d0d1a" }}>Select a service…</option>
                    <option value="moodle-core" style={{ background: "#0d0d1a" }}>Moodle Installation / Migration</option>
                    <option value="plugins" style={{ background: "#0d0d1a" }}>Plugin Development</option>
                    <option value="ai" style={{ background: "#0d0d1a" }}>AI Integration (Chatbot / RAG)</option>
                    <option value="n8n" style={{ background: "#0d0d1a" }}>n8n Automation</option>
                    <option value="training" style={{ background: "#0d0d1a" }}>Training & Support</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs text-slate-500 uppercase tracking-widest mb-2 block"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    Project Description *
                  </label>
                  <textarea
                    value={fields.message}
                    onChange={(e) => setFields({ ...fields, message: e.target.value })}
                    placeholder="Tell me about your project, your platform size, and what you'd like to achieve…"
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
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
