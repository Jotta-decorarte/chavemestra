import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
export default function SectionHeading({ eyebrow, children, id }: { eyebrow: string; children: ReactNode; id?: string }) {
  return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2 id={id}>{children}</h2></div>;
}
