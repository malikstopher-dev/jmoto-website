"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { CTASection } from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";
import { galleryData, serviceToGalleryMap } from "@/lib/galleryData";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.electrical.title,
      description: t.services.electrical.description,
      href: "/services/electrical",
      image: "/services/JMOTO_Service_Electrical.png",
      galleryKey: "electrical",
    },
    {
      title: t.services.solar.title,
      description: t.services.solar.description,
      href: "/services/solar",
      image: "/services/JMOTO_Service_Solar_Solutions.png",
      galleryKey: "solar",
    },
    {
      title: t.services.cctv.title,
      description: t.services.cctv.description,
      href: "/services/cctv",
      image: "/services/JMOTO_Service_CCTV_Systems.png",
      galleryKey: "cctv",
    },
    {
      title: t.services.inverter.title,
      description: t.services.inverter.description,
      href: "/services/inverter",
      image: "/services/JMOTO_Service_Inverter_Solutions.png",
      galleryKey: "inverter",
    },
    {
      title: t.services.battery.title,
      description: t.services.battery.description,
      href: "/services/battery",
      image: "/services/JMOTO_Service_Battery_Solutions.png",
      galleryKey: "battery",
    },
    {
      title: t.services.training.title,
      description: t.services.training.description,
      href: "/training",
      image: "/banners/JMOTO_Banner_Training_Centre.png",
      galleryKey: "training",
    },
  ];

  const trustBadges = [
    { title: t.trust.electricalExperts },
    { title: t.trust.solarSolutions },
    { title: t.trust.smartSecurity },
    { title: t.trust.safeCompliant },
  ];

  const whyChooseUs = [
    { title: t.whyChoose.registeredCompany, desc: t.whyChoose.registeredCompanyDesc },
    { title: t.whyChoose.clearQuotations, desc: t.whyChoose.clearQuotationsDesc },
    { title: t.whyChoose.siteAssessment, desc: t.whyChoose.siteAssessmentDesc },
    { title: t.whyChoose.electricalSolarKnowledge, desc: t.whyChoose.electricalSolarKnowledgeDesc },
    { title: t.whyChoose.saMozambiqueCoverage, desc: t.whyChoose.saMozambiqueCoverageDesc },
    { title: t.whyChoose.practicalTraining, desc: t.whyChoose.practicalTrainingDesc },
  ];

  return (
    <>
      <section className="relative bg-black overflow-hidden" style={{ minHeight: "calc(100vh - 72px)" }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-jmoto-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-jmoto-red/3 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="max-w-lg mx-auto lg:mx-0 lg:pr-4">
                  <div className="w-12 h-1 bg-jmoto-red mb-6" />
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    {t.hero.headline} <span className="text-jmoto-red">{t.hero.headlineSolar}</span>, <span className="text-jmoto-red">{t.hero.headlineCCTV}</span> & <span className="text-jmoto-red">{t.hero.headlineServices}</span>
                  </h1>
                  <p className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                    {t.hero.subheadline}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-jmoto-red hover:bg-jmoto-red-dark text-white font-semibold rounded-lg transition-colors text-sm"
                    >
                      {t.hero.getAQuote}
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors text-sm"
                    >
                      {t.hero.viewServices}
                    </Link>
                    <a
                      href="https://wa.me/27737928655"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {t.hero.whatsappUs}
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative max-w-xl mx-auto lg:ml-auto">
                  <div className="absolute -inset-3 bg-gradient-to-r from-jmoto-red/15 to-transparent rounded-3xl blur-xl" />
                  <div className="relative bg-black/80 border border-jmoto-red/30 rounded-2xl overflow-hidden">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src="/banners/JMOTO_Website_Hero_Main.png"
                        alt="JMOTO Electrical Services"
                        fill
                        className="object-contain p-4 lg:p-6"
                        priority
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-jmoto-charcoal border-y border-jmoto-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-3 px-4 py-3 bg-jmoto-grey/50 rounded-lg"
              >
                <div className="w-9 h-9 bg-jmoto-red/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium text-xs sm:text-sm">{badge.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-jmoto-charcoal" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service) => {
              const galleryKey = service.galleryKey as keyof typeof galleryData;
              const galleryImages = galleryData[galleryKey] || [];
              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                  galleryImages={galleryImages}
                  galleryTitle={service.title}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-jmoto-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              {t.whyChoose.title}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {t.whyChoose.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-jmoto-grey/50 rounded-xl border border-jmoto-grey/30"
              >
                <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                {t.coverage.title}
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                {t.coverage.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-jmoto-red font-bold text-sm">ZA</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.coverage.southAfrica}</h4>
                    <p className="text-white/40 text-sm">{t.coverage.southAfricaDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-jmoto-red font-bold text-sm">MZ</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t.coverage.mozambique}</h4>
                    <p className="text-white/40 text-sm">{t.coverage.mozambiqueDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/banners/JMOTO_Website_Banner_Wide.png"
                alt="Service Coverage"
                width={800}
                height={450}
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}