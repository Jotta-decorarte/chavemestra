<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-security-rules -->

# Segurança e privacidade do projeto

Antes de qualquer commit, push ou deploy:

- revisar os arquivos que serão enviados e procurar segredos, tokens, senhas, chaves privadas, credenciais, dados pessoais e documentos internos;
- confirmar que `referencias/`, inventários locais de Downloads e arquivos `.env` continuam excluídos do Git e da Vercel;
- nunca copiar documentos empresariais ou dados privados para `public/`;
- usar somente variáveis de ambiente para segredos e nunca expor segredos com prefixo `NEXT_PUBLIC_`;
- executar `npm audit`, `npm run typecheck` e `npm run build` antes da publicação;
- revisar dependências novas e evitar pacotes desnecessários;
- não fazer commit, push ou deploy se a avaliação encontrar risco não resolvido;
- informar claramente ao usuário o que foi verificado, os riscos encontrados e as limitações da análise.

Dados institucionais que já fazem parte do conteúdo público aprovado do site, como telefone comercial, CNPJ e endereço empresarial, não são tratados como segredos. Qualquer mudança nessa classificação exige confirmação do usuário.

<!-- END:project-security-rules -->
