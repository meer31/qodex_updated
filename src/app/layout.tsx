import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.qodex-software.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Qodex Software — Custom Software Development Company | Mobile Apps, AI & Cloud",
    template: "%s | Qodex Software",
  },
  description:
    "Qodex Software is a global custom software development company specializing in web apps, mobile apps, AI/ML, UI/UX design, cloud DevOps, and SaaS. Affordable rates, world-class engineering. Trusted by clients in USA, UK, UAE & beyond.",
  keywords: [
    "custom software development company","software development agency","mobile app development company",
    "web application development company","software development services","hire software developers",
    "offshore software development","outsource software development","software outsourcing company",
    "dedicated development team","AI development company","machine learning development services",
    "artificial intelligence software company","Flutter app development company","iOS app development company",
    "Android app development company","cross platform app development","React development company",
    "Next.js development agency","full stack development company","SaaS development company",
    "UI UX design agency","affordable software development company","best software development company",
    "top software development agency","Qodex Software",
  ],
  authors: [{ name: "Qodex Software", url: BASE_URL }],
  creator: "Qodex Software",
  publisher: "Qodex Software",
  category: "Technology",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_US", url: BASE_URL, siteName: "Qodex Software",
    title: "Qodex Software — Custom Software Development Company",
    description: "Global software development agency delivering custom web apps, mobile apps, AI/ML, UI/UX, and cloud DevOps. Affordable rates. World-class quality.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "Qodex Software — Global Software Development Company" }],
  },
  twitter: {
    card: "summary_large_image", site: "@QodexSoftware", creator: "@QodexSoftware",
    title: "Qodex Software — Custom Software Development Company",
    description: "Global software agency: custom apps, mobile, AI/ML, cloud DevOps & SaaS. Affordable. World-class.",
    images: ["/opengraph.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "en-US": BASE_URL, "en-GB": BASE_URL, "en-AU": BASE_URL },
  },
  verification: { google: "asEDRosT3COUGPAcFXrNe7M23p4Wp1KbuRTwEEOHSTc" },
  
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "Qodex Software", alternateName: "Qodex", url: BASE_URL, logo: `${BASE_URL}/QLogo.png`,
    description: "Qodex Software is a global software development company providing custom software, mobile apps, AI/ML, UI/UX design, cloud DevOps, SaaS, and IT consulting to businesses worldwide.",
    foundingDate: "2024",
    founders: [{ "@type": "Person", name: "Zahid Ali" }, { "@type": "Person", name: "Muhammad Khalil" }],
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", email: "hello@qodexsoftware.com", availableLanguage: ["English"] },
      { "@type": "ContactPoint", contactType: "customer support", email: "support@qodexsoftware.com", availableLanguage: ["English"] },
    ],
    sameAs: [
      "https://www.linkedin.com/company/qodex-software","https://twitter.com/QodexSoftware",
      "https://www.facebook.com/QodexSoftware","https://github.com/qodexsoftware",
      "https://clutch.co/profile/qodex-software",
    ],
    areaServed: [
      { "@type": "Country", name: "United States" }, { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" }, { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" }, { "@type": "GeoShape", name: "Worldwide" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org", "@type": "WebSite",
    name: "Qodex Software", url: BASE_URL, inLanguage: "en",
    description: "Global custom software development company — web apps, mobile apps, AI/ML, DevOps, SaaS.",
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={BASE_URL} />
        <meta name="theme-color" content="#1058a8" />
        <link rel="alternate" hrefLang="en" href={BASE_URL} />
        <link rel="alternate" hrefLang="en-us" href={BASE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={BASE_URL} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
