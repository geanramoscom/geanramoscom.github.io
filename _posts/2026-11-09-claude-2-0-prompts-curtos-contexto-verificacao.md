---
layout: post
title: "Você ainda usa o Claude como se ele fosse o Claude 2.0"
description: "A era dos prompts gigantes está mudando. O que importa agora é definir o resultado, fornecer contexto, mostrar uma boa referência e explicar como a IA deve verificar o próprio trabalho."
date: 2026-11-09 09:33:20 -03:00
tags: [inteligência artificial, Claude, prompts, produtividade, programação]
---

Se o seu prompt começa com “você é um especialista sênior com 20 anos de experiência” e termina depois de três páginas de regras, talvez você ainda esteja tratando uma IA moderna como se ela tivesse acabado de chegar no primeiro dia de estágio.

A provocação vem de uma demonstração de Andrej Karpathy, que pediu ao Claude para criar um site em estilo YouTube com vídeos recomendados repetidamente no Hacker News. O pedido era curto, direto e quase educado demais para a internet:

> “Oi, Claude. Bom dia. Crie um site no estilo YouTube apenas com vídeos que foram recomendados várias vezes no Hacker News ao longo dos anos. Por favor, não cometa erros.”

A reação foi imediata: como assim, só isso? Cadê o PRD de 47 páginas? Cadê a lista de tecnologias, os critérios de aceite, o fluxograma e aquela seção chamada “considerações finais” que ninguém lê?

Calma. A história não é que prompts longos ficaram proibidos. A mudança é outra: modelos mais capazes conseguem decidir muito mais coisas sozinhos. O trabalho humano passa a ser definir com clareza *o que precisa existir*, oferecer o contexto que só você conhece e criar uma forma de verificar se o resultado presta.

## O prompt gigante fazia sentido antes

Modelos antigos precisavam de mais orientação para não se perder. Era como contratar alguém no primeiro dia de trabalho e entregar um manual com os processos, os exemplos, as exceções e a ordem exata de cada tarefa.

Esse tipo de prompt podia funcionar bem porque o modelo tinha menos capacidade de planejar, interpretar ambiguidades e revisar o próprio resultado. Se você não explicasse o caminho, ele frequentemente parava no meio da estrada ou entregava alguma coisa com a confiança de quem acabou de inventar uma estatística.

Só que os modelos atuais trabalham de outra maneira. Eles conseguem decompor tarefas, escolher ferramentas, consultar arquivos, testar hipóteses e voltar para corrigir partes do trabalho.

Segundo Boris Cherny, criador do Claude Code, a orientação hoje pode ser mais parecida com uma conversa entre colegas: diga o objetivo, indique quanto esforço vale a pena gastar e explique como o resultado deve ser verificado.

O modelo não precisa que você narre cada movimento do mouse. Ele precisa saber onde você quer chegar e como reconhecer uma chegada correta.

## A fórmula nova: peça, contextualize e mostre

A estrutura apresentada no vídeo pode ser resumida em três movimentos:

1. **Peça:** diga claramente o que você quer.
2. **Contextualize:** explique as informações específicas do seu negócio, público ou situação.
3. **Mostre:** forneça um exemplo de resultado que você considera bom.

Imagine uma dona de clínica odontológica. Em vez de escrever “você é uma especialista em marketing digital para clínicas”, ela poderia pedir:

> Transforme esta palestra em dez posts para o Instagram da clínica. O público é formado por mulheres de 40 a 60 anos que têm medo de dentista. Anexei três posts que receberam muitos comentários. Siga o tom desses exemplos e não prometa resultados que o tratamento não pode garantir. Se algo estiver confuso, faça perguntas antes de começar.

Percebe a diferença?

O pedido não tenta ensinar ao Claude como ser uma publicitária. Ele entrega o que a dona da clínica sabe melhor do que qualquer manual genérico: quem é o público, qual é o medo principal, quais exemplos funcionaram e quais promessas estão proibidas.

Isso é contexto de verdade. Não é decoração no prompt.

## O exemplo vale mais que uma lista de adjetivos

Dizer “escreva de forma envolvente, humana, persuasiva e profissional” pode significar qualquer coisa. Mostrar três textos que você considera bons é muito mais útil.

Exemplos revelam ritmo, tamanho, escolha de palavras, nível de humor, estrutura e limite de ousadia. Eles transformam um gosto abstrato em uma referência observável.

É por isso que uma biblioteca de materiais do próprio negócio pode ser tão importante. Histórico de clientes, posts aprovados, planilhas, apresentações, documentos de produto e registros de decisões carregam um conhecimento que não aparece em um prompt copiado da internet.

Se esses materiais estiverem organizados em arquivos de contexto, como um `CLAUDE.md`, o agente pode consultá-los sem você precisar repetir a história inteira a cada conversa.

A IA fica mais útil quando conhece o terreno. Só não vale despejar todos os arquivos da empresa sem critério e chamar isso de contexto. Uma gaveta cheia de documentos não é uma memória organizada. É uma gaveta cheia de documentos.

## O botão de esforço não é um botão de inteligência

A outra mudança importante está no nível de esforço. Interfaces e APIs do Claude podem oferecer opções como `low`, `medium`, `high`, `xhigh` e `max`, dependendo do modelo e da superfície usada.

Muita gente olha para essa lista e pensa: “quanto mais alto, melhor”. Só que o nível de esforço é uma troca entre profundidade, tempo, consumo e autonomia.

- **Low:** tarefas rápidas, em que você vai revisar tudo, como gerar opções de assunto para um e-mail.
- **Medium:** trabalho cotidiano, como resumir uma reunião e montar uma lista de tarefas.
- **High:** situações em que a checagem importa, como revisar código ou conferir um relatório.
- **Xhigh e max:** tarefas longas ou difíceis, em que você quer que o modelo faça mais etapas sozinho e verifique o resultado com cuidado.

A nomenclatura pode mudar entre modelos, mas a lógica permanece: não use o máximo para trocar uma lâmpada só porque o engenheiro está disponível.

Mais esforço não conserta um pedido mal definido. Ele pode apenas produzir uma resposta mais longa, mais lenta e mais cara sobre o problema errado.

## O que realmente precisa entrar no pedido?

Um bom pedido para um agente moderno deveria responder a quatro perguntas:

- **O que precisa ser feito?**
- **Qual contexto muda a decisão?**
- **Como é um resultado aceitável?**
- **Como o próprio trabalho será conferido?**

A quarta pergunta é a mais esquecida.

Pedir “crie um aplicativo” é muito diferente de pedir “crie um aplicativo, rode os testes, abra a interface, compare o resultado com o exemplo anexado e me avise quais decisões ainda precisam da minha aprovação”.

O primeiro pedido entrega uma tarefa. O segundo entrega uma tarefa e um mecanismo de controle.

E aqui mora o detalhe que impede a conversa de virar propaganda de mágica: autonomia sem verificação é só uma forma elegante de errar em escala.

## Então o PRD morreu?

Não. O PRD, documento de requisitos de produto, continua útil quando o projeto é grande, envolve várias pessoas, tem restrições técnicas, riscos legais ou decisões que precisam ficar registradas.

O que está mudando é o uso do documento como um manual linha por linha para uma IA que já consegue planejar. Em muitos casos, um objetivo claro, contexto relevante, exemplos e critérios de verificação são melhores do que uma montanha de instruções contraditórias.

Um documento longo pode continuar existindo. A diferença é que ele deve funcionar como fonte de verdade, não como uma tentativa de controlar cada respiração do modelo.

## A parte que ninguém consegue copiar

Um prompt curto só é poderoso quando a pessoa sabe o que quer.

Karpathy conseguiu deixar o Claude trabalhar porque tinha critérios na cabeça. Ele sabia qual tipo de vídeo queria encontrar, qual problema estava tentando resolver e como avaliar se o site fazia sentido. A simplicidade do pedido não eliminou o trabalho humano. Apenas escondeu boa parte dele na experiência, nas decisões seguintes e nas correções durante a execução.

Para quem ainda não conhece o próprio objetivo, um prompt de três linhas pode produzir uma aplicação genérica, bonita e completamente inútil. A IA não transforma confusão em estratégia só porque recebeu uma interface elegante.

A lição, então, não é “pare de escrever prompts longos”. É: pare de gastar energia ensinando a IA a ser uma personagem fictícia e use esse espaço para explicar o que realmente importa no seu negócio.

Diga o resultado. Entregue o contexto. Mostre uma referência. Peça verificação. E escolha o nível de esforço de acordo com a tarefa, não com o medo de que um botão menor faça a máquina esquecer como pensar.

O prompt pode até ficar curto. O critério continua sendo seu.

## Fontes e checagem

- [Andrej Karpathy sobre o projeto HackerTube](https://x.com/karpathy/status/2116957135661945283)
- [Boris Cherny sobre como orientar o Claude](https://x.com/bcherny/status/2107565388250874193)
- [Documentação da Anthropic sobre modelos e níveis de esforço](https://docs.anthropic.com/en/docs/about-claude/models/overview)
- Material-base: transcrição fornecida para esta publicação. A demonstração e os relatos de uso foram tratados como exemplos apresentados no vídeo, não como resultados independentes verificados pela redação.

Se você gostou da fofoca e agora vai aposentar aquele prompt que parece um contrato de financiamento, pode mandar uma mensagem via Pix para **pix@gean.me**. É opcional, qualquer valor é bem-vindo e você pode escrever um recado junto da transferência. As mensagens mais interessantes podem aparecer nas próximas edições, sem promessa de publicação garantida. Até a IA já entendeu que contexto ajuda, mas boleto continua exigindo dinheiro. 😂
