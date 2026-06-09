import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Software Development Services — Web, Mobile, AI, Cloud & SaaS | Qodex Software",
  description:
    "Explore Qodex Software's full range of services: custom software development, mobile app development, UI/UX design, AI & ML, cloud DevOps, SaaS, data analytics, chatbots, and IT consulting. Global delivery.",
  keywords: [
    "software development services",
    "custom software development services",
    "mobile app development services",
    "UI UX design services",
    "AI machine learning services",
    "cloud DevOps services",
    "SaaS product development",
    "chatbot development services",
    "IT consulting services",
    "data analytics services",
    "web app development services",
    "software development for startups",
    "software development for enterprises",
    "outsourced software development services",
    "dedicated software development team",
    "offshore development services",
  ],
  alternates: { canonical: "https://www.qodexsoftware.com/services" },
  openGraph: {
    title: "Software Development Services — Qodex Software",
    description: "Full-spectrum software services: custom dev, mobile apps, AI/ML, UI/UX, cloud, SaaS & more. Global delivery, affordable rates.",
    url: "https://www.qodexsoftware.com/services",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qodexsoftware.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.qodexsoftware.com/services" },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Services by Qodex Software",
    description: "Complete range of software development and technology services offered by Qodex Software to global clients.",
    url: "https://www.qodexsoftware.com/services",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Custom Software Development", description: "Scalable, secure web and enterprise software tailored to your business.", url: "https://www.qodexsoftware.com/services/custom-software-development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Mobile App Development", description: "Native iOS, Android, and Flutter cross-platform mobile apps.", url: "https://www.qodexsoftware.com/services/mobile-app-development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "UI/UX Design & Prototyping", description: "User-centered design, wireframes, prototypes, and design systems.", url: "https://www.qodexsoftware.com/services/ui-ux-design", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "Cloud Infrastructure & DevOps", description: "AWS, Docker, Kubernetes, CI/CD, and cloud architecture.", url: "https://www.qodexsoftware.com/services/cloud-infrastructure-devops", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "AI & Machine Learning", description: "Custom AI models, NLP, computer vision, and ML pipelines.", url: "https://www.qodexsoftware.com/services/ai-machine-learning", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "IT Consulting & Digital Strategy", description: "Technology roadmaps and digital transformation for global businesses.", url: "https://www.qodexsoftware.com/services/it-consulting-strategy", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 7, item: { "@type": "Service", name: "SaaS Product Development", description: "End-to-end SaaS platforms built to scale globally.", url: "https://www.qodexsoftware.com/services/saas-product-development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 8, item: { "@type": "Service", name: "Data Analytics & Business Intelligence", description: "BI dashboards, data pipelines, and actionable analytics.", url: "https://www.qodexsoftware.com/services/data-analytics-bi", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 9, item: { "@type": "Service", name: "Chatbot Development", description: "AI-powered chatbots and conversational agents for web and mobile.", url: "https://www.qodexsoftware.com/services/chatbot-development", areaServed: "Worldwide" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <ServicesClient />
    </>
  );
}
