# Chave Mestra Consultoria

Website institucional em Next.js App Router, TypeScript e Tailwind CSS 4.
Fonte editorial e visual principal: DESIGN_SYSTEM_CHAVE_MESTRA.md.

## Executar localmente

Requer Node.js >=20.9 e npm.

- npm ci
- npm run dev
- npm run typecheck
- npm run build
- npm start (após build)

A prévia desta sessão está em http://127.0.0.1:3000.

## Implementação

Home com todas as seções previstas, menu mobile em dialog, FAQ acessível,
fontes Alta Regular e Poppins locais, links WhatsApp com mensagem preenchida,
metadados básicos e rotas de robots/sitemap.
A composição sem fotografias foi autorizada pelo usuário.
Os originais de marca e documentos empresariais permanecem em referencias,
fora da pasta pública. Não houve edição ou extração desses assets.

## Configuração

.env.example documenta NEXT_PUBLIC_SITE_URL. Enquanto não houver domínio
validado, a prévia permanece noindex e o sitemap fica vazio.
Nenhum tracker remoto está instalado. Os cliques de WhatsApp geram eventos
locais em dataLayer, preparados para futura integração mediante configuração.
Cliques não são contabilizados automaticamente como leads confirmados.

## Pendências antes de publicar

- Confirmar logo/símbolo separados e a versão aprovada. A navegação usa o nome
  da empresa em texto; isso não substitui a entrega do logotipo oficial.
- Validar contatos divergentes registrados em docs/ORGANIZACAO_DOWNLOADS.md.
  Foi usado o WhatsApp do Design System; e-mail ainda não foi publicado.
- Confirmar domínio, criar imagem Open Graph e favicon com a marca aprovada.
- Confirmar licença web da Alta fornecida pelo usuário.
- Validar o dourado oficial, atualmente provisório.
- Configurar analytics e publicidade, se desejado.
- Revisar performance em ambiente de produção e autorizar deploy.
- Fotos da Renata são opcionais para esta versão, conforme decisão do usuário.

## Validação

Build de produção passou. Revisão de layout nas larguras 320, 390, 820 e
1440 pixels: sem overflow horizontal; fontes carregadas; H1 único;
âncoras e destino dos links WhatsApp verificados; FAQ e menu testados.
Relatório e capturas em docs/qa. Nenhuma mensagem de WhatsApp foi enviada.
Nenhum deploy foi realizado.

## Referências técnicas

https://nextjs.org/docs/app/getting-started/installation
https://tailwindcss.com/docs/installation/framework-guides/nextjs
