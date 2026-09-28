import Container from "@/components/layout/Container";
export default function AuthorityBar() {
  return <div className="authority-bar"><Container><ul>{[["+15 anos", "Experiência em gestão"], ["Finanças", "Controle e planejamento"], ["Processos", "Organização empresarial"], ["Saúde", "Experiência setorial"]].map(([title, detail]) => <li key={title}><strong>{title}</strong><span>{detail}</span></li>)}</ul></Container></div>;
}
