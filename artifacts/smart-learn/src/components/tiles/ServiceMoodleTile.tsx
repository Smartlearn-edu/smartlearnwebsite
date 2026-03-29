import { Code2 } from "lucide-react";
import { TileWrapper } from "@/components/TileWrapper";

interface ServiceMoodleTileProps {
  index: number;
}

const tags = ["Moodle 4.x / 5.x", "PHP", "Plugin Dev", "Migration"];

export function ServiceMoodleTile({ index }: ServiceMoodleTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-1 md:row-span-1 p-6 flex flex-col gap-4"
    >
      <Code2 className="text-cyan-400" size={28} />
      <div className="flex flex-col gap-2">
        <h2
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Moodle Development & Plugins
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Full-stack LMS development: 4 free plugins published on Moodle.org and 10+
          premium paid plugins. Expert in version migrations, upgrades, and long-term
          maintenance.
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
