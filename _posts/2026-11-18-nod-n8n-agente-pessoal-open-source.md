---
layout: post
title: "Nod, da n8n: o agente pessoal gratuito que entrou na briga com Dots, Muse e Grokbot"
description: "A n8n lançou o Nod, um agente pessoal open source que roda no seu computador, usa o modelo que você escolher e executa tarefas em apps e sites com aprovação antes de agir."
date: 2026-11-18 21:44:39 -03:00
tags: [inteligência artificial, n8n, agentes de IA, automação, código aberto]
---

Menina, a n8n entrou naquele grupo de empresas que olha para a inteligência artificial e pensa: “Tá bonito esse chatbot, mas será que ele pode parar de conversar e começar a resolver as coisas?”

A resposta atende pelo nome de **Nod**.

O novo projeto da n8n Labs é um agente pessoal open source que roda no seu computador ou no seu próprio servidor. Ele tem um navegador, um espaço de trabalho e acesso aos aplicativos que você autorizar. A ideia é fazer tarefas de verdade, em vez de devolver uma lista de instruções para você executar depois.

Cancelar uma assinatura, acompanhar o preço de um produto, preparar uma reunião, baixar notas fiscais de um portal, conferir e-mails, organizar arquivos e preencher formulários. O Nod quer ser aquele funcionário digital que trabalha nos bastidores, mas ainda pergunta antes de tomar uma decisão que pode gerar boleto, mensagem enviada ou constrangimento familiar.

## O que é o Nod, afinal?

O Nod é um aplicativo separado do n8n. Você não precisa ter uma conta n8n para usá-lo e não precisa montar uma instância na nuvem antes de começar.

A conversa pode acontecer no aplicativo, no navegador, no Telegram ou no WhatsApp. Por trás dela, o agente usa um computador próprio, um navegador isolado e os aplicativos conectados por você, como Gmail, Calendar, Slack, Notion e Linear.

A diferença para um assistente de chat tradicional é justamente essa capacidade de continuar o trabalho fora da conversa.

Se você pedir “encontre três hotéis que cabem no meu orçamento e prepare uma reserva”, o Nod pode pesquisar, comparar e montar a solicitação. Mas a confirmação final precisa passar por você quando envolver uma compra ou outro compromisso externo.

É a diferença entre “aqui estão os links” e “eu fiz a pesquisa e deixei tudo pronto, falta você dizer sim”.

## O agente que trabalha no seu computador

O posicionamento mais interessante do Nod é local-first.

A instalação desktop roda no seu computador, e a alternativa self-hosted pode funcionar em uma máquina ou servidor controlado por você. O projeto é publicado sob a licença **Apache 2.0**, com o código aberto no GitHub.

Isso coloca o Nod em uma posição diferente de agentes como **ChatGPT Dots, Meta Muse, Grokbot e Claude Duet**, que dependem principalmente da infraestrutura de seus próprios fornecedores. A comparação oficial da n8n destaca três diferenças: onde o agente roda, qual modelo pode ser usado e quanto do comportamento dá para auditar.

No Nod, você escolhe o provedor de IA. Pode conectar uma chave de API, usar um plano compatível do ChatGPT, apontar para provedores como OpenAI, Anthropic, Gemini, OpenRouter, Bedrock e Vertex, ou tentar um modelo local compatível.

O aplicativo não é o modelo. É a camada que organiza o trabalho, abre o navegador, conversa com os serviços e registra o que aconteceu.

## “Gratuito” com um asterisco bem grande

Sim, o Nod é gratuito e open source. Mas isso não significa que toda tarefa de IA custará zero.

Se você conectar uma API, o provedor do modelo cobrará pelo uso. Se usar um plano de IA, o consumo seguirá as regras desse plano. Se rodar um modelo local, pode não haver cobrança por requisição, mas existe o custo do computador, da energia e da configuração, porque a nuvem aparentemente ainda não aceita pagamento em abraços.

A n8n colocou mecanismos para evitar que o agente faça uma excursão turística pela sua fatura. O Nod mostra o custo estimado das tarefas, oferece limite mensal e pode pedir confirmação quando o gasto de uma tarefa ultrapassa um valor definido. A documentação também informa que novas instalações recebem um limite mensal inicial de US$ 200, que pode ser alterado.

Esse detalhe é importante. O software é grátis. A inteligência que ele chama pode não ser.

## A parte boa: ele pergunta antes de agir

Um agente que lê e-mails é interessante. Um agente que envia e-mails, paga contas e apaga coisas é outra conversa completamente diferente.

Por isso, o Nod foi desenhado com uma camada de verificação de confiança. A ideia é que páginas, e-mails e arquivos possam fornecer informação, mas não possam dar ordens ao agente. A autorização precisa vir do usuário, de uma regra criada pelo usuário ou de uma aprovação explícita.

O Nod também promete manter senhas, códigos e cartões fora do alcance do modelo. O cofre preenche os campos privados no site, sem entregar o segredo para a IA ler. As ações, logins, custos e alterações ficam registrados em uma área de uso.

Tudo isso é muito melhor do que simplesmente dizer “confia no robô”. Mas não é uma capa de invencibilidade. A própria documentação reconhece que a checagem de permissão usa um modelo e pode errar. Segurança aqui é uma arquitetura em camadas, não uma promessa mágica no rodapé da página.

## Ele tem memória e proatividade

O Nod tenta manter uma conversa contínua e lembrar preferências ao longo do tempo. Segundo a n8n, ele alcançou **93,2% no LongMemEval**, um benchmark público de memória de longo prazo.

Esse número deve ser lido como resultado divulgado pela própria empresa, não como garantia de que o agente vai lembrar o aniversário da sua mãe e esquecer aquela senha que você pediu para ele nunca guardar. Benchmarks ajudam, mas a experiência real depende dos dados, das configurações e do tipo de tarefa.

Além da memória, o Nod pode rodar trabalhos agendados. Ele pode preparar um resumo matinal, acompanhar o preço de alguma coisa, verificar uma caixa de entrada ou avisar que uma informação mudou.

A promessa é sair do modo “eu pergunto, ele responde” e entrar no modo “ele acompanha uma parte da minha rotina”. É aí que a ferramenta fica poderosa e também mais delicada. Quanto mais o agente trabalha sem você olhando, mais importante se torna saber exatamente o que ele pode fazer sozinho.

## Onde os concorrentes ainda levam vantagem

O Nod não ganhou automaticamente de Dots, Muse, Grokbot ou Duet só porque é aberto e gratuito. Não há, no material oficial consultado, um teste independente que comprove superioridade geral em qualidade ou velocidade.

A vantagem dele está em outro lugar: **controle**.

Você pode escolher onde o agente roda, qual modelo usa, quanto pretende gastar e o que o código faz. Em compensação, você precisa lidar com instalação, conexão de provedores, permissões e manutenção.

Também existe uma limitação prática: se o Nod estiver rodando apenas no notebook, ele para quando o computador dorme. Para continuar trabalhando o tempo todo, você precisa deixá-lo ligado ou instalar a ferramenta em um servidor. A versão hospedada está nos planos da equipe, mas ainda não é a experiência padrão.

O projeto também é voltado para uma pessoa por instalação. Não é a mesma coisa que montar um processo compartilhado para uma equipe inteira dentro do n8n.

## A aposta da n8n

O Nod parece menos interessado em criar mais um chat bonitinho e mais interessado em disputar o espaço do agente que tem mãos digitais.

Ele lê, pesquisa, navega, preenche, organiza, agenda e aprende rotinas. Só que faz isso tentando manter o usuário no comando, com código aberto, registro de ações e um modelo que pode ser escolhido.

Se Dots, Muse, Grokbot e Duet representam a comodidade do agente na nuvem, o Nod representa a tese “meu computador, meu modelo, minhas regras”.

Essa troca não é pequena. A nuvem oferece praticidade. O local oferece controle. E, como quase tudo na tecnologia, você precisa decidir qual boleto prefere pagar: o da assinatura ou o da configuração.

A novidade merece atenção porque aponta para uma mudança no papel dos agentes pessoais. Eles não querem mais apenas conversar com você. Querem entrar nos sites, buscar os arquivos, acompanhar as tarefas e voltar com algo pronto.

Agora resta a parte mais importante: ensinar esses agentes a serem úteis sem transformá-los naquele parente que ajuda a organizar a festa e, no fim, compra 200 coxinhas para uma reunião de cinco pessoas.

## Fontes e checagem

- [Anúncio oficial da n8n sobre o Nod](https://blog.n8n.io/meet-nod/)
- [Repositório do Nod no GitHub](https://github.com/n8n-io/nod)
- [Documentação: o que é o Nod](https://nod.n8n.io/docs/get-started/what-is-nod/)
- [Princípios de confiança do Nod](https://nod.n8n.io/docs/trust/principles/)
- [Comparação oficial com outros agentes pessoais](https://github.com/n8n-io/nod/blob/main/docs/src/content/docs/trust/compare.mdx)
- [Documentação de custos e uso](https://nod.n8n.io/docs/use/spending/)

O Nod está em *research preview*. Recursos, compatibilidade, preços dos provedores e disponibilidade podem mudar.

Se você quiser testar o Nod e descobrir se ele realmente dá conta daquela lista de tarefas que mora há meses no seu caderno, pode mandar uma mensagem via Pix para **pix@gean.me**. É opcional, qualquer valor é bem-vindo e o recado junto da transferência pode aparecer nas próximas edições, sem promessa de publicação garantida. Agente gratuito, servidor nem sempre. 😂
