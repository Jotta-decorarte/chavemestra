import { NextRequest, NextResponse } from 'next/server';
import { cookieName, privateHeaders, sameOrigin } from '@/lib/photo-auth';
export async function POST(req: NextRequest) {
  if(!sameOrigin(req)) return new Response(null,{status:403});
  const response=NextResponse.redirect(new URL('/fotos',req.headers.get('origin')!),{status:303,headers:privateHeaders});
  response.cookies.set(cookieName,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/fotos',maxAge:0});
  return response;
}

