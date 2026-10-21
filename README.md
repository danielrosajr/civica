# Cívica — Academia do Cidadão

**v0.1.0-alpha · Primeira versão pública para testes**

Aplicativo web instalável (PWA), gratuito, sem anúncios, para aprender fundamentos de política e cidadania brasileira com **fontes oficiais acessíveis nas aulas e nas questões**.

## O que funciona nesta versão

- **10 microaulas** em linguagem simples, com **30 perguntas** e explicações.
- Links oficiais em cada aula, cada questão e na biblioteca central de fontes.
- Recompensas: **XP, níveis e 4 medalhas** (concluir novamente não duplica XP).
- **Leitura em voz alta** das aulas usando os recursos do navegador (quando suportado).
- Ajustes de **letras grandes** e **alto contraste**.
- Progresso salvo localmente, sem login, com **exportação e importação** de arquivo JSON.
- Ferramentas de cidadania com links oficiais (CGU, Câmara, TSE, Senado).
- Design mobile-first e instalação como aplicativo (PWA, via HTTPS/localhost).
- Após a primeira visita online, páginas e lições podem funcionar offline por cache (links oficiais precisam de internet).

## Como executar no computador (Ubuntu, Windows ou macOS)

**Opção mais simples**, na pasta deste projeto:

```bash
python3 -m http.server 8080
```

Abra **http://localhost:8080** no navegador. Para encerrar, pressione `Ctrl+C` no terminal.

Ou, se tiver Node.js:

```bash
npx serve .
```

> Não abra `index.html` diretamente como `file://`: a instalação e o service worker exigem um servidor HTTPS ou localhost. Não é necessário instalar bibliotecas para usar a opção Python.

## Testar no celular

1. Publique o projeto no GitHub Pages ou em outro serviço com HTTPS.
2. Abra o link no Chrome (Android) ou Safari (iPhone).
3. No Android, procure **Instalar aplicativo / Adicionar à tela inicial** no menu do navegador. No iPhone, use **Compartilhar → Adicionar à Tela de Início**.
4. Conclua uma aula, responda a miniprova, confira o XP, feche e reabra o aplicativo. O progresso deve permanecer no mesmo navegador.
5. Abra **Ajustes** e experimente letras **Muito grandes**, contraste alto, e uma aula com **Ouvir esta aula**.
6. Abra **Ver fonte oficial desta pergunta** para confirmar que o link leva ao órgão original.

**Observação:** instalação PWA e síntese de voz dependem do navegador/dispositivo. Se limpar os dados do site ou mudar de navegador, o progresso não será sincronizado: exporte antes em **Ajustes → Exportar progresso**.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `civica`).
2. Copie todos os arquivos **da raiz** desta pasta para a raiz do repositório, mantendo `assets/` e `tests/`.
3. Faça o primeiro commit e envie para a branch `main`.
4. Em **Settings → Pages**, escolha **Deploy from a branch** e selecione `main` + `/(root)`.
5. O endereço tende a seguir o padrão `https://SEU_USUARIO.github.io/civica/` — substitua pelo link mostrado pelo GitHub Pages na configuração.

### Fluxo de branches e release sugerido

- **Branch de trabalho:** `feat/civica-mvp-academia-cidadao`
- **Branch estável:** `main`
- **Versão/tag:** `v0.1.0-alpha`
- **Nome da release:** `Cívica v0.1.0-alpha — Academia do Cidadão`
- **Commit:** `feat: lança MVP do Cívica com aulas, miniprovas e fontes oficiais`
- **Próxima branch provável:** `feat/acessibilidade-feedback-usuarios`

Com Git instalado:

```bash
git init
git switch -c feat/civica-mvp-academia-cidadao
git add .
git commit -m "feat: lança MVP do Cívica com aulas, miniprovas e fontes oficiais"
git switch -c main
git tag v0.1.0-alpha
# Configure o remote do seu repositório (copie a URL do GitHub):
# git remote add origin https://github.com/SEU_USUARIO/civica.git
git push -u origin main
git push origin v0.1.0-alpha
```

Se o repositório **já existir**, não rode `git init` ou recrie `main`; abra uma branch a partir da branch atual, copie os arquivos e envie um pull request.

## Manutenção editorial e fontes

**Fonte dos dados:** `content.js` (objeto `CIVICA_CONTENT`). Cada aula declara `sourceIds` e cada pergunta declara `sourceId`. Os URLs são oficiais. Data da revisão inicial: **20/10/2026**. A aplicação não consulta APIs ao vivo: conteúdo estático versionado, sujeito a mudanças.

**Antes de publicar novas aulas:**

1. Consulte documento oficial vigente; evite notícias opinativas como prova de fato jurídico.
2. Redija em linguagem comum, sem recomendar candidato/partido ou atribuir culpa sem prova.
3. Adicione a referência em `sources`, associe-a à aula e a **cada pergunta**.
4. Atualize `updatedAt` depois da revisão e rode o teste de integridade.
5. Lembre que órgãos federais, estaduais e municipais possuem competências e canais diferentes.
6. Ao lançar uma nova versão, atualize também o identificador `CACHE` no arquivo `sw.js` para invalidar o conteúdo offline anterior.

**Mudança oficial relevante em 2026:** pedidos federais de LAI passaram a usar o Informa.BR a partir de 30/06/2026. Manifestações de ouvidoria continuam no Fala.BR. Consulte os links oficiais na aula correspondente.

## Testes

```bash
node --test tests/*.test.cjs
```

Os testes de integridade verificam estrutura, perguntas e referências oficiais. **Não substituem revisão jurídica editorial** nem testes em aparelhos reais. Teste ideal com cinco pessoas 60+: alguém consegue abrir, ouvir, concluir uma aula e encontrar fontes sem ajuda?

## Privacidade

Esta versão não tem analytics, formulários de cadastro, cookies publicitários ou servidor com dados pessoais. Progresso, tamanho de fonte e contraste ficam no `localStorage` do navegador. Exportação gera arquivo JSON que o usuário controla. Links externos podem estar sujeitos às políticas dos órgãos de destino.

## O que ainda não existe

- Buscador dinâmico de políticos, processos judiciais ou cruzamento de despesas por pessoa.
- Cadastro/sincronização entre dispositivos; ranking de usuários; debate público.
- Certificação formal ou curso jurídico; envio automatizado de solicitações.

Esses itens exigiriam decisões de escopo, fontes verificáveis, privacidade e revisão específica.

## Estrutura

```
index.html               # Entrada
styles.css               # UI acessível
app.js                   # Navegação, prova, XP, áudio, dados locais
content.js               # 10 aulas + 30 perguntas + fontes
manifest.webmanifest     # Metadados PWA
sw.js                    # Cache offline da interface
assets/                  # Ícone vetorial e PNG
tests/                  # Testes de integridade
CHANGELOG.md
LICENSE
```

## Licença e autoria

Código sob licença MIT. Personalize o arquivo de autoria e repositório conforme desejar. Textos resumidos são educacionais; a legislação, serviços e documentos originais permanecem de responsabilidade de seus órgãos emissores.
