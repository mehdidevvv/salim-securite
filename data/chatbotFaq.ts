export interface BotMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string }[];
}

export const INITIAL_BOT_MESSAGES: BotMessage[] = [
  {
    id: "init-1",
    sender: "bot",
    text: "Bonjour ! Je suis votre Assistant Technique IA disponible 24h/24 et 7j/7. Comment puis-je vous aider aujourd'hui concernant nos caméras, solutions AIoT ou documentations techniques ?",
    timestamp: "À l'instant",
    quickActions: [
      { label: "Réinitialiser mot de passe caméra / IP", action: "password_reset" },
      { label: "Télécharger firmware et ConfigTool", action: "firmware" },
      { label: "Portée PoE longue distance (800 m)", action: "epoe_guide" },
      { label: "Solutions Ville Intelligente / Smart City", action: "smart_city" },
    ],
  },
];

export const SMART_RESPONSES: Record<string, string> = {
  password_reset:
    "Pour des raisons de cybersécurité, les identifiants sont définis au premier démarrage. Pour réinitialiser votre mot de passe :\n1. Utilisez le logiciel ConfigTool pour exporter le fichier XML de réinitialisation.\n2. Téléversez ce fichier sur le Portail Partenaires ou adressez-le par email à support@brand-aiot.com.\n3. Importez la clé cryptographique reçue dans ConfigTool sous 24 heures.",
  firmware:
    "Vous pouvez télécharger les derniers micrologiciels certifiés, ConfigTool, SmartPSS et le client VMS DSS Pro depuis notre Espace Téléchargement ou via le Portail Partenaires. Souhaitez-vous renseigner la référence exacte de votre caméra (ex. IPC-HFW7842H) ?",
  epoe_guide:
    "Notre technologie ePoE (Enhanced Power over Ethernet) permet d'alimenter et de raccorder des caméras sur câble réseau Cat5e/Cat6 standard jusqu'à 800 mètres (à 10 Mbps) ou 300 mètres (à 100 Mbps). Pour une distance supérieure à 100 m, veillez à activer le commutateur ePoE sur le switch industriel.",
  smart_city:
    "Notre plateforme AIoT Smart City fédère plus de 10 000 caméras avec la gestion automatisée du trafic, la reconnaissance faciale autorisée et les centres de crise municipaux 3D. Consultez notre page /solutions/smart-city ou contactez nos architectes pour une étude personnalisée.",
  default:
    "Merci pour votre message. Notre moteur d'assistance a enregistré votre demande. Pour un accompagnement technique approfondi ou un retour SAV (RMA), vous pouvez aussi déposer une demande sur notre page /contact ou joindre notre hotline technique disponible 24/7.",
};
