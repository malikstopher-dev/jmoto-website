"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, title, isOpen, onClose }: ImageLightboxProps) {
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