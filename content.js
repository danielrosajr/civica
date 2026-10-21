/*
 * Cívica — Conteúdo editorial v0.2.0
 * Fontes oficiais conferidas em 20/10/2026.
 * Não apresenta preferência partidária. Revisar links e legislação regularmente.
 * As fontes são acessíveis em cada aula, questão e na biblioteca.
 */
window.CIVICA_CONTENT = {
  updatedAt: '21/10/2026',
  sources: {
    cnj_judiciario: { agency:'Conselho Nacional de Justiça', title:'Panorama e estrutura do Poder Judiciário', url:'https://www.cnj.jus.br/poder-judiciario/panorama-e-estrutura-do-poder-judiciario-brasileiro/' },
    senado_poderes: { agency:'Senado Federal', title:'Atribuições do Poder Legislativo', url:'https://www12.senado.leg.br/institucional/documentos/sobre-o-senado/atividade/atribuicoes' },
    senado_municipios: { agency:'Agência Senado', title:'O que fazem prefeito e vereadores?', url:'https://www12.senado.leg.br/noticias/materias/2024/10/02/eleicoes-2024-voce-conhece-as-funcoes-do-prefeito-e-dos-vereadores' },
    camara_fiscalizacao: { agency:'Câmara dos Deputados', title:'Fiscalização do Poder Executivo', url:'https://www2.camara.leg.br/comunicacao/assessoria-de-imprensa/guia-para-jornalistas/fiscalizacao-do-executivo' },
    tse_voto: { agency:'Tribunal Superior Eleitoral', title:'Carta de serviços ao eleitor', url:'https://www.tse.jus.br/servicos-eleitorais/servicos/carta-de-servicos-ao-eleitor' },
    tse_partidos: { agency:'Tribunal Superior Eleitoral', title:'Partidos políticos registrados no TSE', url:'https://www.tse.jus.br/partidos/partidos-registrados-no-tse' },
    cgu_orcamento: { agency:'CGU — Portal da Transparência', title:'Orçamento público federal', url:'https://portaldatransparencia.gov.br/orcamento' },
    cgu_despesas: { agency:'CGU — Portal da Transparência', title:'Despesas públicas federais', url:'https://portaldatransparencia.gov.br/despesas/' },
    camara_gastos: { agency:'Câmara dos Deputados', title:'Gastos parlamentares: o que é a cota?', url:'https://www.camara.leg.br/transparencia/gastos-parlamentares/' },
    cgu_informabr: { agency:'Governo Federal — CGU', title:'Pedir informações na plataforma Informa.BR', url:'https://www.gov.br/pt-br/servicos/acessar-informacoes-de-orgaos-publicos' },
    cgu_ouvidoria: { agency:'Governo Federal — CGU', title:'Registrar manifestação na ouvidoria', url:'https://www.gov.br/pt-br/servicos/registrar-manifestacao-no-sistema-de-ouvidorias-do-poder-executivo-federal' },
    senado_ecidadania: { agency:'Senado Federal', title:'e-Cidadania: ideias legislativas', url:'https://www12.senado.leg.br/ecidadania/principalideia' },
    camara_dados: { agency:'Câmara dos Deputados', title:'Dados Abertos da Câmara', url:'https://dadosabertos.camara.leg.br/' },
    senado_vereadores: { agency:'Câmara dos Deputados', title:'Orientações sobre a função dos vereadores', url:'https://www2.camara.leg.br/a-camara/estruturaadm/mesa/segundavice/interacao-legislativa/publicacao-vereadoras-e-vereadores-breves-orientacoes-para-as-eleicoes-2024-e-para-o-mandato' },
    cgu_fiscalizacao: { agency:'Câmara dos Deputados', title:'Como fiscalizar prefeito e vereador?', url:'https://www.camara.leg.br/tv/eleicoes/708837-como-fiscalizar-o-prefeito-e-o-vereador/' }
  },
  lessons: [
    {
      id:'tres-poderes', number:1, icon:'🏛️', category:'Comece aqui', minutes:3,
      title:'Quem faz o quê no Brasil?', subtitle:'Entenda os três Poderes sem palavras difíceis.',
      intro:'Imagine o Brasil como um grande condomínio. Existem pessoas para administrar, outras para criar regras e fiscalizar, e órgãos que resolvem conflitos de acordo com as leis.',
      facts:[
        {title:'Executivo', text:'Administra os serviços públicos e coloca políticas em prática. No governo federal, é chefiado pelo presidente.'},
        {title:'Legislativo', text:'Discute e aprova leis e fiscaliza o Executivo. No plano federal, reúne Câmara dos Deputados e Senado.'},
        {title:'Judiciário', text:'Julga conflitos e aplica o direito nos casos que chegam à Justiça. Cada Poder tem suas atribuições e limites.'}
      ],
      example:'Quando se discute uma nova lei federal, o Legislativo tem papel central. Quando uma política é executada, entra em cena a administração pública. Um conflito sobre direitos pode chegar ao Judiciário.',
      mission:'Conte para alguém, com suas palavras, a diferença entre administrar, legislar e julgar.',
      sourceIds:['senado_poderes','cnj_judiciario'],
      questions:[
        {prompt:'Qual Poder tem como uma de suas funções principais discutir e aprovar leis?', options:['Judiciário','Legislativo','Executivo'], correct:1, why:'O Legislativo legisla e fiscaliza. No nível federal, inclui Câmara e Senado.', sourceId:'senado_poderes'},
        {prompt:'Qual Poder normalmente administra e executa serviços públicos?',options:['Executivo','Judiciário','Legislativo'],correct:0,why:'Administrar e executar políticas públicas são funções típicas do Executivo.',sourceId:'senado_poderes'},
        {prompt:'Qual Poder julga conflitos de acordo com o direito?',options:['Legislativo','Executivo','Judiciário'],correct:2,why:'A função jurisdicional — julgar conflitos — é típica do Judiciário.',sourceId:'cnj_judiciario'}
      ]
    },
    {
      id:'cidade', number:2, icon:'🏘️', category:'Sua cidade', minutes:4,
      title:'Prefeito ou vereador?', subtitle:'Descubra quem procurar para resolver questões da cidade.',
      intro:'Um problema de transporte, escola municipal ou serviço urbano faz surgir uma pergunta: a quem cobrar?',
      facts:[
        {title:'Prefeito e prefeitura',text:'O prefeito chefia o Executivo municipal: administra a cidade, planeja ações e executa serviços dentro das competências e recursos do município.'},
        {title:'Vereadores',text:'A Câmara Municipal aprova leis municipais, aprecia o orçamento e fiscaliza a administração do prefeito.'},
        {title:'Nem tudo é municipal',text:'Alguns serviços pertencem ao estado ou à União. Antes de cobrar, verifique qual órgão é responsável pelo caso.'}
      ],
      example:'Se uma rua está com iluminação defeituosa, o primeiro passo costuma ser consultar o canal de atendimento da prefeitura ou o órgão responsável pelo serviço. Você também pode cobrar fiscalização de vereadores.',
      mission:'Pesquise o site oficial da prefeitura ou Câmara Municipal da sua cidade e encontre a página de contato.',
      sourceIds:['senado_municipios','senado_vereadores'],
      questions:[
        {prompt:'Quem chefia o Poder Executivo do município?',options:['O prefeito','Um senador','O presidente da Câmara dos Deputados'],correct:0,why:'No município, o prefeito chefia a administração municipal.',sourceId:'senado_municipios'},
        {prompt:'Qual é uma função da Câmara de Vereadores?',options:['Julgar todos os crimes','Fiscalizar o Executivo municipal','Administrar hospitais federais'],correct:1,why:'Os vereadores fiscalizam a administração municipal, além de legislar nos assuntos locais.',sourceId:'senado_vereadores'},
        {prompt:'Antes de reclamar de um serviço, o melhor primeiro passo é...',options:['Presumir que tudo é culpa do prefeito','Identificar o órgão responsável','Publicar o nome de um funcionário sem provas'],correct:1,why:'Entender a competência de cada órgão ajuda a encaminhar a cobrança corretamente.',sourceId:'senado_municipios'}
      ]
    },
    {
      id:'congresso', number:3, icon:'🗳️', category:'Instituições', minutes:3,
      title:'Deputados e senadores',subtitle:'As duas casas do Congresso Nacional.',
      intro:'No plano federal, o Congresso Nacional tem duas casas: a Câmara dos Deputados e o Senado Federal.',
      facts:[
        {title:'Câmara dos Deputados',text:'É uma das casas do Congresso. Deputados federais participam do processo de elaboração de leis e da fiscalização do Executivo.'},
        {title:'Senado Federal',text:'É a outra casa do Congresso. Senadores também participam da elaboração de leis e da fiscalização federal.'},
        {title:'Fiscalizar importa',text:'Legislar não é a única tarefa: acompanhar as contas e cobrar informações sobre a administração pública também faz parte da atividade parlamentar.'}
      ],
      example:'Uma proposta legislativa federal pode ser analisada por diferentes instâncias e pelas duas casas do Congresso, conforme o tipo de proposta e as regras de tramitação.',
      mission:'Acesse a página institucional do Senado e procure a palavra “fiscalizar”.',
      sourceIds:['senado_poderes','camara_fiscalizacao'],
      questions:[
        {prompt:'Quais são as duas casas do Congresso Nacional?',options:['Prefeitura e Assembleia','Câmara dos Deputados e Senado Federal','STF e TSE'],correct:1,why:'O Congresso Nacional é formado pela Câmara dos Deputados e pelo Senado.',sourceId:'senado_poderes'},
        {prompt:'Além de elaborar leis, parlamentares federais podem...',options:['Fiscalizar o Executivo','Alterar qualquer sentença judicial','Escolher sozinhos todos os prefeitos'],correct:0,why:'A fiscalização do Executivo é uma atribuição importante do Legislativo.',sourceId:'camara_fiscalizacao'},
        {prompt:'O Senado Federal faz parte de qual Poder?',options:['Judiciário','Executivo','Legislativo'],correct:2,why:'O Senado integra o Congresso Nacional, que exerce o Poder Legislativo federal.',sourceId:'senado_poderes'}
      ]
    },
    {
      id:'voto', number:4, icon:'✅', category:'Eleições', minutes:3,
      title:'Como funciona o direito ao voto?',subtitle:'Quem pode votar e quando o voto é facultativo.',
      intro:'Votar é uma forma de participação política. No Brasil, a obrigatoriedade depende de fatores previstos nas regras eleitorais.',
      facts:[
        {title:'Obrigatório',text:'O voto é obrigatório, em regra, para pessoas brasileiras alfabetizadas de 18 até 70 anos, observadas as condições legais e a situação eleitoral.'},
        {title:'Facultativo',text:'É facultativo para quem tem 16 ou 17 anos, para pessoas com mais de 70 anos e para pessoas analfabetas.'},
        {title:'Título eleitoral',text:'O TSE oferece serviços para consultar e regularizar a situação eleitoral. Procedimentos e prazos podem mudar em período eleitoral.'}
      ],
      example:'Uma pessoa com 17 anos pode votar, mas não é obrigada. Uma pessoa com 72 anos também pode escolher se vota.',
      mission:'Entre na Carta de Serviços do TSE para descobrir como consultar informações do seu título eleitoral.',
      sourceIds:['tse_voto'],
      questions:[
        {prompt:'Para uma pessoa de 17 anos, o voto é...',options:['Facultativo','Proibido','Obrigatório em todos os casos'],correct:0,why:'O voto é facultativo para eleitores de 16 e 17 anos.',sourceId:'tse_voto'},
        {prompt:'Para uma pessoa com mais de 70 anos, o voto é...',options:['Sempre proibido','Facultativo','Sempre obrigatório'],correct:1,why:'A Constituição e a Justiça Eleitoral estabelecem voto facultativo para maiores de 70 anos.',sourceId:'tse_voto'},
        {prompt:'Onde consultar informações oficiais sobre seu título?',options:['Em qualquer rede social','Em corrente de mensagem','Nos canais do TSE e da Justiça Eleitoral'],correct:2,why:'O TSE mantém os serviços e as orientações oficiais para eleitores.',sourceId:'tse_voto'}
      ]
    },
    {
      id:'partidos', number:5, icon:'🧩', category:'Eleições', minutes:4,
      title:'O que é um partido político?',subtitle:'Entenda siglas, estatutos e organização partidária.',
      intro:'Partidos são organizações políticas. Cada partido tem regras de funcionamento e documentos oficiais que você pode consultar.',
      facts:[
        {title:'Estatuto',text:'O estatuto reúne regras sobre a organização e o funcionamento interno de um partido.'},
        {title:'Registro',text:'O TSE mantém a lista de partidos registrados, com informações e documentos partidários disponíveis ao público.'},
        {title:'Pesquisa consciente',text:'Para conhecer uma legenda, compare documentos oficiais e ações registradas, diferenciando propostas, opiniões e fatos.'}
      ],
      example:'Antes de compartilhar uma mensagem sobre o que “um partido quer”, é possível procurar seus documentos oficiais e verificar se a mensagem retrata corretamente o conteúdo.',
      mission:'No portal do TSE, encontre a lista de partidos registrados e abra a página de um estatuto.',
      sourceIds:['tse_partidos'],
      questions:[
        {prompt:'Onde consultar a lista oficial de partidos registrados?',options:['Em um boato de grupo','No site do TSE','Em propaganda de candidato'],correct:1,why:'O Tribunal Superior Eleitoral publica informações sobre partidos registrados.',sourceId:'tse_partidos'},
        {prompt:'O estatuto partidário contém principalmente...',options:['Regras de funcionamento da legenda','Todos os gastos públicos do país','Todas as sentenças judiciais'],correct:0,why:'O estatuto é um documento importante para entender a organização da legenda.',sourceId:'tse_partidos'},
        {prompt:'Qual atitude ajuda a entender melhor um partido?',options:['Confiar numa frase isolada','Observar só a cor do símbolo','Consultar documentos oficiais e posições registradas'],correct:2,why:'Comparar documentos e registros concretos é mais informativo do que depender de impressões isoladas.',sourceId:'tse_partidos'}
      ]
    },
    {
      id:'orcamento', number:6, icon:'💰', category:'Transparência', minutes:4,
      title:'Para onde vai o dinheiro público?',subtitle:'Aprenda a diferença entre orçamento e despesa.',
      intro:'O governo planeja quanto espera arrecadar e como pretende utilizar recursos. Depois, é preciso verificar o que foi realmente executado.',
      facts:[
        {title:'Orçamento',text:'O orçamento apresenta previsões e autorizações de receitas e despesas, organizadas por áreas e ações.'},
        {title:'Despesa executada',text:'Uma despesa pode passar por fases como empenho, liquidação e pagamento. Os números representam etapas diferentes.'},
        {title:'Onde pesquisar',text:'O Portal da Transparência permite consultar o orçamento e despesas públicas do governo federal, com filtros de pesquisa.'}
      ],
      example:'Uma verba prevista no orçamento não significa necessariamente que todo aquele valor já foi pago. É preciso olhar o tipo e a fase da informação.',
      mission:'Abra o Portal da Transparência e encontre a seção “Despesas Públicas”.',
      sourceIds:['cgu_orcamento','cgu_despesas'],
      questions:[
        {prompt:'Um valor previsto no orçamento significa que já foi pago?',options:['Sim, sempre','Não, previsão e pagamento são coisas diferentes','Somente se aparecer na internet'],correct:1,why:'Orçamento previsto e pagamento efetivo são dados diferentes.',sourceId:'cgu_orcamento'},
        {prompt:'Qual portal mostra despesas públicas federais?',options:['Portal da Transparência','Portal de previsão do tempo','Site de uma loja'],correct:0,why:'O Portal da Transparência da CGU permite consultar despesas federais.',sourceId:'cgu_despesas'},
        {prompt:'Ao analisar uma despesa, é importante verificar...',options:['A cor do site','Somente um print sem contexto','O período e a fase da despesa'],correct:2,why:'Datas, filtros e fases ajudam a interpretar corretamente os valores.',sourceId:'cgu_despesas'}
      ]
    },
    {
      id:'gastos', number:7, icon:'🔎', category:'Transparência', minutes:4,
      title:'Como consultar gastos de deputados?',subtitle:'Aprenda a verificar a cota parlamentar.',
      intro:'A Câmara divulga dados de gastos relacionados ao exercício do mandato parlamentar, inclusive despesas cobertas pela chamada cota parlamentar.',
      facts:[
        {title:'O que é a cota?',text:'A Cota para o Exercício da Atividade Parlamentar (CEAP) cobre despesas previstas nas regras da Câmara para atividades ligadas ao mandato.'},
        {title:'Não é salário',text:'A cota é diferente da remuneração do deputado. A página de transparência separa diferentes verbas e recursos.'},
        {title:'Olhe o contexto',text:'Compare ano, mês, categoria e regras de uso antes de interpretar um gasto. Um valor isolado não prova irregularidade.'}
      ],
      example:'Se você encontrar uma despesa com passagens aéreas, abra a fonte oficial, confira o período, a descrição e as regras. Evite concluir algo apenas pelo total.',
      mission:'Acesse a página oficial de gastos parlamentares e localize o filtro por ano.',
      sourceIds:['camara_gastos','camara_dados'],
      questions:[
        {prompt:'A CEAP é...',options:['A mesma coisa que salário','Uma cota para despesas do exercício parlamentar','Um imposto municipal'],correct:1,why:'A Câmara define a CEAP como verba destinada a cobrir despesas relacionadas ao mandato.',sourceId:'camara_gastos'},
        {prompt:'Para investigar um gasto, qual cuidado é essencial?',options:['Verificar período, tipo e contexto','Confiar só em um print','Presumir culpa automaticamente'],correct:0,why:'Dados precisam ser interpretados no contexto correto, com origem verificável.',sourceId:'camara_gastos'},
        {prompt:'Onde estão os dados oficiais sobre gastos dos deputados federais?',options:['Em mensagens sem autoria','Na previsão do tempo','Na área de transparência da Câmara'],correct:2,why:'A Câmara oferece consulta de gastos parlamentares e dados abertos.',sourceId:'camara_gastos'}
      ]
    },
    {
      id:'informacao', number:8, icon:'📨', category:'Seus direitos', minutes:4,
      title:'Como pedir informações ao governo?',subtitle:'Conheça a Lei de Acesso à Informação.',
      intro:'Você pode solicitar diversas informações públicas sem precisar justificar por que quer saber. Existem exceções legais, como dados pessoais protegidos e informações sigilosas.',
      facts:[
        {title:'Seu direito',text:'A Lei de Acesso à Informação (LAI) assegura o direito de pedir informações públicas, respeitadas as restrições legais.'},
        {title:'Canal federal atual',text:'Desde 30/06/2026, o Informa.BR é o ponto de acesso federal para buscar informações e registrar pedidos de acesso à informação.'},
        {title:'Pedido objetivo',text:'Diga qual documento ou informação você procura, indicando assunto e período. Guarde o protocolo para acompanhar a resposta.'}
      ],
      example:'Você pode solicitar, por exemplo, documentos públicos sobre um contrato de um órgão federal, identificando o órgão e o período de interesse.',
      mission:'Abra o serviço oficial do Informa.BR e veja como iniciar um pedido de acesso à informação. Não é necessário enviar um pedido de verdade para concluir a missão.',
      sourceIds:['cgu_informabr'],
      questions:[
        {prompt:'É preciso justificar seu motivo para solicitar informação pública pela LAI?',options:['Sempre','Em regra, não','Somente se for jornalista'],correct:1,why:'O direito de pedir informação pública não depende de apresentar justificativa, observadas as regras legais.',sourceId:'cgu_informabr'},
        {prompt:'Qual plataforma federal concentra pedidos de acesso à informação desde junho de 2026?',options:['Informa.BR','Uma rede social','Um serviço de streaming'],correct:0,why:'O Informa.BR passou a concentrar busca e pedidos de acesso à informação no âmbito federal.',sourceId:'cgu_informabr'},
        {prompt:'Um bom pedido costuma...',options:['Ser vago e sem período','Exigir a senha de alguém','Indicar claramente a informação desejada'],correct:2,why:'Pedidos objetivos ajudam a localizar os documentos e orientar a resposta.',sourceId:'cgu_informabr'}
      ]
    },
    {
      id:'ouvidoria', number:9, icon:'📣', category:'Seus direitos', minutes:4,
      title:'Como cobrar um serviço público?',subtitle:'Entenda as ouvidorias e as manifestações.',
      intro:'Quando algo não funciona, saber registrar uma manifestação nos canais corretos pode ajudar a formalizar o problema.',
      facts:[
        {title:'Reclamação',text:'É usada para manifestar insatisfação com serviço ou atendimento público.'},
        {title:'Sugestão e solicitação',text:'Servem para propor melhorias e pedir providências, conforme as categorias disponíveis no órgão.'},
        {title:'Fala.BR',text:'É a plataforma federal de manifestações de ouvidoria, como reclamações, sugestões, denúncias e elogios. Nem todo município participa do sistema.'}
      ],
      example:'Se uma repartição federal oferece atendimento inadequado, você pode verificar a ouvidoria competente e registrar uma reclamação, descrevendo o que ocorreu.',
      mission:'Entre na página oficial da CGU e descubra a diferença entre reclamação e sugestão.',
      sourceIds:['cgu_ouvidoria'],
      questions:[
        {prompt:'Para comunicar insatisfação com um serviço público, normalmente você registra...',options:['Uma reclamação','Um voto','Um estatuto'],correct:0,why:'Reclamação expressa insatisfação com atendimento ou serviço.',sourceId:'cgu_ouvidoria'},
        {prompt:'Qual plataforma é usada para manifestações de ouvidoria na esfera federal?',options:['Informa.BR exclusivamente','Fala.BR','Portal de gastos da Câmara'],correct:1,why:'O Fala.BR oferece registro de manifestações de ouvidoria.',sourceId:'cgu_ouvidoria'},
        {prompt:'Uma manifestação útil deve...',options:['Conter ofensas pessoais','Evitar fatos e detalhes','Descrever o problema com clareza'],correct:2,why:'Detalhes objetivos ajudam o órgão a analisar a demanda.',sourceId:'cgu_ouvidoria'}
      ]
    },
    {
      id:'participacao', number:10, icon:'🌱', category:'Participação', minutes:4,
      title:'Posso participar além do voto?',subtitle:'Conheça as ideias legislativas do Senado.',
      intro:'Participação política não acontece apenas nas eleições. Existem canais para acompanhar debates, apresentar ideias e cobrar informações.',
      facts:[
        {title:'Ideia legislativa',text:'O e-Cidadania do Senado permite apresentar e apoiar ideias para novas leis.'},
        {title:'Apoios e avaliação',text:'Ideias com 20 mil apoios dentro do prazo previsto podem ser encaminhadas à comissão competente para avaliação. Isso não significa que viram lei automaticamente.'},
        {title:'Outras maneiras',text:'Também é possível acompanhar votações, pesquisar despesas e conversar com representantes por canais institucionais.'}
      ],
      example:'Uma pessoa pode cadastrar uma ideia no e-Cidadania ou apoiar propostas existentes. O Senado explica o procedimento e suas condições.',
      mission:'Abra o e-Cidadania e leia uma ideia legislativa. Observe a data e o número de apoios, sem precisar apoiá-la.',
      sourceIds:['senado_ecidadania'],
      questions:[
        {prompt:'O e-Cidadania do Senado permite...',options:['Aprovar sozinho qualquer lei','Apresentar e apoiar ideias legislativas','Substituir eleições oficiais'],correct:1,why:'A plataforma abre um canal de propostas e apoio popular a ideias legislativas.',sourceId:'senado_ecidadania'},
        {prompt:'Uma ideia com 20 mil apoios vira automaticamente lei?',options:['Não, ela pode ser analisada no Senado','Sim, imediatamente','Sim, sem avaliação'],correct:0,why:'Os apoios podem levar à avaliação na comissão competente, não à criação automática de uma lei.',sourceId:'senado_ecidadania'},
        {prompt:'Participar da política significa apenas votar?',options:['Sim, sempre','Somente se você tiver partido','Não, há outros canais de participação e fiscalização'],correct:2,why:'Ideias legislativas, acompanhamento de decisões e fiscalização são outras formas de participação.',sourceId:'senado_ecidadania'}
      ]
    }
  ]
};
