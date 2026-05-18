"use client";

import Link from "next/link";
import Image from "next/image";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.electrical.title,
      description: t.services.electrical.description,
      href: "/services/electrical",
      image: "/services/JMOTO_Service_Electrical.png",
    },
    {
      title: t.services.solar.title,
      description: t.services.solar.description,
      href: "/services/solar",
      image: "/services/JMOTO_Service_Solar_Solutions.png",
    },
    {
      title: t.services.cctv.title,
      description: t.services.cctv.description,
      href: "/services/cctv",
      image: "/services/JMOTO_Service_CCTV_Systems.png",
    },
    {
      title: t.services.inverter.title,
      description: t.services.inverter.description,
      href: "/services/inverter",
      image: "/services/JMOTO_Service_Inverter_Solutions.png",
    },
    {
      title: t.services.battery.title,
      description: t.services.battery.description,
      href: "/services/battery",
      image: "/services/JMOTO_Service_Battery_Solutions.png",
    },
    {
      title: t.services.electronicsSupply.title,
      description: t.services.electronicsSupply.description,
      href: "/electronics-supply",
      image: "/services/JMOTO_Electronics_Supply_Square_Promo.png",
    },
    {
      title: t.services.training.title,
      description: t.services.training.description,
      href: "/training",
      image: "/banners/JMOTO_Banner_Training_Centre.png",
    },
  ];

  return (
    <>
      <PageBanner
        title={t.nav.services}
        subtitle={t.servicesPage.bannerSubtitle}
        image="/promo/JMOTO_Services_Banner.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col bg-jmoto-charcoal rounded-xl overflow-hidden border border-jmoto-grey/30 hover:border-jmoto-red/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-black/50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="w-8 h-0.5 bg-jmoto-red mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-jmoto-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-jmoto-red text-xs font-semibold uppercase tracking-wider">
                    {t.services.learnMore}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}