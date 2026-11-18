import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SOLUTIONS } from "@/data/solutions";
import { ALL_PRODUCTS } from "@/data/products";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SolutionClient } from "@/components/solutions/SolutionClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: { type: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = ALL_SOLUTIONS.find((s) => s.slug === params.type);

  if (!solution) {
    return {
      title: "Solution Introuvable",
      description: "La solution demandée n'existe pas.",
    };
  }

  return {
    title: `Solution ${solution.title} | Architecture AIoT`,
    description: `${solution.tagline}. ${solution.summary}`,
    alternates: {
      canonical: `https://brand-aiot.com/solutions/${solution.slug}`,
    },
    openGraph: {
      title: `Solution ${solution.title} | Sécurité & IA BRAND`,
      description: solution.summary,
      url: `https://brand-aiot.com/solutions/${solution.slug}`,
      images: [
        {
          url: solution.image,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
  };
}

export default function SolutionPage({ params }: Props) {
  const solution = ALL_SOLUTIONS.find((s) => s.slug === params.type);

  if (!solution) {
    notFound();
  }

  const relatedProducts = ALL_PRODUCTS.filter((p) =>
    solution.relatedProductSkus.includes(p.sku)
  );

  const relatedCaseStudy = CASE_STUDIES.find(
    (cs) => cs.id === solution.featuredCaseStudyId
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Solutions Métiers", item: "https://brand-aiot.com/#solutions" },
          {
            name: solution.title,
            item: `https://brand-aiot.com/solutions/${solution.slug}`,
          },
        ]}
      />
      <SolutionClient
        solution={solution}
        relatedProducts={relatedProducts}
        relatedCaseStudy={relatedCaseStudy}
      />
    </>
  );
}
