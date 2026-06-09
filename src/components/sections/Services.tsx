"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TiltCard({ children, accent }: { children: React.ReactNode; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 28 });
  const springY = useSpring(y, { stiffness: 180, damping: 28 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-9deg", "9deg"]);
  const shine = useTransform(springX, [-0.5, 0.5], [`radial-gradient(circle at 0% 50%, ${accent}22 0%, transparent 65%)`, `radial-gradient(circle at 100% 50%, ${accent}22 0%, transparent 65%)`]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div ref={ref} style={{ perspective: "900px" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", position: "relative" }}
      >
        {children}
        {/* Dynamic shine layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: shine, transform: "translateZ(2px)" }}
        />
        {/* Raised top edge highlight */}
        <div
          className="absolute inset-x-4 top-0 h-px rounded-full pointer-events-none opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)`, transform: "translateZ(2px)" }}
        />
      </motion.div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0b1d4e] mb-5 leading-tight">
            Full-Spectrum Engineering
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            From pixel-perfect interfaces to battle-tested backends we own the full stack.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Link href={`/services/${service.slug}`}>
                  <TiltCard accent={service.accent}>
                    <div className="relative group p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col">
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
                      <h4 className="text-xl font-bold text-[#0b1d4e] mb-3 leading-snug">{service.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-1">{service.description}</p>
                      <div
                        className="flex items-center gap-1 text-sm font-semibold mt-auto"
                        style={{ color: service.accent }}
                      >
                        Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1058a8] to-[#1a7ec8] text-white font-bold text-base hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300"
          >
            Start a Project →
          </a>
          <Link href="/portfolio">
            <span className="px-8 py-4 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-bold text-base hover:bg-[#1058a8] hover:text-white transition-all duration-300 cursor-pointer inline-block">
              See Our Work
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
