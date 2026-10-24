# Galeria da Renata

Rota: `/fotos`. Login exclusivo, filtros por roupa, ampliação e download de PNG.

## Coleções separadas

- `/fotos`: os 30 retratos originais do escritório.
- `/fotos/fundo-nitido`: 30 versões com escritório em foco.
- `/fotos/cafe`: seis fotos em dois looks, com fundo desfocado.
- `/fotos/palestras`: oito composições de palco com camisa listrada.

Cada coleção usa seu próprio manifesto. A navegação troca a página, sem misturar arquivos no filtro. O formulário de acesso mantém a coleção escolhida; destinos aceitos são limitados às quatro rotas acima. Todas compartilham a proteção de sessão e de arquivos existente.

Para preparar uma nova coleção: `node --env-file=.env.local scripts/prepare-collection.mjs PASTA MANIFESTO sharp|cafe|stage`. O manifesto de entrada contém `id`, `file`, `look` e `pose`; prompts e referências locais não entram no manifesto publicado. O script valida a quantidade esperada antes de criptografar.

## Configuração privada

Definir apenas no servidor: `PHOTO_PASSWORD_HASH` (salt e hash scrypt separados por dois-pontos), `PHOTO_SESSION_SECRET` e `PHOTO_ASSET_KEY` (chave AES de 32 bytes, hexadecimal). Não usar prefixo NEXT_PUBLIC. Os valores locais estão em `.env.local`, ignorado pelo Git e pelo deploy. Os mesmos valores de sessão, hash e criptografia foram configurados como segredos na Vercel.

As fotos estão criptografadas em `private-photos/*.bin`, fora de `public`. A rota de arquivo verifica a sessão antes de descriptografar. A sessão dura 12 horas, usa HMAC, cookie HttpOnly, SameSite=Strict e Secure em produção. Respostas privadas usam no-store e noindex. Os originais não são enviados ao repositório.

Para adicionar fotos, executar `node --env-file=.env.local scripts/prepare-photos.mjs CAMINHO_DAS_EDITADAS`. O manifesto fica em `lib/photos.json`. Não trocar a chave de criptografia sem regenerar todos os arquivos criptografados.

Limitação: a limitação de tentativas de login é por instância do servidor, sem contador distribuído. Acesso usa a conta compartilhada solicitada, sem recuperação automática de senha ou cadastro público. Sair remove o cookie do navegador; uma cópia previamente roubada do token expira em até 12 horas.

## Validação

- Auditoria das dependências: zero vulnerabilidades após atualização compatível.
- Tipos e compilação de produção aprovados.
- Testes HTTP: página principal, login correto/incorreto, origem externa bloqueada, imagem sem autenticação bloqueada, arquivo criptografado não público, download PNG, flags do cookie, cookie adulterado e saída.
- Teste visual no navegador: login, filtro por roupa e ampliação.

Imagens geradas com IA devem ser revisadas pela cliente quanto à fidelidade facial. Os arquivos são entregues na resolução nativa da geração; não são anunciados como 8K.
