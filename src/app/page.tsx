import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animation";
import { AnimatedCounter } from "@/components/animated-counter";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { formatDate } from "@/lib/utils";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Shield,
  BookOpen,
  Megaphone,
  Handshake,
  Globe,
  GraduationCap,
  Landmark,
  Monitor,
  FileText,
  ChevronRight,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────

const stats = [
  { value: 50000, suffix: "+", label: "DEALERS" },
  { value: 25, suffix: "", label: "STATES" },
  { value: 2500000, suffix: "+", label: "EMPLOYMENT" },
  { value: 500, suffix: "+", label: "CITIES" },
];

const benefits = [
  {
    title: "Shape the Future",
    description: "Influence national IT policies and be part of decisions that shape India's technology landscape.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Strategic Networking",
    description: "Connect with 50,000+ IT entrepreneurs, vendors, and government stakeholders across India.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
  },
  {
    title: "Knowledge & Insights",
    description: "Access exclusive industry reports, market trends, and expert-led training programs.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Branding & Visibility",
    description: "Showcase your association and members on a national platform with media coverage.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
  },
  {
    title: "Advocacy Support",
    description: "FAIITA represents your interests before government bodies, GST council, and regulatory authorities.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&h=400&fit=crop",
  },
  {
    title: "Collaboration",
    description: "Partner with fellow state associations for joint initiatives, events, and business opportunities.",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
];

const impactStats = [
  { value: 25, label: "State Associations", sub: "Across India", icon: Globe },
  { value: 50000, suffix: "K+", label: "Channel Partners", sub: "Indirect Members", icon: Users },
  { value: 2500000, suffix: "L+", label: "Employment", sub: "Jobs Supported", icon: TrendingUp },
  { value: 35, suffix: "+", label: "Years", sub: "Since 1990", icon: Calendar },
];

const testimonials = [
  {
    quote: "FAIITA has been instrumental in uniting IT dealers across India. Through their advocacy, we have seen real policy changes that benefit our members.",
    name: "Navin Gupta",
    role: "President, FAIITA",
    company: "Bihar IT Association",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "Being part of FAIITA gives our state association a voice at the national level. The networking opportunities are invaluable.",
    name: "Liju P. Raju",
    role: "Sr. Vice President, FAIITA",
    company: "Kerala IT Dealers Association",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "FAIITA's training programs and industry insights have helped our members stay competitive in a rapidly evolving market.",
    name: "Rajeev Chitkara",
    role: "Vice President, FAIITA",
    company: "Punjab Computer Dealers",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "The federation's efforts in GST simplification and digital transformation advocacy have directly benefited our 5,000+ members.",
    name: "Amit Kumar",
    role: "Secretary, FAIITA",
    company: "Delhi IT Traders Association",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
];

const latestNews = [
  {
    slug: "faiita-summit-2026",
    title: "FAIITA Summit 2026: Uniting IT Leaders Nationwide",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states to discuss Digital India initiatives.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    category: "events",
    publishedAt: "2026-06-15",
  },
  {
    slug: "gst-compliance-update",
    title: "New GST Compliance Measures for IT Channel Partners",
    excerpt: "New GST compliance measures announced that will benefit over 50,000 IT channel partners across India.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    category: "policy",
    publishedAt: "2026-06-10",
  },
  {
    slug: "mou-upskilling",
    title: "Landmark MoU for Upskilling 10,000 IT Partners",
    excerpt: "A landmark MoU signed to provide upskilling opportunities for 10,000 IT channel partners.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    category: "news",
    publishedAt: "2026-06-05",
  },
];

const upcomingEvents = [
  {
    slug: "faiita-summit-2026",
    title: "FAIITA Summit 2026",
    description: "The annual flagship event bringing together IT leaders from all 25 states.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    startDate: "2026-08-15",
    endDate: "2026-08-17",
    location: "New Delhi",
    isOnline: false,
  },
  {
    slug: "cybersecurity-workshop",
    title: "Cybersecurity Workshop",
    description: "Comprehensive workshop on CERT-In guidelines and secure practices.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    startDate: "2026-07-20",
    location: "Mumbai",
    isOnline: false,
  },
  {
    slug: "digital-transformation-webinar",
    title: "Digital Transformation Webinar",
    description: "Online webinar on government digital transformation opportunities.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    startDate: "2026-07-10",
    location: "Online",
    isOnline: true,
  },
];

// ─── COMPONENT ────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0A2540] min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="IT Network India"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-[#0A2540]/70" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF9933]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2d8a4e]/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-up">
              <div>
                <Badge className="mb-6 bg-[#FF9933]/20 text-[#FF9933] border-0 hover:bg-[#FF9933]/30 px-4 py-1.5 text-sm font-medium">
                  Uniting India's IT Fraternity Since 1990
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Federation of All India
                  <span className="text-[#FF9933]"> IT Associations</span>
                </h1>
                <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                  Uniting 50,000+ IT entrepreneurs across 25 states — driving growth
                  in Retail, Distribution, Services & Solutions
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/state-associations">
                    <Button className="bg-[#FF9933] hover:bg-[#e68a2e] text-white h-12 px-8 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9933]/25">
                      Find a State Association
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-lg font-semibold text-base transition-all duration-300"
                    >
                      Join FAIITA Today
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="hidden lg:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <Image
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop"
                    alt="IT Conference"
                    width={800}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF9933] animate-pulse" />
                      <span className="text-sm text-white/80 font-medium">25 States Active</span>
                    </div>
                    <p className="text-white text-sm">
                      Representing the voice of India's IT channel partners
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <ScrollAnimation key={stat.label} animation="slide-up" delay={i * 100}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </div>
                    <div className="text-sm text-white/50 font-medium tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MEMBERSHIP BENEFITS — IMAGE CARDS (Nasscom Style)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
                Why Join FAIITA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Membership Benefits
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                State IT associations that join FAIITA gain access to a powerful
                national network and exclusive resources.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollAnimation key={benefit.title} animation="slide-up" delay={i * 100}>
                <div className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                      <div className="w-12 h-12 rounded-xl bg-[#FF9933] flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF9933]/50 transition-colors duration-500" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAIITA BY THE NUMBERS — Animated Counters
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAIITA by the Numbers
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Our growing impact across India's IT ecosystem
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <ScrollAnimation key={stat.label} animation="slide-up" delay={i * 150}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FF9933]/30 hover:bg-white/10 transition-all duration-500 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#FF9933]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-[#FF9933]" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/50 text-sm">{stat.sub}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS — Auto-Scrolling Horizontal Carousel
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                What Our Leaders Say
              </h2>
            </div>
          </ScrollAnimation>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* ═══════════════════════════════════════════════════════
          LATEST NEWS — Image Cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
                  Updates
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
                  Latest News
                </h2>
                <p className="text-gray-600 mt-2">
                  Stay updated with the latest developments in India's IT trade.
                </p>
              </div>
              <Link
                href="/news"
                className="hidden sm:flex items-center gap-2 text-[#FF9933] font-medium hover:gap-3 transition-all"
              >
                View all news
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article, i) => (
              <ScrollAnimation key={article.slug} animation="slide-up" delay={i * 100}>
                <Link href={`/news/${article.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#FF9933] text-white border-0 capitalize">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#FF9933] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-[#FF9933] font-medium text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#FF9933] font-medium"
            >
              View all news
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          UPCOMING EVENTS — Image Cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-up">
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
                  Events
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
                  Upcoming Events
                </h2>
                <p className="text-gray-600 mt-2">
                  Connect with the community at our upcoming events across India.
                </p>
              </div>
              <Link
                href="/events"
                className="hidden sm:flex items-center gap-2 text-[#FF9933] font-medium hover:gap-3 transition-all"
              >
                View all events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <ScrollAnimation key={event.slug} animation="slide-up" delay={i * 100}>
                <Link href={`/events/${event.slug}`} className="group block">
                  <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(event.startDate)}
                          {event.endDate && ` - ${formatDate(event.endDate)}`}
                        </div>
                      </div>
                      {event.isOnline && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-emerald-500 text-white border-0">
                            Online
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#FF9933] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.isOnline ? "Online Event" : event.location}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[#FF9933] font-medium"
            >
              View all events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2d8a4e] rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Connect with India's Largest IT Network?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              State IT associations can reach out to FAIITA for membership and
              collaboration opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#FF9933] hover:bg-[#e68a2e] text-white h-12 px-8 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9933]/25">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-lg font-semibold text-base"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
