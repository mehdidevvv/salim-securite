"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("brand_cookie_consent");
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("brand_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("brand_cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Bannière de consentement aux cookies"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 bg-white border border-gray-200/90 rounded-2xl shadow-floating p-5 animate-fade-in text-gray-800"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 border border-red-100">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="flex-1 text-xs sm:text-sm">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-dark">Gestion de Vos Cookies & Confidentialité</h4>
            <span className="text-[10px] bg-green-50 text-green-700 font-semibold px-1.5 py-0.2 rounded border border-green-200 flex items-center gap-0.5">
              <ShieldCheck className="w-3 h-3" /> Conforme RGPD
            </span>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Nous utilisons des cookies techniques et analytiques pour optimiser votre expérience, mémoriser vos préférences et sécuriser votre navigation. En savoir plus dans notre{" "}
            <Link href="/privacy" className="text-brand-red underline hover:text-brand-red-hover">
              Politique de Confidentialité
            </Link>{" "}
            et notre{" "}
            <Link href="/cookies" className="text-brand-red underline hover:text-brand-red-hover">
              Politique des Cookies
            </Link>.
          </p>

          <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white font-semibold text-xs transition shadow-sm"
            >
              Accepter Tout
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition"
            >
              Essentiels Uniquement (Refuser)
            </button>
          </div>
        </div>

        <button
          onClick={handleReject}
          aria-label="Fermer la bannière cookies"
          className="text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
