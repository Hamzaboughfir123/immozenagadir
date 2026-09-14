export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.immozenagadir.com";

export const SITE_NAME = "ImmoZen Groupe";

export const CONTACT = {
  /** Numéro affiché aux utilisateurs (lecture humaine). */
  phone: "+212 775 918 796",
  /** Même numéro, format E.164 sans espaces — pour tel:, WhatsApp et JSON-LD. */
  phoneRaw: "+212775918796",
  phoneHref: "tel:+212775918796",
  whatsappHref: "https://wa.me/212775918796",
  email: "contact@immozengroupe.com",
  city: "Agadir, Maroc",
};

/** Date de dernière mise à jour réelle des pages légales (affichage + sitemap). */
export const LEGAL_UPDATED_AT = {
  display: "17 août 2026",
  iso: "2026-08-17",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/immozen.groupe" },
  { label: "LinkedIn", href: "https://linkedin.com/company/immozen-groupe" },
  { label: "Facebook", href: "https://web.facebook.com/Immozengroupe" },
] as const;

/** Site institutionnel du groupe (mention "ImmoZen Groupe" en pied de page). */
export const GROUP_URL = "https://www.immozengroupe.com";

/**
 * Autres sites officiels du réseau ImmoZen (une ville = un site dédié, son
 * propre ciblage SEO). Liens en dur (pas de nofollow, pas de nouvel onglet
 * imposé) pour un maillage explicite entre sites de la même marque.
 */
export const NETWORK_SITES = [
  { label: "Marrakech", href: "https://www.immozenmarrakech.com" },
  { label: "Casablanca", href: "https://www.immozencasablanca.com" },
  { label: "Rabat", href: "https://www.immozenrabat.com" },
  { label: "Tanger", href: "https://www.immozentanger.com" },
] as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Pourquoi ImmoZen Groupe", href: "#pourquoi-immozen" },
  { label: "Votre économie", href: "#simulateur" },
  { label: "Nos services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Confier mon bien", href: "#confier-mon-bien" },
] as const;

export const DEFAULT_COMMISSION_RATE = 2.5;

/**
 * Config du formulaire "Confier mon bien" — collecte centralisée des leads
 * propriétaires depuis les 5 sites ImmoZen vers l'API immozen-leads-backend
 * (consultée ensuite via immozen-leads-dashboard). Chaque site (Marrakech,
 * Casablanca, Rabat, Tanger, Agadir) définit ses propres valeurs via
 * variables d'environnement ; ce fichier ne change pas d'un site à l'autre,
 * seul le `.env.local` de chaque repo diffère.
 */
export const PROPERTY_LEAD_CONFIG = {
  /** Ville affichée à l'utilisateur (lecture seule) — jamais éditable. */
  city: process.env.NEXT_PUBLIC_CITY ?? "Agadir",
  /** Domaine du site courant, envoyé comme `sourceSite` — seule source de
   * vérité pour la ville côté backend (jamais un champ saisi). Doit rester
   * synchronisé avec `IMMOZEN_SITES` dans
   * immozen-leads-backend/src/common/immozen-network.ts. */
  siteDomain:
    process.env.NEXT_PUBLIC_SITE_DOMAIN ?? SITE_URL.replace(/^https?:\/\/(www\.)?/, ""),
  /** URL de l'API centrale immozen-leads-backend (identique pour les 5 sites). */
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://api.immozengroupe.com",
};
