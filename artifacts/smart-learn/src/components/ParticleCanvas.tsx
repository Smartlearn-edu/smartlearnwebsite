import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  phase: number;
  pulseSpeed: number;
}

interface ParticleCanvasProps {
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ParticleCanvas({ count = 60, className, style }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number | null = null;
    let particles: Particle[] = [];
    const reducedMotionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.6 + 0.3,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const now = performance.now() * 0.001;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -16) p.x = w + 16;
        if (p.x > w + 16) p.x = -16;
        if (p.y < -16) p.y = h + 16;
        if (p.y > h + 16) p.y = -16;

        const pulse = 0.35 + 0.3 * Math.sin(now * p.pulseSpeed + p.phase);
        const glowR = p.radius * 7;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${pulse})`);
        gradient.addColorStop(0.35, `rgba(105, 0, 163, ${pulse * 0.45})`);
        gradient.addColorStop(1, "rgba(105, 0, 163, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (animId !== null) return;
      animId = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (animId !== null) {
        cancelAnimationFrame(animId);
        animId = null;
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      }
    };

    const onReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stop();
      } else {
        start();
      }
    };

    init();

    if (!reducedMotionMql.matches) {
      start();
    }

    reducedMotionMql.addEventListener("change", onReducedMotionChange);

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);

    return () => {
      stop();
      ro.disconnect();
      reducedMotionMql.removeEventListener("change", onReducedMotionChange);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
