# DESIGN SYSTEM --- CHAVE MESTRA CONSULTORIA

**Versão:** 1.0\
**Projeto:** Website institucional e comercial\
**Marca:** Chave Mestra Consultoria\
**Fundadora:** Renata Lopes\
**Fluxo:** Codex → Git → Vercel\
**Referência estrutural principal:** Consultoria Trilha ---
https://consultoriatrilha.com.br/\
**Referência complementar:** J. Morelli Consultoria ---
https://jmorelliconsultoria.com.br/

------------------------------------------------------------------------

## 1. INSTRUÇÕES PARA O CODEX

Leia este documento inteiro antes de gerar ou modificar componentes.
Este arquivo é a **fonte de verdade visual, estrutural e editorial** do
projeto Chave Mestra.

### Obrigatório

-   Respeitar identidade, tipografia, cores, espaçamentos e hierarquia
    definidos aqui.
-   Construir componentes reutilizáveis.
-   Entregar experiência consistente em desktop, tablet e mobile.
-   Priorizar performance, SEO, acessibilidade e conversão via WhatsApp.
-   Usar a copy aprovada neste documento.
-   Manter o visual premium pela organização, espaço negativo,
    fotografia e tipografia --- não pelo excesso de dourado.
-   Preservar a identidade própria da Chave Mestra. Sites de referência
    servem para arquitetura e direção, não para cópia literal.

### Não fazer

-   Não inventar depoimentos, clientes, avaliações, certificações,
    prêmios ou métricas.
-   Não adicionar números como "+500 empresas atendidas".
-   Não inventar serviços não fornecidos.
-   Não transformar o projeto em template SaaS.
-   Não usar azul, verde, rosa ou outras cores fora do sistema.
-   Não criar gradientes aleatórios.
-   Não exagerar no dourado.
-   Não usar imagens clichês de dinheiro, moedas, calculadoras ou
    gráficos de bolsa.
-   Não substituir Alta Regular e Poppins por fontes aleatórias.
-   Não preencher espaço com conteúdo inventado.
-   Não copiar literalmente os sites de referência.

------------------------------------------------------------------------

## 2. OBJETIVO DO SITE

Criar um website institucional premium para a **Chave Mestra
Consultoria**, focado em:

1.  gerar autoridade;
2.  explicar a consultoria administrativa e financeira;
3.  demonstrar experiência e formação;
4.  mostrar benefícios de uma gestão financeira estruturada;
5.  converter visitantes em conversas pelo WhatsApp.

A Chave Mestra não deve parecer um escritório contábil tradicional.

### Posicionamento desejado

**Consultoria empresarial + inteligência financeira + organização +
estratégia + segurança + sofisticação.**

### Jornada principal

**Visitante → reconhece o problema → entende a solução → percebe
autoridade → confia → entra em contato pelo WhatsApp.**

CTA principal: **Falar com uma consultora**

WhatsApp: **(21) 99676-3141**

------------------------------------------------------------------------

## 3. DADOS INSTITUCIONAIS

**Nome fantasia:** Chave Mestra Consultoria\
**Razão social:** CHAVE MESTRA CONSULTORIA FINANCEIRA E EMPRESARIAL
LTDA\
**CNPJ:** 64.351.434/0001-19\
**Fundadora:** Renata Lopes\
**Atividade principal:** Consultoria em gestão empresarial\
**Instagram:** @chavemestraconsultoria\
**WhatsApp:** (21) 99676-3141\
**Endereço empresarial:** Av. das Américas, 4200, Bloco 1, Sala 305,
Barra da Tijuca, Rio de Janeiro/RJ, CEP 22640-907\
**Crédito do projeto:** Agência GPV --- https://agenciagpv.online

> Antes do deploy, validar e-mail e telefone diretamente com a cliente e
> confrontar qualquer divergência entre materiais de marca e cadastro
> oficial.

------------------------------------------------------------------------

## 4. PERSONALIDADE DA MARCA

A experiência deve comunicar:

**Autoridade · Segurança · Clareza · Sofisticação · Proximidade**

A marca não deve parecer: - banco; - fintech; - contabilidade
tradicional; - marca excessivamente corporativa; - marca feminina
baseada em rosa ou delicadeza; - site "luxo" carregado de preto e
dourado.

O dourado representa valor e sofisticação, mas funciona como **accent
color**.

------------------------------------------------------------------------

## 5. IDENTIDADE VISUAL

### Tipografia oficial

-   **Alta Regular** --- display, headlines e momentos institucionais.
-   **Poppins** --- interface, navegação, parágrafos, cards, botões e
    elementos funcionais.

### Cores oficiais recebidas

-   Preto: `#000000`
-   Ivory/bege: `#F6ECE2`
-   Branco: `#FFFFFF`
-   Dourado: indicado no material como "gold", sem HEX oficial.

### Dourado digital provisório

Até validação do código oficial:

`#C9A24D`

Este valor é adaptação web provisória e não deve ser tratado como HEX
oficial da marca.

### Elemento proprietário

A chave dourada é o principal símbolo visual e pode aparecer como: -
watermark; - divisor; - pattern; - detalhe editorial; - elemento de
fundo; - assinatura gráfica.

Usar com moderação.

------------------------------------------------------------------------

## 6. DESIGN TOKENS

``` css
:root {
  --brand-black: #000000;
  --brand-ivory: #F6ECE2;
  --brand-white: #FFFFFF;
  --brand-gold: #C9A24D;

  --neutral-950: #111111;
  --neutral-800: #292929;
  --neutral-700: #444444;
  --neutral-500: #737373;
  --neutral-300: #D6D6D6;
  --neutral-200: #E8E8E8;
  --neutral-100: #F5F5F5;

  --surface-primary: #FFFFFF;
  --surface-secondary: #F6ECE2;
  --surface-dark: #000000;

  --text-primary: #111111;
  --text-secondary: #555555;
  --text-light: #FFFFFF;
  --text-gold: #C9A24D;

  --container: 1200px;
  --container-text: 720px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --shadow-card: 0 12px 40px rgba(0,0,0,.06);
  --shadow-header: 0 4px 24px rgba(0,0,0,.05);
}
```

### Distribuição visual recomendada

-   65--75% branco/ivory
-   15--25% preto
-   5--10% dourado

Evitar grandes superfícies douradas.

------------------------------------------------------------------------

## 7. TIPOGRAFIA

### Desktop

-   Display XL --- Alta Regular --- 72px --- line-height 0.98--1.05
-   H1 --- Alta Regular --- 56--64px --- line-height 1.05
-   H2 --- Alta Regular --- 42--48px --- line-height 1.10
-   H3 --- Poppins 600 --- 26--30px
-   H4 --- Poppins 600 --- 20--22px
-   Body Large --- Poppins 400 --- 18px --- line-height 1.65
-   Body --- Poppins 400 --- 16px --- line-height 1.65
-   Small --- Poppins 400 --- 14px
-   Label/Eyebrow --- Poppins 500 --- 12--14px

### Mobile

-   H1 --- 40--46px
-   H2 --- 32--36px
-   H3 --- 24px
-   Body Large --- 17--18px
-   Body --- 16px
-   Small --- 14px

Alta Regular não deve ser usada em parágrafos longos.

------------------------------------------------------------------------

## 8. GRID, CONTAINER E ESPAÇAMENTO

### Container

Desktop:

``` css
.site-container {
  width: min(1200px, calc(100% - 64px));
  margin-inline: auto;
}
```

Tablet: margem mínima de 32px.\
Mobile: margem lateral de 20--24px.

### Grid

-   Desktop: 12 colunas / gap 24px
-   Tablet: 8 colunas / gap 20px
-   Mobile: 4 colunas / gap 16px

### Seções

-   Desktop: 96--120px de padding vertical
-   Mobile: 64--80px

O site deve respirar. Não comprimir seções para colocar mais informação
acima da dobra.

------------------------------------------------------------------------

## 9. SUPERFÍCIES

1.  **White** --- leitura e conteúdo.
2.  **Ivory `#F6ECE2`** --- alternância e destaque suave.
3.  **Black `#000000`** --- manifesto, CTA premium e footer.
4.  **Photography + overlay** --- uso controlado no Hero ou seções
    especiais.

Alternar composições para criar ritmo. Evitar sequência repetitiva de
"título + 3 cards".

------------------------------------------------------------------------

## 10. BORDAS, SOMBRAS E MOTION

Cards: `12–16px`\
Botões: `8–10px`

Sombras discretas:

``` css
box-shadow: 0 12px 40px rgba(0,0,0,.06);
```

Motion permitido: - fade; - fade-up; - micro slide; - hover elevation; -
underline; - scale muito sutil.

Duração: `180–500ms`.

Respeitar `prefers-reduced-motion`.

Não usar bounce, zoom agressivo ou parallax excessivo.

------------------------------------------------------------------------

## 11. BOTÕES

### Primary

-   fundo dourado;
-   texto preto;
-   CTA principal.

### Secondary

-   fundo preto;
-   texto branco.

### Outline

-   transparente;
-   borda preta ou dourada conforme a superfície.

Todos devem ter: default, hover, focus, active e disabled.

------------------------------------------------------------------------

## 12. ICONOGRAFIA

Usar ícones: - lineares; - minimalistas; - monocromáticos; - pretos ou
dourados.

Preferência técnica: Lucide Icons.

Não usar emojis como iconografia principal, ícones 3D ou multicoloridos.

------------------------------------------------------------------------

## 13. FOTOGRAFIA

Priorizar fotografias reais de Renata Lopes.

Direção: - executiva; - natural; - segura; - profissional; - sofisticada
sem rigidez.

Evitar banco de imagem genérico, poses repetitivas de braços cruzados e
clichês financeiros.

------------------------------------------------------------------------

## 14. HEADER

Desktop:
`[LOGO]  Início  Consultoria  Como funciona  Sobre  FAQ  [Fale com uma consultora]`

Altura: `80–88px`.

Sticky:

``` css
position: sticky;
top: 0;
z-index: 50;
```

Após scroll: - background branco \~94%; - blur sutil; - borda/sombra
leve.

Mobile: `LOGO | MENU`

Menu em drawer e CTA claramente acessível.

------------------------------------------------------------------------

## 15. HOME --- ORDEM OFICIAL

1.  Header
2.  Hero
3.  Authority Bar
4.  Problema
5.  Manifesto / transição
6.  Proposta de valor
7.  Serviços
8.  Processo
9.  Benefícios
10. CTA intermediário
11. Expertise em Saúde
12. Sobre Renata
13. Formação
14. Bloco institucional
15. FAQ
16. CTA final
17. Footer
18. WhatsApp flutuante

Narrativa: **dor → compreensão → solução → método → benefício →
autoridade → confiança → ação.**

------------------------------------------------------------------------

## 16. HERO

### Eyebrow

**CHAVE MESTRA CONSULTORIA**

### H1

**Clareza financeira para decisões que fazem sua empresa avançar.**

### Texto

Organizamos números, processos e informações financeiras para que você
tenha mais controle, previsibilidade e segurança nas decisões do seu
negócio.

### CTA primário

**Quero falar com uma consultora**

### CTA secundário

**Conheça a consultoria ↓**

### Microproof

`+15 anos de experiência · Gestão financeira · Planejamento estratégico`

### Layout desktop

55% copy / 45% fotografia.

Altura ideal: 720--850px.

Usar foto de Renata no lado direito e chave em baixa opacidade como
elemento editorial.

### Mobile

Eyebrow → H1 → descrição → CTA → microproof → foto.

CTA principal full width.

------------------------------------------------------------------------

## 17. AUTHORITY BAR

-   **+15 ANOS** --- Experiência em gestão
-   **FINANÇAS** --- Controle e planejamento
-   **PROCESSOS** --- Organização empresarial
-   **SAÚDE** --- Experiência setorial

Desktop: linha editorial.\
Mobile: grid 2×2.

Não usar quatro cards pesados.

------------------------------------------------------------------------

## 18. PROBLEMA

### Eyebrow

**GESTÃO COMEÇA COM CLAREZA**

### H2

**Sua empresa pode vender bem e ainda assim perder o controle dos
números.**

### Texto

Quando informações financeiras, custos e processos não estão
organizados, decisões importantes acabam sendo tomadas sem uma visão
completa do negócio.

### Pontos

**Fluxo de caixa sem previsibilidade**\
Dificuldade para entender o que realmente entra, sai e estará disponível
nos próximos períodos.

**Custos pouco claros**\
Sem informações organizadas, identificar desperdícios e oportunidades de
melhoria se torna mais difícil.

**Decisões sem dados suficientes**\
O empresário precisa decidir, mas nem sempre possui indicadores claros
para sustentar suas escolhas.

**Operação dependente do dono**\
Processos pouco estruturados fazem com que decisões e atividades
continuem centralizadas.

------------------------------------------------------------------------

## 19. MANIFESTO / TRANSIÇÃO

Fundo preto.

Texto: **Organizar os números é apenas o começo. A diferença está em
saber o que fazer com eles.**

Destaque dourado: **Decidir.**

Chave grande como watermark opcional.

------------------------------------------------------------------------

## 20. PROPOSTA DE VALOR

### Eyebrow

**CONSULTORIA ADMINISTRATIVA E FINANCEIRA**

### H2

**Transformamos informações em direção para o seu negócio.**

A Chave Mestra atua ao lado de empresários e gestores na organização
financeira e administrativa da empresa, estruturando informações,
controles e processos que apoiam decisões mais claras e um crescimento
sustentável.

O trabalho conecta a visão financeira à realidade da operação para que
planejamento e execução caminhem juntos.

### Destaque

**Mais do que olhar para o que aconteceu, queremos ajudar sua empresa a
entender os próximos passos.**

------------------------------------------------------------------------

## 21. SERVIÇOS

### Eyebrow

**COMO PODEMOS AJUDAR**

### H2

**Uma visão mais estruturada da gestão da sua empresa.**

A consultoria começa pela compreensão do cenário atual e avança para
controles, planejamento e processos que façam sentido para a realidade
do negócio.

### 01 --- Diagnóstico Empresarial

Analisamos números, custos, vendas, controles e processos para construir
uma visão mais clara da situação atual da empresa.

### 02 --- Gestão Financeira

Estruturação e acompanhamento de contas a pagar, contas a receber,
tesouraria e fluxo de caixa para melhorar o controle financeiro.

### 03 --- Planejamento Financeiro

Desenvolvimento de metas, orçamento, projeções e planejamento de capital
para apoiar decisões presentes e futuras.

### 04 --- Processos e Controles

Organização e padronização de processos administrativos, buscando
reduzir desperdícios e fortalecer os controles internos.

CTA: **Quero entender qual solução minha empresa precisa →**

Cards preferencialmente em 2×2, com número, ícone, título, descrição e
ação.

Hover: fundo preto, texto branco, detalhe dourado.

------------------------------------------------------------------------

## 22. PROCESSO

### Eyebrow

**COMO FUNCIONA**

### H2

**Da análise à ação: uma consultoria conectada à realidade da sua
empresa.**

1.  **Entender** --- Conhecemos o negócio, os desafios atuais, os
    números e a rotina financeira.
2.  **Diagnosticar** --- Identificamos gargalos, riscos, desperdícios e
    oportunidades de organização.
3.  **Planejar** --- Estruturamos prioridades, controles, metas e ações
    de acordo com o cenário encontrado.
4.  **Acompanhar** --- Indicadores e processos passam a oferecer visão
    mais clara para apoiar a gestão.

Desktop: timeline horizontal.\
Mobile: timeline vertical.

------------------------------------------------------------------------

## 23. BENEFÍCIOS

Fundo ivory.

### Eyebrow

**O QUE MUDA NA PRÁTICA**

### H2

**Mais clareza para administrar. Mais segurança para decidir.**

**Decisões baseadas em dados**\
Informações organizadas e relatórios mais claros ajudam o gestor a
compreender o cenário antes de decisões importantes.

**Mais controle financeiro**\
A organização de custos, entradas, saídas e fluxo de caixa aumenta a
visibilidade sobre a saúde financeira.

**Identificação de desperdícios**\
Uma análise estruturada facilita identificar gastos, processos e pontos
que podem ser melhorados.

**Processos mais organizados**\
A padronização reduz improvisos e diminui a dependência do proprietário
em atividades que podem ser estruturadas.

**Planejamento**\
Metas, orçamento e projeções ajudam a empresa a sair de uma gestão
exclusivamente reativa.

**Crescimento sustentável**\
Estruturas financeiras e administrativas mais sólidas ajudam a sustentar
o desenvolvimento do negócio.

------------------------------------------------------------------------

## 24. CTA INTERMEDIÁRIO

Fundo preto.

### H2

**Sua empresa não precisa tomar decisões no escuro.**

Entenda melhor seus números, organize sua gestão e construa uma visão
mais clara dos próximos passos.

CTA: **Conversar com a Chave Mestra**

------------------------------------------------------------------------

## 25. EXPERTISE EM SAÚDE

### Eyebrow

**EXPERTISE SETORIAL**

### H2

**Gestão financeira com experiência aplicada ao setor de saúde.**

A experiência da Chave Mestra contempla ambientes de saúde, assistência
e serviços médicos, setores em que organização financeira, planejamento
e controle precisam caminhar ao lado de uma operação complexa e
regulada.

Destaque: - **MBA --- Finanças para a Área de Saúde** - **2025 ---
Unimed**

Texto complementar: Uma formação que complementa a experiência prática
em gestão e amplia a capacidade de compreender particularidades
financeiras do setor.

Não posicionar a empresa como exclusiva para saúde.

------------------------------------------------------------------------

## 26. SOBRE RENATA

### Eyebrow

**QUEM ESTÁ POR TRÁS DA CHAVE MESTRA**

### H2

**Renata Lopes**

### Subheadline

**Estratégia financeira conectada à realidade de quem administra uma
empresa.**

Com mais de 15 anos de atuação em finanças, gestão administrativa e
planejamento estratégico, Renata Lopes construiu sua trajetória
profissional nos setores de saúde, varejo e serviços.

Sua experiência envolve gestão de contas a pagar e receber, tesouraria,
planejamento de capitais, orçamentos, licitações e melhoria de controles
internos.

Como fundadora da Chave Mestra Consultoria, sua proposta é aproximar
estratégia e operação, ajudando empresários e gestores a transformar
informações financeiras em decisões mais claras para o negócio.

Mensagem institucional provisória: **"Informação financeira só gera
valor quando ajuda alguém a tomar uma decisão melhor."**

Não apresentar essa frase como citação pessoal aprovada até validação da
cliente.

------------------------------------------------------------------------

## 27. FORMAÇÃO

### Eyebrow

**FORMAÇÃO**

### H2

**Conhecimento construído para enxergar o negócio por diferentes
perspectivas.**

-   **2025 --- MBA em Finanças para a Área de Saúde --- Unimed**
-   **2013 --- MBA em Planejamento e Gestão Tributária --- Candido
    Mendes**
-   **2009 --- MBA em Finanças Corporativas --- Candido Mendes**
-   **1999 --- Bacharel em Administração de Empresas --- SUAM**

Desktop: timeline premium vertical ou horizontal conforme composição.\
Mobile: timeline vertical.

------------------------------------------------------------------------

## 28. BLOCO INSTITUCIONAL

**Finanças + Gestão + Estratégia**

Três perspectivas integradas para ajudar empresas a organizar o presente
e planejar os próximos passos.

------------------------------------------------------------------------

## 29. FAQ

Accordion simples, sem cards pesados.

### Para quem é a consultoria?

A Chave Mestra atende empresários e gestores que precisam organizar a
gestão administrativa e financeira, melhorar controles e obter
informações mais claras para apoiar suas decisões.

### A Chave Mestra atende somente empresas da área da saúde?

Não. A atuação contempla empresas de diferentes segmentos. A experiência
no setor de saúde é um diferencial adicional da consultoria.

### O que é analisado inicialmente?

O diagnóstico considera o cenário financeiro e administrativo da
empresa, incluindo números, custos, controles, fluxo financeiro e
processos relacionados à gestão.

### Preciso ter um departamento financeiro estruturado?

Não necessariamente. Um dos objetivos da análise inicial é entender a
estrutura existente e identificar quais controles e processos precisam
ser organizados.

### A consultoria substitui minha contabilidade?

A proposta da Chave Mestra é atuar na gestão administrativa e financeira
da empresa. O trabalho possui finalidade diferente das obrigações
contábeis e fiscais realizadas por um escritório de contabilidade.

### Como contratar?

O primeiro passo é entrar em contato para apresentar o momento atual da
empresa. A partir dessa conversa será possível compreender a necessidade
e orientar os próximos passos.

------------------------------------------------------------------------

## 30. CTA FINAL

### Eyebrow

**O PRÓXIMO PASSO**

### H2

**Encontre a chave para uma gestão mais clara, organizada e preparada
para crescer.**

Conte um pouco sobre o momento da sua empresa e descubra como a Chave
Mestra pode contribuir para uma gestão financeira mais estruturada.

CTA: **Falar com Renata pelo WhatsApp**

Microcopy: **Uma primeira conversa para entendermos sua necessidade.**

------------------------------------------------------------------------

## 31. WHATSAPP

Número: **+55 21 99676-3141**

Mensagem pré-preenchida: **Olá, Renata! Conheci a Chave Mestra pelo site
e gostaria de entender melhor como funciona a consultoria administrativa
e financeira.**

Criar eventos: - `header_whatsapp` - `hero_whatsapp` -
`services_whatsapp` - `middle_cta_whatsapp` - `final_cta_whatsapp` -
`floating_whatsapp` - evento agregado: `whatsapp_click` - conversão:
`generate_lead` quando apropriado à configuração analítica.

Botão flutuante mobile: 52--56px, `right: 20px`, `bottom: 20px`,
respeitando safe area.

------------------------------------------------------------------------

## 32. FOOTER

Fundo predominantemente preto.

### Marca

**CHAVE MESTRA**\
Consultoria Financeira e Empresarial

Organização financeira, processos e estratégia para decisões
empresariais mais claras.

### Navegação

Início\
Consultoria\
Como funciona\
Sobre\
FAQ

### Contato

WhatsApp\
Instagram\
E-mail

### Empresa

**CHAVE MESTRA CONSULTORIA FINANCEIRA E EMPRESARIAL LTDA**\
**CNPJ: 64.351.434/0001-19**

Endereço empresarial: Av. das Américas, 4200, Bloco 1, Sala 305, Barra
da Tijuca, Rio de Janeiro/RJ, CEP 22640-907.

### Bottom bar

`© 2026 Chave Mestra Consultoria. Todos os direitos reservados.`

**Desenvolvido por Agência GPV**\
https://agenciagpv.online

O crédito da Agência GPV deve ser discreto e abrir em nova aba.

------------------------------------------------------------------------

## 33. RESPONSIVIDADE

Breakpoints conceituais: - Mobile: `< 640px` - Tablet: `640–1023px` -
Desktop: `1024–1439px` - Wide: `≥ 1440px`

Nunca permitir: - overflow horizontal; - títulos cortados; - botões fora
do viewport; - texto sobre o rosto; - cards espremidos; - menu desktop
apenas reduzido artificialmente.

Mobile deve ser recomposto, não apenas escalado.

------------------------------------------------------------------------

## 34. ACESSIBILIDADE

Obrigatório: - contraste adequado; - `alt` útil em imagens; - labels em
formulários; - `focus-visible`; - navegação por teclado; -
`aria-expanded` no FAQ; - `aria-label` em botões apenas com ícone; -
semântica HTML adequada; - suporte a `prefers-reduced-motion`.

------------------------------------------------------------------------

## 35. SEO

### Home title

**Chave Mestra \| Consultoria Financeira e Empresarial**

### Meta description

**Consultoria administrativa e financeira para empresas que buscam mais
controle, organização, planejamento e clareza para tomar decisões.**

### H1 único

**Clareza financeira para decisões que fazem sua empresa avançar.**

Preparar: - metadata; - canonical; - Open Graph; - Twitter Card; -
favicon; - robots.txt; - sitemap.xml; - JSON-LD apropriado.

Não inventar avaliações, estrelas ou quantidade de clientes no Schema.

------------------------------------------------------------------------

## 36. OPEN GRAPH

Imagem: `1200 × 630px`

Composição: - fundo preto; - chave dourada; - CHAVE MESTRA; -
"Consultoria Financeira e Empresarial"; - detalhe ivory.

Manter limpa e legível.

------------------------------------------------------------------------

## 37. ANALYTICS E PUBLICIDADE

Preparar arquitetura para: - Google Analytics 4; - Google Tag Manager; -
Google Ads; - Meta Pixel; - UTMs; - eventos de clique no WhatsApp.

Não hardcodar IDs de tracking no Design System. Usar variáveis de
ambiente/configuração apropriada.

------------------------------------------------------------------------

## 38. STACK

Preferencial: - Next.js - TypeScript - Tailwind CSS - Lucide Icons -
Git - Vercel

Evitar dependências pesadas sem necessidade.

Priorizar Server Components quando apropriado e mínimo JavaScript
client-side.

------------------------------------------------------------------------

## 39. ESTRUTURA DO PROJETO

``` text
/app
/components
  /layout
    Header.tsx
    Footer.tsx
    Container.tsx
  /sections
    Hero.tsx
    AuthorityBar.tsx
    Problems.tsx
    Manifesto.tsx
    ValueProposition.tsx
    Services.tsx
    Process.tsx
    Benefits.tsx
    MiddleCTA.tsx
    Healthcare.tsx
    AboutRenata.tsx
    Credentials.tsx
    InstitutionalBlock.tsx
    FAQ.tsx
    FinalCTA.tsx
  /ui
    Button.tsx
    SectionHeading.tsx
    ServiceCard.tsx
    Accordion.tsx
    WhatsAppButton.tsx
    Eyebrow.tsx

/public
  /images
    /renata
      renata-hero.webp
      renata-about.webp
    /brand
      key-watermark.svg
      pattern.svg
    /og
      og-home.jpg
  /logos
    logo-primary.svg
    logo-light.svg
    symbol.svg

/lib
/styles

DESIGN_SYSTEM.md
README.md
```

------------------------------------------------------------------------

## 40. PERFORMANCE

Objetivo: - Lighthouse Performance 90+ - Accessibility 90+ - Best
Practices 90+ - SEO 90+

Usar: - `next/image`; - WebP/AVIF; - lazy loading quando adequado; -
fontes otimizadas; - mínimo JS client-side; - carregamento eficiente de
assets.

------------------------------------------------------------------------

## 41. FORMULÁRIO

Na primeira versão, WhatsApp é a conversão principal.

Não criar formulário grande sem necessidade.

Se futuramente implementado: - Nome - Empresa - WhatsApp - E-mail -
Mensagem

------------------------------------------------------------------------

## 42. REGRAS DE COPY

Tom: **profissional + claro + acessível + consultivo.**

Vocabulário central: **clareza, previsibilidade, organização, controle,
planejamento, decisões, processos, crescimento sustentável.**

Evitar: - "resultado garantido"; - "multiplique seu faturamento"; - "a
melhor consultoria"; - promessas financeiras absolutas; - jargão
excessivo.

Parágrafos web devem ser curtos, preferencialmente 3--4 linhas visuais.

------------------------------------------------------------------------

## 43. REFERÊNCIAS DE UX/UI

### Consultoria Trilha

Usar como principal referência de: - fluxo de página; - arquitetura de
conversão; - hierarquia; - alternância entre conteúdo e CTA; -
organização de serviços.

### J. Morelli Consultoria

Usar como referência complementar, especialmente por ter sido bem
recebida pela cliente.

### Regra

Nenhuma referência deve ser copiada literalmente. A interface final deve
ser reconhecível como **Chave Mestra**.

------------------------------------------------------------------------

## 44. GIT E VERCEL

Fluxo: 1. projeto local/Codex; 2. Git; 3. repositório remoto; 4. deploy
na Vercel; 5. domínio; 6. validação; 7. tracking e SEO final.

O projeto deve compilar sem erros antes de merge/deploy.

Nunca commitar: - `.env.local`; - chaves; - tokens; - credenciais; -
secrets.

------------------------------------------------------------------------

## 45. DEFINITION OF DONE

A Home só é considerada pronta quando:

-   [ ] identidade Chave Mestra está consistente;
-   [ ] desktop revisado;
-   [ ] tablet revisado;
-   [ ] mobile revisado;
-   [ ] nenhum overflow;
-   [ ] todos os CTAs de WhatsApp funcionam;
-   [ ] links sociais funcionam;
-   [ ] CNPJ correto no footer;
-   [ ] crédito Agência GPV correto;
-   [ ] nenhuma informação inventada;
-   [ ] nenhuma imagem placeholder permanece;
-   [ ] metadata configurada;
-   [ ] Open Graph configurado;
-   [ ] sitemap e robots configurados;
-   [ ] acessibilidade básica validada;
-   [ ] performance revisada;
-   [ ] build de produção passa sem erro;
-   [ ] deploy Vercel validado.

------------------------------------------------------------------------

# PRINCÍPIO FINAL

> **A Chave Mestra deve parecer premium pela organização, não pelo
> excesso.**

A sofisticação deve vir de **tipografia, fotografia, espaço negativo,
hierarquia, consistência, preto, ivory e uso criterioso do dourado**.

A experiência deve deixar claro que a Chave Mestra não vende apenas
organização de planilhas: ela conecta **finanças, gestão e estratégia**
para ajudar empresários e gestores a compreender melhor o negócio e
tomar decisões mais estruturadas.
