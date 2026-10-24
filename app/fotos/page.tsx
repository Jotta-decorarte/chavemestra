import type { Metadata } from 'next';
import photos from '@/lib/photos.json';
import { collections } from '@/lib/photo-collections';
import PhotoPage from './photo-page';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Fotos da Renata | Chave Mestra', robots: { index: false, follow: false }, alternates: { canonical: '/fotos' } };
export default async function Photos({ searchParams }: { searchParams: Promise<{ erro?: string }> }) {
  return <PhotoPage album={collections[0]} photos={photos} error={(await searchParams).erro} />;
}
