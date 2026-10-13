# Água Segura

Sistema web para famílias e escolas acompanharem a água guardada em caixas e cisternas: mostra quantos dias a água dura e avisa a hora de pedir o carro-pipa, com voz, figuras e o mascote Pingo.

Projeto da **Maratona DevImpacto 2026**, eixo Meio Ambiente.

## O que o sistema faz

- Perguntas simples no começo (casa ou escola, de onde vem a água, quantas pessoas, quanta água tem agora), com opção de informar mais ou menos ou a quantidade exata.
- **Painel da família:** previsão de dias de água, registro rápido, limpeza do reservatório, metas de economia, dicas e explicação do Pingo.
- **Painel da escola:** reservatórios, consumo, limpeza, alerta de carro-pipa com 3 a 5 dias de antecedência e histórico.
- Acessibilidade: voz do Pingo (leitura em voz alta), letras maiores, modo escuro, botões grandes e figuras.
- Funciona no celular e no computador. Os dados ficam salvos no aparelho (`localStorage`), sem conta e sem servidor.
- **Instalável como app (opcional):** passo a passo para iPhone, Android e computador dentro do próprio site.

## Como usar

Abra o endereço do site (GitHub Pages). Para rodar no computador, basta servir a pasta:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Abrir o `index.html` direto do arquivo também funciona, mas a instalação como app e o uso sem internet só funcionam por `https` ou `localhost`.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O sistema inteiro: início, perguntas e os painéis da família e da escola |
| `manifest.webmanifest` | Dados do app instalável (nome, cores e ícones) |
| `sw.js` | Guarda os arquivos no aparelho para abrir rápido e sem internet |
| `img/` | Mascote Pingo, banner e ícones do app |

Tecnologias: HTML, CSS e JavaScript puro, Web Speech API (voz), SVG, `localStorage` e service worker. Sem frameworks e sem serviços pagos.

## Uso de inteligência artificial

Este projeto foi feito com apoio de ferramentas de inteligência artificial (Claude, da Anthropic, e Grok, da xAI) na programação, no design da interface e na escrita de textos. Os resultados foram revisados e testados pela equipe. A ideia, o tema, o público e as decisões do projeto são dos estudantes.

## Equipe

- Jesiel (planejamento e ideias)
- Samuel (desenvolvimento do site)
- Débora (pesquisa e conteúdo)
- Professor orientador: Éverton Silva de Souza
- Escola: EREM Abílio de Souza Barbosa

O Água Segura ajuda na rotina e não substitui a orientação da Vigilância em Saúde sobre a qualidade da água.
