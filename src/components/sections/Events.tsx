"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Calendar, MapPin } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

const events: MediaItem[] = [
  {
    type: "image",
    src: "/Gemini_Generated_Image_lw7h56lw7h56lw7h.png",
    title: "Gen-Z Talk 2025",
    date: "November 2025",
    location: "Nawabshah, PK",
    description: "Gen-Z Talk was a panel discussion led by industry minded builders including our Founder & CEO Mr. Zahid Ali, alongside fellow software engineering peers to give junior engineers real clarity on",
  },
  {
    type: "image",
    src: "/qodex_event_collage.jpg",
    title: "OP Expo 2026",
    date: "February 2026",
    location: "Nawabshah, PK",
    description: "From ideas to impact — Qodex Software at OP Expo.Connecting with innovators, guiding students, and building future-ready digital solutions.",
  },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=85",
  //   title: "Dev Workshop Series",
  //   date: "July 2024",
  //   location: "New York, USA",
  //   description: "Hands-on workshops empowering teams with cutting-edge engineering practices.",
  // },
  // {
  //   type: "video",
  //   src: "https://www.w3schools.com/html/mov_bbb.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=85",
  //   title: "Tech Conference Highlight Reel",
  //   date: "May 2024",
  //   location: "Singapore",
  //   description: "Watch the highlights from our biggest international conference of 2024.",
  // },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1200&q=85",
  //   title: "Startup Pitch Night",
  //   date: "March 2024",
  //   location: "Berlin, Germany",
  //   description: "Supporting the next generation of visionary founders and entrepreneurs.",
  // },
  // {
  //   type: "image",
  //   src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85",
  //   title: "Team Offsite & Hackathon",
  //   date: "January 2024",
  //   location: "Bali, Indonesia",
  //   description: "A full week of innovation, collaboration, and team-building at its finest.",
  // },
];

export function Events() {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  return (
    <section id="events" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Where We Show Up</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0b1d4e] mb-5">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1058a8] to-[#1a7ec8]">Moments</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">follow our journey and the communities we build.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-slate-300 hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1"
              onClick={() => setLightbox(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.thumbnail ?? item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-[#0b1d4e] font-bold text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-3 leading-relaxed line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-4 text-slate-400 text-xs">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
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
                <h3 className="text-white font-bold text-xl mb-1">{lightbox.title}</h3>
                <p className="text-white/60 text-sm mb-2">{lightbox.description}</p>
                <div className="flex items-center gap-4 text-white/40 text-xs">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{lightbox.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{lightbox.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
