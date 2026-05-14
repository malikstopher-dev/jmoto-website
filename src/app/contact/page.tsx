"use client";

import Link from "next/link";
import PageBanner from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.nav.contact}
        subtitle={t.contact.bannerSubtitle}
        image="/banners/JMOTO_Banner_Contact_Us.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t.contact.heading}
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t.contact.description}
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-jmoto-charcoal rounded-xl border border-jmoto-grey/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t.contact.southAfrica}</h3>
                      <a href="tel:+27737928655" className="text-white/60 hover:text-jmoto-red transition-colors text-lg font-medium block">
                        {t.contact.phoneZA}
                      </a>
                      <p className="text-white/40 text-sm mt-1">{t.contact.addressZA}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-jmoto-charcoal rounded-xl border border-jmoto-grey/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-jmoto-red" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t.contact.mozambique}</h3>
                      <a href="tel:+25856276827" className="text-white/60 hover:text-jmoto-red transition-colors text-lg font-medium block">
                        {t.contact.phoneMZ}
                      </a>
                      <p className="text-white/40 text-sm mt-1">{t.contact.addressMZ}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-jmoto-charcoal rounded-xl border border-jmoto-grey/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jmoto-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t.contact.email}</h3>
                      <a href="mailto:jqmmoto@gmail.com" className="text-white/60 hover:text-jmoto-red transition-colors block">
                        jqmmoto@gmail.com
                      </a>
                      <a href="mailto:jmario.moto@gmail.com" className="text-white/60 hover:text-jmoto-red transition-colors block mt-1">
                        jmario.moto@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-jmoto-charcoal rounded-2xl p-8 border border-jmoto-grey">
                <h3 className="text-xl font-semibold text-white mb-6">{t.contact.quickActions}</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+27737928655"
                    className="flex items-center gap-4 p-4 bg-jmoto-grey rounded-xl hover:bg-jmoto-grey-light transition-colors group"
                  >
                    <div className="w-12 h-12 bg-jmoto-red rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{t.contact.callSouthAfrica}</p>
                      <p className="text-white/50 text-sm">{t.contact.phoneZA}</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/27737928655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-jmoto-grey rounded-xl hover:bg-jmoto-grey-light transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{t.contact.whatsappMozambique}</p>
                      <p className="text-white/50 text-sm">{t.contact.phoneMZ}</p>
                    </div>
                  </a>

                  <Link
                    href="/quote"
                    className="flex items-center gap-4 p-4 bg-jmoto-red hover:bg-jmoto-red-dark rounded-xl transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{t.contact.requestQuote}</p>
                      <p className="text-white/70 text-sm">{t.nav.getAQuote}</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mt-8 p-6 bg-jmoto-charcoal rounded-xl border border-jmoto-grey">
                <h3 className="text-lg font-semibold text-white mb-4">{t.contact.serviceHours}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/60">{t.contact.mondayFriday}</span>
                    <span className="text-white/80">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">{t.contact.saturday}</span>
                    <span className="text-white/80">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">{t.contact.sunday}</span>
                    <span className="text-white/80">{t.contact.closed}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}