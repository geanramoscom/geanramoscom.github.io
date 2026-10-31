# GeanRamos V2

Reconstrução independente com Jekyll e aparência editorial inspirada na família Pika.page. Temas claro, escuro e marrom, Google Sans Flex e Tailwind CSS v4 compilado.

## Preservação
Mantidos sem alteração: `_posts/`, `img/`, `404.html`, `llms.txt`. URLs dos artigos: `/p/:title.html`. O domínio usa `CNAME`.

## Desenvolvimento
- `npm install`
- `npm run css:build`
- `bundle install`
- `bundle exec jekyll serve`

A folha `assets/css/site.css` deve ser gerada pelo build antes de servir. Não publicar a branch V2 como produção sem build e validação. O conteúdo de `404.html` foi mantido literalmente nesta primeira etapa; a integração estética fica para a revisão final.

## Arquitetura
`_includes/head.html`, `header.html`, `theme-picker.html`, `footer.html`, `post-list.html`; `_layouts/default.html`, `home.html`, `archive.html`, `page.html`, `post.html`.

A página de contato está em rascunho: não existe formulário sem endpoint autorizado. Publicação, newsletter e recursos removidos do site antigo não foram reativados automaticamente.

## Status
Primeira versão de código na branch de trabalho; não publicada e ainda sem testes de build concluídos.
