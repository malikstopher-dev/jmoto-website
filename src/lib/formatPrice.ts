import { Language } from "./LanguageContext";

const METICAI_PER_ZAR = 4;

export function formatPrice(priceInZar: number, language: Language): string {
  if (language === "pt") {
    const meticais = priceInZar * METICAI_PER_ZAR;
    return `MT ${meticais.toLocaleString("pt-MZ")}`;
  }
  return `R ${priceInZar.toLocaleString("en-ZA")}`;
}
