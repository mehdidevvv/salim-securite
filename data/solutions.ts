export interface SolutionItem {
  id: string;
  slug: string;
  tabCategory: "city" | "enterprise" | "smb";
  title: string;
  frenchTitle: string;
  tagline: string;
  summary: string;
  image: string;
  heroBanner: string;
  challenge: string;
  solutionOverview: string;
  architectureHighlights: string[];
  keyBenefits: {
    title: string;
    description: string;
    stat?: string;
  }[];
  relatedProductSkus: string[];
  featuredCaseStudyId: string;
}

export const ALL_SOLUTIONS: SolutionItem[] = [
  // SOLUTIONS URBAINES
  {
    id: "smart-city",
    slug: "smart-city",
    tabCategory: "city",
    title: "Ville Sûre & Smart City",
    frenchTitle: "Ville Intelligente & Sécurisée",
    tagline: "Perception Visuelle Multi-Capteurs & Commandement Municipal Unifié",
    summary:
      "Intégration d'imagerie ultra-haute définition, de capteurs IoT et de modèles d'IA Big Data pour protéger des millions de concitoyens et coordonner les secours d'urgence.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les grandes métropoles font face à des services municipaux cloisonnés, des délais d'intervention trop longs lors des crises et des zones d'ombre dans les espaces publics très fréquentés.",
    solutionOverview:
      "Notre architecture AIoT Smart City crée un véritable jumeau numérique urbain. Les caméras panoramiques WizMind alimentent la plateforme centrale DSS, permettant la détection automatisée d'incidents, la prévision des mouvements de foule et la collaboration inter-services.",
    architectureHighlights: [
      "Caméras panoramiques 360° en réalité augmentée avec liaison SIG",
      "Coordination unifiée des interventions : police municipale, pompiers, SAMU",
      "Détection acoustique et visuelle des anomalies (cris, chocs, fumée)",
      "Cadre de cybersécurité chiffré de bout en bout conforme au RGPD",
    ],
    keyBenefits: [
      {
        title: "Temps d'Intervention des Secours",
        description: "Réduction des délais d'engagement grâce au déclenchement automatique d'alarmes.",
        stat: "-42 %",
      },
      {
        title: "Taux de Prévention des Délits",
        description: "Dissuasion active par flashs et vision nocturne nette 24h/24.",
        stat: "+68 %",
      },
      {
        title: "Efficacité Inter-Services",
        description: "Interface unique pour les pompiers, la police et les services voirie.",
        stat: "3.5x",
      },
      {
        title: "Économie d'Énergie Municipale",
        description: "Gradation intelligente de l'éclairage public asservie aux flux piétons.",
        stat: "-35 %",
      },
    ],
    relatedProductSkus: ["IPC-HFW7842H-Z", "SD8A840WA-HNF", "DSS-PRO-AIOT-V8", "DHI-PHSA1.5-CH"],
    featuredCaseStudyId: "case-metropolis-safe-city",
  },
  {
    id: "traffic-management",
    slug: "traffic-management",
    tabCategory: "city",
    title: "Gestion du Trafic & ITS",
    frenchTitle: "Gestion du Trafic & ITS",
    tagline: "Régulation Dynamique des Feux, LAPI & Répression des Infractions",
    summary:
      "Fluidifier la circulation urbaine grâce aux feux intelligents régulés par l'IA, à la détection automatique des encombrements et au suivi multi-voies des véhicules.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les embouteillages coûtent des millions d'heures de productivité, accroissent les émissions de gaz à effet de serre et augmentent les accidents aux carrefours sensibles.",
    solutionOverview:
      "Le système de transport intelligent (ITS) combine des caméras 9MP associées à des radars doppler et des contrôleurs de feux adaptatifs à onde verte.",
    architectureHighlights: [
      "Reconnaissance instantanée des plaques et de la marque du véhicule",
      "Synchronisation des couloirs de vague verte pour les véhicules d'urgence",
      "Alertes immédiates : stationnement gênant, excès de vitesse, contresens",
      "Interopérabilité avec les systèmes de péage électronique autoroutier",
    ],
    keyBenefits: [
      {
        title: "Temps d'Attente aux Carrefours",
        description: "Gestion dynamique réduisant les files aux heures de pointe.",
        stat: "-28 %",
      },
      {
        title: "Précision de Détection LAPI",
        description: "Capture automatisée quasi-parfaite des feux rouges et vitesses.",
        stat: "99.5 %",
      },
      {
        title: "Réduction des Émissions CO2",
        description: "Moins de temps au ralenti diminue directement la pollution urbaine.",
        stat: "-22 %",
      },
      {
        title: "Baisse de l'Accidentologie",
        description: "Signalisation prédictive évitant les collisions par l'arrière.",
        stat: "-40 %",
      },
    ],
    relatedProductSkus: ["ITC431-RW1F-IRL8", "ITC952-AU3F-IRL8", "PFS4226-24GT-240", "DSS-PRO-AIOT-V8"],
    featuredCaseStudyId: "case-capital-traffic-its",
  },
  {
    id: "transportation",
    slug: "transportation",
    tabCategory: "city",
    title: "Transports Publics & Ferroviaire",
    frenchTitle: "Transports Publics & Ferroviaire",
    tagline: "Vidéosurveillance Embarquée, Dépôts & Sécurité des Quais",
    summary:
      "Protection des lignes ferroviaires, métros, flottes de bus et aéroports avec caméras certifiées anti-vibrations EN50155 et détection d'intrusion sur les voies.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les fortes vibrations mécaniques, les variations de tension électrique et la densité des usagers imposent un matériel certifié pour le ferroviaire.",
    solutionOverview:
      "Une matrice complète bord-sol comprenant des caméras durcies 4K, l'analyse de somnolence des conducteurs, la détection des bagages abandonnés et l'alarme intrusion voies.",
    architectureHighlights: [
      "Caméras connecteur M12 anti-vibrations conformes à la norme EN50155",
      "Barrière laser radar et thermique sur le périmètre des voies ferroviaires",
      "Système DMS prévenant la fatigue et la distraction du conducteur",
      "Déchargement sans fil automatique des vidéos en Wi-Fi 5G à l'entrée au dépôt",
    ],
    keyBenefits: [
      {
        title: "Incidents d'Intrusion sur Voie",
        description: "Détection thermique précoce stoppant les trains avant tout danger.",
        stat: "-85 %",
      },
      {
        title: "Vigilance des Conducteurs",
        description: "Alerte sonore immédiate en cabine en cas de baisse d'attention.",
        stat: "99.8 %",
      },
      {
        title: "Résolution des Litiges Usagers",
        description: "Preuves vidéo synchronisées de haute définition incontestables.",
        stat: "100 %",
      },
      {
        title: "Disponibilité de la Flotte",
        description: "Diagnostic de santé à distance en continu de tous les enregistreurs.",
        stat: "99.9 %",
      },
    ],
    relatedProductSkus: ["IPC-HDBW5442R-ASE", "SD8A840WA-HNF", "NVR616-128-4KS2", "IS408-4T4S"],
    featuredCaseStudyId: "case-metro-rail-transit",
  },

  // SOLUTIONS ENTREPRISE
  {
    id: "banking",
    slug: "banking",
    tabCategory: "enterprise",
    title: "Banques & Institutions Financières",
    frenchTitle: "Banque & Institutions Financières",
    tagline: "Coffres-Forts Ultra-Sécurisés, Protection DAB & Lutte Anti-Fraude",
    summary:
      "Contrôle d'accès biométrique strict, surveillance sténopé des transactions aux distributeurs et stockage local chiffré inviolable pour agences bancaires et convoyeurs de fonds.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Le secteur bancaire exige une disponibilité 24/7 absolue, la non-répudiation des transactions, la lutte contre le skimming aux distributeurs et une conformité réglementaire stricte.",
    solutionOverview:
      "Nous associons des micro-caméras sténopé dissimulées avec détection de fraude, des sas de sécurité biométriques à double authentification et un VMS chiffré assurant 180 jours de conservation.",
    architectureHighlights: [
      "Validation biométrique à deux personnes requise pour l'accès aux coffres",
      "Alerte acoustique et visuelle lors des tentatives de piratage des distributeurs",
      "Filigrane numérique cryptographique infalsifiable sur tout export vidéo",
      "Supervision centralisée de l'état de fonctionnement de centaines d'agences",
    ],
    keyBenefits: [
      {
        title: "Réduction des Fraudes",
        description: "Signalement immédiat dès qu'un sabotage de DAB est identifié.",
        stat: "-75 %",
      },
      {
        title: "Conformité Réglementaire",
        description: "Dépasse les exigences légales de conservation et de sécurité bancaire.",
        stat: "100 %",
      },
      {
        title: "Vitesse d'Audit Vidéo",
        description: "Recherche d'une transaction spécifique en moins de 5 secondes.",
        stat: "< 5s",
      },
      {
        title: "Coûts de Gardiennage",
        description: "Télésurveillance centralisée remplaçant le recours excessif aux rondes.",
        stat: "-30 %",
      },
    ],
    relatedProductSkus: ["ASI7213X-T1", "IPC-HDBW5442R-ASE", "NVR616-128-4KS2", "DSS-PRO-AIOT-V8"],
    featuredCaseStudyId: "case-national-bank-security",
  },
  {
    id: "education",
    slug: "education",
    tabCategory: "enterprise",
    title: "Campus Universitaires & Éducation",
    frenchTitle: "Campus Intelligent & Éducation",
    tagline: "Accès Sans Contact, Classes Collaboratives & Dissuasion Active",
    summary:
      "Création d'un environnement d'apprentissage sécurisé avec franchissement périmétrique IA, contrôle d'accès aux résidences étudiantes et bornes d'appel d'urgence.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les établissements scolaires et universités doivent concilier grands espaces ouverts et impératif de protection des mineurs et d'intégration des outils pédagogiques modernes.",
    solutionOverview:
      "Du franchissement de clôtures par caméra thermique aux écrans interactifs 4K et aux couloirs rapides biométriques dans les résidences, notre réponse est globale.",
    architectureHighlights: [
      "Distinction intelligente entre humains et petits animaux sur les clôtures",
      "Totems d'appel d'urgence avec communication bidirectionnelle audio-vidéo",
      "Écrans interactifs 75\" et 86\" DeepHub stimulant l'apprentissage hybride",
      "Pointage automatique sécurisé des présences à l'entrée des amphithéâtres",
    ],
    keyBenefits: [
      {
        title: "Indice de Sécurité du Campus",
        description: "Intervention rapide lors des tentatives d'intrusion nocturnes.",
        stat: "+92 %",
      },
      {
        title: "Gestion d'Appel Automatisée",
        description: "Suppression de l'appel manuel, économisant 10 minutes par cours.",
        stat: "99.5 %",
      },
      {
        title: "Interactivité en Classe",
        description: "Les tableaux numériques augmentent l'implication des étudiants.",
        stat: "+35 %",
      },
      {
        title: "Délivrance de Badges Visiteurs",
        description: "Numérisation et création de pass en moins de 30 secondes à l'accueil.",
        stat: "< 30s",
      },
    ],
    relatedProductSkus: ["DHI-LTV86-MC410", "ASGB610-L", "IPC-HFW7842H-Z", "ARC3000G-W2"],
    featuredCaseStudyId: "case-polytechnic-university",
  },
  {
    id: "energy",
    slug: "energy",
    tabCategory: "enterprise",
    title: "Énergie, Pétrole & Gaz",
    frenchTitle: "Énergie, Pétrole & Gaz",
    tagline: "Caméras Certifiées ATEX, Fuites de Gaz & Postes Électriques Isolés",
    summary:
      "Caméras certifiées ATEX et IECEx avec imagerie thermique radiométrique pour prévenir les incendies d'hydrocarbures, anomalies de torchères et défaillances de transformateurs.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les environnements pétrochimiques à risque d'explosion nécessitent des caissons en inox 316L, des électroniques anti-étincelles et la mesure thermique sans contact.",
    solutionOverview:
      "Matériels antidéflagrants en acier inoxydable associés à des capteurs thermiques détectant les points d'échauffement anormaux sur les brides de pipelines et cuves bien avant tout départ de feu.",
    architectureHighlights: [
      "Certifications ATEX & IECEx Zone 1 / 21 en acier inoxydable 316L",
      "Seuils d'alarme thermique radiométrique ultra-précis (±2 °C)",
      "Transmission 4G à alimentation solaire pour les tronçons isolés de pipelines",
      "Vérification automatique du port des EPI : casques, tenues ignifugées, gilets",
    ],
    keyBenefits: [
      {
        title: "Alerte Précoce Incendie",
        description: "Détection des points chauds des semaines avant une défaillance.",
        stat: "100 %",
      },
      {
        title: "Respect du Port des EPI",
        description: "Contrôle automatique réduisant drastiquement les infractions sécurité.",
        stat: "+80 %",
      },
      {
        title: "Inspections sur Sites Isolés",
        description: "Élimine les rondes humaines dangereuses en zones toxiques.",
        stat: "-60 %",
      },
      {
        title: "Arrêts d'Exploitation Imprévus",
        description: "Surveillance thermique continue des postes de transformation haute tension.",
        stat: "-45 %",
      },
    ],
    relatedProductSkus: ["DHI-HY-FT500", "IPC-HFW7842H-Z", "SD8A840WA-HNF", "IS408-4T4S"],
    featuredCaseStudyId: "case-offshore-refinery",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    tabCategory: "enterprise",
    title: "Industrie 4.0 & Logistique",
    frenchTitle: "Industrie & Usines Intelligentes",
    tagline: "Vision IA en Ligne de Production, Suivi de Colis & Quais de Chargement",
    summary:
      "Accroître la productivité industrielle avec caméras de lecture de codes-barres, prévention des collisions de chariots élévateurs et protection périmétrique des parcs logistiques.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "La détérioration des marchandises, les litiges de colis perdus, les accidents d'engins de manutention et l'immensité des clôtures extérieures compliquent la gestion d'usine.",
    solutionOverview:
      "Dispositif unifié associant scannage 6 faces des colis, alertes d'angles morts sur chariots, planification automatique des portes de quai et liaison radar-vidéo de clôture.",
    architectureHighlights: [
      "Lecture automatique haute vitesse des codes-barres et volumétrie OCR",
      "Détection de piétons à proximité des chariots avec gyrophare en cabine",
      "Affectation automatique des camions aux quais par reconnaissance de plaque",
      "Radar de clôture couplé à une caméra PTZ sans fausse alarme causée par le vent",
    ],
    keyBenefits: [
      {
        title: "Litiges Marchandises Perdues",
        description: "Preuve vidéo indexée rattachée à chaque code-barre scanné.",
        stat: "-70 %",
      },
      {
        title: "Rotation des Camions à Quai",
        description: "L'automatisation LAPI accélère les temps de chargement.",
        stat: "+40 %",
      },
      {
        title: "Accidents de Manutention",
        description: "Alerte de proximité empêchant les collisions engin-piéton.",
        stat: "-90 %",
      },
      {
        title: "Coût de Surveillance Clôtures",
        description: "L'analyse IA intelligente remplace avantageusement les rondes.",
        stat: "-50 %",
      },
    ],
    relatedProductSkus: ["IPC-HFW7842H-Z", "ITC431-RW1F-IRL8", "PFS4226-24GT-240", "DSS-PRO-AIOT-V8"],
    featuredCaseStudyId: "case-global-automotive-plant",
  },

  // SOLUTIONS PME / SMB
  {
    id: "retail",
    slug: "retail",
    tabCategory: "smb",
    title: "Commerce & Distribution Intelligente",
    frenchTitle: "Commerce Intelligent & Boutiques",
    tagline: "Prévention de la Démarque, Cartes de Chaleur & Incrustation Caisse",
    summary:
      "Transformer la vidéosurveillance en outil de rentabilité : analyse de l'affluence en rayon, cartes de chaleur des zones chaudes, incrustation du ticket de caisse et anti-vol actif.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les commerçants luttent contre la démarque inconnue en caisse libre-service tout en cherchant à comprendre le parcours d'achat pour mieux positionner leurs équipes.",
    solutionOverview:
      "Notre système incruste le texte du ticket de caisse directement sur la vidéo, calcule le taux de transformation visiteurs/acheteurs et alerte les managers si une file d'attente dépasse 4 personnes.",
    architectureHighlights: [
      "Caméras panoramiques 360° fisheye avec cartes de chaleur de fréquentation",
      "Liaison directe avec le logiciel d'encaissement POS pour détection d'anomalies",
      "Détection des articles non scannés aux caisses automatiques",
      "Notification d'arrivée des clients VIP sur smartphone des vendeurs",
    ],
    keyBenefits: [
      {
        title: "Pertes par Démarque Inconnue",
        description: "Dissuasion active et traçabilité caisse divisant le vol à l'étalage.",
        stat: "-55 %",
      },
      {
        title: "Attente aux Caisses",
        description: "Ouverture dynamique de nouvelles caisses sur alerte automatique.",
        stat: "-35 %",
      },
      {
        title: "Efficacité des Têtes de Gondole",
        description: "Optimisation de l'agencement guidée par les mesures de temps d'arrêt.",
        stat: "+25 %",
      },
      {
        title: "Taux de Conversion en Boutique",
        description: "Ajustement précis des plannings sur les pics réels de fréquentation.",
        stat: "+18 %",
      },
    ],
    relatedProductSkus: ["IPC-HDBW5442R-ASE", "IPC-HFW7842H-Z", "ARC3000G-W2", "DSS-EXPRESS-V8"],
    featuredCaseStudyId: "case-luxury-retail-chain",
  },
  {
    id: "hospitality",
    slug: "hospitality",
    tabCategory: "smb",
    title: "Hôtellerie & Résidences de Vacances",
    frenchTitle: "Hôtellerie & Résidences de Vacances",
    tagline: "Sécurité Discrète des Clients, Accès Clé Mobile & Ambiance Épurée",
    summary:
      "Rehausser le confort des clients avec accès silencieux par reconnaissance faciale, lecture automatique de plaque au parking souterrain, caméras au design épuré et sécurité piscine.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les établissements hôteliers haut de gamme exigent un niveau de sécurité sans faille qui reste totalement invisible pour préserver une ambiance feutrée et chaleureuse.",
    solutionOverview:
      "Des dômes ultra-compacts intégrés discrètement aux faux-plafonds, couplés à des barrières automatiques LAPI qui ouvrent instantanément l'accès aux clients enregistrés.",
    architectureHighlights: [
      "Caméras encastrées miniatures respectant l'architecture d'intérieur",
      "Clôture virtuelle autour des piscines alertant immédiatement en cas d'enfant seul",
      "Écrans d'interphonie élégants permettant la conciergerie directe",
      "Ascenseurs intelligents autorisant uniquement l'étage réservé par le client",
    ],
    keyBenefits: [
      {
        title: "Satisfaction Client à l'Arrivée",
        description: "Expérience fluide et enregistrement sans friction dès le parking.",
        stat: "+24 %",
      },
      {
        title: "Litiges Dégâts Véhicules",
        description: "Scannage haute définition de l'état du véhicule à l'entrée du parking.",
        stat: "-80 %",
      },
      {
        title: "Protection Bassin Piscine",
        description: "Prévention proactive immédiate de tout risque de noyade accidentelle.",
        stat: "100 %",
      },
      {
        title: "Consommation Énergétique",
        description: "Liaison automatique coupant la climatisation lorsque la chambre est vide.",
        stat: "-20 %",
      },
    ],
    relatedProductSkus: ["VTO9541D-S2", "VTH5441G", "IPC-HDBW5442R-ASE", "ASI7213X-T1"],
    featuredCaseStudyId: "case-grand-resort-hotel",
  },
  {
    id: "ev-charging",
    slug: "ev-charging",
    tabCategory: "smb",
    title: "Infrastructures de Recharge VE",
    frenchTitle: "Infrastructures de Recharge VE",
    tagline: "Contrôle par Vision, Anti-Squat Thermique & Facturation Intelligente",
    summary:
      "Éliminer le stationnement abusif sur les places de recharge grâce à une caméra intégrée qui détecte les véhicules thermiques non autorisés et automatise la gestion des sessions.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    heroBanner: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1920&q=80",
    challenge:
      "Les voitures thermiques bloquent fréquemment les bornes (effet 'ICEing'), et certains conducteurs de VE laissent leur véhicule branché pendant des heures après la fin de charge.",
    solutionOverview:
      "Nos bornes de recharge associent une caméra LAPI intégrée et un signal lumineux zénithal. Tout véhicule non autorisé déclenche un message vocal d'avertissement et une pénalité horaire automatique.",
    architectureHighlights: [
      "Voyant lumineux tricolore (Vert : Disponible, Bleu : En charge, Rouge : Squat)",
      "Lecture automatique de plaque lançant directement la session sans badge",
      "Sonde thermique surveillant en continu la température du câble de charge",
      "Bouton d'arrêt d'urgence et interphone d'assistance 24/7 intégré sur la borne",
    ],
    keyBenefits: [
      {
        title: "Taux de Rotation par Borne",
        description: "La suppression du squatting augmente les sessions utiles par jour.",
        stat: "+65 %",
      },
      {
        title: "Blocages par Véhicules Thermiques",
        description: "Le rappel sonore et la menace d'amende libèrent les emplacements.",
        stat: "-88 %",
      },
      {
        title: "Chiffre d'Affaires Opérateur",
        description: "Meilleure disponibilité et facturation automatique du stationnement indu.",
        stat: "+38 %",
      },
      {
        title: "Protection Contre le Vol de Câble",
        description: "Enregistrement vidéo 24/7 décourageant toute tentative de vandalisme.",
        stat: "100 %",
      },
    ],
    relatedProductSkus: ["DHI-EVC-AC7000-01", "DHI-EVC-DC60KW-02", "ITC431-RW1F-IRL8", "PFS4226-24GT-240"],
    featuredCaseStudyId: "case-metro-ev-network",
  },
];
