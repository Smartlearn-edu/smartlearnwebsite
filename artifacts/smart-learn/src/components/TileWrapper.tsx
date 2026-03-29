import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface TileWrapperProps {
  index: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const cardBase =
  "border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden";

export function TileWrapper({ index, className = "", style, children }: TileWrapperProps) {
  return (
    <motion.div
      className={`bg-slate-900/60 ${cardBase} ${className}`}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.015,
        boxShadow: "0 0 30px rgba(34,211,238,0.12)",
      }}
    >
      {children}
    </motion.div>
  );
}
