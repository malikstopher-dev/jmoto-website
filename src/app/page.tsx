"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollReveal, useStaggerReveal, useMaskReveal, useImageMaskReveal } from "@/lib/motion";
import { galleryData } from "@/lib/galleryData";
import GalleryLightbox from "@/components/GalleryLightbox";

gsap.registerPlugin(ScrollTrigger);

const serviceItems = [
  { key: "electrical", icon: "/assets/icons/icon-electrical.svg", card: "/assets/service-cards/service-electrical.webp", href: "/services/electrical", galleryKey: "electrical" },
  { key: "solar", icon: "/assets/icons/icon-solar.svg", card: "/assets/service-cards/service-solar.webp", href: "/services/solar", galleryKey: "solar" },
  { key: "cctv", icon: "/assets/icons/icon-cctv.svg", card: "/assets/service-cards/service-cctv.webp", href: "/services/cctv", galleryKey: "cctv" },
  { key: "inverter", icon: "/assets/icons/icon-inverter.svg", card: "/assets/service-cards/service-inverter.webp", href: "/services/inverter", galleryKey: "inverter" },
  { key: "battery", icon: "/assets/icons/icon-battery.svg", card: "/assets/service-cards/service-battery.webp", href: "/services/battery", galleryKey: "battery" },
  { key: "electronicsSupply", icon: "/assets/icons/icon-supply.svg", card: "/assets/service-cards/service-electronics-electrical-supply.webp", href: "/electronics-supply", galleryKey: "electronicsSupply" },
  { key: "training", icon: "/assets/icons/icon-training.svg", card: "/assets/service-cards/service-training.webp", href: "/training", galleryKey: "training" },
];

const powerFlowNodes = [
  { id: "solar", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", x: 10 },
  { id: "inverter", icon: "M13 10V3L4 14h7v7l9-11h-7z", x: 30 },
  { id: "battery", icon: "M17 6H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2zm-3 10h-4v-2h4v2zm0-4h-4V8h4v4z", x: 50 },
  { id: "distribution", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", x: 70 },
  { id: "home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", x: 90 },
];

export default function Home() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const eyebrowRef = useScrollReveal({ y: 20, duration: 0.6 });
  const headlineRef = useScrollReveal({ y: 30, duration: 0.8, delay: 0.15 });
  const subRef = useScrollReveal({ y: 20, duration: 0.7, delay: 0.3 });
  const ctaRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.45 });
  const serviceGridRef = useStaggerReveal(serviceItems.length, { y: 40, stagger: 0.08 });
  const whyRef = useStaggerReveal(6, { y: 30, stagger: 0.1 });
  const coverageRef = useScrollReveal({ y: 40 });
  const trainingRef = useScrollReveal({ y: 40 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !heroRef.current) return;

    const hero = heroRef.current;
    gsap.fromTo(
      hero.querySelector(".hero-content"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      hero.querySelector(".hero-image"),
      { opacity: 0, scale: 0.95, x: 40 },
      { opacity: 1, scale: 1, x: 0, duration: 1.4, ease: "power3.out", delay: 0.5 }
    );

    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }

    const scrollTriggers: ScrollTrigger[] = [];

    gsap.utils.toArray<HTMLElement>(".power-line").forEach((line) => {
      const st = ScrollTrigger.create({
        trigger: line,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(line, { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" });
        },
        once: true,
      });
      scrollTriggers.push(st);
    });

    return () => scrollTriggers.forEach((st) => st.kill());
  }, []);

  const openServiceGallery = (galleryKey: string, title: string) => {
    const images = galleryData[galleryKey as keyof typeof galleryData];
    if (images && images.length > 0) {
      setLightboxImages(images);
      setLightboxIndex(0);
      setLightboxTitle(title);
      setLightboxOpen(true);
    }
  };

  const whyChooseUs = [
    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: t.whyChoose.registeredCompany, desc: t.whyChoose.registeredCompanyDesc },
    { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", title: t.whyChoose.clearQuotations, desc: t.whyChoose.clearQuotationsDesc },
    { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: t.whyChoose.siteAssessment, desc: t.whyChoose.siteAssessmentDesc },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: t.whyChoose.electricalSolarKnowledge, desc: t.whyChoose.electricalSolarKnowledgeDesc },
    { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: t.whyChoose.saMozambiqueCoverage, desc: t.whyChoose.saMozambiqueCoverageDesc },
    { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: t.whyChoose.practicalTraining, desc: t.whyChoose.practicalTrainingDesc },
  ];

  return (
    <>
      {/* ===== C. FULL-VIEWPORT CINEMATIC HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-jmoto-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-jmoto-black/90 via-jmoto-black/50 to-transparent z-10 md:from-jmoto-black md:via-jmoto-black/80" />
          <div className="absolute inset-0">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/assets/02_hero_mobile/hero-home-mobile.webp"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/01_hero_desktop/hero-home-desktop.webp"
              />
              <Image
                src="/assets/01_hero_desktop/hero-home-desktop.webp"
                alt=""
                fill
                className="object-cover object-top md:object-center"
                priority
                sizes="100vw"
              />
            </picture>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-jmoto-black via-transparent to-jmoto-black/20 z-10" />
        </div>

        <div className="absolute inset-0 z-[5] opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(225, 6, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(225, 6, 0, 0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 hero-content">
              <div className="bg-jmoto-black/40 backdrop-blur-[2px] rounded-2xl p-6 sm:p-8 lg:bg-transparent lg:backdrop-blur-none lg:p-0">
                <div ref={eyebrowRef} className="font-display text-jmoto-red text-sm sm:text-base tracking-[0.2em] mb-6">
                  {t.hero.eyebrow}
                </div>

                <div ref={headlineRef}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                    <span>{t.hero.headlineLine1}</span>
                    <br />
                    <span className="text-jmoto-red">{t.hero.headlineRed}</span>
                    {t.hero.headlineLine2 && (
                      <>
                        <br />
                        <span>{t.hero.headlineLine2}</span>
                      </>
                    )}
                  </h1>
                </div>

                <div ref={subRef}>
                  <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
                    {t.hero.subheadline}
                  </p>
                </div>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-jmoto-red hover:bg-jmoto-red-bright text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-jmoto-red/25 hover:shadow-jmoto-red/40 text-sm"
                  >
                    {t.hero.getAQuote}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 text-sm"
                  >
                    {t.hero.viewServices}
                  </Link>
                  <a
                    href="https://wa.me/27737928655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-all duration-200 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t.hero.whatsappUs}
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-jmoto-red" />
                  <span className="font-display text-white/40 text-sm tracking-[0.15em]">{t.hero.brandLine}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 hero-image hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-jmoto-red/10 via-transparent to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/50">
                  <Image
                    src="/assets/hero-desktop/hero-home-desktop.webp"
                    alt="JMOTO Electrical Services"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jmoto-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-jmoto-red/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-jmoto-red" />
        </div>

      </section>

      {/* ===== D. SERVICE MEDIA GRID ===== */}
      <section className="py-16 lg:py-24 bg-jmoto-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-jmoto-black via-jmoto-graphite/50 to-jmoto-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-jmoto-red text-sm tracking-[0.2em] mb-3">{t.services.title}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.services.subtitle}
            </h2>
          </div>

          <div ref={serviceGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {serviceItems.map((service) => {
              const serviceT = t.services[service.key as keyof typeof t.services] as { title: string; description: string } | undefined;
              const title = serviceT?.title || service.key;
              const desc = serviceT?.description || "";
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="group relative bg-jmoto-graphite rounded-xl overflow-hidden border border-white/[0.06] hover:border-jmoto-red/30 transition-all duration-500 h-full"
                  onClick={(e) => {
                    if (service.galleryKey && galleryData[service.galleryKey]?.length) {
                      e.preventDefault();
                      openServiceGallery(service.galleryKey, title);
                    }
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.card}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jmoto-black via-jmoto-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-jmoto-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image src={service.icon} alt="" width={16} height={16} className="w-4 h-4 opacity-70" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-jmoto-red transition-colors">{title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== E. INTERACTIVE POWER FLOW ===== */}
      <section className="py-16 lg:py-24 bg-jmoto-graphite relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-jmoto-graphite via-jmoto-black to-jmoto-graphite opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-jmoto-red text-sm tracking-[0.2em] mb-3">{t.powerFlow.title}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.powerFlow.subtitle}
            </h2>
          </div>

          <div className="relative bg-jmoto-black/60 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-6 sm:p-10 lg:p-14">
            <div className="hidden lg:block">
              <svg viewBox="0 0 100 30" className="w-full h-auto" style={{ maxHeight: "280px" }}>
                <defs>
                  <linearGradient id="powerLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E10600" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#FF2A20" stopOpacity="1" />
                    <stop offset="100%" stopColor="#E10600" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="0.4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <line className="power-line" x1="15" y1="15" x2="35" y2="15" stroke="url(#powerLineGrad)" strokeWidth="0.3" strokeDasharray="200" strokeDashoffset="200" filter="url(#glow)" />
                <line className="power-line" x1="35" y1="15" x2="55" y2="15" stroke="url(#powerLineGrad)" strokeWidth="0.3" strokeDasharray="200" strokeDashoffset="200" filter="url(#glow)" />
                <line className="power-line" x1="55" y1="15" x2="75" y2="15" stroke="url(#powerLineGrad)" strokeWidth="0.3" strokeDasharray="200" strokeDashoffset="200" filter="url(#glow)" />
                <line className="power-line" x1="75" y1="15" x2="92" y2="15" stroke="url(#powerLineGrad)" strokeWidth="0.3" strokeDasharray="200" strokeDashoffset="200" filter="url(#glow)" />

                {powerFlowNodes.map((node, i) => (
                  <g key={node.id} className="group cursor-pointer">
                    <circle cx={node.x} cy="15" r="4" fill="none" stroke="#E10600" strokeWidth="0.2" opacity="0.4" className="transition-all duration-300 group-hover:opacity-100 group-hover:r-5" />
                    <circle cx={node.x} cy="15" r="2.5" fill="#0B0B0B" stroke="#E10600" strokeWidth="0.15" />
                    <text x={node.x} y="24" textAnchor="middle" fill="white" fontSize="1.8" fontFamily="Barlow Condensed, sans-serif" opacity="0.7">
                      {t.powerFlow[node.id as keyof typeof t.powerFlow]}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="lg:hidden grid grid-cols-5 gap-2">
              {powerFlowNodes.map((node, i) => (
                <div key={node.id} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full border border-jmoto-red/40 bg-jmoto-graphite flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={node.icon} />
                    </svg>
                  </div>
                  <span className="text-white/60 text-[10px] leading-tight font-display tracking-wider">
                    {t.powerFlow[node.id as keyof typeof t.powerFlow]}
                  </span>
                  {i < powerFlowNodes.length - 1 && (
                    <div className="absolute right-0 top-1/2 w-2 h-[1px] bg-jmoto-red/40 hidden" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {powerFlowNodes.map((node) => (
                <div key={node.id} className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                  <div className="text-jmoto-red text-xs font-display tracking-wider mb-1">
                    {t.powerFlow[node.id as keyof typeof t.powerFlow]}
                  </div>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    {t.powerFlow[`${node.id}Desc` as keyof typeof t.powerFlow]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== F. WHY JMOTO ===== */}
      <section className="py-16 lg:py-24 bg-jmoto-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-jmoto-red text-sm tracking-[0.2em] mb-3">{t.whyChoose.title}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.whyChoose.subtitle}
            </h2>
          </div>

          <div ref={whyRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="group p-6 bg-jmoto-graphite rounded-xl border border-white/[0.06] hover:border-jmoto-red/20 transition-all duration-500">
                <div className="w-11 h-11 bg-jmoto-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-jmoto-red/20 transition-colors">
                  <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1.5">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== G. PROJECTS ===== */}
      <ProjectsSection t={t} />

      {/* ===== H. SA + MOZAMBIQUE COVERAGE ===== */}
      <section ref={coverageRef} className="py-16 lg:py-24 bg-jmoto-graphite relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jmoto-red/5 via-transparent to-jmoto-red/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-jmoto-red text-sm tracking-[0.2em] mb-3">
              {language === "pt" ? "ÁREAS DE SERVIÇO" : "SERVICE AREAS"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.coverage.title}
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
              {t.coverage.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-jmoto-black/60 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 hover:border-jmoto-red/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-jmoto-red/10 rounded-xl flex items-center justify-center">
                  <span className="font-display text-jmoto-red text-lg tracking-wider">ZA</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{t.coverage.southAfrica}</h3>
                  <p className="text-white/40 text-sm">{t.coverage.southAfricaDesc}</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {t.about.addressSA}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/quote" className="px-4 py-2 bg-jmoto-red hover:bg-jmoto-red-bright text-white text-sm font-medium rounded-lg transition-colors">
                  {t.cta.requestQuote}
                </Link>
                <a href="tel:+27737928655" className="px-4 py-2 bg-white/[0.05] hover:bg-white/[0.08] text-white/70 text-sm font-medium rounded-lg transition-colors border border-white/[0.06]">
                  {t.contact.phoneZA}
                </a>
              </div>
            </div>

            <div className="group bg-jmoto-black/60 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 hover:border-jmoto-red/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-jmoto-red/10 rounded-xl flex items-center justify-center">
                  <span className="font-display text-jmoto-red text-lg tracking-wider">MZ</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{t.coverage.mozambique}</h3>
                  <p className="text-white/40 text-sm">{t.coverage.mozambiqueDesc}</p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {t.about.addressMZ}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/quote" className="px-4 py-2 bg-jmoto-red hover:bg-jmoto-red-bright text-white text-sm font-medium rounded-lg transition-colors">
                  {t.cta.requestQuote}
                </Link>
                <a href="https://wa.me/25856276827" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/[0.05] hover:bg-white/[0.08] text-white/70 text-sm font-medium rounded-lg transition-colors border border-white/[0.06]">
                  {t.contact.phoneMZ}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== I. TRAINING ===== */}
      <section ref={trainingRef} className="py-16 lg:py-24 bg-jmoto-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jmoto-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-display text-jmoto-red text-sm tracking-[0.2em] mb-3">{t.nav.training}</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                {t.training.heading}
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                {t.training.description}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  t.training.electricalSafety,
                  t.training.solarBasics,
                  t.training.inverterSetup,
                  t.training.faultFinding,
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-jmoto-red rounded-full" />
                    <span className="text-white/60 text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/training"
                className="inline-flex items-center gap-2 px-6 py-3 bg-jmoto-red hover:bg-jmoto-red-bright text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                {t.services.learnMore}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-jmoto-red/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06]">
                <Image
                  src="/assets/support-images/training-hands-on.webp"
                  alt="JMOTO Training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== J. QUOTE CTA ===== */}
      <section className="py-16 lg:py-20 bg-jmoto-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-jmoto-red to-jmoto-red-dark p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t.cta.needQuotation}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                {t.cta.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-jmoto-red font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {t.cta.requestQuote}
                </Link>
                <a
                  href="https://wa.me/27737928655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black/20 text-white font-medium rounded-lg hover:bg-black/30 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.cta.whatsappUs}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GalleryLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        title={lightboxTitle}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

function ProjectsSection({ t }: { t: ReturnType<typeof useLanguage>["t"] }) {
  const sectionRef = useScrollReveal({ y: 40 });
  const allImages: { src: string; category: string }[] = [];
  const categories = ["electrical", "solar", "cctv", "inverter", "battery", "training"] as const;
  const catLabels: Record<string, string> = {
    electrical: t.projects.electrical,
    solar: t.projects.solar,
    cctv: t.projects.cctv,
    inverter: t.projects.inverters,
    battery: t.projects.batteries,
    training: t.projects.training,
  };

  categories.forEach((cat) => {
    (galleryData[cat] || []).slice(0, 4).forEach((src) => {
      allImages.push({ src, category: cat });
    });
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-jmoto-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="font-display text-jmoto-red text-sm tracking-[0.2em] mb-3">{t.nav.projects}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.projects.bannerSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {allImages.map((img, i) => {
            const catImages = galleryData[img.category as keyof typeof galleryData] || [];
            return (
              <div
                key={`${img.category}-${i}`}
                className="group relative aspect-square rounded-xl overflow-hidden bg-jmoto-graphite cursor-pointer border border-white/[0.06] hover:border-jmoto-red/30 transition-all duration-300"
                onClick={() => {
                  setLightboxImages(catImages);
                  setLightboxIndex(catImages.indexOf(img.src));
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={img.src}
                  alt={`${catLabels[img.category] || img.category} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white/70 font-display tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  {catLabels[img.category]}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] text-white/70 hover:text-white font-medium rounded-lg transition-all duration-200 border border-white/[0.06] text-sm"
          >
            {t.services.learnMore}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <GalleryLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
