"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import PageBanner from "@/components/PageComponents";
import { CTASection } from "@/components/PageComponents";

const servicesCovered = (t: any) => [
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: t.serviceAreas.electricalCovered },
  { icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", label: t.serviceAreas.solarCovered },
  { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", label: t.serviceAreas.cctvCovered },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: t.serviceAreas.inverterCovered },
  { icon: "M17 6H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2zm-3 10h-4v-2h4v2zm0-4h-4V8h4v4z", label: t.serviceAreas.batteryCovered },
  { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: t.serviceAreas.supplyCovered },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: t.serviceAreas.trainingCovered },
];

export default function ServiceAreasPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-jmoto-black">
      <PageBanner
        title={t.nav.serviceAreas}
        subtitle={t.serviceAreas.bannerSubtitle}
        desktopImage="/assets/01_hero_desktop/hero-home-desktop.webp"
        mobileImage="/assets/02_hero_mobile/hero-home-mobile.webp"
      />

      {/* Subtitle */}
      <section className="py-12 lg:py-16 bg-jmoto-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            {t.serviceAreas.subtitle}
          </p>
        </div>
      </section>

      {/* SA + MZ Cards */}
      <section className="py-16 lg:py-24 bg-jmoto-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jmoto-red/5 via-transparent to-jmoto-red/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* South Africa */}
            <div className="group bg-jmoto-graphite/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 lg:p-10 hover:border-jmoto-red/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-jmoto-red/10 rounded-xl flex items-center justify-center">
                  <span className="font-display text-jmoto-red text-xl tracking-wider">ZA</span>
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">{t.serviceAreas.saTitle}</h2>
                  <p className="text-white/40 text-sm">{t.serviceAreas.saSubtitle}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {t.serviceAreas.saDesc}
              </p>
              <p className="text-white/40 text-sm mb-6">
                {t.serviceAreas.saAreas}
              </p>
              <p className="text-white/40 text-sm mb-6">
                {t.about.addressSA}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="px-5 py-2.5 bg-jmoto-red hover:bg-jmoto-red-bright text-white text-sm font-medium rounded-lg transition-colors"
                >
                  {t.cta.requestQuote}
                </Link>
                <a
                  href="tel:+27737928655"
                  className="px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.08] text-white/70 text-sm font-medium rounded-lg transition-colors border border-white/[0.06]"
                >
                  {t.contact.phoneZA}
                </a>
              </div>
            </div>

            {/* Mozambique */}
            <div className="group bg-jmoto-graphite/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 lg:p-10 hover:border-jmoto-red/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-jmoto-red/10 rounded-xl flex items-center justify-center">
                  <span className="font-display text-jmoto-red text-xl tracking-wider">MZ</span>
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">{t.serviceAreas.mzTitle}</h2>
                  <p className="text-white/40 text-sm">{t.serviceAreas.mzSubtitle}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {t.serviceAreas.mzDesc}
              </p>
              <p className="text-white/40 text-sm mb-6">
                {t.serviceAreas.mzAreas}
              </p>
              <p className="text-white/40 text-sm mb-6">
                {t.about.addressMZ}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="px-5 py-2.5 bg-jmoto-red hover:bg-jmoto-red-bright text-white text-sm font-medium rounded-lg transition-colors"
                >
                  {t.cta.requestQuote}
                </Link>
                <a
                  href="https://wa.me/25856276827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.08] text-white/70 text-sm font-medium rounded-lg transition-colors border border-white/[0.06]"
                >
                  {t.contact.phoneMZ}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section className="py-16 lg:py-24 bg-jmoto-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.serviceAreas.servicesCovered}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesCovered(t).map((service, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-jmoto-black/60 rounded-xl border border-white/[0.04] hover:border-jmoto-red/15 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-jmoto-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pt-2">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-jmoto-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.serviceAreas.ready}
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            {t.serviceAreas.ctaSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-jmoto-red hover:bg-jmoto-red-bright text-white font-semibold rounded-lg transition-colors"
            >
              {t.cta.requestQuote}
            </Link>
            <a
              href="https://wa.me/27737928655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/[0.05] hover:bg-white/[0.08] text-white font-medium rounded-lg transition-colors border border-white/[0.06]"
            >
              {t.cta.whatsappUs}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
