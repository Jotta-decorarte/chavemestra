"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items }: { items: readonly (readonly [string, string])[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="accordion">{items.map(([question, answer], index) => <div className="accordion-item" key={question}>
    <h3><button type="button" aria-expanded={open === index} aria-controls={`faq-panel-${index}`} id={`faq-button-${index}`} onClick={() => setOpen(open === index ? null : index)}>
      <span>{question}</span>{open === index ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
    </button></h3>
    <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={open !== index}><p>{answer}</p></div>
  </div>)}</div>;
}
