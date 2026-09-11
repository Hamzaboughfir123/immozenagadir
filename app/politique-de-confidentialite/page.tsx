import { LegalShell } from "@/components/legal/LegalShell";
import { LEGAL_UPDATED_AT } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Comment ImmoZen Groupe collecte et traite les données personnelles transmises via le site.",
  alternates: { canonical: "/politique-de-confidentialite" },
});

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      path="/politique-de-confidentialite"
      updatedAt={LEGAL_UPDATED_AT.display}
    >
      <p>
        ImmoZen Groupe accorde une grande importance à la protection des données
        personnelles de ses visiteurs et prospects propriétaires,
        conformément à la loi n° 09-08 relative à la protection des
        personnes physiques à l&apos;égard du traitement des données à
        caractère personnel au Maroc.
      </p>

      <h2>Données collectées</h2>
      <p>
        Lorsque vous complétez le formulaire &laquo;&nbsp;Confier mon
        bien&nbsp;&raquo;, les données suivantes peuvent être collectées :
        nom, prénom, téléphone, WhatsApp, email, ville, type de bien, type de
        transaction, valeur approximative et message.
      </p>

      <h2>Finalité du traitement</h2>
      <ul>
        <li>Prendre contact avec vous au sujet de votre bien immobilier ;</li>
        <li>Évaluer et qualifier votre demande de mandat ;</li>
        <li>Vous adresser des informations liées à votre projet immobilier.</li>
      </ul>

      <h2>Conservation des données</h2>
      <p>
        Les données sont conservées pendant la durée nécessaire au
        traitement de votre demande, puis archivées ou supprimées
        conformément aux obligations légales applicables.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification et de
        suppression de vos données. Pour exercer ces droits, contactez-nous
        à contact@immozengroupe.com.
      </p>

      <h2>Sécurité</h2>
      <p>
        ImmoZen Groupe met en œuvre des mesures raisonnables pour protéger vos
        données contre tout accès, modification ou divulgation non autorisés.
      </p>
    </LegalShell>
  );
}
