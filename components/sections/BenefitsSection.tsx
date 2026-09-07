import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const BENEFITS = [
  {
    icon: ZeroIcon,
    title: "0 DH propriétaire",
    text: "Notre réussite, c'est de vendre votre bien — pas de vous facturer. 0 DH de commission ImmoZen Groupe, selon les conditions applicables.*",
    highlight: true,
  },
  {
    icon: SparkIcon,
    title: "Votre bien en lumière",
    text: "Une présentation qui donne envie et met en valeur chaque atout de votre bien dès le premier regard.",
    highlight: false,
  },
  {
    icon: EyeIcon,
    title: "Les bons acheteurs",
    text: "Votre annonce gagne en visibilité auprès de personnes réellement prêtes à acheter ou à louer.",
    highlight: false,
  },
  {
    icon: HandshakeIcon,
    title: "À vos côtés",
    text: "Un accompagnement simple et humain, de la première visite jusqu'à la signature finale.",
    highlight: false,
  },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" className="overflow-hidden bg-white py-4 sm:py-6">
      <Container>
        <div className="grid items-center gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div>
            <span className="inline-flex rounded-full bg-brand-pistachio px-4 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-ink">
              Propriétaires au Maroc
            </span>
            <h2 className="mt-2 max-w-2xl text-balance text-4xl font-extrabold leading-[0.92] text-brand-ink sm:text-5xl lg:text-4xl">
              Votre bien mérite
              <br />
              <span className="text-brand-forest">une meilleure histoire.</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-anthracite/75 sm:text-base">
              Nous faisons tout pour que votre bien se démarque, trouve le bon acquéreur et vous rapporte davantage,
              <strong className="text-brand-forest"> sans commission pour vous, propriétaire.</strong>
            </p>
          </div>

          <div className="relative mx-auto aspect-[1.8] w-full max-w-xl overflow-hidden rounded-[2rem] lg:aspect-[2.5]">
            <Image
              src="/images/property-types/villa.jpg"
              alt="Villa haut de gamme présentée par ImmoZen"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 min-w-[180px] -rotate-2 rounded-2xl border-2 border-brand-pistachio bg-brand-forest/85 px-5 py-3 text-center shadow-[0_14px_35px_rgba(6,115,61,0.4)] backdrop-blur-md sm:bottom-6 sm:right-6 sm:min-w-[230px] sm:px-7 sm:py-4">
              <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.18em] text-brand-pistachio sm:text-[10px]">Offre propriétaire</span>
              <strong className="block text-5xl font-black leading-[0.85] text-white sm:text-6xl">0 DH</strong>
              <span className="mt-2 block border-t border-brand-pistachio/60 pt-1 text-[10px] font-extrabold uppercase leading-tight text-white sm:text-xs">de commission propriétaire</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className={`relative rounded-3xl p-4 ${
                benefit.highlight
                  ? "bg-brand-forest text-white shadow-[0_18px_45px_-22px_rgba(6,115,61,0.65)]"
                  : "bg-brand-beige/55 text-brand-ink"
              }`}
            >
              {benefit.highlight ? (
                <span className="absolute -right-2 -top-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-brand-pistachio bg-brand-pistachio text-center text-[10px] font-black uppercase leading-tight text-brand-ink">
                  100%
                  <br />
                  garanti
                </span>
              ) : null}
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${benefit.highlight ? "bg-brand-pistachio text-brand-ink" : "bg-brand-forest text-white"}`}>
                <benefit.icon />
              </div>
              <h3 className="text-base font-extrabold">{benefit.title}</h3>
              <p className={`mt-1.5 text-xs leading-snug ${benefit.highlight ? "text-white/85" : "text-brand-ink/65"}`}>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button href="#confier-mon-bien" size="lg">
            Je confie mon bien à ImmoZen Groupe <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 11l4-4 4 3 4-3 4 4M7 10l4 5 4-5M5 12l-2 3 3 3M19 12l2 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZeroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16L16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
