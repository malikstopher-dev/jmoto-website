"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

function generateLightningPath(width: number, height: number, segments: number) {
  const points: { x: number; y: number }[] = [];
  const startX = Math.random() * width * 0.4 + width * 0.3;
  points.push({ x: startX, y: 0 });

  let currentX = startX;
  for (let i = 1; i <= segments; i++) {
    const y = (height / segments) * i;
    const jitter = (Math.random() - 0.5) * (width * 0.25);
    currentX += jitter;
    currentX = Math.max(width * 0.1, Math.min(width * 0.9, currentX));
    points.push({ x: currentX, y });
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2 + (Math.random() - 0.5) * 20;
    const midY = (prev.y + curr.y) / 2;
    d += ` L ${midX} ${midY} L ${curr.x} ${curr.y}`;
  }
  return d;
}

function generateBranchPath(startX: number, startY: number, length: number, direction: number) {
  const points = [{ x: startX, y: startY }];
  let currentX = startX;
  let currentY = startY;
  const segments = 4 + Math.floor(Math.random() * 3);

  for (let i = 0; i < segments; i++) {
    currentX += Math.cos(direction) * (length / segments) + (Math.random() - 0.5) * 30;
    currentY += Math.sin(direction) * (length / segments) + (Math.random() - 0.5) * 20;
    points.push({ x: currentX, y: currentY });
  }

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x} ${points[i].y}`;
  }
  return d;
}

export default function PageTransition() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bulbRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mainBoltRef = useRef<SVGPathElement>(null);
  const branchBolt1Ref = useRef<SVGPathElement>(null);
  const branchBolt2Ref = useRef<SVGPathElement>(null);
  const ambientBoltRef = useRef<SVGPathElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<HTMLDivElement>(null);
  const initialLoad = useRef(true);
  const [paths, setPaths] = useState({
    main: "",
    branch1: "",
    branch2: "",
    ambient: "",
  });

  const generatePaths = useCallback(() => {
    const w = 400;
    const h = 600;
    setPaths({
      main: generateLightningPath(w, h, 8),
      branch1: generateBranchPath(120, 180, 140, Math.PI / 3),
      branch2: generateBranchPath(280, 220, 120, (2 * Math.PI) / 3),
      ambient: generateLightningPath(w, h, 6),
    });
  }, []);

  const playTransition = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    generatePaths();

    const overlay = overlayRef.current;
    const bulb = bulbRef.current;
    const glow = glowRef.current;
    const mainBolt = mainBoltRef.current;
    const branch1 = branchBolt1Ref.current;
    const branch2 = branchBolt2Ref.current;
    const ambient = ambientBoltRef.current;
    const flash = flashRef.current;
    const sparks = sparksRef.current;

    if (!overlay || !bulb || !glow || !mainBolt || !branch1 || !branch2 || !ambient || !flash || !sparks) return;

    const sparkElements = sparks.querySelectorAll(".page-transition-spark");

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    // Reset
    gsap.set([overlay, bulb, glow, flash, sparks], { clearProps: "all" });
    gsap.set([mainBolt, branch1, branch2, ambient], { attr: { "stroke-dashoffset": 600 }, opacity: 0 });
    gsap.set(overlay, { opacity: 1, pointerEvents: "auto" });
    gsap.set(bulb, { opacity: 0, scale: 0.6, y: 30, rotation: -5 });
    gsap.set(glow, { opacity: 0, scale: 0.5 });
    gsap.set(flash, { opacity: 0 });
    gsap.set(sparks, { opacity: 0 });
    gsap.set(sparkElements, { opacity: 0, scale: 0, x: 0, y: 0 });

    // Stage 1: Bulb fades in and warms up
    tl.to(bulb, { opacity: 1, scale: 1, y: 0, rotation: 0, duration: 0.5, ease: "power3.out" })
      .to(glow, { opacity: 0.6, scale: 1.3, duration: 0.5, ease: "power2.out" }, "<")

      // Stage 2: Bulb flickers as power surges
      .to(glow, { opacity: 0.9, scale: 1.5, duration: 0.12, ease: "power1.inOut" })
      .to(glow, { opacity: 0.4, scale: 1.2, duration: 0.1, ease: "power1.inOut" })
      .to(glow, { opacity: 1, scale: 1.6, duration: 0.08, ease: "power1.inOut" })
      .to(bulb, { scale: 1.05, duration: 0.1, ease: "power1.inOut" }, "<")
      .to(bulb, { scale: 1, duration: 0.08, ease: "power1.inOut" })

      // Stage 3: Bulb dims and lightning strikes
      .to(bulb, { opacity: 0.2, scale: 0.9, duration: 0.1, ease: "power2.in" }, "+=0.05")
      .to(glow, { opacity: 0, scale: 2, duration: 0.2, ease: "power2.out" }, "<")

      // Stage 4: Main lightning bolt draws with intense flash
      .call(() => {
        gsap.set(mainBolt, { opacity: 1, attr: { "stroke-dashoffset": 600 } });
        gsap.set(ambient, { opacity: 0.4, attr: { "stroke-dashoffset": 600 } });
      })
      .to(mainBolt, { attr: { "stroke-dashoffset": 0 }, duration: 0.12, ease: "power1.out" }, "<")
      .to(ambient, { attr: { "stroke-dashoffset": 0 }, duration: 0.18, ease: "power1.out" }, "<+=0.03")
      .to(flash, { opacity: 0.8, duration: 0.04, ease: "power1.out" }, "<")
      .to(flash, { opacity: 0, duration: 0.12, ease: "power2.out" })

      // Stage 5: Branch lightning + screen shake + sparks
      .call(() => {
        gsap.set([branch1, branch2], { opacity: 1, attr: { "stroke-dashoffset": 300 } });
        gsap.set(sparks, { opacity: 1 });
      })
      .to([branch1, branch2], { attr: { "stroke-dashoffset": 0 }, duration: 0.08, ease: "power1.out" }, "<+=0.02")
      .to(flash, { opacity: 0.6, duration: 0.03, ease: "power1.out" }, "<")
      .to(flash, { opacity: 0, duration: 0.1, ease: "power2.out" }, "+=0.02")
      .to(overlay, { x: "random(-3, 3)", y: "random(-3, 3)", duration: 0.05, repeat: 3, yoyo: true, ease: "none" }, "<")
      .to(sparkElements, {
        opacity: 1,
        scale: 1,
        x: (i: number) => Math.cos((i / 12) * Math.PI * 2) * (80 + Math.random() * 60),
        y: (i: number) => Math.sin((i / 12) * Math.PI * 2) * (80 + Math.random() * 60),
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      }, "<")
      .to(sparkElements, { opacity: 0, scale: 0, duration: 0.2, stagger: 0.01, ease: "power2.in" }, "+=0.05")

      // Stage 6: Secondary flicker strike
      .to(mainBolt, { opacity: 0.4, duration: 0.04, ease: "power1.inOut" }, "+=0.05")
      .to(mainBolt, { opacity: 1, duration: 0.04, ease: "power1.inOut" })
      .to(mainBolt, { opacity: 0.3, duration: 0.03, ease: "power1.inOut" })
      .to(mainBolt, { opacity: 1, duration: 0.03, ease: "power1.inOut" })

      // Stage 7: Fade out
      .to([mainBolt, branch1, branch2, ambient, bulb, sparks], { opacity: 0, duration: 0.25, ease: "power2.in" }, "+=0.15")
      .to(overlay, { opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power2.out" }, "-=0.2");
  }, [generatePaths, isAnimating]);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      const timer = setTimeout(playTransition, 100);
      return () => clearTimeout(timer);
    }

    if (pathname !== previousPathname.current) {
      previousPathname.current = pathname;
      playTransition();
    }
  }, [pathname, playTransition]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10001] flex items-center justify-center pointer-events-none opacity-0"
      aria-hidden="true"
      style={{ background: "radial-gradient(circle at center, #1a0505 0%, #000000 100%)" }}
    >
      {/* Full screen lightning flash */}
      <div
        ref={flashRef}
        className="absolute inset-0 opacity-0"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(255, 69, 0, 0.7) 0%, rgba(220, 38, 38, 0.3) 40%, transparent 70%)" }}
      />

      {/* Ambient storm glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-0"
        style={{ background: "radial-gradient(circle, rgba(255, 69, 0, 0.25) 0%, rgba(220, 38, 38, 0.1) 40%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Lightning bolts container */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ filter: "drop-shadow(0 0 25px rgba(255, 69, 0, 0.9)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.8))" }}
      >
        <defs>
          <linearGradient id="mainBoltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFD700" />
            <stop offset="60%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="branchBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Ambient background bolt */}
        <path
          ref={ambientBoltRef}
          d={paths.ambient}
          fill="none"
          stroke="rgba(255, 69, 0, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="600"
          opacity="0"
        />

        {/* Main lightning bolt */}
        <path
          ref={mainBoltRef}
          d={paths.main}
          fill="none"
          stroke="url(#mainBoltGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="600"
          opacity="0"
        />

        {/* Branch bolts */}
        <path
          ref={branchBolt1Ref}
          d={paths.branch1}
          fill="none"
          stroke="url(#branchBoltGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          opacity="0"
        />
        <path
          ref={branchBolt2Ref}
          d={paths.branch2}
          fill="none"
          stroke="url(#branchBoltGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          opacity="0"
        />
      </svg>

      {/* Light bulb */}
      <div ref={bulbRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28">
        <svg viewBox="0 0 100 140" className="w-full h-full" style={{ filter: "drop-shadow(0 0 20px rgba(245, 195, 0, 0.8))" }}>
          <defs>
            <radialGradient id="bulbGlass" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
              <stop offset="40%" stopColor="rgba(255, 249, 196, 0.9)" />
              <stop offset="80%" stopColor="rgba(245, 195, 0, 0.8)" />
              <stop offset="100%" stopColor="rgba(184, 134, 11, 0.6)" />
            </radialGradient>
            <linearGradient id="bulbBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#555" />
              <stop offset="100%" stopColor="#222" />
            </linearGradient>
          </defs>
          <path
            d="M50 8 C28 8 16 26 16 46 C16 72 34 90 34 102 L66 102 C66 90 84 72 84 46 C84 26 72 8 50 8 Z"
            fill="url(#bulbGlass)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          <path d="M28 32 Q40 24 50 30" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M48 35 L42 52 L48 52 L45 70 L52 48 L48 48 Z" fill="#F5C300" opacity="0.9" />
          <path d="M36 102 L36 108 L64 108 L64 102 Z" fill="url(#bulbBase)" />
          <path d="M37 110 L63 110 M38 113 L62 113 M39 116 L61 116 M40 119 L60 119" stroke="#888" strokeWidth="1.5" fill="none" />
          <path d="M42 119 L42 124 L58 124 L58 119 Z" fill="url(#bulbBase)" />
          <ellipse cx="50" cy="124" rx="6" ry="2" fill="#111" />
        </svg>
      </div>

      {/* Sparks */}
      <div ref={sparksRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="page-transition-spark absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#FF4500" : "#FFD700",
              boxShadow: "0 0 8px #FF4500, 0 0 16px #DC2626",
            }}
          />
        ))}
      </div>
    </div>
  );
}
