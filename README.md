# DanDeV — Portfólio profissional

Portfólio de Daniel Conceição de Sousa, criado com React, Vite, JavaScript, CSS e Lucide React.

## Executar localmente

Requisitos: Node.js 18 ou mais recente.

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

## Gerar versão de produção

```bash
npm run build
npm run preview
```

Os arquivos finais serão gerados na pasta `dist/`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie este projeto.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, escolha **GitHub Actions**.
4. Crie o arquivo `.github/workflows/deploy.yml` com o workflow abaixo.

```yaml
name: Deploy site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

O `base: './'` em `vite.config.js` permite que os arquivos funcionem corretamente dentro do caminho do repositório no GitHub Pages.

## Personalização

- Conteúdo, projetos, serviços e contatos: `src/data/portfolioData.js`
- Componentes: `src/components/`
- Estilos e responsividade: `src/styles.css`
- Imagens: `public/assets/`
