# Testes — v0.5.0-alpha

- `node --test tests/*.test.cjs`: 23 testes aprovados.
- Verificados 37 conteúdos, 111 questões, 9 novas aulas, 36 quadros novos, fontes e presença dos recursos de cache.
- Simulação via Chromium (`set_content` com scripts locais) de: início, perfil, recomendações, Poderes, aula com HQ, Sobre e direitos; sem erros JavaScript, sem rolagem horizontal a 390 px.
- Mini perfil: alteração de faixa e interesses; recomendações e desafio interativo responderam.
- Limitação: navegação HTTP e file:// bloqueada pelo ambiente automatizado; exigem validação final no GitHub Pages. Confirmar PWA/offline e sintetizador de voz em celulares reais.
