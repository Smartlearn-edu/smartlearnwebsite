import { useEffect, useState } from "react";
import { ExternalLink, MapPin, CheckCircle2 } from "lucide-react";
import { useT } from "@/i18n";

interface LinkedInBadgeProps {
  className?: string;
}

export function LinkedInBadge({ className = "" }: LinkedInBadgeProps) {
  const { lang } = useT();
  const [photoError, setPhotoError] = useState(false);
  const photoUrl = "/img/mohammad-nabil.jpg";

  useEffect(() => {
    // Attempt to load LinkedIn's official script if allowed by browser
    const scriptId = "linkedin-badge-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const profileUrl = "https://www.linkedin.com/in/m-n-riad/";

  return (
    <div className={`w-full flex justify-center ${className}`}>
      {/* Hidden container for official badge script fallback */}
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="m-n-riad"
        data-version="v1"
        style={{ display: "none" }}
      >
        <a
          className="badge-base__link LI-simple-link"
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammad Nabil Riad
        </a>
      </div>

      {/* High-end Native LinkedIn Card */}
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden text-left relative transition-all duration-300 hover:shadow-2xl"
        style={{
          background: "linear-gradient(180deg, rgba(20, 20, 35, 0.95) 0%, rgba(12, 12, 22, 0.98) 100%)",
          border: "1px solid rgba(168, 85, 247, 0.25)",
          boxShadow: "0 10px 30px -10px rgba(105, 0, 163, 0.3)",
          fontFamily: "'Cairo', sans-serif",
        }}
      >
        {/* Card Header Banner */}
        <div
          className="h-20 w-full relative px-5 pt-4 flex items-start justify-between"
          style={{
            background: "linear-gradient(135deg, rgba(105, 0, 163, 0.4) 0%, rgba(10, 102, 194, 0.35) 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-semibold text-purple-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {lang === "ar" ? "متاح للمشاريع" : "Available for Projects"}
          </div>

          {/* Official LinkedIn Logo Icon */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
            style={{ background: "#0A66C2", color: "#ffffff" }}
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Card Body */}
        <div className="px-6 pb-6 pt-0 relative">
          {/* Avatar floating over banner */}
          <div className="-mt-10 mb-4 flex items-end justify-between">
            <div
              className="w-20 h-20 rounded-2xl p-0.5 shadow-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #6900A3, #c084fc)",
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                {!photoError ? (
                  <img
                    src={photoUrl}
                    alt="Mohammad Nabil Riad"
                    className="w-full h-full object-cover"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  "MN"
                )}
              </div>
            </div>

            <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
              @m-n-riad
            </span>
          </div>

          {/* Name & Title */}
          <div className="mb-3">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h3 className="text-lg font-black text-white">Mohammad Nabil Riad</h3>
              <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
            </div>
            <p className="text-xs text-purple-300 font-semibold leading-snug">
              {lang === "ar"
                ? "مهندس معماري Moodle LMS وخبير حلول الذكاء الاصطناعي"
                : "Moodle LMS Architect & AI Solutions Expert"}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <MapPin size={13} className="text-purple-400" />
            <span>{lang === "ar" ? "مصر · متاح للعمل عن بُعد عالمياً" : "Egypt · Remote Worldwide"}</span>
          </div>

          {/* Highlights / Skills tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["Moodle Core", "Custom Plugins", "AI & RAG", "n8n Automation"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Link Button */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-xs text-white transition-all duration-200 hover:brightness-110 active:scale-98 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
              boxShadow: "0 4px 14px rgba(10, 102, 194, 0.4)",
            }}
          >
            <span>{lang === "ar" ? "عرض الملف الشخصي على LinkedIn" : "View Profile on LinkedIn"}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
