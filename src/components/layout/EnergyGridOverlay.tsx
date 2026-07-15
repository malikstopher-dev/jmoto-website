"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * EnergyGridOverlay
 *
 * Global, high-performance electrical energy overlay for the JMOTO site.
 *
 * Effects:
 * 1. Page Load  — A staggered "power-on" grid energize sequence where structural
 *    grid lines illuminate from the center outward with a sharp expo.out ease,
 *    then settle into a subtle ambient state.
 * 2. Click      — An electrical pulse / arc ring erupts from the exact cursor
 *    position: a sharp, glowing cyan ring with a white hot core that expands
 *    rapidly and diffuses instantly. DOM elements are removed immediately when
 *    the GSAP timeline completes.
 */

const GRID_DENSITY = 12; // 12x12 grid → 11 lines per axis
const PULSE_MAX_SIZE = 320; // px
const PULSE_DURATION = 0.55; // seconds

interface ActivePulse {
  timeline: gsap.core.Timeline;
  elements: HTMLDivElement[];
}

export default function EnergyGridOverlay(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const pulsePoolRef = useRef<HTMLDivElement>(null);
  const activePulsesRef = useRef<Set<ActivePulse>>(new Set());

  useGSAP(
    () => {
      const grid = gridRef.current;
      const border = borderRef.current;
      const pulsePool = pulsePoolRef.current;
      if (!grid || !border || !pulsePool) return;

      const horizontalLines = grid.querySelectorAll<HTMLDivElement>(
        "[data-grid-line='horizontal']"
      );
      const verticalLines = grid.querySelectorAll<HTMLDivElement>(
        "[data-grid-line='vertical']"
      );

      // ------------------------------------------------------------------
      // PAGE LOAD: "Electrical Grid Energize"
      // ------------------------------------------------------------------
      gsap.set(horizontalLines, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "center center",
      });
      gsap.set(verticalLines, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "center center",
      });
      gsap.set(border, {
        opacity: 0,
        scale: 0.98,
        transformOrigin: "center center",
      });

      const loadTl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });

      loadTl
        .to(horizontalLines, {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          stagger: { from: "center", amount: 0.35 },
        })
        .to(
          verticalLines,
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.6,
            stagger: { from: "center", amount: 0.35 },
          },
          "<"
        )
        .fromTo(
          border,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "expo.out" },
          0
        )
        .to(
          [horizontalLines, verticalLines],
          {
            opacity: 0.07,
            duration: 1.0,
            ease: "power2.out",
          },
          "+=0.15"
        );

      // ------------------------------------------------------------------
      // CLICK: "Electrical Pulse / Arc"
      // ------------------------------------------------------------------
      const createClickPulse = (x: number, y: number): void => {
        // Primary glowing ring — the "arc" shockwave.
        const ring = document.createElement("div");
        ring.className =
          "absolute rounded-full pointer-events-none border-[3px] border-cyan-300";
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
        ring.style.width = "0px";
        ring.style.height = "0px";
        ring.style.transform = "translate(-50%, -50%)";
        ring.style.boxShadow = `
          0 0 10px rgba(34, 211, 238, 0.95),
          0 0 30px rgba(34, 211, 238, 0.75),
          0 0 60px rgba(34, 211, 238, 0.45),
          0 0 100px rgba(34, 211, 238, 0.2),
          inset 0 0 20px rgba(34, 211, 238, 0.35)
        `;

        // Trailing diffusion ring — adds an energetic "after-spark".
        const trail = document.createElement("div");
        trail.className =
          "absolute rounded-full pointer-events-none border border-cyan-400/60";
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.width = "0px";
        trail.style.height = "0px";
        trail.style.transform = "translate(-50%, -50%)";
        trail.style.boxShadow = "0 0 40px rgba(34, 211, 238, 0.3)";

        // Hot white core — the bright connection point at the cursor.
        const core = document.createElement("div");
        core.className = "absolute rounded-full pointer-events-none bg-white";
        core.style.left = `${x}px`;
        core.style.top = `${y}px`;
        core.style.width = "0px";
        core.style.height = "0px";
        core.style.transform = "translate(-50%, -50%)";
        core.style.boxShadow = "0 0 16px rgba(255, 255, 255, 0.95)";

        pulsePool.appendChild(ring);
        pulsePool.appendChild(trail);
        pulsePool.appendChild(core);

        const pulseEntry: ActivePulse = {
          timeline: gsap.timeline({
            onComplete: () => {
              ring.remove();
              trail.remove();
              core.remove();
              activePulsesRef.current.delete(pulseEntry);
            },
          }),
          elements: [ring, trail, core],
        };

        activePulsesRef.current.add(pulseEntry);

        // Main ring: shoots outward rapidly then diffuses to transparent.
        pulseEntry.timeline
          .fromTo(
            ring,
            { width: 0, height: 0, opacity: 1 },
            {
              width: PULSE_MAX_SIZE,
              height: PULSE_MAX_SIZE,
              opacity: 0,
              duration: PULSE_DURATION,
              ease: "expo.out",
            },
            0
          )
          // Trail ring: slightly delayed, larger, softer.
          .fromTo(
            trail,
            { width: 0, height: 0, opacity: 0.7 },
            {
              width: PULSE_MAX_SIZE * 1.25,
              height: PULSE_MAX_SIZE * 1.25,
              opacity: 0,
              duration: PULSE_DURATION * 0.85,
              ease: "expo.out",
            },
            0.05
          )
          // Core flash: burns bright and vanishes almost instantly.
          .fromTo(
            core,
            { width: 0, height: 0, opacity: 1 },
            {
              width: 48,
              height: 48,
              opacity: 0,
              duration: 0.22,
              ease: "power2.out",
            },
            0
          );
      };

      const handleClick = (event: MouseEvent): void => {
        createClickPulse(event.clientX, event.clientY);
      };

      window.addEventListener("click", handleClick);

      // ------------------------------------------------------------------
      // CLEANUP: runs on unmount / Next.js soft navigation
      // ------------------------------------------------------------------
      return () => {
        window.removeEventListener("click", handleClick);
        loadTl.kill();

        activePulsesRef.current.forEach((pulse) => {
          pulse.timeline.kill();
          pulse.elements.forEach((element) => element.remove());
        });
        activePulsesRef.current.clear();
      };
    },
    { scope: containerRef }
  );

  const gridLines = Array.from({ length: GRID_DENSITY - 1 }, (_, i) => i + 1);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[10001] overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle radial vignette behind the grid */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.35) 100%)",
        }}
      />

      {/* Structural border frame */}
      <div
        ref={borderRef}
        className="absolute inset-4 sm:inset-6 rounded-xl border border-amber-500/20"
        style={{
          boxShadow: "inset 0 0 40px rgba(245, 195, 0, 0.05)",
        }}
      />

      {/* The power-on grid */}
      <div ref={gridRef} className="absolute inset-0">
        {gridLines.map((index) => {
          const position = (index / GRID_DENSITY) * 100;
          return (
            <div key={index}>
              <div
                data-grid-line="horizontal"
                className="absolute left-0 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                style={{ top: `${position}%`, height: "1px" }}
              />
              <div
                data-grid-line="vertical"
                className="absolute top-0 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"
                style={{ left: `${position}%`, width: "1px" }}
              />
            </div>
          );
        })}
      </div>

      {/* Pulse spawn pool — elements are created and destroyed here */}
      <div ref={pulsePoolRef} className="absolute inset-0" />
    </div>
  );
}
