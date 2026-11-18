"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Calendar,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { ALL_NEWS, NewsItem } from "@/data/news";

export const NewsClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "news" | "blog" | "event">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ALL_NEWS.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-brand-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">Actualités & Presse</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Actualités, Blogs & Salons Professionnels
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Restez informés des lancements technologiques AIoT, des dossiers d'analyse de nos ingénieurs et de notre présence sur les salons internationaux.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200/80 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {[
              { id: "all", label: "Toutes les Publications" },
              { id: "news", label: "Communiqués de Presse" },
              { id: "blog", label: "Blogs Techniques" },
              { id: "event", label: "Salons & Événements" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === tab.id
                    ? "bg-brand-red text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par mot-clé..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center text-gray-500">
            <p className="text-lg">Aucun article ne correspond à votre recherche.</p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-brand-red font-bold underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article: NewsItem) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-brand-dark/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {article.category === "news" ? "Communiqué" : article.category === "blog" ? "Blog" : "Salon"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-red" />
                        <span>{article.date}</span>
                      </span>
                      {article.readTime && (
                        <>
                          <span>&bull;</span>
                          <span>{article.readTime}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-red transition line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>

                    {/* Event location if any */}
                    {article.location && (
                      <div className="flex items-center gap-1 text-xs text-gray-600 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-red" />
                        <span>{article.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Tags & Action Link */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-brand-red hover:underline inline-flex items-center gap-1">
                      <span>Lire l'Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
