"use client";

import React, { useState } from "react";
import { Smartphone, X, QrCode, Download, CheckCircle2, Apple, Play } from "lucide-react";

export const PartnerAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button on the right edge */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Télécharger l'Application Partenaire"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-white text-brand-dark hover:text-brand-red border-l border-y border-gray-200 shadow-floating px-2 py-3 rounded-l-xl flex flex-col items-center gap-1.5 transition group cursor-pointer"
        title="Télécharger l'application mobile BRAND Partner"
      >
        <Smartphone className="w-5 h-5 text-brand-red group-hover:scale-110 transition" />
        <span className="text-[10px] font-bold tracking-tight [writing-mode:vertical-rl] rotate-180 uppercase text-gray-700 group-hover:text-brand-red">
          Application Partenaire
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-floating p-6 overflow-hidden text-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Application Mobile BRAND Partner</h3>
              <p className="text-xs text-gray-500 mt-1">
                Gérez vos caméras, recevez les alertes en direct et accédez aux outils techniques partout.
              </p>
            </div>

            {/* QR Code section */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-6 text-center mb-6">
              <div className="w-40 h-40 bg-white p-3 border border-gray-200 rounded-lg mx-auto shadow-sm flex flex-col items-center justify-center">
                {/* SVG QR Code Illustration */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-dark">
                  <path
                    fill="currentColor"
                    d="M10 10h30v30H10V10zm5 5v20h20V15H15zm45-5h30v30H60V10zm5 5v20h20V15H65zM10 60h30v30H10V60zm5 5v20h20V65H15zm50 0h10v10H65v-10zm15 0h10v10H80v-10zm-15 15h10v10H65v-10zm15 15h10v10H80V90zm-30-40h10v10H50V50zm10 10h10v10H60V60zm-20 10h10v10H40V70zm10 10h10v10H50V80zm-30-30h10v10H20V50zm10 0h10v10H30V50zm-10 10h10v10H20V60zm10 0h10v10H30V60zm40-20h10v10H70V40zm10 0h10v10H80V40z"
                  />
                  <rect x="20" y="20" width="10" height="10" fill="#E60012" />
                  <rect x="70" y="20" width="10" height="10" fill="#E60012" />
                  <rect x="20" y="70" width="10" height="10" fill="#E60012" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mt-3 font-medium">
                Scannez avec l'appareil photo de votre smartphone pour télécharger automatiquement
              </p>
            </div>

            {/* Direct App Store Download Buttons */}
            <div className="space-y-2.5">
              <a
                href="#download-ios"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Redirection vers l'Apple App Store...");
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-gray-200 hover:border-brand-red bg-white hover:bg-red-50/30 text-gray-800 text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Apple className="w-4 h-4 text-gray-800" />
                <span>Disponible sur l'App Store (iOS 15+)</span>
              </a>

              <a
                href="#download-android"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Redirection vers Google Play...");
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-gray-200 hover:border-brand-red bg-white hover:bg-red-50/30 text-gray-800 text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Play className="w-4 h-4 text-brand-red" />
                <span>Disponible sur Google Play (Android 10+)</span>
              </a>

              <a
                href="#download-apk"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Téléchargement du fichier APK direct (Version 4.8.2)...");
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4 text-gray-600" />
                <span>Téléchargement direct du fichier APK (v4.8.2)</span>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> Licence Gratuite
              </span>
              <span>&bull;</span>
              <span>Chiffrement de Bout en Bout</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
