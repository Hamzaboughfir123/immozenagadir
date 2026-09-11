import type { MetadataRoute } from "next";
import { LEGAL_UPDATED_AT, SITE_URL } from "@/lib/constants";

/**
 * `lastModified` n'est renseigné que lorsqu'une date réelle est connue
 * (pages légales, alignée sur la date affichée dans `LegalShell`). La page
 * d'accueil évolue sans date de modification suivie : le champ est omis
 * plutôt que généré artificiellement à chaque build avec `new Date()`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: LEGAL_UPDATED_AT.iso,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politique-de-confidentialite`,
      lastModified: LEGAL_UPDATED_AT.iso,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: LEGAL_UPDATED_AT.iso,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
