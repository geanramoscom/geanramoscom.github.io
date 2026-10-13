# Gean Ramos: tema Jekyll estilo Darren.me

Tema gerado a partir da análise do clone estático local, com a folha de estilos e fontes do snapshot, mas conteúdo demonstrativo próprio.

## GitHub Pages
1. Subir os arquivos deste diretório para a branch `main` de um repositório.
2. Settings > Pages > Build and deployment > GitHub Actions.
3. Criar o apontamento DNS de `geanramos.com` para o GitHub Pages e configurar o domínio customizado.
4. Criar novos Markdown em `_posts/YYYY-MM-DD-slug.md`.

`_layouts/default.html` reutiliza o shell visual original; `_layouts/post.html` e `_layouts/page.html` criam páginas novas com as classes CSS do tema. As páginas antigas do clone não foram copiadas para este projeto e a fidelidade pixel a pixel ainda requer comparação de renderizações no GitHub Pages. Ruby não foi instalado na VPS.

## Direitos
Os assets do snapshot precisam de revisão de licença e substituição de imagens de terceiros antes de uma publicação pública definitiva.
