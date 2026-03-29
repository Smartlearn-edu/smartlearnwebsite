import { Award } from "lucide-react";
import { TileWrapper } from "@/components/TileWrapper";

interface AuthorityTileProps {
  index: number;
}

export function AuthorityTile({ index }: AuthorityTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-1 md:row-span-1 p-6 flex flex-col gap-4"
    >
      <Award className="text-cyan-400" size={32} />
      <div className="flex flex-col gap-2">
        <h2
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Moodle Community Expert
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Recipient of the Particularly Helpful Moodle Badge every year from 2020–2025.
          Awarded by the Moodle.org community for sustained, high-quality technical
          contributions to the official Moodle forums.
        </p>
      </div>
      <a
        href="https://moodle.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
      >
        View on Moodle.org →
      </a>
    </TileWrapper>
  );
}
