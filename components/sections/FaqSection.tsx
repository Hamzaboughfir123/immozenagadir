import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { faqJsonLd } from "@/lib/seo";

/**
 * Questions/réponses affichées ci-dessous et injectées dans le JSON-LD
 * FAQPage plus bas : une seule source de vérité, pour garantir que le
 * balisage structuré correspond exactement au contenu visible (recommandé
 * par Google et utile aux moteurs de réponse IA).
 */
const FAQ_ITEMS = [
  {
    question: "Comment vendre son bien immobilier à Agadir ?",
    answer:
      "Vous contactez ImmoZen Agadir par téléphone ou WhatsApp pour présenter votre bien. Nous évaluons son potentiel, préparons sa mise en valeur (présentation, visuels) puis le diffusons auprès d'acquéreurs potentiels via notre réseau de plus de 300 agences partenaires.",
  },
  {
    question: "Le propriétaire paie-t-il une commission avec ImmoZen ?",
    answer:
      "Non : ImmoZen Groupe propose 0 DH de commission propriétaire sur la transaction, selon les conditions applicables précisées lors de la mise en relation.",
  },
  {
    question: "Comment confier mon appartement à ImmoZen Agadir ?",
    answer: `Vous prenez contact via WhatsApp ou par téléphone au ${CONTACT.phone}. Un échange sans engagement permet de qualifier votre appartement et votre projet (vente ou location) avant de démarrer sa commercialisation.`,
  },
  {
    question: "Comment vendre une villa à Agadir avec ImmoZen ?",
    answer:
      "La démarche est la même que pour tout type de bien : premier contact, évaluation de la villa, préparation de sa présentation, puis recherche d'acquéreurs qualifiés jusqu'à la signature.",
  },
  {
    question: "ImmoZen s'occupe-t-il également de la location ?",
    answer:
      "Oui. ImmoZen Groupe accompagne les propriétaires aussi bien pour la vente que pour la location de leur bien à Agadir.",
  },
  {
    question: "Quels types de biens immobiliers sont pris en charge ?",
    answer:
      "Appartements, villas, maisons, terrains, commerces, riads et immeubles à Agadir sont pris en charge par ImmoZen Groupe.",
  },
  {
    question: "Comment fonctionne l'offre 0 DH de commission propriétaire ?",
    answer:
      "À la différence d'une commission d'agence traditionnelle facturée au propriétaire (souvent un pourcentage du prix de vente), ImmoZen Groupe ne facture pas de commission au propriétaire pour la transaction, selon les conditions applicables communiquées avant la mise en mandat.",
  },
  {
    question: "Comment proposer mon bien immobilier à ImmoZen Agadir ?",
    answer: `Le plus simple est d'écrire sur WhatsApp ou d'appeler directement au ${CONTACT.phone} en indiquant le type de bien, la localisation à Agadir et le projet (vente ou location).`,
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_ITEMS)) }}
      />
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Questions fréquentes"
          title="Ce que les propriétaires à Agadir demandent le plus"
          description="Des réponses courtes et factuelles sur la vente, la location et l'offre 0 DH de commission propriétaire."
          className="mx-auto"
        />

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-brand-beige/40 p-5 open:bg-brand-beige/60"
            >
              <summary className="cursor-pointer list-none font-display text-base font-semibold text-brand-ink marker:content-none sm:text-lg">
                <h3 className="inline">{item.question}</h3>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70 sm:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
