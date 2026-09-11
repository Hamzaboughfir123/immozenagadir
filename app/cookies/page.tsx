import { LegalShell } from "@/components/legal/LegalShell";
import { LEGAL_UPDATED_AT } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Cookies",
  description: "Informations sur l'utilisation des cookies sur le site ImmoZen Groupe.",
  alternates: { canonical: "/cookies" },
});

export default function CookiesPage() {
  return (
    <LegalShell
      title="Politique de cookies"
      path="/cookies"
      updatedAt={LEGAL_UPDATED_AT.display}
    >
      <p>
        Ce site peut utiliser des cookies techniques nécessaires à son bon
        fonctionnement, ainsi que des cookies de mesure d&apos;audience
        permettant de comprendre l&apos;utilisation du site afin de
        l&apos;améliorer.
      </p>

      <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal lors
        de la visite d&apos;un site. Il permet de reconnaître votre
        navigateur et de conserver certaines informations.
      </p>

      <h2>Types de cookies utilisés</h2>
      <ul>
        <li>Cookies strictement nécessaires au fonctionnement du site ;</li>
        <li>Cookies de mesure d&apos;audience (statistiques anonymisées) ;</li>
        <li>
          Cookies tiers éventuels liés à des outils marketing, activés
          uniquement avec votre consentement lorsque requis.
        </li>
      </ul>

      <h2>Gestion des cookies</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour refuser
        les cookies ou être averti avant leur dépôt. Ce paramétrage est
        disponible dans les préférences de votre navigateur.
      </p>
    </LegalShell>
  );
}
