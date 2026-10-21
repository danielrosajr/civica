/* Cívica v0.5.0-alpha — Quem Pode o Quê?
   Conteúdo cívico apartidário, revisão: 21/10/2026. Não é aconselhamento jurídico. */
(()=>{'use strict';
 const data=window.CIVICA_CONTENT,extra=window.CIVICA_EXTRAS;
 Object.assign(data.sources, {
  "constituicao": {
    "agency": "Presidência da República",
    "title": "Constituição da República Federativa do Brasil (texto compilado)",
    "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm"
  },
  "camara_funcao": {
    "agency": "Câmara dos Deputados",
    "title": "O que faz um deputado federal — Eleições 2026",
    "url": "https://especial.camara.leg.br/eleicoes-2026/eleicoes-2026-o-que-faz-um-deputado-federal/"
  },
  "camara_fiscal": {
    "agency": "Câmara dos Deputados",
    "title": "Instrumentos de fiscalização do Executivo",
    "url": "https://www2.camara.leg.br/comunicacao/assessoria-de-imprensa/guia-para-jornalistas/fiscalizacao-do-executivo"
  },
  "stf_102": {
    "agency": "Supremo Tribunal Federal",
    "title": "Constituição comentada — artigo 102 (STF)",
    "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=102&abrirBase=CF"
  },
  "senado_atribuicoes": {
    "agency": "Senado Federal",
    "title": "Atribuições do Senado Federal",
    "url": "https://www12.senado.leg.br/institucional/documentos/sobre-o-senado/atividade/atribuicoes"
  },
  "camara_lei": {
    "agency": "Câmara dos Deputados",
    "title": "Entenda o processo legislativo na Câmara",
    "url": "https://www.camara.leg.br/entenda-o-processo-legislativo/"
  },
  "camara_vereadores": {
    "agency": "Senado Federal",
    "title": "Funções do prefeito e dos vereadores",
    "url": "https://www12.senado.leg.br/noticias/materias/2024/10/02/eleicoes-2024-voce-conhece-as-funcoes-do-prefeito-e-dos-vereadores"
  }
});
 data.lessons.push(...[
  {
    "number": 29,
    "id": "deputado-federal",
    "icon": "🏛️",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "Deputado federal pode construir uma escola?",
    "subtitle": "O que o deputado pode prometer e executar.",
    "intro": "O deputado pode apresentar, discutir e votar projetos, de acordo com as regras legislativas. Pode atuar na fiscalização e acompanhar recursos públicos, usando instrumentos previstos na Constituição. Construir e administrar escolas e hospitais não é uma tarefa executada diretamente por um deputado federal.",
    "facts": [
      {
        "title": "Faz leis com outros parlamentares",
        "text": "O deputado pode apresentar, discutir e votar projetos, de acordo com as regras legislativas."
      },
      {
        "title": "Fiscaliza o governo federal",
        "text": "Pode atuar na fiscalização e acompanhar recursos públicos, usando instrumentos previstos na Constituição."
      },
      {
        "title": "Não executa obras pessoalmente",
        "text": "Construir e administrar escolas e hospitais não é uma tarefa executada diretamente por um deputado federal."
      }
    ],
    "example": "João pede a um deputado que conserte o asfalto. O deputado pode encaminhar e fiscalizar, mas o serviço municipal geralmente cabe à prefeitura.",
    "mission": "Abra o site da Câmara e encontre uma proposta de lei de sua região.",
    "sourceIds": [
      "camara_funcao"
    ],
    "questions": [
      {
        "prompt": "Um deputado federal constrói ruas diretamente?",
        "options": [
          "Sim, faz parte de suas tarefas diárias",
          "Não; a execução cabe ao Executivo competente",
          "Pode obrigar qualquer prefeitura a executar uma obra"
        ],
        "correct": 1,
        "why": "Deputados legislam e fiscalizam; execução de obras é responsabilidade de órgãos executivos.",
        "sourceId": "camara_funcao"
      },
      {
        "prompt": "Deputados podem apresentar projetos de lei?",
        "options": [
          "Sim, seguindo as regras",
          "Não, somente o presidente pode",
          "Somente depois de uma eleição municipal"
        ],
        "correct": 0,
        "why": "Deputados podem apresentar projetos e participar das deliberações.",
        "sourceId": "camara_funcao"
      },
      {
        "prompt": "Fiscalizar gastos do Executivo é uma atribuição parlamentar?",
        "options": [
          "Apenas de prefeitos",
          "Não, é proibido",
          "Sim, com instrumentos previstos em lei"
        ],
        "correct": 2,
        "why": "A fiscalização é função importante do Legislativo.",
        "sourceId": "camara_funcao"
      }
    ]
  },
  {
    "number": 30,
    "id": "senador",
    "icon": "🏛️",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "O que faz um senador?",
    "subtitle": "Por que existem Câmara e Senado?",
    "intro": "Cada unidade federativa elege três senadores, com mandatos de oito anos. Senadores discutem, apresentam e votam proposições dentro das competências do Senado. O Senado aprecia certas indicações de autoridades e pode julgar determinadas autoridades em processos de responsabilidade, conforme a Constituição.",
    "facts": [
      {
        "title": "Representa o estado e o Distrito Federal",
        "text": "Cada unidade federativa elege três senadores, com mandatos de oito anos."
      },
      {
        "title": "Participa do processo legislativo",
        "text": "Senadores discutem, apresentam e votam proposições dentro das competências do Senado."
      },
      {
        "title": "Tem atribuições próprias",
        "text": "O Senado aprecia certas indicações de autoridades e pode julgar determinadas autoridades em processos de responsabilidade, conforme a Constituição."
      }
    ],
    "example": "Uma pessoa pergunta se o senador pode assumir a gestão de um hospital estadual. Essa administração não é função do mandato de senador.",
    "mission": "Confira quem são os três senadores de um estado no portal do Senado.",
    "sourceIds": [
      "senado_atribuicoes"
    ],
    "questions": [
      {
        "prompt": "Quantos senadores cada estado elege?",
        "options": [
          "Dois",
          "Três",
          "Dez"
        ],
        "correct": 1,
        "why": "São três senadores por estado e pelo Distrito Federal.",
        "sourceId": "senado_atribuicoes"
      },
      {
        "prompt": "Senador é chefe do governo estadual?",
        "options": [
          "Não",
          "Sim",
          "Só em ano eleitoral"
        ],
        "correct": 0,
        "why": "O governador dirige o Executivo estadual, não o senador.",
        "sourceId": "senado_atribuicoes"
      },
      {
        "prompt": "O Senado tem funções além de votar leis?",
        "options": [
          "Não",
          "Apenas organiza eleições municipais",
          "Sim, como certas aprovações de autoridades"
        ],
        "correct": 2,
        "why": "O artigo 52 da Constituição prevê competências próprias do Senado.",
        "sourceId": "senado_atribuicoes"
      }
    ]
  },
  {
    "number": 31,
    "id": "presidente-limites",
    "icon": "🏢",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "O presidente pode fazer qualquer coisa?",
    "subtitle": "Poderes, limites e decisões compartilhadas.",
    "intro": "Dirige a administração federal e exerce as atribuições previstas no artigo 84 da Constituição. Pode sancionar ou vetar projetos nos casos previstos, mas o processo também envolve o Legislativo. Suas decisões estão sujeitas a limites legais e ao controle institucional.",
    "facts": [
      {
        "title": "Chefia o Executivo federal",
        "text": "Dirige a administração federal e exerce as atribuições previstas no artigo 84 da Constituição."
      },
      {
        "title": "Participa da formação de leis",
        "text": "Pode sancionar ou vetar projetos nos casos previstos, mas o processo também envolve o Legislativo."
      },
      {
        "title": "Não está acima da Constituição",
        "text": "Suas decisões estão sujeitas a limites legais e ao controle institucional."
      }
    ],
    "example": "Um presidente promete reduzir um imposto: dependendo do tributo e da medida, pode precisar de aprovação legislativa.",
    "mission": "Leia o artigo 84 da Constituição e identifique duas competências presidenciais.",
    "sourceIds": [
      "constituicao"
    ],
    "questions": [
      {
        "prompt": "O presidente está acima da Constituição?",
        "options": [
          "Sim",
          "Não",
          "Apenas no último ano do mandato"
        ],
        "correct": 1,
        "why": "A Constituição limita competências e estabelece mecanismos de controle.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "O presidente pode vetar projetos de lei?",
        "options": [
          "Sim, nas condições constitucionais",
          "Nunca",
          "Somente projetos municipais"
        ],
        "correct": 0,
        "why": "A Constituição prevê sanção e veto em procedimentos específicos.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Quem exerce o Executivo federal?",
        "options": [
          "As câmaras municipais",
          "O STF",
          "O presidente da República, com seus ministros"
        ],
        "correct": 2,
        "why": "O presidente é chefe do Poder Executivo federal.",
        "sourceId": "constituicao"
      }
    ]
  },
  {
    "number": 32,
    "id": "deputado-estadual",
    "icon": "📍",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "O que faz o deputado estadual?",
    "subtitle": "Diferenças entre Assembleia e Congresso.",
    "intro": "Participa do Poder Legislativo estadual, exercido pela Assembleia Legislativa. Debate, propõe e vota leis estaduais respeitando a Constituição Federal e a Constituição do estado. Acompanha atos e contas do Executivo estadual usando os instrumentos previstos.",
    "facts": [
      {
        "title": "Atua no estado",
        "text": "Participa do Poder Legislativo estadual, exercido pela Assembleia Legislativa."
      },
      {
        "title": "Faz leis estaduais dentro das competências",
        "text": "Debate, propõe e vota leis estaduais respeitando a Constituição Federal e a Constituição do estado."
      },
      {
        "title": "Fiscaliza o governo estadual",
        "text": "Acompanha atos e contas do Executivo estadual usando os instrumentos previstos."
      }
    ],
    "example": "Para entender uma questão envolvendo uma rodovia estadual, pesquise o órgão responsável e veja se existe fiscalização da Assembleia.",
    "mission": "Entre no site da Assembleia do seu estado e procure uma proposição.",
    "sourceIds": [
      "constituicao"
    ],
    "questions": [
      {
        "prompt": "Deputado estadual atua principalmente onde?",
        "options": [
          "No Supremo",
          "No Legislativo estadual",
          "Como chefe da prefeitura"
        ],
        "correct": 1,
        "why": "Integra o Legislativo do estado.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Deputado estadual pode fiscalizar o governador?",
        "options": [
          "Sim, dentro das regras",
          "Não, nunca",
          "Somente com autorização de um senador"
        ],
        "correct": 0,
        "why": "Fiscalização estadual é atribuição legislativa.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Deputado estadual pode aprovar lei federal sozinho?",
        "options": [
          "Sim",
          "Somente em capitais",
          "Não"
        ],
        "correct": 2,
        "why": "Leis federais são deliberadas no processo legislativo federal.",
        "sourceId": "constituicao"
      }
    ]
  },
  {
    "number": 33,
    "id": "prefeito-vereador",
    "icon": "🏘️",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "Prefeito e vereador: quem conserta a rua?",
    "subtitle": "Entenda sua cidade e onde cobrar.",
    "intro": "O prefeito chefia o Executivo municipal e coordena a administração local. Vereadores fazem leis municipais e fiscalizam a atuação do prefeito. Dependendo do assunto, a responsabilidade pode ser do município, do estado ou da União.",
    "facts": [
      {
        "title": "Prefeitura administra serviços municipais",
        "text": "O prefeito chefia o Executivo municipal e coordena a administração local."
      },
      {
        "title": "Câmara debate leis e fiscaliza",
        "text": "Vereadores fazem leis municipais e fiscalizam a atuação do prefeito."
      },
      {
        "title": "Identifique o órgão competente",
        "text": "Dependendo do assunto, a responsabilidade pode ser do município, do estado ou da União."
      }
    ],
    "example": "João encontra um buraco na rua municipal e faz solicitação na prefeitura, guardando o protocolo para acompanhamento.",
    "mission": "Localize a ouvidoria da sua prefeitura e confira se há um canal de conservação de ruas.",
    "sourceIds": [
      "camara_vereadores"
    ],
    "questions": [
      {
        "prompt": "Quem costuma executar o reparo de uma rua municipal?",
        "options": [
          "Senado",
          "Prefeitura ou prestadora responsável",
          "Supremo Tribunal Federal"
        ],
        "correct": 1,
        "why": "O Executivo municipal organiza a execução dos serviços locais.",
        "sourceId": "camara_vereadores"
      },
      {
        "prompt": "O vereador pode fiscalizar a prefeitura?",
        "options": [
          "Sim",
          "Não",
          "Só se for da oposição"
        ],
        "correct": 0,
        "why": "A fiscalização do Executivo municipal é função da Câmara.",
        "sourceId": "camara_vereadores"
      },
      {
        "prompt": "Quem faz leis municipais?",
        "options": [
          "O presidente sozinho",
          "Os ministros do STF",
          "A Câmara de Vereadores dentro das suas competências"
        ],
        "correct": 2,
        "why": "A Câmara é o órgão legislativo municipal.",
        "sourceId": "camara_vereadores"
      }
    ]
  },
  {
    "number": 34,
    "id": "stf-poder",
    "icon": "⚖️",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "O que pode fazer o STF?",
    "subtitle": "Conheça o Supremo e seus limites.",
    "intro": "O Supremo Tribunal Federal tem a competência de guarda da Constituição, conforme o artigo 102. Decide casos e ações previstos na Constituição, não toda reclamação existente no país. Suas decisões judiciais podem ter efeitos importantes, mas suas competências são distintas das do Legislativo.",
    "facts": [
      {
        "title": "Guarda da Constituição",
        "text": "O Supremo Tribunal Federal tem a competência de guarda da Constituição, conforme o artigo 102."
      },
      {
        "title": "Julga processos de sua competência",
        "text": "Decide casos e ações previstos na Constituição, não toda reclamação existente no país."
      },
      {
        "title": "Não cria leis como o Congresso",
        "text": "Suas decisões judiciais podem ter efeitos importantes, mas suas competências são distintas das do Legislativo."
      }
    ],
    "example": "Uma lei é questionada por suposta incompatibilidade com a Constituição. Existem ações judiciais específicas para discutir isso no STF.",
    "mission": "Consulte o artigo 102 da Constituição e identifique uma competência do STF.",
    "sourceIds": [
      "stf_102"
    ],
    "questions": [
      {
        "prompt": "O STF tem qual função central?",
        "options": [
          "Administrar prefeituras",
          "Guarda da Constituição",
          "Escolher todos os deputados"
        ],
        "correct": 1,
        "why": "A Constituição atribui ao STF a sua guarda.",
        "sourceId": "stf_102"
      },
      {
        "prompt": "O STF julga todos os conflitos do Brasil como primeira instância?",
        "options": [
          "Não",
          "Sim",
          "Só os conflitos municipais"
        ],
        "correct": 0,
        "why": "Existem várias instâncias e ramos do Judiciário.",
        "sourceId": "stf_102"
      },
      {
        "prompt": "O STF substitui o Congresso para propor qualquer lei?",
        "options": [
          "Sim",
          "Em qualquer crise",
          "Não"
        ],
        "correct": 2,
        "why": "Poderes têm funções e procedimentos distintos.",
        "sourceId": "stf_102"
      }
    ]
  },
  {
    "number": 35,
    "id": "primeira-dama",
    "icon": "🤝",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "Qual é o poder da primeira-dama?",
    "subtitle": "Papel social, influência e cargo formal.",
    "intro": "Ser cônjuge do presidente não confere automaticamente as competências da Presidência. Pode ter atividades sociais e representativas, mas atribuições formais exigem fundamento jurídico específico. É importante separar visibilidade pública de poder para decidir atos oficiais.",
    "facts": [
      {
        "title": "Título não é cargo constitucional",
        "text": "Ser cônjuge do presidente não confere automaticamente as competências da Presidência."
      },
      {
        "title": "Pode participar de iniciativas públicas",
        "text": "Pode ter atividades sociais e representativas, mas atribuições formais exigem fundamento jurídico específico."
      },
      {
        "title": "Influência não é autoridade legal",
        "text": "É importante separar visibilidade pública de poder para decidir atos oficiais."
      }
    ],
    "example": "Uma primeira-dama participa de uma campanha social. Isso, por si só, não significa que possua poder formal para editar leis.",
    "mission": "Compare as competências constitucionais do presidente com as de ministros nomeados.",
    "sourceIds": [
      "constituicao"
    ],
    "questions": [
      {
        "prompt": "O título de primeira-dama confere poderes de presidente?",
        "options": [
          "Sim",
          "Não",
          "Somente em viagens"
        ],
        "correct": 1,
        "why": "O título não transfere atribuições constitucionais.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Uma primeira-dama pode ter atividades sociais públicas?",
        "options": [
          "Sim, respeitando as regras aplicáveis",
          "Não pode aparecer em público",
          "Só se for eleita parlamentar"
        ],
        "correct": 0,
        "why": "Atividades públicas são distintas de competência formal.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Para verificar competência legal, devemos procurar:",
        "options": [
          "Boatos sobre influência",
          "Seguidores nas redes sociais",
          "Constituição, leis e atos oficiais aplicáveis"
        ],
        "correct": 2,
        "why": "Competências decorrem do ordenamento jurídico.",
        "sourceId": "constituicao"
      }
    ]
  },
  {
    "number": 36,
    "id": "como-vira-lei",
    "icon": "📜",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "Como nasce uma lei federal?",
    "subtitle": "Etapas de proposta, debate e votação.",
    "intro": "Projetos podem ser iniciados por diferentes autoridades e pessoas, nos casos previstos pela Constituição. Projetos seguem tramitação com comissões e deliberações, que variam conforme a espécie normativa. No processo legislativo de leis ordinárias e complementares, há participação presidencial; existem exceções e outros procedimentos.",
    "facts": [
      {
        "title": "A proposta é apresentada",
        "text": "Projetos podem ser iniciados por diferentes autoridades e pessoas, nos casos previstos pela Constituição."
      },
      {
        "title": "O Legislativo analisa e vota",
        "text": "Projetos seguem tramitação com comissões e deliberações, que variam conforme a espécie normativa."
      },
      {
        "title": "Pode haver sanção ou veto",
        "text": "No processo legislativo de leis ordinárias e complementares, há participação presidencial; existem exceções e outros procedimentos."
      }
    ],
    "example": "Um deputado apresenta um projeto. O texto é discutido e votado, podendo passar por diferentes etapas antes de virar lei.",
    "mission": "Encontre um projeto em tramitação no site da Câmara e veja seu histórico.",
    "sourceIds": [
      "constituicao"
    ],
    "questions": [
      {
        "prompt": "Uma proposta vira lei só por ser anunciada?",
        "options": [
          "Sim",
          "Não, precisa seguir o processo adequado",
          "Apenas se for publicada em rede social"
        ],
        "correct": 1,
        "why": "Anúncios não substituem o processo legislativo.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Projetos de lei são discutidos e votados no Congresso?",
        "options": [
          "Sim, conforme regras",
          "Nunca",
          "Somente em prefeitura"
        ],
        "correct": 0,
        "why": "O Legislativo tem papel central na elaboração das leis federais.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Em muitos projetos de lei, o presidente pode:",
        "options": [
          "Assinar a decisão judicial do STF",
          "Dissolver o Congresso",
          "Sancionar ou vetar nas condições constitucionais"
        ],
        "correct": 2,
        "why": "O artigo 66 trata da sanção e do veto.",
        "sourceId": "constituicao"
      }
    ]
  },
  {
    "number": 37,
    "id": "separacao-poderes",
    "icon": "🕊️",
    "category": "Quem Pode o Quê?",
    "minutes": 5,
    "title": "Por que não se pode fechar o Congresso?",
    "subtitle": "Independência, controles e democracia.",
    "intro": "O artigo 2º da Constituição estabelece Legislativo, Executivo e Judiciário como Poderes da União. O Congresso tem funções legislativas e instrumentos de fiscalização do Executivo. O presidente não recebe poder constitucional para dissolver o Congresso por vontade própria; controles institucionais protegem direitos inclusive de quem discorda de quem governa.",
    "facts": [
      {
        "title": "Os Poderes são independentes e harmônicos",
        "text": "O artigo 2º da Constituição estabelece Legislativo, Executivo e Judiciário como Poderes da União."
      },
      {
        "title": "Congresso representa e fiscaliza",
        "text": "O Congresso tem funções legislativas e instrumentos de fiscalização do Executivo."
      },
      {
        "title": "Fechar o Congresso arbitrariamente viola a Constituição",
        "text": "O presidente não recebe poder constitucional para dissolver o Congresso por vontade própria; controles institucionais protegem direitos inclusive de quem discorda de quem governa."
      }
    ],
    "example": "Um governante recebe críticas no Congresso. Ele não pode fechar a instituição por vontade pessoal porque não gostou da oposição.",
    "mission": "Leia o artigo 2º e o artigo 44 da Constituição e observe como os Poderes são definidos.",
    "sourceIds": [
      "constituicao"
    ],
    "questions": [
      {
        "prompt": "O presidente pode fechar o Congresso só porque discorda dele?",
        "options": [
          "Sim",
          "Não",
          "Apenas após eleições municipais"
        ],
        "correct": 1,
        "why": "A Constituição não lhe dá essa atribuição.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "O artigo 2º trata da separação dos Poderes?",
        "options": [
          "Sim",
          "Não",
          "Somente de transporte"
        ],
        "correct": 0,
        "why": "O artigo 2º prevê independência e harmonia entre os Poderes.",
        "sourceId": "constituicao"
      },
      {
        "prompt": "Por que a fiscalização institucional importa?",
        "options": [
          "Porque substitui eleições",
          "Porque impede qualquer discordância",
          "Porque limita abusos e permite controle do poder público"
        ],
        "correct": 2,
        "why": "Controles institucionais ajudam a preservar a legalidade e direitos.",
        "sourceId": "constituicao"
      }
    ]
  }
]);
 Object.assign(extra.easy, {
  "deputado-federal": {
    "summary": "Deputado federal ajuda a fazer leis e fiscaliza o governo. Ele não vira prefeito nem constrói uma rua sozinho.",
    "comparison": "Imagine um morador pedindo uma escola: o deputado pode debater leis e orçamento, mas a execução depende do poder público competente.",
    "scenes": [
      [
        "🎨",
        "João encontra um problema na cidade."
      ],
      [
        "🎨",
        "Ele conversa com uma representante eleita."
      ],
      [
        "🎨",
        "A parlamentar usa instrumentos de fiscalização e discute propostas."
      ],
      [
        "🎨",
        "A prefeitura ou órgão competente executa as obras."
      ]
    ],
    "comic": "assets/quadrinhos-deputado-federal-",
    "comicExt": "svg"
  },
  "senador": {
    "summary": "Senador representa o estado no Congresso. Ele vota leis e participa de decisões especiais, mas não governa o estado.",
    "comparison": "Pense em dois espaços de debate do Congresso: a Câmara representa a população; o Senado representa os estados e o Distrito Federal.",
    "scenes": [
      [
        "🎨",
        "Moradores conhecem seus senadores."
      ],
      [
        "🎨",
        "Uma proposta é discutida no Congresso."
      ],
      [
        "🎨",
        "Senadores votam conforme regras específicas."
      ],
      [
        "🎨",
        "O cidadão consulta o registro público de votação."
      ]
    ],
    "comic": "assets/quadrinhos-senador-",
    "comicExt": "svg"
  },
  "presidente-limites": {
    "summary": "Presidente governa o país dentro das regras. Não pode simplesmente virar dono de todos os Poderes.",
    "comparison": "É como ter tarefas importantes com regras: o presidente administra a União, mas não pode trocar a Constituição sozinho.",
    "scenes": [
      [
        "🎨",
        "Uma presidente recebe uma proposta."
      ],
      [
        "🎨",
        "A equipe verifica o que a lei permite."
      ],
      [
        "🎨",
        "O Congresso participa quando a matéria exige lei."
      ],
      [
        "🎨",
        "Os controles constitucionais continuam valendo."
      ]
    ],
    "comic": "assets/quadrinhos-presidente-limites-",
    "comicExt": "svg"
  },
  "deputado-estadual": {
    "summary": "Deputado estadual trabalha com leis e fiscalização do seu estado. Ele não é subordinado ao presidente da República.",
    "comparison": "Uma lei estadual não resolve qualquer assunto federal: cada esfera de governo tem suas próprias competências.",
    "scenes": [
      [
        "🎨",
        "Moradores identificam um assunto estadual."
      ],
      [
        "🎨",
        "O deputado apresenta uma proposta estadual."
      ],
      [
        "🎨",
        "A Assembleia discute e vota."
      ],
      [
        "🎨",
        "O Executivo estadual atua dentro de suas competências."
      ]
    ],
    "comic": "assets/quadrinhos-deputado-estadual-",
    "comicExt": "svg"
  },
  "prefeito-vereador": {
    "summary": "Prefeito administra a cidade. Vereador faz leis e fiscaliza a prefeitura. Nenhum dos dois pode fazer tudo sozinho.",
    "comparison": "Para pedir um conserto da rua, normalmente você procura o serviço da prefeitura; para fiscalizar como o município gastou, pode procurar a Câmara.",
    "scenes": [
      [
        "🎨",
        "Uma moradora vê um buraco na rua."
      ],
      [
        "🎨",
        "Ela encontra os canais da prefeitura e da Câmara."
      ],
      [
        "🎨",
        "A prefeitura organiza o reparo conforme suas competências."
      ],
      [
        "🎨",
        "O cidadão acompanha a resposta e os documentos."
      ]
    ],
    "comic": "assets/quadrinhos-poderes-cidade-",
    "comicExt": "webp"
  },
  "stf-poder": {
    "summary": "O STF é um tribunal. Ele julga assuntos previstos na Constituição e ajuda a garantir que as regras constitucionais sejam respeitadas.",
    "comparison": "Como árbitro que segue regras de um campeonato: a comparação ajuda a lembrar da função de julgar, mas a Justiça tem procedimentos próprios.",
    "scenes": [
      [
        "🎨",
        "Uma lei é questionada por cidadãos e instituições."
      ],
      [
        "🎨",
        "Profissionais discutem os argumentos jurídicos."
      ],
      [
        "🎨",
        "O tribunal julga segundo suas competências."
      ],
      [
        "🎨",
        "A decisão é publicada e pode ser consultada."
      ]
    ],
    "comic": "assets/quadrinhos-stf-poder-",
    "comicExt": "svg"
  },
  "primeira-dama": {
    "summary": "Ser primeira-dama não torna alguém presidente ou ministra. Pode existir influência e atuação pública, mas isso não dá poderes constitucionais automaticamente.",
    "comparison": "Imagine alguém conhecido por apoiar causas: ser conhecido não autoriza assinar uma lei ou comandar um ministério.",
    "scenes": [
      [
        "🎨",
        "Uma personalidade pública participa de uma ação social."
      ],
      [
        "🎨",
        "Pessoas confundem visibilidade com cargo formal."
      ],
      [
        "🎨",
        "O cidadão procura o ato que teria atribuído uma função."
      ],
      [
        "🎨",
        "Compara-se a atuação com as competências previstas em lei."
      ]
    ],
    "comic": "assets/quadrinhos-primeira-dama-",
    "comicExt": "svg"
  },
  "como-vira-lei": {
    "summary": "Lei não aparece só porque alguém prometeu. Ela precisa seguir etapas e pode ser alterada, rejeitada, sancionada ou vetada.",
    "comparison": "É como uma proposta revisada por várias pessoas antes de virar uma regra: cada etapa possui competência própria.",
    "scenes": [
      [
        "🎨",
        "Uma proposta é apresentada."
      ],
      [
        "🎨",
        "Parlamentares debatem o texto."
      ],
      [
        "🎨",
        "O Legislativo delibera conforme as regras."
      ],
      [
        "🎨",
        "O presidente participa quando a Constituição prevê sanção ou veto."
      ]
    ],
    "comic": "assets/quadrinhos-poderes-lei-",
    "comicExt": "webp"
  },
  "separacao-poderes": {
    "summary": "Nenhum governante pode decidir sozinho que o Congresso deixou de existir. Os Poderes precisam ter limites e fiscalizar uns aos outros.",
    "comparison": "Pense em várias pessoas guardando chaves diferentes. Se uma pessoa toma todas as chaves, fica mais difícil questionar suas decisões.",
    "scenes": [
      [
        "🎨",
        "Os Poderes funcionam com atribuições distintas."
      ],
      [
        "🎨",
        "Representantes discutem e fiscalizam decisões."
      ],
      [
        "🎨",
        "A população pode acompanhar debates públicos."
      ],
      [
        "🎨",
        "A Constituição limita os atos de autoridades."
      ]
    ],
    "comic": "assets/quadrinhos-separacao-poderes-",
    "comicExt": "svg"
  }
});
})();
