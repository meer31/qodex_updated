"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Qodex Software was highly cooperative and easy to work with throughout the project. They paid great attention to detail and remained open to feedback and revisions, ensuring everything aligned perfectly with the requirements. Communication was smooth, and all changes were handled professionally. The final result not only met but exceeded expectations I would gladly collaborate with them again.",
    name: "Adeeba Kalwar",
    role: "Founder & CEO",
    company: "MilkarChalo",
    avatar: "/adeba.jpg",
    accent: "#1058a8",
  },
  {
    quote: "Excellent experience working with Qodex Software. The team delivered exactly what was promised with clear communication and on-time delivery.Even for a small AI app project, their professionalism and attention to detail stood out. The final product was clean, functional, and easy to use.Qodex Software is a reliable choice for anyone looking to build AI tools, web apps, or custom software solutions. Highly recommended, and I would definitely work with them again.",
    name: "nicholasjohn",
    role: "Founder & CEO",
    company: "ShopWave",
    avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/5b9a2827c70c8a32f7629f2045d5ff90-1763999309453/b3b28050-aa77-4420-9953-17e636baffa4.jfif",
    accent: "#1a7ec8",
  },
  {
    quote: "Qodex Software transformed our vision into a professional and engaging website. Their expertise, responsiveness, and commitment to quality exceeded our expectations. We are extremely satisfied with the results and highly recommend their services.",
    name: "Niaz Hussain",
    role: "Head of Operations",
    company: "Topper's Academy",
    avatar: "/passport.jpeg",
    accent: "#7c3aed",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-[#f6f9fe] relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0b1d4e]">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative group p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${test.accent}, transparent)` }}
              />

              <div className="absolute top-4 right-6 text-8xl font-black text-slate-100 leading-none select-none">"</div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-base leading-relaxed mb-8 italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2"
                  style={{ borderColor: test.accent + "55" }}
                />
                <div>
                  <div className="font-bold text-[#0b1d4e] text-sm">{test.name}</div>
                  <div className="text-xs text-slate-400">{test.role}, {test.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
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
            Join Our Clients →
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-bold text-base hover:bg-[#1058a8] hover:text-white transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
