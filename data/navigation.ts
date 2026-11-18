export interface NavSubItem {
  name: string;
  href: string;
  description?: string;
  isNew?: boolean;
}

export interface NavCategory {
  title: string;
  items: NavSubItem[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
}

export const PRODUCTS_MEGA_MENU: NavCategory[] = [
  {
    title: "Caméras Réseau (IPC)",
    items: [
      { name: "Série WizMind (IA Avancée)", href: "/products/cctv?series=wizmind", isNew: true },
      { name: "Série WizSense (IA Intelligente)", href: "/products/cctv?series=wizsense" },
      { name: "Full-color 4.0 Double Capteur", href: "/products/cctv?tech=fullcolor", isNew: true },
      { name: "Dômes Motorisés PTZ", href: "/products/cctv?type=ptz" },
      { name: "Caméras Thermiques & Radiométriques", href: "/products/cctv?type=thermal" },
      { name: "Antidéflagrantes & Anticorrosion", href: "/products/cctv?type=special" },
    ],
    featured: {
      title: "Ultra IA WizMind X 8MP",
      description: "Analyse prédictive par deep learning et vision nocturne couleur double capteur.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
      href: "/products/cctv",
    },
  },
  {
    title: "Enregistrement & Stockage (NVR/SAN)",
    items: [
      { name: "NVR Série Ultra IA", href: "/products/cctv?type=nvr-ultra" },
      { name: "NVR Série Pro (4K UHD)", href: "/products/cctv?type=nvr-pro" },
      { name: "Enregistreurs Hybrides (XVR)", href: "/products/cctv?type=xvr" },
      { name: "Stockage Centralisé SAN / NAS Entreprise", href: "/products/memory" },
      { name: "Disques & Cartes MicroSD Haute Endurance", href: "/products/memory" },
    ],
    featured: {
      title: "NVR Entreprise IA 128 Canaux",
      description: "Bande passante massive, alimentation redondante et reconnaissance faciale temps réel.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      href: "/products/cctv",
    },
  },
  {
    title: "Contrôle d'Accès & Pointage",
    items: [
      { name: "Terminaux de Reconnaissance Faciale", href: "/products/access-control", isNew: true },
      { name: "Tourniquets Rapides & Couloirs Rapides", href: "/products/access-control" },
      { name: "Contrôleurs Biométriques & Badges RFID", href: "/products/access-control" },
      { name: "Gestion de Pointage Cloud", href: "/products/software" },
    ],
  },
  {
    title: "Interphonie Vidéo & Entrée Intelligente",
    items: [
      { name: "Platines de Rue IP Villa", href: "/products/video-intercoms" },
      { name: "Platines Collectives pour Immeubles", href: "/products/video-intercoms" },
      { name: "Moniteurs Intérieurs Écran Tactile", href: "/products/video-intercoms" },
      { name: "Interphonie Hybride 2 Fils HD", href: "/products/video-intercoms" },
    ],
  },
  {
    title: "Transmission Réseau & IoT",
    items: [
      { name: "Switchs PoE Industriels", href: "/products/transmission" },
      { name: "Ponts Sans Fil Longue Portée", href: "/products/transmission" },
      { name: "Transmetteurs Fibre Optique", href: "/products/transmission" },
      { name: "Passerelles & Capteurs IoT Intelligents", href: "/products/transmission" },
    ],
  },
  {
    title: "Affichage & Murs d'Images",
    items: [
      { name: "Écrans Interactifs Tactiles", href: "/products/whiteboards", isNew: true },
      { name: "Murs d'Images LED Sans Raccord", href: "/products/display" },
      { name: "Décodeurs & Matrices de Poste de Commande", href: "/products/display" },
      { name: "Affichage Dynamique Commercial 4K", href: "/products/display" },
    ],
  },
];

export const SOLUTIONS_MEGA_MENU: NavCategory[] = [
  {
    title: "Solutions Urbaines (City)",
    items: [
      { name: "Ville Sûre & Smart City", href: "/solutions/smart-city", isNew: true },
      { name: "Gestion Intelligente du Trafic (ITS)", href: "/solutions/traffic-management" },
      { name: "Transports Publics & Réseau Ferroviaire", href: "/solutions/transportation" },
    ],
    featured: {
      title: "Écosystème IA Smart City",
      description: "Commandement municipal coordonné, optimisation du trafic et protection citoyenne.",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
      href: "/solutions/smart-city",
    },
  },
  {
    title: "Solutions Entreprise",
    items: [
      { name: "Banques & Institutions Financières", href: "/solutions/banking" },
      { name: "Campus Universitaires & Éducation", href: "/solutions/education" },
      { name: "Énergie, Pétrole & Gaz", href: "/solutions/energy", isNew: true },
      { name: "Parcs Industriels & Usines 4.0", href: "/solutions/manufacturing" },
      { name: "Centres Commerciaux & Grande Distribution", href: "/solutions/retail" },
    ],
    featured: {
      title: "Sécurité Entreprise Zero-Trust",
      description: "Surveillance unifiée par IA, contrôle biométrique et optimisation énergétique.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      href: "/solutions/manufacturing",
    },
  },
  {
    title: "Solutions PME / SMB",
    items: [
      { name: "Boutiques & Analyse des Flux Clients", href: "/solutions/retail" },
      { name: "Hôtels & Résidences de Vacances", href: "/solutions/hospitality" },
      { name: "Supervision des Bornes de Recharge VE", href: "/solutions/ev-charging", isNew: true },
      { name: "Protection Périmétrique & Alarmes", href: "/products/alarms" },
      { name: "Interphonie Résidentielle & Tertiaire", href: "/products/video-intercoms" },
    ],
  },
];

export const REGIONS_DATA = [
  {
    region: "Mondial (Global)",
    countries: [
      { name: "France & International (Français)", code: "FR-FR", active: true },
      { name: "Siège Mondial (English)", code: "EN-GLOBAL" },
      { name: "Portail Export International", code: "EN-EXP" },
    ],
  },
  {
    region: "Europe",
    countries: [
      { name: "France (Français)", code: "FR-FR", active: true },
      { name: "Royaume-Uni (English)", code: "EN-UK" },
      { name: "Allemagne (Deutsch)", code: "DE-DE" },
      { name: "Italie (Italiano)", code: "IT-IT" },
      { name: "Espagne (Español)", code: "ES-ES" },
      { name: "Pologne (Polski)", code: "PL-PL" },
      { name: "Pays-Bas (Nederlands)", code: "NL-NL" },
    ],
  },
  {
    region: "Asie-Pacifique",
    countries: [
      { name: "Singapour (English)", code: "EN-SG" },
      { name: "Japon (日本語)", code: "JA-JP" },
      { name: "Corée du Sud (한국어)", code: "KO-KR" },
      { name: "Australie (English)", code: "EN-AU" },
      { name: "Inde (English)", code: "EN-IN" },
    ],
  },
  {
    region: "Moyen-Orient & Afrique",
    countries: [
      { name: "Émirats Arabes Unis (English / العربية)", code: "AE-EN" },
      { name: "Maroc (Français / العربية)", code: "MA-FR" },
      { name: "Arabie Saoudite (العربية)", code: "SA-AR" },
      { name: "Afrique du Sud (English)", code: "ZA-EN" },
      { name: "Égypte (العربية)", code: "EG-AR" },
    ],
  },
  {
    region: "Amériques",
    countries: [
      { name: "États-Unis (English)", code: "EN-US" },
      { name: "Canada (Français / English)", code: "EN-CA" },
      { name: "Mexique (Español)", code: "ES-MX" },
      { name: "Brésil (Português)", code: "PT-BR" },
    ],
  },
];

export const HOT_SEARCHES = [
  "Gestion du Trafic",
  "Éducation & Campus",
  "Vidéosurveillance IA",
  "Caméras Réseau",
  "Vision Pleine Couleur 4K",
  "Terminal de Reconnaissance Faciale",
  "Bornes de Recharge VE",
  "WizSense Double Capteur",
];

export const QUICK_LINKS = [
  { label: "Outil Sélecteur de Produits", href: "/products" },
  { label: "Livre Blanc Smart City 2025", href: "/solutions/smart-city" },
  { label: "Programme & Portail Partenaires", href: "/partners" },
  { label: "Téléchargement Firmwares & Utilitaires", href: "/support#outils" },
  { label: "Bibliothèque d'Études de Cas", href: "/news" },
  { label: "Assistance Technique Mondiale 24/7", href: "/support" },
];
