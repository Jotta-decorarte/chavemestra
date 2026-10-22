import fs from 'node:fs';
import path from 'node:path';
import {createCipheriv,randomBytes} from 'node:crypto';
const source=process.argv[2];
if(!source || !process.env.PHOTO_ASSET_KEY) throw new Error('Set source folder and PHOTO_ASSET_KEY');
const key=Buffer.from(process.env.PHOTO_ASSET_KEY,'hex');
const looks=[['BRANCO-MOSTARDA','Branco e mostarda'],['LISTRADA-BEGE','Listrado bege'],['TERNO-AZUL','Terno azul'],['TERNO-PRETO','Terno preto'],['TERNO-VERMELHO','Terno vermelho']];
const poses=['Braços cruzados','Mão no queixo','Sentada · mão no queixo','Sentada · relaxada','Em pé · de lado','À mesa com notebook'];
fs.mkdirSync('private-photos',{recursive:true});
const photos=[];
for(const [prefix,look] of looks){
  const files=fs.readdirSync(source).filter(name=>new RegExp(`^RENATA-${prefix}-0[1-6]-.+-v1\\.png$`).test(name)).sort();
  for(const filename of files){
    const sequence=Number(filename.match(/-0([1-6])-/)[1]);
    const id=prefix.toLowerCase()+'-'+sequence;
    const out=path.join('private-photos',id+'.bin');
    if(!fs.existsSync(out)){
      const iv=randomBytes(12),cipher=createCipheriv('aes-256-gcm',key,iv);
      const encrypted=Buffer.concat([cipher.update(fs.readFileSync(path.join(source,filename))),cipher.final()]);
      fs.writeFileSync(out,Buffer.concat([iv,cipher.getAuthTag(),encrypted]));
    }
    photos.push({id,filename,look,pose:poses[sequence-1]});
  }
}
fs.writeFileSync('lib/photos.json',JSON.stringify(photos,null,2)+'\n');
console.log(JSON.stringify({photos:photos.length,looks:looks.map(([,look])=>({look,count:photos.filter(p=>p.look===look).length}))}));
