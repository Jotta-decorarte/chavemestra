import { ArrowUpRight, Instagram } from "lucide-react";
import Container from "./Container";
import { navigation, site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return <footer className="site-footer"><Container>
    <div className="footer-grid"><div className="footer-brand"><a href="#inicio">CHAVE MESTRA</a><p className="footer-descriptor">Consultoria Financeira e Empresarial</p><p>Organização financeira, processos e estratégia para decisões empresariais mais claras.</p></div>
      <div><h2>Navegação</h2><nav aria-label="Navegação do rodapé">{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav></div>
      <div><h2>Contato</h2><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{site.phone}<ArrowUpRight size={15} aria-hidden="true" /></a><a href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" />Instagram</a><address>Av. das Américas, 4200<br />Bloco 1, Sala 305 · Barra da Tijuca<br />Rio de Janeiro/RJ · CEP 22640-907</address></div>
    </div>
    <div className="legal-company">CHAVE MESTRA CONSULTORIA FINANCEIRA E EMPRESARIAL LTDA <span>CNPJ: 64.351.434/0001-19</span></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Chave Mestra Consultoria. Todos os direitos reservados.</p><a href="https://agenciagpv.online" target="_blank" rel="noopener noreferrer">Desenvolvido por Agência GPV <ArrowUpRight size={13} aria-hidden="true" /></a></div>
  </Container></footer>;
}
