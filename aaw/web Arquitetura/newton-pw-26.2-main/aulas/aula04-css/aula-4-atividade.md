# PERÍCIA DE ESTILO

*Como o navegador decide qual regra CSS ganha — e ele mostra isso de graça*

**Programação Web — Aula 4 de 20 · CSS: Seletores, Cascata e Box Model**

## 🎯 MISSÃO

O navegador não esconde nada: ele mostra quais regras aplicou, quais descartou e de onde veio cada valor final. Sua missão é aprender a ler esse relatório e, a partir dele, deduzir as regras do jogo.

- Escolha um site com visual elaborado (portal de notícias, loja, site institucional).
- Trabalhe na aba Elements do DevTools (F12): painéis Styles e Computed.
- Na Rodada 3, use o arquivo especificidade-quiz.html disponibilizado pelo professor.
- Notação de especificidade a usar: (id, classe, elemento). Ex.: #nav .item a = (1, 1, 1).

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** ____________________   **Turma:** ____________________   **Data:** ___ / ___ / ______

## RODADA 01 — As regras que valem e as que morreram

> `Site real → botão direito num título → Inspecionar → painel Styles (lado direito)`

O painel Styles lista TODAS as regras que miram aquele elemento, da mais forte para a mais fraca. As que perderam aparecem riscadas. Catalogue o que você vê:

```text
elemento inspecionado: <__________>  class="________________"

regras que VALEM (nao riscadas):
  1. seletor: _______________________  propriedade: ______________
  2. seletor: _______________________  propriedade: ______________

regras RISCADAS (perderam):
  1. seletor: _______________________  propriedade: ______________
```

**Sua análise:**

1. Quantas regras diferentes tentavam estilizar esse único elemento?

2. Escolha uma regra riscada: por que você acha que ela perdeu?

3. Existe alguma declaração com !important? Onde?

## RODADA 02 — De onde veio esse valor?

> `Mesmo elemento → painel Computed → clicar na setinha ao lado de uma propriedade`

O painel Computed mostra o valor FINAL de cada propriedade — inclusive de coisas que ninguém declarou. Investigue quatro delas:

```text
propriedade      valor final        veio de qual seletor?
--------------   ----------------   ----------------------
color            ________________   ______________________
font-size        ________________   ______________________
display          ________________   ______________________
margin-top       ________________   ______________________
```

**Sua análise:**

1. Alguma dessas propriedades tinha valor sem ninguém ter declarado nada? De onde ele veio?

2. O valor de font-size aparece em px mesmo se o CSS usou outra unidade. Por que?

3. Qual propriedade dessa lista foi HERDADA do elemento pai?

## RODADA 03 — Quem ganha — agora com a conta feita

> `Abrir especificidade-quiz.html e inspecionar o parágrafo de cada caixa`

Volte ao quiz do início da aula. Agora não é para adivinhar: conte os id, as classes e os elementos de cada seletor e escreva a soma antes de conferir no DevTools.

```text
cx  seletor vencedor            especificidade   cor final
--  --------------------------  --------------   ---------
 1  __________________________  (_ , _ , _)      _________
 2  __________________________  (_ , _ , _)      _________
 3  __________________________  (_ , _ , _)      _________
 4  __________________________  (_ , _ , _)      _________
 5  __________________________  (_ , _ , _)      _________
 6  __________________________  (_ , _ , _)      _________
 7  __________________________  (_ , _ , _)      _________
 8  __________________________  (_ , _ , _)      _________
```

**Sua análise:**

1. Na caixa 2, por que a regra com class perdeu para a regra com id + elemento?

2. Nas caixas 3, o que decidiu o resultado, se a especificidade era igual nas duas regras?

3. Na caixa 7 nenhuma regra mirava o parágrafo. Então de onde veio a cor dele?

## RODADA 04 — A caixa é maior do que você pediu

> `Site real → inspecionar um card ou botão → rolar o painel Styles até o fim → diagrama colorido do box model`

Todo elemento é uma caixa com quatro camadas. O diagrama do DevTools mostra as quatro. Anote as medidas e faça a conta à mão:

```text
                +---------------------------+
     margin     |  ____ px                  |
                |  +---------------------+  |
     border     |  |  ____ px            |  |
                |  |  +---------------+  |  |
     padding    |  |  |  ____ px      |  |  |
                |  |  |  +---------+  |  |  |
     content    |  |  |  | __ x __ |  |  |  |
                |  |  |  +---------+  |  |  |

largura total ocupada = content + padding*2 + border*2 + margin*2
                      = ______ px
```

**Sua análise:**

1. Qual camada empurra os elementos vizinhos para longe, sem pintar nada?

2. Qual camada aumenta a área clicável do elemento junto com o fundo?

3. A largura que aparece em width no CSS é a mesma que o elemento ocupa na tela?

## RODADA 05 — O experimento do box-sizing

> `Ainda no elemento inspecionado → painel Styles → localizar (ou adicionar) box-sizing e alternar o valor`

Troque box-sizing entre content-box e border-box e observe o elemento na tela. Registre a diferença:

```text
width declarado no CSS: ______ px

box-sizing: content-box  ->  largura na tela: ______ px
box-sizing: border-box   ->  largura na tela: ______ px

diferenca entre as duas: ______ px
essa diferenca corresponde a que camadas? ____________________
```

**Sua análise:**

1. Com qual dos dois valores a largura na tela é igual à largura que você declarou?

2. Por que quase todo projeto começa o CSS com a regra * { box-sizing: border-box }?

3. Se você somar padding a um elemento com border-box, o que muda de tamanho: a caixa ou o conteúdo dentro dela?

## 🏆 DESAFIO BÔNUS

Terminou antes do tempo? Escolha um destes:

- No painel Styles, clique no botão + e crie uma regra nova para o elemento. Ela nasce com qual seletor? Por que o DevTools escolheu esse?
- Procure na página um elemento que tenha estilo inline (atributo style). Ele pode ser sobrescrito por uma regra da folha? Teste.
- Encontre dois elementos irmãos com margin vertical e verifique no DevTools se o espaço entre eles é a soma das duas margens ou apenas a maior. Pesquise o nome desse comportamento.
