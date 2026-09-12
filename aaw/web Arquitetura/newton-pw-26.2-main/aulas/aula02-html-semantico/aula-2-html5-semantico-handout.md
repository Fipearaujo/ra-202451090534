# PERÍCIA DE ESTRUTURA

*O que o HTML diz sobre uma página quando ninguém está olhando a tela*

**Programação Web — Aula 2 de 20 · HTML5 Semântico**

## 🎯 MISSÃO

Duas páginas podem ser idênticas na tela e completamente diferentes por dentro. Sua missão é abrir sites reais e descobrir o que a marcação revela — ou esconde — sobre a estrutura do conteúdo.

- Escolha um site com bastante conteúdo (portal de notícias, blog, site institucional).
- Use a aba Elements do DevTools (F12) e, quando indicado, o painel Accessibility.
- Preencha à mão. Onde houver retângulo em branco, desenhe.
- Não existe gabarito: o que vale é a justificativa que você escreve.

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** ____________________   **Turma:** ____________________   **Data:** ___ / ___ / ______

## RODADA 01 — Div soup × semântico

> `Arquivos pagina-a.html e pagina-b.html (ambiente virtual da disciplina)`

Os dois trechos abaixo produzem exatamente a mesma tela. Um deles não diz nada sobre o que é cada parte. Para cada div numerada, escreva o elemento semântico que a substituiria.

```text
<!-- PAGINA A -->                     <!-- PAGINA B -->
<div class="topo">      (1) ______   <header>
  <div class="menu">    (2) ______     <nav>
<div class="miolo">     (3) ______   <main>
  <div class="post">    (4) ______     <article>
  <div class="lateral"> (5) ______     <aside>
<div class="rodape">    (6) ______   <footer>
```

**Sua análise:**

1. As duas páginas renderizam igual. O que exatamente a página B tem que a A não tem?

2. Escolha UMA das div acima e explique como você decidiu qual elemento a substitui.

3. Sobrou algum caso em que o div é a escolha certa? Quando?

## RODADA 02 — O mapa da página

> `Site real → DevTools → aba Elements → colapsar os nós e olhar só o primeiro nível dentro de <body>`

Desenhe no retângulo abaixo onde ficam as grandes regiões da página que você escolheu, escrevendo o nome do elemento que a marca (ou "div" se não houver elemento semântico):

```text
+--------------------------------------------------+
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
+--------------------------------------------------+
  site investigado: ______________________________
```

**Sua análise:**

1. Quantas regiões você conseguiu identificar sem abrir os nós filhos?

2. O site usa elementos semânticos ou div com class? Anote dois nomes de class que você viu.

3. Existe mais de um `<main>` na página? Deveria existir?

## RODADA 03 — A hierarquia dos títulos

> `Ainda no mesmo site: no Console, digitar $$('h1,h2,h3,h4').map(h => h.tagName + ' ' + h.innerText.slice(0,40))`

Esse comando lista os títulos na ordem em que aparecem no código. Anote os primeiros e procure o problema:

```text
ordem   tag    texto do titulo
-----   ----   ------------------------------------
  1     ____   ____________________________________
  2     ____   ____________________________________
  3     ____   ____________________________________
  4     ____   ____________________________________
  5     ____   ____________________________________
```

**Sua análise:**

1. Quantos h1 a página tem? Se tem mais de um, qual seria o problema disso?

2. Algum nível foi pulado (um h2 seguido direto de um h4)? Anote onde.

3. Lendo só os títulos, você entende de que a página trata? Se não, o que está faltando?

## RODADA 04 — O alt que ninguém lê (mas alguém ouve)

> `No Console: $$('img').slice(0,3).map(i => i.alt || '(SEM ALT)')`

Um leitor de tela lê o alt em voz alta no lugar da imagem. Anote os três primeiros e classifique cada um:

```text
img 1  alt = _______________________________________
       ( ) descritivo  ( ) inutil  ( ) ausente  ( ) vazio proposital

img 2  alt = _______________________________________
       ( ) descritivo  ( ) inutil  ( ) ausente  ( ) vazio proposital

img 3  alt = _______________________________________
       ( ) descritivo  ( ) inutil  ( ) ausente  ( ) vazio proposital
```

**Sua análise:**

1. Algum alt era só o nome do arquivo ("banner-2024-final.jpg")? Por que isso é inútil?

2. Feche os olhos e imagine ouvir a página. O que você perderia com esses alt?

3. Reescreva o pior dos três de forma que descreva a imagem em menos de 12 palavras.

## RODADA 05 — O link fora de contexto

> `No Console: $$('a').slice(0,10).map(a => a.innerText.trim()).filter(t => t)`

Leitores de tela permitem navegar por uma lista só de links, sem o texto ao redor. Anote 3 textos de link e teste se sobrevivem sozinhos:

```text
link 1: "____________________"  faz sentido sozinho? ( )sim ( )nao
link 2: "____________________"  faz sentido sozinho? ( )sim ( )nao
link 3: "____________________"  faz sentido sozinho? ( )sim ( )nao
```

**Sua análise:**

1. Você encontrou algum "clique aqui", "saiba mais" ou "leia"? Para onde ele levava?

2. Reescreva um desses textos para que ele diga o destino sem depender da frase ao redor.

3. Algum link abria em nova aba? Como você descobriu isso olhando o código?

## 🏆 DESAFIO BÔNUS

Terminou antes do tempo? Escolha um destes:

- Rode a auditoria Accessibility do Lighthouse (DevTools → Lighthouse) no site que você investigou. Qual foi a nota e qual o primeiro problema apontado?
- Procure na página um texto que PARECE título (grande e em negrito) mas não é um h. Como você confirmou?
- Encontre um site que use `<table>` para fazer layout em vez de dados tabulares. Por que isso é um problema de acessibilidade?
