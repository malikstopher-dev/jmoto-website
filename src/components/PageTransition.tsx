"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bulbRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const initialLoad = useRef(true);

  const playTransition = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const overlay = overlayRef.current;
    const bulb = bulbRef.current;
    const bolt = boltRef.current;
    const glow = glowRef.current;
    if (!overlay || !bulb || !bolt || !glow) return;

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    // Reset
    gsap.set([overlay, bulb, bolt, glow], { clearProps: "all" });
    gsap.set(overlay, { opacity: 1, pointerEvents: "auto" });
    gsap.set(bulb, { opacity: 0, scale: 0.5, y: 20 });
    gsap.set(bolt, { opacity: 0, scale: 0.8, x: "-50%", y: "-50%" });
    gsap.set(glow, { opacity: 0, scale: 0.8 });

    // Stage 1: Bulb fades in and glows
    tl.to(bulb, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "back.out(1.7)" })
      .to(glow, { opacity: 1, scale: 1.2, duration: 0.3, ease: "power2.out" }, "<")
      // Stage 2: Bulb flickers intensely
      .to(bulb, { opacity: 0.4, duration: 0.08, ease: "power1.inOut" })
      .to(bulb, { opacity: 1, duration: 0.08, ease: "power1.inOut" })
      .to(bulb, { opacity: 0.3, duration: 0.06, ease: "power1.inOut" })
      .to(bulb, { opacity: 1, duration: 0.06, ease: "power1.inOut" })
      // Stage 3: Lightning bolt flashes
      .to(bolt, { opacity: 1, scale: 1.1, duration: 0.08, ease: "power4.out" }, "-=0.05")
      .to(glow, { opacity: 0, scale: 1.5, duration: 0.2, ease: "power2.out" }, "-=0.1")
      // Stage 4: Flash the whole screen
      .to(overlay, { backgroundColor: "rgba(255, 255, 255, 0.95)", duration: 0.05, ease: "power1.out" })
      .to(overlay, { backgroundColor: "rgba(0, 0, 0, 0.85)", duration: 0.05, ease: "power1.in" })
      // Stage 5: Fade out
      .to([bulb, bolt], { opacity: 0, scale: 1.3, duration: 0.25, ease: "power2.in" }, "+=0.1")
      .to(overlay, { opacity: 0, pointerEvents: "none", duration: 0.4, ease: "power2.out" }, "-=0.2");
  };

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      // Small delay so the transition plays after the first paint
      const timer = setTimeout(playTransition, 100);
      return () => clearTimeout(timer);
    }

    if (pathname !== previousPathname.current) {
      previousPathname.current = pathname;
      playTransition();
    }
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 pointer-events-none opacity-0"
      aria-hidden="true"
    >
      {/* Bulb glow behind */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#F5C300]/30 blur-3xl"
      />

      {/* Light bulb */}
      <div ref={bulbRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
        <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_0_30px_#F5C300]">
          <defs>
            <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FFF9C4" />
              <stop offset="60%" stopColor="#FFE066" />
              <stop offset="100%" stopColor="#F5C300" />
            </linearGradient>
            <linearGradient id="bulbBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5C300" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <path
            d="M50 8 C28 8 16 26 16 46 C16 72 34 90 34 102 L66 102 C66 90 84 72 84 46 C84 26 72 8 50 8 Z"
            fill="url(#bulbGrad)"
          />
          <path d="M48 35 L42 52 L48 52 L45 70 L52 48 L48 48 Z" fill="#F5C300" />
          <path d="M36 102 L36 108 L64 108 L64 102 Z" fill="url(#bulbBaseGrad)" />
          <path d="M37 110 L63 110 M38 113 L62 113 M39 116 L61 116 M40 119 L60 119" stroke="#B8860B" strokeWidth="1.5" fill="none" />
          <path d="M42 119 L42 124 L58 124 L58 119 Z" fill="url(#bulbBaseGrad)" />
          <ellipse cx="50" cy="124" rx="6" ry="2" fill="#8B6914" />
        </svg>
      </div>

      {/* Lightning bolt */}
      <div ref={boltRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56">
        <svg viewBox="0 0 100 160" className="w-full h-full drop-shadow-[0_0_40px_#FFFFFF] drop-shadow-[0_0_80px_#F5C300]">
          <defs>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FFF9C4" />
              <stop offset="100%" stopColor="#F5C300" />
            </linearGradient>
          </defs>
          <path
            d="M62 2 L28 75 L52 75 L32 158 L78 70 L54 70 L62 2 Z"
            fill="url(#boltGrad)"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
