import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jmoto.co.za"),
  title: {
    default: "JMOTO Electrical Services | Electrical, Solar, CCTV & Inverter Services",
    template: "%s | JMOTO Electrical Services"
  },
  description: "JMOTO Electrical Services provides electrical work, solar installations, CCTV systems, inverter support, battery backup solutions and practical technical training in South Africa and Mozambique.",
  keywords: [
    "JMOTO Electrical Services",
    "electrician in Gauteng",
    "electrical services South Africa",
    "solar installation South Africa",
    "CCTV installation South Africa",
    "inverter installation South Africa",
    "battery backup systems",
    "solar services Mozambique",
    "electrician Moamba Mozambique",
    "CCTV systems Mozambique",
    "inverter support Mozambique",
    "solar training Mozambique",
    "electrical training Mozambique"
  ],
  authors: [{ name: "JMOTO Electrical Services (PTY) Ltd" }],
  creator: "JMOTO Electrical Services",
  publisher: "JMOTO Electrical Services (PTY) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://jmoto.co.za",
    siteName: "JMOTO Electrical Services",
    title: "JMOTO Electrical Services | Electrical, Solar, CCTV & Inverter Services",
    description: "Professional electrical services, solar installations, CCTV systems, inverter support, battery backup solutions and technical training in South Africa and Mozambique.",
    images: [
      {
        url: "/banners/JMOTO_Website_Hero_Main.png",
        width: 1920,
        height: 1080,
        alt: "JMOTO Electrical Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "JMOTO Electrical Services | Electrical, Solar, CCTV & Inverter Services",
    description: "Professional electrical services, solar installations, CCTV systems, inverter support and training.",
    images: ["/banners/JMOTO_Website_Hero_Main.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician", "Service"],
  "name": "JMOTO Electrical Services (PTY) Ltd",
  "description": "Professional electrical services, solar installations, CCTV systems, inverter support, battery backup solutions and technical training.",
  "url": "https://jmoto.co.za",
  "telephone": ["+27-73-792-8655", "+258-5627-6827"],
  "email": ["jqmmoto@gmail.com", "jmario.moto@gmail.com"],
  "enterpriseNumber": "2023/694137/07",
  "taxId": "9541573201",
  "image": "https://jmoto.co.za/banners/JMOTO_Website_Hero_Main.png",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "1761 Sikhethile Street, Likole",
      "addressLocality": "Gauteng",
      "addressRegion": "GP",
      "postalCode": "",
      "addressCountry": "ZA"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Condene, Moamba",
      "addressLocality": "Moamba",
      "addressRegion": "",
      "postalCode": "",
      "addressCountry": "MZ"
    }
  ],
  "areaServed": [
    {
      "@type": "State",
      "name": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Moamba",
      "addressCountry": "MZ"
    },
    {
      "@type": "Country",
      "name": "South Africa"
    },
    {
      "@type": "Country",
      "name": "Mozambique"
    }
  ],
  "serviceType": [
    "Electrical Services",
    "Solar Installation",
    "CCTV Systems",
    "Inverter Solutions",
    "Battery Backup",
    "Technical Training"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-13:00",
  "sameAs": []
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}