"use client";

import React, { useState } from "react";
import { X, Globe, Check, Search } from "lucide-react";
import { REGIONS_DATA } from "@/data/navigation";

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion: string;
  onSelectRegion: (code: string, label: string) => void;
}

export const RegionModal: React.FC<RegionModalProps> = ({
  isOpen,
  onClose,
  currentRegion,
  onSelectRegion,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Mondial (Global)");
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const currentRegionData = REGIONS_DATA.find((r) => r.region === activeTab);

  const filteredCountries = currentRegionData
    ? currentRegionData.countries.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-floating overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-brand-red" />
            <h3 className="text-lg font-bold text-brand-dark">Sélectionner Région & Langue</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer le sélecteur de région"
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="p-4 border-b border-gray-100 bg-white">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un pays ou une langue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Region Tabs */}
          <div className="md:w-60 border-r border-gray-100 bg-gray-50 p-2 overflow-y-auto">
            {REGIONS_DATA.map((r) => (
              <button
                key={r.region}
                onClick={() => {
                  setActiveTab(r.region);
                  setSearchQuery("");
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition flex items-center justify-between ${
                  activeTab === r.region
                    ? "bg-white text-brand-red shadow-sm border border-gray-200/80 font-semibold"
                    : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                }`}
              >
                <span>{r.region}</span>
                <span className="text-xs text-gray-400 font-normal">
                  ({r.countries.length})
                </span>
              </button>
            ))}
          </div>

          {/* Country / Language list */}
          <div className="flex-1 p-6 overflow-y-auto bg-white">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Portails Disponibles en {activeTab}
            </h4>

            {filteredCountries.length === 0 ? (
              <p className="text-sm text-gray-500 py-6 text-center">
                Aucun pays ou langue ne correspond à votre recherche.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredCountries.map((c) => {
                  const isSelected = currentRegion === c.name || currentRegion === c.code;
                  return (
                    <button
                      key={c.code}
                      onClick={() => {
                        onSelectRegion(c.code, c.name);
                        onClose();
                      }}
                      className={`text-left p-3.5 rounded-lg border text-sm transition flex items-center justify-between ${
                        isSelected
                          ? "border-brand-red bg-red-50/40 text-brand-red font-medium"
                          : "border-gray-200/80 hover:border-gray-400 hover:bg-gray-50 text-gray-800"
                      }`}
                    >
                      <span>{c.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-brand-red shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
          <span>Vos préférences sont mémorisées dans votre navigateur.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
