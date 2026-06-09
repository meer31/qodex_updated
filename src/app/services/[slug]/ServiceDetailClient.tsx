"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ServiceDetailClient({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#0b1d4e] mb-4">Service Not Found</h1>
            <Link href="/services">
              <span className="text-[#1058a8] font-semibold cursor-pointer hover:underline">← Back to Services</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prev = currentIndex > 0 ? services[currentIndex - 1] : null;
  const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-28 relative overflow-hidden" style={{background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}>
        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/services">
              <span className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold mb-8 cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> All Services
              </span>
            </Link>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/55 text-xs font-bold tracking-widest uppercase mb-2">Service {service.number}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">{service.title}</h1>
              </div>
            </div>
            <p className="text-[#7dd3fc] text-xl md:text-2xl font-bold max-w-2xl mt-4">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0b1d4e] mb-6 leading-tight">What We Deliver</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{service.overview}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="grid grid-cols-2 gap-4">
              {service.outcomes.map((o, i) => (
                <div key={i} className="p-6 rounded-2xl border" style={{ borderColor: `${service.accent}25`, background: `${service.accent}06` }}>
                  <div className="text-4xl font-black mb-2" style={{ color: service.accent }}>{o.metric}</div>
                  <div className="text-slate-500 text-sm leading-snug">{o.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f6f9fe] relative">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">What's Included</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1d4e] leading-tight">Our Capabilities</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.accent }} />
                <span className="text-slate-700 text-sm font-medium leading-relaxed">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Technologies</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1d4e] leading-tight">Our Tech Stack</h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-all hover:scale-105"
                style={{ color: service.accent, borderColor: `${service.accent}35`, backgroundColor: `${service.accent}08` }}>
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}>
        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Ready to Get Started?</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">Let's scope your {service.title} project. Free technical consultation, no commitment.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#contact" className="px-9 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-300">Start a Project →</a>
              <Link href="/services"><span className="px-9 py-4 rounded-full border-2 border-white/35 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer">All Services</span></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-white border-t border-slate-100">
        <div className="container mx-auto px-3 max-w-[1300px] py-8 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/services/${prev.slug}`}><span className="flex items-center gap-2 text-[#1058a8] font-semibold hover:text-[#0b1d4e] transition-colors cursor-pointer text-sm"><ArrowLeft className="w-4 h-4" /> {prev.title}</span></Link>
          ) : <div />}
          {next ? (
            <Link href={`/services/${next.slug}`}><span className="flex items-center gap-2 text-[#1058a8] font-semibold hover:text-[#0b1d4e] transition-colors cursor-pointer text-sm">{next.title} <ArrowRight className="w-4 h-4" /></span></Link>
          ) : <div />}
        </div>
      </div>

      <Footer />
    </div>
  );
}
