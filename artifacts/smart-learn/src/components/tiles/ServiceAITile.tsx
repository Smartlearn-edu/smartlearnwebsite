import { Bot } from "lucide-react";
import { TileWrapper } from "@/components/TileWrapper";

interface ServiceAITileProps {
  index: number;
}

const tags = ["RAG", "LLM Integration", "Custom Plugins", "Vector Search"];

export function ServiceAITile({ index }: ServiceAITileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-2 md:row-span-1 p-6 flex flex-col gap-4"
    >
      <Bot className="text-violet-400" size={28} />
      <div className="flex flex-col gap-2">
        <h2
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          AI Chatbots & RAG Systems
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          I build dedicated AI Chatbots for every Moodle course using Retrieval-Augmented
          Generation (RAG). Includes custom plugins for Video-to-Text pipelines — allowing
          students to chat directly with course video content and get instant, source-cited
          answers.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-violet-400/10 text-violet-300 border border-violet-400/20 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </TileWrapper>
  );
}
