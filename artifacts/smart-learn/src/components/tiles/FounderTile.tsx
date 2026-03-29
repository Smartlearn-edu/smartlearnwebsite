import { ExternalLink } from "lucide-react";
import { TileWrapper } from "@/components/TileWrapper";

interface FounderTileProps {
  index: number;
}

export function FounderTile({ index }: FounderTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-1 md:row-span-2 p-6 flex flex-col gap-5"
      style={{
        background:
          "linear-gradient(to bottom, rgb(15,23,42) 0%, rgb(30,41,59) 100%)",
      }}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-slate-950 font-bold text-xl flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          MN
        </div>
        <div>
          <p className="text-xs text-slate-500">Founder, Smart Learn</p>
          <h2
            className="text-2xl font-semibold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Mohammad Nabil
          </h2>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed text-center">
        A top-rated freelancer and LMS architect bridging the gap between traditional
        Moodle installations and modern AI-driven educational ecosystems.
      </p>

      <div className="flex flex-col gap-3 mt-auto">
        <a
          href="https://mostaql.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full border border-white/20 text-white rounded-xl py-2.5 px-4 text-sm hover:bg-white/5 transition-colors duration-200"
        >
          <ExternalLink size={14} />
          Mostaql Profile
        </a>
        <a
          href="https://khamsat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full border border-white/20 text-white rounded-xl py-2.5 px-4 text-sm hover:bg-white/5 transition-colors duration-200"
        >
          <ExternalLink size={14} />
          Khamsat Profile
        </a>
      </div>
    </TileWrapper>
  );
}
