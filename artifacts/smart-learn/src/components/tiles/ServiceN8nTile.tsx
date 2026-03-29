import { Workflow } from "lucide-react";
import { TileWrapper } from "@/components/TileWrapper";

interface ServiceN8nTileProps {
  index: number;
}

const tags = ["n8n", "Auto-Grading", "Moodle API"];

export function ServiceN8nTile({ index }: ServiceN8nTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-1 md:row-span-1 p-6 flex flex-col gap-4"
    >
      <Workflow className="text-cyan-400" size={28} />
      <div className="flex flex-col gap-2">
        <h2
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          n8n Workflow Automation
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Automated grading of assignments and complex workflow engineering to eliminate
          administrative bottlenecks. Built on n8n with Moodle webhooks and API integration.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </TileWrapper>
  );
}
