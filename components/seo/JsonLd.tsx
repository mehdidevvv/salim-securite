import React from "react";

export const OrganizationJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BRAND AIoT Security",
    alternateName: "BRAND Sécurité Électronique & Vidéosurveillance",
    url: "https://brand-aiot.com",
    logo: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    description:
      "Leader mondial en technologies de vidéosurveillance intelligente, caméras réseau WizMind, contrôle d'accès biométrique et solutions AIoT pour villes et entreprises.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33-1-48-63-78-00",
        contactType: "customer service",
        areaServed: ["FR", "EU"],
        availableLanguage: ["French", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+86-571-8768-8883",
        contactType: "technical support",
        areaServed: "Worldwide",
        availableLanguage: ["English", "French"],
      },
    ],
    sameAs: [
      "https://facebook.com",
      "https://linkedin.com",
      "https://youtube.com",
      "https://x.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebSiteJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BRAND AIoT Security",
    url: "https://brand-aiot.com",
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://brand-aiot.com/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export const BreadcrumbJsonLd: React.FC<{ items: BreadcrumbItem[] }> = ({
  items,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface CatalogProductItem {
  name: string;
  sku: string;
  description: string;
  image: string;
  url: string;
}

export const ItemListJsonLd: React.FC<{
  name: string;
  description?: string;
  items: CatalogProductItem[];
}> = ({ name, description, items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        sku: product.sku,
        description: product.description,
        image: product.image,
        url: product.url,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface FaqQuestionItem {
  question: string;
  answer: string;
}

export const FaqJsonLd: React.FC<{ items: FaqQuestionItem[] }> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


