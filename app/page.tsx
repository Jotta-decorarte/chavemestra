import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AuthorityBar from "@/components/sections/AuthorityBar";
import Problems from "@/components/sections/Problems";
import Manifesto from "@/components/sections/Manifesto";
import ValueProposition from "@/components/sections/ValueProposition";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import MiddleCTA from "@/components/sections/MiddleCTA";
import Healthcare from "@/components/sections/Healthcare";
import AboutRenata from "@/components/sections/AboutRenata";
import Credentials from "@/components/sections/Credentials";
import InstitutionalBlock from "@/components/sections/InstitutionalBlock";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero /><AuthorityBar /><Problems /><Manifesto /><ValueProposition /><Services /><Process /><Benefits /><MiddleCTA /><AboutRenata /><Credentials /><Healthcare /><InstitutionalBlock /><FAQ /><FinalCTA /></main><Footer /><WhatsAppButton placement="floating">WhatsApp</WhatsAppButton></>;
}
