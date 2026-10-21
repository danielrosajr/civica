/* Cívica — conteúdo complementar ilustrativo v0.2.0-alpha
   Resumos e cenas são explicações didáticas; as fontes primárias continuam
   acessíveis nas aulas e no minidicionário. Ilustrações não são documentos reais. */
(() => {
  const info = window.CIVICA_CONTENT;
  info.sources.ibge_municipio = {
    agency: 'IBGE — Instituto Brasileiro de Geografia e Estatística',
    title: 'Glossário: município e organização territorial',
    url: 'https://anuario.ibge.gov.br/2024/glossario-2024.html'
  };
  info.sources.senado_cartilha_vereador = {
    agency: 'Senado Federal — Interlegis',
    title: 'Cartilha do Vereador — funções do Legislativo municipal',
    url: 'https://www12.senado.leg.br/interlegis/comunicacao/publicacoes-1/cartilha-do-vereador/'
  };
  const e = {
    'tres-poderes': {
      summary: 'O Brasil tem três Poderes principais. Um cuida da administração e dos serviços públicos (Executivo). Outro faz leis e fiscaliza (Legislativo). O terceiro julga conflitos conforme o direito (Judiciário). Cada um tem regras e limites.',
      comparison: 'Pense em três tarefas diferentes: organizar e executar, decidir regras, e resolver disputas. É só uma comparação para ajudar a lembrar; o governo não funciona exatamente como um condomínio.',
      scenes: [
        ['🏗️','O Executivo organiza e executa políticas e serviços públicos.'],
        ['📜','O Legislativo debate leis e fiscaliza o Executivo.'],
        ['⚖️','O Judiciário julga conflitos e aplica o direito.']
      ]
    },
    cidade: {
      summary: 'Município é a área administrada pela prefeitura, com leis locais. O prefeito cuida da administração municipal. Os vereadores fazem leis municipais e fiscalizam o prefeito. Não são a mesma função.',
      comparison: 'Se a rua precisa de conserto, você procura o serviço responsável da prefeitura. Um vereador pode fiscalizar o que a prefeitura está fazendo, mas não é ele quem comanda a equipe de obras.',
      scenes: [
        ['💡','Moradores identificam um problema no bairro.'],
        ['🏛️','Vereadores podem discutir regras e fiscalizar a gestão municipal.'],
        ['🙋','A Câmara vota projetos de lei dentro de suas atribuições.'],
        ['🛠️','A prefeitura e seus órgãos executam os serviços de sua competência.']
      ],
      comic: 'assets/quadrinhos-cidade-'
    },
    congresso: {
      summary: 'O Congresso Nacional tem duas partes: Câmara dos Deputados e Senado. Deputados federais e senadores participam da elaboração de leis e fiscalizam o governo federal.',
      comparison: 'Imagine uma proposta passando por etapas de análise e votação. Dependendo do tipo de proposta e do caminho previsto, ela passa por uma ou pelas duas Casas.',
      scenes: [['📃','Uma proposta de lei entra em análise.'],['🏛️','Parlamentares discutem e votam conforme as regras.'],['🔎','O Congresso também fiscaliza o Executivo.']]
    },
    voto: {
      summary: 'O voto é uma forma de escolher representantes. No Brasil, ele é obrigatório para muitos eleitores adultos, mas é facultativo em alguns casos previstos na lei, como aos 16 e 17 anos e para pessoas com mais de 70 anos.',
      comparison: 'Antes de votar, você pode conferir sua situação eleitoral no site do TSE. Ser obrigado a votar não significa ser obrigado a escolher um candidato.',
      scenes: [['🗳️','Uma pessoa verifica suas informações eleitorais.'],['📚','Conhece candidaturas e regras da eleição.'],['✅','Participa da votação, respeitando a legislação.']]
    },
    partidos: {
      summary: 'Um partido político reúne pessoas em torno de propostas e ideias para participar da vida política. Cada partido tem documentos como programa e estatuto. Você pode conferir o que cada um declara defender.',
      comparison: 'Um partido não é igual a um time de futebol: dentro dele podem existir opiniões diferentes, e o histórico de decisões importa tanto quanto o que está escrito nos documentos.',
      scenes: [['📄','Um partido registra programa e estatuto.'],['👥','Pessoas participam de sua organização.'],['🔍','O cidadão pode comparar documentos e decisões.']]
    },
    orcamento: {
      summary: 'O orçamento mostra o que o governo planeja arrecadar e gastar. Mas dinheiro previsto não quer dizer dinheiro pago. É importante verificar em qual etapa está a despesa.',
      comparison: 'É como planejar gastar R$ 200 no mercado e, depois, conferir o comprovante: o plano e o dinheiro que saiu da conta não são a mesma coisa.',
      scenes: [['📝','O governo prepara um planejamento de receitas e despesas.'],['🏦','A execução ocorre em etapas, conforme as regras.'],['🔎','O cidadão consulta quanto foi efetivamente pago.']]
    },
    gastos: {
      summary: 'A Câmara publica dados sobre despesas relacionadas ao trabalho dos deputados federais. A cota parlamentar ajuda a pagar determinados gastos do mandato. Ela não é o salário do deputado.',
      comparison: 'Um número grande, sozinho, não conta a história toda. Veja data, categoria, documentos e regras antes de tirar conclusões.',
      scenes: [['💳','Uma despesa do mandato é registrada.'],['📂','Os dados ficam disponíveis para consulta.'],['🔍','O cidadão confere datas, tipo e contexto.']]
    },
    informacao: {
      summary: 'Você pode pedir informações públicas ao governo. Não precisa explicar por que quer a informação. No governo federal, o canal para fazer esses pedidos é o Informa.BR. Algumas informações têm proteção legal.',
      comparison: 'É como perguntar: “Gostaria de consultar o contrato público X, de tal ano”. Pedidos claros ajudam a encontrar documentos.',
      scenes: [['❓','Uma pessoa quer consultar um documento público.'],['📨','Faz um pedido claro pelo canal correto.'],['📋','Guarda o protocolo para acompanhar.']]
    },
    ouvidoria: {
      summary: 'Uma ouvidoria recebe reclamações, sugestões e outros tipos de manifestação. No governo federal, o Fala.BR é um dos canais oficiais. Para problemas municipais, veja o canal da sua cidade.',
      comparison: 'Se você foi mal atendido em um serviço público, anote o que ocorreu, o local e quando aconteceu. Depois, procure a ouvidoria responsável.',
      scenes: [['📣','Uma pessoa relata um problema com clareza.'],['📨','A ouvidoria recebe e encaminha a manifestação.'],['🗂️','A pessoa acompanha o protocolo e a resposta.']]
    },
    participacao: {
      summary: 'Você pode participar da política entre uma eleição e outra. Um exemplo é o e-Cidadania do Senado, onde se apresentam e apoiam ideias de leis. Ter muitos apoios não significa virar lei automaticamente.',
      comparison: 'Imagine sugerir uma mudança e reunir apoiadores. A ideia pode entrar em análise, mas ainda existem etapas legais antes de qualquer mudança de lei.',
      scenes: [['💭','Uma pessoa tem uma ideia para uma lei.'],['📲','Envia ou apoia uma ideia no e-Cidadania.'],['🏛️','Conforme as regras, a ideia pode seguir para avaliação.']]
    }
  };
  const gloss = {
    'município': ['É uma parte do Brasil que tem governo local próprio, com prefeitura e Câmara de Vereadores. Pode incluir cidade e zona rural.', 'ibge_municipio', ['município','municípios']],
    'municipal': ['Que pertence ao município. Uma escola municipal, por exemplo, fica na área de responsabilidade do governo local.', 'ibge_municipio', ['municipal','municipais']],
    'poder legislativo': ['É a parte do governo que debate e aprova leis e fiscaliza o Executivo. No município, é a Câmara de Vereadores.', 'senado_cartilha_vereador', ['poder legislativo','legislativo']],
    'poder executivo': ['É a parte do governo que administra e coloca políticas e serviços públicos em prática, como a prefeitura na esfera municipal.', 'senado_municipios', ['poder executivo','executivo']],
    'poder judiciário': ['É a parte do Estado que julga conflitos e aplica o direito nos processos que chegam à Justiça.', 'cnj_judiciario', ['poder judiciário','judiciário']],
    'fiscalizar': ['É conferir, acompanhar e cobrar explicações sobre o que foi feito e se as regras foram cumpridas.', 'camara_fiscalizacao', ['fiscalizar','fiscaliza','fiscalizam','fiscalização']],
    'mandato': ['É o período em que uma pessoa eleita exerce o cargo para o qual foi escolhida.', 'senado_cartilha_vereador', ['mandato','mandatos']],
    'parlamentar': ['É um representante que atua no Poder Legislativo, como deputado ou senador.', 'senado_poderes', ['parlamentar','parlamentares']],
    'congresso nacional': ['É o órgão Legislativo federal formado por duas Casas: Câmara dos Deputados e Senado Federal.', 'senado_poderes', ['congresso nacional','congresso']],
    'câmara municipal': ['É o órgão onde os vereadores discutem leis locais e fiscalizam o prefeito.', 'senado_cartilha_vereador', ['câmara municipal','câmaras municipais','câmara de vereadores']],
    'vereador': ['É um representante eleito para criar e debater leis do município e fiscalizar a gestão da prefeitura.', 'senado_cartilha_vereador', ['vereador','vereadora','vereadores','vereadoras']],
    'competência': ['É a responsabilidade ou o poder que uma lei atribui a determinado órgão. Nem todo problema cabe ao mesmo governo.', 'senado_cartilha_vereador', ['competência','competências']],
    'união': ['É o nível federal de governo do Brasil. Atua em assuntos nacionais e tem competências definidas na Constituição.', 'ibge_municipio', ['União']],
    'federal': ['Relacionado ao governo nacional do Brasil, e não apenas a um estado ou município.', 'senado_poderes', ['federal','federais']],
    'orçamento': ['É o planejamento das receitas e despesas públicas. Prevê valores, mas isso não significa que já foram gastos.', 'cgu_orcamento', ['orçamento','orçamentária','orçamentário']],
    'receita pública': ['É dinheiro que o governo recebe, por exemplo, com tributos e outras fontes previstas na legislação.', 'cgu_orcamento', ['receita','receitas','arrecadar','arrecadação']],
    'despesa pública': ['É o dinheiro usado em atividades e serviços do governo, como pessoal, obras e programas, conforme suas regras.', 'cgu_despesas', ['despesa','despesas']],
    'empenho': ['É uma etapa da despesa pública: o governo reserva parte do orçamento para uma obrigação. Não significa que já pagou.', 'cgu_despesas', ['empenho','empenhada','empenhado']],
    'liquidação': ['É a etapa em que se verifica se o bem ou serviço foi entregue conforme as condições. Vem antes do pagamento.', 'cgu_despesas', ['liquidação','liquidada','liquidado']],
    'cota parlamentar': ['É um valor que pode custear tipos de despesas ligadas ao trabalho do parlamentar, seguindo regras específicas. Não é salário.', 'camara_gastos', ['cota parlamentar','CEAP']],
    'transparência pública': ['É divulgar informações sobre a atuação do governo para que a sociedade possa consultar e fiscalizar.', 'cgu_despesas', ['transparência']],
    'ouvidoria': ['É um canal para receber manifestações sobre serviços e atendimento de um órgão público.', 'cgu_ouvidoria', ['ouvidoria','ouvidorias']],
    'manifestação': ['É uma mensagem formal enviada ao órgão, como reclamação, sugestão, elogio ou denúncia.', 'cgu_ouvidoria', ['manifestação','manifestações']],
    'protocolo': ['É um número ou registro que ajuda a identificar e acompanhar seu pedido ou reclamação.', 'cgu_ouvidoria', ['protocolo','protocolos']],
    'facultativo': ['Significa que a pessoa pode escolher participar ou não, sem a obrigação prevista para outros casos.', 'tse_voto', ['facultativo','facultativa']],
    'lei de acesso à informação': ['É a lei que define como pessoas podem pedir informações públicas, respeitando exceções previstas na legislação.', 'cgu_informabr', ['lei de acesso à informação','LAI']],
    'sigiloso': ['É algo que não pode ser divulgado livremente por existir proteção legal. Nem toda informação pública é aberta sem restrições.', 'cgu_informabr', ['sigiloso','sigilosas','sigilosa','sigilo']],
    'estatuto partidário': ['É o documento com regras de organização e funcionamento de um partido político.', 'tse_partidos', ['estatuto','estatutos']],
    'ideia legislativa': ['É uma proposta que um cidadão pode apresentar por canais como o e-Cidadania, para possível análise no Senado.', 'senado_ecidadania', ['ideia legislativa','ideias legislativas']]
  };
  window.CIVICA_EXTRAS = {
    easy: e,
    glossary: Object.fromEntries(Object.entries(gloss).map(([id,[definition,sourceId,forms]])=>[id,{definition,sourceId,forms}]))
  };
})();
