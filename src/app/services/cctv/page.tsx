"use client";

import Image from "next/image";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function CCTVPape() {
  const { t } = useLanguage();

  const features = [
    t.servicesPage.cctv.cameraInstallation,
    t.servicesPage.cctv.dvrNvr,
    t.servicesPage.cctv.cabling,
    t.servicesPage.cctv.remoteViewing,
    t.servicesPage.cctv.homeSecurity,
    t.servicesPage.cctv.businessSecurity,
    t.servicesPage.cctv.maintenance,
    t.servicesPage.cctv.upgrades,
  ];

  return (
    <>
      <PageBanner
        title={t.servicesPage.cctv.title}
        subtitle={t.servicesPage.cctv.subtitle}
        image="/services/JMOTO_Service_CCTV_Systems.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.servicesPage.cctv.title}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.servicesPage.cctv.heading}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.servicesPage.cctv.description}
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
                src="/services/JMOTO_Service_CCTV_Systems.png"
                alt={t.servicesPage.cctv.title}
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
              {t.trust.smartSecurity}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.servicesPage.cctv.homeSecurity, desc: t.servicesPage.cctv.maintenance },
              { title: t.servicesPage.cctv.businessSecurity, desc: t.servicesPage.cctv.maintenance },
              { title: t.servicesPage.cctv.dvrNvr, desc: t.servicesPage.cctv.cabling },
              { title: t.servicesPage.cctv.remoteViewing, desc: t.servicesPage.cctv.upgrades },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-jmoto-grey rounded-xl border border-jmoto-grey-light">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}