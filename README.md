# Cardápio Nota 10

Landing page do **Cardápio Nota 10** — cardápio digital com pedidos pela mesa via QR Code e cozinha em tempo real. Construída com [Next.js](https://nextjs.org), Tailwind CSS e Framer Motion.

## Começando

Primeiro, rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Você pode editar a página principal em `src/app/page.tsx` e as seções em `src/components/sections/`. A página atualiza automaticamente conforme você salva.

O projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para carregar e otimizar a fonte **Inter**.

## Estrutura

- `src/app/` — layout, página e estilos globais.
- `src/components/sections/` — seções da landing (hero, recursos, preços, etc.).
- `src/components/ui/` — componentes reutilizáveis (mockup de iPhone, headings, etc.).
- `public/` — assets estáticos.

## Build

O site é totalmente estático. O build gera a pasta `out/` via export do Next.js:

```bash
npm run build
```

## Deploy

O site é publicado no **Cloudflare Pages** a partir da pasta estática `out/`:

```bash
npm run build
npx wrangler pages deploy out --project-name cardapiotec --branch main
```

Domínio em produção: **https://www.cardapiotec.com**

## Saiba mais

Para aprender mais sobre Next.js:

- [Documentação do Next.js](https://nextjs.org/docs) — recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) — tutorial interativo.
