"use client";
import { motion } from "framer-motion";
import { Zap, Globe2, ShieldCheck, TrendingUp, Layers, Users } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Velocity Without Compromise",
    body: "We ship production-grade software at startup speed. Rigorous engineering discipline meets relentless execution — no tech debt, no excuses.",
  },
  {
    icon: Globe2,
    title: "Global-Standard Engineering",
    body: "Our architecture patterns, code reviews, and deployment pipelines are benchmarked against the best engineering orgs in the world. Built in Pakistan. Built for everywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Mentality",
    body: "We don't just execute tickets. We co-own your product's success — from the first discovery call to post-launch scale, we think like founders, not vendors.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Driven Development",
    body: "Every feature we ship is tied to a business metric. We obsess over the numbers that matter to you — conversion, retention, CAC, LTV — and engineer toward them.",
  },
  {
    icon: Layers,
    title: "Full-Stack Depth",
    body: "Frontend finesse. Backend horsepower. Cloud infrastructure. AI integration. One team that owns the entire stack means no gaps, no finger-pointing, no coordination tax.",
  },
  {
    icon: Users,
    title: "Embedded Partnership",
    body: "We plug directly into your workflow — your Slack, your sprints, your standups. Transparent communication, real-time visibility, and zero information asymmetry.",
  },
];

export function StrategicPartner() {
  return (
    <section
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0b1d4e 0%, transparent 18%, transparent 82%, #0b1d4e 100%)" }} />
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,126,200,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,88,168,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">Strategic Partnership</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight mb-6">
            Your Strategic Partner in<br />
            <span className="text-[#7dd3fc]">Digital Transformation</span> & Innovation
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The best technology companies in the world don't just hire vendors — they find engineering partners who are as invested in the outcome as they are. That's exactly what Qodex is built to be.
          </p>
        </motion.div>

        {/* Big statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mb-20 p-10 md:p-14 rounded-3xl border border-white/15 text-center overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(26,126,200,0.12) 0%, transparent 60%)" }} />
          <blockquote className="relative z-10 text-2xl md:text-3xl lg:text-3xl font-black text-white leading-snug max-w-4xl mx-auto">
            "We don't build software for you.{" "}
            <span className="text-[#7dd3fc]">We build it with you</span> — as your technical co-founders, your architecture board, and your most obsessive quality gatekeepers."
          </blockquote>
          <p className="relative z-10 mt-6 text-white/50 font-semibold tracking-widest text-xs uppercase">
            — The Qodex Philosophy
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative p-7 rounded-2xl border border-white/12 hover:border-white/25 transition-all duration-300 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(26,126,200,0.12) 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/12 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 leading-snug">{pillar.title}</h4>
                  <p className="text-white/62 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/12 mb-16"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "10+", label: "Projects Shipped" },
            { value: "98%", label: "Client Retention Rate" },
            { value: "4.9★", label: "Average Client Rating" },
            { value: "24h", label: "Response Guarantee" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
              <span className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</span>
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-9 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
          >
            Become a Partner →
          </a>
          <a
            href="#portfolio"
            className="px-9 py-4 rounded-full border-2 border-white/35 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            See What We've Built
          </a>
        </motion.div>
      </div>
    </section>
  );
}
