/* Cívica v0.4.0-alpha — Direitos para Todos.
   Aulas educativas baseadas em legislação brasileira; não constituem aconselhamento jurídico ou médico.
   Revisão das fontes: 21/10/2026. */
(()=>{'use strict';
const data=window.CIVICA_CONTENT;const extra=window.CIVICA_EXTRAS;
Object.assign(data.sources,{
  "mulher_acompanhante": {
    "agency": "Planalto — legislação federal",
    "title": "Lei 14.737/2023 — acompanhamento da mulher em serviços de saúde",
    "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14737.htm"
  },
  "clt_licenca": {
    "agency": "Presidência da República",
    "title": "Consolidação das Leis do Trabalho — art. 392 e seguintes",
    "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
  },
  "lei_parto": {
    "agency": "Planalto — legislação federal",
    "title": "Lei 11.108/2005 — acompanhante no parto no SUS",
    "url": "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11108.htm"
  },
  "ligue_180": {
    "agency": "Ministério das Mulheres",
    "title": "Central de Atendimento à Mulher — Ligue 180",
    "url": "https://www.gov.br/mulheres/pt-br/ligue180"
  },
  "eca": {
    "agency": "Presidência da República",
    "title": "Estatuto da Criança e do Adolescente — Lei 8.069/1990",
    "url": "https://www.planalto.gov.br/ccivil_03/leis/l8069compilado.htm"
  },
  "disque100": {
    "agency": "Ministério dos Direitos Humanos e da Cidadania",
    "title": "Denunciar violação de direitos humanos — Disque 100",
    "url": "https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos"
  },
  "idoso": {
    "agency": "Presidência da República",
    "title": "Estatuto da Pessoa Idosa — Lei 10.741/2003",
    "url": "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741compilado.htm"
  },
  "rede_mulher": {
    "agency": "Ministério das Mulheres",
    "title": "Programa Mulher Viver sem Violência e rede de atendimento",
    "url": "https://www.gov.br/mulheres/pt-br/acesso-a-informacao/acoes-e-programas/programa-mulher-viver-sem-violencia"
  }
});
data.lessons.push(...[
  {
    "number": 19,
    "id": "mulher-acompanhante",
    "icon": "👩‍⚕️",
    "category": "Direitos das mulheres",
    "minutes": 5,
    "title": "Posso levar alguém comigo ao médico?",
    "subtitle": "Acompanhante escolhido pela mulher em consultas e exames.",
    "intro": "A Lei 14.737/2023 garante à mulher o direito de estar acompanhada por pessoa maior de idade de sua escolha durante consultas, exames e procedimentos em serviços públicos e privados de saúde. Há regras especiais em situações como sedação, centro cirúrgico e UTI.",
    "facts": [
      {
        "title": "Escolha da mulher",
        "text": "Em regra, a acompanhante ou o acompanhante é indicado pela paciente, sem necessidade de aviso prévio."
      },
      {
        "title": "Vale também fora do SUS",
        "text": "O direito abrange serviços de saúde públicos e privados."
      },
      {
        "title": "Há situações especiais",
        "text": "Em sedação, centro cirúrgico, UTI e urgências podem existir condições e exceções previstas na lei. Consulte o texto oficial para compreender cada caso."
      }
    ],
    "example": "Marta vai à clínica para uma consulta e deseja levar a filha adulta. Em regra, a presença da filha é um direito de Marta, não uma gentileza da clínica.",
    "mission": "Abra a Lei 14.737/2023 e localize as expressões “consultas”, “exames” e “procedimentos”. Não compartilhe dados médicos pessoais.",
    "sourceIds": [
      "mulher_acompanhante"
    ],
    "questions": [
      {
        "prompt": "Em regra, uma mulher pode ter acompanhante durante uma consulta médica?",
        "options": [
          "Sim, pessoa maior de idade escolhida por ela",
          "Somente com autorização de um político",
          "Apenas se estiver internada"
        ],
        "correct": 0,
        "why": "A lei prevê acompanhante escolhido pela paciente em consultas, exames e procedimentos.",
        "sourceId": "mulher_acompanhante"
      },
      {
        "prompt": "Essa regra vale apenas para atendimentos pelo SUS?",
        "options": [
          "Sim, apenas para hospitais do governo",
          "Não, também para serviços privados",
          "Apenas em ambulâncias"
        ],
        "correct": 1,
        "why": "A proteção alcança unidades de saúde públicas e privadas.",
        "sourceId": "mulher_acompanhante"
      },
      {
        "prompt": "Se o atendimento envolver sedação ou centro cirúrgico, o que fazer?",
        "options": [
          "Ignorar todas as regras de segurança",
          "Afirmar que não existe direito algum",
          "Verificar as regras específicas previstas na lei"
        ],
        "correct": 2,
        "why": "A lei estabelece requisitos e exceções para determinadas situações.",
        "sourceId": "mulher_acompanhante"
      }
    ]
  },
  {
    "number": 20,
    "id": "mulher-licenca",
    "icon": "🤱",
    "category": "Direitos das mulheres",
    "minutes": 5,
    "title": "Licença-maternidade: como funciona?",
    "subtitle": "Conheça a regra geral para trabalhadoras empregadas.",
    "intro": "A Consolidação das Leis do Trabalho prevê, no art. 392, licença-maternidade de 120 dias para a empregada gestante, sem prejuízo do emprego e do salário. Outras modalidades de trabalho e benefícios seguem regras próprias; alguns casos têm extensões ou condições específicas.",
    "facts": [
      {
        "title": "Regra geral: 120 dias",
        "text": "O artigo 392 da CLT estabelece 120 dias para a empregada gestante."
      },
      {
        "title": "Comunicação do afastamento",
        "text": "Há regras sobre quando o afastamento pode começar e como informar o empregador mediante atestado."
      },
      {
        "title": "Nem toda situação é igual",
        "text": "Adoção, trabalho autônomo, vínculos públicos, benefícios previdenciários e situações especiais exigem verificar a regra adequada."
      }
    ],
    "example": "Joana trabalha com carteira assinada e está grávida. Ela procura o setor de pessoal para entender o início de sua licença e conferir os documentos exigidos.",
    "mission": "Leia o início do art. 392 da CLT e procure a expressão “120 dias”.",
    "sourceIds": [
      "clt_licenca"
    ],
    "questions": [
      {
        "prompt": "Qual é a duração geral prevista na CLT para a licença-maternidade da empregada gestante?",
        "options": [
          "30 dias",
          "120 dias",
          "365 dias"
        ],
        "correct": 1,
        "why": "O art. 392 da CLT prevê 120 dias, observadas as regras e situações especiais.",
        "sourceId": "clt_licenca"
      },
      {
        "prompt": "Todas as situações de maternidade seguem exatamente as mesmas regras?",
        "options": [
          "Não; vínculo e situação precisam ser considerados",
          "Sim, sem nenhuma exceção",
          "Apenas a idade define o direito"
        ],
        "correct": 0,
        "why": "Existem regimes e hipóteses específicas, inclusive adoção e trabalho fora da CLT.",
        "sourceId": "clt_licenca"
      },
      {
        "prompt": "O que ajuda a verificar a licença no emprego formal?",
        "options": [
          "Apenas mensagens de redes sociais",
          "Ignorar documentos oficiais",
          "Consultar a CLT e pedir orientação ao RH ou órgão competente"
        ],
        "correct": 2,
        "why": "A lei e a orientação do setor responsável ajudam a confirmar o procedimento.",
        "sourceId": "clt_licenca"
      }
    ]
  },
  {
    "number": 21,
    "id": "mulher-parto",
    "icon": "🍼",
    "category": "Direitos das mulheres",
    "minutes": 5,
    "title": "Posso ter acompanhante durante o parto?",
    "subtitle": "O direito de apoio durante o parto no SUS.",
    "intro": "A Lei 11.108/2005 garante às parturientes atendidas pelo SUS, na rede própria ou conveniada, o direito à presença de uma pessoa acompanhante indicada por elas durante o trabalho de parto, o parto e o pós-parto imediato. Outras proteções à mulher em serviços de saúde também se aplicam conforme a lei.",
    "facts": [
      {
        "title": "Quem escolhe",
        "text": "A pessoa que dá à luz escolhe seu acompanhante conforme a lei."
      },
      {
        "title": "Momentos protegidos",
        "text": "A proteção abrange trabalho de parto, parto e pós-parto imediato nos serviços indicados na Lei 11.108/2005."
      },
      {
        "title": "Confira o serviço",
        "text": "Se surgir dúvida, peça à unidade que explique as regras e procure a ouvidoria de saúde competente."
      }
    ],
    "example": "Antes da chegada do bebê, Renata pergunta ao hospital como informar quem a acompanhará durante o parto.",
    "mission": "Abra a Lei 11.108/2005 e veja quais três momentos do atendimento ela menciona.",
    "sourceIds": [
      "lei_parto",
      "mulher_acompanhante"
    ],
    "questions": [
      {
        "prompt": "No âmbito do SUS, quem indica o acompanhante da pessoa que está dando à luz?",
        "options": [
          "A própria parturiente",
          "Um deputado",
          "Somente a direção do hospital"
        ],
        "correct": 0,
        "why": "A escolha é da parturiente, conforme a Lei 11.108/2005.",
        "sourceId": "lei_parto"
      },
      {
        "prompt": "A Lei 11.108 protege a presença de acompanhante em qual período?",
        "options": [
          "Só depois da alta",
          "Trabalho de parto, parto e pós-parto imediato",
          "Apenas consultas odontológicas"
        ],
        "correct": 1,
        "why": "A norma menciona os três períodos.",
        "sourceId": "lei_parto"
      },
      {
        "prompt": "Se houver dúvida sobre as regras, o que é mais adequado?",
        "options": [
          "Desistir sem perguntar",
          "Divulgar dados médicos de terceiros",
          "Pedir esclarecimento à unidade e consultar a fonte oficial"
        ],
        "correct": 2,
        "why": "O atendimento pode explicar as condições aplicáveis.",
        "sourceId": "lei_parto"
      }
    ]
  },
  {
    "number": 22,
    "id": "mulher-protecao",
    "icon": "🛡️",
    "category": "Direitos das mulheres",
    "minutes": 5,
    "title": "Onde buscar ajuda em caso de violência?",
    "subtitle": "Conheça o Ligue 180 e os canais para situações de risco.",
    "intro": "A Central de Atendimento à Mulher — Ligue 180 — presta orientações sobre direitos e serviços, recebe denúncias e encaminha manifestações para os órgãos responsáveis. É gratuita e funciona 24 horas por dia. Em situação de emergência ou risco imediato, a orientação oficial é acionar a Polícia Militar pelo 190.",
    "facts": [
      {
        "title": "Orientação e encaminhamento",
        "text": "O 180 pode informar serviços como Delegacia da Mulher, Defensoria Pública, centro de referência e Casa da Mulher Brasileira."
      },
      {
        "title": "Emergência tem outro canal",
        "text": "Em perigo imediato, o canal recomendado é 190. O 180 não substitui o atendimento emergencial."
      },
      {
        "title": "Privacidade e segurança",
        "text": "Não envie relatos, nomes, endereços ou provas sensíveis à ouvidoria educativa do Cívica. Procure atendimento oficial em local seguro."
      }
    ],
    "example": "Uma pessoa quer ajudar uma conhecida e busca saber quais serviços existem na região. Ela pode consultar o 180 para orientação; em risco imediato, deve procurar ajuda emergencial.",
    "mission": "Abra a página oficial do Ligue 180 e identifique a diferença entre pedir orientação e pedir socorro emergencial.",
    "sourceIds": [
      "ligue_180",
      "rede_mulher"
    ],
    "questions": [
      {
        "prompt": "Para orientação sobre direitos e serviços de atendimento à mulher, qual é o canal federal?",
        "options": [
          "Ligue 180",
          "Cívica como central de denúncia",
          "Telefone de qualquer influenciador"
        ],
        "correct": 0,
        "why": "O Ligue 180 orienta, recebe relatos e encaminha aos serviços competentes.",
        "sourceId": "ligue_180"
      },
      {
        "prompt": "Em situação de perigo imediato, qual telefone a orientação oficial indica?",
        "options": [
          "180 apenas",
          "190",
          "Nenhum"
        ],
        "correct": 1,
        "why": "Em emergência, deve-se chamar a Polícia Militar pelo 190.",
        "sourceId": "ligue_180"
      },
      {
        "prompt": "Onde NÃO se deve enviar relato ou prova sensível de violência?",
        "options": [
          "Para o serviço oficial de proteção quando necessário",
          "A um profissional responsável e autorizado",
          "À ouvidoria educativa do Cívica"
        ],
        "correct": 2,
        "why": "A ouvidoria do aplicativo é para comentários e revisões de aulas, não para receber dados sensíveis.",
        "sourceId": "ligue_180"
      }
    ]
  },
  {
    "number": 23,
    "id": "crianca-escola",
    "icon": "🎒",
    "category": "Direitos das crianças",
    "minutes": 5,
    "title": "Toda criança tem direito à educação?",
    "subtitle": "Acesso, permanência e respeito na escola.",
    "intro": "O Estatuto da Criança e do Adolescente assegura direito à educação e estabelece garantias como igualdade de condições para acesso e permanência na escola, respeito por educadores e possibilidade de contestar critérios avaliativos. Existem responsabilidades da família e do Estado.",
    "facts": [
      {
        "title": "Acesso e permanência",
        "text": "O direito à educação envolve entrar e continuar na escola, com regras e apoio adequados."
      },
      {
        "title": "Respeito",
        "text": "Crianças e adolescentes devem receber tratamento digno no ambiente escolar."
      },
      {
        "title": "Como agir",
        "text": "Em caso de dificuldade de matrícula ou violação, comece pelo sistema de ensino ou secretaria de educação e, quando necessário, busque o Conselho Tutelar ou a Defensoria."
      }
    ],
    "example": "Uma família enfrenta dificuldade para matricular a criança na rede pública e procura a secretaria de educação para verificar opções e registrar a solicitação.",
    "mission": "Consulte o art. 53 do ECA e identifique uma garantia ligada à permanência na escola.",
    "sourceIds": [
      "eca"
    ],
    "questions": [
      {
        "prompt": "O direito à educação inclui apenas entrar na escola?",
        "options": [
          "Sim, só a matrícula",
          "Não, também há proteção à permanência e ao respeito",
          "Somente receber livros"
        ],
        "correct": 1,
        "why": "O art. 53 do ECA traz garantias de acesso, permanência e respeito.",
        "sourceId": "eca"
      },
      {
        "prompt": "Qual órgão costuma ser a primeira referência para questões de vagas na rede pública?",
        "options": [
          "A secretaria de educação ou rede de ensino",
          "Um artista famoso",
          "A ouvidoria do aplicativo Cívica"
        ],
        "correct": 0,
        "why": "A rede de ensino possui os canais de matrícula e orientação, podendo haver outros órgãos de proteção.",
        "sourceId": "eca"
      },
      {
        "prompt": "O que é correto sobre uma criança com dificuldade de matrícula?",
        "options": [
          "Ela perde automaticamente o direito",
          "Precisa pagar para ter direito",
          "É importante consultar as regras e os órgãos competentes"
        ],
        "correct": 2,
        "why": "O direito à educação deve orientar a busca de atendimento e proteção.",
        "sourceId": "eca"
      }
    ]
  },
  {
    "number": 24,
    "id": "crianca-protecao",
    "icon": "🧸",
    "category": "Direitos das crianças",
    "minutes": 5,
    "title": "Castigo físico é uma forma permitida de educar?",
    "subtitle": "O que o ECA diz sobre proteção e cuidado.",
    "intro": "O ECA prevê o direito da criança e do adolescente de serem educados e cuidados sem castigo físico ou tratamento cruel ou degradante. O Conselho Tutelar é órgão de proteção de direitos, não substitui automaticamente polícia ou juiz.",
    "facts": [
      {
        "title": "Direito ao respeito",
        "text": "Crianças não podem ser submetidas a tratamentos humilhantes, violentos ou degradantes como método educativo."
      },
      {
        "title": "Conselho Tutelar",
        "text": "Atua para zelar pelos direitos da criança e do adolescente e adotar ou encaminhar medidas previstas em lei."
      },
      {
        "title": "Onde buscar orientação",
        "text": "Casos de violação podem ser relatados ao Conselho Tutelar local ou Disque 100; emergência deve ser encaminhada ao atendimento imediato adequado."
      }
    ],
    "example": "Um vizinho percebe sinais preocupantes de maus-tratos. Em vez de publicar acusações nas redes, procura orientação nos canais de proteção.",
    "mission": "Leia no ECA os arts. 18-A e 131 e veja a diferença entre o direito ao cuidado e o papel do Conselho Tutelar.",
    "sourceIds": [
      "eca",
      "disque100"
    ],
    "questions": [
      {
        "prompt": "A lei permite usar castigo físico como método de educação?",
        "options": [
          "Sim, sempre",
          "Não; há direito ao cuidado sem castigo físico",
          "Só se a criança discordar dos pais"
        ],
        "correct": 1,
        "why": "O art. 18-A do ECA estabelece a proteção contra castigo físico e tratamento cruel ou degradante.",
        "sourceId": "eca"
      },
      {
        "prompt": "O Conselho Tutelar é...",
        "options": [
          "Um órgão de proteção aos direitos de crianças e adolescentes",
          "Um tribunal que dá sentenças penais",
          "Uma escola particular"
        ],
        "correct": 0,
        "why": "O ECA define o Conselho Tutelar como órgão autônomo não jurisdicional.",
        "sourceId": "eca"
      },
      {
        "prompt": "Ao suspeitar de violação de direitos, qual atitude é mais adequada?",
        "options": [
          "Postar dados pessoais da criança",
          "Ignorar qualquer sinal",
          "Procurar os canais oficiais de proteção"
        ],
        "correct": 2,
        "why": "O ECA e o Disque 100 orientam sobre proteção e encaminhamentos.",
        "sourceId": "disque100"
      }
    ]
  },
  {
    "number": 25,
    "id": "crianca-hospital",
    "icon": "🏥",
    "category": "Direitos das crianças",
    "minutes": 5,
    "title": "Criança internada pode ficar com responsável?",
    "subtitle": "Permanência durante internação e atendimento.",
    "intro": "O art. 12 do ECA determina que estabelecimentos de atendimento à saúde, inclusive unidades neonatais, terapia intensiva e cuidados intermediários, proporcionem condições para a permanência em tempo integral de um dos pais ou responsável nos casos de internação de criança ou adolescente.",
    "facts": [
      {
        "title": "Permanência de responsável",
        "text": "A lei estabelece condições para a permanência de um dos pais ou responsável em tempo integral durante a internação."
      },
      {
        "title": "Inclui unidades especiais",
        "text": "O artigo cita também unidades neonatais, terapia intensiva e cuidados intermediários."
      },
      {
        "title": "Segurança e informação",
        "text": "Pergunte à unidade sobre identificação, rotinas e regras de segurança para organizar a permanência de forma adequada."
      }
    ],
    "example": "Pedro é internado em um hospital. Sua mãe pergunta quais são os procedimentos para permanecer como acompanhante.",
    "mission": "Consulte o art. 12 do ECA e leia as situações de internação que ele abrange.",
    "sourceIds": [
      "eca"
    ],
    "questions": [
      {
        "prompt": "Durante internação de criança ou adolescente, o ECA prevê...",
        "options": [
          "Condições para um dos pais ou responsável permanecer",
          "Afastamento obrigatório da família",
          "Visitas apenas uma vez por mês"
        ],
        "correct": 0,
        "why": "O art. 12 assegura condições para a presença de um dos pais ou responsável em tempo integral.",
        "sourceId": "eca"
      },
      {
        "prompt": "O artigo menciona também unidade de terapia intensiva?",
        "options": [
          "Não",
          "Sim",
          "Somente ambulatório odontológico"
        ],
        "correct": 1,
        "why": "O texto abrange unidades neonatais, de terapia intensiva e intermediárias.",
        "sourceId": "eca"
      },
      {
        "prompt": "Se surgirem dúvidas sobre permanência, é útil...",
        "options": [
          "Ignorar todos os profissionais",
          "Publicar dados do paciente",
          "Solicitar à unidade as regras e a aplicação do direito"
        ],
        "correct": 2,
        "why": "Esclarecimentos da equipe e consulta à lei ajudam a exercer o direito.",
        "sourceId": "eca"
      }
    ]
  },
  {
    "number": 26,
    "id": "idoso-80",
    "icon": "👴",
    "category": "Direitos da pessoa idosa",
    "minutes": 5,
    "title": "A pessoa com mais de 80 anos tem prioridade especial?",
    "subtitle": "Como funciona a preferência entre pessoas idosas.",
    "intro": "O Estatuto da Pessoa Idosa define a pessoa idosa como aquela com 60 anos ou mais. Dentro desse grupo, quem tem mais de 80 anos possui prioridade especial sobre as demais pessoas idosas, com ressalvas como atendimentos de emergência em saúde.",
    "facts": [
      {
        "title": "A partir de 60 anos",
        "text": "Essa é a idade utilizada pelo Estatuto para definir pessoa idosa."
      },
      {
        "title": "Prioridade especial após 80",
        "text": "O Estatuto prevê preferência adicional para pessoas com mais de 80 anos em relação às demais pessoas idosas."
      },
      {
        "title": "Emergências seguem outra lógica",
        "text": "Nos serviços de saúde, situações de emergência justificam atendimento conforme necessidades clínicas."
      }
    ],
    "example": "Dois idosos chegam para atendimento: um de 65 anos e outro de 84. Há prioridade especial para o mais velho segundo a legislação, respeitadas as situações de emergência.",
    "mission": "Abra o Estatuto da Pessoa Idosa e localize a expressão “prioridade especial”.",
    "sourceIds": [
      "idoso"
    ],
    "questions": [
      {
        "prompt": "Em regra, o Estatuto considera pessoa idosa a partir de...",
        "options": [
          "40 anos",
          "60 anos",
          "90 anos"
        ],
        "correct": 1,
        "why": "A lei define pessoa idosa como quem tem 60 anos ou mais.",
        "sourceId": "idoso"
      },
      {
        "prompt": "Quem tem mais de 80 anos possui prioridade especial em relação...",
        "options": [
          "Às demais pessoas idosas",
          "Somente às crianças",
          "A todos em emergência médica, sem exceção"
        ],
        "correct": 0,
        "why": "A preferência adicional possui limites e não ignora situações de emergência.",
        "sourceId": "idoso"
      },
      {
        "prompt": "Num atendimento de saúde emergencial, o que prevalece?",
        "options": [
          "A ordem alfabética",
          "Somente a idade",
          "A avaliação da emergência e necessidade clínica"
        ],
        "correct": 2,
        "why": "A lei ressalva atendimento emergencial e o critério clínico.",
        "sourceId": "idoso"
      }
    ]
  },
  {
    "number": 27,
    "id": "idoso-decidir",
    "icon": "🧑‍⚕️",
    "category": "Direitos da pessoa idosa",
    "minutes": 5,
    "title": "Pessoa idosa pode opinar sobre o tratamento?",
    "subtitle": "Informação e autonomia no atendimento de saúde.",
    "intro": "O art. 17 do Estatuto da Pessoa Idosa assegura à pessoa idosa que esteja no domínio de suas faculdades mentais o direito de optar pelo tratamento de saúde que considerar mais favorável. Quando não puder decidir, a lei prevê outras formas de decisão conforme a situação.",
    "facts": [
      {
        "title": "Autonomia",
        "text": "Uma pessoa idosa com capacidade de decidir não perde sua voz só por causa da idade."
      },
      {
        "title": "Informação ajuda",
        "text": "Peça explicações compreensíveis sobre as opções, benefícios e riscos envolvidos."
      },
      {
        "title": "Quando não pode decidir",
        "text": "A lei possui regras para situações em que a pessoa idosa não está em condições de escolher. Consulte o texto e os profissionais responsáveis."
      }
    ],
    "example": "Dona Helena conversa com a médica, faz perguntas sobre opções e participa da escolha do tratamento.",
    "mission": "Leia o art. 17 do Estatuto da Pessoa Idosa e observe a condição para escolha do tratamento.",
    "sourceIds": [
      "idoso"
    ],
    "questions": [
      {
        "prompt": "Ter 75 anos tira automaticamente o direito de participar das decisões de saúde?",
        "options": [
          "Não",
          "Sim",
          "Depende do bairro"
        ],
        "correct": 0,
        "why": "A idade por si só não elimina o direito de decidir; o art. 17 trata dessa autonomia.",
        "sourceId": "idoso"
      },
      {
        "prompt": "O que ajuda uma decisão informada?",
        "options": [
          "Assinar sem ler",
          "Entender opções e fazer perguntas",
          "Deixar um desconhecido decidir sempre"
        ],
        "correct": 1,
        "why": "Informações claras são importantes para a escolha e consentimento.",
        "sourceId": "idoso"
      },
      {
        "prompt": "Quando a pessoa não consegue decidir, a lei...",
        "options": [
          "Ignora a situação",
          "Exige sorteio",
          "Prevê regras específicas para a decisão"
        ],
        "correct": 2,
        "why": "O Estatuto prevê hipóteses para decisões quando a pessoa não está em condições de optar.",
        "sourceId": "idoso"
      }
    ]
  },
  {
    "number": 28,
    "id": "idoso-protecao",
    "icon": "📞",
    "category": "Direitos da pessoa idosa",
    "minutes": 5,
    "title": "Como denunciar violência contra a pessoa idosa?",
    "subtitle": "Orientação e proteção com canais oficiais.",
    "intro": "O Estatuto da Pessoa Idosa protege contra negligência, discriminação, violência e crueldade. O Disque 100 é um serviço gratuito que recebe denúncias de violações de direitos humanos, incluindo pessoas idosas, 24 horas por dia. Qualquer pessoa pode procurar o canal para relatar suspeitas; em perigo imediato, procure atendimento emergencial.",
    "facts": [
      {
        "title": "Violência não é só física",
        "text": "Abandono, negligência, ameaças e outras violações também exigem atenção e encaminhamento adequado."
      },
      {
        "title": "Disque 100",
        "text": "Canal federal de orientação e denúncias que encaminha aos órgãos responsáveis."
      },
      {
        "title": "Segurança primeiro",
        "text": "Não exponha a vítima nas redes. Evite confronto perigoso; em emergência, procure polícia ou socorro imediato."
      }
    ],
    "example": "Um vizinho nota sinais de negligência contra uma pessoa idosa e busca orientação pelo Disque 100 para relatar sua preocupação com segurança.",
    "mission": "Abra o serviço oficial do Disque 100 e procure os grupos de pessoas que ele atende.",
    "sourceIds": [
      "idoso",
      "disque100"
    ],
    "questions": [
      {
        "prompt": "O Disque 100 recebe denúncias relativas aos direitos de pessoas idosas?",
        "options": [
          "Não",
          "Sim",
          "Somente de pessoas candidatas a eleições"
        ],
        "correct": 1,
        "why": "O canal recebe situações envolvendo pessoas idosas e outros grupos.",
        "sourceId": "disque100"
      },
      {
        "prompt": "Quem pode procurar o canal para relatar suspeita de violação?",
        "options": [
          "A vítima ou qualquer pessoa que tenha conhecimento da situação",
          "Somente um juiz",
          "Apenas funcionário público"
        ],
        "correct": 0,
        "why": "O serviço recebe relatos de diferentes pessoas, inclusive testemunhas.",
        "sourceId": "disque100"
      },
      {
        "prompt": "Se houver risco imediato, o melhor é...",
        "options": [
          "Colocar fotos e endereços na internet",
          "Esperar meses",
          "Buscar os serviços de emergência adequados"
        ],
        "correct": 2,
        "why": "A segurança exige resposta rápida em risco imediato.",
        "sourceId": "disque100"
      }
    ]
  }
]);
Object.assign(extra.easy,{
  "mulher-acompanhante": {
    "summary": "Você pode escolher uma pessoa adulta para ficar com você na consulta, exame ou procedimento. Não precisa avisar antes em situações comuns. Alguns atendimentos têm regras especiais.",
    "comparison": "Imagine Marta chegando ao consultório com sua filha. Em vez de acreditar que isso depende de favor, elas podem consultar a lei e perguntar sobre as regras aplicáveis.",
    "scenes": [
      [
        "👩",
        "Marta fica insegura para a consulta; sua filha oferece apoio."
      ],
      [
        "🏥",
        "As duas conversam com a recepção."
      ],
      [
        "👩‍⚕️",
        "Marta é atendida com a filha ao lado."
      ],
      [
        "💛",
        "Elas deixam a clínica sabendo onde conferir esse direito."
      ]
    ],
    "comic": "assets/quadrinhos-acompanhante-"
  },
  "mulher-licenca": {
    "summary": "Em muitos empregos com carteira assinada, a mãe gestante tem direito a se afastar por 120 dias sem perder o emprego ou o salário por causa desse afastamento. Existem regras diferentes em algumas situações.",
    "comparison": "É como reservar um tempo protegido em torno do nascimento. O início, os documentos e o regime de trabalho fazem diferença.",
    "scenes": [
      [
        "📅",
        "Joana confere a previsão de nascimento."
      ],
      [
        "📑",
        "Consulta a lei e reúne o documento necessário."
      ],
      [
        "🏢",
        "Conversa com o setor responsável pelo vínculo de trabalho."
      ],
      [
        "👶",
        "Organiza o período de licença com informações corretas."
      ]
    ]
  },
  "mulher-parto": {
    "summary": "No SUS, quem vai dar à luz pode escolher alguém para ficar junto durante o trabalho de parto, o parto e logo depois. É um direito, não um prêmio.",
    "comparison": "Renata organiza a bolsa do hospital e também pergunta como identificar a pessoa escolhida para acompanhá-la.",
    "scenes": [
      [
        "🤰",
        "Renata organiza os preparativos antes do parto."
      ],
      [
        "📄",
        "Ela confere os direitos e orientações da unidade."
      ],
      [
        "🤝",
        "Escolhe uma pessoa de confiança para acompanhá-la."
      ],
      [
        "👶",
        "Recebe apoio nos momentos protegidos pela lei."
      ]
    ]
  },
  "mulher-protecao": {
    "summary": "Para saber onde pedir ajuda contra violência à mulher, ligue 180: é gratuito e funciona dia e noite. Se há perigo acontecendo agora, ligue 190. Não precisa contar detalhes íntimos ao Cívica.",
    "comparison": "Uma amiga pergunta onde buscar ajuda. Você pode mostrar o canal oficial, sem exigir que ela conte sua história a desconhecidos.",
    "scenes": [
      [
        "💬",
        "Uma pessoa procura orientação de forma segura."
      ],
      [
        "📞",
        "Encontra o Ligue 180 no site oficial."
      ],
      [
        "🏛️",
        "Recebe indicação da rede adequada de atendimento."
      ],
      [
        "🛡️",
        "Em risco imediato, aciona o serviço de emergência."
      ]
    ]
  },
  "crianca-escola": {
    "summary": "Crianças e adolescentes têm direito à escola, a continuar estudando e a ser tratados com respeito. Se faltar vaga ou houver problema, existem serviços públicos que podem ajudar.",
    "comparison": "Pense numa escola como uma porta que deve permitir não só a entrada, mas também condições para continuar aprendendo.",
    "scenes": [
      [
        "🏫",
        "Uma família procura matrícula escolar."
      ],
      [
        "📝",
        "A escola explica seus procedimentos."
      ],
      [
        "🤝",
        "Diante de problema, procuram a rede de ensino."
      ],
      [
        "📚",
        "A criança continua seu caminho de aprendizado."
      ]
    ]
  },
  "crianca-protecao": {
    "summary": "Crianças devem ser cuidadas sem apanhar nem passar por humilhações como castigo. Se há sinais de violência, procure os canais oficiais de proteção, sem expor a criança nas redes.",
    "comparison": "Educar envolve regras e responsabilidade, mas isso não dá permissão para ferir ou humilhar.",
    "scenes": [
      [
        "🏠",
        "Uma família enfrenta uma situação difícil."
      ],
      [
        "🧠",
        "Adultos procuram formas de educar sem violência."
      ],
      [
        "🤝",
        "O serviço de proteção oferece orientações."
      ],
      [
        "🧸",
        "A prioridade é a segurança e a dignidade da criança."
      ]
    ]
  },
  "crianca-hospital": {
    "summary": "Quando uma criança ou adolescente é internado, o hospital deve criar condições para que um dos pais ou responsável fique junto o tempo todo, seguindo as rotinas de segurança.",
    "comparison": "Uma criança doente precisa de cuidados profissionais e também pode precisar de alguém conhecido por perto.",
    "scenes": [
      [
        "🧒",
        "Pedro precisa ficar internado."
      ],
      [
        "👨‍👩‍👦",
        "A família pergunta como acompanhar."
      ],
      [
        "🏥",
        "O hospital organiza a permanência conforme a lei."
      ],
      [
        "💛",
        "Pedro recebe cuidado e apoio da família."
      ]
    ]
  },
  "idoso-80": {
    "summary": "Com 60 anos a pessoa entra no grupo protegido pelo Estatuto. Quem tem mais de 80 anos ganha uma prioridade a mais; em emergência médica, o atendimento leva em conta a gravidade.",
    "comparison": "Uma fila pode ter prioridades, mas quem está em risco grave pode precisar ser atendido antes.",
    "scenes": [
      [
        "👵",
        "Uma pessoa idosa precisa de atendimento."
      ],
      [
        "👴",
        "Outra pessoa tem mais de 80 anos."
      ],
      [
        "🏥",
        "A equipe verifica as prioridades e necessidades."
      ],
      [
        "✅",
        "O atendimento respeita a lei e os casos de emergência."
      ]
    ]
  },
  "idoso-decidir": {
    "summary": "A pessoa idosa que consegue tomar decisões pode participar da escolha do próprio tratamento. Ela tem o direito de perguntar, entender e ser ouvida.",
    "comparison": "Dona Helena não precisa ficar calada enquanto conversam sobre a saúde dela: ela pode fazer perguntas e participar.",
    "scenes": [
      [
        "🏥",
        "Dona Helena vai à consulta."
      ],
      [
        "🗣️",
        "Explica suas dúvidas e prioridades."
      ],
      [
        "👩‍⚕️",
        "A profissional esclarece opções e riscos."
      ],
      [
        "🤝",
        "A decisão segue as regras e considera a autonomia."
      ]
    ]
  },
  "idoso-protecao": {
    "summary": "Uma pessoa idosa tem direito a ser tratada sem abandono, violência ou humilhação. Se você desconfia de violação, pode pedir orientação ao Disque 100. Perigo agora? Procure emergência.",
    "comparison": "Uma pessoa vê sinais preocupantes e procura um canal de proteção em vez de expor a vítima na internet.",
    "scenes": [
      [
        "👀",
        "Alguém percebe sinais de violação."
      ],
      [
        "📞",
        "Busca orientação do Disque 100."
      ],
      [
        "🛡️",
        "O serviço encaminha ao órgão competente."
      ],
      [
        "🤝",
        "A proteção e a privacidade da pessoa são prioridade."
      ]
    ]
  }
});
Object.assign(extra.glossary,{
  "acompanhante": {
    "definition": "Pessoa que fica ao lado de alguém para oferecer apoio no atendimento, nas condições previstas na lei.",
    "sourceId": "mulher_acompanhante",
    "forms": [
      "acompanhante",
      "acompanhantes"
    ]
  },
  "sedação": {
    "definition": "Uso de medicamentos para reduzir consciência, ansiedade ou sensação durante procedimentos, sob cuidado da equipe de saúde.",
    "sourceId": "mulher_acompanhante",
    "forms": [
      "sedação"
    ]
  },
  "centro cirúrgico": {
    "definition": "Parte de um serviço de saúde onde são realizadas cirurgias e que segue regras próprias de segurança.",
    "sourceId": "mulher_acompanhante",
    "forms": [
      "centro cirúrgico",
      "centros cirúrgicos"
    ]
  },
  "licença-maternidade": {
    "definition": "Período de afastamento do trabalho protegido pela lei em situações de maternidade, conforme vínculo e requisitos.",
    "sourceId": "clt_licenca",
    "forms": [
      "licença-maternidade"
    ]
  },
  "empregada gestante": {
    "definition": "Pessoa grávida que possui relação de emprego regulada pela CLT. Outras formas de trabalho podem seguir regras diferentes.",
    "sourceId": "clt_licenca",
    "forms": [
      "empregada gestante"
    ]
  },
  "parturiente": {
    "definition": "Pessoa que está em trabalho de parto, parto ou no período imediato após o parto, conforme o contexto legal.",
    "sourceId": "lei_parto",
    "forms": [
      "parturiente",
      "parturientes"
    ]
  },
  "pós-parto imediato": {
    "definition": "Período logo após o parto, ao qual algumas regras de acompanhamento e cuidado se referem.",
    "sourceId": "lei_parto",
    "forms": [
      "pós-parto imediato"
    ]
  },
  "conselho tutelar": {
    "definition": "Órgão permanente e autônomo, que não é tribunal, encarregado de zelar pelos direitos de crianças e adolescentes.",
    "sourceId": "eca",
    "forms": [
      "Conselho Tutelar",
      "conselhos tutelares"
    ]
  },
  "estatuto da criança e do adolescente": {
    "definition": "Lei brasileira conhecida como ECA que reúne regras de proteção integral à criança e ao adolescente.",
    "sourceId": "eca",
    "forms": [
      "Estatuto da Criança e do Adolescente",
      "ECA"
    ]
  },
  "negligência": {
    "definition": "Falta de cuidado necessário que pode colocar alguém em risco ou violar seus direitos.",
    "sourceId": "idoso",
    "forms": [
      "negligência"
    ]
  },
  "autonomia": {
    "definition": "Capacidade e direito de participar de decisões sobre a própria vida, dentro das condições legais e pessoais.",
    "sourceId": "idoso",
    "forms": [
      "autonomia"
    ]
  },
  "denúncia": {
    "definition": "Comunicação de um possível fato irregular ou violação para análise pelos órgãos responsáveis.",
    "sourceId": "disque100",
    "forms": [
      "denúncia",
      "denúncias"
    ]
  },
  "defensoria pública": {
    "definition": "Instituição que oferece orientação e defesa jurídica, de forma gratuita, a pessoas que se enquadram nos requisitos legais.",
    "sourceId": "rede_mulher",
    "forms": [
      "Defensoria Pública"
    ]
  },
  "internação": {
    "definition": "Permanência de pessoa em estabelecimento de saúde para receber cuidados e acompanhamento clínico.",
    "sourceId": "eca",
    "forms": [
      "internação",
      "internada",
      "internado"
    ]
  },
  "rede de proteção": {
    "definition": "Conjunto de serviços públicos e instituições que atendem pessoas com direitos ameaçados ou violados.",
    "sourceId": "rede_mulher",
    "forms": [
      "rede de proteção"
    ]
  }
});

// Vetores ilustrados locais para as demais cenas da trilha.
extra.easy["mulher-licenca"].comic = 'assets/quadrinhos-mulher-licenca-';
extra.easy["mulher-licenca"].comicExt = 'svg';
extra.easy["mulher-parto"].comic = 'assets/quadrinhos-mulher-parto-';
extra.easy["mulher-parto"].comicExt = 'svg';
extra.easy["mulher-protecao"].comic = 'assets/quadrinhos-mulher-protecao-';
extra.easy["mulher-protecao"].comicExt = 'svg';
extra.easy["crianca-escola"].comic = 'assets/quadrinhos-crianca-escola-';
extra.easy["crianca-escola"].comicExt = 'svg';
extra.easy["crianca-protecao"].comic = 'assets/quadrinhos-crianca-protecao-';
extra.easy["crianca-protecao"].comicExt = 'svg';
extra.easy["crianca-hospital"].comic = 'assets/quadrinhos-crianca-hospital-';
extra.easy["crianca-hospital"].comicExt = 'svg';
extra.easy["idoso-80"].comic = 'assets/quadrinhos-idoso-80-';
extra.easy["idoso-80"].comicExt = 'svg';
extra.easy["idoso-decidir"].comic = 'assets/quadrinhos-idoso-decidir-';
extra.easy["idoso-decidir"].comicExt = 'svg';
extra.easy["idoso-protecao"].comic = 'assets/quadrinhos-idoso-protecao-';
extra.easy["idoso-protecao"].comicExt = 'svg';
data.updatedAt='21/10/2026';
})();
