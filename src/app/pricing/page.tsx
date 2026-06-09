import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Software Development Pricing — Affordable Packages for Startups & Enterprises | Qodex Software",
  description:
    "Transparent software development pricing by Qodex Software. Starter from $800, Standard from $1,500, Premium enterprise packages available. Custom web apps, mobile apps, AI/ML, UI/UX, and DevOps. No hidden fees.",
  keywords: [
    "software development cost",
    "how much does software development cost",
    "software development pricing",
    "affordable software development",
    "software development packages",
    "mobile app development cost",
    "web app development pricing",
    "custom software development price",
    "outsource software development cost",
    "offshore development rates",
    "software development hourly rate",
    "cheap software development agency",
    "cost effective app development",
    "software development budget",
  ],
  alternates: { canonical: "https://www.qodexsoftware.com/pricing" },
  openGraph: {
    title: "Affordable Software Development Pricing — Qodex Software",
    description: "Transparent pricing for custom software, mobile apps, AI/ML, UI/UX. Starter from $800. No hidden fees. Global delivery.",
    url: "https://www.qodexsoftware.com/pricing",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qodexsoftware.com" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.qodexsoftware.com/pricing" },
    ],
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development Services — Pricing",
    provider: { "@type": "Organization", name: "Qodex Software", url: "https://www.qodexsoftware.com" },
    areaServed: "Worldwide",
    offers: [
      { "@type": "Offer", name: "Starter", price: "800", priceCurrency: "USD", description: "Small scope, basic features, 1–4 weeks delivery." },
      { "@type": "Offer", name: "Standard", price: "1500", priceCurrency: "USD", description: "Medium scope, core + advanced features, 4–10 weeks, 3 revisions." },
      { "@type": "Offer", name: "Premium", price: "4000", priceCurrency: "USD", description: "Full scope, complex integrations, ongoing support." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <PricingClient />
    </>
  );
}
