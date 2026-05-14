"use client";

import { useState } from "react";
import PageBanner from "@/components/PageComponents";
import { useLanguage } from "@/lib/LanguageContext";

export default function QuotePage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: t.quote.southAfrica,
    location: "",
    service: "",
    propertyType: "",
    details: "",
    contactMethod: "Phone",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `${t.prefilledMessage}

${t.quote.fullName}: ${formData.name}
${t.quote.phone}: ${formData.phone}
${t.quote.email}: ${formData.email}
${t.quote.country}: ${formData.country}
${t.quote.location}: ${formData.location}
${t.quote.serviceNeeded}: ${formData.service}
${t.quote.propertyType}: ${formData.propertyType}
${t.quote.projectDetails}: ${formData.details}
${t.quote.contactMethod}: ${formData.contactMethod}`;

    const whatsappUrl = `https://wa.me/27737928655?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    t.services.electrical.title,
    t.services.solar.title,
    t.services.cctv.title,
    t.services.inverter.title,
    t.services.battery.title,
    t.services.training.title,
    t.nav.getAQuote,
  ];

  const propertyTypes = [
    { value: "Home", label: "Home" },
    { value: "Business", label: "Business" },
    { value: "Shop", label: "Shop" },
    { value: "Office", label: "Office" },
    { value: "Farm", label: "Farm" },
    { value: "Industrial", label: "Industrial" },
    { value: "Other", label: "Other" },
  ];

  const contactMethods = ["Phone", "WhatsApp", "Email"];

  return (
    <>
      <PageBanner
        title={t.nav.getAQuote}
        subtitle={t.quote.bannerSubtitle}
        image="/banners/JMOTO_Banner_Request_Quote.png"
      />

      <section className="py-16 lg:py-24 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-jmoto-charcoal rounded-2xl p-8 lg:p-12 border border-jmoto-grey">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.quote.title}
            </h2>
            <p className="text-white/60 mb-8">
              {t.quote.description}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    {t.quote.fullName} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-jmoto-red transition-colors"
                    placeholder={t.quote.fullName}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                    {t.quote.phone} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-jmoto-red transition-colors"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    {t.quote.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-jmoto-red transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-white/80 text-sm font-medium mb-2">
                    {t.quote.country} *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white focus:outline-none focus:border-jmoto-red transition-colors"
                  >
                    <option value={t.quote.southAfrica}>{t.quote.southAfrica}</option>
                    <option value={t.quote.mozambique}>{t.quote.mozambique}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-white/80 text-sm font-medium mb-2">
                  {t.quote.location} *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-jmoto-red transition-colors"
                  placeholder={t.quote.locationPlaceholder}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white/80 text-sm font-medium mb-2">
                    {t.quote.serviceNeeded} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white focus:outline-none focus:border-jmoto-red transition-colors"
                  >
                    <option value="">{t.quote.selectService}</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-white/80 text-sm font-medium mb-2">
                    {t.quote.propertyType} *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white focus:outline-none focus:border-jmoto-red transition-colors"
                  >
                    <option value="">{t.quote.selectProperty}</option>
                    {propertyTypes.map((pt) => (
                      <option key={pt.value} value={pt.value}>
                        {pt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-white/80 text-sm font-medium mb-2">
                  {t.quote.projectDetails}
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-jmoto-grey border border-jmoto-grey-light rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-jmoto-red transition-colors resize-none"
                  placeholder={t.quote.projectDetailsPlaceholder}
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  {t.quote.contactMethod} *
                </label>
                <div className="flex flex-wrap gap-4">
                  {contactMethods.map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        className="w-4 h-4 text-jmoto-red bg-jmoto-grey border-jmoto-grey-light focus:ring-jmoto-red"
                      />
                      <span className="text-white/70 text-sm">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-jmoto-red hover:bg-jmoto-red-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.quote.submitWhatsApp}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-jmoto-grey">
              <p className="text-white/50 text-sm text-center mb-4">
                {t.quote.orContact}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:jqmmoto@gmail.com"
                  className="px-4 py-2 bg-jmoto-grey hover:bg-jmoto-grey-light text-white text-sm rounded-lg transition-colors"
                >
                  {t.quote.emailUs}
                </a>
                <a
                  href="mailto:jmario.moto@gmail.com"
                  className="px-4 py-2 bg-jmoto-grey hover:bg-jmoto-grey-light text-white text-sm rounded-lg transition-colors"
                >
                  {t.quote.alternativeEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}