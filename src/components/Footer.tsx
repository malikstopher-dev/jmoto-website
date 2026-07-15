"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-jmoto-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/brand/logo.png"
                  alt="JMOTO Electrical Services"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                {t.footer.companyDescription}
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {t.footer.services}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/electrical" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.electricalServices}
                  </Link>
                </li>
                <li>
                  <Link href="/services/solar" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.solarSolutions}
                  </Link>
                </li>
                <li>
                  <Link href="/services/cctv" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.cctvSystems}
                  </Link>
                </li>
                <li>
                  <Link href="/services/inverter" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.inverterSolutions}
                  </Link>
                </li>
                <li>
                  <Link href="/services/battery" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.batterySolutions}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {t.footer.company}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.projects}
                  </Link>
                </li>
                <li>
                  <Link href="/training" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.training}
                  </Link>
                </li>
                <li>
                  <Link href="/electronics-supply#items-on-sale" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.shop}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="text-white/60 hover:text-white text-sm transition-colors">
                    {t.nav.getAQuote}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {t.footer.contactUs}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t.coverage.southAfrica}</p>
                  <a href="tel:+27737928655" className="text-white/60 hover:text-white text-sm transition-colors block">
                    {t.contact.phoneZA}
                  </a>
                  <p className="text-white/40 text-xs mt-1">{t.contact.addressZA}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t.coverage.mozambique}</p>
                  <a href="tel:+25856276827" className="text-white/60 hover:text-white text-sm transition-colors block">
                    {t.contact.phoneMZ}
                  </a>
                  <p className="text-white/40 text-xs mt-1">{t.contact.addressMZ}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t.contact.email}</p>
                  <a href="mailto:jqmmoto@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors block">
                    jqmmoto@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-jmoto-grey">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <a href="tel:+27737928655" className="hover:text-white transition-colors">
                {t.footer.callZA}: {t.contact.phoneZA}
              </a>
              <span className="hidden md:inline">|</span>
              <a href="https://wa.me/27737928655" className="hover:text-white transition-colors">
                {t.footer.whatsappMZ}: +258 5627 6827
              </a>
              <span className="hidden md:inline">|</span>
              <a href="mailto:jqmmoto@gmail.com" className="hover:text-white transition-colors">
                jqmmoto@gmail.com
              </a>
            </div>
            <p className="text-white/40 text-sm">
              {t.footer.slogan}
            </p>
          </div>
        </div>

        <div className="py-4 border-t border-jmoto-grey/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-center text-white/30 text-xs">
              JMOTO Electrical Services (PTY) Ltd | Enterprise: 2023/694137/07 | IT: 9541573201
            </p>
            <p className="text-center text-white/30 text-xs">
              Website by <a href="https://stopher-malik.co.za/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">Stopher Malik</a> &amp; <a href="https://smk.stopher-malik.co.za/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">SMK Web Design</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}