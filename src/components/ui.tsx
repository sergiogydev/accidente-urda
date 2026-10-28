import { ArrowUpRight, TrainFront } from "lucide-react";
import type { ReactNode } from "react";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#inicio" className={`brand ${footer ? "brand-footer" : ""}`} aria-label="InfoTren, inicio">
      <span className="brand-icon"><TrainFront size={25} strokeWidth={1.7} aria-hidden="true" /></span>
      <span><span className="brand-name">InfoTren<span className="brand-dot">.</span></span><span className="brand-description">Información y ayuda ferroviaria</span></span>
    </a>
  );
}

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="source-link" href={href} rel="noreferrer">{children}<ArrowUpRight size={14} aria-hidden="true" /></a>;
}

export function SectionHeading({ number, title, description, id }: { number: string; title: string; description: string; id: string }) {
  return <div className="section-heading"><span className="section-number" aria-hidden="true">{number}</span><div><h2 id={id}>{title}</h2><p>{description}</p></div></div>;
}
