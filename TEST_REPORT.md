# Relatório de testes — Cívica v0.4.0-alpha

Data: 21/10/2026

- `node --test tests/*.cjs`: **19/19 testes aprovados**.
- `node --check`: scripts `app.js`, `families.js` e `sw.js` com sintaxe válida.
- Navegador Chromium automatizado: interface executada por carregamento direto dos arquivos de HTML, CSS e JavaScript na página, pois navegação HTTP/arquivo foi bloqueada pela política do ambiente. **Sem erros de JavaScript** neste ensaio.
- Fluxos inspecionados: página inicial, quatro grupos de direitos, aula nova, modo Explica Bem Fácil, popup do glossário, 3 respostas de prova, resultados e preservação de progresso durante a navegação.
- Checagem de rolagem horizontal em largura de 390px: **nenhum overflow horizontal detectado** no fluxo das trilhas.
- Ilustrações: 4 imagens WebP abertas com sucesso no ambiente; 36 SVGs validados por parser XML, ao menos uma prévia SVG rasterizada e inspecionada. Visualização de imagens dentro do Chromium automatizado foi bloqueada junto com recursos externos; os arquivos devem ser inspecionados no navegador real do usuário.
- **Pendente de validação manual:** instalação PWA em Android/iOS, cache offline em GitHub Pages, disponibilidade de vozes de sistema, navegação com leitor de tela, comportamento do Google Forms com URL real, migração de dados num celular que já tenha v0.3.
