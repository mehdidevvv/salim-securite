export interface NewsItem {
  id: string;
  category: "news" | "blog" | "event";
  title: string;
  date: string;
  summary: string;
  image: string;
  readTime?: string;
  eventDateRange?: string;
  location?: string;
  slug: string;
  author?: string;
  tags: string[];
}

export const ALL_NEWS: NewsItem[] = [
  // ACTUALITÉS (3 articles)
  {
    id: "news-1",
    category: "news",
    title: "BRAND Dévoile WizMind X : Moteur Optique IA Multi-Spectre Nouvelle Génération",
    date: "12 Février 2025",
    summary:
      "Établissant de nouveaux standards en fusion optique et deep learning, la plateforme WizMind X atteint 99,8 % de précision d'identification de cibles même dans l'obscurité totale.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min de lecture",
    slug: "brand-devoile-plateforme-wizmind-x",
    tags: ["Lancement Produit", "Intelligence Artificielle", "WizMind"],
  },
  {
    id: "news-2",
    category: "news",
    title: "Certification Mondiale Cybersécurité : Gamme Matérielle Récompensée ISO/IEC 27001 & ETSI EN 303 645",
    date: "28 Janvier 2025",
    summary:
      "Renforçant l'engagement strict en matière de sécurité zero-trust, de souveraineté des données clients et de chiffrement matériel sur l'ensemble de notre parc de caméras IoT.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    readTime: "3 min de lecture",
    slug: "certification-mondiale-cybersecurite-iso27001",
    tags: ["Cybersécurité", "Conformité RGPD", "Protection des Données"],
  },
  {
    id: "news-3",
    category: "news",
    title: "BRAND Annonce son Engagement vers des Usines de Production Neutres en Carbone d'ici 2030",
    date: "10 Janvier 2025",
    summary:
      "Transition vers des usines solaires 100 % autonomes, utilisation d'aluminium aérospatial recyclé pour les caissons et emballages éco-conçus totalement biodégradables.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min de lecture",
    slug: "engagement-fabrication-neutre-carbone-2030",
    tags: ["Développement Durable", "RSE", "Technologies Propres"],
  },

  // BLOGS TECHNIQUES (3 articles)
  {
    id: "blog-1",
    category: "blog",
    title: "L'Évolution de la Vision Nocturne : Pourquoi l'Ouverture F1.0 Remplace les LED Infrarouges",
    date: "04 Février 2025",
    summary:
      "Analyse technique : comment les capteurs ISP de grande taille et la fusion optique bicolore surmontent les limites historiques de la vision noir et blanc dans les enquêtes judiciaires.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min de lecture",
    author: "Dr. Marcus Vance, Directeur Scientifique Optique",
    slug: "evolution-vision-nocturne-super-ouverture-f1",
    tags: ["Dossier Technique", "Vision Nocturne", "Optique de Précision"],
  },
  {
    id: "blog-2",
    category: "blog",
    title: "IA en Périphérie vs. Cloud : Concevoir des Architectures CCTV Résilientes en 2025",
    date: "19 Janvier 2025",
    summary:
      "Pourquoi l'exécution du deep learning directement dans la puce de la caméra élimine la latence, économise 80 % de bande passante réseau et garantit une défense ininterrompue.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min de lecture",
    author: "Elena Rostova, VP Architectures Systèmes",
    slug: "ia-peripherie-vs-cloud-architecture-cctv-2025",
    tags: ["Edge Computing", "Réseau Industriel", "AIoT"],
  },
  {
    id: "blog-3",
    category: "blog",
    title: "Interphonie Connectée & Entrée Mobile : Comment la PropTech Révolutionne l'Immobilier",
    date: "22 Décembre 2024",
    summary:
      "De l'appel ascenseur sans contact par smartphone aux pass QR temporaires pour les livreurs, découvrez comment l'interphonie cloud valorise les parcs immobiliers résidentiels.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min de lecture",
    author: "Julien Mercer, Responsable Solutions Bâtiment Intelligent",
    slug: "interphonie-connectee-proptech-transformation",
    tags: ["PropTech", "Bâtiment Intelligent", "Interphonie Vidéo"],
  },

  // ÉVÉNEMENTS (3 articles)
  {
    id: "event-1",
    category: "event",
    title: "Salon IFSEC International 2025 : Démonstrations en Direct des Jumeaux Numériques AIoT",
    date: "À venir : 20 - 22 Mai 2025",
    eventDateRange: "20 - 22 Mai 2025",
    location: "Parc des Expositions ExCeL, Londres",
    summary:
      "Rencontrez nos ingénieurs au Stand D40 pour assister aux démonstrations en direct de WizMind X, du radar de clôture et des écrans interactifs DeepHub 4K.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    slug: "salon-ifsec-international-2025",
    tags: ["Salon Professionnel", "Démos en Direct", "Europe"],
  },
  {
    id: "event-2",
    category: "event",
    title: "Congrès Mondial Smart City Expo : Conférence Plénière sur la Régulation Autonome du Trafic",
    date: "À venir : 14 - 16 Juin 2025",
    eventDateRange: "14 - 16 Juin 2025",
    location: "Fira Gran Via, Barcelone",
    summary:
      "Notre directeur technique animera la session d'ouverture dédiée aux architectures IA pour la régulation dynamique des intersections et la réduction des gaz polluants.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    slug: "smart-cities-expo-barcelone-2025",
    tags: ["Conférence", "Smart City", "Mobilité Urbaine"],
  },
  {
    id: "event-3",
    category: "event",
    title: "Sommet Mondial des Partenaires BRAND : Accélérer la Croissance grâce aux Innovations AIoT",
    date: "À venir : 08 - 10 Septembre 2025",
    eventDateRange: "08 - 10 Septembre 2025",
    location: "Centre de Congrès Marina Bay Sands, Singapour",
    summary:
      "Rassemblement exclusif de nos distributeurs agréés, intégrateurs de sécurité et partenaires technologiques internationaux, avec tables rondes et présentation des feuilles de route.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    slug: "sommet-partenaires-singapour-2025",
    tags: ["Sommet Partenaires", "International", "Réseau"],
  },
];
