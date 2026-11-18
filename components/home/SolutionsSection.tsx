"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Landmark, Store } from "lucide-react";
import { ALL_SOLUTIONS, SolutionItem } from "@/data/solutions";

type TabKey = "city" | "enterprise" | "smb";

const TAB_CONFIG: { key: TabKey; label: string; icon: React.ReactNode; subtitle: string }[] = [
  {
    key: "city",
    label: "Solutions Urbaines",
    icon: <Landmark className="w-4 h-4" />,
    subtitle: "Sécurité Publique, Trafic Urbain, Transports & Infrastructures",
  },
  {
    key: "enterprise",
    label: "Solutions Entreprise",
    icon: <Building2 className="w-4 h-4" />,
    subtitle: "Banque, Campus, Énergie, Industrie 4.0 & Santé",
  },
  {
    key: "smb",
    label: "Solutions PME / SMB",
    icon: <Store className="w-4 h-4" />,
    subtitle: "Commerce, Hôtellerie, Logistique & Bornes VE",
  },
];

export const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("city");

  const filteredSolutions = ALL_SOLUTIONS.filter((s) => s.tabCategory === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
            Architectures Dédiées par Industrie
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mt-2">
            Solutions Industrielles Intelligentes
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">
            Alliant intelligence visuelle, algorithmes neuronaux profonds et matériels durcis pour répondre aux exigences de sécurité des municipalités, grands comptes et PME.
          </p>

          {/* 3 Tabs Switcher */}
          <div className="mt-8 inline-flex p-1.5 bg-gray-100 rounded-xl max-w-xl mx-auto border border-gray-200">
            {TAB_CONFIG.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-brand-red shadow-sm border border-gray-200/60"
                      : "text-gray-600 hover:text-brand-dark"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution: SolutionItem) => (
            <Link
              key={solution.id}
              href={`/solutions/${solution.slug}`}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-card border border-gray-200 flex flex-col justify-end p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${solution.image}')` }}
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-colors" />

              {/* Card Content */}
              <div className="relative z-10 space-y-2 text-white">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-brand-red/90 text-white px-2.5 py-0.5 rounded-full mb-1">
                  ARCHITECTURE {solution.tabCategory === "city" ? "URBAINE" : solution.tabCategory === "enterprise" ? "ENTREPRISE" : "PME"}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-red-400 transition">
                  {solution.title}
                </h3>

                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {solution.summary}
                </p>

                {/* Key Benefits preview */}
                <div className="pt-2 flex items-center gap-3 text-xs text-gray-200 border-t border-white/20">
                  {solution.keyBenefits[0]?.stat && (
                    <span className="font-mono font-bold text-red-400">
                      {solution.keyBenefits[0].stat} {solution.keyBenefits[0].title}
                    </span>
                  )}
                </div>

                {/* Action Link */}
                <div className="pt-3 flex items-center gap-2 text-xs font-bold text-white group-hover:text-brand-red transition">
                  <span>Explorer cette Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <Link
            href="/solutions/smart-city"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-red border-b-2 border-brand-red pb-1 transition"
          >
            <span>Consulter la Matrice Globale de Nos Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
