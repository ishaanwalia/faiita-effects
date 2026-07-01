"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  Users,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Static export: simulate submission with a delay
    // In production with API routes, replace with actual fetch call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "404/95 Nehru Place",
        "New Delhi - 110019",
        "India",
      ],
      color: "from-orange-500/20 to-orange-600/5",
      iconBg: "bg-orange-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 11 4162 0000", "+91 11 4162 0001"],
      color: "from-blue-500/20 to-blue-600/5",
      iconBg: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@faiita.co.in", "president@faiita.co.in"],
      color: "from-emerald-500/20 to-emerald-600/5",
      iconBg: "bg-emerald-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday", "10:00 AM - 6:00 PM IST"],
      color: "from-purple-500/20 to-purple-600/5",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2d8a4e] rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slide-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact FAIITA
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Reach out to the Federation of All India Information Technology Associations
              for membership inquiries, partnership opportunities, or general questions.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <ScrollAnimation key={info.title} animation="slide-up" delay={i * 100}>
                <Card className="group h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="relative p-6">
                    <div className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0A2540] mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollAnimation animation="slide-up">
              <div>
                <h2 className="text-3xl font-bold text-[#0A2540] mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="h-12 border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-12 border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXX XXXXX"
                        className="h-12 border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Membership inquiry, Partnership..."
                        className="h-12 border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="border-gray-200 focus:border-[#FF9933] focus:ring-[#FF9933]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className="w-full h-12 bg-[#FF9933] hover:bg-[#e68a2e] text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  {status === "success" && (
                    <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-green-800 font-medium">
                          Thank you for reaching out!
                        </p>
                        <p className="text-green-600 text-sm">
                          We have received your message and will respond within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-red-800 font-medium">
                          Something went wrong
                        </p>
                        <p className="text-red-600 text-sm">
                          Please try again or contact us directly via phone/email.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </ScrollAnimation>

            {/* Map Placeholder + Office Info */}
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[300px] lg:h-[400px] relative bg-gray-100">
                  {/* Google Maps Embed Placeholder */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1234567890123!2d77.2555!3d28.5494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzU4LjAiTiA3N8KwMTUnMTkuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FAIITA Office Location"
                    className="absolute inset-0"
                  />
                </div>

                <Card className="border-0 shadow-sm bg-[#0A2540]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FF9933]/20 flex items-center justify-center shrink-0">
                        <Building2 className="w-6 h-6 text-[#FF9933]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          FAIITA Headquarters
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          404/95 Nehru Place, New Delhi - 110019, India
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-sm">
                          <span className="text-white/60 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" />
                            +91 11 4162 0000
                          </span>
                          <span className="text-white/60 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" />
                            info@faiita.co.in
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-gradient-to-br from-[#FF9933]/5 to-[#2d8a4e]/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FF9933] flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A2540] mb-1">
                          State Association Inquiry
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          State IT associations interested in joining FAIITA should
                          contact the Secretary directly at{" "}
                          <a
                            href="mailto:secretary@faiita.co.in"
                            className="text-[#FF9933] font-medium hover:underline"
                          >
                            secretary@faiita.co.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
