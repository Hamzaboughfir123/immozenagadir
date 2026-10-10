"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { openPropertyLeadModal } from "@/components/property-lead/lead-modal-events";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-navbar sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(16,18,15,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-2 max-sm:px-3">
        <a href="#accueil" className="flex items-center" aria-label={SITE_NAME}>
          <span className="relative block h-[50px] w-[128px] shrink-0 sm:h-[62px] sm:w-[210px]">
            <Image
              src="/images/logo-immozen-transparent.png"
              alt={SITE_NAME}
              width={2175}
              height={723}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </a>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#f1f5ef] px-5 py-4 whitespace-nowrap text-sm font-semibold text-brand-forest transition-colors hover:text-brand-forest-dark xl:inline-flex"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phone}`}
          >
            <WhatsAppIcon />
            {CONTACT.phone}
          </a>
          <Button onClick={() => openPropertyLeadModal()} size="md">
            Confier mon bien
          </Button>
        </div>

        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-1 whitespace-nowrap text-xs font-bold text-brand-forest min-[375px]:text-sm lg:hidden"
          aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phone}`}
        >
          <WhatsAppIcon />
          {CONTACT.phone}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-brand-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-ink/10 bg-white px-6 pb-8 pt-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink/80 hover:bg-brand-beige"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phone}`}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-brand-forest/25 px-5 py-3 text-sm font-semibold text-brand-forest"
          >
            <WhatsAppIcon />
            {CONTACT.phone}
          </a>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setOpen(false);
              openPropertyLeadModal();
            }}
          >
            Confier mon bien
          </Button>
        </div>
      ) : null}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.95L0 24l6.27-1.64a11.94 11.94 0 0 0 5.78 1.47h.01c6.58 0 11.93-5.35 11.94-11.93a11.87 11.87 0 0 0-3.48-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.48-4.45 9.93-9.95 9.93Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.11.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}
