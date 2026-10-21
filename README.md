# Cívica v0.5.0-alpha — Quem Pode o Quê?

Aplicativo educativo, 100% gratuito, apartidário e sem anúncios, com progressão em XP, 37 aulas, 111 perguntas, HQs e fontes oficiais.

## Testar no Ubuntu

Na pasta do projeto, execute `python3 -m http.server 8080` e abra `http://localhost:8080`.

## Atualizar GitHub Pages

Crie a branch `feat/civica-v0.5-quem-pode-o-que`, substitua os arquivos do repositório com os deste pacote (preserve sua URL de ouvidoria em `config.js`, se configurada), faça o commit e integre a `main`. Configure GitHub Pages: Settings → Pages → Deploy from a branch → main / root.

Tag: `v0.5.0-alpha`. Release: `Cívica v0.5.0-alpha — Quem Pode o Quê?`.
Commit: `feat: adiciona trilha dos poderes e mini perfil opcional`.

## Novidades

- 9 aulas e 27 novas questões sobre competências e limites do poder, com fonte em cada pergunta.
- Duas HQs desenhadas coloridas e quadros vetoriais nas outras aulas.
- Mini perfil opcional (faixa da vida e interesses): organiza sugestões sem ocultar nenhum conteúdo.
- Versão exibida em Sobre e no rodapé.
- Pergunta interativa na página `#quem-pode`.
- Preserva dados de progresso salvos sob `civica-progress-v1`.

## Testes

Execute `node --test tests/*.test.cjs` para verificar conteúdo e arquivos, além de testar manualmente no celular, incluindo voz, armazenamento e instalação PWA.

## Ouvidoria

O campo de feedback permite copiar/baixar mensagens. Para ativar recebimento, configure a URL do Google Forms em `config.js`. Não coloque senha ou dados pessoais em HTML/JS.

## Compromissos

Conteúdo informativo, não é aconselhamento jurídico. Consulte sempre a fonte oficial. O app não recomenda candidatos ou partidos, não coleta dados no servidor e não solicita preferências políticas.
