"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const services = [
  { nameKey: "nav.electricalServices" as const, href: "/services/electrical", icon: "/assets/icons/icon-electrical.svg" },
  { nameKey: "nav.solarSolutions" as const, href: "/services/solar", icon: "/assets/icons/icon-solar.svg" },
  { nameKey: "nav.cctvSystems" as const, href: "/services/cctv", icon: "/assets/icons/icon-cctv.svg" },
  { nameKey: "nav.inverterSolutions" as const, href: "/services/inverter", icon: "/assets/icons/icon-inverter.svg" },
  { nameKey: "nav.batterySolutions" as const, href: "/services/battery", icon: "/assets/icons/icon-battery.svg" },
  { nameKey: "nav.electronicsSupply" as const, href: "/electronics-supply", icon: "/assets/icons/icon-supply.svg" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const getServiceName = (index: number) => {
    const names = [
      t.nav.electricalServices,
      t.nav.solarSolutions,
      t.nav.cctvSystems,
      t.nav.inverterSolutions,
      t.nav.batterySolutions,
      t.nav.electronicsSupply,
    ];
    return names[index] || services[index].nameKey;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
      style={{ top: "32px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0 relative group">
            <Image
              src="/brand/logo.png"
              alt="JMOTO Electrical Services"
              width={140}
              height={45}
              className="h-9 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jmoto-red transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.aboutUs}
            </Link>

            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05] flex items-center gap-1.5">
                {t.nav.services}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-jmoto-graphite/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 visible scale-100"
                    : "opacity-0 -translate-y-3 invisible scale-[0.97]"
                }`}
              >
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-jmoto-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-jmoto-red/20 transition-colors">
                          <Image
                            src={service.icon}
                            alt=""
                            width={16}
                            height={16}
                            className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <span className="text-sm font-medium">{getServiceName(index)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3 bg-white/[0.02] border-t border-white/[0.06]">
                  <Link
                    href="/services"
                    className="text-jmoto-red text-sm font-medium hover:text-jmoto-red-bright transition-colors flex items-center gap-1.5"
                  >
                    {t.services.learnMore}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/electronics-supply#items-on-sale"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.shop}
            </Link>
            <Link
              href="/projects"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/training"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.training}
            </Link>
            <Link
              href="/service-areas"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.serviceAreas}
            </Link>
            <Link
              href="/contact"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://wa.me/27737928655"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white text-sm font-medium rounded-lg hover:bg-white/[0.05] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.nav.whatsapp}
            </a>
            <Link
              href="/quote"
              className="px-5 py-2.5 bg-jmoto-red hover:bg-jmoto-red-bright text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-jmoto-red/20 hover:shadow-jmoto-red/40"
            >
              {t.nav.getAQuote}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/[0.05] transition-colors"
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
        className={`lg:hidden fixed inset-0 top-[calc(32px+64px)] bg-black/98 backdrop-blur-2xl transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-6">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                language === "en"
                  ? "bg-jmoto-red text-white"
                  : "bg-jmoto-steel/30 text-white/60 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                language === "pt"
                  ? "bg-jmoto-red text-white"
                  : "bg-jmoto-steel/30 text-white/60 hover:text-white"
              }`}
            >
              Português
            </button>
          </div>

          <div className="space-y-1">
            {[
              { href: "/", label: t.nav.home },
              { href: "/about", label: t.nav.aboutUs },
              { href: "/projects", label: t.nav.projects },
              { href: "/training", label: t.nav.training },
              { href: "/contact", label: t.nav.contact },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 pb-1 px-4 text-[11px] text-white/30 uppercase tracking-widest font-semibold">
              {t.nav.services}
            </div>
            {services.map((service, idx) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-3 px-6 py-2.5 text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 opacity-40"
                />
                <span className="text-sm">{getServiceName(idx)}</span>
              </Link>
            ))}

            <Link
              href="/electronics-supply#items-on-sale"
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.shop}
            </Link>

            <div className="pt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/27737928655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-white/[0.05] hover:bg-white/[0.08] text-white font-medium rounded-xl transition-colors border border-white/[0.06]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.nav.whatsapp}
              </a>
              <Link
                href="/quote"
                className="block text-center px-4 py-3.5 bg-jmoto-red hover:bg-jmoto-red-bright text-white font-semibold rounded-xl transition-colors shadow-lg shadow-jmoto-red/20"
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
