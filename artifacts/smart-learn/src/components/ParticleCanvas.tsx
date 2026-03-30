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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.6 + 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now() * 0.001;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -16) p.x = canvas.width + 16;
        if (p.x > canvas.width + 16) p.x = -16;
        if (p.y < -16) p.y = canvas.height + 16;
        if (p.y > canvas.height + 16) p.y = -16;

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

    init();
    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
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
