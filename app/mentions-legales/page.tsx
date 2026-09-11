import { LegalShell } from "@/components/legal/LegalShell";
import { LEGAL_UPDATED_AT } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site ImmoZen Groupe, agence immobilière à Agadir.",
  alternates: { canonical: "/mentions-legales" },
});

export default function MentionsLegalesPage() {
  return (
    <LegalShell
      title="Mentions légales"
      path="/mentions-legales"
      updatedAt={LEGAL_UPDATED_AT.display}
    >
      <p>
        Le présent site est édité par <strong>ImmoZen Groupe</strong>
        [raison sociale, forme juridique, capital social à compléter],
        immatriculée au registre du commerce de [ville] sous le numéro RC
        [à compléter], ICE [à compléter], dont le siège social est situé
        [adresse à compléter], Maroc.
      </p>

      <h2>Directeur de la publication</h2>
      <p>[Nom du responsable de la publication à compléter].</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par [nom de l&apos;hébergeur, adresse et contact à
        compléter].
      </p>

      <h2>Activité</h2>
      <p>
        ImmoZen Groupe exerce une activité d&apos;intermédiation immobilière au
        Maroc (transaction, location, conseil). Les informations relatives
        aux autorisations professionnelles et assurances applicables seront
        précisées ici conformément à la réglementation en vigueur.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, visuels,
        logo, charte graphique) est la propriété d&apos;ImmoZen Groupe ou de ses
        partenaires, sauf mention contraire, et ne peut être reproduit sans
        autorisation préalable.
      </p>

      <h2>Contact</h2>
      <p>Pour toute question relative à ces mentions légales : contact@immozengroupe.com.</p>
    </LegalShell>
  );
}
