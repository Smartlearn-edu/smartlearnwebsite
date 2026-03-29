import { useState } from "react";
import { TileWrapper } from "@/components/TileWrapper";

interface ContactTileProps {
  index: number;
}

const inputClass =
  "w-full bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-colors";

export function ContactTile({ index }: ContactTileProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email";
    return errs;
  }

  function handleSubmit() {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setName("");
    setEmail("");
    setProjectType("");
    setDescription("");
  }

  return (
    <TileWrapper
      index={index}
      className="md:col-span-2 md:row-span-1 p-6 flex flex-col gap-5"
    >
      <h2
        className="text-2xl font-semibold text-white"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Start a Project
      </h2>

      {submitted ? (
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium py-4">
          ✓ Message received! I'll be in touch within 24 hours.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              — Select Type —
            </option>
            <option value="ai-rag">AI / RAG System</option>
            <option value="n8n">n8n Automation</option>
            <option value="moodle">Moodle Core / Plugin</option>
            <option value="training">Training & Support</option>
          </select>

          <textarea
            placeholder="Briefly describe your project..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className={inputClass}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-400 text-slate-950 font-semibold rounded-xl py-2.5 text-sm hover:bg-cyan-300 transition-colors duration-200"
          >
            Send Message →
          </button>
        </div>
      )}
    </TileWrapper>
  );
}
