"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Shield,
  CheckCircle2,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 border-t border-gray-800">
      {/* Upper Footer: 5 Columns */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Colonne 1: Produits */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Produits
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/products/cctv" className="hover:text-brand-red transition">
                  Caméras Réseau (IPC)
                </Link>
              </li>
              <li>
                <Link href="/products/cctv" className="hover:text-brand-red transition">
                  Enregistreurs NVR IA & Cloud
                </Link>
              </li>
              <li>
                <Link href="/products/video-intercoms" className="hover:text-brand-red transition">
                  Interphonie Vidéo
                </Link>
              </li>
              <li>
                <Link href="/products/access-control" className="hover:text-brand-red transition">
                  Contrôle d'Accès & Couloirs Rapides
                </Link>
              </li>
              <li>
                <Link href="/products/alarms" className="hover:text-brand-red transition">
                  Alarmes Intrusion Sans Fil
                </Link>
              </li>
              <li>
                <Link href="/products/whiteboards" className="hover:text-brand-red transition">
                  Écrans Collaboratifs Interactifs
                </Link>
              </li>
              <li>
                <Link href="/products/transmission" className="hover:text-brand-red transition">
                  Switchs PoE Industriels
                </Link>
              </li>
              <li>
                <Link href="/products/traffic" className="hover:text-brand-red transition">
                  Contrôle Routier LAPI (ITS)
                </Link>
              </li>
              <li>
                <Link href="/products/ev-charger" className="hover:text-brand-red transition">
                  Bornes de Recharge VE
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-brand-red font-semibold hover:underline inline-flex items-center gap-1">
                  <span>Toutes les catégories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2: Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/solutions/smart-city" className="hover:text-brand-red transition">
                  Ville Sûre & Smart City
                </Link>
              </li>
              <li>
                <Link href="/solutions/traffic-management" className="hover:text-brand-red transition">
                  Gestion du Trafic (ITS)
                </Link>
              </li>
              <li>
                <Link href="/solutions/transportation" className="hover:text-brand-red transition">
                  Transports & Réseau Ferroviaire
                </Link>
              </li>
              <li>
                <Link href="/solutions/banking" className="hover:text-brand-red transition">
                  Banques & Établissements Financiers
                </Link>
              </li>
              <li>
                <Link href="/solutions/education" className="hover:text-brand-red transition">
                  Campus & Éducation
                </Link>
              </li>
              <li>
                <Link href="/solutions/energy" className="hover:text-brand-red transition">
                  Pétrole, Gaz & Énergie
                </Link>
              </li>
              <li>
                <Link href="/solutions/manufacturing" className="hover:text-brand-red transition">
                  Industrie & Parcs Logistiques
                </Link>
              </li>
              <li>
                <Link href="/solutions/retail" className="hover:text-brand-red transition">
                  Commerce & Analyse de Flux
                </Link>
              </li>
              <li>
                <Link href="/solutions/hospitality" className="hover:text-brand-red transition">
                  Hôtels & Résidences
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Services & Support */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Services & Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/support#outils" className="hover:text-brand-red transition">
                  Centre de Téléchargement (Firmwares/SDK)
                </Link>
              </li>
              <li>
                <Link href="/support#outils" className="hover:text-brand-red transition">
                  ConfigTool & SmartPSS
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-red transition">
                  Bulletins de Sécurité & Veille CVE
                </Link>
              </li>
              <li>
                <Link href="/support#garantie" className="hover:text-brand-red transition">
                  Retours SAV & Garantie (RMA)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red transition">
                  Centre de Formation & Certifications
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-brand-red transition">
                  Foire Aux Questions Technique
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red transition">
                  Ouvrir un Ticket d'Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Partenaires */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              Partenaires
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/partners" className="hover:text-brand-red transition">
                  Écosystème Partenaires
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-brand-red transition">
                  Programme Distributeurs Agréés
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-brand-red transition">
                  Alliances Technologiques & ISV
                </Link>
              </li>
              <li>
                <Link href="/partners#niveaux" className="hover:text-brand-red transition">
                  Niveaux d'Agrément Silver, Gold, Platinum
                </Link>
              </li>
              <li>
                <Link href="/partners#formulaire" className="hover:text-brand-red transition">
                  Devenir Partenaire Agréé
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red transition">
                  Trouver un Distributeur Local
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 5: À propos & Contact Rapide */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              À propos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              <li>
                <Link href="/about" className="hover:text-brand-red transition">
                  Présentation de l'Entreprise
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-red transition">
                  Recherche, Développement & Brevets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-red transition">
                  Engagement RSE & Durabilité
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-brand-red transition">
                  Espace Presse & Médias
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-red transition">
                  Bureaux Mondiaux & Laboratoires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red transition">
                  Carrières & Recrutement
                </Link>
              </li>
            </ul>

            <div className="bg-white/5 p-3.5 rounded-lg border border-white/10 text-xs space-y-2">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>Assistance France & Europe</span>
              </div>
              <p className="text-gray-400">+33 (0)1 48 63 78 00</p>
              <p className="text-gray-400">france.sales@brand-aiot.com</p>
            </div>
          </div>
        </div>

        {/* Brand identity & Social Links Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-brand-red flex items-center justify-center text-white font-black text-sm">
                B
              </div>
              <span className="font-black text-xl tracking-wider text-white">BRAND</span>
            </Link>
            <span className="text-xs text-gray-500 max-w-md">
              Permettre une société plus sûre et un mode de vie plus intelligent grâce aux technologies IoT centrées sur la vidéo.
            </span>
          </div>

          {/* Social Icons (Facebook, LinkedIn, YouTube, TikTok, X) */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white flex items-center justify-center text-gray-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white flex items-center justify-center text-gray-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V10.13H5.06v8.37h2.8z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white flex items-center justify-center text-gray-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white flex items-center justify-center text-gray-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white flex items-center justify-center text-gray-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-black/60 border-t border-gray-800 text-xs py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} BRAND Corporation. Tous droits réservés. Conçu pour l'excellence AIoT.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-gray-400">
            <Link href="/terms" className="hover:text-white transition">
              Conditions d'Utilisation & Vente
            </Link>
            <span className="text-gray-700">&bull;</span>
            <Link href="/privacy" className="hover:text-white transition">
              Conformité & Vie Privée
            </Link>
            <span className="text-gray-700">&bull;</span>
            <Link href="/cookies" className="hover:text-white transition">
              Gestion des Cookies
            </Link>
            <span className="text-gray-700">&bull;</span>
            <Link href="/support" className="hover:text-white transition">
              Centre de Support & RMA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
