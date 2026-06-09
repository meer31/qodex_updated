"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Send, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [service, setService] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
      setService("");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#f6f9fe] relative overflow-hidden">
      <div className="absolute inset-0 grid-background pointer-events-none" />
      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-widest text-[#1058a8] uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1058a8] via-[#1058a8] to-[#1a7ec8]">
            Let's Build Something Remarkable
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Tell us about your project and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="lg:col-span-3 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1058a8] mb-3">Message Sent!</h3>
                <p className="text-slate-500 mb-6">We'll be in touch within 24 hours.</p>
                <button onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full border-2 border-[#1058a8] text-[#1058a8] font-semibold text-sm hover:bg-[#1058a8] hover:text-white transition-all">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name *</label>
                    <Input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                      className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 h-12 focus:border-[#1058a8]/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address *</label>
                    <Input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@company.com"
                      className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 h-12 focus:border-[#1058a8]/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company</label>
                  <Input name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 h-12 focus:border-[#1058a8]/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Project Type</label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-800 h-12 focus:border-[#1058a8]/50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-200">
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="ai">AI / Machine Learning</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="devops">Cloud & DevOps</SelectItem>
                      <SelectItem value="saas">SaaS Development</SelectItem>
                      <SelectItem value="chatbot">Chatbot Development</SelectItem>
                      <SelectItem value="other">Other / Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Tell Us About Your Project *</label>
                  <Textarea name="message" value={form.message} onChange={handleChange} required
                    placeholder="Describe your project, goals, and timeline..."
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 min-h-[130px] resize-none focus:border-[#1058a8]/50" />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full h-12 text-lg font-bold rounded-xl text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#1058a8] to-[#1a7ec8] hover:shadow-lg hover:shadow-blue-200 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100">
                  {status === "loading" ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: Mail, label: "Email Us", value: "theqodexsoftware@gmail.com", href: "mailto:theqodexsoftware@gmail.com", color: "#1058a8" },
              { icon: FaWhatsapp, label: "WhatsApp", value: "+92 311 0233091", href: "https://wa.me/923110233091", color: "#16a34a" },
              { icon: FaLinkedin, label: "LinkedIn", value: "Qodex Software", href: "https://www.linkedin.com/company/qodexsoftware", color: "#0077b5" },
              { icon: MapPin, label: "Location", value: "Moro, Pakistan", href: null, color: "#1a7ec8" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null, color: "#7c3aed" },
            ].map((item, i) => {
              const Icon = item.icon;
              const Inner = (
                <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}12`, border: `1.5px solid ${item.color}30` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">{item.label}</div>
                    <div className="font-semibold text-[#1058a8] group-hover:text-[#1a7ec8] transition-colors">{item.value}</div>
                  </div>
                </div>
              );
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}>
                  {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{Inner}</a> : Inner}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
