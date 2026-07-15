"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    // ========================================
    // ELECTRIC FLASH
    // ========================================
    function triggerElectricFlash() {
      const flash = document.getElementById("electricFlash");
      const flashBolt = document.getElementById("flashBolt");
      if (!flash || !flashBolt) return;

      flash.classList.remove("active", "flicker");
      flashBolt.classList.remove("active");
      void flash.offsetWidth;

      flash.classList.add("flicker");
      flashBolt.classList.add("active");

      setTimeout(() => {
        flash.classList.remove("active", "flicker");
        flashBolt.classList.remove("active");
      }, 750);
    }

    // ========================================
    // CLICK RIPPLE
    // ========================================
    function handleClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";

      for (let i = 0; i < 3; i++) {
        const ring = document.createElement("div");
        ring.className = "ripple-ring";
        ring.style.animationDelay = i * 0.1 + "s";
        ripple.appendChild(ring);
      }

      for (let i = 0; i < 8; i++) {
        const spike = document.createElement("div");
        spike.className = "ripple-spike";
        const angle = (i / 8) * 360;
        const distance = 20 + Math.random() * 30;
        spike.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${distance}px)`;
        spike.style.animationDelay = Math.random() * 0.2 + "s";
        ripple.appendChild(spike);
      }

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    }

    document.addEventListener("click", handleClick);

    // ========================================
    // SMOOTH SCROLL + FLASH
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (!target) return;

        triggerElectricFlash();
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 400);
      });
    });

    // ========================================
    // SCROLL REVEAL
    // ========================================
    const revealElements = document.querySelectorAll(".reveal");

    function checkReveal() {
      const triggerBottom = window.innerHeight * 0.85;
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
          el.classList.add("active");
        }
      });
    }

    checkReveal();
    window.addEventListener("scroll", checkReveal);

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    document.querySelectorAll(".stat-number").forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-count") || "0", 10);
      if (!target) return;
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      function updateCounter() {
        current += step;
        if (current < target) {
          stat.textContent = Math.floor(current) + "+";
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + "+";
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(stat);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(stat);
    });

    // ========================================
    // PAGE LOAD FLASH
    // ========================================
    const loadTimeout = setTimeout(() => {
      triggerElectricFlash();
    }, 300);

    // ========================================
    // PARALLAX
    // ========================================
    function handleParallax() {
      const scrolled = window.pageYOffset;
      const heroBg = document.querySelector(".hero-bg-parallax") as HTMLElement | null;
      if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    }

    window.addEventListener("scroll", handleParallax);

    // ========================================
    // CLEANUP
    // ========================================
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", checkReveal);
      window.removeEventListener("scroll", handleParallax);
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      <div className="electric-flash-overlay" id="electricFlash" />
      <div className="flash-bolt" id="flashBolt">
        <div className="bolt-rays">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="ray"
              style={{ transform: `rotate(${angle}deg) translateY(-90px)` }}
            />
          ))}
        </div>
        <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flashBulbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FFF9C4" />
              <stop offset="60%" stopColor="#FFE066" />
              <stop offset="100%" stopColor="#F5C300" />
            </linearGradient>
            <linearGradient id="flashBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5C300" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <path d="M50 8 C28 8 16 26 16 46 C16 72 34 90 34 102 L66 102 C66 90 84 72 84 46 C84 26 72 8 50 8 Z" fill="url(#flashBulbGrad)" />
          <path d="M48 35 L42 52 L48 52 L45 70 L52 48 L48 48 Z" fill="#F5C300" />
          <path d="M36 102 L36 108 L64 108 L64 102 Z" fill="url(#flashBaseGrad)" />
          <path d="M37 110 L63 110 M38 113 L62 113 M39 116 L61 116 M40 119 L60 119" stroke="#B8860B" strokeWidth="1.5" fill="none" />
          <path d="M42 119 L42 124 L58 124 L58 119 Z" fill="url(#flashBaseGrad)" />
          <ellipse cx="50" cy="124" rx="6" ry="2" fill="#8B6914" />
        </svg>
      </div>
    </>
  );
}
