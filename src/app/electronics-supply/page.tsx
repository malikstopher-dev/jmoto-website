import type { Metadata } from "next";
import ElectronicsSupplyClient from "./ElectronicsSupplyClient";

export const metadata: Metadata = {
  title: "Electronics & Electrical Supply | JMOTO Electrical Services",
  description: "JMOTO Electrical Services supplies electrical materials, electronics, power banks, memory cards, plugs, switches, cables, breakers, lighting and accessories for homes, businesses and project sites.",
  openGraph: {
    title: "Electronics & Electrical Supply | JMOTO Electrical Services",
    description: "JMOTO Electrical Services supplies electrical materials, electronics, power banks, memory cards, plugs, switches, cables, breakers, lighting and accessories.",
    images: [
      {
        url: "/electronics-supply/JMOTO_Electronics_Supply_Hero_Banner.png",
        width: 1920,
        height: 1080,
        alt: "JMOTO Electronics & Electrical Supply"
      }
    ]
  },
};

export default function ElectronicsSupplyPage() {
  return <ElectronicsSupplyClient />;
}