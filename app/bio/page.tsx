import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Globe, Instagram, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./bio.module.css";

export const metadata: Metadata = {
  title: "Links | Chave Mestra Consultoria",
  description: "Acesse o site, o Instagram e o WhatsApp da Chave Mestra Consultoria.",
  alternates: { canonical: "https://chavemestra888.com.br/bio" },
};

const bioMessage = "Olá, Renata! Vim pelo Instagram da Chave Mestra e gostaria de saber mais sobre a consultoria e como ela pode ajudar minha empresa.";
const bioWhatsAppUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(bioMessage)}`;

const links = [
  { href: "/", label: "Site oficial", icon: Globe },
  { href: site.instagram, label: "Instagram", icon: Instagram },
  { href: bioWhatsAppUrl, label: "Fale pelo WhatsApp", icon: MessageCircle },
];

const agencyUrl =
  "https://agenciagpv.com.br/?utm_source=chave_mestra&utm_medium=referral&utm_campaign=link_na_bio&utm_content=credito_rodape";

export default function BioPage() {
  return (
    <main className={styles.page}>
      <div className={styles.profile}>
        <Image
          className={styles.portrait}
          src="/images/renata/renata-vermelho.webp"
          alt="Renata Lopes, fundadora da Chave Mestra"
          width={1122}
          height={1402}
          sizes="112px"
        />
        <h1>Chave Mestra</h1>
        <p>Consultoria financeira e empresarial</p>
        <nav className={styles.links} aria-label="Links da Chave Mestra">
          {links.map(({ href, label, icon: Icon }) => (
            <a key={label} href={href}>
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <footer className={styles.credit}>
          <a href={agencyUrl}>Produzido por <span>agenciagpv.com.br</span></a>
        </footer>
      </div>
    </main>
  );
}
