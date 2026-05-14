"use client";

import Image from "next/image";
import { useState } from "react";
import PageBanner from "@/components/PageComponents";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  const categories = [
    t.projects.electrical,
    t.projects.solar,
    t.projects.cctv,
    t.projects.inverters,
    t.projects.batteries,
    t.projects.training,
  ];

  const placeholderImages = [
    { src: "/services/JMOTO_Service_Electrical.png", label: t.projects.electrical },
    { src: "/services/JMOTO_Service_Solar_Solutions.png", label: t.projects.solar },
    { src: "/services/JMOTO_Service_CCTV_Systems.png", label: t.projects.cctv },
    { src: "/services/JMOTO_Service_Inverter_Solutions.png", label: t.projects.inverters },
    { src: "/services/JMOTO_Service_Battery_Solutions.png", label: t.projects.batteries },
    { src: "/banners/JMOTO_Banner_Training_Centre.png", label: t.projects.training },
  ];

  const openLightbox = (img: { src: string; label: string }) => {
    setSelectedImage(img);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageBanner
        title={t.nav.projects}
        subtitle={t.projects.bannerSubtitle}
        image="/banners/JMOTO_Banner_Projects_Gallery.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-3 bg-jmoto-charcoal rounded-lg text-white text-sm font-medium hover:bg-jmoto-red transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderImages.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-jmoto-charcoal border border-jmoto-grey/30 cursor-pointer"
                onClick={() => openLightbox(img)}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-contain p-4 bg-black/50 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-white font-medium mb-1">{img.label}</p>
                    <p className="text-white/50 text-sm">{t.projects.comingSoon}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-jmoto-charcoal rounded-xl text-center border border-jmoto-grey/30">
            <h3 className="text-xl font-semibold text-white mb-2">{t.projects.moreComing}</h3>
            <p className="text-white/60">
              {t.projects.moreComingDesc}
            </p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.label}
          title={selectedImage.label}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}