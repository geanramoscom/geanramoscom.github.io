---
layout: post
title: "O pacote oficial do Sicoob que ninguém do Sicoob publicou - e que roubava seu certificado do Pix"
description: "Investigação revela pacote falso no NuGet com nome do Sicoob que roubava certificados digitais e senhas usados no Pix. Os 11 pacotes de apoio continuam no ar."
date: 2026-11-16 00:40:00 -03:00
tags: [tecnologia, segurança, pix, sicoob, cibersegurança]
image: "https://www.catureba.com.br/wp-content/uploads/2024/05/foto1-28.jpg"
---

Senta aqui, porque esse babado envolve Pix, certificado digital, um programador que se chama Naruto e um pacote com cara de oficial que não tinha nada de oficial.

O canal **Arquivo Aberto** publicou o caso número quatro da série de investigações sobre segurança digital. E dessa vez o alvo foi um pacote que apareceu no **NuGet** — a lojinha de peças de código que programadores usam para montar software — com o nome do **Sicoob**. Detalhe: quem publicou **não foi o Sicoob**.

## O golpe disfarçado de ferramenta

Pra entender: quando uma empresa precisa cobrar boleto ou receber Pix pelo sistema, ela entrega ao software um **certificado digital** e uma **senha**. É como dar a chave do cofre pra máquina trabalhar.

O pacote falso fazia exatamente o que você está pensando. Pegava esse certificado e essa senha e mandava os dois pra fora. E aqui vem a parte mais criativa do golpe: o roubo saía **disfarçado de relatório de erro**.

O destino era o **Sentry**, um serviço legítimo que programadores usam pra monitorar bugs. Ou seja, se alguém olhasse rapidamente, parecia que o programa estava só reportando um probleminha. Mas na verdade estava entregando a chave do Pix inteirinha.

## Achou. Apagou. Acabou? Que nada.

A **Socket**, empresa de segurança especializada em analisar pacotes de código, detectou o problema. No fim de maio de 2026, o NuGet apagou o pacote principal.

Pronto, caso encerrado?

Amiga, não.

O pacote malicioso dependia de **outros 11 pacotes**. E esses 11 continuavam no ar. Seis meses depois da remoção do principal, eles ainda estavam lá. Ainda com o nome do Sicoob. Ainda com a palavra **"oficial"**.

Só que nenhum deles é oficial.

## 695 mil linhas de código na lupa

A equipe do Arquivo Aberto baixou as **55 versões** dos pacotes e abriu o código. Foram **695 mil linhas** vasculhadas.

E o resultado surpreendeu: nenhuma dessas linhas lê arquivo, pega certificado ou se comunica com outro endereço além do Sicoob. Os 11 pacotes não roubam nada.

Então pra quê eles existem?

**Eram a isca. Não o anzol.**

A estratégia era montar um ecossistema que parecesse legítimo — uma família de pacotes com nome institucional, versões atualizadas, código funcional — pra que o pacote que realmente roubava passasse despercebido no meio da turma. Quem instalasse um, acabaria puxando o outro por tabela.

E a isca tinha capricho. Na quarta-feira à tarde, o autor **consertou um bug** num dos pacotes de apoio. No mesmo minuto, publicou o pacote que roubava. Manutenção de fachada e crime no mesmo commit.

## O rastro do Naruto

Agora vem a parte que parece roteiro de série.

Todo programa compilado guarda, escondido nos metadados, o **caminho da pasta** onde foi criado. E no pacote malicioso, o caminho aponta pra um computador **Linux**, na área de trabalho de um usuário chamado... **Naruto**.

O nome de autor no pacote? **João Estevão**. Que por acaso é o sobrenome de quem desenvolveu o pacote **legítimo** mais baixado do Sicoob no NuGet. Só que o pacote legítimo nasce num **Windows**. E o falso nasce num **Linux**. Alguém pegou emprestado o nome, mas esqueceu de pegar emprestado o sistema operacional.

## O relógio escondido no zip

E tem mais.

Um pacote do NuGet é basicamente um arquivo **.zip**. E o zip registra a hora do computador que montou o arquivo. O NuGet registra a hora mundial (UTC). Comparando as duas, dá pra descobrir o fuso horário de quem empacotou.

Nas 55 versões, a diferença foi sempre a mesma: **três horas a menos**. Fuso de Brasília. Ou de Buenos Aires, que tem o mesmo offset.

Pra ter certeza, a equipe testou com pacotes de programadores conhecidos e confirmou o padrão.

## A conta criada 15 minutos depois

Última peça do quebra-cabeça.

O endereço do Sentry que recebia os dados roubados tem um **identificador numérico**. O código do Sentry é aberto, e esse número carrega a data de criação da conta, codificada dentro dele.

A equipe decodificou.

A conta foi criada numa **segunda-feira**, às **23h55** no horário de Brasília. **15 minutos depois** de o primeiro pacote de apoio ser publicado no NuGet. Na manhã seguinte, o projeto foi configurado. À tarde, o pacote que roubava foi ao ar.

Tudo em menos de 24 horas.

## Tá, mas e o Sicoob?

Segundo o Arquivo Aberto, a equipe tentou avisar o Sicoob. Até o momento da publicação do vídeo, **ninguém respondeu**.

Enquanto isso, a conta que publicou os pacotes **continua ativa** no NuGet. Pode soltar uma versão nova amanhã.

E os 11 pacotes de apoio — aqueles que funcionam como isca — continuam disponíveis.

## Por que isso importa

Esse caso mostra uma coisa que a maioria das pessoas não imagina: o software que roda por trás de uma transação bancária às vezes é montado com peças que vieram de uma prateleira aberta na internet. E nessa prateleira, qualquer pessoa pode colocar um pacote com o nome que quiser.

Não precisa de autorização do Sicoob pra publicar algo com o nome do Sicoob. Não precisa provar que trabalha lá. Basta criar uma conta e fazer upload.

Pra empresas e programadores, o recado é direto: **verificar a origem de cada dependência** não é paranoia. É o mínimo.

Pra quem usa Pix no dia a dia, calma — o golpe não atinge o usuário final diretamente. Ele atinge o **sistema da empresa** que processa o pagamento. Mas se o sistema da empresa for comprometido, o problema escala rápido.

## O que se sabe e o que não se sabe

**Confirmado:**
- Um pacote falso no NuGet usava o nome do Sicoob para roubar certificados digitais e senhas.
- O roubo era enviado ao Sentry disfarçado de relatório de erro.
- O pacote foi removido, mas 11 pacotes de apoio continuam no ar.
- A análise das 55 versões não encontrou código malicioso nos pacotes de apoio.
- Metadados indicam fuso horário de Brasília e um computador Linux com usuário "Naruto".

**Não confirmado:**
- A identidade do autor real. Os indícios são circunstanciais — fuso, nome emprestado, cronologia — e não constituem prova definitiva.
- Se o Sicoob tomou alguma providência internamente.
- Se alguma empresa foi efetivamente comprometida pelo pacote.

O vídeo termina com uma pergunta direta ao público: **"Foi alguém daqui ou alguém que quis parecer daqui?"**

A investigação aponta pistas fortes, mas não fecha a identidade. E honestamente? Enquanto a conta continuar ativa e os pacotes de apoio seguirem no ar, a pergunta mais urgente talvez seja outra: **quando vem o próximo?**

---

Gostou de entender esse B.O? 

O Gean funciona com curiosidade, café e uma quantidade constrangedora de abas abertas. Se quiser mandar um recado, descobrimos um canal de comunicação extremamente eficiente: **mensagem via Pix**. 😂

A chave é **pix@gean.me**. Qualquer valor, qualquer mensagem. As melhores podem aparecer nas próximas edições. E se você acha que segurança digital não é assunto pra piada, concordo. Mas a conta do servidor discorda — ela ri de nervoso toda vez que chega. 😅
