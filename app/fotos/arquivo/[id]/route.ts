import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createDecipheriv } from 'node:crypto';
import { authenticated, privateHeaders } from '@/lib/photo-auth';
import photos from '@/lib/photos.json';
import sharp from '@/lib/photos-sharp.json';
import cafe from '@/lib/photos-cafe.json';
import stage from '@/lib/photos-stage.json';
const allPhotos = [...photos, ...sharp, ...cafe, ...stage];
export const runtime='nodejs';
export async function GET(req:Request,{params}:{params:Promise<{id:string}>}) {
  if(!await authenticated()) return new Response('Entre para acessar esta foto.',{status:401,headers:privateHeaders});
  const {id}=await params;
  const photo=allPhotos.find(photo=>photo.id===id);
  if(!photo) return new Response(null,{status:404,headers:privateHeaders});
  try {
    const encrypted=await readFile(path.join(process.cwd(),'private-photos',photo.id+'.bin'));
    const decipher=createDecipheriv('aes-256-gcm',Buffer.from(process.env.PHOTO_ASSET_KEY!,'hex'),encrypted.subarray(0,12));
    decipher.setAuthTag(encrypted.subarray(12,28));
    const bytes=Buffer.concat([decipher.update(encrypted.subarray(28)),decipher.final()]);
    return new Response(new Uint8Array(bytes),{headers:{...privateHeaders,'Content-Type':'image/png','Content-Disposition':`${new URL(req.url).searchParams.has('download')?'attachment':'inline'}; filename="${photo.filename}"`,'X-Content-Type-Options':'nosniff'}});
  } catch { return new Response('Foto indisponível',{status:503,headers:privateHeaders}); }
}
