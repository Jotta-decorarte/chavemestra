import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

export const cookieName = 'renata_fotos';
export const sessionSeconds = 12 * 60 * 60;
export function sameOrigin(request: Request) {
  try { return new URL(request.headers.get('origin') || '').host === request.headers.get('host'); }
  catch { return false; }
}
export function ready() { return !!(process.env.PHOTO_PASSWORD_HASH && process.env.PHOTO_SESSION_SECRET && process.env.PHOTO_ASSET_KEY); }
export function validPassword(user: string, password: string) {
  const [salt, hash] = (process.env.PHOTO_PASSWORD_HASH || '').split(':');
  if (!salt || !hash || password.length > 256) return false;
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return expected.length === actual.length && timingSafeEqual(actual, expected) && user === 'renata';
}
export function makeSession() {
  const secret = process.env.PHOTO_SESSION_SECRET;
  if (!secret) throw new Error('Gallery unavailable');
  const payload = `${Math.floor(Date.now()/1000)+sessionSeconds}.${randomBytes(24).toString('hex')}`;
  return `${payload}.${createHmac('sha256', secret).update(payload).digest('hex')}`;
}
export async function authenticated() {
  const secret = process.env.PHOTO_SESSION_SECRET;
  const token = (await cookies()).get(cookieName)?.value;
  if (!ready() || !secret || !token) return false;
  const parts = token.split('.');
  if (parts.length !== 3 || !/^\d+$/.test(parts[0]) || !/^[a-f0-9]{64}$/.test(parts[2])) return false;
  const expiry = Number(parts[0]);
  const now = Math.floor(Date.now()/1000);
  if (expiry <= now || expiry > now + sessionSeconds) return false;
  const mac = createHmac('sha256', secret).update(parts.slice(0,2).join('.')).digest();
  return timingSafeEqual(mac, Buffer.from(parts[2], 'hex'));
}
export const privateHeaders = {'Cache-Control':'private, no-store, max-age=0','X-Robots-Tag':'noindex, nofollow, noarchive','Vary':'Cookie'};
