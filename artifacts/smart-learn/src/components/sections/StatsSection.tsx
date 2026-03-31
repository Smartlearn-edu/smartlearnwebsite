import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n";

const STATS = [
  { target: 6, suffix: "+", labelKey: "yearsExp" as const },
  { target: 19, suffix: "+", labelKey: "pluginsBuilt" as const },
  { target: 50, suffix: "+", labelKey: "clients" as const },
  { target: 3, suffix: "", labelKey: "countries" as const },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const { t, isRTL } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(105,0,163,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(105,0,163,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#c084fc",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            {t.stats.badge}
          </span>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,85,247,0.15)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(105,0,163,0.08) 0%, rgba(168,85,247,0.04) 100%)",
                }}
              />

              <div
                className="text-4xl md:text-5xl font-black mb-2 gradient-text"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  active={visible}
                />
              </div>

              <div
                className="text-sm text-slate-400 font-medium leading-snug"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t.stats[stat.labelKey]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
