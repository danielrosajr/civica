# Cívica — Academia do Cidadão

**Versão:** `v0.2.0-alpha` — **Explica Bem Fácil**  
**Licença:** MIT • **Custo para usar:** gratuito • **Hospedagem:** GitHub Pages, sem backend.

PWA educativo sobre cidadania e instituições brasileiras. Feito principalmente para pessoas iniciantes, inclusive idosos, com fontes oficiais em todas as aulas, provas e palavras explicadas no minidicionário.

## O que já existe nesta versão

- 10 microaulas, 30 perguntas, XP, níveis e medalhas.
- **Modo “Explica bem fácil”** por aula: resumos e exemplos cotidianos, sem trocar fontes por opinião.
- **Minidicionário contextual**: toque nas palavras sublinhadas com pontinhos para ver significado breve e link para a fonte oficial. Termos sem dúvida óbvia não são marcados automaticamente.
- **Quadrinhos em todas as aulas**: mini-histórias com cenas e legendas. A aula `Prefeito ou vereador?` traz uma HQ com quatro imagens ilustradas. As outras nove possuem cenas com símbolos/ilustrações simples (a arte completa pode crescer nas próximas versões).
- **Leitura em voz alta** com botão Ouvir, Pausar/Continuar, Parar, escolha de voz disponível no aparelho e ajuste de velocidade. O bloco em leitura recebe destaque. **A qualidade da voz depende do celular/navegador**, e algumas plataformas têm limitações para pausar ou listar vozes.
- **Temas Claro / Escuro / Automático**, botão de alternância no cabeçalho, contraste e tamanhos de letra.
- Progresso local preservado da v0.1 (mesma chave de armazenamento), exportação/importação.
- Biblioteca de fontes oficiais, fontes por aula, por questão e no minidicionário.
- Nenhum anúncio, login, telemetria, ferramenta de terceiros, dependência externa de código ou chave de API.

### É apartidário?

Este MVP explica o funcionamento institucional de forma descritiva, sem ranking, recomendação de candidato ou pontuação de preferências políticas. As comparações e quadrinhos são recursos didáticos, **não substituem documentos públicos**. A data da revisão editorial aparece na biblioteca de fontes; detalhes legais e serviços devem ser conferidos nas fontes antes de decisões reais.

## Testar no Ubuntu ou Windows

1. Extraia o ZIP.
2. Abra um terminal **na pasta `civica-v0.2.0`**, onde está `index.html`.
3. Execute `python3 -m http.server 8080` (Windows: `py -m http.server 8080`).
4. No navegador, abra `http://localhost:8080`.

Evite abrir `index.html` diretamente em `file://` se quiser testar instalação e offline: o service worker depende de contexto seguro (`localhost` ou HTTPS).

### Roteiro rápido de testes

1. Abra a aula **Prefeito ou vereador?** (`#aula/cidade`).
2. Toque numa palavra marcada, como **município** ou **vereador**. Confira o significado, a fonte e feche a caixa (também deve fechar com **Esc**).
3. Toque em **Explica bem fácil**; compare com **Explicação normal**.
4. Role até **Entenda em quadrinhos** e veja as quatro imagens; as legendas explicam funções distintas da Câmara e da prefeitura.
5. Na caixa **Ouvir a explicação**, selecione uma voz disponível, ouça, pause, retome, pare e altere a velocidade.
6. No cabeçalho, alterne o tema. Em **Ajustes**, teste **Automático / Claro / Escuro**, letras **Muito grande** e **Alto contraste**.
7. Faça a prova da aula e verifique a pontuação em **Meu nível**; atualize a página e confirme que o progresso permanece.
8. Faça uma exportação dos dados e, se quiser, teste a importação noutro navegador.
9. Teste no celular e peça a um iniciante, especialmente uma pessoa idosa, para abrir uma aula sem orientação.

**Nota:** navegadores móveis suspendem ou interrompem síntese de voz ao bloquear a tela ou trocar de aplicativo. A seleção de vozes só mostra o que o sistema operacional oferece. Não há serviço de voz premium nesta versão, nem gravação de áudio.

## Publicar no GitHub Pages

### Primeira instalação

Crie o repositório público `civica` e envie **os arquivos de dentro de `civica-v0.2.0`** para a raiz do repositório (não envie só o `index.html`).

No GitHub, em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch → `main` → `/(root)` → Save**. O endereço típico será:

`https://SEU-USUARIO.github.io/civica/`

Os caminhos dos scripts, imagens e PWA são relativos (`./`), portanto funcionam no subdiretório do GitHub Pages.

### Atualizar seu repositório da v0.1 para v0.2

**Substituir arquivos existentes:** `app.js`, `content.js`, `styles.css`, `index.html`, `sw.js`, `README.md`, `CHANGELOG.md`, `RELEASE_NOTES.md`.

**Adicionar:** `extras.js`, `tests/extras.test.cjs`, `assets/quadrinhos-cidade-1.webp` até `assets/quadrinhos-cidade-4.webp`.

**Manter:** `manifest.webmanifest`, ícones em `assets/`, `LICENSE`, `.nojekyll`, `.gitignore`, `tests/content.test.cjs`.

**Não remover dados:** o código mantém `civica-progress-v1` para continuar lendo progressos antigos. Mesmo assim, recomendamos **Ajustes → Exportar progresso** antes de atualizar, especialmente se você já tiver usuários reais.

```bash
# No repositório já existente
git switch main
git pull
git switch -c feat/civica-v0.2-explica-bem-facil
# Copie os arquivos da nova versão para a raiz, mesclando pastas assets/ e tests/
git add .
git commit -m "feat: adiciona modo facil, glossario, dark mode, voz e quadrinhos"
git push -u origin feat/civica-v0.2-explica-bem-facil
```

Abra um **Pull Request** da branch para `main`, revise e mescle. Após o Pages publicar, crie tag/release `v0.2.0-alpha` com o título **Cívica v0.2.0-alpha — Explica Bem Fácil** e descrição em `RELEASE_NOTES.md`.

> **Atualização offline:** quem já instalou a v0.1 talvez precise atualizar a página **duas vezes** ou fechar/reabrir a PWA para o novo service worker tomar controle e renovar o cache. O progresso não deve ser apagado. Se persistir conteúdo antigo, confira as atualizações do navegador antes de limpar dados.

## Testes de integridade do conteúdo

Com Node.js:

```bash
node --test tests/*.test.cjs
```

O projeto não exige Node.js para **executar**: ele é apenas opcional para testes automatizados.

## Organização do código

- `index.html`: HTML-base, referência do PWA e caixa acessível do minidicionário.
- `styles.css`: aparência, responsividade, temas e contraste.
- `app.js`: navegação, provas, XP, voz, modais, estado e exportação.
- `content.js`: aulas, questões, respostas explicadas e referências da v0.1.
- `extras.js`: explicações fáceis, minidicionário com fontes, roteiro dos quadrinhos e duas fontes adicionais.
- `assets/quadrinhos-cidade-*.webp`: imagens didáticas geradas para esta versão.
- `sw.js`: cache de uso offline, versionado.
- `tests/`: verificações de integridade estática de dados e fontes.

## Privacidade e limites

- Não coleta dados pessoais e não envia progresso para servidor.
- O progresso é local ao navegador; perde-se se o usuário apagar os dados do site sem exportar.
- Fontes oficiais externas requerem internet.
- Não há verificação de diplomas ou certificação oficial para os níveis/XP.
- O app não consulta processos judiciais ou pessoas automaticamente.
- Não apresenta aconselhamento jurídico individual nem substitui serviços públicos.

## Próximos passos recomendados

- Testes reais com idosos, incluindo acessibilidade de leitores de tela.
- Revisão editorial periódica por fontes institucionais e profissionais.
- Expandir HQs com arte dedicada para outras aulas.
- Refinar o sistema de voz em navegadores Android e iOS.
- Buscar uma forma de reportar correções, mantendo a transparência editorial.
