import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collections } from '@/lib/photo-collections';
import sharp from '@/lib/photos-sharp.json';
import cafe from '@/lib/photos-cafe.json';
import stage from '@/lib/photos-stage.json';
import PhotoPage from '../photo-page';

export const dynamic = 'force-dynamic';
type Props = { params: Promise<{ collection: string }>; searchParams: Promise<{ erro?: string }> };
const albums = { 'fundo-nitido': sharp, cafe, palestras: stage };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection } = await params;
  const album = collections.find(item => item.slug === collection);
  return { title: `${album?.title ?? 'Fotos'} | Renata`, robots: { index: false, follow: false }, alternates: { canonical: album?.href ?? '/fotos' } };
}

export default async function CollectionPage({ params, searchParams }: Props) {
  const { collection } = await params;
  const album = collections.find(item => item.slug === collection);
  if (!album || !Object.hasOwn(albums, collection)) notFound();
  return <PhotoPage album={album} photos={albums[collection as keyof typeof albums]} error={(await searchParams).erro} />;
}
