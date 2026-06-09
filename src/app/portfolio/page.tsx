import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Software Case Studies & Projects | Qodex Software",
  description:
    "Explore Qodex Software's portfolio of delivered products — fintech dashboards, healthcare apps, e-commerce platforms, LMS, logistics SaaS, and AI tools. Real results for real clients worldwide.",
  keywords: [
    "software development portfolio",
    "software case studies",
    "web app portfolio",
    "mobile app case studies",
    "fintech software development",
    "healthcare app development",
    "e-commerce platform development",
    "LMS development company",
    "logistics SaaS development",
    "AI software case study",
    "software agency portfolio",
    "SaaS case studies",
    "software development examples",
    "app development portfolio",
  ],
  alternates: { canonical: "https://www.qodexsoftware.com/portfolio" },
  openGraph: {
    title: "Portfolio — Software Projects & Case Studies | Qodex Software",
    description: "Real projects. Measurable results. See how Qodex Software builds fintech, healthcare, e-commerce, and AI products for global clients.",
    url: "https://www.qodexsoftware.com/portfolio",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function PortfolioPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qodexsoftware.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.qodexsoftware.com/portfolio" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PortfolioClient />
    </>
  );
}
