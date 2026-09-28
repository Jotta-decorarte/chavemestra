import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/content";
export default function Benefits() {
  return <section className="section ivory"><Container><SectionHeading eyebrow="O que muda na prática">Mais clareza para administrar.<br />Mais segurança para decidir.</SectionHeading><div className="benefits-grid">{benefits.map(([title, text]) => <article key={title}><ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}
