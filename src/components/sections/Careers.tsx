"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

const jobs = [
  { title: "Full Stack Engineer", type: "Full-time", location: "Remote", department: "Engineering", accent: "#1058a8" },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", department: "Design", accent: "#7c3aed" },
  { title: "AI/ML Engineer", type: "Full-time", location: "Remote", department: "Engineering", accent: "#1a7ec8" },
];

const perks = ["Remote-first culture", "Competitive salaries", "Learning budget", "Meaningful work"];

export function Careers() {
  return (
    <section id="careers" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-4">Careers</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1d4e] mb-6 leading-tight">
              Build the Future<br />With Us
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              We are a team of relentless problem solvers, designers, and engineers. We believe in high agency, continuous learning, and shipping products that matter. If you want to do the best work of your career, join us.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1058a8] flex-shrink-0" />
                  {perk}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-semibold hover:bg-[#1058a8] hover:text-white transition-all duration-300 group"
            >
              View All Openings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-lg font-bold text-[#0b1d4e]">{job.title}</h4>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: job.accent }}
                    >
                      {job.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center group-hover:text-white group-hover:scale-110 transition-all duration-300"
                    style={{
                      borderColor: job.accent,
                      color: job.accent,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = job.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent"; }}
                  >
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
