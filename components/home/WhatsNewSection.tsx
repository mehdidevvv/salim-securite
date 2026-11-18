"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Newspaper, BookOpen, Calendar } from "lucide-react";
import { ALL_NEWS, NewsItem } from "@/data/news";

export const WhatsNewSection: React.FC = () => {
  const newsList = ALL_NEWS.filter((n) => n.category === "news").slice(0, 3);
  const blogsList = ALL_NEWS.filter((n) => n.category === "blog").slice(0, 3);
  const eventsList = ALL_NEWS.filter((n) => n.category === "event").slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-red mb-2">
              <Newspaper className="w-4 h-4" />
              <span>Espace Presse & Connaissances</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Actualités Récentes
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-2xl">
              Restez informés de nos dernières annonces d'entreprise, analyses de nos docteurs en optique et participations aux salons mondiaux.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:border-brand-red hover:bg-brand-red hover:text-white text-gray-800 font-bold text-xs uppercase tracking-wider transition duration-200 self-start md:self-auto"
          >
            <span>Toutes les Actualités</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Colonnes (Actualités, Blogs, Événements) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Actualités */}
          <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 text-brand-dark font-bold text-lg">
                  <Newspaper className="w-5 h-5 text-brand-red" />
                  <span>Communiqués</span>
                </div>
                <span className="text-xs bg-red-100/70 text-brand-red px-2 py-0.5 rounded font-semibold">
                  Récents
                </span>
              </div>

              <div className="space-y-5">
                {newsList.map((item: NewsItem) => (
                  <article key={item.id} className="group">
                    <span className="text-xs text-gray-400 font-mono block mb-1">
                      {item.date}
                    </span>
                    <Link
                      href="/news"
                      className="text-sm font-semibold text-brand-dark group-hover:text-brand-red transition line-clamp-2 leading-snug"
                    >
                      {item.title}
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200/60">
              <Link
                href="/news?tab=news"
                className="text-xs font-bold text-brand-red hover:text-brand-red-dark inline-flex items-center gap-1 group"
              >
                <span>Tous les Communiqués</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Colonne 2: Blogs */}
          <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 text-brand-dark font-bold text-lg">
                  <BookOpen className="w-5 h-5 text-brand-red" />
                  <span>Blogs Techniques</span>
                </div>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded font-semibold">
                  Analyses
                </span>
              </div>

              <div className="space-y-5">
                {blogsList.map((item: NewsItem) => (
                  <article key={item.id} className="group">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-1">
                      <span>{item.date}</span>
                      {item.readTime && <span>&bull; {item.readTime}</span>}
                    </div>
                    <Link
                      href="/news"
                      className="text-sm font-semibold text-brand-dark group-hover:text-brand-red transition line-clamp-2 leading-snug"
                    >
                      {item.title}
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200/60">
              <Link
                href="/news?tab=blog"
                className="text-xs font-bold text-brand-red hover:text-brand-red-dark inline-flex items-center gap-1 group"
              >
                <span>Explorer les Dossiers</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Colonne 3: Événements */}
          <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 text-brand-dark font-bold text-lg">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <span>Salons & Événements</span>
                </div>
                <span className="text-xs bg-red-100/70 text-brand-red px-2 py-0.5 rounded font-semibold">
                  À venir
                </span>
              </div>

              <div className="space-y-5">
                {eventsList.map((item: NewsItem) => (
                  <article key={item.id} className="group">
                    <span className="text-xs text-brand-red font-semibold block mb-1">
                      {item.eventDateRange || item.date}
                    </span>
                    <Link
                      href="/news"
                      className="text-sm font-semibold text-brand-dark group-hover:text-brand-red transition line-clamp-2 leading-snug"
                    >
                      {item.title}
                    </Link>
                    {item.location && (
                      <span className="text-[11px] text-gray-500 block mt-1">
                        {item.location}
                      </span>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200/60">
              <Link
                href="/news?tab=event"
                className="text-xs font-bold text-brand-red hover:text-brand-red-dark inline-flex items-center gap-1 group"
              >
                <span>Calendrier des Salons</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
