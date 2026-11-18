import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, ShieldAlert, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-brand-light flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-gray-200/90 shadow-soft p-8 sm:p-12 text-center space-y-6">
        {/* Icon & 404 Badge */}
        <div className="w-20 h-20 rounded-3xl bg-red-50 text-brand-red flex items-center justify-center mx-auto border border-red-100 shadow-sm">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono">
            Erreur 404 &bull; Page Introuvable
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
            Cette Page N'Existe Pas
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            L'adresse saisie est incorrecte, ou le contenu a été déplacé vers une nouvelle section de notre plateforme AIoT.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-card flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Retour à l'Accueil</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 text-brand-red" />
            <span>Catalogue Produits</span>
          </Link>
        </div>

        {/* Quick Links Suggestions */}
        <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-2">
          <p className="font-semibold text-gray-700">Accès recommandés :</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/products/cctv" className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-brand-red transition">
              Caméras Réseau IP
            </Link>
            <Link href="/solutions/smart-city" className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-brand-red transition">
              Solutions Villes Sûres
            </Link>
            <Link href="/support" className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-brand-red transition">
              Support Technique & RMA
            </Link>
            <Link href="/contact" className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-brand-red transition">
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
