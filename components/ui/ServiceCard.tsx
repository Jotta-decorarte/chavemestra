import type { ReactNode } from "react";
export default function ServiceCard({ number, icon, title, children }: { number: string; icon: ReactNode; title: string; children: ReactNode }) {
  return <article className="service-card"><div className="service-top"><span>{number}</span>{icon}</div><h3>{title}</h3><p>{children}</p></article>;
}
