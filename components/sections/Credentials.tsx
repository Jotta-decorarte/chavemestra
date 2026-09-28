import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { credentials } from "@/lib/content";
export default function Credentials() {
  return <section className="section"><Container className="split-layout"><SectionHeading eyebrow="Formação">Conhecimento construído para enxergar o negócio por diferentes perspectivas.</SectionHeading><ol className="credentials">{credentials.map(([year, title, institution]) => <li key={year}><span>{year}</span><div><h3>{title}</h3><p>{institution}</p></div></li>)}</ol></Container></section>;
}
