import type { Metadata } from 'next';
import { authenticated, ready } from '@/lib/photo-auth';
import photos from '@/lib/photos.json';
import Gallery from './gallery';
import './photos.css';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Fotos da Renata | Chave Mestra',robots:{index:false,follow:false},alternates:{canonical:'/fotos'}};
export default async function Photos({searchParams}:{searchParams:Promise<{erro?:string}>}) {
  const loggedIn=await authenticated();
  const {erro}=await searchParams;
  return <main className="photos-root">
    <header className="photos-header"><a href="/" className="photos-brand">CHAVE MESTRA<span>CONSULTORIA ADMINISTRATIVA E FINANCEIRA</span></a><span className="private-label">ÁREA PRIVADA</span>{loggedIn&&<form action="/fotos/sair" method="post"><button className="quiet-button">Sair</button></form>}</header>
    {loggedIn?<Gallery photos={photos}/>:<section className="login-layout"><div className="login-editorial"><span className="photos-eyebrow">ACERVO EXCLUSIVO</span><h1>Sua presença.<br/><em>Sua essência.</em></h1><p>Os retratos da Renata, reunidos em um só lugar. Escolha, visualize e baixe as imagens do seu ensaio.</p><div className="editorial-line"/><small>CHAVE MESTRA · ENSAIO PROFISSIONAL</small></div><form className="login-card" action="/fotos/entrar" method="post"><span className="photos-eyebrow">BEM-VINDA</span><h2>Acesse suas fotos</h2><p>Entre com seu login e senha para abrir a galeria.</p><label htmlFor="login">Login</label><input id="login" name="login" autoComplete="username" required maxLength={80}/><label htmlFor="password">Senha</label><input id="password" name="password" type="password" autoComplete="current-password" required maxLength={256}/>{erro&&<p role="alert" className="login-error">Login ou senha incorretos. Tente novamente.</p>}{!ready()&&<p role="status">A galeria está sendo preparada. Volte em breve.</p>}<button className="gold-button" disabled={!ready()}>Entrar na galeria <span aria-hidden>↗</span></button><small>Acesso exclusivo da Renata.</small></form></section>}
    <footer className="photos-footer">CHAVE MESTRA <span>Acervo fotográfico · Renata</span></footer>
  </main>;
}
