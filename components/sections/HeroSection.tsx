import { Container } from "@/components/ui/Container";
import Image from "next/image";

const PROPERTY_TYPES = [
  {
    label: "Villa",
    image: "/images/property-types/villa.jpg",
    description: "Vivez l'exception à Marrakech",
    href: "#types-de-biens",
  },
  {
    label: "Appartement",
    image: "/images/property-types/appartement.jpg",
    description: "Confort moderne au cœur de la ville",
    href: "#types-de-biens",
  },
  {
    label: "Riad",
    image: "/images/property-types/riad.jpg",
    description: "Charme authentique et raffiné",
    href: "#types-de-biens",
  },
  {
    label: "Terrain",
    image: "/images/property-types/terrain.jpg",
    description: "Investissez dans l'avenir",
    href: "#types-de-biens",
  },
];

export function HeroSection() {
  return (
    <section id="accueil" className="relative bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-marrakech.jpg"
          alt="Marrakech au coucher du soleil, avec ses palmiers et son minaret"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <Container className="hero-container relative flex min-h-[calc(100svh-5rem)] flex-col justify-start py-2 sm:py-4">
        <div className="hero-content mx-auto w-full max-w-6xl text-center">
          <span className="mb-2 inline-flex items-center gap-2 rounded-sm border border-brand-pistachio/70 bg-black/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_18px_rgba(165,210,50,0.12)] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
            Agence immobilière nouvelle génération · Maroc
          </span>

          <h1 className="mx-auto max-w-5xl text-balance font-sans text-2xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Villa <span className="text-brand-pistachio">?</span> Appartement <span className="text-brand-pistachio">?</span>
            <br />
            Riad <span className="text-brand-pistachio">?</span> Terrain <span className="text-brand-pistachio">?</span>
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-balance text-xs leading-snug text-white sm:mt-5 sm:text-xl">
            Quel que soit votre bien, <strong className="text-brand-pistachio">ImmoZen</strong> vous accompagne
            <br className="hidden sm:block" /> pour vendre ou louer <strong className="text-brand-pistachio">sans rien payer.</strong>
          </p>

          <div className="hero-properties mt-3 grid grid-cols-2 gap-1.5 sm:mt-5 sm:grid-cols-4 sm:gap-3">
            {PROPERTY_TYPES.map((property) => (
              <a
                key={property.label}
                href={property.href}
                className="group relative aspect-[1.8] overflow-hidden rounded-md border border-brand-pistachio/25 bg-black/40 text-left shadow-[0_10px_30px_rgba(0,0,0,0.3)] sm:aspect-[1.75]"
              >
                <Image
                  src={property.image}
                  alt={property.label}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                <span className="absolute left-1/2 top-1.5 -translate-x-1/2 rounded-sm bg-brand-pistachio px-2 py-0.5 text-[9px] font-extrabold uppercase text-brand-ink sm:top-3 sm:px-3 sm:py-1 sm:text-sm">
                  {property.label}
                </span>
                <span className="absolute bottom-1 left-1 right-1 text-[9px] font-medium leading-tight text-white sm:bottom-3 sm:left-3 sm:right-3 sm:text-xs">
                  {property.description}
                </span>
              </a>
            ))}
          </div>

          <div className="hero-commission mt-2 grid grid-cols-[auto_1fr] items-center rounded-2xl border border-brand-pistachio bg-black/60 px-3 py-2 text-left backdrop-blur-sm sm:mt-3 sm:grid-cols-[auto_1fr_auto] sm:gap-5 sm:px-6 sm:py-2">
            <strong className="font-sans text-4xl font-black leading-none text-white sm:text-6xl">
              0<span className="text-2xl text-brand-pistachio sm:text-4xl">DH</span>
            </strong>
            <div className="border-l border-white/30 pl-3 sm:pl-5">
              <strong className="block text-sm font-extrabold uppercase leading-none text-white sm:text-xl">
                De commission
              </strong>
              <span className="mt-1 block text-sm font-extrabold uppercase leading-none text-brand-pistachio sm:text-xl">
                propriétaire*
              </span>
            </div>
            <span className="col-span-2 mt-1 text-[9px] font-medium text-white/80 sm:col-span-1 sm:mt-0 sm:text-right sm:text-xs">
              Vente · Location · Gestion
              <br />
              Agence immobilière au Maroc
            </span>
          </div>
          <p className="mt-1 text-[8px] text-white/70 sm:mt-2 sm:text-[10px]">
            * Offre de commission propriétaire selon conditions de mandat.
          </p>
        </div>
      </Container>
    </section>
  );
}
