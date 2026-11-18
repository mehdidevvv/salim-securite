"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Cookie, CheckCircle2, RotateCcw } from "lucide-react";

export const CookiesClient: React.FC = () => {
  const [resetDone, setResetDone] = useState(false);

  const handleResetCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("brand_cookie_consent");
      setResetDone(true);
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Banner */}
      <div className="bg-brand-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">Gestion des Cookies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Politique d'Utilisation des Cookies
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Consultez les détails relatifs aux cookies et traceurs utilisés sur le site officiel de BRAND Sécurité AIoT, ainsi que les moyens mis à votre disposition pour gérer vos préférences à tout moment.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
        {/* Intro */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
          <div className="flex items-center gap-3 text-brand-dark">
            <Cookie className="w-6 h-6 text-brand-red flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold">Qu'est-ce qu'un cookie ?</h2>
          </div>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou smartphone) lors de la consultation d'un site internet. Il permet à son émetteur d'identifier le terminal lors de vos visites ultérieures afin d'optimiser votre navigation et de mémoriser vos préférences.
          </p>
        </div>

        {/* Categories table */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">Catégories de Cookies Utilisés</h2>

          <div className="space-y-4">
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-brand-dark text-base">1. Cookies Strictement Nécessaires</h3>
                <span className="px-2.5 py-1 rounded-md bg-green-100 text-green-800 text-[10px] font-bold uppercase">
                  Toujours Actifs
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ces cookies sont indispensables au fonctionnement technique du site : sécurité des formulaires de contact (CSRF), équilibrage de charge des serveurs, et mémorisation de votre choix de consentement. Ils ne peuvent pas être désactivés.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-brand-dark text-base">2. Cookies de Fonctionnalité & Préférences</h3>
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">
                  Optionnels
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ils permettent de sauvegarder vos choix régionaux (langue française, zone géographique sélectionnée) et l'historique de vos sessions d'assistance avec notre assistant technique IA.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-brand-dark text-base">3. Cookies de Mesure d'Audience (Analytique)</h3>
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">
                  Optionnels
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ces cookies nous aident à comprendre comment les visiteurs naviguent sur nos catalogues de produits et nos pages de solutions métiers, afin d'améliorer l'expérience utilisateur et les temps de réponse du site. Les adresses IP sont systématiquement anonymisées avant tout traitement.
              </p>
            </div>
          </div>
        </div>

        {/* Reset Action */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">Gestion de Vos Préférences</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Vous pouvez à tout moment modifier ou retirer votre consentement pour les cookies non essentiels en réinitialisant vos choix ci-dessous :
          </p>

          <div className="pt-2">
            <button
              onClick={handleResetCookies}
              disabled={resetDone}
              className="px-6 py-3 rounded-xl bg-brand-red text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-red-hover transition shadow-sm inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{resetDone ? "Préférences réinitialisées..." : "Réinitialiser Mes Préférences Cookies"}</span>
            </button>
          </div>

          {resetDone && (
            <p className="text-xs text-green-600 flex items-center gap-1.5 pt-2 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Vos préférences ont été réinitialisées. La bannière de choix s'affichera à nouveau.</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
