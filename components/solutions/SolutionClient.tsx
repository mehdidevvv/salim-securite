"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Layers,
  Download,
} from "lucide-react";
import { SolutionItem } from "@/data/solutions";
import { ProductItem } from "@/data/products";
import { CaseStudyItem } from "@/data/caseStudies";

interface SolutionClientProps {
  solution: SolutionItem;
  relatedProducts: ProductItem[];
  relatedCaseStudy?: CaseStudyItem;
}

export const SolutionClient: React.FC<SolutionClientProps> = ({
  solution,
  relatedProducts,
  relatedCaseStudy,
}) => {
  return (
    <div className="bg-white">
      {/* Solution Hero Banner */}
      <div className="relative bg-brand-dark text-white min-h-[460px] flex items-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${solution.heroBanner}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <Link href="/solutions/smart-city" className="hover:text-white transition">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">{solution.title}</span>
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider">
            ARCHITECTURE {solution.tabCategory === "city" ? "URBAINE" : solution.tabCategory === "enterprise" ? "ENTREPRISE" : "PME"}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl leading-tight">
            {solution.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {solution.tagline}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-card flex items-center gap-2"
            >
              <span>Consulter un Architecte Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => alert(`Téléchargement du livre blanc pour ${solution.title}...`)}
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-wider transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger le Livre Blanc</span>
            </button>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Overview */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Contexte Métier
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                Le Défi Opérationnel Clé
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {solution.challenge}
            </p>

            <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
              <h3 className="font-bold text-brand-dark text-base">
                Notre Réponse Technologique AIoT
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {solution.solutionOverview}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 space-y-4">
            <h3 className="text-lg font-bold text-brand-dark flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-red" />
              <span>Piliers Fondamentaux de l'Architecture</span>
            </h3>
            <div className="space-y-3">
              {solution.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Advantages / Benefits Grid */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Impact Mesuré
            </span>
            <h2 className="text-3xl font-black text-brand-dark mt-1">
              Bénéfices Opérationnels Majeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.keyBenefits.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-soft hover:shadow-card transition duration-300 space-y-3"
              >
                {benefit.stat && (
                  <div className="text-3xl font-black text-brand-red font-mono">
                    {benefit.stat}
                  </div>
                )}
                <h3 className="font-bold text-base text-brand-dark">
                  {benefit.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  Matériels Recommandés
                </span>
                <h2 className="text-2xl font-black text-brand-dark mt-1">
                  Produits Déployés dans cette Solution
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
              >
                <span>Tous les Produits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-card transition flex flex-col justify-between"
                >
                  <div className="h-36 w-full bg-gray-50 rounded-lg overflow-hidden p-2 flex items-center justify-center mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-brand-red font-bold">
                      {p.sku}
                    </span>
                    <h4 className="text-xs font-bold text-brand-dark line-clamp-1">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100">
                    <Link
                      href={`/products/${p.categorySlug}`}
                      className="text-[11px] font-bold text-brand-red hover:underline inline-flex items-center gap-1"
                    >
                      <span>Voir les Spécifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Associated Success Case Card */}
        {relatedCaseStudy && (
          <div className="mt-24 bg-gradient-to-r from-brand-dark to-gray-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Étude de Cas Référente
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                {relatedCaseStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {relatedCaseStudy.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/news"
                  className="px-6 py-3 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition"
                >
                  Lire le Rapport Détaillé
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-wider transition"
                >
                  Demander une Démonstration
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
