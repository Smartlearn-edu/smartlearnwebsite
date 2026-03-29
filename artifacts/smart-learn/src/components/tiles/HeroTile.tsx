import { TileWrapper } from "@/components/TileWrapper";

interface HeroTileProps {
  index: number;
}

export function HeroTile({ index }: HeroTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-2 md:row-span-2 relative p-8 flex flex-col justify-between min-h-[320px]"
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(34,211,238,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 flex-1">
        <div>
          <span className="inline-block bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-xs px-3 py-1 rounded-full mb-5">
            Available for Projects · Egypt 🇪🇬
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Expert Moodle Engineering & AI Automation
          </h1>
          <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
            Smart Learn: Scaling education since 2020 with high-performance LMS
            infrastructure and AI-RAG logic.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <button className="px-5 py-2.5 bg-cyan-400 text-slate-950 font-semibold rounded-xl text-sm hover:bg-cyan-300 transition-colors duration-200">
            Start a Project
          </button>
          <button className="px-5 py-2.5 border border-white/20 text-white rounded-xl text-sm hover:bg-white/5 transition-colors duration-200">
            View Portfolio
          </button>
        </div>
      </div>
    </TileWrapper>
  );
}
