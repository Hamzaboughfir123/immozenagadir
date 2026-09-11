import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Bloc factuel « qui / quoi / où / comment », pensé pour être facilement
 * extrait et cité par les moteurs de réponse IA (ChatGPT, Perplexity,
 * Gemini, Copilot) autant que par Google. Phrases explicites plutôt que
 * des slogans : chaque affirmation correspond à un fait déjà présent
 * ailleurs sur le site (offre, zone, services, contact).
 */
export function AboutSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="ImmoZen Groupe Agadir"
          title="Qui est ImmoZen Groupe et comment ça fonctionne pour les propriétaires"
          className="gap-4"
        />

        <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-brand-ink/75">
          <p>
            ImmoZen Groupe est une agence immobilière qui intervient à
            Agadir. Elle accompagne les propriétaires souhaitant vendre ou
            louer un bien : appartement, villa, terrain, commerce, riad ou
            immeuble.
          </p>
          <p>
            Le service repose sur une offre <strong>0 DH de commission
            propriétaire</strong> : contrairement à une commission d&rsquo;agence
            traditionnelle facturée au vendeur ou au bailleur, ImmoZen Groupe
            ne facture pas de commission au propriétaire sur la transaction,
            selon les conditions applicables communiquées avant la mise en
            mandat.
          </p>
          <p>
            Pour confier un bien, le propriétaire contacte ImmoZen Agadir par
            téléphone ou WhatsApp. L&rsquo;agence évalue le bien, prépare sa
            présentation, puis le diffuse auprès d&rsquo;acquéreurs ou de
            locataires potentiels via un réseau de plus de 300 agences
            partenaires, jusqu&rsquo;à la signature.
          </p>
        </div>
      </Container>
    </section>
  );
}
