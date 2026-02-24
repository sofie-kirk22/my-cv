"use client";

import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

const PARTICLES = [
  { top: "18%", left: "12%", size: 3, dur: 7, delay: 0.2 },
  { top: "30%", left: "22%", size: 2, dur: 6, delay: 1.1 },
  { top: "22%", left: "40%", size: 2, dur: 8, delay: 0.6 },
  { top: "40%", left: "52%", size: 3, dur: 9, delay: 1.6 },
  { top: "18%", left: "68%", size: 2, dur: 7, delay: 0.9 },
  { top: "38%", left: "78%", size: 2, dur: 6, delay: 0.3 },
  { top: "26%", left: "88%", size: 3, dur: 10, delay: 1.2 },
  { top: "58%", left: "16%", size: 2, dur: 8, delay: 0.4 },
  { top: "64%", left: "34%", size: 3, dur: 9, delay: 1.0 },
  { top: "62%", left: "60%", size: 2, dur: 7, delay: 0.7 },
  { top: "70%", left: "82%", size: 2, dur: 8, delay: 1.4 },
  { top: "58%", left: "92%", size: 3, dur: 11, delay: 0.1 },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-r from-indigo-600 via-indigo-700 to-black px-6 py-10 dark:border-zinc-800 md:px-10 md:py-14">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      {/* Subtle geometric SVG shapes */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-25"
        viewBox="0 0 1200 400"
        fill="none"
      >
        {/* Left wireframe */}
        <path
          d="M120 60 L220 40 L300 110 L240 190 L140 170 L80 110 Z
             M220 40 L360 30 L430 120 L300 110 Z
             M240 190 L340 250 L260 320 L160 280 Z"
          stroke="white"
          strokeWidth="2"
          opacity="0.9"
        />
        {/* Right wireframe */}
        <path
          d="M960 70 L1100 50 L1160 150 L1080 240 L940 220 L900 140 Z
             M940 220 L1030 320 L930 360 L860 300 Z"
          stroke="white"
          strokeWidth="2"
          opacity="0.7"
        />
        {/* Dotted grid (subtle) */}
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 10 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={520 + c * 22}
              cy={70 + r * 22}
              r="2"
              fill="white"
              opacity="0.35"
            />
          ))
        )}
      </svg>

      {/* Animated floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size * 3}px`,
              height: `${p.size * 3}px`,
              animation: `floaty ${p.dur}s ease-in-out ${p.delay}s infinite`,
              filter: "blur(0.2px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h1
            className={`${lusitana.className} text-4xl font-bold tracking-tight text-white md:text-5xl`}
          >
            Sofie Kirk Nielsen
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-indigo-100/90 md:text-xl">
            Frontend Developer | UX/UI-Focused Engineer & Designer
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/95 transition hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Profile image cutout */}
        <div className="justify-self-start md:justify-self-end">
          <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-white/25 md:h-44 md:w-44">
            <Image
              src="/profile.jpg"
              alt="Portrait of Sofie Kirk Nielsen"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-3 text-center text-xs text-white/70">
            Aarhus • Open to opportunities
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes floaty {
          0% {
            transform: translateY(0px);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.55;
          }
        }
      `}</style>
    </section>
  );
}
