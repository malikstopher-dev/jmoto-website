"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageBanner, { CTASection } from "@/components/PageComponents";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useLanguage } from "@/lib/LanguageContext";

const saleProducts = [
  {
    key: "andowlPowerBank",
    icon: "🔋",
    price: "R450",
    images: ["/gallery/sale/andowl-58000-power-bank-01.jpg", "/gallery/sale/andowl-58000-power-bank-02.jpg"],
  },
  { key: "powerBank", icon: "⚡" },
  { key: "memoryCard", icon: "💾" },
  { key: "plugs", icon: "🔌" },
  { key: "switches", icon: "🔘" },
  { key: "ledBulbs", icon: "💡" },
  { key: "cables", icon: "🔗" },
  { key: "circuitBreakers", icon: "⚡" },
  { key: "cctvAccessories", icon: "📹" },
  { key: "solarAccessories", icon: "☀️" },
  { key: "extensionLeads", icon: "🔌" },
];

export default function ElectronicsSupplyClient() {
  const { t, language } = useLanguage();
  const isPortuguese = language === "pt";

  return (
    <>
      <PageBanner
        title={t.electronicsSupply.heroTitle}
        subtitle={t.electronicsSupply.heroSubtitle}
        image="/electronics-supply/JMOTO_Electronics_Supply_Hero_Banner.png"
      />

      <IntroSection t={t} />

      <SaleSection t={t} isPortuguese={isPortuguese} />

      <PaymentDetailsSection t={t} />

      <RequestSupplySection t={t} />

      <OtherServicesSection t={t} />

      <CTASection />
    </>
  );
}

function IntroSection({ t }: { t: any }) {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
              {t.electronicsSupply.heroTitle}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.electronicsSupply.introTitle}
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              {t.electronicsSupply.introDescription}
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.servicesPage.electronicsSupply.cables}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.servicesPage.electronicsSupply.plugs}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.servicesPage.electronicsSupply.breakers}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.servicesPage.electronicsSupply.lighting}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.servicesPage.electronicsSupply.cctvAccessories}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-jmoto-red rounded-full mt-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">{t.servicesPage.electronicsSupply.solarAccessories}</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/electronics-supply/JMOTO_Electronics_Supply_Section_Banner.png"
              alt="JMOTO Electronics and Electrical Supply materials"
              width={600}
              height={500}
              className="rounded-xl w-full border border-jmoto-grey/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SaleSection({ t, isPortuguese }: { t: any; isPortuguese: boolean }) {
  const baseWhatsAppUrl = "https://wa.me/27737928655";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const createProductMessage = (productName: string, price: string) => {
    if (isPortuguese) {
      return `Olá JMOTO Electrical Services, gostaria de encomendar ou saber mais sobre este item.

Item: ${productName}
Preço: ${price}
Quantidade:
Nome:
Localização:
Entrega/Recolha:`;
    }
    return `Hello JMOTO Electrical Services, I would like to order or ask about this item.

Item: ${productName}
Price: ${price}
Quantity:
Name:
Location:
Delivery/Collection preference:`;
  };

  return (
    <section id="items-on-sale" className="py-16 lg:py-24 bg-jmoto-charcoal scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
            {t.electronicsSupply.saleSectionTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.electronicsSupply.saleSectionTitle}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t.electronicsSupply.saleSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleProducts.map((product) => {
            const productData = (t.electronicsSupply.products as any)[product.key];
            const displayPrice = product.price || productData.price || t.electronicsSupply.priceOnRequest;
            const displayStatus = productData.status || (
              productData.category?.includes("Electronics") || productData.category === "Eletrónica"
                ? t.electronicsSupply.statusAvailableOnRequest
                : t.electronicsSupply.statusAvailable
            );
            return (
              <div
                key={product.key}
                className="bg-black/50 border border-jmoto-grey/30 rounded-xl overflow-hidden hover:border-jmoto-red/40 transition-all duration-300"
              >
                {product.images ? (
                  <div className="relative group">
                    <div
                      className="relative w-full h-56 overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(product.images!, 0)}
                    >
                      <Image
                        src={product.images[0]}
                        alt={productData.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    {product.images.length > 1 && (
                      <button
                        onClick={() => openLightbox(product.images!, 0)}
                        className="absolute top-3 right-3 px-3 py-1.5 bg-black/70 hover:bg-black/90 text-white text-xs rounded-lg transition-colors flex items-center gap-1"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        {product.images.length}
                      </button>
                    )}
                    <span className="absolute top-3 left-3 px-2 py-1 bg-jmoto-red text-white text-xs font-medium rounded">
                      {t.electronicsSupply.onSaleBadge}
                    </span>
                  </div>
                ) : (
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-jmoto-red/20 rounded-lg flex items-center justify-center text-2xl">
                        {product.icon}
                      </div>
                      <span className="px-2 py-1 bg-jmoto-red/20 text-jmoto-red text-xs font-medium rounded">
                        {t.electronicsSupply.onSaleBadge}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5 pt-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {productData.name}
                  </h3>
                  <p className="text-jmoto-red text-xs font-medium mb-3">
                    {productData.category}
                  </p>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed line-clamp-3">
                    {productData.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    {product.price || productData.price ? (
                      <span className="text-white font-bold text-lg">{displayPrice}</span>
                    ) : (
                      <span className="text-white/70 text-sm">{displayPrice}</span>
                    )}
                    <span className="text-white/50 text-xs">{displayStatus}</span>
                  </div>
                  <a
                    href={`${baseWhatsAppUrl}?text=${encodeURIComponent(createProductMessage(productData.name, displayPrice))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t.electronicsSupply.orderViaWhatsApp}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <GalleryLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        title={t.electronicsSupply.saleSectionTitle}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}

function PaymentDetailsSection({ t }: { t: any }) {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-jmoto-charcoal border border-jmoto-grey/30 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              {t.electronicsSupply.paymentDetailsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <p className="text-white/50 text-xs mb-1">{t.electronicsSupply.paymentBankName}</p>
                <p className="text-white font-semibold">FNB</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <p className="text-white/50 text-xs mb-1">{t.electronicsSupply.paymentBranchCode}</p>
                <p className="text-white font-semibold">250655</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg md:col-span-2">
                <p className="text-white/50 text-xs mb-1">{t.electronicsSupply.paymentAccountName}</p>
                <p className="text-white font-semibold">JMOTO Electrical Services PTY</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg md:col-span-2">
                <p className="text-white/50 text-xs mb-1">{t.electronicsSupply.paymentAccountNumber}</p>
                <p className="text-white font-semibold text-lg">63077444304</p>
              </div>
            </div>
            <div className="border-t border-jmoto-grey/30 pt-4">
              <p className="text-white/60 text-sm mb-2">
                <span className="text-jmoto-red font-medium">*</span> {t.electronicsSupply.paymentNote}
              </p>
              <p className="text-white/50 text-sm">
                {t.electronicsSupply.paymentReference}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequestSupplySection({ t }: { t: any }) {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.electronicsSupply.requestSupplyTitle}
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            {t.electronicsSupply.requestSupplyDesc}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/27737928655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.electronicsSupply.ctaWhatsApp}
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-jmoto-red hover:bg-jmoto-red-dark text-white font-semibold rounded-lg transition-colors text-sm"
            >
              {t.electronicsSupply.ctaRequestQuote}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherServicesSection({ t }: { t: any }) {
  return (
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
  );
}