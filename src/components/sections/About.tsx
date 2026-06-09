"use client";
import { motion } from "framer-motion";
import { Target, Compass, Gem } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    label: "Our Vision",
    title: "Fortune 500 Intelligence for Everyone",
    body: "To become the defining AI software partner for service-based businesses globally — where every school, clinic, and business runs with Fortune 500 intelligence.",
    values: null,
    accent: "#1058a8",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Eliminate Operational Friction",
    body: "To engineer precision-built AI platforms that eliminate operational friction, automate manual workflows, and give service businesses the tools to scale efficiently.",
    values: null,
    accent: "#1a7ec8",
  },
  {
    icon: Gem,
    label: "Our Values",
    title: "Principles We Won't Compromise On",
    body: null,
    values: [
      { bold: "Precision", rest: "over speed." },
      { bold: "Ownership", rest: "over excuses." },
      { bold: "Clarity", rest: "over complexity." },
      { bold: "Engineering integrity", rest: "and client-first thinking in everything we do." },
    ],
    accent: "#7c3aed",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0b1d4e] leading-tight">
            Engineered For Impact
          </h2>
        </motion.div>

        {/* Team photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full rounded-3xl overflow-hidden mb-14 h-56 md:h-72"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85"
            alt="Qodex team collaboration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(11,29,78,0.7) 0%, rgba(11,29,78,0.1) 50%, rgba(11,29,78,0.6) 100%)" }} />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
              <p className="text-white text-2xl md:text-3xl font-black leading-tight max-w-sm">
                A crew of builders, obsessed with craft.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${pillar.accent}, transparent)` }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${pillar.accent}12`, border: `1.5px solid ${pillar.accent}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: pillar.accent }} />
                </div>

                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2 block"
                  style={{ color: pillar.accent }}
                >
                  {pillar.label}
                </span>

                <h4 className="text-xl font-bold text-[#0b1d4e] mb-4 leading-snug">{pillar.title}</h4>

                {pillar.body && (
                  <p className="text-slate-500 leading-relaxed">{pillar.body}</p>
                )}
                {pillar.values && (
                  <ul className="space-y-3">
                    {pillar.values.map((v, i) => (
                      <li key={i} className="text-slate-500">
                        <span className="font-bold text-[#0b1d4e]">{v.bold}</span> {v.rest}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1058a8] to-[#1a7ec8] text-white font-bold text-base hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300"
          >
            Work With Us →
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-bold text-base hover:bg-[#1058a8] hover:text-white transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
