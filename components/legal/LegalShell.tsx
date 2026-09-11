import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";
import type { ReactNode } from "react";

export function LegalShell({
  title,
  path,
  updatedAt,
  children,
}: {
  title: string;
  /** Chemin de la page (ex: "/mentions-legales"), pour le breadcrumb JSON-LD. */
  path: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: `${SITE_URL}/` },
              { name: title, url: `${SITE_URL}${path}` },
            ]),
          ),
        }}
      />
      <Navbar />
      <main className="bg-white py-24 sm:py-32">
        <Container as="article" className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium text-brand-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-brand-ink/50">
            Dernière mise à jour : {updatedAt}
          </p>
          <div className="prose-legal mt-10 flex flex-col gap-6 text-[15px] leading-relaxed text-brand-ink/75 [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-brand-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
