"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Star, Building2 } from "lucide-react";
import { pricingData } from "@/data/pricing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const tierConfig = {
  starter: {
    icon: Zap,
    badge: "Starter",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-600",
    borderIdle: "border-slate-200",
    borderHover: "hover:border-slate-300",
    accentBg: "#f6f9fe",
    accentColor: "#1058a8",
    headerBg: "bg-[#f6f9fe]",
    checkColor: "#1058a8",
    btnClass:
      "border-2 border-[#1058a8] text-[#1058a8] hover:bg-[#1058a8] hover:text-white",
  },
  premium: {
    icon: Star,
    badge: "Most Popular",
    badgeBg: "bg-[#1058a8]",
    badgeText: "text-white",
    borderIdle: "border-[#1058a8]",
    borderHover: "",
    accentBg: "#0b1d4e",
    accentColor: "#ffffff",
    headerBg: "",
    checkColor: "#7dd3fc",
    btnClass: "bg-white text-[#1058a8] hover:bg-blue-50",
  },
  custom: {
    icon: Building2,
    badge: "Enterprise",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-700",
    borderIdle: "border-slate-200",
    borderHover: "hover:border-violet-300",
    accentBg: "#faf7ff",
    accentColor: "#7c3aed",
    headerBg: "bg-[#faf7ff]",
    checkColor: "#7c3aed",
    btnClass:
      "border-2 border-violet-500 text-violet-600 hover:bg-violet-600 hover:text-white",
  },
};

export default function PricingClient() {
  const [activeService, setActiveService] = useState(0);
  const current = pricingData[activeService];

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: "#000" }}
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-15 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">
              Transparent Pricing
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Simple, Honest
              <br />
              <span className="text-[#7dd3fc]">Pricing</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              No retainer surprises. No hidden fees. Pick the package that fits
              your stage and upgrade any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-[72px] z-40">
        <div className="container mx-auto px-3 max-w-[1300px]">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {pricingData.map((sp, i) => (
              <button
                key={sp.serviceSlug}
                onClick={() => setActiveService(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeService === i
                    ? "bg-[#1058a8] text-white shadow-md"
                    : "text-slate-500 hover:text-[#1058a8] hover:bg-blue-50"
                }`}
              >
                {sp.serviceTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-[#f6f9fe] relative flex-1">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service heading */}
              <div className="text-center mb-12">
                <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">
                  Pricing
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-[#0b1d4e] leading-tight">
                  {current.serviceTitle}
                </h2>
                <Link href={`/services/${current.serviceSlug}`}>
                  <span className="inline-flex items-center gap-1.5 text-[#1058a8] font-semibold text-sm mt-3 cursor-pointer hover:underline">
                    View service details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>

              {/* 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {current.packages.map((pkg) => {
                  const cfg = tierConfig[pkg.tier];
                  const TierIcon = cfg.icon;
                  const isPremium = pkg.tier === "premium";

                  return (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={`relative rounded-2xl border-2 overflow-hidden flex flex-col shadow-sm ${
                        isPremium
                          ? "border-[#1058a8] shadow-xl shadow-blue-100 scale-[1.02]"
                          : `${cfg.borderIdle} ${cfg.borderHover} bg-white hover:shadow-lg transition-shadow duration-300`
                      }`}
                      style={isPremium ? { background: "radial-gradient(ellipse 130% 100% at 50% 0%, #7dd3fc 0%, #1a7ec8 40%, #1058a8 65%, #1058a8 100%)" } : {}}
                    >
                      {/* Header */}
                      <div
                        className={`p-8 pb-6 ${isPremium ? "" : cfg.headerBg}`}
                      >
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                              isPremium
                                ? "bg-white/20 border border-white/30"
                                : ""
                            }`}
                            style={
                              !isPremium
                                ? {
                                    backgroundColor: `${cfg.accentColor}15`,
                                    border: `1.5px solid ${cfg.accentColor}30`,
                                  }
                                : {}
                            }
                          >
                            <TierIcon
                              className="w-5 h-5"
                              style={{
                                color: isPremium ? "#fff" : cfg.accentColor,
                              }}
                            />
                          </div>
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${cfg.badgeBg} ${cfg.badgeText}`}
                          >
                            {cfg.badge}
                          </span>
                        </div>

                        <div className="mb-1">
                          <span
                            className={`text-3xl font-black ${
                              isPremium ? "text-white" : "text-[#0b1d4e]"
                            }`}
                          >
                            {pkg.price}
                          </span>
                          <span
                            className={`text-sm ml-2 font-medium ${
                              isPremium ? "text-white/60" : "text-slate-400"
                            }`}
                          >
                            {pkg.priceNote}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-bold mt-1 mb-2 ${
                            isPremium ? "text-white" : "text-[#0b1d4e]"
                          }`}
                        >
                          {pkg.name}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            isPremium ? "text-white/65" : "text-slate-500"
                          }`}
                        >
                          {pkg.tagline}
                        </p>

                        <div
                          className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                            isPremium
                              ? "bg-white/15 text-white/80"
                              : "text-slate-500 bg-slate-100"
                          }`}
                        >
                          ⏱ {pkg.deliveryTime}
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        className={`mx-8 h-px ${
                          isPremium ? "bg-white/15" : "bg-slate-100"
                        }`}
                      />

                      {/* Features */}
                      <div className={`flex-1 p-8 pt-6 ${isPremium ? "" : "bg-white"}`}>
                        <ul className="space-y-3.5">
                          {pkg.features.map((feat, fi) => (
                            <li key={fi} className="flex items-start gap-3">
                              <CheckCircle2
                                className="w-4.5 h-4.5 flex-shrink-0 mt-0.5"
                                style={{
                                  color: isPremium ? "#7dd3fc" : cfg.checkColor,
                                  width: "18px",
                                  height: "18px",
                                }}
                              />
                              <span
                                className={`text-sm leading-relaxed ${
                                  isPremium ? "text-white/80" : "text-slate-600"
                                }`}
                              >
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className={`p-8 pt-4 ${isPremium ? "" : "bg-white"}`}>
                        <a
                          href="/#contact"
                          className={`block w-full py-3.5 rounded-full text-center font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${cfg.btnClass}`}
                        >
                          {pkg.cta} →
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Flexible Billing</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1d4e] mb-4">Hourly Rates</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Need specific roles on-demand? Hire our engineers, designers, and specialists by the hour fully integrated into your team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { role: "Junior Developer", range: "$15 – $25", unit: "/hr", desc: "Frontend or backend support, bug fixes, feature tasks", color: "#1058a8" },
              { role: "Mid-Level Developer", range: "$25 – $35", unit: "/hr", desc: "Full-stack features, API development, integrations", color: "#1a7ec8" },
              { role: "Senior Developer", range: "$35 – $50", unit: "/hr", desc: "Architecture, complex systems, technical leadership", color: "#0d9488" },
              { role: "UI/UX Designer", range: "$15 – $25", unit: "/hr", desc: "Wireframes, prototypes, design systems, user research", color: "#7c3aed" },
              { role: "DevOps / Cloud Engineer", range: "$15 – $25", unit: "/hr", desc: "CI/CD pipelines, AWS/GCP/Azure, infrastructure-as-code", color: "#0369a1" },
              { role: "AI / ML Engineer", range: "$20 – $35", unit: "/hr", desc: "Model training, NLP, computer vision, ML integrations", color: "#4f46e5" },
              { role: "Project Manager", range: "$25 – $40", unit: "/hr", desc: "Sprint planning, stakeholder comms, delivery tracking", color: "#b45309" },
              { role: "Technical Architect", range: "$30 – $50", unit: "/hr", desc: "System design, ADRs, tech stack decisions, code reviews", color: "#dc2626" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}12`, border: `1.5px solid ${item.color}25` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: item.color }}>{item.role}</p>
                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className="text-2xl font-black text-[#0b1d4e]">{item.range}</span>
                  <span className="text-slate-400 text-sm font-medium ml-1">{item.unit}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-2xl p-7 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-5"
            style={{ background: "linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)" }}
          >
            <div>
              <p className="font-bold text-[#0b1d4e] text-lg mb-1">Minimum engagement: 5 hours/week</p>
              <p className="text-slate-500 text-sm">Rates are billed in weekly blocks. Discounts available for 30+ hr/week or 2+ month engagements.</p>
            </div>
            <a
              href="/#contact"
              className="flex-shrink-0 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1058a8] to-[#1a7ec8] text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Get a Rate Card →
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ / trust strip */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-3 max-w-[1300px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "No Hidden Fees",
                body: "The price you see is the price you pay. Scope changes are discussed and quoted transparently before any extra work begins.",
              },
              {
                title: "Flexible Payment",
                body: "We offer milestone-based payment for all packages — typically 50% upfront and 50% on delivery, or agreed sprints.",
              },
              {
                title: "Not Sure Which?",
                body: "Book a free 30-minute call with our team. We'll scope your project and recommend the right package — no pressure.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#1058a8]" />
                </div>
                <h4 className="font-bold text-[#0b1d4e] mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)",
        }}
      >
        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Ready to Get a Custom Quote?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Tell us about your project and we'll send you a detailed proposal
              within 24 hours. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-9 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
              >
                Get a Free Quote →
              </a>
              <Link href="/services">
                <span className="px-9 py-4 rounded-full border-2 border-white/35 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer inline-flex items-center gap-2">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
