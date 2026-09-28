import { Cross } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
export default function Healthcare() {
  return <section className="section"><Container className="split-layout"><div><SectionHeading eyebrow="Expertise setorial">Gestão financeira com experiência aplicada ao setor de saúde.</SectionHeading><p className="section-description">A experiência da Chave Mestra contempla ambientes de saúde, assistência e serviços médicos, setores em que organização financeira, planejamento e controle precisam caminhar ao lado de uma operação complexa e regulada.</p></div><div className="healthcare-panel"><Cross size={40} strokeWidth={1} aria-hidden="true" /><span className="small-label">FORMAÇÃO ESPECIALIZADA</span><h3>MBA — Finanças para a Área de Saúde</h3><p className="healthcare-year">2025 <span>— Unimed</span></p><p>Uma formação que complementa a experiência prática em gestão e amplia a capacidade de compreender particularidades financeiras do setor.</p></div></Container></section>;
}
