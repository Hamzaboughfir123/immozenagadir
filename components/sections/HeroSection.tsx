import { Container } from "@/components/ui/Container";
import { OpenPropertyLeadButton } from "@/components/property-lead/OpenPropertyLeadButton";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="accueil" className="hero-section">
      <div className="absolute inset-0">
        <Image src="/images/partir-a-agadir-au-maroc-shutterstock-2198783519.webp" alt="La baie d’Agadir et la colline de la Kasbah" fill priority sizes="100vw" className="hero-background object-cover" />
        <div className="hero-photo-overlay absolute inset-0" />
      </div>
      <Container className="hero-container relative">
        <div className="hero-content">
          <span className="hero-eyebrow">Agence immobilière nouvelle génération · Agadir · Maroc</span>
          <h1>Vous avez le bien.<br /><span>Nous avons le client.</span></h1>
          <div className="hero-accent" />
          <p className="hero-intro">Quel que soit votre bien, <strong>ImmoZen</strong> vous accompagne pour vendre ou louer <strong>sans rien payer.</strong></p>
          <div className="hero-commission">
            <strong>0 <span>DH</span></strong>
            <div><b>De commission</b><b className="hero-commission-owner">propriétaire*</b><small>Vente et location</small></div>
          </div>
          <div className="hero-actions">
            <OpenPropertyLeadButton variant="secondary" size="lg">Confier mon bien <span aria-hidden="true">→</span></OpenPropertyLeadButton>
            <a href="#simulateur" className="hero-savings-link">Estimer mon économie <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-footnote">* Offre de commission propriétaire selon conditions de mandat.</p>
        </div>
      </Container>
    </section>
  );
}
