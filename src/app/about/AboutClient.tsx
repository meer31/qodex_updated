"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Compass, Gem, Zap, ShieldCheck, Users, Globe2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const values = [
  { icon: Zap, title: "Precision Over Speed", body: "We move fast — but never at the cost of correctness. Every system we ship is engineered to the standard we'd build for ourselves.", accent: "#1058a8" },
  { icon: ShieldCheck, title: "Ownership Over Excuses", body: "When something goes wrong, we own it immediately and fix it completely. No deflection, no finger-pointing — just accountability and action.", accent: "#1a7ec8" },
  { icon: Globe2, title: "Clarity Over Complexity", body: "Great engineering is about making hard things simple. We communicate, architect, and document with radical clarity so nothing gets lost in translation.", accent: "#7c3aed" },
  { icon: Users, title: "Client-First, Always", body: "Your success is literally our business model. We're not satisfied when we ship — we're satisfied when your product moves the metrics that matter to you.", accent: "#0d9488" },
];

const team = [
  { name: "Zahid Ali", role: "CEO & Founder", bio: "Building technology ventures that solve real-world problems, with a focus on innovation, growth, and creating meaningful digital experiences.",  accent: "#1058a8" ,avatar: "/Black Simple Minimalist Professional Corporate Facebook Profile Picture.png",},
  { name: "Muhammd Khalil", role: "CTO & Co-Founder", bio: "Passionate about turning ambitious ideas into scalable products through cutting-edge technology and strong engineering leadership.", accent: "#1a7ec8" ,avatar: "/MK.jpg",},
  { name: "Fateh Muhammad", role: "Head of Design", bio: "Human-centered design thinker who has led UX for fintech, healthcare, and enterprise products. Design systems are his love language.",  accent: "#7c3aed" ,avatar: "/FM.jpg",},
  { name: "Abuld Samad", role: "Head of AI & ML", bio: "AI researcher turned product engineer. Built NLP and computer vision systems across three industries. Believes AI belongs in production, not notebooks.",  accent: "#4f46e5" ,avatar: "/AS.jpg", },
  { name: "Faizan Ali", role: "Head of Engineering", bio: "Full-stack architect with an obsession for performance, test coverage, and code reviews that actually improve the codebase.",  accent: "#0284c7" ,avatar: "/ad.jpg",},
  { name: "Farhan Ali", role: "Head of Client Success", bio: "Your direct line to the team. Ensures every delivery is on time, on brief, and above expectations and that you never feel left in the dark.", accent: "#0d9488",avatar: "/ad.jpg", },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-28 relative overflow-hidden"
        style={{ background: "#000" }}
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-15 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">Who We Are</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Engineered<br /><span className="text-[#7dd3fc]">For Impact</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We're a precision-engineering studio based in Pakistan, building world-class digital products for visionary founders and global businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1d4e] mb-6 leading-tight">
                Built by engineers.<br />Run like a product company.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Qodex Software was founded on a simple but urgent thesis: the global market for great software is enormous, but the supply of engineering partners who actually care about business outcomes is tiny.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                We're based in Pakistan — a country with world-class engineering talent — and we build products that compete with the best from Silicon Valley, London, and Singapore. Not because we're cheaper, but because we're better.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Every product we've shipped has been the result of treating our clients' businesses like our own — with the same urgency, scrutiny, and pride we'd apply if our names were on the door.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "50+", label: "Products Shipped" },
                { value: "98%", label: "Client Retention" },
                { value: "30+", label: "Team Members" },
                { value: "15+", label: "Countries Served" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl text-center border border-slate-200 bg-[#f6f9fe]"
                >
                  <div className="text-4xl font-black text-[#1058a8] mb-2">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Qodex */}
      <section
        className="py-24 relative overflow-hidden"
        style={{background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}
      >
        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-white/55 uppercase mb-4">Why Qodex</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              The Qodex Difference
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We're not the largest studio. We're the most deliberate one. Here's what that means in practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Compass,
                title: "Embedded, Not Outsourced",
                body: "We join your team — your Slack, your sprints, your standups. You get the expertise of a world-class studio with the availability of an in-house team.",
              },
              {
                icon: Target,
                title: "Outcome-Oriented",
                body: "We don't celebrate shipping. We celebrate results. Every sprint is tied to business metrics, and we hold ourselves accountable to the numbers that move your business.",
              },
              {
                icon: Gem,
                title: "Engineering Integrity",
                body: "We write code we're proud to sign our names to. Architecture decisions, code reviews, test coverage, documentation — we do it right because we have to live with it.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-white/15"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#f6f9fe] relative">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1d4e] leading-tight">
              Principles We Won't<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1058a8] to-[#1a7ec8]">Compromise On</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${val.accent}, transparent)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${val.accent}12`, border: `1.5px solid ${val.accent}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: val.accent }} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0b1d4e] mb-3">{val.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{val.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 grid-background pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-4">The People</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1d4e] leading-tight">Meet the Team</h2>
            <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">The experts behind every product we ship. Experienced, accountable, and invested in your success.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${member.accent}, transparent)` }}
                />
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${member.accent}, ${member.accent}99)` }}
                  >
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      member.avatar
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-[#0b1d4e] text-lg leading-tight">{member.name}</div>
                    <div className="text-sm font-semibold" style={{ color: member.accent }}>{member.role}</div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 130% 100% at 50% 50%, #7dd3fc 0%, #1a7ec8 38%, #1058a8 65%, #1058a8 100%)" }}
      >
        <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
        <div className="container mx-auto px-3 max-w-[1300px] relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Ready to Build Together?</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              We'd love to hear about your project. Let's get on a call and figure out the best path forward — together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-9 py-4 rounded-full bg-white text-[#1058a8] font-bold text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
              >
                Start a Project →
              </a>
              <Link href="/services">
                <span className="px-9 py-4 rounded-full border-2 border-white/35 text-white font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  Explore Services
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
