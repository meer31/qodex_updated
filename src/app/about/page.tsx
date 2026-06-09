import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Qodex Software — Global Software Development Agency | Our Team & Mission",
  description:
    "Learn about Qodex Software — a global software development agency built by engineers, delivering world-class digital products for startups and enterprises. Meet our team of developers, designers, and AI experts.",
  keywords: [
    "about Qodex Software",
    "software development company about us",
    "global software agency team",
    "software development company mission",
    "offshore development team",
    "dedicated software developers",
    "software engineering company",
    "tech agency about us",
    "software startup team",
    "software company founders",
  ],
  alternates: { canonical: "https://www.qodexsoftware.com/about" },
  openGraph: {
    title: "About Qodex Software — Global Software Development Agency",
    description: "Meet the engineers and designers behind Qodex Software — delivering world-class digital products for global clients.",
    url: "https://www.qodexsoftware.com/about",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qodexsoftware.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.qodexsoftware.com/about" },
    ],
  };

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Qodex Software",
    url: "https://www.qodexsoftware.com/about",
    description: "Qodex Software is a global software development agency engineering world-class digital products for businesses across USA, UK, UAE, Canada, Australia and beyond.",
    mainEntity: {
      "@type": "Organization",
      name: "Qodex Software",
      foundingDate: "2024",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "10+" },
      areaServed: "Worldwide",
      member: [
        { "@type": "Person", name: "Zahid Ali", jobTitle: "CEO & Founder" },
        { "@type": "Person", name: "Muhammad Khalil", jobTitle: "CTO & Co-Founder" },
        { "@type": "Person", name: "Fateh Muhammad", jobTitle: "Head of Design" },
        { "@type": "Person", name: "Abdul Samad", jobTitle: "Head of AI & ML" },
        { "@type": "Person", name: "Faizan Ali", jobTitle: "Head of Engineering" },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <AboutClient />
    </>
  );
}
