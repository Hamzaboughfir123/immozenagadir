import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { OwnerLeadSection } from "@/components/sections/OwnerLeadSection";
import { PropertyTypesSection } from "@/components/sections/PropertyTypesSection";
import { SavingsSection } from "@/components/sections/SavingsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <BenefitsSection />
        <SavingsSection />
        <PropertyTypesSection />
        <HowItWorksSection />
        <AboutSection />
        <FaqSection />
        <OwnerLeadSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
