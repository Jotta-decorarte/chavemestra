import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/lib/content";
export default function FAQ() {
  return <section id="faq" className="section"><Container className="faq-grid"><SectionHeading eyebrow="FAQ">Perguntas frequentes.</SectionHeading><Accordion items={faqs} /></Container></section>;
}
