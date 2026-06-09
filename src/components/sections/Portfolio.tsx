"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";

const projects = [
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
    title: "EduPortal",
    description: "Comprehensive LMS with live classes, progress tracking, and automated grading for academies.",
    tag: "LMS Platform",
    photo: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    mockupBg: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    accent: "#065f46",
    challenge: "An EdTech academy with 8,000 enrolled students was running live classes through Zoom, managing assignments via email, and tracking progress on spreadsheets — a setup that was failing at scale.",
    solution: "We built a purpose-designed LMS with live class streaming, a quiz and assignment engine with auto-grading, AI-generated progress reports, and a parent dashboard — all on a multi-tenant architecture.",
    results: ["8,000 students migrated in 2 weeks", "Instructor admin time cut by 60%", "Quiz auto-grading accuracy at 99.2%", "Student completion rate up from 41% to 73%"],
    tech: ["React", "Django", "PostgreSQL", "AWS MediaLive", "OpenAI API", "Celery", "Docker"],
  },
  {
    title: "LogiDesk",
    description: "End-to-end logistics management SaaS with live shipment tracking, route optimization, and driver apps.",
    tag: "SaaS Platform",
    photo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    mockupBg: "linear-gradient(135deg, #92400e 0%, #f59e0b 100%)",
    accent: "#b45309",
    challenge: "A regional logistics company managing 200+ daily deliveries was operating entirely on WhatsApp groups and spreadsheets, resulting in missed deliveries, zero route efficiency, and no customer visibility.",
    solution: "We designed and delivered a full-stack logistics SaaS: a React ops dashboard, a Flutter driver app with offline GPS tracking, Google Maps route optimization, and automated customer SMS/WhatsApp alerts.",
    results: ["Delivery success rate improved to 97.4%", "Fuel costs reduced by 28% via route optimization", "Driver app rated 4.9★ internally", "Customer dispute tickets down by 82%"],
    tech: ["React", "Flutter", "Node.js", "Google Maps API", "Twilio", "MongoDB", "Docker"],
  },
  {
    title: "TalentAI",
    description: "AI recruitment platform that automates CV screening, candidate ranking, and interview scheduling.",
    tag: "AI Platform",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    mockupBg: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)",
    accent: "#4338ca",
    challenge: "An HR consultancy processing 3,000+ applications per month was spending 60% of recruiter time on manual CV screening — with inconsistent quality and a 14-day average time-to-shortlist.",
    solution: "We built an NLP-driven screening engine that parses CVs, ranks candidates against job requirements using semantic matching, and auto-schedules interviews via Google Calendar integration — all behind a clean recruiter dashboard.",
    results: ["Time-to-shortlist cut from 14 days to 6 hours", "Recruiter screening time reduced by 85%", "Candidate quality scores improved by 40%", "Integrated with 4 major ATS platforms"],
    tech: ["React", "FastAPI", "spaCy", "OpenAI", "PostgreSQL", "Google Calendar API", "AWS"],
  },
];

export function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);
  const proj = selected !== null ? projects[selected] : null;

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#f6f9fe] relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0b1d4e]">Work We're Proud Of</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/portfolio">
              <span className="flex items-center gap-2 text-[#1058a8] hover:text-[#0b1d4e] font-semibold transition-colors group cursor-pointer">
                View All Case Studies
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelected(projects.indexOf(project))}
            >
              <div
                className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-slate-200 group-hover:border-slate-300 group-hover:shadow-xl transition-all duration-300"
                
              >
                <img
                  src={project.photo}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-45 transition-opacity duration-500 group-hover:scale-105 transform"
                />

                <div className="absolute inset-0 bg-[#0b1d4e]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1058a8] to-[#1a7ec8] text-white font-bold text-base hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300">
            Start Your Project →
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-bold text-base hover:bg-[#1058a8] hover:text-white transition-all duration-300">
            Get a Free Quote
          </a>
        </motion.div>
      </div>

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
              <div className="relative h-56 rounded-t-3xl overflow-hidden flex-shrink-0" style={{ background: proj.mockupBg }}>
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
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-full text-xs font-bold border"
                          style={{ color: proj.accent, borderColor: `${proj.accent}30`, backgroundColor: `${proj.accent}08` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
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
    </section>
  );
}
