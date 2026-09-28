import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";
export default function Process() {
  return <section id="como-funciona" className="section"><Container><SectionHeading eyebrow="Como funciona">Da análise à ação: uma consultoria conectada à realidade da sua empresa.</SectionHeading><ol className="process-grid">{steps.map(([title, text], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></Container></section>;
}
