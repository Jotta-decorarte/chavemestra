'use client';
import { useRef, useState } from 'react';
type Photo={id:string;filename:string;look:string;pose:string};
export default function Gallery({photos}:{photos:Photo[]}) {
  const [filter,setFilter]=useState('Todos');
  const [selected,setSelected]=useState<Photo|null>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const visible=filter==='Todos'?photos:photos.filter(photo=>photo.look===filter);
  const looks=['Todos',...new Set(photos.map(photo=>photo.look))];
  function open(photo:Photo){setSelected(photo);dialog.current?.showModal();}
  return <section className="gallery-content"><div className="gallery-title"><div><span className="photos-eyebrow">SEU ENSAIO PROFISSIONAL</span><h1>Galeria da Renata</h1><p>Cada look, uma nova forma de se apresentar.</p></div><span className="photo-count">{photos.length}<small>RETRATOS</small></span></div><div className="photo-filters" aria-label="Filtrar por roupa">{looks.map(look=><button key={look} aria-pressed={filter===look} onClick={()=>setFilter(look)}>{look}</button>)}</div><p className="results-label">{visible.length} fotos · Clique para ampliar</p><div className="photos-grid">{visible.map((photo,index)=><article className="photo-card" key={photo.id}><button className="photo-preview" onClick={()=>open(photo)} aria-label={`Ampliar: ${photo.look}, ${photo.pose}`}><img src={`/fotos/arquivo/${photo.id}`} alt={`Renata — ${photo.look}, ${photo.pose}`} loading={index<3?'eager':'lazy'} width={1122} height={1402}/><span className="expand-label">Ampliar ↗</span></button><div className="photo-caption"><div><span>{photo.look}</span><h2>{photo.pose}</h2></div><a href={`/fotos/arquivo/${photo.id}?download=1`} aria-label={`Baixar ${photo.look}, ${photo.pose}`} title="Baixar foto">↓</a></div></article>)}</div><dialog aria-label="Foto ampliada" className="photo-dialog" ref={dialog} onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}}>{selected&&<><button className="dialog-close" onClick={()=>dialog.current?.close()} aria-label="Fechar foto">×</button><img src={`/fotos/arquivo/${selected.id}`} alt={`Renata — ${selected.pose}`}/><div className="dialog-caption"><p>{selected.look} · {selected.pose}</p><a className="gold-button" href={`/fotos/arquivo/${selected.id}?download=1`}>Baixar foto ↓</a></div></>}</dialog></section>;
}

