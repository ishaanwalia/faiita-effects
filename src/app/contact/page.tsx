"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-[#0A0A0F]">
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              Contact
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              Get in <span className="text-[#00D4AA]">Touch</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              We're here to help. Reach out to us for membership, partnerships, or general inquiries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <ScrollReveal>
              <GlassCard className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#00D4AA]/20 flex items-center justify-center mb-4">
                      <Check className="w-8 h-8 text-[#00D4AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white/60 mb-1.5">Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm text-white/60 mb-1.5">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-1.5">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30">
                        <option className="bg-[#0A0A0F]">Membership Inquiry</option>
                        <option className="bg-[#0A0A0F]">Partnership</option>
                        <option className="bg-[#0A0A0F]">Event Registration</option>
                        <option className="bg-[#0A0A0F]">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-1.5">Message</label>
                      <textarea rows={4} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30 resize-none" placeholder="Your message..." />
                    </div>
                    <button type="submit" className="w-full py-3 bg-[#00D4AA] text-[#0A0A0F] rounded-xl font-semibold hover:bg-[#00D4AA]/90 transition-all flex items-center justify-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </GlassCard>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <GlassCard className="p-6 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#00D4AA] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Head Office</h4>
                    <p className="text-white/40 text-sm">New Delhi, India</p>
                  </div>
                </GlassCard>
                <GlassCard className="p-6 flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#00D4AA] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:info@faiita.org" className="text-white/40 text-sm hover:text-[#00D4AA] transition-colors">info@faiita.org</a>
                  </div>
                </GlassCard>
                <GlassCard className="p-6 flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#00D4AA] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+9111XXXXXXX" className="text-white/40 text-sm hover:text-[#00D4AA] transition-colors">+91-11-XXXX-XXXX</a>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}