import type { Metadata } from "next";
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const DEFAULT_TITLE =
  "ImmoZen Groupe Agadir | 0 DH de commission propriétaire pour vendre ou louer";

export const DEFAULT_DESCRIPTION =
  "ImmoZen Groupe accompagne les propriétaires à Agadir pour vendre ou louer appartement, villa, terrain, commerce ou riad — 0 DH de commission propriétaire, selon conditions applicables.";

const OG_IMAGE = "/images/og-agadir.jpg";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME} Agadir`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "agence immobilière Agadir",
      "agence immobilière Agadir propriétaire",
      "vendre appartement Agadir",
      "vendre villa Agadir",
      "vendre maison Agadir",
      "vendre bien immobilier Agadir",
      "louer appartement Agadir",
      "louer son bien à Agadir",
      "confier bien immobilier Agadir",
      "agence immobilière sans commission propriétaire Agadir",
      "0 DH commission propriétaire Agadir",
    ],
    alternates: {
      canonical: SITE_URL,
    },
    verification: {
      google: "wpJrhZk_wly1Za7vTAXwvxMi01vES4S_Z_J1jKIM5O4",
    },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "ImmoZen Groupe Agadir — agence immobilière sans commission propriétaire",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

/**
 * JSON-LD Schema.org — regroupe RealEstateAgent + WebSite dans un même
 * `@graph` pour éviter deux `<script>` distincts et deux entités dupliquées.
 * Ne contient que des informations réellement présentes dans le projet
 * (téléphone, email, ville, réseaux sociaux) — aucun avis, note ou adresse
 * postale inventés.
 */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${SITE_URL}/#agence`,
        name: SITE_NAME,
        alternateName: "ImmoZen Agadir",
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/images/logo.png`,
        logo: `${SITE_URL}/images/logo.png`,
        telephone: CONTACT.phoneRaw,
        email: CONTACT.email,
        areaServed: {
          "@type": "City",
          name: "Agadir",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Agadir",
          addressCountry: "MA",
        },
        knowsLanguage: ["fr", "ar"],
        sameAs: SOCIAL_LINKS.map((social) => social.href),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "fr-MA",
        publisher: { "@id": `${SITE_URL}/#agence` },
      },
    ],
  };
}

/**
 * JSON-LD FAQPage — doit rester strictement synchronisé avec les questions/
 * réponses affichées visuellement (voir `components/sections/FaqSection.tsx`).
 * Note : Google a restreint depuis 2023 l'affichage des rich results FAQ aux
 * sites gouvernementaux/santé, mais ce balisage reste utile aux moteurs de
 * réponse IA (ChatGPT, Perplexity, Copilot, Gemini) pour extraire et citer
 * ce contenu de façon fiable.
 */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
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
}

/**
 * JSON-LD BreadcrumbList pour les pages secondaires (légales). Non utilisé
 * sur la page d'accueil (racine du site, sans intérêt pour un breadcrumb).
 */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
