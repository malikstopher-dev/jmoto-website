import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import GalleryLightbox from "./GalleryLightbox";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  icon?: React.ReactNode;
  galleryImages?: string[];
  galleryTitle?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
  galleryImages,
  galleryTitle,
}: ServiceCardProps) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isShocking, setIsShocking] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const hasGallery = galleryImages && galleryImages.length > 0;

  const handleImageClick = (e: React.MouseEvent) => {
    if (hasGallery) {
      e.preventDefault();
      if (prefersReducedMotion) {
        setLightboxIndex(0);
        setLightboxOpen(true);
      } else {
        setIsShocking(true);
        setTimeout(() => {
          setIsShocking(false);
          setLightboxIndex(0);
          setLightboxOpen(true);
        }, 300);
      }
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
        @keyframes electricFlicker {
          0%, 100% { opacity: 0; }
          10% { opacity: 1; }
          20% { opacity: 0.3; }
          30% { opacity: 1; }
          40% { opacity: 0.5; }
          50% { opacity: 1; }
          60% { opacity: 0.2; }
          70% { opacity: 1; }
          80% { opacity: 0.4; }
          90% { opacity: 1; }
        }
        .electric-shock-overlay {
          animation: electricShock 300ms ease-out forwards;
        }
        .electric-shock-border {
          animation: electricBorder 300ms ease-out forwards;
        }
        .electric-shock-flicker {
          animation: electricFlicker 300ms ease-out forwards;
        }
      `}</style>
      <Link
        href={href}
        className="group flex flex-col bg-jmoto-charcoal rounded-xl overflow-hidden border border-jmoto-grey/30 hover:border-jmoto-red/40 transition-all duration-300 h-full"
      >
        <div
          className={`relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden bg-black ${
            hasGallery ? "cursor-pointer" : ""
          } ${isShocking ? "electric-shock-border" : ""}`}
          onClick={handleImageClick}
          role={hasGallery ? "button" : undefined}
          tabIndex={hasGallery ? 0 : undefined}
          aria-label={hasGallery ? `Open ${galleryTitle || title} gallery` : undefined}
          onKeyDown={hasGallery ? (e) => { if (e.key === "Enter" || e.key === " ") handleImageClick(e as unknown as React.MouseEvent); } : undefined}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isShocking ? "scale-110" : ""}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isShocking && (
            <div className="absolute inset-0 electric-shock-overlay" />
          )}
          {isShocking && (
            <div className="absolute inset-0 electric-shock-flicker pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="50%" stopColor="rgba(220,38,38,0.6)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
                  </linearGradient>
                </defs>
                <path d="M0,0 L100%,100%" stroke="url(#electricGrad)" strokeWidth="2" fill="none" />
                <path d="M100%,0 L0,100%" stroke="url(#electricGrad)" strokeWidth="1.5" fill="none" />
                <path d="M50%,0 L60%,40% L40%,60% L50%,100%" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-jmoto-red transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          {hasGallery && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <div className="flex items-center gap-2 px-4 py-2 bg-black/70 rounded-full border border-jmoto-red/50">
                <svg className="w-4 h-4 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white text-xs font-medium">{t.services.viewGallery}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-jmoto-red transition-colors">
            {title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed flex-1">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-jmoto-red text-xs font-semibold uppercase tracking-wider">
            {t.services.learnMore}
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>

      {hasGallery && (
        <GalleryLightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          title={galleryTitle}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}