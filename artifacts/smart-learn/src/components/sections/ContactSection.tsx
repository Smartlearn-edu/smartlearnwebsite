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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#a78bfa",
            }}
          >
            📧 Contact
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Build{" "}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-lg">
            Have a project in mind? Describe what you need and I'll get back to you within 24 hours.
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
                  style={{ background: "rgba(34,211,238,0.1)" }}
                >
                  <Mail size={18} style={{ color: "#22d3ee" }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium text-sm">contact@smartlearn.education</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(34,211,238,0.1)" }}
                >
                  <MapPin size={18} style={{ color: "#22d3ee" }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium text-sm">Egypt</p>
                  <p className="text-slate-500 text-xs mt-0.5">Available for remote work worldwide 🌍</p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.07) 0%, rgba(167,139,250,0.05) 100%)",
                border: "1px solid rgba(34,211,238,0.15)",
              }}
            >
              <p className="text-sm text-slate-300 font-medium mb-2">Typical response time</p>
              <p className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                &lt; 24 hours
              </p>
              <p className="text-xs text-slate-500 mt-1">Mon – Sat</p>
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
                <CheckCircle size={48} style={{ color: "#22d3ee" }} />
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={fields.name}
                      onChange={(e) => setFields({ ...fields, name: e.target.value })}
                      placeholder="Mohammad Ali"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: errors.name
                          ? "1px solid rgba(239,68,68,0.5)"
                          : "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={(e) => setFields({ ...fields, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: errors.email
                          ? "1px solid rgba(239,68,68,0.5)"
                          : "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                    Service Needed
                  </label>
                  <select
                    value={fields.service}
                    onChange={(e) => setFields({ ...fields, service: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <option value="" style={{ background: "#0d0d1a" }}>Select a service…</option>
                    <option value="ai" style={{ background: "#0d0d1a" }}>AI Chatbot / RAG System</option>
                    <option value="n8n" style={{ background: "#0d0d1a" }}>n8n Automation</option>
                    <option value="moodle" style={{ background: "#0d0d1a" }}>Moodle Core / Plugin</option>
                    <option value="training" style={{ background: "#0d0d1a" }}>Training & Support</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">
                    Project Description *
                  </label>
                  <textarea
                    value={fields.message}
                    onChange={(e) => setFields({ ...fields, message: e.target.value })}
                    placeholder="Tell me about your project, your platform size, and what you'd like to achieve…"
                    rows={4}
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none resize-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: errors.message
                        ? "1px solid rgba(239,68,68,0.5)"
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, #22d3ee, #0891b2)",
                    boxShadow: "0 0 24px rgba(34,211,238,0.2)",
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
