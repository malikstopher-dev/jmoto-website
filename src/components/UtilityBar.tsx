"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function UtilityBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-jmoto-black border-b border-jmoto-steel/30 text-xs relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+27737928655"
            className="text-white/50 hover:text-white transition-colors hidden sm:inline-flex items-center gap-1.5"
          >
            <svg className="w-3 h-3 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            ZA: 073 792 8655
          </a>
          <a
            href="tel:+25856276827"
            className="text-white/50 hover:text-white transition-colors hidden sm:inline-flex items-center gap-1.5"
          >
            <svg className="w-3 h-3 text-jmoto-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            MZ: +258 5627 6827
          </a>
        </div>

        <div className="flex items-center gap-1 bg-jmoto-steel/40 rounded overflow-hidden">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
              language === "en"
                ? "bg-jmoto-red text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("pt")}
            className={`px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
              language === "pt"
                ? "bg-jmoto-red text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            PT
          </button>
        </div>
      </div>
    </div>
  );
}
