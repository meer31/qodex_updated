"use client";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const footerLinks = {
  Services: [
    { label: "Custom Software Dev", href: "/services/custom-software-development", type: "route" },
    { label: "Mobile Apps", href: "/services/mobile-app-development", type: "route" },
    { label: "UI/UX Design", href: "/services/ui-ux-design", type: "route" },
    { label: "AI & Machine Learning", href: "/services/ai-machine-learning", type: "route" },
    { label: "Cloud & DevOps", href: "/services/cloud-infrastructure-devops", type: "route" },
  ],
  Company: [
    { label: "About Us", href: "/about", type: "route" },
    { label: "Portfolio", href: "/portfolio", type: "route" },
    { label: "All Services", href: "/services", type: "route" },
    { label: "Contact", href: "/#contact", type: "anchor" },
  ],
  Resources: [
    { label: "Case Studies", href: "/portfolio", type: "route" },
    { label: "SaaS Development", href: "/services/saas-product-development", type: "route" },
    { label: "Data Analytics", href: "/services/data-analytics-bi", type: "route" },
    { label: "Chatbot Development", href: "/services/chatbot-development", type: "route" },
    { label: "IT Consulting", href: "/services/it-consulting-strategy", type: "route" },
  ],
};

export function Footer() {
  return (
    <footer
      className="pt-20 pb-10 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1058a8 0%, #1a7ec8 60%, #7dd3fc 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="container mx-auto px-3 max-w-[1300px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow group-hover:shadow-blue-300/50 transition-shadow duration-300 flex-shrink-0">
  <img
    src="/Qlogo.png"
    alt="Qodex Logo"
    className="w-full h-full object-contain"
  />
</div>
              <span className="font-bold text-xl tracking-tight text-white">
                Qodex <span className="text-white">Software</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm mb-8 text-sm">
              Engineering Tomorrow's Solutions. We build precision-engineered, AI-powered digital products for global visionaries and service-based businesses.
            </p>
            <div className="flex gap-3">
              {[FaLinkedin, FaFacebook, FaTwitter, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.linkedin.com/company/qodexsoftware"
                  className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.type === "route" ? (
                      <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2025 Qodex Software. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
           
          </div>
        </div>
      </div>
    </footer>
  );
}
