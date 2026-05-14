"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner, { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function TrainingPage() {
  const { t } = useLanguage();

  const trainingAreas = [
    t.training.electricalSafety,
    t.training.tools,
    t.training.solarBasics,
    t.training.inverterSetup,
    t.training.batteryBasics,
    t.training.faultFinding,
    t.training.practical,
  ];

  return (
    <>
      <PageBanner
        title={t.nav.training}
        subtitle={t.training.bannerSubtitle}
        image="/banners/JMOTO_Banner_Training_Centre.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
              {t.nav.training}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.training.heading}
            </h2>
            <p className="text-white/60 leading-relaxed">
              {t.training.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">{t.training.trainingAreasTitle}</h3>
              <div className="space-y-4">
                {trainingAreas.map((area) => (
                  <div key={area} className="flex items-start gap-4 p-4 bg-jmoto-charcoal rounded-xl border border-jmoto-grey/50">
                    <div className="w-8 h-8 bg-jmoto-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">{t.training.whoIsThisFor}</h3>
              <div className="space-y-4">
                {[
                  { title: t.training.aspiringElectricians, desc: t.training.aspiringElectriciansDesc },
                  { title: t.training.solarInstallers, desc: t.training.solarInstallersDesc },
                  { title: t.training.propertyManagers, desc: t.training.propertyManagersDesc },
                  { title: t.training.tradespeople, desc: t.training.tradespeopleDesc },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-jmoto-charcoal rounded-xl border border-jmoto-grey/50">
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-jmoto-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.training.approachTitle}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t.training.approachDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "1", title: t.training.practicalSessions, desc: t.training.practicalSessionsDesc },
              { icon: "2", title: t.training.safetyFirst, desc: t.training.safetyFirstDesc },
              { icon: "3", title: t.training.realApplications, desc: t.training.realApplicationsDesc },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-jmoto-grey rounded-xl text-center border border-jmoto-grey-light">
                <div className="w-12 h-12 bg-jmoto-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.icon}</span>
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