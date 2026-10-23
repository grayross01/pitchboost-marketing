import type { HelpArticle } from "./help";

/**
 * GENERATED from lib/help.ts by the translation job (Claude, strict style
 * guide: idiomatic, no em dashes, product names, prices and UI labels
 * matched to the app's own pt strings). Slugs match the English articles
 * one to one so hreflang works. Regenerate with .test-dist/translate-help.mts
 * in the app repo; do not hand-edit facts here, edit help.ts and rerun.
 */
export const HELP_ARTICLES_PT: HelpArticle[] = [
  {
    "slug": "redesign-a-powerpoint",
    "category": "redesign",
    "title": "Como redesenhar um PowerPoint com o PitchBoost",
    "metaDescription": "Envie um .pptx, aponte o PitchBoost para o seu site e receba a apresentação redesenhada na sua marca em poucos minutos. Passo a passo, com o que acontece ao seu conteúdo.",
    "answer": "Para redesenhar um PowerPoint no PitchBoost, escolha \"Melhorar uma que já tenho\" depois de fazer login, envie o .pptx (até 50 MB), informe o site da sua empresa para que ele capture seu logo e cores, e clique em Gerar. A apresentação reconstruída chega em cerca de 3 a 5 minutos como uma apresentação web que você pode editar, compartilhar como link ou baixar como PowerPoint ou PDF. O conteúdo dos slides é mantido; o layout, tipografia, espaçamento e marca são reconstruídos.",
    "steps": [
      {
        "title": "Faça login e escolha \"Melhorar uma que já tenho\"",
        "body": "Crie uma conta gratuita ou faça login. Na primeira tela, escolha a opção de reconstrução. Se você chegou de uma página de redesign neste site, já aterrissa lá automaticamente."
      },
      {
        "title": "Envie o .pptx",
        "body": "Arraste o arquivo PowerPoint ou clique para navegar. Arquivos de até 50 MB são aceitos. Usuários de Keynote e Google Slides devem exportar para .pptx primeiro (um clique no menu em qualquer um dos apps)."
      },
      {
        "title": "Informe o site da sua empresa",
        "body": "O PitchBoost escaneia por cerca de 15 segundos e captura seu logo, cores da marca, fontes e tom de voz. Se ele capturou o logo errado, substitua ali mesmo antes de gerar."
      },
      {
        "title": "Decida o que fazer com uma apresentação longa",
        "body": "Se a apresentação tem mais slides do que seu plano reconstrói, o PitchBoost pergunta se deve condensá-la para caber ou reconstruir apenas os primeiros slides. A maioria das apresentações abaixo do limite pula esta etapa."
      },
      {
        "title": "Clique em Gerar e aguarde, ou saia",
        "body": "A reconstrução geralmente leva de 3 a 5 minutos, incluindo uma revisão de qualidade. Você pode assistir os slides chegarem ou fechar a aba: o PitchBoost envia por email um link para a apresentação finalizada."
      },
      {
        "title": "Revise, edite, compartilhe",
        "body": "Abra qualquer slide no editor para ajustá-lo, publique a apresentação como um link não listado ou baixe como PowerPoint ou PDF na tela de compartilhamento."
      }
    ],
    "sections": [
      {
        "heading": "O que muda e o que não muda",
        "paragraphs": [
          "O conteúdo de cada slide é preservado: títulos, texto do corpo, números, valores de gráficos e estrutura voltada ao apresentador. O que é reconstruído é tudo visual: layout, hierarquia, tipografia, cor, espaçamento e imagens, tudo na marca capturada do seu site.",
          "Slides densos são reestruturados em vez de encolhidos. Uma parede de bullets se torna um layout que combina com seu conteúdo (etapas, uma comparação, uma grade). Nada é inventado; uma verificação de fatos compara a apresentação reconstruída com o seu original."
        ]
      },
      {
        "heading": "Limites de slides por plano",
        "paragraphs": [
          "O plano Free reconstrói até 10 slides, Starter até 25 e Pro até 60. Uma apresentação mais longa pode ser condensada para caber antes da reconstrução começar, e a tela de compartilhamento informa quantos slides foram mantidos."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Funciona com arquivos .ppt?",
        "a": "Envie .pptx. Abra um .ppt legado no PowerPoint e use Salvar Como para convertê-lo; nada é perdido."
      },
      {
        "q": "Posso redesenhar apenas alguns slides?",
        "a": "A reconstrução roda na apresentação inteira. Depois, cada slide é editável, e você pode regenerar ou restaurar slides individuais no editor."
      },
      {
        "q": "Quanto custa?",
        "a": "O plano Free inclui uma apresentação AI por mês, até 10 slides, com um pequeno selo PitchBoost. Starter custa $7 por mês para até 25 slides e sem selo; Pro custa $29 por mês para até 60 slides com analytics completo."
      }
    ],
    "related": [
      "google-slides-and-keynote",
      "slide-limits-by-plan",
      "download-powerpoint-or-pdf",
      "how-long-does-a-deck-take"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "google-slides-and-keynote",
    "category": "redesign",
    "title": "Como redesenhar apresentações do Google Slides ou Keynote",
    "metaDescription": "PitchBoost lê arquivos .pptx. Exporte sua apresentação do Google Slides ou Keynote para PowerPoint em um passo, envie e receba redesenhada com sua marca.",
    "answer": "PitchBoost aceita arquivos PowerPoint (.pptx), e tanto o Google Slides quanto o Keynote exportam para .pptx em um passo com texto, imagens e gráficos intactos. Exporte o arquivo, envie para o PitchBoost e o redesenho funciona exatamente como funciona para uma apresentação PowerPoint.",
    "steps": [
      {
        "title": "Google Slides: Arquivo > Fazer o download > Microsoft PowerPoint (.pptx)",
        "body": "O download é uma cópia completa da apresentação. Anotações do apresentador e gráficos vêm junto, vídeos incorporados não."
      },
      {
        "title": "Keynote: Arquivo > Exportar para > PowerPoint",
        "body": "Mantenha as configurações padrão. O Keynote converte seus layouts e texto para objetos PowerPoint que o PitchBoost pode ler."
      },
      {
        "title": "Envie o .pptx para o PitchBoost",
        "body": "Faça login, escolha \"Melhorar uma que já tenho\" e solte o arquivo exportado. Depois adicione seu site para que a reconstrução use sua marca."
      }
    ],
    "sections": [
      {
        "heading": "Voltando para o Google Slides ou Keynote depois",
        "paragraphs": [
          "Baixe o PowerPoint editável da tela de compartilhamento e abra em qualquer app: o Google Slides importa .pptx através de Arquivo > Importar slides ou fazendo upload no Drive, o Keynote abre .pptx diretamente. Caixas de texto e formas permanecem editáveis. O link da apresentação web também funciona sozinho, sem nenhum app."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Minhas fontes do Google Slides vão sobreviver?",
        "a": "O redesenho substitui as fontes da apresentação pela tipografia da sua marca, obtida do seu site, então as fontes originais não são necessárias."
      },
      {
        "q": "Posso enviar um PDF?",
        "a": "Não para uma reconstrução. Um PDF não tem estrutura de slides para ler. Exporte .pptx do app original, se você só tem um PDF, construa uma nova apresentação e cole o conteúdo."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "download-powerpoint-or-pdf",
      "brand-from-your-website"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "slide-limits-by-plan",
    "category": "redesign",
    "title": "Quantos slides o PitchBoost reconstrói em cada plano",
    "metaDescription": "Free reconstrói até 10 slides, Starter até 25, Pro e Business até 60. O que acontece com decks mais longos: condensar ou reconstruir os primeiros.",
    "answer": "O plano gratuito reconstrói decks com até 10 slides, Starter até 25, e Pro e Business até 60. Se o seu deck for mais longo, o PitchBoost oferece a opção de condensá-lo para caber (mesma história, menos slides) ou reconstruir apenas os primeiros slides. A tela de compartilhamento mostra quantos dos seus slides originais foram mantidos e como reconstruir o restante: com um pagamento único para essa apresentação (US$ 9, para decks de até 25 slides) ou com um plano.",
    "sections": [
      {
        "heading": "Os limites",
        "paragraphs": [
          "Free: até 10 slides por deck, um deck com IA por mês. Starter ($7 por mês): até 25 slides. Pro ($29 por mês) e Business ($79 por mês): até 60 slides. O limite se aplica ao deck que o PitchBoost produz, não ao arquivo que você envia: você pode enviar um deck de 45 slides em qualquer plano."
        ]
      },
      {
        "heading": "Condensar ou cortar",
        "paragraphs": [
          "Quando um deck ultrapassa o limite, você escolhe antes de qualquer geração. Condensar mantém a narrativa e mescla ou descarta os slides menos essenciais para que toda a história caiba. Reconstruir os primeiros N mantém cada slide até o limite exatamente e deixa o restante de fora.",
          "Condensar geralmente é a melhor escolha para um pitch: a maioria dos bons pitch decks tem de 10 a 15 slides. Cortar é melhor quando o deck é uma sequência (um módulo de treinamento, um processo passo a passo) onde a ordem importa mais que a extensão."
        ]
      },
      {
        "heading": "Decks muito longos",
        "paragraphs": [
          "Decks com mais de 40 slides são sempre condensados ou cortados para 40 antes que o limite do plano se aplique, então um deck de treinamento de 90 slides no Pro retorna com no máximo 40 slides. Divida decks muito longos em módulos e reconstrua cada um."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Fazer upgrade reconstrói os slides faltantes automaticamente?",
        "a": "Não. Após fazer upgrade, abra o negócio e execute a reconstrução novamente: a tela de compartilhamento tem um botão para isso. O deck completo substitui o condensado."
      },
      {
        "q": "O limite se aplica também a novos decks?",
        "a": "Sim. Um deck criado a partir de um briefing usa o mesmo limite de slides por plano."
      },
      {
        "q": "Um deck condensado conta como um deck completo?",
        "a": "Sim. Uma reconstrução é uma apresentação com IA, com preço pelo tamanho: 100 créditos até 10 slides, mais 8 por slide a partir daí."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "credits-and-plans",
      "download-powerpoint-or-pdf"
    ],
    "updated": "2026-10-23"
  },
  {
    "slug": "download-powerpoint-or-pdf",
    "category": "output",
    "title": "Como baixar sua apresentação como PowerPoint ou PDF",
    "metaDescription": "Baixe uma apresentação como PowerPoint editável, PowerPoint com aparência exata ou PDF em qualquer plano pago ou por US$ 9 a apresentação. Onde estão os botões e qual arquivo escolher.",
    "answer": "Abra a tela de compartilhamento da apresentação e use os botões de download: \"Baixar PowerPoint\" fornece um .pptx com aparência exata onde cada slide é uma imagem da apresentação web, \"PowerPoint editável\" fornece um .pptx com caixas de texto e formas reais, parecido com o layout web mas não idêntico, e \"PDF\" fornece uma página por slide. Downloads vêm com todos os planos pagos. No plano gratuito, compartilhar a apresentação como link ao vivo continua grátis, e você pode liberar os downloads de uma apresentação com um pagamento único de US$ 9 (decks de até 25 slides), que também remove o badge.",
    "steps": [
      {
        "title": "Abra a apresentação",
        "body": "No seu painel, abra o negócio e clique na apresentação. A tela de compartilhamento mostra a prévia com os controles de download e publicação ao lado."
      },
      {
        "title": "Escolha o arquivo que você precisa",
        "body": "PowerPoint editável para tudo que você vai continuar trabalhando. PowerPoint com aparência exata quando a apresentação precisa ficar idêntica à versão web na máquina de outra pessoa. PDF para anexos de e-mail e impressão."
      },
      {
        "title": "Aguarde o arquivo",
        "body": "O botão mostra \"Preparando\" enquanto o arquivo é renderizado, geralmente alguns segundos. O download inicia automaticamente."
      }
    ],
    "sections": [
      {
        "heading": "Editável versus aparência exata",
        "paragraphs": [
          "O PowerPoint editável fica próximo do layout web mas não é pixel a pixel idêntico: ele usa as próprias caixas de texto, formas e fontes do PowerPoint para que você possa editar cada elemento. O arquivo de aparência exata é pixel a pixel idêntico porque cada slide é uma imagem de alta resolução, o que também significa que o texto não pode ser editado no PowerPoint. Em caso de dúvida, pegue os dois; depois que os downloads de uma apresentação estão liberados, cada arquivo não custa nada a mais."
        ]
      },
      {
        "heading": "O badge",
        "paragraphs": [
          "No plano gratuito, cada slide carrega um pequeno badge \"Powered by PitchBoost\", inclusive no link ao vivo. Starter ($7 por mês) remove ele de todas as apresentações e exportações, e você também pode removê-lo de uma única apresentação com uma compra única de US$ 9 na tela de compartilhamento, que também libera os downloads dessa apresentação."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Posso baixar sem publicar?",
        "a": "Sim. Downloads funcionam em um rascunho privado. Publicar só importa para o link web."
      },
      {
        "q": "As fontes estão incorporadas no PowerPoint editável?",
        "a": "O arquivo nomeia suas fontes da marca; se uma máquina não as tem instaladas, o PowerPoint substitui por uma fonte similar. O arquivo de aparência exata não tem esse problema porque os slides são imagens."
      },
      {
        "q": "Existe exportação para Google Slides?",
        "a": "Baixe o PowerPoint editável e importe no Google Slides através de Arquivo > Fazer o download > Microsoft PowerPoint (.pptx). Tudo permanece editável."
      }
    ],
    "related": [
      "share-a-deck-link",
      "google-slides-and-keynote",
      "credits-and-plans"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "share-a-deck-link",
    "category": "sharing",
    "title": "Como compartilhar uma apresentação por link e ver quem abriu",
    "metaDescription": "Publique uma apresentação para obter um link não listado, envie para um prospect e seja notificado no momento em que ele abrir. O que o plano gratuito rastreia e o que o Pro adiciona.",
    "answer": "Clique em \"Publicar e copiar link\" na tela de compartilhamento da apresentação. Isso cria um link não listado (qualquer pessoa com ele pode visualizar; ninguém pode encontrá-lo de outra forma) e o copia para sua área de transferência. Quando um prospect abre o link, o PitchBoost envia um email para você. Free e Starter mostram análises básicas (aberturas e visualizações); Pro e Business mostram quais slides cada visualizador leu e por quanto tempo.",
    "steps": [
      {
        "title": "Publique a apresentação",
        "body": "Na tela de compartilhamento, clique em \"Publicar e copiar link\". Até você fazer isso, a apresentação é um rascunho privado que só você e sua equipe podem ver."
      },
      {
        "title": "Envie o link ou adicione destinatários",
        "body": "Cole o link em qualquer lugar. Para rastreamento nominal, adicione destinatários no negócio: cada um recebe um link privado para que você saiba exatamente quem abriu o quê."
      },
      {
        "title": "Acompanhe o negócio",
        "body": "Você recebe um email no momento em que a apresentação é aberta. A página do negócio mostra cada visita; no Pro e Business também mostra o tempo por slide e quais slides foram pulados."
      },
      {
        "title": "Tire do ar quando quiser",
        "body": "\"Tornar privada\" na tela de compartilhamento interrompe o funcionamento do link até você publicar novamente."
      }
    ],
    "sections": [
      {
        "heading": "A sala de negócios",
        "paragraphs": [
          "O link abre uma página que contém a apresentação mais qualquer outra coisa que você anexou ao negócio (um resumo, um Q&A). Os visualizadores podem fazer uma pergunta na página; ela chega na sua caixa de entrada com o email deles, se deixaram um. Um visualizador vê a apresentação, nunca suas anotações ou o resto da sua conta."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Posso usar meu próprio domínio para o link?",
        "a": "Domínios personalizados estão incluídos no Pro e Business. Free e Starter compartilham links em app.pitchboost.ai."
      },
      {
        "q": "Preciso do email do visualizador para rastreá-lo?",
        "a": "Não. Cada abertura é rastreada no próprio link. Adicionar destinatários dá a cada pessoa seu próprio link para que as análises sejam nominais."
      },
      {
        "q": "O link expira?",
        "a": "Não. Ele funciona até você tornar a apresentação privada ou excluir o negócio."
      }
    ],
    "related": [
      "download-powerpoint-or-pdf",
      "credits-and-plans",
      "redesign-a-powerpoint"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "connect-chatgpt",
    "category": "assistants",
    "title": "Como usar o PitchBoost no ChatGPT",
    "metaDescription": "Adicione o PitchBoost ao ChatGPT como conector, faça login uma vez e peça ao ChatGPT para redesenhar uma apresentação, criar uma nova ou listar suas apresentações. Os passos exatos.",
    "answer": "Adicione o PitchBoost ao ChatGPT como conector usando o endereço do servidor https://app.pitchboost.ai/api/mcp, faça login na sua conta PitchBoost quando o ChatGPT solicitar e depois converse normalmente: envie uma apresentação e diga \"deixe isto profissional\", ou descreva um cliente potencial e peça uma apresentação de vendas. O ChatGPT chama o PitchBoost, que retorna um link para a apresentação finalizada. Uma listagem do app PitchBoost para o ChatGPT está em análise; até que apareça no diretório, a rota de conector abaixo funciona em contas com modo de desenvolvedor ativado.",
    "steps": [
      {
        "title": "Ative o modo de desenvolvedor",
        "body": "No ChatGPT, abra Configurações, depois Conectores, depois Avançado e ative o modo de desenvolvedor. Este é o interruptor que permite conectores personalizados."
      },
      {
        "title": "Crie o conector",
        "body": "Ainda em Conectores, clique em Criar. Nomeie como PitchBoost, cole https://app.pitchboost.ai/api/mcp como URL do servidor MCP, escolha OAuth como autenticação e salve. Se o login falhar com erro de cliente desconhecido, abra as configurações avançadas do conector e defina o registro de cliente como dinâmico (DCR)."
      },
      {
        "title": "Faça login no PitchBoost",
        "body": "O ChatGPT abre uma janela de login do PitchBoost. Use sua conta existente ou crie uma gratuita. Você faz isto uma vez."
      },
      {
        "title": "Use em um chat",
        "body": "Inicie um novo chat, ative o conector PitchBoost no menu de ferramentas e peça. Para um redesign, anexe o .pptx e peça para ser melhorado: o ChatGPT lê os slides e os envia ao PitchBoost, que reconstrói a apresentação na sua marca e retorna o link."
      }
    ],
    "sections": [
      {
        "heading": "O que o ChatGPT pode fazer com o PitchBoost",
        "paragraphs": [
          "Reconstruir uma apresentação que você enviar, verificar se uma reconstrução terminou, criar uma nova apresentação para um cliente potencial específico, listar suas apresentações recentes, obter o link de uma e publicar um rascunho. Ele também pode fazer uma apresentação de exemplo sem conta, com um badge, que você pode reivindicar depois.",
          "Ele não pode alterar seu plano, excluir nada ou ver apresentações fora da sua conta. Reconstruções e novas apresentações usam a mesma cota mensal do app: uma apresentação por mês no plano gratuito."
        ]
      }
    ],
    "faqs": [
      {
        "q": "O conector funciona em uma conta gratuita do ChatGPT?",
        "a": "Conectores personalizados precisam de um plano ChatGPT com modo de desenvolvedor disponível. Verifique Configurações > Conectores > Avançado na sua conta; se o interruptor não estiver lá, a listagem no diretório, uma vez aprovada, será a rota."
      },
      {
        "q": "Onde vai a apresentação reconstruída?",
        "a": "Para sua conta PitchBoost, sob um negócio com o nome da apresentação. O link que o ChatGPT fornece abre diretamente; você pode editar e baixar de lá como qualquer outra apresentação."
      },
      {
        "q": "O conteúdo da minha apresentação é enviado ao PitchBoost?",
        "a": "Sim, o texto dos slides que o ChatGPT extrai é enviado ao PitchBoost para reconstruir a apresentação e armazenado na sua conta com o resultado. A política de privacidade explica retenção e exclusão."
      }
    ],
    "related": [
      "connect-claude",
      "redesign-a-powerpoint",
      "credits-and-plans"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "connect-claude",
    "category": "assistants",
    "title": "Como usar o PitchBoost no Claude",
    "metaDescription": "Adicione o PitchBoost ao Claude como conector personalizado, faça login uma vez e peça ao Claude para redesenhar uma apresentação ou criar uma nova. Os passos exatos para claude.ai e Claude Code.",
    "answer": "No Claude, adicione o PitchBoost como conector personalizado com a URL https://app.pitchboost.ai/api/mcp, faça login quando solicitado e então peça ao Claude para reconstruir uma apresentação que você enviar ou para criar uma nova para um prospecto. O Claude chama o PitchBoost através do Model Context Protocol (MCP) e retorna o link para a apresentação finalizada.",
    "steps": [
      {
        "title": "Abra as configurações de conectores",
        "body": "No claude.ai vá em Configurações, depois Conectores, e clique em Adicionar conector personalizado. Em um plano Team ou Enterprise, um administrador pode precisar adicioná-lo para a organização."
      },
      {
        "title": "Adicione o servidor PitchBoost",
        "body": "Nome: PitchBoost. URL: https://app.pitchboost.ai/api/mcp. Deixe os campos do cliente OAuth vazios: o PitchBoost registra o cliente automaticamente. Salve."
      },
      {
        "title": "Conecte sua conta",
        "body": "Clique em Conectar ao lado de PitchBoost. Uma janela de login do PitchBoost abre: faça login ou crie uma conta gratuita. O Claude lembra da conexão."
      },
      {
        "title": "Peça uma apresentação",
        "body": "Em um chat, certifique-se de que o PitchBoost está habilitado no menu de ferramentas. Anexe um .pptx e diga \"reconstrua isso na nossa marca\", ou descreva o prospecto e a oferta e peça uma apresentação de vendas. O Claude retorna com o link quando estiver pronto."
      }
    ],
    "sections": [
      {
        "heading": "Claude Code e outros clientes MCP",
        "paragraphs": [
          "Qualquer cliente que fala MCP sobre Streamable HTTP pode usar o mesmo endereço. No Claude Code, adicione com o CLI (claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp) e complete o login na janela do navegador que abre. Cursor e Windsurf aceitam a mesma URL nas suas configurações MCP."
        ]
      },
      {
        "heading": "O que o Claude pode fazer com o PitchBoost",
        "paragraphs": [
          "Reconstruir uma apresentação enviada, verificar o status da reconstrução até estar pronta, criar uma nova apresentação a partir de um briefing, listar suas apresentações recentes, buscar uma por id e publicar um rascunho. Ele também pode fazer uma apresentação de exemplo sem uma conta. Nada do que ele faz é destrutivo, e ele nunca altera seu plano."
        ]
      }
    ],
    "faqs": [
      {
        "q": "O PitchBoost está no diretório de conectores do Claude?",
        "a": "Uma listagem no diretório está em andamento. Até aparecer, o conector personalizado acima é a rota, e funciona em todo plano do claude.ai que permite conectores personalizados."
      },
      {
        "q": "Usa meus créditos?",
        "a": "Sim, o mesmo que no app: uma reconstrução ou uma nova apresentação custa 100 créditos até 10 slides, mais 8 por slide a partir daí. Listar e buscar apresentações é gratuito."
      }
    ],
    "related": [
      "connect-chatgpt",
      "redesign-a-powerpoint",
      "credits-and-plans"
    ],
    "updated": "2026-10-23"
  },
  {
    "slug": "credits-and-plans",
    "category": "account",
    "title": "Como funcionam os créditos e planos",
    "metaDescription": "Todo plano inclui créditos mensais; uma apresentação de até 10 slides custa 100 e cada slide a mais soma 8. O que cada plano inclui e como comprar mais.",
    "answer": "Todo plano do PitchBoost inclui uma cota mensal de créditos e cada ação de IA tem um preço fixo: uma apresentação (nova ou reconstruída) de até 10 slides custa 100 créditos, cada slide a mais soma 8 (4 no novo motor de apresentações), uma imagem com IA 10, uma edição de slide 10, uma edição de apresentação completa 50, uma varredura de site 10. Free inclui 150 créditos por mês (uma apresentação), Starter 300, Pro 2.500 e Business 7.000. Planos pagos acumulam créditos não usados por um mês e podem comprar pacotes extras. No aplicativo você vê a porcentagem da sua cota usada, nunca um valor em dólar corrente.",
    "sections": [
      {
        "heading": "Os planos",
        "paragraphs": [
          "Free: 150 créditos por mês, um negócio, apresentações de até 10 slides com um pequeno selo, um link ao vivo compartilhável com análises básicas. Baixar um arquivo exige um plano pago ou um pagamento único de US$ 9 por essa apresentação. Não requer cartão.",
          "Starter, $7 por mês: 300 créditos, negócios ilimitados, apresentações de até 25 slides, sem selo em lugar algum, downloads em PowerPoint, PDF e Google Slides, pacotes extras.",
          "Pro, $29 por mês: 2.500 créditos, apresentações de até 60 slides, análises completas do visualizador com tempo por slide, modelos salvos, domínios personalizados, acesso à API e MCP.",
          "Business, $79 por mês: 7.000 créditos, assentos e permissões de equipe, exportação de análises e envio a partir do seu próprio domínio.",
          "Cobrança anual é mais barata: Starter $70 por ano (cerca de $5,83 por mês), Pro $24 e Business $66 por mês quando pago anualmente."
        ]
      },
      {
        "heading": "Quanto custa uma apresentação",
        "paragraphs": [
          "Uma apresentação tem preço pelo tamanho, por esta lista, sem orçamento antes de ser criada: até 10 slides são 100 créditos; cada slide a mais, 8 (4 no novo motor de apresentações, em Configurações); cada imagem com IA, 10. Documentos anexados estão incluídos até cerca de 10 páginas de texto e depois somam cerca de 1 crédito por página.",
          "Ao começar, os créditos do tamanho esperado ficam reservados, e o valor se ajusta ao que ela entrega: se sair menor, a diferença volta. Uma apresentação de 24 slides custa 212 créditos; uma de 60, 500. Se faltar crédito, a mensagem diz quanto ela precisa e quanto você tem."
        ]
      },
      {
        "heading": "Acúmulo e pacotes",
        "paragraphs": [
          "Nos planos pagos, créditos não usados são transferidos para o próximo mês até o limite de uma cota mensal. No plano gratuito eles são reiniciados. Pacotes extras de 250 ($5), 900 ($15) e 2.800 ($40) créditos estão disponíveis nos planos pagos e nunca expiram enquanto você estiver inscrito."
        ]
      },
      {
        "heading": "O que é gratuito",
        "paragraphs": [
          "Verificação de fatos, extração de gráficos, publicação, compartilhamento, visualização de análises e download de arquivos nunca custam créditos. Apenas a geração por IA custa."
        ]
      }
    ],
    "faqs": [
      {
        "q": "O que acontece quando eu fico sem créditos?",
        "a": "As ações de IA pausam até o próximo período, ou imediatamente após você comprar um pacote ou fazer upgrade. Tudo que já foi gerado permanece disponível; downloads e links continuam funcionando."
      },
      {
        "q": "Como altero ou cancelo meu plano?",
        "a": "No aplicativo, abra Configurações e escolha Plano. Mudanças aplicam imediatamente; cancelar mantém o plano pago até o fim do período que você já pagou."
      },
      {
        "q": "Posso remover o selo sem assinatura?",
        "a": "Sim. A tela de compartilhamento oferece uma remoção única para aquela apresentação. Starter remove de todas as apresentações."
      }
    ],
    "related": [
      "slide-limits-by-plan",
      "download-powerpoint-or-pdf",
      "share-a-deck-link"
    ],
    "updated": "2026-10-23"
  },
  {
    "slug": "how-long-does-a-deck-take",
    "category": "redesign",
    "title": "Quanto tempo leva uma apresentação e o que fazer enquanto espera",
    "metaDescription": "Uma reconstrução ou apresentação nova geralmente leva de 3 a 5 minutos incluindo a revisão de qualidade. Você pode fechar a aba: PitchBoost envia um link por email quando estiver pronta.",
    "answer": "Uma reconstrução ou apresentação nova geralmente leva de 3 a 5 minutos, incluindo uma revisão de qualidade e checagem de fatos que executam após os slides serem rascunhados. Você não precisa esperar na página: feche a aba e PitchBoost envia um link por email para a apresentação finalizada, com uma prévia e download em PowerPoint. A apresentação também aparece no seu painel assim que estiver pronta.",
    "sections": [
      {
        "heading": "O que acontece durante esses minutos",
        "paragraphs": [
          "Primeiro PitchBoost lê seu arquivo e marca capturada e rascunha cada slide; o primeiro rascunho aparece na tela em um ou dois minutos. Então um revisor aperta layouts e textos, uma passagem de crítica verifica a apresentação contra seu original em busca de qualquer coisa inventada ou omitida, e imagens são geradas onde o design pede. Apresentações mais longas e apresentações com muitos gráficos levam mais tempo."
        ]
      },
      {
        "heading": "Se parecer travada",
        "paragraphs": [
          "Atualize a página; a tela de progresso retoma do estado atual. Se dez minutos passarem sem rascunho, a reconstrução falhou e nenhum crédito é cobrado. Tente novamente, e se falhar duas vezes envie um email para support@pitchboost.ai com o link do negócio para que possamos examinar o arquivo exato."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Vou receber um email mesmo no plano gratuito?",
        "a": "Sim. Toda conta recebe o email de apresentação pronta, no idioma em que o app estava configurado quando a apresentação foi criada."
      },
      {
        "q": "Posso começar outra apresentação enquanto uma está gerando?",
        "a": "Em planos pagos, sim. O plano Free inclui um negócio, então finalize a primeira apresentação antes de começar outra."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "download-powerpoint-or-pdf",
      "share-a-deck-link"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "brand-from-your-website",
    "category": "redesign",
    "title": "Como o PitchBoost captura sua marca e como alterá-la",
    "metaDescription": "O PitchBoost captura seu logo, cores, fontes e tom do seu site em cerca de 15 segundos. Como verificar, substituir o logo e adicionar imagens de produtos.",
    "answer": "O PitchBoost captura sua marca do seu site: insira o endereço e uma varredura de 15 segundos captura seu logo, cores da marca, fontes e tom de voz. Você vê o resultado antes de qualquer coisa ser gerada e pode substituir o logo ou adicionar imagens. O redesign é construído a partir dessa marca, não de um modelo, então a apresentação fica com a cara da sua empresa em vez de parecer uma ferramenta de slides.",
    "steps": [
      {
        "title": "Insira seu site",
        "body": "Na etapa do site, cole o endereço da sua página inicial. O PitchBoost busca a página, lê seus serviços e proposta de valor, e extrai cores, fontes e o logo."
      },
      {
        "title": "Verifique a marca capturada",
        "body": "A próxima tela mostra o que foi encontrado. Se o logo estiver errado (um selo de parceiro, um ícone em vez do logotipo), clique em \"Não é seu logotipo? Troque\" e faça upload de um PNG ou SVG."
      },
      {
        "title": "Adicione imagens se você tiver",
        "body": "Insira fotos de produtos, retratos ou capturas de tela. Elas são a maior melhoria na aparência de uma apresentação. Qualquer imagem que não se encaixe no layout gerado é mantida nos recursos de marca do negócio para uso no editor."
      }
    ],
    "sections": [
      {
        "heading": "Ainda não tem site",
        "paragraphs": [
          "Escolha \"Não tenho site\" na etapa do site e descreva seu negócio. O PitchBoost escolhe uma paleta e tipografia adequadas à descrição, e você pode fazer upload de um logo manualmente."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Posso alterar as cores depois que a apresentação for gerada?",
        "a": "Sim, no editor, por slide ou para toda a apresentação. A próxima apresentação para a mesma empresa reutiliza a marca corrigida."
      },
      {
        "q": "Ele copia texto do meu site para a apresentação?",
        "a": "Para um rebuild, não: o conteúdo vem dos seus slides carregados. O site é usado para marca e contexto. Para uma nova apresentação construída a partir de um briefing, o posicionamento do seu site informa o texto."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "google-slides-and-keynote",
      "how-long-does-a-deck-take"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "crm-workflow-decks",
    "category": "integrations",
    "title": "Como criar apresentações a partir dos fluxos de trabalho do seu CRM",
    "metaDescription": "Instale o PitchBoost no seu CRM, conecte a conta do PitchBoost que paga as apresentações e adicione a etapa Create PitchBoost deck a qualquer fluxo de trabalho. O que fica no contato, como o link passa para as próximas etapas e os dois gatilhos.",
    "answer": "Para criar apresentações a partir dos fluxos de trabalho do seu CRM, instale o PitchBoost na subconta pelo link de instalação, conecte na página que se abre a conta do PitchBoost que pagará as apresentações e adicione a etapa Create PitchBoost deck a qualquer fluxo. A etapa responde na hora com o link da apresentação, a apresentação fica pronta em cerca de dois a quatro minutos e o link é gravado no campo PitchBoost deck do contato e em uma nota. Dois gatilhos, Deck ready e Deck viewed, iniciam os fluxos de acompanhamento.",
    "steps": [
      {
        "title": "Instale o PitchBoost no seu CRM",
        "body": "Abra o link de instalação que você recebeu (ou a página do PitchBoost no marketplace de aplicativos do seu CRM), clique em Install, escolha as subcontas e conceda as permissões solicitadas. O PitchBoost pede acesso apenas a contatos, campos personalizados, oportunidades, dados da localização e fluxos de trabalho."
      },
      {
        "title": "Conecte a conta do PitchBoost que paga",
        "body": "Após a instalação, abre-se uma página do PitchBoost perguntando a qual conta do PitchBoost as apresentações serão cobradas. Entre (uma conta gratuita serve) e clique em Connect. As apresentações criadas por qualquer fluxo das contas instaladas usam a cota dessa conta."
      },
      {
        "title": "Confira a página do PitchBoost no menu à esquerda",
        "body": "Dentro da subconta, o menu à esquerda agora tem uma entrada PitchBoost. Ela mostra Connected com o nome da conta, lista as apresentações criadas a partir de fluxos e tem as opções Disconnect e Remove."
      },
      {
        "title": "Adicione a etapa Create PitchBoost deck a um fluxo",
        "body": "No editor de fluxos, adicione uma ação, abra a aba Apps e escolha Create PitchBoost deck. Escolha o tipo (apresentação ou folha de vendas de uma página), escreva um briefing curto como \"Comece pelo preço\" e deixe os campos de empresa e site do prospect mapeados para a empresa e o site do contato, a menos que queira substituí-los."
      },
      {
        "title": "Use o link da apresentação nas próximas etapas",
        "body": "A etapa devolve deck_url imediatamente. Adicione-o ao e-mail, SMS ou tarefa seguinte; o link abre uma página provisória enquanto a apresentação é construída e a apresentação pronta quando termina. A etapa também devolve status (building, not_linked ou error) e deck_title, então um fluxo pode se ramificar se uma execução falhar."
      },
      {
        "title": "Inicie acompanhamentos a partir dos dois gatilhos",
        "body": "Crie um fluxo com o gatilho Deck ready para enviar a apresentação quando estiver pronta e outro com Deck viewed para fazer o acompanhamento quando o prospect a abrir. Deck viewed dispara no máximo uma vez a cada dez minutos por apresentação."
      }
    ],
    "sections": [
      {
        "heading": "O que fica no contato",
        "paragraphs": [
          "Quando a construção termina, o PitchBoost grava o link da apresentação em um campo personalizado chamado PitchBoost deck (criado no primeiro uso) e adiciona uma nota no contato com o link e o título. A apresentação também aparece na página do PitchBoost no menu à esquerda.",
          "A apresentação é construída a partir do nome da empresa e do site do contato e do seu briefing. Se o contato não tiver site, o PitchBoost trabalha só com o nome da empresa e o briefing, então uma frase sobre o que você vende e quem é o contato faz diferença de verdade."
        ]
      },
      {
        "heading": "Cobrança e limites",
        "paragraphs": [
          "As apresentações são construídas e hospedadas pelo PitchBoost e cobradas da conta do PitchBoost que você conectou: uma conta gratuita inclui uma apresentação por mês e os planos pagos acrescentam mais. Seu CRM pode contar etapas de fluxo de aplicativos instalados como execuções premium e cobrá-las à parte depois da cota gratuita.",
          "Se a etapa responder com status not_linked, ninguém conectou ainda uma conta do PitchBoost a essa subconta nem à agência: abra a página do PitchBoost no menu à esquerda e clique em Connect."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Várias subcontas podem compartilhar uma conta do PitchBoost?",
        "a": "Sim. Quando o aplicativo é instalado para a agência inteira, cada subconta cobra da conta do PitchBoost conectada pela agência, a menos que essa subconta conecte a sua própria, que tem prioridade."
      },
      {
        "q": "A apresentação muda quando o contato muda?",
        "a": "Não. Uma apresentação é construída uma vez com os dados do contato no momento em que a etapa roda. Rode a etapa de novo para criar outra; o campo e a nota do contato são atualizados com a mais recente."
      },
      {
        "q": "Qual é a diferença entre Disconnect e Remove?",
        "a": "Disconnect mantém o aplicativo instalado, mas desvincula a conta do PitchBoost, então as etapas respondem not_linked até alguém conectar de novo. Remove desinstala o aplicativo da subconta, e os fluxos que ainda contêm suas etapas as pulam."
      },
      {
        "q": "Posso baixar as apresentações?",
        "a": "Sim. Toda apresentação abre no PitchBoost, onde pode ser editada e baixada como PowerPoint, PDF ou Google Slides como qualquer outra apresentação do PitchBoost."
      }
    ],
    "related": [
      "share-a-deck-link",
      "download-powerpoint-or-pdf",
      "credits-and-plans"
    ],
    "updated": "2026-10-20"
  },
];
