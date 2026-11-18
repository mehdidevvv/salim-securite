# BRAND AIoT Security — Corporate Multi-Page Website

Site web corporate moderne, sobre et premium conçu pour une entreprise de vidéosurveillance, sécurité électronique et solutions AIoT (dans le style de **dahuasecurity.com**).

---

## 1. Stack Technique
- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : Tailwind CSS (palette corporate Dahua : blanc, gris clair `#F5F6F8`, anthracite `#111827`, accent rouge `#E60012`)
- **Icônes** : Lucide React
- **Animations** : Transitions CSS & Framer Motion
- **Architecture de données** : Fichiers mockés TypeScript dans `data/` (aucun backend requis)
- **Responsive & SEO** : 100% Mobile First, métadonnées Open Graph, structure sémantique accessible

---

## 2. Fonctionnalités & Pages

### Header Sticky & Navigation
- **Logo Placeholder** : `"BRAND"` avec pastille rouge AIoT.
- **Mega-menu au survol** :
  - **Products** : Séries de caméras WizMind/WizSense, NVR, Contrôle d'accès, Interphonie, Transmission, Murs d'images LED + encart produit vedette.
  - **Solutions** : City Solutions, Enterprise Solutions, SMB Solutions + architecture vedette.
- **Sélecteur Région / Langue** : Modale interactive (Global, Europe, Asie-Pacifique, Moyen-Orient & Afrique, Amériques).
- **Overlay de Recherche Plein Écran** :
  - *Hot Searches* (Traffic Management, Education, AI-Powered Surveillance, Network Cameras, etc.)
  - *Quick Links* (Product Selector, Whitepapers, Partner Portal)
  - Recherche en temps réel filtrant produits et solutions.
- **Menu mobile responsive** avec sous-menus accordéons.

### Page d'Accueil (`/`)
1. **Hero** : Carrousel de 5 bannières plein écran (autoplay avec pause au survol, flèches, pagination, compteurs, CTA).
2. **Products** : Grille de 12 catégories (CCTV, Video Intercoms, Access Control, Alarms, Whiteboards, Transmission, ITS Traffic, EV Charger, Memory, Software, Display, Fire Alarm) avec visuels, specs et lien "View All".
3. **Solutions** : 3 onglets dynamiques (*City Solutions*, *Enterprise Solutions*, *SMB Solutions*) avec cartes grand format et hover zoom.
4. **Success Case** : 2 onglets (*City Business* / *Enterprise Business*) avec études de cas chiffrées et métriques de ROI.
5. **Bannière Vidéo** : Section immersive en boucle avec le slogan corporate : *"Creating a sustainable future through advanced technologies"* et statistiques R&D.
6. **What's New** : 3 colonnes (*News*, *Blogs*, *Events*) avec 3 articles chacune et liens de lecture.
7. **Newsletter** : Formulaire d'abonnement avec accord RGPD et retour visuel interactif.

### Éléments Flottants & Utilitaires
- **Bannière Cookies** en bas avec boutons *Accept All* / *Reject* et persistance dans le navigateur.
- **Chatbot Flottant "AI Technical Support" (24/7)** en bas à droite : assistance interactive simulée (procédures de reset IP/mot de passe, ePoE 800m, téléchargement firmware, etc.).
- **Bouton Flottant "Partner App"** sur la bordure droite : ouvre un pop-up avec QR Code pour smartphone, liens App Store, Google Play et téléchargement APK direct.
- **Bouton Retour en haut** avec défilement fluide.

### Pages Secondaires
- `/products` : Catalogue des catégories avec barre de recherche et filtre latéral par domaine.
- `/products/[category]` : Grille de produits détaillée (ex: `/products/cctv`, `/products/access-control`) avec filtres par facteur de forme, pagination et modale de fiche technique / téléchargement de datasheet.
- `/solutions/[type]` : Page d'architecture détaillée (ex: `/solutions/smart-city`, `/solutions/traffic-management`) avec défis industriels, piliers d'architecture, bénéfices mesurés, matériel lié et cas client.
- `/about` : Présentation d'entreprise, 6 chiffres clés, 4 valeurs fondamentales, frise chronologique des innovations (2001 - 2025) et liste des sièges mondiaux.
- `/news` : Centre de presse et médias avec onglets de filtrage (Tous, Communiqués, Blogs techniques, Salons & Événements) et moteur de recherche.
- `/contact` : Formulaire avec validation pour devis/support, coordonnées d'urgence 24/7 et sélecteur interactif des bureaux régionaux.

---

## 3. Lancement en Local

### Prérequis
- Node.js (version 18, 20 ou 22+)
- npm

### Installation des dépendances
```bash
npm install
```

### Lancement du serveur de développement
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Build de Production
```bash
npm run build
npm run start
```

---

## 4. Personnalisation Facile
- **Logo** : Modifiez le texte ou SVG dans `components/layout/Header.tsx` et `components/layout/Footer.tsx`.
- **Produits & Spécifications** : Éditez `data/products.ts` et `data/categories.ts`.
- **Solutions & Études de cas** : Éditez `data/solutions.ts` et `data/caseStudies.ts`.
- **Palette de Couleurs** : Modifiez `tailwind.config.ts` (`brand.red`, `brand.dark`, `brand.light`).
