"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Download,
  ShieldCheck,
  RotateCcw,
  GraduationCap,
  ChevronDown,
  HelpCircle,
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  ExternalLink,
  Laptop,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "cameras" | "nvr" | "access" | "security";
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "cameras",
    q: "Quelle est la différence entre la technologie Full-Color 4.0 et l'infrarouge classique ?",
    a: "Contrairement aux caméras infrarouges traditionnelles qui basculent en noir et blanc la nuit, les caméras Full-Color 4.0 intègrent une très grande ouverture d'objectif (F1.0) et un capteur CMOS ultra-sensible combiné à un algorithme IA d'éclairage intelligent. Cela garantit une restitution fidèle des couleurs 24h/24 sans éblouir, indispensable pour l'identification des véhicules et des vêtements.",
  },
  {
    category: "cameras",
    q: "Comment fonctionne la protection périmétrique IA WizMind ?",
    a: "La protection périmétrique WizMind utilise des réseaux de neurones profonds (Deep Learning) pour classifier en temps réel les cibles détectées (êtres humains et véhicules à moteur). Elle filtre jusqu'à 98 % des fausses alertes provoquées par la pluie, les animaux, les feuilles mortes ou les variations brutales de lumière.",
  },
  {
    category: "cameras",
    q: "Quelle est la distance maximale de transmission PoE sur les caméras BRAND ?",
    a: "En mode PoE standard IEEE 802.3af/at, la portée maximale est de 100 mètres. Avec la technologie ePoE (extended PoE) active sur nos switchs industriels et caméras compatibles, la transmission des données et de l'alimentation est prolongée jusqu'à 800 mètres à 10 Mbps ou 300 mètres à 100 Mbps via câble RJ45 CAT5e/CAT6 standard.",
  },
  {
    category: "nvr",
    q: "Combien de flux IA un enregistreur NVR WizMind peut-il traiter simultanément ?",
    a: "Selon les modèles de la série NVR5000-EI ou NVR6000, l'enregistreur peut gérer jusqu'à 16 canaux de reconnaissance faciale en temps réel, 32 canaux de protection périmétrique IA et 16 canaux de métadonnées vidéo (reconnaissance de couleur de véhicule, port du casque, sens de déplacement).",
  },
  {
    category: "nvr",
    q: "Comment configurer l'accès distant sécurisé via P2P sans ouvrir de ports sur la box/routeur ?",
    a: "L'accès cloud P2P sécurisé utilise un tunnel sortant chiffré TLS 1.3 vers nos serveurs certifiés ISO 27001. Il suffit d'activer le service P2P dans le menu Réseau du NVR, puis de flasher le QR Code affiché depuis l'application mobile BRAND Partner.",
  },
  {
    category: "access",
    q: "Quel est le temps de reconnaissance faciale sur les terminaux de contrôle d'accès ?",
    a: "Nos terminaux biométriques de la série AC-FR effectuent la comparaison faciale 3D avec détection de faux visages (anti-spoofing photo/vidéo) en moins de 0,2 seconde par individu, même avec le port d'un masque de protection ou des lunettes.",
  },
  {
    category: "access",
    q: "Les lecteurs de contrôle d'accès sont-ils compatibles avec les protocoles tiers Wiegand et OSDP ?",
    a: "Oui, l'intégralité de notre gamme prend en charge les protocoles Wiegand 26/34 et OSDP v2.2 (chiffré AES-128), assurant une interopérabilité directe avec les centrales d'accès tierces et logiciels de supervision du marché.",
  },
  {
    category: "security",
    q: "Comment signaler une vulnérabilité logicielle ou CVE potentielle ?",
    a: "Notre Centre de Sécurité Cybersécurité BRAND PSIRT (Product Security Incident Response Team) assure une veille permanente. Vous pouvez soumettre un rapport technique détaillé par email sécurisé avec clé PGP à psirt@brand-aiot.com. Notre équipe délivre un accusé de réception sous 24h ouvrées.",
  },
  {
    category: "security",
    q: "Les caméras BRAND respectent-elles le Règlement Général sur la Protection des Données (RGPD) ?",
    a: "Oui, nos produits embarquent des outils conformes au RGPD : masquage dynamique de zones privatives, floutage automatique des visages non autorisés (privacy masking IA), chiffrement des flux vidéo en transit (HTTPS / SRTP) et au repos (AES-256).",
  },
];

const DOWNLOAD_TOOLS = [
  {
    title: "BRAND ConfigTool v5.1",
    type: "Logiciel Windows / macOS",
    version: "v5.1.04 (Février 2026)",
    size: "48 Mo",
    desc: "Outil indispensable de découverte réseau, modification d'adresses IP en masse, mise à jour par lots de firmwares et synchronisation horaire NTP.",
  },
  {
    title: "SmartPSS Lite VMS",
    type: "Logiciel de Supervision VMS",
    version: "v2.02.8",
    size: "142 Mo",
    desc: "Station de supervision vidéo multi-écrans gratuite pour jusqu'à 64 caméras, gestion des plans graphiques E-Map, lecture synchronisée et exports MP4 signés.",
  },
  {
    title: "Calculateur de Bande Passante & Stockage",
    type: "Outil de Dimensionnement",
    version: "Web & Desktop",
    size: "12 Mo",
    desc: "Calculez précisément les besoins en disques durs (To) et débit réseau (Mbps) selon vos résolutions (2MP, 4K, 12MP), codecs (H.265/H.264) et jours de rétention.",
  },
  {
    title: "SDK & Documentation API REST",
    type: "Kit Développeur",
    version: "v4.8",
    size: "35 Mo",
    desc: "Bibliothèques C++, C#, Python et API REST ouvertes pour l'intégration des flux vidéo, alarmes IA et métadonnées dans vos plateformes tierces.",
  },
];

export const SupportClient: React.FC = () => {
  const [activeFaqTab, setActiveFaqTab] = useState<"all" | "cameras" | "nvr" | "access" | "security">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Simulation vérificateur de garantie
  const [serialNumber, setSerialNumber] = useState("");
  const [serialResult, setSerialResult] = useState<{
    tested: boolean;
    valid?: boolean;
    product?: string;
    warrantyEnd?: string;
  } | null>(null);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesTab = activeFaqTab === "all" || item.category === activeFaqTab;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleCheckWarranty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialNumber.trim()) return;

    // Simulation intelligente de vérification de numéro de série
    const clean = serialNumber.trim().toUpperCase();
    if (clean.length >= 6) {
      setSerialResult({
        tested: true,
        valid: true,
        product: clean.startsWith("IPC")
          ? "Caméra Tourelle IA WizMind (Gamme 5000)"
          : clean.startsWith("NVR")
          ? "Enregistreur NVR Réseau IA 32 Canaux"
          : "Équipement Professionnel BRAND AIoT Série Entreprise",
        warrantyEnd: "15 Novembre 2028 (Garantie Constructeur 5 Ans Active)",
      });
    } else {
      setSerialResult({
        tested: true,
        valid: false,
      });
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-brand-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">Services & Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Centre de Support Technique & Base de Connaissances
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Consultez nos guides de déploiement, téléchargez les utilitaires officiels (ConfigTool, SmartPSS), vérifiez votre garantie matériel et accédez aux réponses de nos ingénieurs certifiés.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question, une technologie, un code d'erreur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:bg-white focus:text-brand-dark focus:border-brand-red text-sm transition"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* 4 Piliers Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-soft hover:border-brand-red/50 transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-brand-dark">Téléchargements & Outils</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Utilitaires logiciels officiels, firmwares à jour, correctifs et documentations techniques PDF.
            </p>
            <a href="#outils" className="text-xs font-bold text-brand-red hover:underline inline-flex items-center gap-1 pt-1">
              <span>Voir les utilitaires</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-soft hover:border-brand-red/50 transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-brand-dark">Garantie & Retours RMA</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Vérifiez la couverture de votre matériel jusqu'à 5 ans et initiez une demande de prise en charge SAV.
            </p>
            <a href="#garantie" className="text-xs font-bold text-brand-red hover:underline inline-flex items-center gap-1 pt-1">
              <span>Tester un numéro de série</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-soft hover:border-brand-red/50 transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-brand-dark">Centre Cybersécurité PSIRT</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Veille active sur les vulnérabilités CVE, guides de durcissement réseau et conformité RGPD.
            </p>
            <Link href="/privacy" className="text-xs font-bold text-brand-red hover:underline inline-flex items-center gap-1 pt-1">
              <span>Guides de sécurité</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-soft hover:border-brand-red/50 transition space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-brand-dark">Formation & Certifications</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Formations certifiantes BRAND Certified Professional (BCP) pour installateurs et intégrateurs.
            </p>
            <Link href="/contact" className="text-xs font-bold text-brand-red hover:underline inline-flex items-center gap-1 pt-1">
              <span>Demander une session</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Section FAQ Accordéon */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Base de Connaissances
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                Foire Aux Questions Techniques (FAQ)
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "Toutes" },
                { id: "cameras", label: "Caméras & Optique" },
                { id: "nvr", label: "Enregistreurs NVR" },
                { id: "access", label: "Contrôle d'Accès" },
                { id: "security", label: "Cybersécurité & Réseau" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFaqTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    activeFaqTab === tab.id
                      ? "bg-brand-red text-white shadow-sm"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200/90 shadow-soft overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/80 transition"
                  >
                    <span className="font-bold text-sm sm:text-base text-brand-dark flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-brand-red" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="bg-white p-8 rounded-2xl text-center text-gray-500 border border-gray-200">
                Aucun article ne correspond à votre recherche. Essayez d'autres mots-clés ou contactez notre assistance directe.
              </div>
            )}
          </div>
        </div>

        {/* Outils Logiciels & Téléchargements */}
        <div id="outils" className="space-y-6 pt-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Espace Téléchargement
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
              Utilitaires Logiciels & Outils d'Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOWNLOAD_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-soft flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                      {tool.type}
                    </span>
                    <span className="text-xs text-gray-400">{tool.size}</span>
                  </div>
                  <h3 className="font-bold text-base text-brand-dark">{tool.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{tool.desc}</p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">{tool.version}</span>
                  <button
                    onClick={() =>
                      alert(
                        `Téléchargement sécurisé de ${tool.title} initié. Les packages d'installation sont signés cryptographiquement par BRAND Corporation.`
                      )
                    }
                    className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Télécharger</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vérificateur de Garantie RMA */}
        <div id="garantie" className="bg-brand-dark text-white p-8 sm:p-12 rounded-3xl border border-gray-800 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Portail Constructeur
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Vérificateur de Garantie Matériel & Demande RMA
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Saisissez le numéro de série à 10-16 caractères présent sur l'étiquette de votre caméra, enregistreur ou terminal de contrôle d'accès pour vérifier la validité de la garantie constructeur.
            </p>
          </div>

          <form onSubmit={handleCheckWarranty} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="text"
              placeholder="Ex : IPC-HFW5842-882941 ou NVR-5216-993"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:outline-none focus:border-brand-red text-xs sm:text-sm uppercase tracking-wider"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition whitespace-nowrap shadow-card"
            >
              Vérifier la Garantie
            </button>
          </form>

          {serialResult && (
            <div className="pt-2 animate-fade-in">
              {serialResult.valid ? (
                <div className="p-5 bg-white/5 border border-green-500/40 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-white">Équipement Authentique & Couvert</p>
                    <p className="text-gray-300">Modèle identifié : <strong className="text-white">{serialResult.product}</strong></p>
                    <p className="text-green-400 font-medium">Statut : {serialResult.warrantyEnd}</p>
                    <p className="text-[11px] text-gray-400 pt-1">
                      En cas de panne, contactez votre distributeur agréé ou ouvrez un ticket d'échange standard direct.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-5 bg-white/5 border border-yellow-500/40 rounded-2xl flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-white">Numéro de série non reconnu ou incomplet</p>
                    <p className="text-gray-300">
                      Veuillez vérifier l'étiquette au dos de l'appareil (format code-barres alphanumérique) ou joindre notre hotline technique avec votre facture d'achat.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bannière contact assistance directe */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-brand-dark">Besoin d'une Escalade Technique Niveau 3 ?</h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Nos ingénieurs support sont joignables du lundi au vendredi de 8h à 19h ou 24h/24 sous contrat SLA Entreprise.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl bg-brand-red text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-red-hover transition shadow-sm"
            >
              Ouvrir un Ticket Support
            </Link>
            <a
              href="tel:+33148637800"
              className="px-5 py-3 rounded-xl bg-gray-100 text-gray-800 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>+33 1 48 63 78 00</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
