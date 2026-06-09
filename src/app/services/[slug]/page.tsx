import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Qodex Software" };

  const keywordMap: Record<string, string[]> = {
    "custom-software-development": ["custom software development company","bespoke software development","enterprise software development","web application development company","software development agency","hire software developers","outsource software development","full stack development company"],
    "mobile-app-development": ["mobile app development company","iOS app development","Android app development","Flutter app development company","cross platform app development","hire mobile app developers","mobile application development services","app development agency"],
    "ui-ux-design": ["UI UX design agency","user experience design company","product design agency","web design company","app design services","UX design services","Figma design agency","user interface design company"],
    "cloud-infrastructure-devops": ["cloud infrastructure services","DevOps consulting company","AWS development services","cloud migration services","Kubernetes consulting","Docker deployment services","CI CD pipeline setup","DevOps as a service"],
    "ai-machine-learning": ["AI development company","machine learning services","artificial intelligence development","NLP development services","computer vision development","AI consulting company","deep learning development","ML model development"],
    "it-consulting-strategy": ["IT consulting services","digital transformation services","technology consulting company","IT strategy consulting","software architecture consulting","CTO as a service","startup tech consulting"],
    "saas-product-development": ["SaaS development company","SaaS product development","custom SaaS development","SaaS startup development","cloud SaaS development","B2B SaaS development","SaaS platform development"],
    "data-analytics-bi": ["data analytics services","business intelligence development","BI dashboard development","data engineering services","Power BI development","Tableau development","data pipeline development"],
    "chatbot-development": ["chatbot development company","AI chatbot development","WhatsApp chatbot development","conversational AI development","chatbot integration services","GPT chatbot development","enterprise chatbot development"],
  };

  return {
    title: `${service.title} Services — Affordable & Expert | Qodex Software`,
    description: `${service.tagline} — ${service.overview?.slice(0, 120)}...`,
    keywords: keywordMap[slug] || [],
    alternates: { canonical: `https://www.qodexsoftware.com/services/${slug}` },
    openGraph: {
      title: `${service.title} — Qodex Software`,
      description: service.tagline,
      url: `https://www.qodexsoftware.com/services/${slug}`,
      images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qodexsoftware.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.qodexsoftware.com/services" },
      { "@type": "ListItem", position: 3, name: service?.title || "Service", item: `https://www.qodexsoftware.com/services/${slug}` },
    ],
  };

  const serviceSchema = service ? {
    "@context": "https://schema.org", "@type": "Service",
    name: service.title, description: service.overview,
    url: `https://www.qodexsoftware.com/services/${slug}`,
    provider: { "@type": "Organization", name: "Qodex Software", url: "https://www.qodexsoftware.com" },
    areaServed: [
      { "@type": "Country", name: "United States" }, { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" }, { "@type": "Country", name: "Australia" },
      { "@type": "GeoShape", name: "Worldwide" },
    ],
    offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "800", highPrice: "15000", offerCount: "3" },
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />}
      <ServiceDetailClient params={{ slug }} />
    </>
  );
}
