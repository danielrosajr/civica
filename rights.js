/* Cívica v0.3.0 — Trilha Conheça Seus Direitos. Revisão editorial 21/10/2026.
 * Conteúdo educativo; verifique a legislação e os requisitos no serviço oficial.
 */
(function(){'use strict';
  const data=window.CIVICA_CONTENT;
  const extra=window.CIVICA_EXTRAS;
  Object.assign(data.sources, {
  "cdc_lei": {
    "agency": "Presidência da República",
    "title": "Código de Defesa do Consumidor — Lei 8.078/1990",
    "url": "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
  },
  "procon_arrependimento": {
    "agency": "Procon de Santa Catarina",
    "title": "Direito de arrependimento em compras on-line",
    "url": "https://www.procon.sc.gov.br/procon-sc-explica-direito-de-arrependimento-vale-por-7-dias-para-compras-online/"
  },
  "procon_precos": {
    "agency": "Procon de Santa Catarina",
    "title": "O que fazer quando há preços diferentes?",
    "url": "https://www.procon.sc.gov.br/procon-sc-explica-o-que-fazer-quando-ha-precos-diferentes-ao-mesmo-produto/"
  },
  "procon_consumidor": {
    "agency": "Procon de Itajaí (SC)",
    "title": "Dúvidas frequentes sobre produtos e serviços",
    "url": "https://procon.itajai.sc.gov.br/produtos-e-servicos/"
  },
  "estatuto_idoso": {
    "agency": "Presidência da República",
    "title": "Estatuto da Pessoa Idosa — Lei 10.741/2003",
    "url": "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741compilado.htm"
  },
  "antt_viajante": {
    "agency": "Agência Nacional de Transportes Terrestres (ANTT)",
    "title": "Direitos do passageiro no transporte interestadual",
    "url": "https://www.gov.br/antt/pt-br/assuntos/ultimas-noticias/viagem-tranquila-comeca-com-informacao-os-direitos-do-passageiro-no-transporte-interestadual/"
  },
  "gov_carteira_idosa": {
    "agency": "Governo Federal",
    "title": "Emitir a Carteira da Pessoa Idosa",
    "url": "https://www.gov.br/pt-br/servicos/adquirir-carteira-do-idoso"
  },
  "saude_carta": {
    "agency": "Ministério da Saúde",
    "title": "Sistema Único de Saúde — direitos dos usuários",
    "url": "https://www.gov.br/saude/pt-br/acesso-a-informacao/institucional/sus"
  },
  "saude_direitos": {
    "agency": "Hospitais Universitários Federais — HU Brasil",
    "title": "Carta de Direitos e Deveres dos Usuários do SUS",
    "url": "https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-nordeste/ch-ufc/acesso-a-informacao/carta-de-direitos-e-deveres-dos-usuarios-do-sus"
  }
});
  data.lessons.push(...[
  {
    "id": "direito-arrependimento",
    "number": 11,
    "icon": "📦",
    "category": "Direitos do consumidor",
    "minutes": 4,
    "title": "Posso devolver uma compra da internet?",
    "subtitle": "Descubra quando vale o prazo de 7 dias.",
    "intro": "Ao contratar um produto ou serviço fora do estabelecimento comercial, como pela internet ou telefone, o Código de Defesa do Consumidor prevê um direito especial de arrependimento.",
    "facts": [
      {
        "title": "Sete dias",
        "text": "Em regra, você pode desistir em até 7 dias a partir da assinatura do contrato ou do recebimento do produto ou serviço, conforme o caso."
      },
      {
        "title": "Sem precisar justificar",
        "text": "No direito de arrependimento, não é necessário provar defeito nem explicar por que mudou de ideia."
      },
      {
        "title": "Guarde comprovantes",
        "text": "Registre a data da entrega, o pedido e a solicitação de cancelamento; confira como fazer a devolução no canal oficial da loja."
      }
    ],
    "example": "Uma pessoa compra uma luminária pela internet. Ao receber o produto, decide que não deseja mais a compra. Se estiver dentro do prazo legal e nas condições aplicáveis, pode solicitar o arrependimento.",
    "mission": "Pesquise no site de uma loja on-line onde aparece a política de devolução. Não precisa comprar nada.",
    "sourceIds": [
      "cdc_lei",
      "procon_arrependimento"
    ],
    "questions": [
      {
        "prompt": "A regra dos 7 dias normalmente se aplica a...",
        "options": [
          "Compras em loja física, sempre",
          "Compras feitas fora da loja, como pela internet",
          "Qualquer compra após um ano"
        ],
        "correct": 1,
        "why": "O art. 49 trata de contratações realizadas fora do estabelecimento comercial.",
        "sourceId": "cdc_lei"
      },
      {
        "prompt": "Para exercer o arrependimento dentro das condições legais, é obrigatório provar defeito?",
        "options": [
          "Não",
          "Sim",
          "Somente para itens baratos"
        ],
        "correct": 0,
        "why": "Arrependimento e reclamação por defeito são direitos diferentes.",
        "sourceId": "procon_arrependimento"
      },
      {
        "prompt": "Qual atitude ajuda a exercer esse direito?",
        "options": [
          "Jogar fora o comprovante",
          "Esperar muitos meses",
          "Registrar a solicitação e guardar comprovantes"
        ],
        "correct": 2,
        "why": "Guardar os registros pode ajudar a comprovar a data e o contato.",
        "sourceId": "procon_arrependimento"
      }
    ]
  },
  {
    "id": "direito-precos",
    "number": 12,
    "icon": "🏷️",
    "category": "Direitos do consumidor",
    "minutes": 4,
    "title": "Preço na prateleira diferente do caixa?",
    "subtitle": "Saiba como agir quando aparecem dois valores.",
    "intro": "Uma loja deve informar os preços de forma clara. Quando há divergência entre dois preços anunciados para o mesmo produto, a orientação dos Procons é aplicar o menor valor anunciado, ressalvadas situações específicas como erros manifestamente evidentes.",
    "facts": [
      {
        "title": "Compare o mesmo produto",
        "text": "Confira tamanho, quantidade, código ou variedade. A oferta precisa se referir àquele item."
      },
      {
        "title": "Mostre a etiqueta",
        "text": "Se o valor no caixa for maior que o da oferta identificada, peça a correção com tranquilidade."
      },
      {
        "title": "Guarde a prova",
        "text": "Se não resolver, uma fotografia da etiqueta e o cupom podem ajudar a registrar reclamação no Procon."
      }
    ],
    "example": "Um pacote de café está anunciado a R$ 16 na prateleira, mas aparece a R$ 20 no caixa. Confirme se é exatamente o mesmo produto e peça a verificação do preço.",
    "mission": "Na próxima compra, observe como as lojas exibem preço, peso e unidade de medida. Não é necessário discutir com ninguém.",
    "sourceIds": [
      "procon_precos",
      "procon_consumidor"
    ],
    "questions": [
      {
        "prompt": "Quando há dois preços anunciados para o mesmo produto, em regra vale...",
        "options": [
          "O menor preço anunciado",
          "O preço escolhido por sorteio",
          "O valor que o cliente inventar"
        ],
        "correct": 0,
        "why": "Os órgãos de defesa do consumidor orientam aplicar o menor preço anunciado para o mesmo item.",
        "sourceId": "procon_precos"
      },
      {
        "prompt": "Antes de reclamar, vale verificar...",
        "options": [
          "A cor da sacola",
          "Se é o mesmo produto e a mesma oferta",
          "O nome do gerente"
        ],
        "correct": 1,
        "why": "Itens de tamanhos ou variedades diferentes podem ter preços diferentes.",
        "sourceId": "procon_precos"
      },
      {
        "prompt": "Se a loja não corrigir, qual atitude é mais útil?",
        "options": [
          "Destruir a etiqueta",
          "Publicar uma acusação sem provas",
          "Guardar evidências e procurar o Procon"
        ],
        "correct": 2,
        "why": "Fotos da oferta e comprovante ajudam uma reclamação objetiva.",
        "sourceId": "procon_consumidor"
      }
    ]
  },
  {
    "id": "direito-cobranca",
    "number": 13,
    "icon": "📞",
    "category": "Direitos do consumidor",
    "minutes": 4,
    "title": "Podem me humilhar para cobrar uma dívida?",
    "subtitle": "Entenda os limites legais da cobrança.",
    "intro": "Uma dívida pode ser cobrada, mas o Código de Defesa do Consumidor proíbe expor o devedor ao ridículo, constrangimento ou ameaça na cobrança de débitos de consumo.",
    "facts": [
      {
        "title": "Cobrar não é humilhar",
        "text": "A empresa pode informar a existência da dívida e buscar o pagamento por meios permitidos."
      },
      {
        "title": "Ameaça e exposição não",
        "text": "O art. 42 proíbe cobrança que exponha a pessoa ao ridículo, provoque constrangimento ou ameaça."
      },
      {
        "title": "Registre o ocorrido",
        "text": "Guarde mensagens, datas, horários e outros elementos que ajudem a descrever como a cobrança aconteceu."
      }
    ],
    "example": "Uma empresa liga cobrando uma dívida: isso pode ser legítimo. Já ameaçar publicamente a pessoa por causa da dívida pode violar a lei.",
    "mission": "Leia o art. 42 do Código de Defesa do Consumidor e identifique a diferença entre cobrança e intimidação.",
    "sourceIds": [
      "cdc_lei"
    ],
    "questions": [
      {
        "prompt": "A empresa pode cobrar uma dívida real?",
        "options": [
          "Nunca",
          "Sim, por meios permitidos",
          "Somente com autorização de vizinhos"
        ],
        "correct": 1,
        "why": "O direito de cobrar existe, mas não permite qualquer conduta.",
        "sourceId": "cdc_lei"
      },
      {
        "prompt": "O CDC proíbe na cobrança...",
        "options": [
          "Constrangimento e ameaça",
          "Informar o valor devido",
          "Indicar um canal de pagamento"
        ],
        "correct": 0,
        "why": "O art. 42 protege a pessoa contra exposição vexatória e ameaças.",
        "sourceId": "cdc_lei"
      },
      {
        "prompt": "Que atitude ajuda se a cobrança for abusiva?",
        "options": [
          "Apagar todas as mensagens",
          "Divulgar dados pessoais",
          "Guardar registros e procurar orientação"
        ],
        "correct": 2,
        "why": "Documentar o fato facilita uma eventual reclamação.",
        "sourceId": "cdc_lei"
      }
    ]
  },
  {
    "id": "direito-orcamento",
    "number": 14,
    "icon": "🛠️",
    "category": "Direitos do consumidor",
    "minutes": 4,
    "title": "O conserto ficou mais caro do nada?",
    "subtitle": "Conheça o orçamento prévio para serviços.",
    "intro": "Em relações de consumo, o Código de Defesa do Consumidor prevê que o fornecedor entregue orçamento prévio discriminado para a execução de serviços, com as condições exigidas pela lei.",
    "facts": [
      {
        "title": "Antes de começar",
        "text": "O orçamento prévio deve indicar, entre outros itens, mão de obra, materiais, equipamentos e condições de pagamento."
      },
      {
        "title": "Prazo do orçamento",
        "text": "Salvo ajuste diferente, o orçamento tem validade de 10 dias após ser recebido pelo consumidor."
      },
      {
        "title": "Mudanças exigem acordo",
        "text": "Depois de aprovado, o orçamento vincula as partes; alterações dependem de negociação livre entre elas."
      }
    ],
    "example": "Uma pessoa leva um eletrodoméstico para conserto. Antes do serviço, pede o orçamento discriminado. Se o custo aumentar, a oficina deve negociar a mudança, não apenas surpreender na cobrança.",
    "mission": "Procure no Código de Defesa do Consumidor o artigo 40 e conte a alguém por que guardar o orçamento é útil.",
    "sourceIds": [
      "cdc_lei"
    ],
    "questions": [
      {
        "prompt": "Qual documento é útil antes de contratar um conserto?",
        "options": [
          "Orçamento prévio discriminado",
          "Propaganda sem preço",
          "Somente um bilhete ilegível"
        ],
        "correct": 0,
        "why": "O art. 40 prevê orçamento prévio para serviços em relações de consumo.",
        "sourceId": "cdc_lei"
      },
      {
        "prompt": "Em regra, quanto tempo vale o orçamento sem ajuste diferente?",
        "options": [
          "Um dia",
          "10 dias",
          "Cinco anos"
        ],
        "correct": 1,
        "why": "A lei prevê 10 dias, salvo estipulação em contrário.",
        "sourceId": "cdc_lei"
      },
      {
        "prompt": "Após a aprovação, uma alteração de preço deve...",
        "options": [
          "Ser escondida",
          "Ser imposta sem conversa",
          "Ser livremente negociada"
        ],
        "correct": 2,
        "why": "O orçamento aprovado vincula as partes; alterações dependem de negociação.",
        "sourceId": "cdc_lei"
      }
    ]
  },
  {
    "id": "direito-prioridade",
    "number": 15,
    "icon": "👵",
    "category": "Direitos da pessoa idosa",
    "minutes": 4,
    "title": "Pessoa com 80 anos tem prioridade especial?",
    "subtitle": "Saiba como funciona a proteção adicional.",
    "intro": "O Estatuto da Pessoa Idosa garante atendimento prioritário a pessoas idosas e assegura prioridade especial às maiores de 80 anos em relação às demais pessoas idosas, nos termos da lei.",
    "facts": [
      {
        "title": "Prioridade para pessoas idosas",
        "text": "O Estatuto prevê atendimento prioritário para quem tem 60 anos ou mais, nas condições legais."
      },
      {
        "title": "Prioridade especial",
        "text": "Entre pessoas idosas, quem tem mais de 80 anos recebe preferência especial. Em saúde, situações de emergência devem ser consideradas."
      },
      {
        "title": "Respeito e acolhimento",
        "text": "A aplicação das prioridades não elimina a necessidade de avaliação profissional de urgência ou outras prioridades legais."
      }
    ],
    "example": "Numa fila de atendimento, uma pessoa de 82 anos pode ter preferência especial sobre outra de 67. Num pronto atendimento, casos de emergência seguem critérios clínicos.",
    "mission": "Leia o art. 3º do Estatuto da Pessoa Idosa e observe como os locais sinalizam atendimento prioritário.",
    "sourceIds": [
      "estatuto_idoso"
    ],
    "questions": [
      {
        "prompt": "Quem recebe prioridade especial entre pessoas idosas?",
        "options": [
          "Somente quem tem 60 anos",
          "Pessoas com mais de 80 anos",
          "Qualquer pessoa que peça"
        ],
        "correct": 1,
        "why": "O Estatuto prevê preferência especial às pessoas maiores de 80 anos.",
        "sourceId": "estatuto_idoso"
      },
      {
        "prompt": "Em atendimento de saúde, a preferência especial elimina a urgência clínica?",
        "options": [
          "Não",
          "Sim, sempre",
          "Depende da cor do cartão"
        ],
        "correct": 0,
        "why": "A lei ressalva emergências, e o atendimento de saúde observa prioridades clínicas.",
        "sourceId": "estatuto_idoso"
      },
      {
        "prompt": "Qual é a fonte legal dessa prioridade?",
        "options": [
          "Uma corrente de mensagens",
          "Uma propaganda",
          "Estatuto da Pessoa Idosa"
        ],
        "correct": 2,
        "why": "A previsão está no Estatuto da Pessoa Idosa.",
        "sourceId": "estatuto_idoso"
      }
    ]
  },
  {
    "id": "direito-viagem",
    "number": 16,
    "icon": "🚌",
    "category": "Direitos da pessoa idosa",
    "minutes": 4,
    "title": "Passagem interestadual grátis para idosos?",
    "subtitle": "Conheça os requisitos e os limites.",
    "intro": "No transporte rodoviário interestadual convencional, pessoas com 60 anos ou mais e renda individual de até dois salários mínimos podem ter direito às vagas gratuitas reservadas ou a desconto mínimo de 50% quando elas estiverem ocupadas, seguindo as regras do serviço.",
    "facts": [
      {
        "title": "Quem pode pedir",
        "text": "Pessoas com 60 anos ou mais e renda igual ou inferior a dois salários mínimos, observada a documentação exigida."
      },
      {
        "title": "Duas vagas gratuitas",
        "text": "Há reserva de duas vagas gratuitas por veículo do serviço convencional, sujeitas às regras de solicitação."
      },
      {
        "title": "Se não houver vaga",
        "text": "Quando as vagas gratuitas estiverem ocupadas, há previsão de desconto de pelo menos 50% para beneficiários que atendam aos critérios."
      }
    ],
    "example": "Uma senhora de 68 anos, com renda de um salário mínimo, quer visitar familiares em outro estado. Ela deve verificar as regras e a disponibilidade do serviço convencional antes de viajar.",
    "mission": "Acesse a página oficial da ANTT e confira quais documentos e procedimentos são exigidos para o benefício.",
    "sourceIds": [
      "estatuto_idoso",
      "antt_viajante",
      "gov_carteira_idosa"
    ],
    "questions": [
      {
        "prompt": "O benefício tratado na aula é para viagens...",
        "options": [
          "Interestaduais, nos serviços abrangidos pelas regras",
          "Internacionais de avião, sempre",
          "De aplicativo, em toda cidade"
        ],
        "correct": 0,
        "why": "O direito se refere ao transporte coletivo interestadual nas condições previstas.",
        "sourceId": "antt_viajante"
      },
      {
        "prompt": "Além de 60 anos ou mais, a pessoa deve cumprir qual critério?",
        "options": [
          "Ter uma conta em rede social",
          "Ter renda até dois salários mínimos",
          "Ter carteira de motorista"
        ],
        "correct": 1,
        "why": "A legislação exige renda igual ou inferior a dois salários mínimos.",
        "sourceId": "estatuto_idoso"
      },
      {
        "prompt": "Se as duas vagas gratuitas estiverem ocupadas, o beneficiário pode ter...",
        "options": [
          "Uma viagem internacional grátis",
          "Uma passagem sem regras",
          "Desconto de no mínimo 50%, nas condições legais"
        ],
        "correct": 2,
        "why": "O Estatuto prevê desconto mínimo de 50% para quem cumpre os requisitos.",
        "sourceId": "estatuto_idoso"
      }
    ]
  },
  {
    "id": "direito-acompanhante",
    "number": 17,
    "icon": "🤝",
    "category": "Direitos da pessoa idosa",
    "minutes": 4,
    "title": "Idoso internado pode ter acompanhante?",
    "subtitle": "Entenda o que diz o Estatuto.",
    "intro": "O Estatuto da Pessoa Idosa assegura à pessoa idosa internada ou em observação o direito a acompanhante, com condições adequadas para permanência em tempo integral, segundo critério médico.",
    "facts": [
      {
        "title": "Quem tem esse direito",
        "text": "Pessoas com 60 anos ou mais internadas ou em observação, conforme as condições da lei."
      },
      {
        "title": "Condições adequadas",
        "text": "O serviço de saúde deve proporcionar condições apropriadas para a permanência do acompanhante."
      },
      {
        "title": "Critério médico",
        "text": "A permanência observa critério médico; se houver restrição, é adequado pedir explicação ao serviço."
      }
    ],
    "example": "Uma pessoa de 73 anos precisa ficar em observação no hospital. Um familiar pode perguntar sobre a aplicação do direito a acompanhante e os critérios médicos envolvidos.",
    "mission": "Localize o art. 16 do Estatuto da Pessoa Idosa e veja o que a lei diz sobre acompanhante.",
    "sourceIds": [
      "estatuto_idoso"
    ],
    "questions": [
      {
        "prompt": "O Estatuto prevê direito a acompanhante para a pessoa idosa...",
        "options": [
          "Apenas durante compras",
          "Internada ou em observação",
          "Somente em viagens"
        ],
        "correct": 1,
        "why": "O art. 16 trata de pessoa idosa internada ou em observação.",
        "sourceId": "estatuto_idoso"
      },
      {
        "prompt": "A permanência em tempo integral observa...",
        "options": [
          "Critério médico",
          "Votação na internet",
          "Preferência do caixa"
        ],
        "correct": 0,
        "why": "A lei menciona o critério médico para o acompanhamento.",
        "sourceId": "estatuto_idoso"
      },
      {
        "prompt": "Diante de restrição, qual é uma boa atitude?",
        "options": [
          "Ignorar os profissionais",
          "Divulgar os dados do paciente",
          "Solicitar explicação à equipe responsável"
        ],
        "correct": 2,
        "why": "Pedir esclarecimentos permite compreender o motivo e os procedimentos do serviço.",
        "sourceId": "estatuto_idoso"
      }
    ]
  },
  {
    "id": "direito-saude",
    "number": 18,
    "icon": "🩺",
    "category": "Saúde e atendimento",
    "minutes": 4,
    "title": "Posso pedir que expliquem meu tratamento?",
    "subtitle": "Conheça o direito à informação e ao respeito.",
    "intro": "A Carta de Direitos e Deveres dos Usuários da Saúde reforça o direito a atendimento humanizado e informações compreensíveis sobre o cuidado, respeitando a pessoa e seus valores.",
    "facts": [
      {
        "title": "Explicação compreensível",
        "text": "Você pode perguntar o motivo de um exame ou procedimento e pedir informações em linguagem clara."
      },
      {
        "title": "Atendimento humanizado",
        "text": "A Carta destaca respeito, acolhimento e atendimento sem discriminação."
      },
      {
        "title": "Também temos deveres",
        "text": "Seguir orientações, comunicar informações relevantes e respeitar a equipe contribui para o cuidado."
      }
    ],
    "example": "Se alguém não entende por que recebeu um pedido de exame, pode pedir que a equipe explique novamente, sem precisar fingir que entendeu.",
    "mission": "Visite a página do Ministério da Saúde e leia os direitos e deveres dos usuários do SUS.",
    "sourceIds": [
      "saude_carta",
      "saude_direitos"
    ],
    "questions": [
      {
        "prompt": "Ao não entender uma orientação de saúde, você pode...",
        "options": [
          "Pedir explicação em linguagem clara",
          "Fingir que entendeu",
          "Exigir um diagnóstico por rede social"
        ],
        "correct": 0,
        "why": "Informação compreensível faz parte do atendimento respeitoso.",
        "sourceId": "saude_direitos"
      },
      {
        "prompt": "Um atendimento humanizado deve...",
        "options": [
          "Ignorar dúvidas",
          "Respeitar a pessoa e seus valores",
          "Tratar mal quem pergunta"
        ],
        "correct": 1,
        "why": "Respeito e acolhimento aparecem nos princípios da Carta.",
        "sourceId": "saude_carta"
      },
      {
        "prompt": "Qual atitude contribui para o cuidado?",
        "options": [
          "Esconder informações importantes",
          "Desrespeitar a equipe",
          "Comunicar informações relevantes e tirar dúvidas"
        ],
        "correct": 2,
        "why": "O cuidado envolve direitos e responsabilidades da pessoa usuária.",
        "sourceId": "saude_direitos"
      }
    ]
  }
]);
  Object.assign(extra.easy, {
  "direito-arrependimento": {
    "summary": "Comprou pela internet e mudou de ideia? Em muitas compras feitas fora da loja, você tem 7 dias para desistir, mesmo sem defeito.",
    "comparison": "Comprou uma luminária pela internet. Ela chegou, mas você não quer mais. Veja o prazo e peça devolução pelo canal da loja.",
    "scenes": [
      [
        "📱",
        "Uma pessoa compra um produto pela internet."
      ],
      [
        "📦",
        "O produto chega e ela muda de ideia."
      ],
      [
        "📝",
        "Ela pede cancelamento dentro do prazo legal."
      ],
      [
        "✅",
        "A loja deve seguir as regras de devolução."
      ]
    ]
  },
  "direito-precos": {
    "summary": "A etiqueta diz um preço e o caixa cobra mais? Para o mesmo produto e a mesma oferta, a orientação é aplicar o menor preço anunciado.",
    "comparison": "A prateleira marca R$ 16, o caixa marca R$ 20. Primeiro confira se é o mesmo pacote. Depois peça para verificar a etiqueta.",
    "scenes": [
      [
        "🏷️",
        "Uma pessoa vê o preço da etiqueta."
      ],
      [
        "🧾",
        "No caixa aparece outro valor."
      ],
      [
        "🔍",
        "Ela confere se é o mesmo item."
      ],
      [
        "🤝",
        "Pede correção e guarda prova da oferta."
      ]
    ]
  },
  "direito-cobranca": {
    "summary": "Ter uma dívida não dá a uma empresa o direito de humilhar ou ameaçar você durante a cobrança.",
    "comparison": "A empresa pode lembrar que você deve. O que não pode é ameaçar ou expor você ao ridículo para cobrar.",
    "scenes": [
      [
        "📞",
        "Uma pessoa recebe ligação de cobrança."
      ],
      [
        "🛑",
        "A empresa não pode humilhar nem ameaçar."
      ],
      [
        "📄",
        "A pessoa guarda as mensagens recebidas."
      ],
      [
        "🔎",
        "Se preciso, procura orientação e registra reclamação."
      ]
    ]
  },
  "direito-orcamento": {
    "summary": "Antes de fazer um conserto, peça um orçamento com os custos. Se a oficina quiser cobrar mais depois da aprovação, precisa negociar a mudança.",
    "comparison": "É como combinar quanto vai custar arrumar a geladeira antes de autorizar o trabalho. Um preço surpresa não deve surgir do nada.",
    "scenes": [
      [
        "🔧",
        "Uma pessoa leva um aparelho para consertar."
      ],
      [
        "📝",
        "Pede orçamento com os valores."
      ],
      [
        "✅",
        "Autoriza o serviço com as condições."
      ],
      [
        "🤝",
        "Mudanças no preço precisam ser combinadas."
      ]
    ]
  },
  "direito-prioridade": {
    "summary": "Pessoas idosas têm prioridade prevista em lei. Entre elas, quem tem mais de 80 anos conta com prioridade especial.",
    "comparison": "Duas pessoas idosas aguardam atendimento: uma de 67 e outra de 84. A de 84 tem preferência especial, com atenção a emergências de saúde.",
    "scenes": [
      [
        "👴",
        "Pessoas idosas chegam ao atendimento."
      ],
      [
        "👵",
        "Alguém tem mais de 80 anos."
      ],
      [
        "⭐",
        "A lei prevê preferência especial."
      ],
      [
        "🏥",
        "Numa emergência médica, vale a urgência clínica."
      ]
    ]
  },
  "direito-viagem": {
    "summary": "Tem 60 anos ou mais e renda de até 2 salários mínimos? No ônibus interestadual convencional, você pode ter vaga grátis ou desconto nas regras do benefício.",
    "comparison": "Dona Ana quer visitar um filho em outro estado. Antes de comprar, ela confere documentos, disponibilidade e regras da ANTT.",
    "comic": "assets/quadrinhos-viagem-",
    "scenes": [
      [
        "🧳",
        "Dona Ana reúne documentos e planeja a viagem."
      ],
      [
        "🪪",
        "No guichê, ela pergunta sobre o benefício."
      ],
      [
        "🎫",
        "A atendente confere as condições e vagas."
      ],
      [
        "🚌",
        "Com passagem regular, ela embarca."
      ]
    ]
  },
  "direito-acompanhante": {
    "summary": "Uma pessoa idosa internada ou em observação tem direito a acompanhante conforme a lei e o critério médico.",
    "comparison": "Seu avô fica em observação. A família pode pedir orientação ao hospital sobre a permanência de um acompanhante.",
    "scenes": [
      [
        "🏥",
        "Uma pessoa idosa fica em observação."
      ],
      [
        "👨‍👩‍👧",
        "A família pede informação sobre acompanhante."
      ],
      [
        "🩺",
        "A equipe explica o critério médico."
      ],
      [
        "🤝",
        "O serviço orienta as condições de permanência."
      ]
    ]
  },
  "direito-saude": {
    "summary": "Não entendeu um exame ou tratamento? Você pode pedir explicações em palavras fáceis. Respeito no atendimento é um direito.",
    "comparison": "O profissional falou algo difícil. Você pode dizer: “Por favor, explique de outro jeito. Quero entender o que vai acontecer”.",
    "scenes": [
      [
        "🩺",
        "O profissional explica uma orientação."
      ],
      [
        "❓",
        "A pessoa fica com dúvida."
      ],
      [
        "💬",
        "Ela pede uma explicação mais simples."
      ],
      [
        "💚",
        "A equipe esclarece de forma respeitosa."
      ]
    ]
  }
});
  Object.assign(extra.glossary, {
  "direito de arrependimento": {
    "definition": "Direito de desistir de certas contratações feitas fora do estabelecimento, como compras pela internet, dentro do prazo legal.",
    "sourceId": "cdc_lei",
    "forms": [
      "direito de arrependimento",
      "arrependimento"
    ]
  },
  "procon": {
    "definition": "Órgão de proteção e defesa do consumidor. Pode orientar e receber reclamações sobre problemas de consumo.",
    "sourceId": "procon_consumidor",
    "forms": [
      "Procon",
      "Procons"
    ]
  },
  "constrangimento": {
    "definition": "Situação de pressão, humilhação ou exposição que provoca vergonha ou desconforto. Numa cobrança, a lei proíbe condutas abusivas.",
    "sourceId": "cdc_lei",
    "forms": [
      "constrangimento",
      "constranger"
    ]
  },
  "orçamento prévio": {
    "definition": "Estimativa de custo apresentada antes de um serviço, com informações sobre materiais, mão de obra e condições.",
    "sourceId": "cdc_lei",
    "forms": [
      "orçamento prévio",
      "orçamento discriminado"
    ]
  },
  "pessoa idosa": {
    "definition": "Para o Estatuto da Pessoa Idosa, é a pessoa com 60 anos ou mais.",
    "sourceId": "estatuto_idoso",
    "forms": [
      "pessoa idosa",
      "pessoas idosas"
    ]
  },
  "prioridade especial": {
    "definition": "Preferência adicional que a lei dá às pessoas com mais de 80 anos em relação às demais pessoas idosas, com ressalvas como emergências médicas.",
    "sourceId": "estatuto_idoso",
    "forms": [
      "prioridade especial",
      "preferência especial"
    ]
  },
  "interestadual": {
    "definition": "Que liga estados diferentes do Brasil. Uma viagem de Santa Catarina ao Paraná é interestadual.",
    "sourceId": "antt_viajante",
    "forms": [
      "interestadual",
      "interestaduais"
    ]
  },
  "salário mínimo": {
    "definition": "Valor mínimo legal de remuneração de referência no país. Alguns benefícios usam múltiplos desse valor como critério.",
    "sourceId": "gov_carteira_idosa",
    "forms": [
      "salário mínimo",
      "salários mínimos"
    ]
  },
  "critério médico": {
    "definition": "Avaliação feita por profissionais de saúde com base na situação clínica e nas regras aplicáveis.",
    "sourceId": "estatuto_idoso",
    "forms": [
      "critério médico",
      "critérios médicos"
    ]
  },
  "atendimento humanizado": {
    "definition": "Atendimento com respeito, acolhimento e consideração pelas necessidades e dignidade da pessoa.",
    "sourceId": "saude_carta",
    "forms": [
      "atendimento humanizado"
    ]
  },
  "código de defesa do consumidor": {
    "definition": "Lei brasileira que protege os direitos de consumidores na compra de produtos e contratação de serviços.",
    "sourceId": "cdc_lei",
    "forms": [
      "Código de Defesa do Consumidor",
      "CDC"
    ]
  },
  "prestação de serviço": {
    "definition": "Trabalho oferecido por alguém ou empresa a um consumidor, como consertar um aparelho.",
    "sourceId": "cdc_lei",
    "forms": [
      "prestação de serviços",
      "prestação de serviço"
    ]
  }
});
  data.updatedAt='21/10/2026';
})();
