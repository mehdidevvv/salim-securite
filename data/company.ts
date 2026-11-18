export interface StatMetric {
  value: string;
  label: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  role: string;
  coordinates: { lat: number; lng: number };
}

export const COMPANY_STATS: StatMetric[] = [
  {
    value: "180+",
    label: "Pays & Régions Desservis",
    description: "Présence commerciale et logistique mondiale pour un support de proximité.",
  },
  {
    value: "23 000+",
    label: "Collaborateurs dans le Monde",
    description: "Une équipe dédiée à l'ingénierie, à la fabrication et au service client.",
  },
  {
    value: "50 %+",
    label: "Effectifs Dédiés à la R&D",
    description: "Plus de la moitié de nos salariés conçoivent les algorithmes IA et puces de demain.",
  },
  {
    value: "10 %+",
    label: "Réinvestissement Annuel en R&D",
    description: "Engagement financier permanent dans l'innovation optique et logicielle.",
  },
  {
    value: "6 000+",
    label: "Brevets Internationaux Déposés",
    description: "Portefeuille de propriété intellectuelle couvrant la vision IA et l'IoT.",
  },
  {
    value: "N° 2",
    label: "Part de Marché Mondiale",
    description: "Acteur de référence mondial de la sécurité vidéo et des technologies AIoT.",
  },
];

export const COMPANY_VALUES: ValueItem[] = [
  {
    title: "Innovation Centrée sur le Client",
    description: "Nous créons des technologies concrètes répondant aux vrais défis de terrain, en garantissant une fiabilité opérationnelle irréprochable.",
    iconName: "Target",
  },
  {
    title: "Intégrité & Protection de la Vie Privée",
    description: "Politique stricte zéro porte dérobée, conformité totale au RGPD et à la norme ISO/IEC 27001 pour assurer que sécurité et vie privée progressent ensemble.",
    iconName: "Shield",
  },
  {
    title: "Développement Durable & Éco-Conception",
    description: "Pionniers des processeurs IA basse consommation, des systèmes solaires autonomes et d'une production industrielle circulaire neutre en carbone.",
    iconName: "Leaf",
  },
  {
    title: "Écosystème Ouvert & Partenariat",
    description: "Faciliter le travail des intégrateurs avec les standards ONVIF ouverts, des API RESTful modernes et des kits de développement (SDK) complets.",
    iconName: "Cpu",
  },
];

export const COMPANY_MILESTONES: MilestoneItem[] = [
  {
    year: "2001",
    title: "Fondation & Première Innovation",
    description: "Lancement du premier enregistreur numérique DVR autonome 8 canaux temps réel de l'industrie, posant les bases de la vidéo numérique.",
  },
  {
    year: "2012",
    title: "Standard Technologique HDCVI",
    description: "Invention de la transmission vidéo composite haute définition permettant de diffuser du flux 1080p sur les câblages coaxiaux existants.",
  },
  {
    year: "2018",
    title: "Déploiement de l'IA WizMind",
    description: "Intégration de processeurs neuronaux dédiés directement dans les caméras, rendant possible l'extraction instantanée de métadonnées visuelles.",
  },
  {
    year: "2021",
    title: "Technologie Full-Color 4.0 Double Capteur",
    description: "Franchissement de la barrière de la nuit grâce à la fusion spectrale couleur continue, même sous 0,0005 Lux d'éclairement.",
  },
  {
    year: "2024",
    title: "Écosystème Unifié AIoT",
    description: "Extension vers les écrans interactifs de visioconférence, les bornes de recharge pour véhicules électriques et les stations solaires autonomes.",
  },
  {
    year: "2025",
    title: "WizMind X & Jumeaux Numériques Urbains",
    description: "Inauguration du moteur de perception multi-spectre autonome orchestrant les plateformes de villes intelligentes à l'échelle métropolitaine.",
  },
];

export const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    id: "office-europe",
    name: "Centre d'Opérations & Logistique Europe",
    city: "Paris / Roissy CDG",
    country: "France & Europe de l'Ouest",
    address: "16 Avenue de l'Europe, 93290 Tremblay-en-France, Paris",
    phone: "+33 (0)1 48 63 78 00",
    email: "france.sales@brand-aiot.com",
    role: "Siège Européen, Centre de Formation & SAV Pièces Détachées",
    coordinates: { lat: 48.8566, lng: 2.3522 },
  },
  {
    id: "hq-global",
    name: "Siège Mondial des Technologies & Recherche",
    city: "Parc d'Innovation International",
    country: "Siège Mondial",
    address: "1199 Rue Bin'an, Zone Industrielle Haute Technologie",
    phone: "+86 571 8768 8883",
    email: "international@brand-aiot.com",
    role: "Direction Générale, Campus R&D & Laboratoires d'Essais",
    coordinates: { lat: 30.2741, lng: 120.1551 },
  },
  {
    id: "office-americas",
    name: "Centre Corporatif Amérique du Nord",
    city: "Irvine, Californie",
    country: "États-Unis & Canada",
    address: "23 Hub Plaza, Suite 400, Irvine, CA 92618",
    phone: "+1 (877) 606-1590",
    email: "usa.support@brand-aiot.com",
    role: "Ventes Amériques, Centre de Solutions & Support Technique",
    coordinates: { lat: 33.6846, lng: -117.8265 },
  },
  {
    id: "office-apac",
    name: "Pôle Régional Asie-Pacifique",
    city: "Singapour",
    country: "Singapour & Asie-Pacifique",
    address: "8 Marina Boulevard, Tour 1 Marina Bay Financial Centre",
    phone: "+65 6842 1200",
    email: "apac@brand-aiot.com",
    role: "Siège Régional Asie-Pacifique",
    coordinates: { lat: 1.3521, lng: 103.8198 },
  },
  {
    id: "office-mea",
    name: "Pôle Moyen-Orient & Afrique",
    city: "Dubaï",
    country: "Émirats Arabes Unis",
    address: "Dubai Internet City, Bâtiment 14, Bureau 302",
    phone: "+971 4 447 8810",
    email: "mea@brand-aiot.com",
    role: "Centre Régional & Showroom d'Expérimentation Client",
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
];
