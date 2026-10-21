# Cívica — v0.4.0-alpha

Um PWA de cidadania gratuito, apartidário, mobile-first e pensado para iniciantes e idosos. Aulas curtas, quadrinhos, minidicionário, fontes oficiais, provas, XP e níveis.

## Como testar

1. Extraia o ZIP e entre na pasta `civica-v0.4.0-alpha`.
2. Execute `python3 -m http.server 8080`.
3. Abra `http://localhost:8080`.
4. Em **Direitos**, escolha *Direitos das mulheres*, *Direitos das crianças* ou *Direitos da pessoa idosa*.
5. Abra a aula **Posso levar alguém comigo ao médico?**, veja os quatro quadros originais, alterne para **Explica bem fácil**, toque em *acompanhante* ou *sedação*, confira as fontes e faça a prova.
6. Confira XP/conquistas, teste tema escuro, leitor de voz e ampliação de letras. Recarregue para verificar se o progresso persiste.
7. Visite **Princípios** e **Ouvidoria**. Enquanto `feedbackFormUrl` estiver vazio, copiar/baixar o texto da sugestão não equivale a enviá-lo.
8. Faça o teste de atualização com um aparelho que já usava a v0.3 (recomendamos exportar antes por precaução).

## GitHub Pages

Mantenha todos os arquivos **da pasta interna** na raiz do mesmo repositório. Confirme `Settings > Pages > Build and deployment > Deploy from a branch > main > /(root)`. Use `https://SEU-USUARIO.github.io/civica/`. Os caminhos são relativos para permitir hospedagem em subpasta.

Se estiver atualizando da v0.3, **substitua** `index.html`, `app.js`, `styles.css`, `sw.js`, `README.md`, `CHANGELOG.md` e `RELEASE_NOTES.md`, **adicione** `families.js` e as quatro imagens `assets/quadrinhos-acompanhante-{1..4}.webp` e as 36 cenas vetoriais SVG em `assets/`. **Preserve** `content.js`, `extras.js`, `rights.js`, `config.js` e os demais `assets`. Não exclua outros arquivos existentes na v0.3. Ao enviar o ZIP completo, todos os arquivos existentes também podem ser substituídos por suas cópias equivalentes. Se já personalizou `config.js` com seu formulário, **não sobrescreva** sua URL por uma versão vazia.

## Ouvidoria sem WhatsApp

Crie um Google Forms (tipo de comentário, aula, sugestão, fonte). Opcionalmente permita respostas sem login e evite coletar dados sensíveis. No arquivo `config.js`, configure `feedbackFormUrl` com o link do formulário do respondente `https://docs.google.com/forms/...` ou `https://forms.gle/...`. O Cívica abre o formulário externo; ele não envia solicitações sozinho, não guarda denúncias e não promete resposta individual.

## Arquitetura

PWA estático: `content.js` aulas originais; `extras.js` modo fácil/glossário; `rights.js` direitos anteriores; **`families.js` novas 10 aulas/glossário/fontes**; `config.js` link opcional do formulário; `app.js` interface; `styles.css` aparência; `sw.js` cache de instalação. A ordem de scripts em `index.html` importa.

Progresso salvo em `localStorage` mantém a mesma chave entre as versões; quando trocar navegador ou limpar os dados, use **Exportar/Importar progresso**.

## Testes e fontes

Conteúdo revisado em 21/10/2026 e elaborado a partir da legislação oficial brasileira e canais federais. Leis e procedimentos podem mudar; confirme nas fontes originais. Os materiais são educação geral, não orientação jurídica, médica ou emergencial individual. Em situação de risco imediato, busque os serviços oficiais de emergência.

Para testar integridade localmente, execute `node --test tests/*.test.cjs` (incluído no pacote).

## Git

- Branch: `feat/civica-v0.4-direitos-para-todos`
- Commit: `feat: amplia trilhas de direitos com HQs e fontes oficiais`
- Tag: `v0.4.0-alpha`
- Release: `Cívica v0.4.0-alpha — Direitos para Todos`
