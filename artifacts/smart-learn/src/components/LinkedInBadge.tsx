import { useEffect, useRef } from "react";

interface LinkedInBadgeProps {
  className?: string;
  theme?: "dark" | "light";
  size?: "medium" | "large";
}

export function LinkedInBadge({
  className = "",
  theme = "dark",
  size = "medium",
}: LinkedInBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "linkedin-badge-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const renderBadge = () => {
      if (typeof window !== "undefined" && (window as any).LIRenderAll) {
        (window as any).LIRenderAll();
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.onload = renderBadge;
      document.body.appendChild(script);
    } else {
      renderBadge();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center ${className}`}
    >
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size={size}
        data-theme={theme}
        data-type="VERTICAL"
        data-vanity="m-n-riad"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://eg.linkedin.com/in/m-n-riad?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammad Nabil Riad
        </a>
      </div>
    </div>
  );
}
