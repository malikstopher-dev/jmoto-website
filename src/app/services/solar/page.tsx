"use client";

import Image from "next/image";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function SolarPage() {
  const { t } = useLanguage();

  const features = [
    t.servicesPage.solar.panelInstallation,
    t.servicesPage.solar.hybridInverter,
    t.servicesPage.solar.backupSystems,
    t.servicesPage.solar.energySaving,
    t.servicesPage.solar.siteAssessment,
    t.servicesPage.solar.testing,
    t.servicesPage.solar.handover,
  ];

  return (
    <>
      <PageBanner
        title={t.servicesPage.solar.title}
        subtitle={t.servicesPage.solar.subtitle}
        image="/services/JMOTO_Service_Solar_Solutions.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.servicesPage.solar.title}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.servicesPage.solar.heading}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.servicesPage.solar.description}
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
                src="/services/JMOTO_Service_Solar_Solutions.png"
                alt={t.servicesPage.solar.title}
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-jmoto-grey rounded-xl text-center border border-jmoto-grey-light">
              <div className="w-12 h-12 bg-jmoto-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.services.solar.title}</h3>
              <p className="text-white/50 text-sm">{t.servicesPage.solar.energySaving}</p>
            </div>
            <div className="p-8 bg-jmoto-grey rounded-xl text-center border border-jmoto-grey-light">
              <div className="w-12 h-12 bg-jmoto-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.services.inverter.title}</h3>
              <p className="text-white/50 text-sm">{t.servicesPage.inverter.backupSetup}</p>
            </div>
            <div className="p-8 bg-jmoto-grey rounded-xl text-center border border-jmoto-grey-light">
              <div className="w-12 h-12 bg-jmoto-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.services.battery.title}</h3>
              <p className="text-white/50 text-sm">{t.servicesPage.battery.backup}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}