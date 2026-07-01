import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  MapPin,
  Newspaper,
  Users,
  Globe,
  Handshake,
  Lightbulb,
  Megaphone,
  Shield,
  TrendingUp,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const latestNews = [
  {
    id: "1",
    title: "FAIITA Announces National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    excerpt: "The annual flagship event bringing together IT leaders from all 25 states.",
    image: null,
    category: "events",
    publishedAt: new Date("2026-06-15"),
  },
  {
    id: "2",
    title: "GST Council Recommends Simplified Filing for IT Dealers",
    slug: "gst-simplified-filing-it-dealers",
    excerpt: "New GST compliance measures announced for IT channel partners.",
    image: null,
    category: "policy",
    publishedAt: new Date("2026-06-10"),
  },
  {
    id: "3",
    title: "FAIITA Partners with NASSCOM for Skill Development",
    slug: "faiita-nasscom-skill-development",
    excerpt: "Landmark MoU signed to provide upskilling for 10,000 IT channel partners.",
    image: null,
    category: "news",
    publishedAt: new Date("2026-06-05"),
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "FAIITA National IT Summit 2026",
    slug: "faiita-national-it-summit-2026",
    description: "The annual flagship event bringing together IT leaders from all 25 states.",
    startDate: new Date("2026-08-15"),
    endDate: new Date("2026-08-17"),
    location: "New Delhi",
    isOnline: false,
  },
  {
    id: "2",
    title: "Cybersecurity Workshop for IT Dealers",
    slug: "cybersecurity-workshop-it-dealers",
    description: "Comprehensive workshop on CERT-In guidelines and secure practices.",
    startDate: new Date("2026-07-25"),
    endDate: null,
    location: "Mumbai",
    isOnline: false,
  },
  {
    id: "3",
    title: "Digital India Webinar Series - Part 3",
    slug: "digital-india-webinar-series-3",
    description: "Online webinar on government digital transformation opportunities.",
    startDate: new Date("2026-07-10"),
    endDate: null,
    location: "Online",
    isOnline: true,
  },
];

export const dynamic = "force-static";

export default function HomePage() {
  const stats = [
    { value: "50,000+", label: "DEALERS" },
    { value: "25", label: "STATES" },
    { value: "25,00,000+", label: "EMPLOYMENT" },
    { value: "500+", label: "CITIES" },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Shape the Future",
      description: "Influence national IT policies and be part of decisions that shape India's technology landscape.",
    },
    {
      icon: Handshake,
      title: "Strategic Networking",
      description: "Connect with 50,000+ IT entrepreneurs, vendors, and government stakeholders across India.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge & Insights",
      description: "Access exclusive industry reports, market trends, and expert-led training programs.",
    },
    {
      icon: Megaphone,
      title: "Branding & Visibility",
      description: "Showcase your association and members on a national platform with media coverage.",
    },
    {
      icon: Shield,
      title: "Advocacy Support",
      description: "FAIITA represents your interests before government bodies, GST council, and regulatory authorities.",
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Partner with fellow state associations for joint initiatives, events, and business opportunities.",
    },
  ];

  const testimonials = [
    {
      quote: "FAIITA has been instrumental in uniting IT dealers across India. Through their advocacy, we've seen real policy changes that benefit our members.",
      name: "Navin Gupta",
      role: "President, FAIITA",
      company: "Bihar IT Association",
    },
    {
      quote: "Being part of FAIITA gives our state association a voice at the national level. The networking opportunities are invaluable.",
      name: "Liju P. Raju",
      role: "Sr. Vice President, FAIITA",
      company: "Kerala IT Dealers Association",
    },
    {
      quote: "FAIITA's training programs and industry insights have helped our members stay competitive in a rapidly evolving market.",
      name: "Rajeev Chitkara",
      role: "Vice President, FAIITA",
      company: "Punjab Computer Dealers",
    },
    {
      quote: "The federation's efforts in GST simplification and digital transformation advocacy have directly benefited our 5,000+ members.",
      name: "Amit Kumar",
      role: "Secretary, FAIITA",
      company: "Delhi IT Traders Association",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] py-20 text-white sm:py-24 lg:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-[#FF9933] mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />
              Uniting India's IT Fraternity Since 1990
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Federation of All India
            </h1>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[#FF9933] mt-2">
              IT Associations
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Uniting 50,000+ IT entrepreneurs across 25 states — driving growth in Retail, Distribution, Services & Solutions
            </p>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/state-associations"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-[#FF9933] text-white hover:bg-[#e88a2e] sm:w-auto px-8 py-6 text-base font-medium"
                )}
              >
                Find a Dealer
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-white text-[#0A2540] hover:bg-gray-100 sm:w-auto px-8 py-6 text-base font-medium"
                )}
              >
                Join FAIITA Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0A2540] border-t border-white/10 pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</div>
                <p className="mt-2 text-sm font-medium tracking-wider text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              Membership Benefits
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
              State IT associations that join FAIITA gain access to a powerful national network and exclusive resources.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2540] mb-6">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540]">{benefit.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAIITA by the Numbers */}
      <section className="py-16 sm:py-24 bg-[#0A2540] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              FAIITA by the Numbers
            </h2>
            <p className="mt-4 text-white/60 text-lg">
              Our growing impact across India's IT ecosystem
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "25", label: "State Associations", sub: "Across India" },
              { value: "50K+", label: "Channel Partners", sub: "Indirect Members" },
              { value: "25L+", label: "Employment", sub: "Jobs Supported" },
              { value: "35+", label: "Years", sub: "Since 1990" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-5xl font-bold text-[#FF9933]">{item.value}</div>
                <div className="mt-3 text-lg font-semibold">{item.label}</div>
                <div className="text-sm text-white/50">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              What Our Leaders Say
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[360px] max-w-[400px] snap-start bg-white rounded-xl p-8 shadow-sm"
              >
                <p className="text-muted-foreground leading-relaxed italic text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2540] text-white font-bold text-lg">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                    <div className="text-sm text-[#FF9933]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
                Latest News
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Stay updated with the latest developments in India's IT trade.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center text-sm font-medium text-[#0A2540] hover:text-[#FF9933] transition-colors"
            >
              View all news
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
              <Card key={article.id} className="flex h-full flex-col overflow-hidden border-0 shadow-lg">
                <div className="aspect-video w-full bg-[#0A2540]/5">
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Newspaper className="h-12 w-12 text-[#0A2540]/20" />
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(article.publishedAt)}
                    {article.category && (
                      <Badge variant="secondary" className="text-xs bg-[#FF9933]/10 text-[#FF9933] border-0">
                        {article.category}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-lg font-semibold text-[#0A2540]">
                    <Link href={`/news/${article.slug}`} className="hover:text-[#FF9933] transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Connect with the community at our upcoming events across India.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center text-sm font-medium text-[#0A2540] hover:text-[#FF9933] transition-colors"
            >
              View all events
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="h-full border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(event.startDate)}
                    {event.endDate && ` - ${formatDate(event.endDate)}`}
                    {event.isOnline && (
                      <Badge variant="secondary" className="text-xs bg-[#0A2540]/10 text-[#0A2540] border-0">Online</Badge>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-lg font-semibold text-[#0A2540]">
                    <Link href={`/events/${event.slug}`} className="hover:text-[#FF9933] transition-colors">
                      {event.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-[#0A2540] font-medium">
                    <MapPin className="h-4 w-4 text-[#FF9933]" />
                    {event.isOnline ? "Online Event" : event.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#FF9933] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Connect with India's Largest IT Network?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              State IT associations can reach out to FAIITA for membership and collaboration opportunities.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-white text-[#FF9933] hover:bg-gray-100 sm:w-auto px-8 py-6 text-base font-medium"
                )}
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full border-2 border-white text-white hover:bg-white/10 sm:w-auto px-8 py-6 text-base font-medium"
                )}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}