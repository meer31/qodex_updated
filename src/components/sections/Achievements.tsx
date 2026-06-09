"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Trophy, Award, Star, Zap } from "lucide-react";

type AchievementItem = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  year: string;
  description: string;
  icon: React.ElementType;
  accent: string;
};

const achievements: AchievementItem[] = [
  {
    type: "image",
    src: "/Professional Poster Celebrating Engineering Achievement.png",
    title: "Most Innovative Idea Award",
    category: "Industry Award",
    year: "2024",
    description: "First Place Award for Most Innovative Idea at the Optica Fest 2026.",
    icon: Trophy,
    accent: "#f59e0b",
  },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
  //   title: "Top 10 Global Tech Startups",
  //   category: "Forbes Recognition",
  //   year: "2024",
  //   description: "Named among Forbes' Top 10 Global Tech Startups reshaping software development.",
  //   icon: Star,
  //   accent: "#8b5cf6",
  // },
  // {
  //   type: "video",
  //   src: "https://www.w3schools.com/html/mov_bbb.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85",
  //   title: "ISO 27001 Certification",
  //   category: "Security Excellence",
  //   year: "2023",
  //   description: "Achieved gold-standard information security certification, trusted by enterprise clients worldwide.",
  //   icon: Award,
  //   accent: "#10b981",
  // },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
  //   title: "100+ Projects Delivered",
  //   category: "Milestone",
  //   year: "2023",
  //   description: "Crossed the landmark of 100 successful product launches across 30+ countries.",
  //   icon: Zap,
  //   accent: "#3b82f6",
  // },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85",
  //   title: "Best Workplace Culture",
  //   category: "HR Excellence",
  //   year: "2023",
  //   description: "Awarded by Great Place to Work® for our exceptional team culture and growth environment.",
  //   icon: Trophy,
  //   accent: "#ec4899",
  // },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1200&q=85",
  //   title: "$5M Seed Funding Closed",
  //   category: "Business Milestone",
  //   year: "2022",
  //   description: "Secured seed funding from leading global VCs to accelerate our AI platform expansion.",
  //   icon: Star,
  //   accent: "#f97316",
  // },
];

export function Achievements() {
  const [lightbox, setLightbox] = useState<AchievementItem | null>(null);

  return (
    <section id="achievements" className="py-24 md:py-36 relative overflow-hidden" style={{ background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}>
      {/* SV city lights background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=30"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-3">Our Track Record</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-5">Awards & <span className="text-[#4da6f5]">Achievements</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Recognition that reflects our commitment to excellence, innovation, and the trust of our global clients.</p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "5+", label: "Happy Clients" },
            { value: "10+", label: "Projects Delivered" },
            { value: "2+", label: "Years of Excellence" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center py-6 px-4 rounded-2xl border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
                onClick={() => setLightbox(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail ?? item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: item.accent + "33", color: item.accent, border: `1px solid ${item.accent}55` }}>
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: item.accent + "22" }}>
                      <Icon className="w-4 h-4" style={{ color: item.accent }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: item.accent }}>{item.category}</p>
                      <h3 className="text-white font-bold text-base leading-snug">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              {lightbox.type === "video" ? (
                <video controls autoPlay className="w-full max-h-[70vh] bg-black" src={lightbox.src} />
              ) : (
                <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[70vh] object-contain bg-black" />
              )}
              <div className="bg-[#0d1b3e] px-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: lightbox.accent + "33", color: lightbox.accent, border: `1px solid ${lightbox.accent}55` }}>
                    {lightbox.category}
                  </span>
                  <span className="text-white/40 text-xs">{lightbox.year}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{lightbox.title}</h3>
                <p className="text-white/60 text-sm">{lightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
