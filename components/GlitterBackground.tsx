"use client";

import { useEffect, useRef } from "react";

type Sparkle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  pushX: number;
  pushY: number;
  phase: number;
  speed: number;
  color: string;
};

const COLORS = ["#ffffff", "#ffffff", "#c9bcff", "#8b6cff", "#7c9bff"];
const MOUSE_RADIUS = 150;

export default function GlitterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let linkDistance = 130;
    let frame = 0;
    let sparkles: Sparkle[] = [];

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const build = () => {
      const count = Math.min(
        90,
        Math.max(30, Math.floor((width * height) / 14000))
      );
      linkDistance = width < 640 ? 90 : 130;
      sparkles = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        size: rand(2, 6),
        vx: rand(-0.35, 0.35),
        vy: rand(-0.5, -0.1),
        pushX: 0,
        pushY: 0,
        phase: rand(0, Math.PI * 2),
        speed: rand(0.0008, 0.003),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    // Four-pointed sparkle shape
    const star = (x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y);
      ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.fill();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (const s of sparkles) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            s.pushX += (dx / dist) * force * 1.2;
            s.pushY += (dy / dist) * force * 1.2;
          }
          s.pushX *= 0.92;
          s.pushY *= 0.92;
          s.x += s.vx + Math.sin(time * 0.001 + s.phase) * 0.3 + s.pushX;
          s.y += s.vy + s.pushY;
          if (s.y < -10) s.y = height + 10;
          if (s.y > height + 10) s.y = -10;
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
        }
      }

      // Faint lines between sparkles that drift close to each other
      ctx.shadowBlur = 0;
      ctx.lineWidth = 1;
      for (let i = 0; i < sparkles.length; i++) {
        for (let j = i + 1; j < sparkles.length; j++) {
          const a = sparkles[i];
          const b = sparkles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDistance) {
            ctx.strokeStyle = `rgba(139, 108, 255, ${(1 - d / linkDistance) * 0.28})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const s of sparkles) {
        const twinkle = 0.5 + 0.5 * Math.sin(time * s.speed * 2 + s.phase);
        ctx.globalAlpha = 0.3 + 0.7 * twinkle;
        ctx.fillStyle = s.color;
        ctx.shadowColor = "#8b6cff";
        ctx.shadowBlur = 10;
        star(s.x, s.y, s.size * (0.6 + 0.6 * twinkle));
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (reduceMotion) draw(0);
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        mouse.x = -9999;
        mouse.y = -9999;
      }
    };

    resize();
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onOut);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}