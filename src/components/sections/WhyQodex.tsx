"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { CheckCircle2, Zap, Shield, Users } from "lucide-react";

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered", icon: CheckCircle2, color: "#1058a8" },
  { value: 5, suffix: "+", label: "Happy Clients", icon: Users, color: "#1a7ec8" },
  { value: 2,  suffix: "+", label: "Years of Excellence", icon: Zap, color: "#7c3aed" },
  { value: 100, suffix: "%", label: "On-Time Delivery", icon: Shield, color: "#0d9488" },
];

const highlights = [
  "Agile-first development with 2-week sprint cycles",
  "Dedicated technical project manager on every engagement",
  "Rigorous QA with 95%+ test coverage standards",
  "Post-launch support and continuous optimization",
];

export function WhyQodex() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden" style={{background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0b1d4e 0%, transparent 20%, transparent 80%, #0b1d4e 100%)" }} />
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">Why Qodex</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Vision.<br />Our Craft.<br />
              <span className="text-[#7dd3fc]">
                Zero Compromise.
              </span>
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              We don't just write code — we engineer solutions. Integrating agile methodologies, rigorous quality assurance, and cutting-edge technology, we ensure your product is built to perform, scale, and dominate in the market.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white text-[#1058a8] font-bold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
              >
                Start a Project →
              </a>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-bold text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* SV-style office photo */}
            <div className="relative rounded-2xl overflow-hidden h-52 border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85"
                alt="Qodex office"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(16,88,168,0.55) 0%, rgba(11,29,78,0.3) 100%)" }} />
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-bold text-lg leading-tight">Where precision meets innovation.</p>
                <p className="text-white/60 text-sm">San Francisco standard. Global reach.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="relative p-8 rounded-2xl border border-white/15 hover:border-white/30 hover:bg-white/10 transition-all duration-300 overflow-hidden group"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
                >
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-5xl font-black mb-2 leading-none text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-medium text-white/55 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
