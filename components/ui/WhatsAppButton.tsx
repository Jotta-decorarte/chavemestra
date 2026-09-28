"use client";

import type { ReactNode } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

type Placement = "header" | "hero" | "services" | "middle_cta" | "final_cta" | "floating";

export default function WhatsAppButton({ children, placement, variant = "primary", className = "" }: {
  children: ReactNode; placement: Placement; variant?: "primary" | "secondary" | "outline"; className?: string;
}) {
  function trackClick() {
    // No tracker is loaded. A consent-managed GTM integration can consume these events later.
    const target = window as Window & { dataLayer?: Record<string, unknown>[] };
    target.dataLayer ??= [];
    target.dataLayer.push({ event: `${placement}_whatsapp`, placement });
    target.dataLayer.push({ event: "whatsapp_click", placement });
  }
  const floating = placement === "floating";
  return <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackClick}
    className={floating ? "floating-whatsapp" : `button button-${variant} ${className}`}
    aria-label={floating ? "Falar com Renata pelo WhatsApp (abre em nova aba)" : undefined}>
    {floating ? <MessageCircle size={25} aria-hidden="true" /> : <>{children}<ArrowUpRight size={19} aria-hidden="true" /></>}
  </a>;
}
