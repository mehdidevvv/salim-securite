import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/floating/CookieConsent";
import { AiChatbot } from "@/components/floating/AiChatbot";
import { PartnerAppButton } from "@/components/floating/PartnerAppButton";
import { BackToTop } from "@/components/floating/BackToTop";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#E60012",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brand-aiot.com"),
  title: {
    default: "BRAND Sécurité AIoT | Solutions Intelligentes de Vidéosurveillance & IoT",
    template: "%s | BRAND Sécurité AIoT",
  },
  description:
    "Leader mondial en technologies de vidéosurveillance intelligente, caméras réseau WizMind, contrôle d'accès biométrique et solutions AIoT pour villes et entreprises.",
  keywords: [
    "vidéosurveillance",
    "caméras réseau IP",
    "sécurité électronique",
    "AIoT",
    "smart city",
    "gestion intelligente du trafic",
    "contrôle d'accès biométrique",
    "interphonie vidéo",
    "deep learning WizMind",
    "vision nocturne couleur",
    "switch PoE industriel",
    "solution surveillance professionnelle",
    "videoprotection urbaine",
  ],
  authors: [{ name: "BRAND Sécurité AIoT Corporation", url: "https://brand-aiot.com" }],
  creator: "BRAND Corporation",
  publisher: "BRAND Corporation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://brand-aiot.com",
    languages: {
      "fr-FR": "https://brand-aiot.com",
      "en-US": "https://brand-aiot.com/en",
      "x-default": "https://brand-aiot.com",
    },
  },
  openGraph: {
    title: "BRAND Sécurité AIoT | L'Intelligence Visuelle Nouvelle Génération",
    description:
      "Solutions de sécurité d'entreprise, vision nocturne Full-color 4.0, deep learning WizMind et infrastructures IoT intelligentes.",
    url: "https://brand-aiot.com",
    siteName: "BRAND Sécurité AIoT France & International",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vidéosurveillance Haute Définition BRAND AIoT",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAND Sécurité AIoT | L'Intelligence Visuelle Nouvelle Génération",
    description:
      "Vidéosurveillance d'entreprise, caméras IA en périphérie, gestion du trafic et architectures de ville intelligente.",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    ],
    creator: "@brand_aiot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-brand-red selection:text-white">
        {/* En-tête fixe avec méga-menus, modale régions et recherche */}
        <Header />

        {/* Contenu principal */}
        <main className="flex-1">{children}</main>

        {/* Pied de page corporate 5 colonnes */}
        <Footer />

        {/* Éléments flottants interactifs */}
        <CookieConsent />
        <AiChatbot />
        <PartnerAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
