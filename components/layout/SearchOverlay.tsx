"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles, Box, Compass, ExternalLink } from "lucide-react";
import { HOT_SEARCHES, QUICK_LINKS } from "@/data/navigation";
import { ALL_PRODUCTS } from "@/data/products";
import { ALL_SOLUTIONS } from "@/data/solutions";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter products and solutions based on search
  const trimmed = query.trim().toLowerCase();
  const matchedProducts = trimmed
    ? ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.sku.toLowerCase().includes(trimmed) ||
          p.series.toLowerCase().includes(trimmed) ||
          p.tagline.toLowerCase().includes(trimmed)
      ).slice(0, 5)
    : [];

  const matchedSolutions = trimmed
    ? ALL_SOLUTIONS.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.summary.toLowerCase().includes(trimmed) ||
          s.tagline.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  const handleSelectQuery = (term: string) => {
    setQuery(term);
  };

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-md text-white flex flex-col animate-fade-in">
      {/* Top action bar */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-brand-red font-black text-xl tracking-wider">BRAND</span>
          <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded font-mono">
            Recherche Globale AIoT
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Fermer la recherche"
          className="p-2 rounded-full bg-white/10 hover:bg-brand-red text-white transition flex items-center gap-1.5 text-sm"
        >
          <span className="hidden sm:inline text-xs font-medium pr-1">ÉCHAP</span>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main search box container */}
      <div className="w-full max-w-4xl mx-auto px-6 py-6 flex-1 flex flex-col overflow-y-auto">
        <div className="relative border-b-2 border-white/20 focus-within:border-brand-red transition pb-3 mb-8">
          <Search className="absolute left-1 top-3 w-7 h-7 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par référence, technologie ou solution (ex : WizMind, 4K, Trafic)..."
            className="w-full pl-12 pr-10 py-2 bg-transparent text-xl md:text-2xl font-light text-white placeholder-gray-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-3 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* When user hasn't typed anything yet: Show Hot Searches & Quick Links */}
        {!trimmed && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            {/* Recherches Fréquentes */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-brand-red text-sm font-semibold tracking-wide uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Recherches Fréquentes</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {HOT_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSelectQuery(term)}
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-brand-red text-xs md:text-sm text-gray-200 hover:text-white transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Liens Rapides */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold tracking-wide uppercase mb-4">
                <Compass className="w-4 h-4 text-brand-red" />
                <span>Accès Rapides</span>
              </div>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-sm text-gray-300 hover:text-white transition py-1"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-red group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Live Search Results */}
        {trimmed && (
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-wider text-gray-400">
              {matchedProducts.length} Produits & {matchedSolutions.length} Solutions trouvés pour &laquo; {query} &raquo;
            </div>

            {matchedProducts.length === 0 && matchedSolutions.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">Aucun résultat trouvé pour &laquo; {query} &raquo;.</p>
                <p className="text-sm mt-2 text-gray-500">
                  Essayez avec des termes comme &laquo; WizMind &raquo;, &laquo; PoE &raquo;, &laquo; Trafic &raquo; ou &laquo; Reconnaissance faciale &raquo;.
                </p>
              </div>
            )}

            {/* Matched Products */}
            {matchedProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-3">
                  <Box className="w-4 h-4 text-brand-red" />
                  <span>Produits & Matériel</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {matchedProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.categorySlug}`}
                      onClick={onClose}
                      className="group p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-red/50 transition flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 overflow-hidden flex items-center justify-center shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-brand-red font-semibold">
                            {p.sku}
                          </span>
                          {p.badge && (
                            <span className="text-[10px] bg-red-600/30 text-red-300 px-1.5 py-0.2 rounded font-medium">
                              {p.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-medium text-white truncate group-hover:text-brand-red transition">
                          {p.name}
                        </h4>
                        <p className="text-xs text-gray-400 truncate">{p.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-red transition shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Solutions */}
            {matchedSolutions.length > 0 && (
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-3">
                  <ExternalLink className="w-4 h-4 text-brand-red" />
                  <span>Solutions Sectorielles</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {matchedSolutions.map((s) => (
                    <Link
                      key={s.id}
                      href={`/solutions/${s.slug}`}
                      onClick={onClose}
                      className="group p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-red/50 transition flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs uppercase text-gray-400 font-medium">
                          Solution {s.tabCategory}
                        </span>
                        <h4 className="text-sm font-medium text-white truncate group-hover:text-brand-red transition">
                          {s.title}
                        </h4>
                        <p className="text-xs text-gray-400 truncate">{s.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-red transition shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
