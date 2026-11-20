---
layout: post
title: "PostgreSQL 19 chega com REPACK sem bloqueio e uma replicação lógica mais esperta"
description: "A versão 19 do PostgreSQL facilita a reorganização de tabelas em produção, sincroniza sequências e melhora a consistência de leitura em réplicas."
date: 2026-11-20 14:39:00 -03:00
tags: [PostgreSQL, banco de dados, desenvolvimento, infraestrutura, código aberto]
image: "https://www.postgresql.org/media/img/about/press/slonik_with_black_text_and_tagline.gif"
---

Tem atualização que chega fazendo barulho. E tem atualização que chega olhando diretamente para o plantão do DBA e dizendo: “calma, eu trouxe menos motivo para você perder o sono”. O **PostgreSQL 19**, lançado em 19 de novembro, vem justamente nessa segunda categoria.

A nova versão do banco de dados open source aposta em melhorias bem práticas para quem opera sistemas em produção: reorganizar tabelas sem interromper leituras e escritas, reduzir trabalho manual na replicação lógica e evitar aquele susto clássico de consultar uma réplica logo depois de gravar um dado e descobrir que ela ainda está vivendo no passado.

A notícia foi detalhada pelo iMasters e confirmada no anúncio e na documentação oficial do PostgreSQL. Agora vamos separar o que é novidade de verdade do que é apenas troca de nome com maquiagem nova, porque banco de dados também tem seu pequeno departamento de marketing.

<figure>
  <img src="https://www.postgresql.org/media/img/about/press/slonik_with_black_text_and_tagline.gif" alt="Banner oficial com o elefante do PostgreSQL e o slogan do projeto" loading="lazy">
  <figcaption>O PostgreSQL 19 foi lançado em 19 de novembro de 2026. Crédito: <a href="https://www.postgresql.org/about/press/presskit19/pt/" rel="noopener">PostgreSQL Global Development Group</a>.</figcaption>
</figure>

## O REPACK quer acabar com a manutenção dramática

Quem administra PostgreSQL conhece o problema: tabelas que sofrem muitas atualizações e exclusões podem acumular espaço desperdiçado, o famoso *bloat*. A tabela continua funcionando, mas vai ficando menos eficiente, como um armário que ninguém organiza desde 2014.

Antes do PostgreSQL 19, os comandos mais conhecidos para reorganizar fisicamente esse conteúdo eram o `VACUUM FULL` e o `CLUSTER`. Eles resolvem problemas importantes, mas podem exigir bloqueios que transformam uma manutenção planejada em um evento acompanhado por toda a equipe no grupo de mensagens.

A versão 19 introduz o comando **`REPACK`**, que recupera espaço e pode reorganizar os dados de acordo com um índice. A parte mais interessante é a opção **`REPACK (CONCURRENTLY)`**, que permite fazer esse trabalho sem bloquear leituras e escritas da tabela.

Traduzindo: a aplicação pode continuar trabalhando enquanto o banco arruma a casa. O comando não transforma qualquer manutenção em passe de mágica, claro. É preciso olhar chaves, índices, transações longas, espaço disponível, tempo de execução e o impacto da operação na infraestrutura. Mas a janela em que o sistema precisa ficar parado deixa de ser o centro da história.

E um detalhe importante: `VACUUM FULL` e `CLUSTER` continuam disponíveis por compatibilidade. O REPACK não chega chutando os antigos para fora da sala. Ele organiza a caixa de ferramentas e oferece uma alternativa mais adequada para alguns cenários de produção.

<figure>
  <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="Logotipo oficial do elefante do PostgreSQL" loading="lazy">
  <figcaption>O elefante oficial do PostgreSQL representa o projeto de código aberto. Crédito: <a href="https://www.postgresql.org/about/press/presskit19/pt/" rel="noopener">PostgreSQL Global Development Group</a>.</figcaption>
</figure>

## Replicação lógica com menos trabalho manual

A segunda grande frente do PostgreSQL 19 é a **replicação lógica**, usada para copiar mudanças entre bancos de dados de maneira seletiva. Ela aparece em migrações, integrações, distribuição de leitura, atualizações graduais e arquiteturas que precisam manter mais de um ambiente sincronizado.

A primeira melhoria mexe em uma dor operacional antiga. Quando o servidor está com `wal_level` definido como `replica`, a replicação lógica pode ser habilitada sob demanda quando o primeiro slot lógico é criado, sem exigir uma reinicialização do servidor. A configuração `effective_wal_level` mostra qual nível está efetivamente em uso.

Isso não significa que toda configuração de replicação ficou automática ou que o DBA pode jogar o manual pela janela. Significa que um cluster que ainda não precisava de replicação lógica pode ganhar essa capacidade com menos interrupção, desde que a configuração e os recursos do ambiente estejam adequados.

A versão também permite replicar **valores de sequências**. Com `FOR ALL SEQUENCES` no `CREATE PUBLICATION`, o PostgreSQL consegue incluir esses valores na publicação. Para quem já fez migração e precisou conferir `setval` manualmente para evitar colisões de identificadores, essa mudança tem cheiro de “menos uma tarefa capaz de virar incidente às três da manhã”.

Também entram uma cláusula `EXCEPT` para excluir tabelas de uma publicação `FOR ALL TABLES` e a possibilidade de o `CREATE SUBSCRIPTION` obter configurações de conexão a partir de um servidor externo, como um definido com `postgres_fdw`.

## A réplica finalmente pode parar de fingir que viu o dado

Agora vem uma novidade pequena no comando e enorme na experiência de quem usa réplicas para leitura: o **`WAIT FOR LSN`**.

Imagine o fluxo. A aplicação grava um pedido no servidor principal e, imediatamente depois, consulta uma réplica para mostrar a confirmação ao usuário. Se a réplica ainda não reproduziu aquele trecho do WAL, o sistema pode responder como se o pedido não existisse. O dado foi gravado, mas a leitura chegou antes da notícia.

O `WAIT FOR LSN` permite que a sessão na réplica espere até que ela tenha reproduzido o WAL até uma posição específica, chamada LSN. Assim, a aplicação consegue pedir uma leitura com consistência de “eu escrevi e agora consigo ler o que escrevi”.

É uma solução mais organizada do que colocar um `sleep(2)` no código e torcer para a rede colaborar. Banco de dados não é micro-ondas, e dois segundos não significam a mesma coisa em todas as infraestruturas.

## Observabilidade e planejador também ganharam atenção

O PostgreSQL 19 adiciona visões e recursos para tornar o comportamento do banco mais visível. Entre eles estão `pg_stat_lock`, para estatísticas de bloqueios, `pg_stat_recovery`, para acompanhar a recuperação, e `pg_stat_autovacuum_scores`, que mostra como o autovacuum prioriza tabelas.

A versão também traz a extensão **`pg_plan_advice`**, voltada ao controle mais explícito das escolhas do planejador de consultas. Isso pode ajudar equipes que precisam investigar mudanças de plano e estabilidade de desempenho, mas não deve ser tratado como botão mágico para consertar toda query lenta. Antes de culpar o planejador, ainda vale olhar estatísticas, índices, cardinalidade, distribuição dos dados e o próprio desenho da consulta. O banco não tem bola de cristal, amiga.

Outro padrão mudou: `log_lock_waits` passa a vir ligado por padrão. Isso pode aumentar a visibilidade sobre esperas por bloqueio, mas também pede revisão de coleta e alertas para que o time não descubra um novo volume de logs justamente quando a produção estiver pegando fogo.

## Então vale atualizar correndo?

O PostgreSQL 19 traz recursos muito interessantes para ambientes que precisam de manutenção com menos interrupção, replicação mais previsível e leitura consistente em réplicas. Mas “interessante” não é sinônimo de “atualize hoje à noite sem testar”.

Antes de migrar, a equipe precisa revisar extensões, ferramentas de backup, drivers, dashboards e consultas administrativas. Também deve observar mudanças de padrão, como o JIT desligado por padrão, `max_locks_per_transaction` com valor padrão de 128 e a renomeação da coluna `sync_error_count` para `sync_table_error_count` em `pg_stat_subscription_stats`.

Esse último detalhe é o tipo de coisa que não quebra a aplicação principal, mas pode deixar um painel de monitoramento olhando para uma coluna que não existe mais. E aí o banco parece saudável até o dia em que ninguém consegue enxergar o problema.

No fim das contas, o PostgreSQL 19 não promete abolir toda janela de manutenção nem transformar replicação em passeio no parque. O ganho é mais maduro: menos interrupções desnecessárias, menos passos manuais e mais ferramentas para entender o que o banco está fazendo.

Para quem opera PostgreSQL em produção, isso já é um baita avanço. Porque a melhor manutenção é aquela que termina antes de alguém perguntar no grupo: “gente, quem mexeu no banco?”. 😅

## Fontes consultadas

- [Matéria do iMasters sobre o PostgreSQL 19](https://imasters.com.br/banco-de-dados/postgresql-19-traz-repack-sem-bloqueio-e-replicacao-logica-mais-robusta-para-que)
- [Anúncio oficial do PostgreSQL 19](https://www.postgresql.org/about/news/postgresql-19-released-3449/)
- [Press kit oficial do PostgreSQL 19 em português](https://www.postgresql.org/about/press/presskit19/pt/)
- [Notas de versão do PostgreSQL 19](https://www.postgresql.org/docs/19/release-19.html)
- [Documentação do comando REPACK](https://www.postgresql.org/docs/19/sql-repack.html)
- [Documentação do comando WAIT](https://www.postgresql.org/docs/19/sql-wait.html)

Fofoca de banco entregue, contexto explicado e nenhum `VACUUM FULL` foi bloqueado durante a produção deste texto. Agora, se essa edição te poupou uma busca de meia hora na documentação, você pode mandar uma mensagem via Pix para **pix@gean.me**. É opcional, qualquer valor é bem-vindo e dá para escrever um recado junto da transferência; as melhores mensagens podem aparecer nas próximas edições, sem promessa de publicação garantida. A redação aceita elogio, crítica e até um “Tisha, faltou falar de índice”. 😂
