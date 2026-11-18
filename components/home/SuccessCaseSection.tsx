"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Trophy } from "lucide-react";
import { CASE_STUDIES, CaseStudyItem } from "@/data/caseStudies";

export const SuccessCaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"city" | "enterprise">("city");

  const filteredCases = CASE_STUDIES.filter((c) => c.category === activeTab);

  return (
    <section className="py-20 bg-brand-light border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-brand-red mb-2">
              <Trophy className="w-4 h-4" />
              <span>Déploiements Internationaux Éprouvés</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Études de Cas & Réussites Clients
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
              Projets réels démontrant une efficacité opérationnelle accrue, une baisse mesurée de la criminalité et un retour sur investissement chiffré.
            </p>
          </div>

          {/* 2 Tabs */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-gray-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab("city")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeTab === "city"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-gray-600 hover:text-brand-dark"
              }`}
            >
              Affaires Urbaines
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeTab === "enterprise"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-gray-600 hover:text-brand-dark"
              }`}
            >
              Grandes Entreprises
            </button>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCases.map((cs: CaseStudyItem) => (
            <div
              key={cs.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Tag */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-dark/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {cs.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Date & Location */}
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{cs.date}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-brand-red" />
                      <span>{cs.location}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-red transition line-clamp-2 leading-snug">
                    {cs.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* Metrics Highlight Block */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 mb-4">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-sm font-black text-brand-red font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-gray-500 truncate leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={
                      cs.id === "case-capital-traffic-its"
                        ? "/solutions/traffic-management"
                        : cs.id === "case-metro-rail-transit"
                        ? "/solutions/transportation"
                        : cs.id === "case-global-automotive-plant"
                        ? "/solutions/manufacturing"
                        : cs.id === "case-national-bank-security"
                        ? "/solutions/banking"
                        : cs.id === "case-polytechnic-university"
                        ? "/solutions/education"
                        : "/solutions/smart-city"
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand-red group-hover:translate-x-1 transition"
                  >
                    <span>Lire l'Étude de Cas Complète</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
