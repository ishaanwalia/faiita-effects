"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { mockNews } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Calendar, ChevronRight, Search, Newspaper, Filter } from "lucide-react";

const categories = ["all", "policy", "events", "news", "technology"];

export function NewsHub() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mockNews.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.source.toLowerCase().includes(activeCategory);
    const matchesSearch =
      article.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
              News Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Latest Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest news, policy updates, and events from FAIITA
            </p>
          </div>
        </ScrollReveal>

        {/* Search & Filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/20 focus:border-[#FF9933] transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-[#FF9933] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* News Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 100}>
                <Link href={`/news/${article.id}`} className="group block">
                  <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500">
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(article.date)}
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-[#FF9933] font-medium">
                          {article.source}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A2540] mb-3 group-hover:text-[#FF9933] transition-colors line-clamp-2">
                        {article.headline}
                      </h3>
                      <div className="flex items-center gap-1 text-[#FF9933] font-medium text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Newspaper className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No news articles found</p>
            <p className="text-gray-400 text-sm mt-1">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
}