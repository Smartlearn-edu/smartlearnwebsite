import { useParams } from "wouter";
import { MoodleCorePage } from "./MoodleCorePage";
import { PluginsPage } from "./PluginsPage";
import { AiPage } from "./AiPage";
import { N8nPage } from "./N8nPage";
import { TrainingPage } from "./TrainingPage";
import { MobileAppPage } from "./MobileAppPage";
import { Navbar } from "@/components/Navbar";
import { Link } from "wouter";
import { useT } from "@/i18n";
import { DirectionalArrow } from "@/components/DirectionalArrow";

const pageMap: Record<string, React.ComponentType> = {
  "moodle-core": MoodleCorePage,
  plugins: PluginsPage,
  ai: AiPage,
  n8n: N8nPage,
  training: TrainingPage,
  "mobile-app": MobileAppPage,
};

const notFound = {
  en: { heading: "Page not found", back: "Back to Home" },
  ar: { heading: "الصفحة غير موجودة", back: "العودة إلى الرئيسية" },
};

export function ServiceRouter() {
  const params = useParams<{ slug: string }>();
  const { lang } = useT();
  const Page = pageMap[params.slug];

  if (!Page) {
    const txt = notFound[lang];
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "#07070f" }}
      >
        <Navbar />
        <div className="text-center px-6">
          <p className="text-6xl mb-6">404</p>
          <h1
            className="text-2xl font-black text-white mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {txt.heading}
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #6900A3, #a855f7)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            <DirectionalArrow size={16} />
            {txt.back}
          </Link>
        </div>
      </div>
    );
  }

  return <Page />;
}
