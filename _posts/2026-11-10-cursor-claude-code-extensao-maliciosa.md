---
layout: post
title: "O Claude Code que nunca existiu: como uma atualização falsa entrou no Cursor"
description: "Uma extensão adulterada do Claude Code ficou cerca de 11 horas no marketplace do Cursor e tentou instalar uma porta SSH em computadores de desenvolvedores."
date: 2026-11-10 21:06:20 -03:00
tags: [segurança digital, inteligência artificial, Cursor, Claude Code, malware, programação]
---

Gente, imagina atualizar uma extensão de programação e, sem perceber, entregar a chave da sua casa para um desconhecido. Foi mais ou menos esse o susto que atingiu usuários do **Cursor** em 29 de outubro.

Uma cópia adulterada da extensão oficial do **Claude Code**, da Anthropic, apareceu no marketplace do editor. O pacote tinha nome conhecido, identidade conhecida e aparência de atualização normal. Só que carregava um brinde nada simpático: código para coletar informações do computador, tentar instalar uma chave SSH e abrir um caminho de acesso remoto.

O detalhe mais estranho é que a versão problemática praticamente não existe nas listas oficiais. A sequência saltava de **2.1.312 para 2.1.314**. A 2.1.313 ficou com cara de episódio perdido, enquanto o marketplace do Cursor distribuiu versões adulteradas identificadas como **2.1.312 e 2.1.313**.

A história parece roteiro de investigação sobre supply chain, e é exatamente isso. Só que, neste caso, o “fornecedor confiável” era uma loja de extensões para programadores.

## O que aconteceu no Cursor?

Segundo o aviso de segurança do próprio Cursor, as versões modificadas ficaram disponíveis por aproximadamente **11 horas**, entre cerca de 2h27 e 13h35, no horário do Pacífico, em 29 de outubro de 2026.

O incidente afetou as versões para **Windows e macOS** distribuídas pelo marketplace do Cursor. O número divulgado foi de até **5 mil usuários potencialmente expostos**. Potencialmente é a palavra importante aqui. Isso não significa que 5 mil computadores tenham sido invadidos com sucesso.

O Cursor retirou as versões, fechou temporariamente o marketplace, auditou as extensões, rotacionou chaves e trabalhou com o provedor de hospedagem para tirar do ar o servidor usado no ataque.

A versão limpa recomendada passou a ser a **2.1.314**.

## O que o código tentava fazer?

O pacote adulterado não precisava parecer um programa diferente. Ele podia chegar como uma atualização normal e executar o código malicioso quando a extensão fosse carregada.

De acordo com o aviso do Cursor, o payload tentava coletar informações como:

- nome do computador;
- usuário do sistema;
- sistema operacional e arquitetura;
- diretório pessoal;
- diretórios de trabalho;
- e-mail configurado no Git;
- endereço IP público;
- nomes de variáveis de ambiente.

Os nomes das variáveis são especialmente interessantes para um invasor porque podem indicar a presença de chaves, tokens, senhas ou credenciais de serviços em uma máquina de desenvolvimento.

Depois vinha a parte mais perigosa: o código tentava adicionar uma chave pública controlada pelo atacante ao arquivo `authorized_keys`, ativar o acesso SSH local e abrir um túnel reverso para um servidor externo.

Traduzindo sem economês de segurança: o computador tentava ligar para o invasor e dizer “pode entrar por aqui”.

A chave aparecia com o comentário **`svc-telemetry`**, um nome burocrático o bastante para passar despercebido no meio de arquivos técnicos. Também havia tentativas de persistência, com mecanismos de inicialização automática no macOS e tarefas agendadas no Windows.

## O erro que pode ter limitado o estrago

O código malicioso também tinha erros de execução. Em condições normais, ativar o serviço SSH ou alterar certas configurações exige privilégios elevados. O Cursor informou que, fora de situações incomuns em que o editor tivesse sido iniciado com privilégios administrativos, essa etapa provavelmente falharia na maioria das máquinas.

Isso reduz o risco, mas não transforma a extensão em inofensiva.

Mesmo quando a porta SSH não abre, o programa ainda pode ter coletado dados, criado arquivos de persistência ou deixado credenciais expostas no computador. Um ataque que falha na etapa principal não merece certificado de segurança. Merece investigação.

## A Anthropic foi invadida?

Até o momento, a resposta pública é: **não há evidência de que os sistemas da Anthropic tenham sido comprometidos**.

A própria Anthropic afirmou que um agente malicioso usou acesso ao marketplace do Cursor para publicar uma cópia adulterada da extensão. A empresa disse que não desenvolveu nem publicou aquele pacote e que as versões distribuídas por seus canais oficiais não foram afetadas.

A Microsoft também informou que o marketplace oficial do Visual Studio, o npm e o Open VSX não distribuíram os pacotes maliciosos identificados no incidente.

O ponto que continua sem resposta é justamente o mais interessante: **como alguém conseguiu publicar uma versão adulterada sob a identidade legítima da extensão dentro do ecossistema do Cursor?**

O Cursor disse que rotacionou chaves e reconstruiu o marketplace. Essas medidas sugerem que o caso foi tratado como comprometimento do caminho de distribuição, mas não explicam publicamente todos os detalhes de como o acesso foi obtido.

A investigação ainda tem uma lacuna. E, em segurança, lacuna é aquele cômodo escuro onde a preocupação continua morando.

## E a história da Binance?

O vídeo também coloca o caso ao lado do ataque que atingiu a Binance e envolveu o computador de um engenheiro. A proximidade temporal chama atenção, mas isso não prova que os dois incidentes tenham o mesmo autor ou façam parte da mesma operação.

A própria cronologia divulgada sobre a Binance indica que o comprometimento começou antes de 29 de outubro. Portanto, o correto é tratar os episódios como **casos distintos até que uma investigação técnica demonstre ligação**.

Notícia de segurança já é suficientemente séria. Não precisa de um vilão compartilhado inventado para ficar interessante.

## Desinstalar resolve?

Não necessariamente.

O Cursor alertou que remover a extensão pode não apagar scripts de persistência nem desfazer alterações feitas no sistema. Quem instalou ou atualizou o `Anthropic.claude-code` pelo marketplace do Cursor dentro da janela de exposição deve seguir o aviso oficial e fazer uma verificação completa.

O caminho mais seguro inclui:

1. confirmar o histórico da extensão e a versão instalada;
2. procurar a chave não autorizada com o comentário `svc-telemetry`;
3. verificar mecanismos de inicialização e tarefas agendadas;
4. isolar a máquina se houver sinais de execução do payload;
5. trocar credenciais e tokens acessíveis a partir dela, usando um dispositivo confiável;
6. considerar a reconstrução do ambiente quando houver evidência de persistência ou acesso remoto.

Não é uma boa ideia copiar comandos de limpeza aleatórios de fóruns e executá-los com privilégios de administrador. O aviso oficial do Cursor inclui o procedimento e os scripts de validação. Em incidente de supply chain, a fonte de remediação também precisa ser verificada.

## A lição que fica

O ataque não precisou criar uma extensão chamada “Claude Code Premium 2026 Definitive Edition”. Bastou usar uma identidade que os desenvolvedores já reconheciam e entrar no canal de atualização automática.

Esse é o ponto mais incômodo: **nome conhecido não é prova suficiente de autenticidade**.

Para ferramentas que executam código, acessam arquivos, usam terminal e carregam credenciais de desenvolvimento, a confiança precisa incluir origem, versão, assinatura, integridade do pacote e histórico de distribuição.

Marketplace ajuda. Não é uma bolha de proteção mágica.

O Cursor removeu o pacote, investigou o marketplace e publicou orientações. A Anthropic saltou para a versão 2.1.314. Mas a pergunta continua ecoando para qualquer editor com extensões automáticas:

> Quando você clica em “atualizar”, está recebendo o programa certo ou apenas o programa com o nome certo?

## Fontes e checagem

- [Aviso oficial do Cursor sobre a extensão maliciosa](https://cursor.com/en-US/blog/claude-code-extension-security-notice)
- [Análise da Microsoft sobre o backdoor na extensão](https://www.microsoft.com/en-us/security/blog/2026/10/30/inside-malicious-claude-code-branded-cursor-extension-persistent-ssh-backdoor/)
- [Análise da Palo Alto Networks sobre o incidente](https://www2.paloaltonetworks.com/blog/security-operations/how-cortex-aes-protects-against-compromised-claude-code-extensions/)
- [Análise da Sophos sobre a distribuição pelo marketplace do Cursor](https://www.sophos.com/en-us/blog/malicious-claude-code-extension-distributed-through-cursor-marketplace)
- Material-base: transcrição fornecida para esta publicação. O número de usuários foi tratado como exposição potencial, e a possível ligação com o caso da Binance não foi apresentada como fato confirmado.

Amiga, hoje o pós-créditos vem com uma recomendação nada glamourosa: confira suas extensões, mantenha as atualizações sob controle e não trate uma loja de plugins como se fosse um altar sagrado. Se esta análise te ajudou a escapar de uma cilada digital, você pode mandar uma mensagem via Pix para **pix@gean.me**. É opcional, qualquer valor é bem-vindo e o recado pode aparecer nas próximas edições, sem promessa de publicação garantida. A única coisa garantida é que até a extensão “oficial” agora vai ter que apresentar documento na portaria. 😂
