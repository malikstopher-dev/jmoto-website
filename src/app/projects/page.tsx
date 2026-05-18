"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PageBanner from "@/components/PageComponents";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useLanguage } from "@/lib/LanguageContext";
import { galleryData } from "@/lib/galleryData";

type GalleryCategory = keyof typeof galleryData;

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [shockingIndex, setShockingIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const categories: { key: GalleryCategory | "all"; label: string }[] = [
    { key: "all", label: t.projects.all || "All" },
    { key: "electrical", label: t.projects.electrical },
    { key: "solar", label: t.projects.solar },
    { key: "cctv", label: t.projects.cctv },
    { key: "inverter", label: t.projects.inverters },
    { key: "battery", label: t.projects.batteries },
    { key: "training", label: t.projects.training },
  ];

  const categoryLabels: Record<GalleryCategory, string> = {
    electrical: t.projects.electrical,
    solar: t.projects.solar,
    cctv: t.projects.cctv,
    inverter: t.projects.inverters,
    battery: t.projects.batteries,
    training: t.projects.training,
  };

  const getDisplayImages = () => {
    if (activeCategory === "all") {
      const allImages: { src: string; category: GalleryCategory }[] = [];
      (Object.keys(galleryData) as GalleryCategory[]).forEach((category) => {
        galleryData[category].forEach((src) => {
          allImages.push({ src, category });
        });
      });
      return allImages;
    }
    return galleryData[activeCategory].map((src) => ({ src, category: activeCategory }));
  };

  const displayImages = getDisplayImages();

  const openLightbox = (images: string[], index: number, category: GalleryCategory, imgIndex: number) => {
    if (prefersReducedMotion) {
      setLightboxImages(images);
      setLightboxIndex(index);
      setLightboxTitle(categoryLabels[category]);
      setLightboxOpen(true);
    } else {
      setShockingIndex(imgIndex);
      setTimeout(() => {
        setShockingIndex(null);
        setLightboxImages(images);
        setLightboxIndex(index);
        setLightboxTitle(categoryLabels[category]);
        setLightboxOpen(true);
      }, 300);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes electricShock {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          15% {
            opacity: 1;
            background: radial-gradient(circle at center, rgba(220, 38, 38, 0.4) 0%, transparent 70%);
          }
          30% {
            background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(220, 38, 38, 0.5) 40%, transparent 70%);
            box-shadow: 0 0 30px rgba(220, 38, 38, 0.9), 0 0 60px rgba(255, 255, 255, 0.4), inset 0 0 30px rgba(220, 38, 38, 0.3);
          }
          50% {
            background: radial-gradient(circle at center, rgba(220, 38, 38, 0.2) 0%, transparent 60%);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.7), 0 0 40px rgba(255, 255, 255, 0.2);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
            background: radial-gradient(circle at center, transparent 0%, transparent 60%);
            box-shadow: 0 0 0 rgba(220, 38, 38, 0);
          }
        }
        @keyframes electricBorder {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
          }
          25% {
            box-shadow: 0 0 20px 2px rgba(220, 38, 38, 0.9), 0 0 40px 4px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 25px 3px rgba(220, 38, 38, 0.8), 0 0 50px 6px rgba(255, 255, 255, 0.25);
          }
          75% {
            box-shadow: 0 0 15px 2px rgba(220, 38, 38, 0.6), 0 0 30px 3px rgba(255, 255, 255, 0.2);
          }
        }
        .project-shock {
          animation: electricBorder 300ms ease-out forwards;
        }
        .project-shock-overlay {
          animation: electricShock 300ms ease-out forwards;
        }
      `}</style>
      <PageBanner
        title={t.nav.projects}
        subtitle={t.projects.bannerSubtitle}
        image="/banners/JMOTO_Banner_Projects_Gallery.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-jmoto-red text-white"
                    : "bg-jmoto-charcoal text-white/70 hover:bg-jmoto-grey/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {displayImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayImages.map((img, index) => {
                const categoryImages = activeCategory === "all"
                  ? galleryData[img.category]
                  : galleryData[activeCategory];
                const categoryIndex = categoryImages.indexOf(img.src);
                const isShocking = shockingIndex === index;

                return (
                  <div
                    key={`${img.category}-${index}`}
                    className={`group relative aspect-[4/3] rounded-xl overflow-hidden bg-jmoto-charcoal border border-jmoto-grey/30 cursor-pointer ${isShocking ? "project-shock" : ""}`}
                    onClick={() => openLightbox(categoryImages, categoryIndex, img.category, index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${categoryLabels[img.category]} gallery`}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openLightbox(categoryImages, categoryIndex, img.category, index); }}
                  >
                    <Image
                      src={img.src}
                      alt={`${categoryLabels[img.category]} project`}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isShocking ? "scale-110" : ""}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {isShocking && (
                      <div className="absolute inset-0 project-shock-overlay" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-end p-4">
                      <div>
                        <p className="text-white font-medium text-sm">{categoryLabels[img.category]}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 p-8 bg-jmoto-charcoal rounded-xl text-center border border-jmoto-grey/30">
              <h3 className="text-xl font-semibold text-white mb-2">{t.projects.comingSoon}</h3>
              <p className="text-white/60">
                {t.projects.moreComingDesc}
              </p>
            </div>
          )}

          {displayImages.length > 0 && (
            <div className="mt-12 p-6 bg-jmoto-charcoal/50 rounded-xl text-center border border-jmoto-grey/20">
              <p className="text-white/50 text-sm">
                {displayImages.length} {t.projects.imagesShowing || "images"} - {activeCategory === "all" ? "All categories" : categoryLabels[activeCategory as GalleryCategory]}
              </p>
            </div>
          )}
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