"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

type TranslationsType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationsType;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
  isHydrated: false,
});

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const savedLang = localStorage.getItem("jmoto-language");
  if (savedLang === "en" || savedLang === "pt") return savedLang;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setLanguageState(getInitialLanguage());
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("jmoto-language", lang);
  };

  const t = translations[language] as TranslationsType;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}