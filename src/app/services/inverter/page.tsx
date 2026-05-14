"use client";

import Image from "next/image";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function InverterPage() {
  const { t } = useLanguage();

  const features = [
    t.servicesPage.inverter.installation,
    t.servicesPage.inverter.configuration,
    t.servicesPage.inverter.backupSetup,
    t.servicesPage.inverter.faultChecks,
    t.servicesPage.inverter.batteryComm,
    t.servicesPage.inverter.loadAssessment,
    t.servicesPage.inverter.testing,
    t.servicesPage.inverter.support,
  ];

  return (
    <>
      <PageBanner
        title={t.servicesPage.inverter.title}
        subtitle={t.servicesPage.inverter.subtitle}
        image="/services/JMOTO_Service_Inverter_Solutions.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.servicesPage.inverter.title}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.servicesPage.inverter.heading}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.servicesPage.inverter.description}
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
                src="/services/JMOTO_Service_Inverter_Solutions.png"
                alt={t.servicesPage.inverter.title}
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
              {t.servicesPage.inverter.configuration}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: t.about.step1, desc: t.servicesPage.inverter.loadAssessment },
              { step: "2", title: t.about.step3, desc: t.servicesPage.inverter.installation },
              { step: "3", title: t.about.step4, desc: t.servicesPage.inverter.testing },
            ].map((item) => (
              <div key={item.step} className="p-8 bg-jmoto-grey rounded-xl text-center border border-jmoto-grey-light relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-jmoto-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
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