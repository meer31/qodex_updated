"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, lazy, Suspense } from "react";

const ThreeOrb = lazy(() => import("@/components/ui/ThreeOrb").then(m => ({ default: m.ThreeOrb })));

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    // Reduced from 60 to 35 particles for performance
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const COUNT = 35;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < COUNT; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.4 + 0.1 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`; ctx.fill();
      });
      // Only draw lines for close particles — skip O(n²) for far ones
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const slides = [
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=75", alt: "Data center servers" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=75", alt: "Digital Earth network" },
  { src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=75", alt: "Blockchain network" },
  { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=75", alt: "AI visualization" },
  { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=75", alt: "Developer code" },
];

const words = ["Scales.", "Delivers.", "Wins."];

function TypingWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);
  return (
    <span className="text-[#7dd3fc]">{displayed}<span className="opacity-70 animate-pulse">|</span></span>
  );
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [orbLoaded, setOrbLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    // Delay loading the heavy ThreeOrb until after first paint
    const orbTimer = setTimeout(() => setOrbLoaded(true), 800);
    return () => { clearInterval(timer); clearTimeout(orbTimer); };
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* ThreeOrb — lazy loaded after first paint */}
      {orbLoaded && (
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-70 pointer-events-none z-[1]">
          <Suspense fallback={null}>
            <ThreeOrb />
          </Suspense>
        </div>
      )}

      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            // Only eagerly load first slide
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding={i === 0 ? "sync" : "async"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(0,0,0,0.35) 100%)" }} />
        <ParticleCanvas />
      </div>

      <div className="container mx-auto px-6 max-w-[1300px] relative z-10 flex flex-col items-center text-center pt-8">
       

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.05]"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
          We Build Software<br />That <TypingWord />
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm md:text-xl text-white mb-10 max-w-2xl leading-relaxed px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 font-bold"
          style={{ textShadow: "0 1px 15px rgba(0,0,0,0.6)" }}>
          Qodex Software delivers end-to-end AI-powered digital products from strategy and design to engineering and deployment. Precision-crafted for global visionaries.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a href="#contact" className="group flex items-center gap-2 px-8 py-4 bg-white text-[#1058a8] font-bold rounded-full text-lg hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105">
            Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
            See Our Work
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-2 mb-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className="transition-all duration-500 rounded-full focus:outline-none"
              style={{ width: i === current ? "28px" : "8px", height: "8px", backgroundColor: i === current ? "white" : "rgba(255,255,255,0.35)" }} />
          ))}
        </motion.div>
      </div>

      <motion.a href="#services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-white transition-colors z-10">
        <span className="text-xs tracking-widest uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
