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

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Pourquoi ImmoZen Groupe", href: "#pourquoi-immozen" },
  { label: "Votre économie", href: "#simulateur" },
  { label: "Nos services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Confier mon bien", href: "#confier-mon-bien" },
] as const;

export const DEFAULT_COMMISSION_RATE = 2.5;
