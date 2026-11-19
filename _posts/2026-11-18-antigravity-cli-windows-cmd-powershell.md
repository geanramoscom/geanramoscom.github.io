---
layout: post
title: "Antigravity CLI no Windows: primeiros passos com agy no PowerShell e no CMD"
description: "Veja como instalar, atualizar e começar a usar o Antigravity CLI (agy) no Windows, com comandos para PowerShell, Prompt de Comando e dicas para resolver problemas de PATH."
date: 2026-11-18 22:59:31 -03:00
tags: [inteligência artificial, antigravity, linha de comando, windows, programação]
---

Se você instalou o **Antigravity CLI** no Windows e ficou olhando para o terminal pensando “tá, e agora eu digito o quê?”, calma. O robô não exige um ritual secreto, três velas e um doutorado em PowerShell.

O comando principal é o `agy`, a interface de terminal do Google Antigravity. Com ele, você abre uma sessão de agente dentro da pasta do projeto, conversa com a IA, pede alterações no código, executa comandos e revisa os arquivos modificados — tudo sem sair do terminal.

Abaixo está o caminho mais direto para sair do “instalei” e chegar ao “estou usando”.

<figure>
  <img src="https://raw.githubusercontent.com/google-antigravity/antigravity-cli/main/agy-cli-demo.gif" alt="Demonstração animada do Antigravity CLI funcionando no terminal" loading="lazy">
  <figcaption>Demonstração oficial do Antigravity CLI no terminal. Crédito: <a href="https://github.com/google-antigravity/antigravity-cli" rel="noopener">Google Antigravity CLI no GitHub</a>.</figcaption>
</figure>

## O que é o Antigravity CLI?

O Antigravity CLI é a versão de terminal do Google Antigravity. Em vez de abrir um aplicativo visual, você inicia o agente com `agy` dentro do diretório do projeto.

Ele consegue entender a estrutura do código, propor e fazer alterações em vários arquivos, chamar ferramentas e executar comandos com sua permissão. O projeto oficial descreve a ferramenta como uma interface otimizada para teclado, sessões remotas e conexões por SSH.

Traduzindo para a vida real: você pode abrir uma pasta, pedir “crie um script Python que leia esta API”, revisar o diff e mandar o agente executar um teste. A IA trabalha, mas o terminal continua mostrando o que está acontecendo — nada de aceitar uma reforma completa na casa sem olhar o orçamento primeiro.

## 1. Instalar ou atualizar pelo PowerShell

Abra o **PowerShell** e execute o instalador oficial:

```powershell
irm https://antigravity.google/cli/install.ps1 | iex
```

O instalador baixa o binário, verifica o pacote e normalmente coloca o executável em uma pasta dentro do perfil do usuário. No Windows, o caminho padrão documentado é semelhante a:

```text
C:\Users\<seu-usuário>\AppData\Local\agy\bin
```

O texto original deste guia usa `PC` como exemplo. Se você for fazer uma instalação limpa, mantenha o caminho correspondente ao seu usuário real.

Caso o `agy.exe` já exista em `C:\Users\PC\AppData\Local\agy\bin\agy.exe`, o instalador pode avisar que a CLI já está instalada e se atualiza automaticamente em segundo plano. Se precisar forçar a remoção do binário antes de instalar novamente, use:

```powershell
Remove-Item "C:\Users\PC\AppData\Local\agy\bin\agy.exe" -Force
irm https://antigravity.google/cli/install.ps1 | iex
```

**Atenção:** só faça a remoção se você tiver certeza de que esse é o caminho correto da sua instalação. O Windows tem uma relação meio dramática com arquivos apagados no susto.

## 2. Instalar pelo CMD

Também dá para instalar pelo **Prompt de Comando**. Abra o CMD e rode:

```bat
curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd
```

Esse comando baixa o instalador oficial, executa a instalação e apaga o arquivo temporário ao terminar.

Se você preferir usar o PowerShell, o comando continua sendo este:

```powershell
irm https://antigravity.google/cli/install.ps1 | iex
```

Use sempre os endereços oficiais do Google Antigravity. Não copie comandos de instalação de um comentário aleatório com “confia, irmão”, porque executar um script remoto no terminal é uma decisão que merece pelo menos cinco segundos de desconfiança saudável.

## 3. Conferir a versão e abrir a ajuda

Depois da instalação, confira se o Windows encontrou o executável.

No PowerShell:

```powershell
agy --version
agy --help
```

No CMD, os mesmos comandos funcionam:

```bat
agy --version
agy --help
```

O `--version` mostra se a ferramenta está acessível. Já o `--help` apresenta as opções disponíveis na versão instalada — e isso é importante porque comandos e recursos podem mudar entre versões.

O Antigravity também tem comandos para executar uma solicitação inicial de forma interativa ou não interativa:

```powershell
agy -i "Analise este projeto e sugira os próximos passos"
agy -p "Explique a estrutura deste projeto em cinco tópicos"
```

O primeiro inicia uma sessão interativa com um prompt inicial. O segundo executa uma solicitação e imprime a resposta sem abrir o fluxo interativo completo.

## 4. Iniciar a sessão principal

Para abrir o Antigravity CLI na pasta atual, use:

```powershell
agy
```

No CMD:

```bat
agy
```

O ideal é entrar antes na pasta do projeto:

```powershell
cd C:\caminho\do\seu\projeto
agy
```

Na primeira execução, a ferramenta pode pedir escolhas de aparência, modo de renderização e confirmação de confiança no workspace. Leia essas telas com calma. Se você autorizar uma pasta, o agente poderá indexar os arquivos dela e trabalhar naquele ambiente.

Depois, você pode escrever um pedido simples, como:

```text
Leia este projeto, explique como ele está organizado e não altere nenhum arquivo ainda.
```

Esse é um ótimo primeiro teste. Antes de pedir uma reforma geral no código, veja se o agente entendeu a casa.

## 5. E o comando `agy status`?

O material original deste guia sugere iniciar com:

```powershell
agy status
agy
```

Se a sua versão aceitar `agy status`, ele pode ser usado como uma checagem rápida. Porém, a documentação atual destaca principalmente `agy --version`, `agy --help` e a abertura direta com `agy`; o catálogo oficial de comandos não trata `agy status` como comando universal da CLI.

Então, se aparecer uma mensagem dizendo que `status` não é reconhecido, não precisa entrar em pânico. Rode:

```powershell
agy --help
```

e continue com:

```powershell
agy
```

## 6. Comandos úteis dentro da sessão

Depois que a interface estiver aberta, alguns comandos de barra ajudam a controlar a sessão:

```text
/diff
/usage
/exit
```

- `/diff` abre a revisão das alterações feitas pelo agente;
- `/usage` mostra o consumo e a cota disponíveis;
- `/exit` encerra a sessão e devolve o controle ao terminal.

A documentação também lista recursos como `/agents`, `/model`, `/tasks`, `/context` e `/plan`. Digite `/` dentro da interface para abrir o menu de comandos disponíveis na sua versão.

## 7. Quando o CMD não reconhece `agy`

Às vezes o PowerShell reconhece o comando, mas o CMD responde que “agy não é reconhecido como um comando interno ou externo”. O caso mais comum é o terminal antigo ainda não ter carregado as novas variáveis de ambiente.

Tente nesta ordem:

1. Feche o CMD e abra uma nova janela.
2. Feche também o PowerShell e abra outra sessão.
3. Rode novamente:

```bat
agy --version
```

Se ainda falhar, confira se a pasta abaixo existe:

```text
C:\Users\PC\AppData\Local\agy\bin
```

Se ela estiver correta no seu computador, adicione o caminho ao **PATH do Windows**. Lembre que `PC` é apenas o exemplo do guia; substitua pelo nome da conta de usuário usada na sua máquina.

Depois de alterar o PATH, abra um terminal novo. A janela já aberta não costuma atualizar sozinha — ela não é vidente, infelizmente.

## O primeiro teste recomendado

Com o `agy` funcionando, entre em uma pasta de teste e peça algo que possa ser conferido:

```text
Crie um arquivo chamado hello.py com um programa que escreva "Olá, Antigravity". Mostre o diff antes de executar qualquer comando.
```

Assim você testa três coisas de uma vez: criação de arquivo, revisão das alterações e execução controlada. Se tudo estiver certo, avance para tarefas maiores.

O Antigravity CLI não elimina a necessidade de revisar código. Ele reduz o trabalho braçal, acelera a exploração de um projeto e pode executar etapas por você — mas a tecla Enter continua tendo consequências. Use permissões com cuidado, mantenha backups e confira os diffs antes de aceitar uma mudança grande.

## Fontes oficiais

- [Documentação do Google Antigravity: primeiros passos](https://antigravity.google/docs/cli-getting-started?hl=pt-br)
- [Documentação do Antigravity CLI](https://antigravity.google/docs/cli/)
- [Referência oficial de comandos](https://antigravity.google/docs/cli/reference/)
- [Repositório oficial do Antigravity CLI no GitHub](https://github.com/google-antigravity/antigravity-cli)
- [Instalador oficial para PowerShell](https://antigravity.google/cli/install.ps1)
- [Instalador oficial para CMD](https://antigravity.google/cli/install.cmd)

O comando `agy` já abriu a porta. Agora só não deixe a inteligência artificial sair correndo pela casa sem você saber onde fica o quadro de luz. 😅

Se este guia te ajudou a configurar o Antigravity CLI, você pode mandar uma mensagem via Pix para **pix@gean.me**. É opcional, qualquer valor é bem-vindo e você pode escrever um recado junto da transferência; as melhores mensagens podem aparecer nas próximas edições, sem promessa de publicação garantida. A redação aceita carinho, café e, aparentemente, Pix — porque servidor não funciona com aplauso. 😂
