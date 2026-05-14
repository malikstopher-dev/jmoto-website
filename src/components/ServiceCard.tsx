import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import ImageLightbox from "./ImageLightbox";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
}: ServiceCardProps) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Link
        href={href}
        className="group flex flex-col bg-jmoto-charcoal rounded-xl overflow-hidden border border-jmoto-grey/30 hover:border-jmoto-red/40 transition-all duration-300 h-full"
      >
        <div
          className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden bg-black cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setLightboxOpen(true);
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-jmoto-red transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
            <div className="w-12 h-12 rounded-full bg-black/60 border border-white/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
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

      <ImageLightbox
        src={image}
        alt={title}
        title={title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}