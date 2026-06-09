"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "End-to-End Partnership",
    subtitle: "From whiteboard to live product — we own it all.",
    body: "Most agencies hand you a Figma file and disappear. We don't. Qodex embeds at every stage of your product lifecycle — discovery, architecture, design, engineering, QA, deployment, and beyond. We maintain your systems, iterate on your product, and scale your infrastructure as your business grows. One partner. Zero handoff friction. Total accountability.",
    bullets: [
      "Product discovery & technical scoping",
      "Architecture design & system planning",
      "Agile development with weekly demos",
      "DevOps, CI/CD & cloud infrastructure",
      "Post-launch support & iterative growth",
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
    accent: "#1058a8",
    flip: false,
  },
  {
    number: "02",
    title: "Deep Expertise, Broad Horizon",
    subtitle: "Specialists in every dimension. Generalists in vision.",
    body: "We've built fintech dashboards, healthcare platforms, AI engines, SaaS marketplaces, and logistics systems — each one demanding a different depth of expertise. Our team combines vertical specialists with cross-domain architects who connect the dots between your industry's nuances and the best of modern engineering practice.",
    bullets: [
      "AI/ML, NLP & intelligent automation",
      "Web, mobile & cross-platform engineering",
      "Cloud-native & microservices architecture",
      "Data engineering & business intelligence",
      "UX research-led interface design",
    ],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=85",
    accent: "#1a7ec8",
    flip: true,
  },
  {
    number: "03",
    title: "Operational Excellence",
    subtitle: "Predictability is our competitive advantage.",
    body: "Missed deadlines, scope creep, and silent bugs are symptoms of poor engineering discipline. We've institutionalized processes that eliminate them: sprint-level velocity tracking, automated test coverage gates, architecture decision records, and proactive risk surfacing. You always know where your product stands.",
    bullets: [
      "Sprint-level delivery tracking & KPIs",
      "Automated test coverage & code quality gates",
      "Architecture Decision Records (ADRs)",
      "Real-time project dashboards",
      "SLA-backed response and escalation protocols",
    ],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=85",
    accent: "#0d2154",
    flip: false,
  },
];

export function WhyPartner() {
  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-4">Partnership</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0b1d4e] leading-tight mb-5">
            Why Partner with<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1058a8] to-[#1a7ec8]">
              Qodex Software
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            There are thousands of software agencies. There are very few true engineering partners. Here's the difference we bring — in detail.
          </p>
        </motion.div>

        <div className="space-y-24">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${reason.flip ? "lg:flex lg:flex-row-reverse" : ""}`}
            >
              {/* Text side */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-4xl font-black leading-none select-none"
                    style={{ color: `${reason.accent}18` }}
                  >
                    {reason.number}
                  </span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <h3 className="text-3xl md:text-3xl font-black text-[#0b1d4e] mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-base font-semibold mb-5" style={{ color: reason.accent }}>
                  {reason.subtitle}
                </p>
                <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">{reason.body}</p>

                <ul className="space-y-3">
                  {reason.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: reason.accent }}
                      />
                      <span className="text-slate-700 text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side — real image */}
              <div className={reason.flip ? "lg:mr-0 lg:order-first" : ""}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={reason.img}
                    alt={reason.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(160deg, ${reason.accent}cc 0%, ${reason.accent}55 40%, rgba(0,0,0,0.15) 100%)` }}
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="text-[120px] font-black leading-none select-none text-white/10">
                      {reason.number}
                    </div>
                    <div className="space-y-2.5">
                      {reason.bullets.map((b, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + j * 0.06 }}
                          className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                          <span className="text-white text-sm font-medium">{b}</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-auto flex-shrink-0 text-white/50" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#1058a8] to-[#1a7ec8] text-white font-bold text-base hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300"
          >
            Start the Partnership →
          </a>
          <a
            href="#services"
            className="px-9 py-4 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-bold text-base hover:bg-[#1058a8] hover:text-white transition-all duration-300"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
