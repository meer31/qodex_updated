"use client";
import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube2, Rocket } from "lucide-react";

const processSteps = [
  {
    num: "01", icon: Search,
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, target audience, and technical requirements to form a comprehensive product roadmap.",
    accent: "#1058a8",
  },
  {
    num: "02", icon: Palette,
    title: "Design & Prototyping",
    desc: "Crafting intuitive interfaces and interactive prototypes that validate the user experience before a single line of code is written.",
    accent: "#1a7ec8",
  },
  {
    num: "03", icon: Code2,
    title: "Development & Engineering",
    desc: "Agile sprints of scalable, secure code. We build the architecture and features that power your platform to global scale.",
    accent: "#7c3aed",
  },
  {
    num: "04", icon: TestTube2,
    title: "QA & Testing",
    desc: "Rigorous automated and manual testing ensures your product is bug-free, high-performance, and battle-hardened for production.",
    accent: "#0d9488",
  },
  {
    num: "05", icon: Rocket,
    title: "Launch & Ongoing Support",
    desc: "Seamless deployment to production, followed by continuous monitoring, updates, and proactive optimization.",
    accent: "#0369a1",
  },
];

function OrbitIcon({ icon: Icon, accent, delay }: { icon: React.ElementType; accent: string; delay: number }) {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center" style={{ perspective: "400px" }}>
      {/* Outer orbit ring — tilted in 3D */}
      <motion.div
        className="absolute inset-[-8px] rounded-full border"
        style={{
          borderColor: `${accent}55`,
          rotateX: "65deg",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 8 + delay, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dot */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full -top-[5px] left-1/2 -translate-x-1/2 shadow-lg"
          style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
        />
      </motion.div>

      {/* Inner orbit ring — different speed/tilt */}
      <motion.div
        className="absolute inset-[4px] rounded-full border"
        style={{
          borderColor: `${accent}30`,
          rotateX: "60deg",
          rotateZ: "45deg",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateZ: [45, 45 - 360] }}
        transition={{ duration: 6 + delay * 0.5, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute w-1.5 h-1.5 rounded-full -top-[3px] left-1/2 -translate-x-1/2"
          style={{ backgroundColor: `${accent}cc` }}
        />
      </motion.div>

      {/* Icon circle */}
      <motion.div
        className="relative w-28 h-28 rounded-full flex items-center justify-center border-2 border-white/30 z-10"
        style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", boxShadow: `0 4px 30px rgba(0,0,0,0.2), 0 0 20px ${accent}33` }}
        whileHover={{ scale: 1.08, boxShadow: `0 8px 40px rgba(0,0,0,0.3), 0 0 30px ${accent}66` }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon className="w-10 h-10 text-white" />
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-white/30 shadow-md z-20">
          <span className="text-xs font-black text-[#1058a8]">{/* num injected via props */}</span>
        </div>
      </motion.div>
    </div>
  );
}

export function Process() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden" style={{background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0b1d4e 0%, transparent 20%, transparent 80%, #0b1d4e 100%)" }} />
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

      {/* 3D floating geometric decorations */}
      <div className="absolute top-12 left-12 w-32 h-32 pointer-events-none opacity-20" style={{ perspective: "300px" }}>
        <motion.div
          className="w-full h-full border border-white/40 rounded-lg"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-16 right-16 w-24 h-24 pointer-events-none opacity-15" style={{ perspective: "300px" }}>
        <motion.div
          className="w-full h-full border border-white/30 rotate-45"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [0, -360], rotateZ: [45, 45 + 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white">How We Work</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* 3D orbiting icon */}
                  <div className="relative w-28 h-28 flex items-center justify-center mb-6" style={{ perspective: "400px" }}>
                    {/* Outer orbit ring */}
                    <motion.div
                      className="absolute inset-[-8px] rounded-full border"
                      style={{ borderColor: `${step.accent}66`, rotateX: "65deg" }}
                      animate={{ rotateZ: 360 }}
                      transition={{ duration: 8 + index, repeat: Infinity, ease: "linear" }}
                    >
                      <div
                        className="absolute w-2.5 h-2.5 rounded-full -top-[5px] left-1/2 -translate-x-1/2 shadow-lg"
                        style={{ backgroundColor: step.accent, boxShadow: `0 0 8px ${step.accent}` }}
                      />
                    </motion.div>

                    {/* Inner orbit ring */}
                    <motion.div
                      className="absolute inset-[4px] rounded-full border"
                      style={{ borderColor: `${step.accent}33`, rotateX: "58deg", rotateZ: "45deg" }}
                      animate={{ rotateZ: [45, 45 - 360] }}
                      transition={{ duration: 5.5 + index * 0.6, repeat: Infinity, ease: "linear" }}
                    >
                      <div
                        className="absolute w-1.5 h-1.5 rounded-full -top-[3px] left-1/2 -translate-x-1/2"
                        style={{ backgroundColor: `${step.accent}bb` }}
                      />
                    </motion.div>

                    {/* Icon circle */}
                    <motion.div
                      className="relative w-28 h-28 rounded-full flex items-center justify-center border-2 border-white/30 z-10"
                      style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", boxShadow: `0 4px 30px rgba(0,0,0,0.2), 0 0 20px ${step.accent}44` }}
                      whileHover={{ scale: 1.1, boxShadow: `0 8px 40px rgba(0,0,0,0.3), 0 0 35px ${step.accent}77` }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-white/30 shadow-md z-20">
                        <span className="text-xs font-black text-[#1058a8]">{step.num}</span>
                      </div>
                    </motion.div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 leading-snug">{step.title}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
          >
            Start the Process →
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            View Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
