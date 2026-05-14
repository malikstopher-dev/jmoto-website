import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
  minHeight?: string;
}

export default function PageBanner({ title, subtitle, image, minHeight = "min-h-[480px] lg:min-h-[540px]" }: PageBannerProps) {
  return (
    <section className={`relative bg-black overflow-hidden ${minHeight}`}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-jmoto-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-jmoto-red/3 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="max-w-lg mx-auto lg:mx-0 lg:pr-4">
                <div className="w-10 h-1 bg-jmoto-red mb-5" />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              {image && (
                <div className="relative max-w-xl mx-auto lg:ml-auto">
                  <div className="absolute -inset-3 bg-gradient-to-r from-jmoto-red/15 to-transparent rounded-3xl blur-xl" />
                  <div className="relative bg-black/80 border border-jmoto-red/30 rounded-2xl overflow-hidden">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-4 lg:p-6"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-20 bg-jmoto-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-jmoto-red p-8 sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.cta.needQuotation}
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              {t.cta.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-jmoto-red font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t.cta.requestQuote}
              </Link>
              <a
                href="https://wa.me/27737928655"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black/20 text-white font-medium rounded-lg hover:bg-black/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.cta.whatsappUs}
              </a>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -right-5 -top-5 w-24 h-24 bg-white/5 rounded-full" />
        </div>
      </div>
    </section>
  );
}

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  features: string[];
}

export function ServiceHero({ title, subtitle, features }: ServiceHeroProps) {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-jmoto-red/20 text-jmoto-red text-sm font-medium rounded-full mb-4">
              {title}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {subtitle}
            </h1>
            <ul className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-jmoto-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}