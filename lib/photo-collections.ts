export const collections = [
  { slug: '', href: '/fotos', title: 'Escritório · modo retrato', description: 'Os cinco looks do ensaio, com fundo suavemente desfocado.' },
  { slug: 'fundo-nitido', href: '/fotos/fundo-nitido', title: 'Escritório · fundo nítido', description: 'Os mesmos looks e poses, com o escritório e a marca em foco.' },
  { slug: 'cafe', href: '/fotos/cafe', title: 'Momentos no café', description: 'Dois looks, seis momentos. Luz natural e fundo desfocado.' },
  { slug: 'palestras', href: '/fotos/palestras', title: 'No palco', description: 'Oito composições de palestra com a camisa listrada bege.' },
] as const;

export function galleryDestination(value: unknown): string {
  return collections.find(collection => collection.href === value)?.href ?? '/fotos';
}
