"use client";

import Image from "next/image";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.nav.aboutUs}
        subtitle={t.about.bannerSubtitle}
        image="/banners/JMOTO_Banner_About_Us.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.about.whoWeAre}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.about.heading}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                {t.about.description}
              </p>
              <p className="text-white/60 leading-relaxed">
                {t.about.description2}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/promo/JMOTO_Brand_Promo_Square.png"
                alt="JMOTO Electrical Services"
                width={600}
                height={600}
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-jmoto-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.about.whatWeDo}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.about.servicesTitle}
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                {t.about.servicesDescription}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  t.about.electricalInstallations,
                  t.about.solarSystems,
                  t.about.cctvCameras,
                  t.about.inverterSetup,
                  t.about.batteryBackup,
                  t.about.technicalTraining,
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-jmoto-red rounded-full" />
                    <span className="text-white/80 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
                {t.about.whereWeWork}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.about.whereWeWork}
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                {t.about.whereWeWorkDescription}
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-jmoto-grey rounded-xl">
                  <h4 className="text-white font-semibold mb-2">{t.coverage.southAfrica}</h4>
                  <p className="text-white/50 text-sm">{t.about.addressSA}</p>
                  <p className="text-white/50 text-sm mt-1">{t.coverage.southAfricaDesc}</p>
                </div>
                <div className="p-6 bg-jmoto-grey rounded-xl">
                  <h4 className="text-white font-semibold mb-2">{t.coverage.mozambique}</h4>
                  <p className="text-white/50 text-sm">{t.about.addressMZ}</p>
                  <p className="text-white/50 text-sm mt-1">{t.about.localCoverage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
              {t.about.ourApproach}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.about.approachTitle}
            </h2>
            <p className="text-white/60">
              {t.about.approachDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "1", text: t.about.step1 },
              { step: "2", text: t.about.step2 },
              { step: "3", text: t.about.step3 },
              { step: "4", text: t.about.step4 },
              { step: "5", text: t.about.step5 },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-6 bg-jmoto-charcoal rounded-xl border border-jmoto-grey/50">
                <div className="w-10 h-10 bg-jmoto-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}