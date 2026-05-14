"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

interface ImageLightboxProps {
  src: string;
  alt: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, title, isOpen, onClose }: ImageLightboxProps) {
  const { t } = useLanguage();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || alt}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-jmoto-red/20 to-transparent rounded-3xl blur-2xl opacity-50" />

        <div className="relative bg-black border border-jmoto-red/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          <div className="relative w-full h-[75vh] max-h-[75vh] flex items-center justify-center p-4">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-[70vh] w-auto h-auto"
              style={{ maxWidth: "90vw", maxHeight: "70vh" }}
            />
          </div>
          {title && (
            <div className="px-6 py-4 border-t border-jmoto-grey/30 bg-black/80">
              <p className="text-white/80 text-sm font-medium text-center">{title}</p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="mt-6 w-12 h-12 rounded-full bg-black/80 border border-jmoto-grey hover:border-jmoto-red hover:bg-jmoto-red/20 text-white flex items-center justify-center transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

interface ServiceCardImageProps {
  src: string;
  alt: string;
  title?: string;
}

export function ServiceCardImage({ src, alt, title }: ServiceCardImageProps) {
  const { useState } = require("react");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden bg-black cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-jmoto-red transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <div className="w-12 h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      <ImageLightbox
        src={src}
        alt={alt}
        title={title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

interface ProjectCardImageProps {
  src: string;
  alt: string;
  label: string;
}

export function ProjectCardImage({ src, alt, label }: ProjectCardImageProps) {
  const { useState } = require("react");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-jmoto-charcoal border border-jmoto-grey/30 cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4 bg-black/50 transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <div className="w-12 h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 flex items-end p-6">
          <div>
            <p className="text-white font-medium mb-1">{label}</p>
            <p className="text-white/50 text-sm"></p>
          </div>
        </div>
      </div>

      <ImageLightbox
        src={src}
        alt={alt}
        title={label}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}