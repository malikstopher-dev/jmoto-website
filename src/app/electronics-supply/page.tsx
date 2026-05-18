"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function ElectronicsSupplyPage() {
  const { t } = useLanguage();

  const supplyItems = [
    t.servicesPage.electronicsSupply.cables,
    t.servicesPage.electronicsSupply.plugs,
    t.servicesPage.electronicsSupply.dbComponents,
    t.servicesPage.electronicsSupply.breakers,
    t.servicesPage.electronicsSupply.lighting,
    t.servicesPage.electronicsSupply.accessories,
    t.servicesPage.electronicsSupply.cctvAccessories,
    t.servicesPage.electronicsSupply.solarAccessories,
    t.servicesPage.electronicsSupply.tools,
  ];

  const whyChooseItems = [
    t.servicesPage.electronicsSupply.practicalAdvice,
    t.servicesPage.electronicsSupply.projectBasedSupply,
    t.servicesPage.electronicsSupply.electricalSolarKnowledge,
    t.servicesPage.electronicsSupply.clearQuotations,
    t.servicesPage.electronicsSupply.saMozambiqueSupport,
  ];

  const whatsappMessage = t.electronicsSupplyPrefilledMessage;

  return (
    <>
      <PageBanner
        title={t.servicesPage.electronicsSupply.title}
        subtitle={t.servicesPage.electronicsSupply.subtitle}
        image="/services/JMOTO_Electronics_Supply_Hero_Banner.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.servicesPage.electronicsSupply.title}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.servicesPage.electronicsSupply.heading}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.servicesPage.electronicsSupply.description}
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {supplyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/services/JMOTO_Electronics_Supply_Section_Banner.png"
                alt="JMOTO Electronics and Electrical Supply materials"
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
              {t.servicesPage.electronicsSupply.projectSupport}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t.servicesPage.electronicsSupply.clientSupport}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item) => (
              <div
                key={item}
                className="p-6 bg-jmoto-grey/50 rounded-xl border border-jmoto-grey/30"
              >
                <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.servicesPage.electronicsSupply.needMaterialsTitle}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              {t.servicesPage.electronicsSupply.needMaterialsDesc}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-jmoto-red hover:bg-jmoto-red-dark text-white font-semibold rounded-lg transition-colors text-sm"
              >
                {t.servicesPage.electronicsSupply.requestSupplyQuote}
              </Link>
              <a
                href={`https://wa.me/27737928655?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.servicesPage.electronicsSupply.whatsappUs}
              </a>
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
              { name: t.services.electrical.title, href: "/services/electrical" },
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