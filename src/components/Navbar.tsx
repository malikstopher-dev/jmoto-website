"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const services = [
  { nameKey: "nav.electricalServices" as const, href: "/services/electrical" },
  { nameKey: "nav.solarSolutions" as const, href: "/services/solar" },
  { nameKey: "nav.cctvSystems" as const, href: "/services/cctv" },
  { nameKey: "nav.inverterSolutions" as const, href: "/services/inverter" },
  { nameKey: "nav.batterySolutions" as const, href: "/services/battery" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getServiceName = (index: number) => {
    const names = [
      t.nav.electricalServices,
      t.nav.solarSolutions,
      t.nav.cctvSystems,
      t.nav.inverterSolutions,
      t.nav.batterySolutions,
    ];
    return names[index] || services[index].nameKey;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="JMOTO Electrical Services"
              width={140}
              height={45}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.aboutUs}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-white/80 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                {t.nav.services}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-jmoto-charcoal border border-jmoto-grey rounded-lg shadow-xl shadow-black/50 overflow-hidden transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {services.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-jmoto-grey transition-colors"
                  >
                    {getServiceName(index)}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/projects"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/training"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.training}
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center bg-jmoto-grey/50 rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === "en"
                    ? "bg-jmoto-red text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("pt")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === "pt"
                    ? "bg-jmoto-red text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                PT
              </button>
            </div>

            <a
              href="https://wa.me/27737928655"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-jmoto-grey hover:bg-jmoto-grey-light text-white text-sm font-medium rounded transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.nav.whatsapp}
            </a>
            <Link
              href="/quote"
              className="px-5 py-2.5 bg-jmoto-red hover:bg-jmoto-red-dark text-white text-sm font-semibold rounded transition-colors"
            >
              {t.nav.getAQuote}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${
                language === "en"
                  ? "bg-jmoto-red text-white"
                  : "bg-jmoto-grey text-white/70 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`flex-1 py-2 text-sm font-medium rounded transition-colors ${
                language === "pt"
                  ? "bg-jmoto-red text-white"
                  : "bg-jmoto-grey text-white/70 hover:text-white"
              }`}
            >
              Português
            </button>
          </div>

          <div className="space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-jmoto-grey rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-jmoto-grey rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.aboutUs}
            </Link>

            <div className="px-4 py-2 text-xs text-white/50 uppercase tracking-wider">{t.nav.services}</div>
            {services.map((service, idx) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-8 py-2.5 text-white/70 hover:text-white hover:bg-jmoto-grey transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {getServiceName(idx)}
              </Link>
            ))}

            <Link
              href="/projects"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-jmoto-grey rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/training"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-jmoto-grey rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.training}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-jmoto-grey rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/27737928655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-jmoto-grey hover:bg-jmoto-grey-light text-white font-medium rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.nav.whatsapp}
              </a>
              <Link
                href="/quote"
                className="block text-center px-4 py-3 bg-jmoto-red hover:bg-jmoto-red-dark text-white font-semibold rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.getAQuote}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}