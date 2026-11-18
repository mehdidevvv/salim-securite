"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
  };

  return (
    <section className="py-16 bg-brand-dark text-white border-t border-gray-800 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5 text-brand-red" />
            <span>Bulletin d'Informations Techniques AIoT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Abonnez-vous aux Sorties Produits & Bulletins Techniques
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Recevez chaque mois les notes de version micrologiciel, les livres blancs d'architecture, les alertes de cybersécurité et les invitations aux webinaires.
          </p>

          {isSubscribed ? (
            <div className="mt-8 p-6 bg-white/10 border border-green-500/40 rounded-2xl max-w-md mx-auto text-center animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold text-white">Merci pour Votre Inscription !</h4>
              <p className="text-xs text-gray-300 mt-1">
                Un email de confirmation a été expédié à <span className="text-white font-mono">{email}</span>. Vous pouvez vous désinscrire à tout moment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Saisissez votre adresse email professionnelle..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-red focus:bg-white/15 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm uppercase tracking-wider transition shadow-card flex items-center justify-center gap-2 shrink-0"
                >
                  <span>S'Abonner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded text-brand-red focus:ring-brand-red"
                  required
                />
                <label htmlFor="newsletter-consent">
                  J'accepte de recevoir les actualités produits conformément à la{" "}
                  <Link href="/privacy" className="text-brand-red underline hover:text-white">
                    Politique de Confidentialité
                  </Link>.
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
