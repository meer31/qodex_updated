import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { WhyQodex } from "@/components/sections/WhyQodex";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Events } from "@/components/sections/Events";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { StrategicPartner } from "@/components/sections/StrategicPartner";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Qodex Software — Custom Software Development Company | Web, Mobile, AI & Cloud",
  description:
    "Qodex Software builds custom web applications, mobile apps, AI/ML products, SaaS platforms, and cloud solutions for startups and enterprises worldwide. Affordable. Fast. World-class quality.",
  keywords: [
    "custom software development company",
    "software development agency",
    "hire dedicated developers",
    "offshore software development company",
    "outsource software development",
    "web application development company",
    "mobile app development agency",
    "AI software development company",
    "SaaS development agency",
    "affordable software development",
    "best software development company",
    "software development for startups",
    "enterprise software development",
    "software company for small business",
    "digital product development agency",
  ],
  alternates: { canonical: "https://www.qodexsoftware.com" },
  openGraph: {
    title: "Qodex Software — Custom Software Development Company",
    description: "Build your next web app, mobile app, AI product, or SaaS with Qodex Software. Affordable rates. World-class engineering. Trusted globally.",
    url: "https://www.qodexsoftware.com",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "Qodex Software - Global Software Development Company" }],
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Qodex Software do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Qodex Software is a global software development company that builds custom web applications, mobile apps (iOS & Android), AI/ML solutions, SaaS platforms, cloud infrastructure, UI/UX designs, and chatbots for businesses worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to build a custom software product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom software development at Qodex starts from $800 for Starter projects, $1,500–$4,000 for Standard scope, and $4,000+ for enterprise-grade systems. We offer transparent, fixed-price quotes with no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "Can Qodex Software work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We work with clients in the USA, UK, UAE, Canada, Australia, Germany, Singapore, and beyond. Our team communicates in English and works across time zones. We accept payments in USD, GBP, EUR, and AED.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Qodex Software use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use React, Next.js, Node.js, Python, Django, Flutter, Swift, Kotlin, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS, TensorFlow, and more — always choosing the right stack for your product.",
        },
      },
      {
        "@type": "Question",
        name: "How long does software development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on scope: small projects take 1–4 weeks, medium projects 4–10 weeks, and complex enterprise systems 10+ weeks. We provide a clear timeline and milestones before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I outsource software development to Qodex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Qodex offers world-class engineering at a fraction of the cost of US or UK agencies — without sacrificing quality, communication, or delivery speed. You get a dedicated team, full transparency, and results-driven development.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build mobile apps for both iOS and Android?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We develop native iOS apps (Swift/SwiftUI), native Android apps (Kotlin), and cross-platform apps using Flutter — delivering one codebase that works on both platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer UI/UX design services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our design team offers end-to-end UI/UX design including user research, wireframing, prototyping, design systems, and handoff-ready Figma files for both web and mobile products.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qodexsoftware.com" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TechStack />
          <Services />
          <WhyQodex />
          <About />
          <Portfolio />
          <Process />
          <Events />
          <Achievements />
          <Testimonials />
          <StrategicPartner />
          <WhyPartner />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
