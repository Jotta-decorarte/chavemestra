"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navigation } from "@/lib/site";
import Container from "./Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ThemeToggle from "@/components/ui/ThemeToggle";

export function Brand() {
  return <a href="#inicio" className="brand" aria-label="Chave Mestra Consultoria Financeira — início"><Image src="/logos/logo-chave-mestra-PNG.png" alt="Chave Mestra Consultoria Financeira" width={1672} height={941} priority /></a>;
}

export default function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  function close() { dialog.current?.close(); setOpen(false); trigger.current?.focus(); }
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => { if (media.matches) { dialog.current?.close(); setOpen(false); } };
    media.addEventListener("change", onChange);
    return () => { document.body.style.overflow = previous; media.removeEventListener("change", onChange); };
  }, [open]);
  return <header className="site-header"><Container className="header-inner"><Brand />
    <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <div className="header-controls"><ThemeToggle /><WhatsAppButton placement="header" className="header-cta">Fale com uma consultora</WhatsAppButton>
      <button className="menu-toggle" ref={trigger} aria-label="Abrir menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Menu /></button>
    </div>
  </Container>
  <dialog id="mobile-navigation" ref={dialog} className="mobile-drawer" aria-label="Menu de navegação" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={event => { if (event.target === dialog.current) close(); }}>
    <div className="drawer-inner"><div className="drawer-top"><span className="drawer-brand">CHAVE MESTRA</span><button className="menu-toggle" aria-label="Fechar menu" onClick={close}><X /></button></div>
      <nav aria-label="Navegação mobile">{navigation.map(([label, href], index) => <a key={href} href={href} onClick={close}><span>0{index + 1}</span>{label}</a>)}</nav>
      <WhatsAppButton placement="header">Fale com uma consultora</WhatsAppButton>
    </div>
  </dialog></header>;
}
