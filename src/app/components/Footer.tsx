"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/states", label: "State Associations" },
  { href: "/leadership", label: "Leadership" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/policy", label: "Policy Dashboard" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/portal", label: "Member Portal" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/5">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#00D4AA] flex items-center justify-center hover:bg-[#00D4AA]/80 transition-all hover:scale-110 shadow-lg shadow-[#00D4AA]/20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-[#0A0A0F]" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">
                <span className="text-[#00D4AA]">FAI</span>ITA
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Federation of All India Information Technology Associations — uniting
              50,000+ IT channel partners across 25 states since 1990.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00D4AA]/20 transition-colors cursor-pointer">
                <span className="text-white/40 text-xs font-bold">X</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00D4AA]/20 transition-colors cursor-pointer">
                <span className="text-white/40 text-xs font-bold">in</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00D4AA]/20 transition-colors cursor-pointer">
                <span className="text-white/40 text-xs font-bold">YT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#00D4AA] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#00D4AA] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D4AA] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00D4AA] flex-shrink-0" />
                <a href="mailto:info@faiita.org" className="text-white/40 text-sm hover:text-[#00D4AA] transition-colors">
                  info@faiita.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00D4AA] flex-shrink-0" />
                <a href="tel:+9111XXXXXXX" className="text-white/40 text-sm hover:text-[#00D4AA] transition-colors">
                  +91-11-XXXX-XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} FAIITA. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}