"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function ElectricalPage() {
  const { t } = useLanguage();

  const features = [
    t.servicesPage.electrical.wiring,
    t.servicesPage.electrical.dbBoard,
    t.servicesPage.electrical.plugs,
    t.servicesPage.electrical.breakers,
    t.servicesPage.electrical.faultFinding,
    t.servicesPage.electrical.maintenance,
    t.servicesPage.electrical.residential,
    t.servicesPage.electrical.commercial,
    t.servicesPage.electrical.industrial,
    t.servicesPage.electrical.testing,
  ];

  return (
    <>
      <PageBanner
        title={t.servicesPage.electrical.title}
        subtitle={t.servicesPage.electrical.subtitle}
        image="/services/JMOTO_Service_Electrical.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.servicesPage.electrical.title}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.servicesPage.electrical.heading}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.servicesPage.electrical.description}
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/services/JMOTO_Service_Electrical.png"
                alt={t.servicesPage.electrical.title}
                width={600}
                height={500}
                className="rounded-xl w-full border border-jmoto-grey/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-jmoto-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.services.learnMore}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: t.services.solar.title, href: "/services/solar" },
              { name: t.services.cctv.title, href: "/services/cctv" },
              { name: t.services.inverter.title, href: "/services/inverter" },
              { name: t.services.battery.title, href: "/services/battery" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="p-6 bg-jmoto-grey rounded-xl text-center hover:bg-jmoto-grey-light transition-colors border border-jmoto-grey-light"
              >
                <span className="text-white font-medium">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}