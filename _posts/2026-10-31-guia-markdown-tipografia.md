---
layout: post
title: "Guia de Markdown e tipografia"
description: "guia de boas-vindas, com exemplos de Markdown, fontes e vídeo incorporado para testar o visual do blog."
date: 2026-10-31 00:30:00 -0300
tags: [Markdown, design, tecnologia, tutorial]
---

## Catálogo visual completo do tema

Esta seção é um **laboratório de componentes** para conferir proporções, espaçamento, contraste, responsividade e acessibilidade nos temas Claro, Escuro e Marrom. O texto abaixo é demonstrativo.

### Hierarquia de títulos H1 a H6

<div class="showcase-headings">
  <h1>H1 · Título principal de uma publicação</h1>
  <h2>H2 · Título de uma seção</h2>
  <h3>H3 · Título de uma subseção</h3>
  <h4>H4 · Quarto nível de título</h4>
  <h5>H5 · Quinto nível de título</h5>
  <h6>H6 · Sexto nível de título</h6>
</div>

> **Nota:** um artigo real normalmente deve ter apenas um H1 principal. Os títulos adicionais acima servem somente para o teste visual.

### Texto, ênfases e links

Este é um **parágrafo de texto normal** com largura de leitura confortável, acentuação brasileira e pontuação. Aqui aparecem **texto em negrito**, *texto em itálico*, ***negrito e itálico***, ~~texto riscado~~, <mark>texto marcado</mark>, <small>texto pequeno</small>, H<sub>2</sub>O e x<sup>2</sup>.

Um [link dentro do texto](https://geanramos.com/) deve ser reconhecível mesmo sem passar o mouse. Uma URL extensa também deve quebrar corretamente em telas estreitas.

### Listas não numeradas

- Um item de lista simples.
- Outro item para testar o espaçamento.
  - Subitem com recuo.
  - Segundo subitem.
- Último item da lista.

### Listas numeradas

1. Planejar a estrutura do conteúdo.
2. Escrever com clareza.
3. Revisar no celular e no computador.
   1. Conferir links.
   2. Conferir imagens e mídias.

### Lista de tarefas

- [x] Criar a V2.
- [x] Adicionar o KaTeX.
- [ ] Conferir cada componente visual.

### Citações

> Uma boa interface não precisa disputar a atenção com o conteúdo. Ela precisa deixar o conteúdo respirar.
>
> **Citação com segundo parágrafo:** contraste, largura da coluna e espaçamento fazem toda a diferença.

### Separador horizontal

---

### Código inline e blocos de código

Para atualizar o blog, um comando de exemplo é `bundle exec jekyll build`. Abaixo, um bloco de código com várias linhas:

```javascript
function saudar(nome) {
  const agora = new Date();
  return `Olá, ${nome}! São ${agora.getHours()} horas.`;
}
console.log(saudar('Gean'));
```

```bash
# Exemplo de terminal
npm run css:build
bundle exec jekyll build
```

### Tabela com alinhamentos

| Componente | Desktop | Celular |
| :--- | :---: | ---: |
| Conteúdo | 664 px | Fluido |
| Vídeo | 100% da coluna | 100% |
| Imagens | Responsivas | Responsivas |
| Botões | Em linha | Com quebra |

### Botões e estados

<div class="showcase-actions">
  <a class="showcase-btn showcase-primary" href="/arquivo/">Botão principal</a>
  <a class="showcase-btn showcase-secondary" href="/sobre/">Botão secundário</a>
  <a class="showcase-btn showcase-ghost" href="/contato/">Botão discreto</a>
  <button type="button" class="showcase-btn showcase-secondary" disabled>Desativado</button>
</div>

### Campos e formulário de demonstração

<div class="showcase-fields">
  <label for="demo-nome">Nome</label>
  <input id="demo-nome" type="text" placeholder="Seu nome" autocomplete="off">
  <label for="demo-assunto">Assunto</label>
  <select id="demo-assunto"><option>Escolha uma opção</option><option>Design</option><option>Tecnologia</option></select>
  <label for="demo-mensagem">Mensagem</label>
  <textarea id="demo-mensagem" rows="3" placeholder="Exemplo de campo de texto"></textarea>
  <p class="showcase-note">Estes campos são apenas para avaliação visual e não enviam dados.</p>
</div>

### Imagens e legendas

<figure class="showcase-figure">
  <img src="[/img/logo.png](https://get.pxhere.com/photo/code-code-editor-coding-computer-data-developing-development-ethernet-html-programmer-programming-screen-software-technology-work-1366450.jpg)" width="100%"  loading="lazy" alt="Logotipo ilustrado do blog Gean Ramos">
  <figcaption>Imagem do próprio repositório, com legenda e texto alternativo.</figcaption>
</figure>

<div class="showcase-gallery">
  <figure><img src="/img/logo.png" width="280" height="280" loading="lazy" alt="Logotipo do blog, primeira imagem"><figcaption>Primeira imagem</figcaption></figure>
  <figure><img src="/img/erro-404.png" width="80" height="87" loading="lazy" alt="Ilustração da página de erro 404"><figcaption>Segunda imagem</figcaption></figure>
</div>

### Fórmulas matemáticas com KaTeX

Uma expressão inline, \(a^2+b^2=c^2\), e uma fórmula destacada:

<div class="math-display" data-tex="\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}"></div>

A função gama também aparece mais acima neste artigo.

### Vídeo do YouTube em 100% da largura disponível

O player abaixo ocupa **100% da coluna do artigo**, respeitando o formato 16:9, também no celular.

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/4c7pbOxYn_A?start=13735" title="Vídeo incorporado em largura total para teste responsivo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Outros elementos editoriais

<details class="showcase-details"><summary>Clique para expandir este conteúdo</summary><p>Um painel expansível, útil para perguntas frequentes e notas técnicas adicionais.</p></details>

<aside class="showcase-aside"><strong>Nota lateral:</strong> informações complementares podem ser destacadas sem interromper o artigo.</aside>

A demonstração termina aqui. Os componentes usam as mesmas variáveis de cor dos três temas do GeanRamos V2.
