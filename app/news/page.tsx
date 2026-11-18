import { Metadata } from "next";
import { NewsClient } from "@/components/news/NewsClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Actualités, Dossiers Techniques & Salons Professionnels | BRAND Sécurité AIoT",
  description:
    "Suivez toute l'actualité de l'AIoT et de la sécurité électronique : lancements de caméras WizMind 5.0, blogs d'ingénieurs sur l'IA et calendrier des salons internationaux (Security Essen, Intersec...).",
  keywords: [
    "actualités sécurité",
    "blog intelligence artificielle vidéosurveillance",
    "salons sécurité intersec essen",
    "technologie wizmind 5g",
    "livre blanc cybersécurité iot",
  ],
  alternates: {
    canonical: "https://brand-aiot.com/news",
  },
  openGraph: {
    title: "Actualités, Dossiers Techniques & Salons | BRAND AIoT",
    description:
      "Toute l'actualité sur nos innovations AIoT, caméras intelligentes et participations aux grands salons internationaux.",
    url: "https://brand-aiot.com/news",
    siteName: "BRAND AIoT Security",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Conférence et Actualités BRAND Sécurité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Actualités & Innovations AIoT | BRAND",
    description: "Découvrez nos dernières avancées en vision par ordinateur et cybersécurité.",
    images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function NewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Actualités & Presse", item: "https://brand-aiot.com/news" },
        ]}
      />
      <NewsClient />
    </>
  );
}
