"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS_MEGA_MENU, SOLUTIONS_MEGA_MENU } from "@/data/navigation";

interface MegaMenuProps {
  type: "products" | "solutions";
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ type, onClose }) => {
  const isProducts = type === "products";
  const categories = isProducts ? PRODUCTS_MEGA_MENU : SOLUTIONS_MEGA_MENU;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-dropdown z-40 animate-fade-in transition-all text-gray-800"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-sm font-bold text-brand-dark pb-1.5 border-b border-gray-100 flex items-center justify-between">
                  <span>{cat.title}</span>
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between text-xs sm:text-sm text-gray-600 hover:text-brand-red transition py-0.5"
                      >
                        <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                          {item.name}
                          {item.isNew && (
                            <span className="text-[10px] bg-red-50 text-brand-red font-semibold px-1.5 py-0.2 rounded border border-red-200">
                              NOUVEAU
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Highlight card on right side */}
          <div className="lg:col-span-4 border-l border-gray-100 pl-0 lg:pl-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-red mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isProducts ? "Produit Vedette Flagship" : "Architecture Vedette"}</span>
              </div>

              {isProducts ? (
                <div className="group rounded-xl overflow-hidden border border-gray-100 bg-gray-50 p-4 transition hover:shadow-card">
                  <div className="h-44 w-full rounded-lg overflow-hidden bg-black/5 relative mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
                      alt="WizMind X Flagship"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-brand-red text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                      IA 8MP
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-dark group-hover:text-brand-red transition">
                    WizMind X Caméra Tube Ultra IA
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    Vision multi-spectre et classification prédictive instantanée des humains et des véhicules.
                  </p>
                  <Link
                    href="/products/cctv"
                    onClick={onClose}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:text-brand-red-dark"
                  >
                    <span>Voir les Caractéristiques</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="group rounded-xl overflow-hidden border border-gray-100 bg-gray-50 p-4 transition hover:shadow-card">
                  <div className="h-44 w-full rounded-lg overflow-hidden bg-black/5 relative mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80"
                      alt="Jumeau Numérique Smart City"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-brand-red text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                      IA Urbaine
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-brand-dark group-hover:text-brand-red transition">
                    Jumeau Numérique Métropolitain Smart City
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    Commandement urbain coordonné, fluidification du trafic et protection de la population sur plus de 50 000 capteurs.
                  </p>
                  <Link
                    href="/solutions/smart-city"
                    onClick={onClose}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:text-brand-red-dark"
                  >
                    <span>Découvrir la Solution Smart City</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Bottom link to view full catalog/solutions */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
              <Link
                href={isProducts ? "/products" : "/solutions/smart-city"}
                onClick={onClose}
                className="text-xs font-bold text-brand-dark hover:text-brand-red flex items-center gap-1 transition"
              >
                <span>{isProducts ? "Voir Toutes les Catégories de Produits" : "Explorer Toutes les Solutions"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[11px] text-gray-400">Certifié AIoT Sécurité</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
