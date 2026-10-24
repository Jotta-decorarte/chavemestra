import { NextRequest, NextResponse } from 'next/server';
import { galleryDestination } from '@/lib/photo-collections';
import { cookieName, makeSession, privateHeaders, ready, sameOrigin, sessionSeconds, validPassword } from '@/lib/photo-auth';
const attempts = new Map<string,{count:number,until:number}>();
export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return new Response('Acesso negado',{status:403,headers:privateHeaders});
  if (!ready()) return new Response('Galeria temporariamente indisponível',{status:503,headers:privateHeaders});
  if (Number(req.headers.get('content-length') || 0)>4096) return new Response(null,{status:413});
  const ip = req.headers.get('x-vercel-forwarded-for') || req.headers.get('x-forwarded-for') || 'local';
  const now = Date.now();
  for (const [key,value] of attempts) if (value.until<now) attempts.delete(key);
  if (attempts.size>10000) return new Response('Tente novamente em alguns minutos.',{status:429,headers:privateHeaders});
  const limit = attempts.get(ip) || {count:0,until:now+60000};
  limit.count++; attempts.set(ip,limit);
  if (limit.count>8) return new Response('Muitas tentativas. Aguarde um minuto.',{status:429,headers:{...privateHeaders,'Retry-After':'60'}});
  const form = await req.formData();
  const destination = galleryDestination(form.get('next'));
  if (!validPassword(String(form.get('login') || '').trim(),String(form.get('password') || ''))) {
    await new Promise(resolve=>setTimeout(resolve,500));
    return NextResponse.redirect(new URL(destination+'?erro=1',req.headers.get('origin')!),{status:303,headers:privateHeaders});
  }
  attempts.delete(ip);
  const response = NextResponse.redirect(new URL(destination,req.headers.get('origin')!),{status:303,headers:privateHeaders});
  response.cookies.set(cookieName,makeSession(),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/fotos',maxAge:sessionSeconds});
  return response;
}

