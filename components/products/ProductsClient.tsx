"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/categories";

export const ProductsClient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.frenchName.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "video") return matchesSearch && (cat.slug === "cctv" || cat.slug === "traffic" || cat.slug === "video-intercoms");
    if (selectedFilter === "access") return matchesSearch && (cat.slug === "access-control" || cat.slug === "alarms");
    if (selectedFilter === "infrastructure") return matchesSearch && (cat.slug === "transmission" || cat.slug === "memory" || cat.slug === "software" || cat.slug === "ev-charger");
    return matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-brand-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">Produits & Matériels</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Catalogue des Produits & Technologies AIoT
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Découvrez notre écosystème complet de capteurs optiques intelligents, défenses périmétriques multidimensionnelles, plateformes vidéo IA et matériels durcis.
          </p>
        </div>
      </div>

      {/* Main Container with Sidebar Filter */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:w-64 shrink-0 space-y-6">
            {/* Search Input */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Filtrer les Catégories
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Mot-clé (ex : Caméra)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            {/* Category Segment Filter */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-brand-red" />
                <span>Domaine Matériel</span>
              </h4>
              <div className="space-y-1">
                {[
                  { id: "all", label: "Toutes les Catégories" },
                  { id: "video", label: "Vidéosurveillance & ITS" },
                  { id: "access", label: "Accès & Intrusion" },
                  { id: "infrastructure", label: "Transmission & IoT" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition ${
                      selectedFilter === filter.id
                        ? "bg-brand-red text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-200/70"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Hardware Spotlight Box */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-5 rounded-2xl border border-gray-800 space-y-3">
              <span className="text-[10px] bg-brand-red text-white font-bold px-2 py-0.5 rounded">
                FLAGSHIP 2025
              </span>
              <h4 className="text-sm font-bold">WizMind X 8MP IPC</h4>
              <p className="text-xs text-gray-400">
                Imagerie multi-spectre double capteur et classification de métadonnées par IA.
              </p>
              <Link
                href="/products/cctv"
                className="inline-flex items-center gap-1 text-xs text-brand-red hover:underline font-semibold"
              >
                <span>Voir la gamme CCTV</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* Right Main Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
              <span className="text-xs font-medium text-gray-500">
                Affichage de <strong className="text-brand-dark">{filteredCategories.length}</strong> familles de produits
              </span>
            </div>

            {filteredCategories.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-base text-gray-500">Aucune catégorie ne correspond à &laquo; {searchTerm} &raquo;.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilter("all");
                  }}
                  className="mt-3 text-xs text-brand-red font-bold underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 text-white">
                        <span className="text-xs font-mono font-bold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                          {cat.featuredProductCount} Modèles
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-red transition">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                          {cat.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {cat.highlightSpecs.map((spec, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href={`/products/${cat.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-red-dark"
                        >
                          <span>Explorer les Produits</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
