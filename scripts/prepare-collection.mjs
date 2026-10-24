import fs from 'node:fs';
import path from 'node:path';
import { createCipheriv, randomBytes } from 'node:crypto';

const [source, manifestPath, collection] = process.argv.slice(2);
const expected = { sharp: 30, cafe: 6, stage: 8 };
if (!Object.hasOwn(expected, collection) || !source || !manifestPath) throw new Error('Provide source, manifest and collection (sharp/cafe/stage).');
const key = Buffer.from(process.env.PHOTO_ASSET_KEY ?? '', 'hex');
if (key.length !== 32) throw new Error('PHOTO_ASSET_KEY must contain a 32-byte key.');
const jobs = JSON.parse(fs.readFileSync(manifestPath, 'utf8').replace(/^\uFEFF/, ''));
if (jobs.length !== expected[collection]) throw new Error('Incomplete collection.');
const photos = jobs.map(({ id, file, look, pose }) => ({ id, filename: file, look, pose }));
if (new Set(photos.map(photo => photo.id)).size !== photos.length) throw new Error('Duplicate IDs.');
for (const photo of photos) {
  if (!/^[a-z0-9-]+$/.test(photo.id) || path.basename(photo.filename) !== photo.filename) throw new Error('Invalid photo metadata.');
  const bytes = fs.readFileSync(path.join(source, photo.filename));
  if (bytes.subarray(1, 4).toString() !== 'PNG') throw new Error('Expected PNG.');
}
fs.mkdirSync('private-photos', { recursive: true });
for (const photo of photos) {
  const out = path.join('private-photos', `${photo.id}.bin`);
  if (fs.existsSync(out)) continue;
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(fs.readFileSync(path.join(source, photo.filename))), cipher.final()]);
  fs.writeFileSync(out, Buffer.concat([iv, cipher.getAuthTag(), encrypted]));
}
fs.writeFileSync(`lib/photos-${collection}.json`, JSON.stringify(photos, null, 2) + '\n');
console.log(`Prepared ${photos.length} protected photos for ${collection}.`);
