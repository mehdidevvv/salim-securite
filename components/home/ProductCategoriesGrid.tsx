"use client";

import React from "react";
import Link from "next/link";
import {
  Camera,
  PhoneCall,
  ShieldCheck,
  BellRing,
  Tv,
  Network,
  Car,
  Zap,
  HardDrive,
  Cpu,
  Monitor,
  Flame,
  ArrowRight,
  Layers,
} from "lucide-react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/categories";

const ICON_MAP: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-6 h-6 text-brand-red" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-brand-red" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-red" />,
  BellRing: <BellRing className="w-6 h-6 text-brand-red" />,
  Tv: <Tv className="w-6 h-6 text-brand-red" />,
  Network: <Network className="w-6 h-6 text-brand-red" />,
  Car: <Car className="w-6 h-6 text-brand-red" />,
  Zap: <Zap className="w-6 h-6 text-brand-red" />,
  HardDrive: <HardDrive className="w-6 h-6 text-brand-red" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-red" />,
  Monitor: <Monitor className="w-6 h-6 text-brand-red" />,
  Flame: <Flame className="w-6 h-6 text-brand-red" />,
};

export const ProductCategoriesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-red mb-2">
              <Layers className="w-4 h-4" />
              <span>Gamme Complète de Matériels & Technologies IA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Catégories de Produits AIoT
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
              Des caméras optiques avec deep learning en périphérie jusqu'aux dorsales réseau industrielles, découvrez nos technologies de pointe pour la sécurité moderne.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-brand-dark hover:border-brand-red hover:bg-brand-red text-brand-dark hover:text-white font-bold text-xs uppercase tracking-wider transition duration-200 self-start md:self-auto"
          >
            <span>Voir Toutes ({PRODUCT_CATEGORIES.length} Catégories)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grille de 12 catégories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category: ProductCategory) => {
            const icon = ICON_MAP[category.iconName] || <Camera className="w-6 h-6 text-brand-red" />;

            return (
              <div
                key={category.id}
                className="group bg-white rounded-xl border border-gray-200/80 hover:border-brand-red/50 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Pastille Icône */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm shadow-sm flex items-center justify-center">
                    {icon}
                  </div>

                  {/* Compteur de modèles */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    <span className="font-bold">{category.featuredProductCount}</span> modèles
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-brand-dark group-hover:text-brand-red transition">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Caractéristiques rapides */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {category.highlightSpecs.slice(0, 2).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lien Voir Plus */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/products/${category.slug}`}
                      className="text-xs font-bold text-brand-red hover:text-brand-red-dark inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    >
                      <span>Voir Plus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {category.slug.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bannière d'appel à l'action en bas de section */}
        <div className="mt-14 bg-white rounded-2xl border border-gray-200/90 p-8 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-brand-dark">
              Besoin d'une Architecture Sur Mesure ou d'un Approvisionnement Grand Projet ?
            </h3>
            <p className="text-sm text-gray-500">
              Notre équipe d'ingénieurs avant-vente accompagne les intégrateurs pour concevoir les topologies adaptées.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-brand-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition"
            >
              Catalogue Complet
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
