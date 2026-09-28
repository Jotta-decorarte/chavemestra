import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title"><Container>
    <div className="hero-grid"><div className="hero-copy"><Eyebrow>Chave Mestra Consultoria</Eyebrow>
      <h1 id="hero-title">Clareza financeira para decisões que fazem sua empresa <span>avançar.</span></h1>
      <p className="hero-description">Organizamos números, processos e informações financeiras para que você tenha mais controle, previsibilidade e segurança nas decisões do seu negócio.</p>
      <div className="hero-actions"><WhatsAppButton placement="hero">Quero falar com uma consultora</WhatsAppButton><a className="text-link" href="#consultoria">Conheça a consultoria <ArrowDown size={16} aria-hidden="true" /></a></div>
      <p className="microproof">+15 anos de experiência <span>·</span> Gestão financeira <span>·</span> Planejamento estratégico</p>
    </div>
    <div className="hero-editorial" aria-label="Finanças, gestão e estratégia"><div className="editorial-top"><span>CHAVE MESTRA</span><ArrowUpRight size={24} aria-hidden="true" /></div>
      <div className="editorial-lines"><span>Finanças.</span><span>Gestão.</span><span>Estratégia.</span></div>
      <div className="editorial-bottom"><span>Organização financeira,<br />processos e estratégia.</span><span className="editorial-circle" aria-hidden="true"><ArrowUpRight size={34} strokeWidth={1} /></span></div>
    </div></div>
    <div className="hero-footnote"><span>CONSULTORIA ADMINISTRATIVA E FINANCEIRA</span><a href="#gestao">Gestão começa com clareza <ArrowDown size={14} aria-hidden="true" /></a></div>
  </Container></section>;
}
