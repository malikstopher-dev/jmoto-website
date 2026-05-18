"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

interface GalleryLightboxProps {
  images: string[];
  initialIndex: number;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex = 0,
  title,
  isOpen,
  onClose,
}: GalleryLightboxProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    },
    [onClose, goToNext, goToPrevious]
  );

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image gallery"}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <button
        type="button"
        onClick={handleCloseClick}
        aria-label="Close gallery"
        className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-black/80 border border-jmoto-grey/40 hover:border-jmoto-red hover:bg-jmoto-red/10 text-white flex items-center justify-center transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative max-w-[90vw] max-h-[82vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-6 bg-gradient-to-r from-jmoto-red/10 via-jmoto-red/5 to-transparent rounded-3xl blur-3xl" />

        <div className="relative bg-black border border-jmoto-red/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/80">
          <div className="relative w-full h-[75vh] max-h-[75vh] flex items-center justify-center p-4 bg-black/80">
            <Image
              src={images[currentIndex]}
              alt={`${title || "Gallery"} image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-[70vh] w-auto h-auto"
              style={{ maxWidth: "90vw", maxHeight: "70vh" }}
              priority
            />
          </div>

          <div className="px-6 py-3 border-t border-jmoto-grey/20 bg-black/60 flex items-center justify-between">
            <p className="text-white/70 text-sm font-medium">
              {title || "Gallery"}
            </p>
            <p className="text-white/50 text-sm">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-jmoto-grey/40 hover:border-jmoto-red hover:bg-jmoto-red/10 text-white flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-jmoto-grey/40 hover:border-jmoto-red hover:bg-jmoto-red/10 text-white flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}