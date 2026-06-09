"use client";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "AWS", color: "#FF9900" },
  { name: "Flutter", color: "#02569B" },
  { name: "Next.js", color: "#000000" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "GraphQL", color: "#E10098" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "Figma", color: "#F24E1E" },
];

export function TechStack() {
  return (
    <section className="py-16 bg-[#f6f9fe] border-y border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-3 max-w-[1300px] mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-2">Our Tech Stack</p>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0b1d4e]">Technologies We Master</h3>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f6f9fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f6f9fe] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee-slow whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-[#1058a8]/30 hover:shadow-md transition-all duration-300 group cursor-default shadow-sm"
            >
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}60` }}
              />
              <span className="text-slate-600 group-hover:text-[#1058a8] font-medium text-sm transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
