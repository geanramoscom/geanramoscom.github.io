---
layout: post
title: "US$ 6,3 bilhões em 20 minutos: o ataque à Binance e a lição que começa em um notebook"
description: "O maior roubo de criptomoedas já registrado expôs carteiras da Binance em dez blockchains. O que Binance, FBI e TRM Labs já confirmaram e o que esse ataque ensina sobre segurança."
date: 2026-11-01 09:15:00 -0300
tags: [tecnologia, segurança, criptomoedas]
---

Como alguém consegue tirar mais de **US$ 6 bilhões** de uma das maiores infraestruturas de criptomoedas do planeta em questão de minutos?

Quando vi essa história pela primeira vez, o número chamou atenção. O material que chegou até mim falava em **US$ 6,3 bilhões movimentados em cerca de 20 minutos**, dez blockchains atingidas e um possível comprometimento de um notebook usado por um engenheiro.

Fui atrás das fontes.

E a história é ainda mais interessante quando saímos do vídeo curto e olhamos o que Binance, FBI e empresas especializadas em rastreamento de blockchain já publicaram.

## O ataque aconteceu

A Binance confirmou que, por volta de **20h05 UTC de 29 de outubro de 2026**, suas hot wallets foram comprometidas. A estimativa divulgada pela própria empresa é de aproximadamente **US$ 6,3 bilhões em ativos digitais** retirados sem autorização.

Hot wallets são carteiras que permanecem conectadas à infraestrutura online da corretora para permitir movimentações rápidas. Essa conveniência também faz delas uma parte extremamente sensível da operação.

A TRM Labs, empresa especializada em inteligência de blockchain, chegou a um número ainda mais preciso: aproximadamente **US$ 6,36 bilhões** retirados de carteiras atribuídas à Binance em **dez blockchains**.

Segundo a TRM, a maior parte da movimentação ocorreu em aproximadamente vinte minutos.

Isso coloca o caso acima do ataque à Bybit de 2025, estimado em US$ 1,5 bilhão, tornando o episódio da Binance o maior roubo de criptomoedas já registrado até agora.

## O notebook apareceu mesmo na investigação

Uma das coisas que mais me chamou atenção no relato original era a afirmação de que tudo teria começado em um notebook.

A própria Binance confirmou que essa foi uma das primeiras pistas.

Na atualização inicial, a empresa informou que sua investigação apontava para o possível comprometimento do notebook de um engenheiro de DevOps. A partir desse equipamento, o invasor teria conseguido acessar um container de serviço e enviar transações de saque não autorizadas.

Só que a investigação avançou.

No dia seguinte, a Binance esclareceu que o notebook aparentemente **não explica sozinho todo o incidente**. Outros pontos de comprometimento foram encontrados e a empresa ainda não publicou a causa raiz definitiva.

Existe também um detalhe importante: até a atualização publicada pela Binance em 30 de outubro, **não havia evidência de vazamento das chaves privadas das carteiras**.

Isso muda bastante a leitura técnica do ataque.

O invasor talvez não tenha simplesmente “roubado uma chave”. A evidência disponível aponta para algo potencialmente mais sofisticado: conseguir fazer a própria infraestrutura legítima de assinatura da Binance autorizar operações controladas pelo atacante.

## Dez blockchains, assinaturas válidas e uma pista importante

A análise da TRM encontrou movimentações em Ethereum, Bitcoin, Tron, XRP Ledger, Solana, Arbitrum, Avalanche, Optimism, Base e Polygon.

No Ethereum aconteceu uma das partes tecnicamente mais interessantes do ataque.

Segundo a TRM, o invasor utilizou o **EIP-7702**, recurso introduzido no Ethereum com a atualização Pectra. Ele permite que uma carteira comum delegue temporariamente seu comportamento a um contrato inteligente mediante uma autorização assinada.

O atacante possuía um lote de **50 autorizações previamente assinadas** por uma hot wallet da Binance. Uma delas acabou coincidindo com o nonce válido da carteira.

Poucos minutos depois, um contrato controlado pelo invasor começou a esvaziá-la.

Em uma única operação foram movimentados 167.464 ETH e dezenas de outros tokens.

Mas aqui está a pista mais importante: outras carteiras da Binance, em blockchains completamente diferentes, também produziram transações válidas para o atacante praticamente no mesmo período.

Bitcoin não funciona como Ethereum. XRP não funciona como Solana. As redes possuem mecanismos e formatos diferentes.

Mesmo assim, o atacante conseguiu assinaturas válidas em várias delas.

Por isso a TRM considera provável que o comprometimento tenha alcançado algum componente da **infraestrutura de assinatura das hot wallets da Binance**, e não apenas uma carteira Ethereum isolada.

A Binance ainda precisa publicar o relatório técnico final para sabermos exatamente como isso aconteceu.

## Quanto foi levado?

Segundo a análise on-chain da TRM Labs, aproximadamente US$ 3,79 bilhões estavam relacionados ao Ethereum e tokens dessa rede.

Entre os ativos identificados estavam mais de **200 mil ETH**, cerca de **18.270 BTC**, grandes quantidades de USDT e USDC, além de XRP, SOL, TRX e outros tokens.

Quando comecei a escrever este texto, uma das informações que circulava era que aproximadamente US$ 3 bilhões haviam sido congelados.

A própria Binance confirmou esse valor aproximado.

A TRM detalhou parte dessa corrida: emissores de stablecoins e participantes da indústria conseguiram bloquear aproximadamente **US$ 2,7 bilhões** diretamente nas redes analisadas. Tether, Circle, Ripple e outras organizações participaram das ações.

Essa é uma peculiaridade interessante das stablecoins centralizadas.

Uma empresa como a Tether pode congelar determinados USDT. A Circle pode fazer algo semelhante com USDC.

Bitcoin não possui uma empresa com um botão de “congelar BTC”.

Essa diferença ficou extremamente visível durante o ataque.

## E os clientes da Binance?

A Binance afirma que os clientes não arcarão com o prejuízo.

A empresa anunciou que utilizará recursos próprios e o **SAFU, Secure Asset Fund for Users**, para cobrir os ativos roubados.

Em 30 de outubro, informou ter separado mais de **US$ 6,34 bilhões** e já possuir aproximadamente 80% dos ativos necessários para recompor o que havia sido retirado.

Na atualização seguinte, publicada em 31 de outubro, a Binance afirmou que a recomposição já havia chegado a **90%**.

Os saques foram temporariamente suspensos enquanto a infraestrutura passava por verificações adicionais de segurança.

É importante separar duas coisas: o dinheiro ter sido roubado da infraestrutura da Binance não significa automaticamente que o saldo contábil de cada cliente desapareceu. A empresa assumiu publicamente a responsabilidade financeira pelo incidente.

Mas isso também expõe um ponto que às vezes esquecemos quando usamos uma corretora:

> **Quando seus ativos estão sob custódia de outra empresa, parte do seu risco passa a ser o risco operacional dessa empresa.**

## Agora sabemos quem fez

No primeiro material que recebi, a autoria ainda aparecia como uma suspeita.

Isso mudou.

A TRM Labs atribuiu o ataque ao **TraderTraitor**, grupo ligado à Coreia do Norte, com alto grau de confiança.

E em **31 de outubro de 2026**, o FBI foi além: publicou um alerta atribuindo oficialmente o roubo à Coreia do Norte e identificando a atividade como TraderTraitor.

O FBI também informou que os responsáveis estavam convertendo parte dos ativos roubados principalmente para Ethereum e alertou exchanges, serviços DeFi, operadores de nós e empresas do setor para bloquear transações associadas aos endereços identificados.

Portanto, neste ponto, já não estamos falando apenas de uma hipótese levantada por uma empresa privada de análise.

Existe uma atribuição pública do FBI.

## O que mais me interessa nessa história não são os US$ 6 bilhões

É o notebook.

Podemos construir uma infraestrutura cheia de firewall, autenticação, monitoramento, cofres digitais e servidores isolados.

Mas existe uma regra bastante inconveniente na segurança:

**a proteção de um sistema gigantesco pode acabar dependendo do computador de uma única pessoa com acesso privilegiado.**

É por isso que endpoint também é infraestrutura.

O computador de um desenvolvedor, administrador ou engenheiro DevOps não é “só um notebook”. Dependendo das credenciais, sessões, certificados e sistemas aos quais ele consegue chegar, aquela máquina pode ser uma ponte para uma parte enorme da empresa.

## E isso vale muito além das criptomoedas

Talvez você nunca tenha comprado Bitcoin.

Mesmo assim, a história importa.

Ataques sofisticados nem sempre começam quebrando uma criptografia impossível ou invadindo diretamente o servidor principal.

Eles podem começar por:

- uma estação de trabalho comprometida;
- uma sessão autenticada;
- uma credencial com permissões demais;
- um token esquecido;
- um sistema de assinatura mal segmentado;
- uma autorização que deveria exigir mais controles.

O invasor não precisa derrubar a muralha se conseguir entrar carregando uma chave válida.

## Agora coloque agentes de IA nessa equação

É aqui que essa história fica ainda mais próxima do que tenho estudado e construído.

Estamos conectando agentes de inteligência artificial a e-mail, servidores, GitHub, bancos de dados, APIs, sistemas financeiros, navegadores e ferramentas internas.

Isso é fantástico.

Também significa que estamos criando novas identidades digitais com capacidade de executar ações.

Cada integração representa uma permissão.

Cada API possui uma credencial.

Cada agente possui um alcance.

Cada máquina administrativa pode virar uma ponte.

Por isso tenho defendido cada vez mais uma arquitetura com **aprovação humana para operações sensíveis, privilégios mínimos, logs, limites claros e possibilidade de desligamento rápido**.

Um agente que precisa ler boletos não necessariamente precisa poder alterar contas bancárias.

Um agente que publica um blog não precisa ter acesso administrativo ao servidor inteiro.

Um sistema de IA que consulta dados não deveria automaticamente receber permissão para apagá-los.

A facilidade da automação não pode apagar a velha disciplina da segurança.

## Segurança é feita de camadas

Nenhuma medida isolada resolve tudo.

MFA ajuda. Segmentação ajuda. Hardware keys ajudam. Monitoramento ajuda. Limites de saque ajudam. Aprovação múltipla ajuda. Separar sistemas de assinatura por carteira e blockchain ajuda.

Mas segurança de verdade nasce quando essas camadas continuam funcionando mesmo depois que uma delas falha.

É exatamente essa pergunta que o caso Binance deixa para qualquer equipe de TI:

> **Se o notebook de uma pessoa privilegiada for comprometido hoje, até onde o invasor consegue chegar?**

Se a resposta for “em praticamente tudo”, o problema não é apenas o notebook.

É a arquitetura.

## Um notebook de bilhões de dólares

No começo dessa história eu fiquei impressionado com o valor.

US$ 6,3 bilhões.

Depois de ler as análises técnicas, o número continuou absurdo, mas outra coisa passou a chamar mais minha atenção.

Um ataque preparado durante horas conseguiu produzir transações válidas em carteiras de dez blockchains diferentes. Empresas correram para congelar bilhões em stablecoins. A Binance separou bilhões de dólares para cobrir o prejuízo. O FBI entrou na investigação. E tudo isso aconteceu numa janela de tempo menor do que muita reunião de escritório.

É fácil olhar para um caso desse tamanho e pensar: “isso nunca aconteceria comigo”.

Provavelmente não com US$ 6 bilhões.

Mas a mecânica é assustadoramente familiar para qualquer pessoa que trabalha com infraestrutura.

Uma máquina.

Uma credencial.

Uma permissão.

Uma ponte entre sistemas.

Automatizar continua sendo fantástico. Eu provavelmente sou suspeito para falar disso.

Mas automatizar sem pensar em segurança é construir uma Ferrari e deixar a chave no para-brisa.

Eu prefiro continuar com a Ferrari.

Só vamos guardar melhor a chave.

---

**Fontes consultadas:** Binance Security Incident Update (30/10/2026); Binance Security Incident Update #2 (30/10/2026); Binance Recovery Update #3 (31/10/2026); FBI Cyber, “North Korea Responsible for $6 Billion+ Binance Attack” (31/10/2026); TRM Labs, “North Korea Steals USD 6.36 Billion From Binance in the Largest Hack in History” (29/10/2026).
