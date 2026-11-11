import type { HelpArticle } from "./help";

/**
 * GENERATED from lib/help.ts by the translation job (Claude, strict style
 * guide: idiomatic, no em dashes, product names, prices and UI labels
 * matched to the app's own es strings). Slugs match the English articles
 * one to one so hreflang works. Regenerate with .test-dist/translate-help.mts
 * in the app repo; do not hand-edit facts here, edit help.ts and rerun.
 */
export const HELP_ARTICLES_ES: HelpArticle[] = [
  {
    "slug": "redesign-a-powerpoint",
    "category": "redesign",
    "title": "Cómo rediseñar un PowerPoint con PitchBoost",
    "metaDescription": "Sube un .pptx, indica tu sitio web a PitchBoost y recibe la presentación rediseñada con tu marca en pocos minutos. Paso a paso, con lo que ocurre a tu contenido.",
    "answer": "Para rediseñar un PowerPoint en PitchBoost, elige \"Rediseñar una presentación\" después de iniciar sesión, sube el .pptx o un PDF de la presentación (hasta 50 MB y 75 diapositivas), ingresa el sitio web de tu empresa para que capture tu logo y tus colores, e inicia la reconstrucción. La presentación reconstruida llega en unos 2 a 5 minutos como una presentación web que puedes editar, compartir como enlace, descargar como PowerPoint o PDF, o abrir en Google Slides. El contenido de tus diapositivas se conserva; el diseño, la tipografía, el espaciado y la marca se reconstruyen.",
    "steps": [
      {
        "title": "Inicia sesión y elige \"Rediseñar una presentación\"",
        "body": "Crea una cuenta gratuita o inicia sesión. Una cuenta nueva elige \"Rediseñar una presentación que ya tengo\" en su primera pantalla; después, es la tarjeta \"Rediseñar una presentación\" de Inicio. Si vienes de una página de rediseño de este sitio, llegas ahí automáticamente."
      },
      {
        "title": "Sube el .pptx o el PDF",
        "body": "Arrastra el archivo de PowerPoint, o un PDF de la presentación, o haz clic para buscarlo. Se aceptan archivos de hasta 50 MB y 75 diapositivas. Los usuarios de Keynote y Google Slides exportan primero a .pptx (un clic de menú en cualquiera de las dos aplicaciones)."
      },
      {
        "title": "Ingresa el sitio web de tu empresa",
        "body": "PitchBoost lo escanea durante unos 15 segundos y captura tu logo, colores de marca, fuentes y tono de voz. Si capturó el logo incorrecto, reemplázalo ahí mismo antes de generar."
      },
      {
        "title": "Decide qué hacer con una presentación larga",
        "body": "Si la presentación tiene más diapositivas de las que tu plan reconstruye, PitchBoost pregunta si condensarla para que quepa o reconstruir solo las primeras diapositivas. La mayoría de las presentaciones dentro del límite omiten este paso."
      },
      {
        "title": "Inicia la reconstrucción y espera, o sal",
        "body": "En Inicio, pulsa la flecha del cuadro de texto; en la primera pantalla de una cuenta nueva, haz clic en Generar. La reconstrucción suele tardar de 2 a 5 minutos, incluida una revisión de calidad. Puedes ver cómo llegan las diapositivas o cerrar la pestaña: PitchBoost te envía por correo un enlace a la presentación terminada."
      },
      {
        "title": "Revisa, edita, comparte",
        "body": "Abre cualquier diapositiva en el editor para escribir en ella, arrastrar lo que quieras o pedirle un cambio a la IA, publica la presentación como un enlace no listado, o descárgala como PowerPoint o PDF o ábrela en Google Slides desde la pantalla de compartir."
      }
    ],
    "sections": [
      {
        "heading": "Qué cambia y qué no",
        "paragraphs": [
          "El contenido de cada diapositiva se preserva: títulos, texto del cuerpo, números, valores de gráficos y estructura orientada al presentador. Lo que se reconstruye es todo lo visual: diseño, jerarquía, tipografía, color, espaciado e imágenes, todo en la marca capturada de tu sitio web.",
          "Las diapositivas densas se reestructuran en lugar de reducirse. Un muro de viñetas se convierte en un diseño que coincide con su contenido (pasos, una comparación, una cuadrícula). Nada se inventa; una verificación de datos compara la presentación reconstruida con tu original."
        ]
      },
      {
        "heading": "Límites de diapositivas por plan",
        "paragraphs": [
          "El plan gratuito reconstruye hasta 10 diapositivas, Starter hasta 25 y Pro hasta 60. Una presentación más larga puede condensarse para ajustarse antes de que comience la reconstrucción, y la pantalla de compartir te indica cuántas diapositivas se conservaron."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Funciona con archivos .ppt?",
        "a": "Sube .pptx. Abre un .ppt antiguo en PowerPoint y usa Guardar como para convertirlo; no se pierde nada."
      },
      {
        "q": "¿Puedo rediseñar solo algunas diapositivas?",
        "a": "La reconstrucción se ejecuta en toda la presentación. Después cada diapositiva es editable, y puedes regenerar o restaurar diapositivas individuales en el editor."
      },
      {
        "q": "¿Cuánto cuesta?",
        "a": "El plan gratuito incluye una presentación con IA al mes, hasta 10 diapositivas, con una pequeña insignia de PitchBoost. Starter cuesta $7 al mes para hasta 25 diapositivas y sin insignia; Pro cuesta $29 al mes para hasta 60 diapositivas y dominios personalizados."
      }
    ],
    "related": [
      "google-slides-and-keynote",
      "slide-limits-by-plan",
      "download-powerpoint-or-pdf",
      "how-long-does-a-deck-take"
    ],
    "updated": "2026-11-10"
  },
  {
    "slug": "google-slides-and-keynote",
    "category": "redesign",
    "title": "Cómo rediseñar presentaciones de Google Slides o Keynote",
    "metaDescription": "PitchBoost lee archivos de PowerPoint y PDF. Exporta tu presentación de Google Slides o Keynote a PowerPoint en un paso, súbela y recíbela rediseñada con tu marca.",
    "answer": "PitchBoost acepta archivos de PowerPoint (.pptx) y PDF, y tanto Google Slides como Keynote exportan a .pptx en un solo paso con el texto, las imágenes y los gráficos intactos. Exporta el archivo, súbelo a PitchBoost y el rediseño funciona exactamente igual que con una presentación de PowerPoint.",
    "steps": [
      {
        "title": "Google Slides: Archivo > Descargar > Microsoft PowerPoint (.pptx)",
        "body": "La descarga es una copia completa de la presentación. Las notas del orador y los gráficos se incluyen, los videos incrustados no."
      },
      {
        "title": "Keynote: Archivo > Exportar a > PowerPoint",
        "body": "Mantén la configuración predeterminada. Keynote convierte sus diseños y texto a objetos de PowerPoint que PitchBoost puede leer."
      },
      {
        "title": "Sube el .pptx a PitchBoost",
        "body": "Inicia sesión, elige \"Rediseñar una presentación\" y arrastra el archivo exportado. Luego agrega tu sitio web para que el rediseño use tu marca."
      }
    ],
    "sections": [
      {
        "heading": "Volver a Google Slides o Keynote después",
        "paragraphs": [
          "En la pantalla de compartir, la fila Google Slides del apartado Descargar guarda una copia editable de la presentación en tu Google Drive, lista para abrir en Google Slides (la primera vez, Google te pide que lo permitas). Para Keynote, descarga el PowerPoint editable: Keynote abre .pptx directamente. Cada palabra sigue siendo editable. El enlace de la presentación web también funciona por sí solo, sin necesidad de ninguna aplicación."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Sobrevivirán mis fuentes de Google Slides?",
        "a": "El rediseño reemplaza las fuentes de la presentación con la tipografía de tu marca, tomada de tu sitio web, así que no se necesitan las fuentes originales."
      },
      {
        "q": "¿Puedo subir un PDF en su lugar?",
        "a": "Sí. Sube un PDF de la presentación de la misma forma: PitchBoost lee cada página, incluidos los gráficos, las tablas y las diapositivas que son solo imágenes, y la reconstruye con tu marca. Un PDF protegido con contraseña hay que desbloquearlo primero."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "download-powerpoint-or-pdf",
      "brand-from-your-website"
    ],
    "updated": "2026-11-10"
  },
  {
    "slug": "slide-limits-by-plan",
    "category": "redesign",
    "title": "Cuántas diapositivas rediseña PitchBoost en cada plan",
    "metaDescription": "Free rediseña hasta 10 diapositivas, Starter hasta 25, Pro y Business hasta 60. Qué pasa con una presentación más larga: condensar o rediseñar solo las primeras.",
    "answer": "El plan gratuito rediseña presentaciones de hasta 10 diapositivas, Starter hasta 25, y Pro y Business hasta 60. Si tu presentación es más larga, PitchBoost te ofrece condensarla para que quepa (la misma historia, menos diapositivas) o rediseñar solo las primeras diapositivas. La pantalla de compartir muestra cuántas de tus diapositivas originales se conservaron y cómo rediseñar el resto: con un pago único para esa presentación ($9, para presentaciones de hasta 25 diapositivas) o con un plan.",
    "sections": [
      {
        "heading": "Los límites",
        "paragraphs": [
          "Free: hasta 10 diapositivas por presentación, una presentación con IA al mes. Starter ($7 al mes): hasta 25 diapositivas. Pro ($29 al mes) y Business ($79 al mes): hasta 60 diapositivas. El límite se aplica a la presentación que PitchBoost produce, no al archivo que subes; puedes subir una presentación de 45 diapositivas en cualquier plan. El archivo en sí puede tener hasta 75 diapositivas."
        ]
      },
      {
        "heading": "Condensar o cortar",
        "paragraphs": [
          "Cuando una presentación supera el límite, eliges antes de que se genere nada. Condensar mantiene la narrativa y fusiona o elimina las diapositivas menos esenciales para que la historia completa quepa. Rediseñar las primeras N conserva cada diapositiva hasta el límite exactamente y deja el resto fuera.",
          "Condensar suele ser la mejor opción para un pitch: la mayoría de las presentaciones de pitch fuertes tienen entre 10 y 15 diapositivas. Cortar es mejor cuando la presentación es una secuencia (un módulo de capacitación, un proceso paso a paso) donde el orden importa más que la longitud."
        ]
      },
      {
        "heading": "Presentaciones muy largas",
        "paragraphs": [
          "PitchBoost acepta PowerPoints de hasta 75 diapositivas y lee las primeras 60, así que una presentación de 70 diapositivas en Pro vuelve con 60 diapositivas como máximo, condensada o cortada. Un archivo de más de 75 diapositivas se rechaza al subirlo, con un aviso que lo explica. Divide las presentaciones muy largas en módulos y rediseña cada uno."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Al mejorar el plan se rediseñan las diapositivas faltantes automáticamente?",
        "a": "No. Después de mejorar tu plan, abre el negocio y ejecuta el rediseño de nuevo; la pantalla de compartir tiene un botón para eso. La presentación completa reemplaza a la condensada."
      },
      {
        "q": "¿El límite también se aplica a presentaciones nuevas?",
        "a": "Sí. Una presentación construida desde un brief usa el mismo límite de diapositivas por plan."
      },
      {
        "q": "¿Una presentación condensada cuenta como una presentación completa?",
        "a": "Sí. Un rediseño es una presentación con IA, con un precio según su longitud: 100 créditos hasta 10 diapositivas, más 8 por cada diapositiva adicional."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "credits-and-plans",
      "download-powerpoint-or-pdf"
    ],
    "updated": "2026-10-27"
  },
  {
    "slug": "download-powerpoint-or-pdf",
    "category": "output",
    "title": "Cómo descargar tu presentación como PowerPoint o PDF",
    "metaDescription": "Descarga una presentación como PowerPoint editable, PowerPoint de aspecto exacto o PDF con cualquier plan de pago o por $9 cada una. Dónde están los botones y qué elegir.",
    "answer": "Abre la pantalla de compartir de la presentación y usa los botones de descarga: \"Descargar PowerPoint\" te da un .pptx de aspecto exacto donde cada diapositiva es una imagen de la presentación web, \"PowerPoint editable\" te da un .pptx que se ve como la presentación web, con cada palabra como un cuadro de texto real de PowerPoint que puedes cambiar, y \"PDF\" te da una página por diapositiva. Las descargas vienen con todos los planes de pago. En el plan gratuito, compartir la presentación como enlace en vivo sigue siendo gratis, y puedes desbloquear las descargas de una presentación con un pago único de $9 (presentaciones de hasta 25 diapositivas), que además quita la insignia.",
    "steps": [
      {
        "title": "Abre la presentación",
        "body": "Desde tu panel, abre el negocio y haz clic en la presentación. La pantalla de compartir muestra la vista previa con los controles de descarga y publicación al lado."
      },
      {
        "title": "Elige el archivo que necesitas",
        "body": "PowerPoint editable para cualquier cosa en la que seguirás trabajando. PowerPoint de aspecto exacto cuando la presentación debe verse idéntica a la versión web en la máquina de otra persona. PDF para archivos adjuntos de correo e impresión."
      },
      {
        "title": "Espera el archivo",
        "body": "El botón muestra \"Preparando\" mientras el archivo se genera, normalmente unos segundos. La descarga comienza automáticamente."
      }
    ],
    "sections": [
      {
        "heading": "Editable versus aspecto exacto",
        "paragraphs": [
          "El PowerPoint editable se ve como la presentación web: el diseño de cada diapositiva (fondo, imágenes, formas y gráficos) llega como una sola imagen, y cada palabra va encima como un cuadro de texto real de PowerPoint que puedes editar, mover o cambiar de estilo. Si tu computadora no tiene alguna de las fuentes de la presentación, PowerPoint usa una parecida, así que una línea puede cortarse un poco distinto. El archivo de aspecto exacto es idéntico pixel por pixel porque cada diapositiva es una sola imagen de alta resolución, lo que también significa que su texto no se puede editar. En caso de duda, llévate ambos; una vez desbloqueadas las descargas de una presentación, cada archivo no cuesta nada más."
        ]
      },
      {
        "heading": "La insignia",
        "paragraphs": [
          "En el plan gratuito, cada diapositiva lleva una pequeña insignia \"Powered by PitchBoost\", también en el enlace en vivo. Starter ($7 al mes) la elimina de cada presentación y exportación, y también puedes eliminarla de una sola presentación con una compra única de $9 desde la pantalla de compartir, que además desbloquea las descargas de esa presentación."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Puedo descargar sin publicar?",
        "a": "Sí. Las descargas funcionan en un borrador privado. Publicar solo importa para el enlace web."
      },
      {
        "q": "¿Las fuentes están incrustadas en el PowerPoint editable?",
        "a": "El archivo nombra las fuentes de tu marca; si una máquina no las tiene instaladas, PowerPoint sustituye una fuente similar. El archivo de aspecto exacto no tiene ese problema porque las diapositivas son imágenes."
      },
      {
        "q": "¿Hay una exportación a Google Slides?",
        "a": "Sí. En la pantalla de compartir, la fila Google Slides del apartado Descargar guarda una copia editable de la presentación en tu Google Drive, lista para abrir en Google Slides. Viene con los mismos planes que las descargas de PowerPoint y PDF."
      }
    ],
    "related": [
      "share-a-deck-link",
      "google-slides-and-keynote",
      "credits-and-plans"
    ],
    "updated": "2026-11-10"
  },
  {
    "slug": "share-a-deck-link",
    "category": "sharing",
    "title": "Cómo compartir una presentación como enlace y ver quién la abrió",
    "metaDescription": "Publica una presentación para obtener un enlace no listado, envíalo a un prospecto y recibe un aviso en cuanto lo abra. Qué rastrea el enlace, en todos los planes.",
    "answer": "Haz clic en \"Publicar y copiar enlace\" en la pantalla de compartir de la presentación. Eso crea un enlace no listado (cualquiera que lo tenga puede verlo; nadie puede encontrarlo de otra manera) y lo copia a tu portapapeles. Cuando un prospecto abre el enlace, PitchBoost te envía un correo. Todos los planes muestran qué diapositivas leyó cada espectador y por cuánto tiempo.",
    "steps": [
      {
        "title": "Publica la presentación",
        "body": "En la pantalla de compartir haz clic en \"Publicar y copiar enlace\". Hasta que lo hagas, la presentación es un borrador privado que solo tú y tu equipo pueden ver."
      },
      {
        "title": "Envía el enlace o añade destinatarios",
        "body": "Pega el enlace donde quieras. Para rastreo con nombre, añade destinatarios en el negocio: cada uno obtiene un enlace privado para que sepas exactamente quién abrió qué."
      },
      {
        "title": "Sigue el negocio",
        "body": "Recibes un correo en el momento en que se abre la presentación. La página del negocio muestra cada visita, con el tiempo por diapositiva y qué diapositivas se omitieron."
      },
      {
        "title": "Desconéctala cuando quieras",
        "body": "\"Hacer privada\" en la pantalla de compartir detiene el funcionamiento del enlace hasta que publiques de nuevo."
      }
    ],
    "sections": [
      {
        "heading": "La sala de negocio",
        "paragraphs": [
          "El enlace abre una página que contiene la presentación más cualquier otra cosa que hayas adjuntado al negocio (una hoja resumen, un Q&A). Los espectadores pueden hacer una pregunta desde la página; llega a tu bandeja de entrada con su correo electrónico si lo dejaron. Un espectador ve la presentación, nunca tus notas ni el resto de tu cuenta."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Puedo usar mi propio dominio para el enlace?",
        "a": "Los dominios personalizados están incluidos en Pro y Business. Free y Starter comparten enlaces en app.pitchboost.ai."
      },
      {
        "q": "¿Necesito el correo del espectador para rastrearlo?",
        "a": "No. Cada apertura se rastrea en el enlace mismo. Añadir destinatarios le da a cada persona su propio enlace para que los análisis tengan nombre."
      },
      {
        "q": "¿El enlace expira?",
        "a": "No. Funciona hasta que hagas la presentación privada o elimines el negocio."
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
    "title": "Cómo usar PitchBoost en ChatGPT",
    "metaDescription": "Añade el plugin de PitchBoost a ChatGPT, inicia sesión una vez y pídele que rediseñe tu presentación o cree una nueva. Funciona con ChatGPT gratis. Los pasos exactos.",
    "answer": "PitchBoost es un plugin del directorio de plugins de ChatGPT y funciona en cuentas gratuitas de ChatGPT. Añádelo, inicia sesión en PitchBoost una vez (basta con una cuenta gratuita) y luego habla con ChatGPT con normalidad: adjunta un .pptx y di \"haz que se vea profesional\", o describe la presentación que necesitas. ChatGPT envía el trabajo a PitchBoost y responde con un enlace a la presentación terminada; ábrela en PitchBoost para ver la vista previa completa y las descargas de PowerPoint y PDF.",
    "steps": [
      {
        "title": "Añade el plugin de PitchBoost",
        "body": "En ChatGPT, abre el directorio de plugins, busca PitchBoost y añádelo. Está disponible en las cuentas gratuitas de ChatGPT y también en los planes de pago."
      },
      {
        "title": "Inicia sesión en PitchBoost",
        "body": "La primera vez que lo uses, ChatGPT abre una ventana de inicio de sesión de PitchBoost. Inicia sesión o crea una cuenta gratuita. Lo haces una sola vez: ChatGPT recuerda la conexión."
      },
      {
        "title": "Adjunta una presentación y pide lo que quieres",
        "body": "En un chat, adjunta tu .pptx (Google Slides y Keynote exportan a .pptx en un solo paso) y di lo que quieres: \"rediseña esto con nuestra marca\", \"haz que mi presentación de clase se vea profesional\", o describe una presentación nueva desde cero. Si tienes un sitio web para la marca, indícalo."
      },
      {
        "title": "Abre la presentación en PitchBoost",
        "body": "Unos minutos después, ChatGPT responde con el enlace. Haz clic en \"Open the deck in PitchBoost\" para ver la vista previa completa, descargar el PowerPoint editable o un PDF y compartir el enlace con seguimiento."
      }
    ],
    "sections": [
      {
        "heading": "Qué puede hacer ChatGPT con PitchBoost",
        "paragraphs": [
          "Reconstruir una presentación que adjuntes, comprobar si una reconstrucción ha terminado, crear una presentación nueva a partir de una descripción, listar tus presentaciones recientes, obtener el enlace de una y publicar un borrador. También puede crear una presentación de muestra antes de que inicies sesión, con una insignia, que puedes reclamar más tarde.",
          "No puede cambiar tu plan, eliminar nada ni ver presentaciones fuera de tu cuenta. Las reconstrucciones y las presentaciones nuevas usan la misma cuota mensual que la aplicación: una presentación al mes en el plan gratuito, de hasta 10 diapositivas."
        ]
      },
      {
        "heading": "Si prefieres usar la dirección MCP",
        "paragraphs": [
          "El plugin funciona sobre el servidor MCP de PitchBoost. Los desarrolladores que quieran conectarlo a mano, en el modo desarrollador de ChatGPT o en cualquier otro cliente MCP, pueden usar https://app.pitchboost.ai/api/mcp con OAuth; el artículo sobre Claude tiene los detalles."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿El plugin funciona en una cuenta gratuita de ChatGPT?",
        "a": "Sí. Añádelo desde el directorio de plugins como cualquier otro plugin. Una cuenta gratuita de PitchBoost también sirve, con una presentación al mes."
      },
      {
        "q": "¿Dónde va la presentación reconstruida?",
        "a": "A tu cuenta de PitchBoost, dentro de un negocio con el nombre de la presentación. El enlace que te da ChatGPT la abre directamente; desde ahí puedes editarla, descargarla y compartirla como cualquier otra presentación."
      },
      {
        "q": "¿Se envía el contenido de mi presentación a PitchBoost?",
        "a": "Sí, el contenido de las diapositivas que ChatGPT extrae se envía a PitchBoost para reconstruir la presentación, y se guarda en tu cuenta junto con el resultado. La política de privacidad explica cómo se conservan y se eliminan los datos."
      }
    ],
    "related": [
      "connect-claude",
      "redesign-a-powerpoint",
      "credits-and-plans"
    ],
    "updated": "2026-09-30"
  },
  {
    "slug": "connect-claude",
    "category": "assistants",
    "title": "Cómo usar PitchBoost en Claude",
    "metaDescription": "Agrega PitchBoost a Claude como conector personalizado, inicia sesión una vez y pídele a Claude que rediseñe una presentación o cree una nueva. Los pasos exactos para claude.ai y Claude Code.",
    "answer": "En Claude, agrega PitchBoost como conector personalizado con la URL https://app.pitchboost.ai/api/mcp, inicia sesión cuando se te solicite y luego pídele a Claude que reconstruya una presentación que subas o que cree una nueva para un prospecto. Claude llama a PitchBoost mediante el Model Context Protocol (MCP) y devuelve el enlace a la presentación terminada.",
    "steps": [
      {
        "title": "Abre la configuración de conectores",
        "body": "En claude.ai ve a Ajustes, luego a Conectores y haz clic en Agregar conector personalizado. En un plan Team o Enterprise, puede que un administrador necesite agregarlo para la organización."
      },
      {
        "title": "Agrega el servidor de PitchBoost",
        "body": "Nombre: PitchBoost. URL: https://app.pitchboost.ai/api/mcp. Deja los campos de cliente OAuth vacíos: PitchBoost registra el cliente automáticamente. Guarda."
      },
      {
        "title": "Conecta tu cuenta",
        "body": "Haz clic en Conectar junto a PitchBoost. Se abre una ventana de inicio de sesión de PitchBoost: inicia sesión o crea una cuenta gratuita. Claude recuerda la conexión."
      },
      {
        "title": "Pide una presentación",
        "body": "En un chat, asegúrate de que PitchBoost esté habilitado en el menú de herramientas. Adjunta un .pptx y di \"reconstruye esto con nuestra marca\", o describe al prospecto y la oferta y pide una presentación de ventas. Claude responde con el enlace cuando esté lista."
      }
    ],
    "sections": [
      {
        "heading": "Claude Code y otros clientes MCP",
        "paragraphs": [
          "Cualquier cliente que hable MCP sobre Streamable HTTP puede usar la misma dirección. En Claude Code, agrégalo con el CLI (claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp) y completa el inicio de sesión en la ventana del navegador que se abre. Cursor y Windsurf aceptan la misma URL en su configuración de MCP."
        ]
      },
      {
        "heading": "Qué puede hacer Claude con PitchBoost",
        "paragraphs": [
          "Reconstruir una presentación cargada, sondear la reconstrucción hasta que esté lista, crear una presentación nueva a partir de un resumen, listar tus presentaciones recientes, obtener una por id y publicar un borrador. También puede hacer una presentación de muestra sin cuenta. Nada de lo que hace es destructivo y nunca cambia tu plan."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Está PitchBoost en el directorio de conectores de Claude?",
        "a": "Hay una inclusión en el directorio en curso. Hasta que aparezca, el conector personalizado de arriba es la ruta y funciona en todos los planes de claude.ai que permiten conectores personalizados."
      },
      {
        "q": "¿Usa mis créditos?",
        "a": "Sí, igual que en la aplicación: una reconstrucción o una presentación nueva cuesta 100 créditos hasta 10 diapositivas, más 8 por cada diapositiva adicional. Listar y obtener presentaciones es gratis."
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
    "title": "Cómo funcionan los créditos y los planes",
    "metaDescription": "Créditos mensuales en cada plan: hasta 10 diapositivas cuestan 100 y cada diapositiva por encima de 10 suma 8. Qué incluye cada plan, qué se renueva y cómo comprar más.",
    "answer": "Cada plan de PitchBoost incluye una asignación mensual de créditos y cada acción de IA tiene un precio fijo: una presentación (nueva o reconstruida) de hasta 10 diapositivas cuesta 100 créditos, cada diapositiva por encima de 10 suma 8 (4 con el nuevo motor de presentaciones), una imagen con IA 10, editar una diapositiva 10, editar la presentación completa 50, escanear un sitio web 10. Free incluye 150 créditos al mes (una presentación), Starter 300, Pro 1,200 y Business 3,300. Los créditos del plan se renuevan cada mes; los créditos comprados en un paquete adicional (planes de pago) se conservan. En la aplicación ves el porcentaje de tu asignación que has usado, nunca una cifra en dólares que vaya sumando.",
    "sections": [
      {
        "heading": "Los planes",
        "paragraphs": [
          "Free: 150 créditos al mes, un negocio, presentaciones de hasta 10 diapositivas con una pequeña insignia, un enlace en vivo para compartir con analíticas completas de visualización y plantillas guardadas. Descargar un archivo requiere un plan de pago o un pago único de $9 por esa presentación. No se requiere tarjeta.",
          "Starter, $7 al mes: más créditos de IA, 300 al mes, negocios ilimitados, presentaciones de hasta 25 diapositivas, sin insignia en ningún lugar, descargas de PowerPoint, PDF y Google Slides, paquetes adicionales.",
          "Pro, $29 al mes: aún más créditos de IA, 1,200 al mes, presentaciones de hasta 60 diapositivas, dominios personalizados, acceso a la API y al MCP.",
          "Business, $79 al mes: nuestra mayor asignación de créditos de IA, 3,300 al mes, exportación de analíticas y envío desde tu propio dominio.",
          "Las analíticas completas de visualización, las plantillas guardadas y los compañeros de equipo están en todos los planes, Free incluido, sin costo por persona. Todos comparten los créditos de IA del espacio de trabajo.",
          "La facturación anual sale más barata: Starter $70 al año (unos $5.83 al mes), y Pro $24 y Business $66 al mes con pago anual."
        ]
      },
      {
        "heading": "Cuánto cuesta una presentación",
        "paragraphs": [
          "Una presentación tiene un precio según su tamaño, de esta lista, sin presupuesto antes de crearla: hasta 10 diapositivas son 100 créditos; cada diapositiva por encima de 10, 8 más (4 con el nuevo motor de presentaciones de Configuración); cada imagen con IA, 10. Los documentos adjuntos están incluidos hasta unas 10 páginas de texto; a partir de ahí suman cerca de 1 crédito por página.",
          "Cuando empieza una presentación, se apartan los créditos del tamaño que se espera que tenga, y al final se ajusta a lo que entrega: si sale más corta, se devuelve la diferencia. Una presentación de 24 diapositivas son 212 créditos; una de 60, 500. Si no te alcanza, el mensaje dice cuánto necesita la presentación y cuánto te queda."
        ]
      },
      {
        "heading": "Acumulación y paquetes",
        "paragraphs": [
          "Los créditos del plan se renuevan cada mes, en todos los planes, y los que no uses no pasan al mes siguiente. Los créditos que compras en un paquete sí. Los paquetes adicionales de 200 ($5), 700 ($15) y 1,900 ($40) créditos están disponibles en los planes de pago y nunca caducan mientras mantengas tu suscripción."
        ]
      },
      {
        "heading": "Qué es gratis",
        "paragraphs": [
          "Verificar datos, extraer gráficos, publicar, compartir, ver analíticas y descargar archivos nunca cuesta créditos. Solo la generación con IA los usa."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Qué pasa cuando se me acaban?",
        "a": "Las acciones de IA se pausan hasta el siguiente periodo, o hasta justo después de que compres un paquete o mejores tu plan. Todo lo ya generado sigue disponible; las descargas y los enlaces siguen funcionando."
      },
      {
        "q": "¿Cómo cambio o cancelo mi plan?",
        "a": "En la aplicación, abre Configuración y elige Plan. Los cambios se aplican de inmediato; si cancelas, conservas el plan de pago hasta el final del periodo que ya pagaste."
      },
      {
        "q": "¿Puedo quitar la insignia sin una suscripción?",
        "a": "Sí. La pantalla de compartir ofrece quitarla de esa presentación con un pago único. Starter la quita de todas las presentaciones."
      }
    ],
    "related": [
      "slide-limits-by-plan",
      "download-powerpoint-or-pdf",
      "share-a-deck-link"
    ],
    "updated": "2026-11-05"
  },
  {
    "slug": "how-long-does-a-deck-take",
    "category": "redesign",
    "title": "Cuánto tarda una presentación y qué hacer mientras esperas",
    "metaDescription": "Rediseñar o crear una presentación suele tardar de 2 a 5 minutos, revisión de calidad incluida. Puedes cerrar la pestaña: PitchBoost te envía un enlace cuando esté lista.",
    "answer": "Una reconstrucción o una presentación nueva suele tardar de 2 a 5 minutos, incluidas una revisión de calidad y una verificación de datos que se ejecutan después de redactar las diapositivas. No tienes que esperar en la página: cierra la pestaña y PitchBoost te envía por correo un enlace a la presentación terminada, con una vista previa y la descarga de PowerPoint. La presentación también aparece en tu panel de control tan pronto como está lista.",
    "sections": [
      {
        "heading": "Qué ocurre durante esos minutos",
        "paragraphs": [
          "Primero PitchBoost lee tu archivo y la marca capturada y redacta cada diapositiva; el primer borrador aparece en pantalla en uno o dos minutos. Luego un revisor ajusta diseños y textos, una pasada de crítica verifica la presentación contra tu original para detectar cualquier cosa inventada u omitida, y se generan imágenes donde el diseño las requiere. Las presentaciones más largas y las que tienen muchos gráficos tardan más."
        ]
      },
      {
        "heading": "Si parece estancado",
        "paragraphs": [
          "Actualiza la página; la pantalla de progreso se reanuda desde el estado actual. Si pasan diez minutos sin borrador, la reconstrucción falló y no se cobran créditos. Inténtalo de nuevo, y si falla dos veces escribe a support@pitchboost.ai con el enlace del negocio para que podamos revisar el archivo exacto."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Recibiré un correo incluso en el plan Free?",
        "a": "Sí. Todas las cuentas reciben el correo de presentación lista, en el idioma en que estaba configurada la aplicación cuando se creó la presentación."
      },
      {
        "q": "¿Puedo iniciar otra presentación mientras una se está generando?",
        "a": "En los planes de pago, sí. El plan gratuito incluye un negocio, así que termina la primera presentación antes de iniciar otra."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "download-powerpoint-or-pdf",
      "share-a-deck-link"
    ],
    "updated": "2026-11-10"
  },
  {
    "slug": "brand-from-your-website",
    "category": "redesign",
    "title": "Cómo PitchBoost captura tu marca y cómo modificarla",
    "metaDescription": "PitchBoost captura tu logo, colores, tipografías y tono desde tu sitio web en unos 15 segundos. Cómo revisarlo, reemplazar el logo y añadir imágenes.",
    "answer": "PitchBoost toma tu marca desde tu sitio web: ingresa la dirección y un escaneo de 15 segundos captura tu logo, colores de marca, tipografías y tono de voz. Ves el resultado antes de que se genere nada y puedes reemplazar el logo o añadir imágenes. El rediseño se construye a partir de esa marca, no de una plantilla, así que la presentación se ve como tu empresa y no como una herramienta de diapositivas.",
    "steps": [
      {
        "title": "Ingresa tu sitio web",
        "body": "En el paso del sitio web, pega la dirección de tu página principal. PitchBoost obtiene la página, lee tus servicios y propuesta de valor, y extrae colores, tipografías y el logo."
      },
      {
        "title": "Revisa la marca capturada",
        "body": "La siguiente pantalla muestra lo que se encontró. Si el logo es incorrecto (una insignia de un socio, un ícono en lugar del logotipo), haz clic en \"¿No es tu logotipo? Cámbialo\" y sube un PNG o SVG."
      },
      {
        "title": "Añade imágenes si las tienes",
        "body": "Agrega fotos de productos, retratos o capturas de pantalla. Son la mayor mejora en cómo se ve una presentación. Todo lo que no encaje en el diseño generado se guarda en los recursos de marca del negocio para usarse en el editor."
      }
    ],
    "sections": [
      {
        "heading": "Aún no tienes sitio web",
        "paragraphs": [
          "Elige \"No tengo sitio web\" en el paso del sitio web y describe tu negocio en su lugar. PitchBoost elige una paleta y tipografía que se ajustan a la descripción, y puedes subir un logo manualmente."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Puedo cambiar los colores después de que se genere la presentación?",
        "a": "Sí, en el editor, por diapositiva o para toda la presentación. La siguiente presentación para la misma empresa reutiliza la marca corregida."
      },
      {
        "q": "¿Copia texto de mi sitio web en la presentación?",
        "a": "Para un rediseño, no: el contenido proviene de tus diapositivas subidas. El sitio web se usa para la marca y el contexto. Para una presentación nueva construida desde un brief, el posicionamiento de tu sitio informa el texto."
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
    "title": "Cómo crear presentaciones desde los flujos de trabajo de tu CRM",
    "metaDescription": "Instala PitchBoost en tu CRM, conecta la cuenta de PitchBoost que paga las presentaciones y añade el paso Create PitchBoost deck a cualquier flujo de trabajo. Qué queda en el contacto, cómo pasa el enlace a los siguientes pasos y los dos disparadores.",
    "answer": "Para crear presentaciones desde los flujos de trabajo de tu CRM, instala PitchBoost en la subcuenta con el enlace de instalación, conecta en la página que se abre la cuenta de PitchBoost que pagará las presentaciones y añade el paso Create PitchBoost deck a cualquier flujo. El paso responde al instante con el enlace de la presentación, la presentación queda lista en unos dos a cuatro minutos y el enlace se escribe en el campo PitchBoost deck del contacto y en una nota. Dos disparadores, Deck ready y Deck viewed, inician los flujos de seguimiento.",
    "steps": [
      {
        "title": "Instala PitchBoost en tu CRM",
        "body": "Abre el enlace de instalación que recibiste (o la ficha de PitchBoost en el marketplace de aplicaciones de tu CRM), pulsa Install, elige las subcuentas y concede los permisos solicitados. PitchBoost solo pide acceso a contactos, campos personalizados, oportunidades, datos de la ubicación y flujos de trabajo."
      },
      {
        "title": "Conecta la cuenta de PitchBoost que paga",
        "body": "Tras la instalación se abre una página de PitchBoost que pregunta a qué cuenta de PitchBoost se facturan las presentaciones. Inicia sesión (vale una cuenta gratuita) y pulsa Connect. Las presentaciones creadas por cualquier flujo de las cuentas instaladas consumen la cuota de esa cuenta."
      },
      {
        "title": "Revisa la página de PitchBoost en el menú izquierdo",
        "body": "Dentro de la subcuenta, el menú izquierdo tiene ahora una entrada PitchBoost. Muestra Connected con el nombre de la cuenta, lista las presentaciones creadas desde flujos y tiene las opciones Disconnect y Remove."
      },
      {
        "title": "Añade el paso Create PitchBoost deck a un flujo",
        "body": "En el editor de flujos, añade una acción, abre la pestaña Apps y elige Create PitchBoost deck. Elige el tipo (presentación o ficha comercial de una página), escribe un breve encargo como \"Empieza por el precio\" y deja los campos de empresa y web del prospecto asignados a la empresa y la web del contacto salvo que quieras sobrescribirlos."
      },
      {
        "title": "Usa el enlace de la presentación en los siguientes pasos",
        "body": "El paso devuelve deck_url de inmediato. Añádelo al correo, SMS o tarea que sigue; el enlace abre una página provisional mientras se construye la presentación y la presentación terminada cuando está lista. El paso también devuelve status (building, not_linked o error) y deck_title, así que un flujo puede bifurcarse si una ejecución falla."
      },
      {
        "title": "Inicia seguimientos desde los dos disparadores",
        "body": "Crea un flujo con el disparador Deck ready para enviar la presentación cuando esté terminada y otro con Deck viewed para hacer seguimiento cuando el prospecto la abra. Deck viewed se dispara como máximo una vez cada diez minutos por presentación."
      }
    ],
    "sections": [
      {
        "heading": "Qué queda en el contacto",
        "paragraphs": [
          "Cuando termina la construcción, PitchBoost escribe el enlace de la presentación en un campo personalizado llamado PitchBoost deck (se crea en el primer uso) y añade una nota en el contacto con el enlace y el título. La presentación también aparece en la página de PitchBoost del menú izquierdo.",
          "La presentación se construye a partir del nombre de la empresa y la web del contacto y de tu encargo. Si el contacto no tiene web, PitchBoost trabaja solo con el nombre de la empresa y el encargo, así que una frase sobre qué vendes y quién es el contacto marca la diferencia."
        ]
      },
      {
        "heading": "Facturación y límites",
        "paragraphs": [
          "Las presentaciones las construye y aloja PitchBoost y se facturan a la cuenta de PitchBoost que conectaste: una cuenta gratuita incluye una presentación al mes y los planes de pago añaden más. Tu CRM puede contar los pasos de flujo de aplicaciones instaladas como ejecuciones premium y facturarlos aparte una vez agotada su cuota gratuita.",
          "Si el paso responde con status not_linked, nadie ha conectado aún una cuenta de PitchBoost a esa subcuenta ni a su agencia: abre la página de PitchBoost en el menú izquierdo y pulsa Connect."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Pueden varias subcuentas compartir una cuenta de PitchBoost?",
        "a": "Sí. Cuando la aplicación se instala para toda la agencia, cada subcuenta factura a la cuenta de PitchBoost conectada por la agencia, salvo que esa subcuenta conecte la suya, que tiene prioridad."
      },
      {
        "q": "¿Cambia la presentación cuando cambia el contacto?",
        "a": "No. Una presentación se construye una vez con los datos del contacto en el momento en que se ejecuta el paso. Ejecuta el paso de nuevo para crear otra; el campo y la nota del contacto se actualizan con la más reciente."
      },
      {
        "q": "¿Qué diferencia hay entre Disconnect y Remove?",
        "a": "Disconnect mantiene la aplicación instalada pero desvincula la cuenta de PitchBoost, así que los pasos responden not_linked hasta que alguien vuelva a conectar. Remove desinstala la aplicación de la subcuenta y los flujos que aún contienen sus pasos los omiten."
      },
      {
        "q": "¿Puedo descargar las presentaciones?",
        "a": "Sí. Cada presentación se abre en PitchBoost, donde se puede editar y descargar como PowerPoint, PDF o Google Slides como cualquier otra presentación de PitchBoost."
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
