"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", type: "route" },
  { name: "Services", href: "/services", type: "route" },
  { name: "About", href: "/about", type: "route" },
  { name: "Portfolio", href: "/portfolio", type: "route" },
  { name: "Pricing", href: "/pricing", type: "route" },
  { name: "Contact Us", href: "/#contact", type: "anchor" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href) && href !== "/";
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <header className="fixed top-5 left-0 right-0 z-50 px-3 hidden md:flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between w-full max-w-[1300px] px-5 py-3 rounded-full"
          style={{
            background: "rgba(235, 238, 245, 0.97)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
           <div className="w-12 h-12 rounded-lg overflow-hidden shadow group-hover:shadow-blue-300/50 transition-shadow duration-300 flex-shrink-0">
  <img
    src="/QLogo.png"
    alt="Qodex Logo"
    className="w-full h-full object-contain"
  />
</div>
            <span className="font-bold text-base tracking-tight text-[#1058a8]">
              Qodex <span className="text-[#1058a8]">Software</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#1058a8] bg-white shadow-sm"
                      : "text-slate-600 hover:text-[#1058a8] hover:bg-white/70"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-[#1058a8] hover:bg-white/70 transition-all duration-200"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <a
            href="/#contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-2xl text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00c6ff 0%, #0099cc 100%)",
              boxShadow: "0 2px 16px rgba(0,198,255,0.35)",
            }}
          >
            Book a Meeting
          </a>
        </motion.div>
      </header>

      {/* Mobile Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 px-3 flex md:hidden justify-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between w-full px-4 py-3 rounded-full"
          style={{
            background: "rgba(235, 238, 245, 0.97)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow flex-shrink-0">
  <img
    src="/QLogo.png"
    alt="Qodex Logo"
    className="w-full h-full object-contain"
  />
</div>
            <span className="font-bold text-sm tracking-tight text-[#1a2340]">
              Qodex <span className="text-[#1058a8]">Software</span>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-slate-600 hover:bg-white transition-colors shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl shadow-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(235, 238, 245, 0.98)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex flex-col p-3 gap-1">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#1058a8] bg-white shadow-sm"
                        : "text-slate-600 hover:text-[#1058a8] hover:bg-white/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-[#1058a8] hover:bg-white/70 transition-colors"
                  >
                    {link.name}
                  </a>
                )
              )}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 w-full py-3 rounded-xl text-white text-sm font-bold text-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #00c6ff 0%, #0099cc 100%)",
                }}
              >
                Book a Meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}