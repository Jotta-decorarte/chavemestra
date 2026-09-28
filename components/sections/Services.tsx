import { ScanLine, Wallet, Route, SlidersHorizontal } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { services } from "@/lib/content";
const icons = [ScanLine, Wallet, Route, SlidersHorizontal];
export default function Services() {
  return <section className="section services-section"><Container><div className="section-intro"><SectionHeading eyebrow="Como podemos ajudar">Uma visão mais estruturada da gestão da sua empresa.</SectionHeading><p>A consultoria começa pela compreensão do cenário atual e avança para controles, planejamento e processos que façam sentido para a realidade do negócio.</p></div>
    <div className="services-grid">{services.map(([title, text], index) => { const Icon = icons[index]; return <ServiceCard key={title} number={`0${index + 1}`} title={title} icon={<Icon size={29} strokeWidth={1.25} aria-hidden="true" />}>{text}</ServiceCard>; })}</div>
    <div className="section-action"><WhatsAppButton placement="services" variant="secondary">Quero entender qual solução minha empresa precisa</WhatsAppButton></div>
  </Container></section>;
}
