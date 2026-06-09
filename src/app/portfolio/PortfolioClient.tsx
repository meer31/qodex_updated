"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const projects = [
  {
    title: "FinTrack",
    description: "Real-time dashboard for financial analytics, portfolio management, and predictive insights.",
    tag: "Web Application",
    photo: "Fintech Dashboard.png",
    
    accent: "#1058a8",
    challenge: "A fintech startup needed a unified platform to aggregate data from 12+ broker APIs, visualize real-time market movements, and generate AI-driven portfolio risk reports — all within a sub-second response window.",
    solution: "We built a WebSocket-driven React dashboard backed by a Node.js microservices architecture. A custom data-normalization layer harmonized feeds from disparate broker APIs, while a TensorFlow model scored portfolio risk in real time.",
    results: ["68% reduction in data processing latency", "12 broker APIs integrated seamlessly", "40% increase in user session duration", "Launched to 5,000+ users in week one"],
    tech: ["React", "Node.js", "WebSocket", "TensorFlow", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "QodexHealth",
    description: "Mobile app for seamless patient-doctor appointment booking and integrated telehealth consultations.",
    tag: "Mobile App",
    photo: "/Health.png",
   
    accent: "#0369a1",
    challenge: "A hospital network with 3+ clinics needed a unified patient-facing mobile app to replace a fragmented booking system causing 35% appointment no-show rates and zero digital telehealth capability.",
    solution: "We delivered a cross-platform Flutter app with real-time slot availability, push notification reminders, in-app video consultations via WebRTC, and deep integration with the hospital's HIS backend.",
    results: ["No-show rate dropped from 35% to 9%", "Video consultations live in 8 weeks", "4.8★ rating on App Store & Play Store", "30,000+ appointments booked in month one"],
    tech: ["Flutter", "Dart", "WebRTC", "Firebase", "Node.js", "PostgreSQL", "HL7 FHIR"],
  },
  {
    title: "Buyora",
    description: "AI-powered e-commerce platform with dynamic product recommendations and smart inventory management.",
    tag: "Mobile App",
    photo: "/Ecommerce.jpeg",
 
    accent: "#5b21b6",
    challenge: "A growing D2C brand was losing revenue to cart abandonment and manual inventory decisions. They needed an intelligent e-commerce engine that could personalize at scale and automate restocking logic.",
    solution: "We engineered a Next.js storefront with a custom collaborative-filtering recommendation engine, real-time inventory forecasting using Prophet, and a Stripe-integrated checkout flow with smart upsell triggers.",
    results: ["22% lift in average order value", "Cart abandonment reduced by 31%", "Inventory stockouts down by 74%", "3× faster page loads vs. previous store"],
    tech: ["Next.js", "Python", "Prophet", "Stripe", "Elasticsearch", "Redis", "GCP"],
  },
  {
    title: "Topper's Acadmy",
    description: "A modern educational platform designed to help students access quality learning resources, expert guidance, and exam preparation tools.It streamlines the learning journey through an engaging and user-friendly digital experience.",
    tag: "LMS Platform",
    photo: "/Accadmy.png",

    accent: "#065f46",
    challenge: "An EdTech academy with 1,000 enrolled students was Helping students achieve top results through structured learning, expert guidance, and consistent practice.",
    solution: "We built a purpose-designed LMS with live class streaming, a quiz and assignment engine with auto-grading, AI-generated progress reports, and a parent dashboard — all on a multi-tenant architecture.",
    results: ["1,000 students migrated in 1 weeks", "Instructor admin time cut by 60%", "Quiz auto-grading accuracy at 99.2%", "Student completion rate up from 41% to 73%"],
    tech: ["React", "Django", "PostgreSQL", "AWS MediaLive", "OpenAI API", "Celery", "Docker"],
  },
  {
    title: "MilkarChalo",
    description: "A smart transportation platform that connects riders with nearby drivers for safe and affordable travel.The app offers real-time ride tracking, fare estimation, and secure payment integration.",
    tag: "SaaS Platform",
    photo: "/ride sharing app.png",
   
    accent: "#b45309",
    challenge: "Providing safe, affordable, and efficient transportation while connecting riders and drivers in real time.",
    solution: "A ride-sharing mobile application that enables users to book rides instantly, track drivers in real time, calculate fares automatically, and manage secure in-app payments.",
    results: ["Faster ride booking", "improved transportation accessibility", "reduced waiting time", "a reliable platform for both riders and drivers."],
    tech: ["React", "Flutter", "Node.js", "Google Maps API", "Twilio", "MongoDB", "Docker"],
  },
  {
    title: "Ai Summerize app",
    description: "An AI-powered application that transforms lengthy documents, articles, and reports into concise and meaningful summaries.",
    tag: "AI Platform",
    photo: "/Ai Summerize app.png",

    accent: "#4338ca",
    challenge: "Processing lengthy documents, articles, and reports can be time-consuming, making it difficult for users to extract key insights quickly.",
    solution: "An AI-powered summarization app that instantly converts long-form content into concise, accurate, and easy-to-understand summaries.",
    results: ["Reduced reading time", "improved productivity", "faster information consumption", "enhanced decision-making through actionable insights."],
    tech: ["React", "FastAPI", "spaCy", "OpenAI", "PostgreSQL", "Google Calendar API", "AWS"],
  },
   {
    title: "QuickBite",
    description: "A convenient food ordering application that connects users with restaurants and delivers meals quickly and efficiently.The platform simplifies menu browsing, order placement, and real-time delivery tracking.",
    tag: "Mobile App",
    photo: "/food app.jpeg",
  
    accent: "#4338ca",
    challenge: "Creating a smooth and user-friendly food ordering experience with fast browsing, easy customization, and quick checkout.",
    solution: "A modern food delivery mobile app with intuitive UI for browsing restaurants, viewing meals, customizing orders, managing cart, and secure sign-in and payment flow.",
    results: ["Faster ordering process", "improved user engagement", "simplified food discovery", "a seamless end-to-end delivery experience."],
    tech: ["React", "FastAPI", "spaCy", "OpenAI", "PostgreSQL", "Google Calendar API", "AWS"],
  },
  {
    title: "TourMate",
    description: "A travel booking platform that helps users discover destinations, compare tour packages, and plan memorable trips.",
    tag: "Mobile App",
    photo: "/Travel.jpeg",
   
    accent: "#4338ca",
    challenge: "Simplifying travel planning by making tour discovery, booking, and itinerary management more accessible and organized in one place.",
    solution: "A TravelTech tour booking application that enables users to explore destinations, compare tour packages, book trips, and manage itineraries with a seamless and user-friendly interface.",
    results: ["Improved travel planning experience", "faster booking process", "better trip organization", "increased accessibility to curated tour packages."],
    tech: ["React", "Flutter", "spaCy","PostgreSQL", "Google Map API", "AWS"],
  },
];

function MockupVisual() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-3 opacity-30">
      <div className="flex gap-2 items-center">
        <div className="w-2 h-2 rounded-full bg-white/70" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="flex-1 h-2 rounded-full bg-white/15 ml-2" />
      </div>
      <div className="flex gap-3 flex-1">
        <div className="w-1/4 rounded-lg bg-white/15 flex flex-col gap-2 p-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-1.5 rounded-full bg-white/30" style={{ width: `${50 + i * 12}%` }} />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-14 rounded-lg bg-white/15" />
          <div className="grid grid-cols-2 gap-2 flex-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-lg bg-white/15" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  const [selected, setSelected] = useState<number | null>(null);
  const proj = selected !== null ? projects[selected] : null;

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: "#000" }}
      >
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-15 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">Portfolio</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Work We're<br /><span className="text-[#7dd3fc]">Proud Of</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don't just write code we solve business problems. Here's how we've done it across industries, budgets, and timelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#f6f9fe] relative overflow-hidden">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setSelected(index)}
              >
                <div
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-slate-200 group-hover:border-slate-300 group-hover:shadow-xl transition-all duration-300"
                  
                >
                  <img
                    src={project.photo}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-45 group-hover:scale-105 transform transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-full border border-white/30 bg-white/15 text-sm">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/20 border border-white/30 backdrop-blur-sm">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#0b1d4e] mb-1.5 group-hover:text-[#1058a8] transition-colors">{project.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}
      >
        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Your Product. Next.</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Every case study above started with a conversation. Let's have ours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-9 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
              >
                Start a Project →
              </a>
              <Link href="/services">
                <span className="px-9 py-4 rounded-full border-2 border-white/35 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  Explore Services
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {proj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(11,29,78,0.75)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 rounded-t-3xl overflow-hidden" style={{ background: proj.accent + "20" }}>
                <img src={proj.photo} alt={proj.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-6 right-16">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/20 border border-white/30 backdrop-blur-sm mb-2 inline-block">
                    {proj.tag}
                  </span>
                  <h3 className="text-3xl font-black text-white">{proj.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-8">
                <p className="text-slate-500 text-base leading-relaxed mb-8">{proj.description}</p>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#1058a8] mb-3">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{proj.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#1058a8] mb-3">Our Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{proj.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#1058a8] mb-4">Results</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-3 bg-[#f6f9fe] rounded-xl p-3.5">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: proj.accent }} />
                          <span className="text-slate-700 text-sm font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#1058a8] mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-full text-xs font-bold border" style={{ color: proj.accent, borderColor: `${proj.accent}30`, backgroundColor: `${proj.accent}08` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/#contact"
                    onClick={() => setSelected(null)}
                    className="flex-1 py-3.5 rounded-full text-center font-bold text-white text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${proj.accent}, #1a7ec8)` }}
                  >
                    Start a Similar Project →
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-3.5 rounded-full border-2 text-sm font-bold transition-all duration-300 hover:bg-slate-50"
                    style={{ borderColor: `${proj.accent}50`, color: proj.accent }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
