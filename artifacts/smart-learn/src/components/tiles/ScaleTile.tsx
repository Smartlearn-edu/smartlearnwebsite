import { TileWrapper } from "@/components/TileWrapper";

interface ScaleTileProps {
  index: number;
}

const stats = [
  { value: "100,000+", label: "Users Managed" },
  { value: "70+", label: "Successful Projects" },
  { value: "5+", label: "Years Experience" },
];

export function ScaleTile({ index }: ScaleTileProps) {
  return (
    <TileWrapper
      index={index}
      className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between gap-4"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <span
            className="text-3xl md:text-4xl font-bold text-cyan-400"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {stat.value}
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-widest">
            {stat.label}
          </span>
        </div>
      ))}
    </TileWrapper>
  );
}
