import { GraduationCap } from "lucide-react";
import { TileWrapper } from "@/components/TileWrapper";

interface ServiceTrainingTileProps {
  index: number;
}

export function ServiceTrainingTile({ index }: ServiceTrainingTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-1 md:row-span-1 p-6 flex flex-col gap-4"
    >
      <GraduationCap className="text-cyan-400" size={28} />
      <div className="flex flex-col gap-2">
        <h2
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Training & Technical Support
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Structured training programs for Moodle admins and teachers at online academies
          and schools. Includes ongoing technical support, documentation, and remote
          troubleshooting.
        </p>
      </div>
    </TileWrapper>
  );
}
