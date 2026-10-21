# Cívica — v0.3.0-alpha · Conheça Seus Direitos

Aplicativo **gratuito, educativo, apartidário, sem anúncios e sem cadastro**, pensado para celular e para pessoas iniciantes — incluindo quem prefere letras grandes e explicações curtas.

**Esta é uma versão alpha:** as informações são educativas, não substituem atendimento jurídico, médico ou serviço de um órgão público. As leis e serviços podem mudar. Abra as **fontes oficiais** de cada aula antes de tomar decisões.

## O que inclui

- **18 aulas e 54 perguntas**, em duas temporadas: dez aulas de política básica da v0.2 e oito aulas de direitos do cidadão.
- Trilha **Conheça Seus Direitos**: arrependimento de compra fora da loja; diferenças de preço; limites de cobrança de dívida; orçamento de serviços; preferência para pessoas com mais de 80 anos; viagens interestaduais; acompanhante para pessoa idosa internada; direitos na saúde.
- **Explica bem fácil** em todas as aulas, com exemplos cotidianos, linguagem acessível e **quadrinhos**. A aula de transporte interestadual traz uma HQ ilustrada de quatro quadros; as outras usam vinhetas ilustrativas com símbolos e legendas.
- **Minidicionário**: toque nas palavras destacadas para ler o significado e consultar a fonte original.
- **Narração com Web Speech API**, escolha de voz (quando instalada no aparelho), velocidade, play/pausar/parar. A voz depende do navegador/dispositivo.
- Temas claro/escuro/automático, três tamanhos de fonte, alto contraste, layout responsivo.
- Miniprovas, XP, níveis e conquistas, com progresso local e exportação/importação.
- Links oficiais por aula, por questão e na biblioteca de fontes.
- **Constituição editorial** pública com regras de neutralidade, método de correção, privacidade e compromisso de acessibilidade.
- **Ouvidoria do Cívica** com pedido de revisão de cada aula, texto copiável/baixável e integração **opcional** com Google Forms (consulte abaixo).
- PWA para GitHub Pages, com arquivos essenciais em cache após instalação/primeira visita bem-sucedida.

## Rodar localmente no Ubuntu

Sem npm, sem Python packages e sem backend:

```bash
cd civica-v0.3.0-alpha
python3 -m http.server 8080
```

Abra `http://localhost:8080` no navegador. O arquivo `index.html` deve estar na raiz servida.

## Publicar no GitHub Pages

1. Crie ou abra seu repositório GitHub (ex.: `civica`).
2. Faça backup da versão publicada e **não delete** arquivos de configuração próprios antes de conferir as alterações.
3. Extraia o ZIP e **copie todos os arquivos que estão dentro da pasta `civica-v0.3.0-alpha` para a RAIZ do repositório**, substituindo os arquivos anteriores. **Não copie a pasta como subpasta.**
4. Confirme os novos arquivos `rights.js`, `config.js` e `assets/quadrinhos-viagem-1.webp` até `-4.webp`.
5. Faça commit numa branch, crie PR para `main` e faça merge.
6. Em **Settings → Pages → Build and deployment**, use **Deploy from a branch**, `main`, `/(root)`.
7. Acesse `https://SEU-USUARIO.github.io/civica/` (endereço ilustrativo).

Se a versão antiga aparecer depois da publicação, atualize a página uma vez conectado à internet. Se necessário, feche/reabra o app instalado; o nome do cache muda a cada versão (`civica-v0.3.0-alpha-1`). O progresso permanece no `localStorage` pela chave **`civica-progress-v1`**. Mesmo assim, recomendamos **Ajustes → Exportar progresso** antes de atualizar.

## Ouvidoria: Google Forms sem seu WhatsApp

A nova página **Ouvidoria do Cívica** funciona mesmo sem backend para **preparar/copy/baixar** mensagens de opinião e pedido de revisão. **Sem um destino configurado, nada é enviado ao responsável.** O app mostra essa limitação claramente — não simula envios.

Para ativar o recebimento:

1. Acesse [Google Formulários](https://forms.google.com) e crie um formulário privado para administrar as respostas, chamado **Ouvidoria do Cívica**.
2. Sugestão de perguntas: *Tipo de contato* (correção/sugestão/opinião/problema de acesso), *Aula relacionada* (opcional), *Mensagem* (obrigatória), *Fonte/URL* (opcional). Um campo livre pode aceitar o texto montado pelo app.
3. Em **Configurações → Respostas**, **não** ative coleta de e-mail; **não** ative *Limitar a 1 resposta* (isso pode exigir login). Não solicite CPF, telefone, endereço ou posições partidárias. Não ative exibição pública de resumos das respostas.
4. **Publique** o formulário, permita resposta para **Qualquer pessoa com o link** e copie o **link do respondente**, não o endereço de edição.
5. Abra `config.js` e altere **somente** o valor entre aspas:

```js
window.CIVICA_CONFIG = {feedbackFormUrl: 'https://forms.gle/SEU-LINK-REAL'};
```

6. Publique novamente o `config.js` na raiz; o botão **Abrir Google Forms** aparecerá na ouvidoria. A pessoa copia o comentário e o cola no formulário. O app **não** envia automaticamente o conteúdo para o Google.
7. Teste o formulário numa janela anônima, sem conta Google conectada, e verifique se uma resposta de teste foi recebida.

> Atenção: o **Google Forms é um serviço externo** e processa os dados recebidos. Se ativá-lo, publique uma política de privacidade simples para as mensagens, indicando finalidade, responsável, retenção, como pedir exclusão e eventual coleta de dados por terceiros. As configurações variam com as contas e com o próprio Google; revise o formulário antes de divulgá-lo.

Não é preciso criar um e-mail público para começar. Um endereço exclusivo para administrar o Google Forms pode ser útil mais adiante, mas não deve ser publicado como WhatsApp/telefone do criador.

## Constituição editorial

Dentro do app, **Princípios** apresenta oito artigos internos (não são lei): independência partidária, critérios iguais para todos, separação de fatos e opiniões, fontes, limites das simplificações, canal de revisão, acessibilidade, privacidade.

O método e as orientações de revisão também estão em `EDITORIAL.md`.

## Testes

```bash
node --test tests/*.test.cjs
```

O Node 18+ é necessário somente para testes, **não** para hospedar o app. Também recomendamos conferir em celulares reais: navegação, fontes, dark mode, voz, glossário, relatório exportado/importado, ouvidoria, modo avião após a primeira visita e PWA.

## Arquivos

- `index.html`, `styles.css`, `app.js` — interface e lógica
- `content.js` — 10 aulas originais + catálogo base de fontes
- `extras.js` — modo fácil e glossário da base original
- `rights.js` — 8 aulas de direitos, fontes, glossário e roteiros de quadrinhos
- `config.js` — endereço público opcional do Google Forms
- `assets/` — ícones e HQs (sem fonte tipográfica proprietária)
- `manifest.webmanifest`, `sw.js` — PWA
- `tests/` — verificações automatizadas do conteúdo e dos arquivos
- `EDITORIAL.md`, `CHANGELOG.md`, `RELEASE_NOTES.md` — políticas e histórico

## Privacidade e licenças

- O Cívica não exige cadastro nem recebe automaticamente respostas de miniprovas e dados de progresso. Os registros ficam no navegador do usuário.
- O link do Google Forms, caso configurado, envia a pessoa ao serviço do Google, sujeito às respectivas regras.
- Código sob licença MIT (`LICENSE`). Fontes legais e páginas oficiais pertencem aos órgãos respectivos. Imagens ilustrativas criadas para esta versão devem ser mantidas com os créditos pertinentes a seu uso e licença conforme os termos aplicáveis.

## Nomes sugeridos

- Branch: `feat/civica-v0.3-conheca-seus-direitos`
- Tag: `v0.3.0-alpha`
- Release: **Cívica v0.3.0-alpha — Conheça Seus Direitos**
- Commit: `feat: adiciona trilha de direitos, principios editoriais e ouvidoria configuravel`
