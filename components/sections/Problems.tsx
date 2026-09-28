import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { problems } from "@/lib/content";
export default function Problems() {
  return <section id="gestao" className="section"><Container className="split-layout"><div><SectionHeading eyebrow="Gestão começa com clareza">Sua empresa pode vender bem e ainda assim perder o controle dos números.</SectionHeading><p className="section-description">Quando informações financeiras, custos e processos não estão organizados, decisões importantes acabam sendo tomadas sem uma visão completa do negócio.</p></div>
    <div className="numbered-list">{problems.map(([title, body], index) => <article key={title}><span className="item-number">0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
  </Container></section>;
}
