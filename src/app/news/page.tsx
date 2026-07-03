"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { mockNews } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Calendar, Search, ChevronRight } from "lucide-react";

const categories = ["All", "Policy", "Events", "Growth", "Advocacy"];

export default function NewsPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = mockNews.filter((n) => {
    const matchCat = activeCat === "All" || n.category === activeCat;
    const matchSearch = n.headline.toLowerCase().includes(search.toLowerCase()) || n.source.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="bg-[#0A0A0F]">
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              News Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              FAIITA in the <span className="text-[#00D4AA]">Headlines</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Stay updated with the latest developments in India's IT trade.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCat === cat ? "bg-[#00D4AA] text-[#0A0A0F]" : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 group">
                  <div className="flex items-center gap-2 text-xs text-white/30 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(article.date)}
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[#00D4AA] font-medium">{article.source}</span>
                  </div>
                  <span className="inline-block text-[10px] font-medium text-[#00D4AA] bg-[#00D4AA]/10 px-2 py-0.5 rounded-full mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#00D4AA] transition-colors line-clamp-2">
                    {article.headline}
                  </h3>
                  <p className="text-white/40 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-1 text-[#00D4AA] text-sm font-medium group-hover:gap-2 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}