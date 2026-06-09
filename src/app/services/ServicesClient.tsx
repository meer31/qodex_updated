"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ServicesClient() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: "#000" }}
      >
        <img
          src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-15 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">What We Do</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Full-Spectrum<br />
              <span className="text-[#7dd3fc]">Engineering Services</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From pixel-perfect interfaces to battle-tested backends we engineer everything your product needs to scale, perform, and dominate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-[#f6f9fe] relative overflow-hidden">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <div
                      className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 h-full flex flex-col"
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                        style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                      />
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${service.accent}15`, border: `1.5px solid ${service.accent}30` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: service.accent }} />
                        </div>
                        <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0b1d4e] mb-3 leading-snug">{service.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-1">{service.description}</p>
                      <div
                        className="flex items-center gap-1 text-sm font-semibold mt-auto"
                        style={{ color: service.accent }}
                      >
                        Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Tell us about your challenge. We'll scope the right solution and give you a free technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-9 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
              >
                Start a Free Consultation →
              </a>
              <Link href="/portfolio">
                <span className="px-9 py-4 rounded-full border-2 border-white/35 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center gap-2">
                  View Our Work <ArrowRight className="w-4 h-4" />
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
