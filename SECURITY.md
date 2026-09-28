# Política de segurança do projeto

## Conteúdo público permitido

- Código-fonte do site.
- Textos e dados institucionais aprovados para exibição pública.
- Fontes locais com licença adequada.
- Imagens e identidade visual explicitamente aprovadas para o site.

## Conteúdo que nunca deve ser enviado

- A pasta `referencias/` e seus documentos internos.
- Relatórios internos em `docs/`, incluindo inventários, caminhos locais e divergências cadastrais.
- Arquivos `.env`, credenciais, tokens, senhas, chaves e certificados.
- Backups, bancos de dados, listas de contatos ou exportações de contas.
- Materiais de terceiros que não tenham sido aprovados para publicação.

## Verificação obrigatória antes de publicar

1. Conferir `git status` e `git diff --cached`.
2. Procurar segredos e dados pessoais nos arquivos candidatos ao commit.
3. Executar `npm audit`, `npm run typecheck` e `npm run build`.
4. Confirmar que `.gitignore` e `.vercelignore` protegem os materiais privados.
5. Publicar inicialmente como repositório privado e validar a URL da Vercel.

Nenhuma revisão automática garante risco zero. Contas do GitHub e da Vercel devem usar senha exclusiva, autenticação em dois fatores e permissões mínimas.
