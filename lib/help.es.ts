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
    "answer": "Para rediseñar un PowerPoint en PitchBoost, elige \"Mejorar una que ya tengo\" después de iniciar sesión, sube el .pptx (hasta 50 MB), ingresa el sitio web de tu empresa para que capture tu logo y colores, y haz clic en Generar. La presentación reconstruida llega en unos 3 a 5 minutos como una presentación web que puedes editar, compartir como enlace o descargar como PowerPoint o PDF. El contenido de tus diapositivas se conserva; el diseño, tipografía, espaciado y marca se reconstruyen.",
    "steps": [
      {
        "title": "Inicia sesión y elige \"Mejorar una que ya tengo\"",
        "body": "Crea una cuenta gratuita o inicia sesión. En la primera pantalla selecciona la opción de reconstrucción. Si llegaste desde una página de rediseño en este sitio, aterrizas allí automáticamente."
      },
      {
        "title": "Sube el .pptx",
        "body": "Arrastra el archivo PowerPoint o haz clic para explorar. Se aceptan archivos de hasta 50 MB. Los usuarios de Keynote y Google Slides deben exportar primero a .pptx (un clic de menú en cualquiera de las dos aplicaciones)."
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
        "title": "Haz clic en Generar y espera, o sal",
        "body": "La reconstrucción suele tardar de 3 a 5 minutos incluyendo una revisión de calidad. Puedes ver cómo llegan las diapositivas o cerrar la pestaña: PitchBoost te envía por correo un enlace a la presentación terminada."
      },
      {
        "title": "Revisa, edita, comparte",
        "body": "Abre cualquier diapositiva en el editor para ajustarla, publica la presentación como un enlace no listado o descárgala como PowerPoint o PDF desde la pantalla de compartir."
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
        "a": "El plan gratuito incluye una presentación AI al mes, hasta 10 diapositivas, con una pequeña insignia de PitchBoost. Starter cuesta $9 al mes para hasta 25 diapositivas y sin insignia; Pro cuesta $29 al mes para hasta 60 diapositivas con análisis completo."
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
    "title": "Cómo rediseñar presentaciones de Google Slides o Keynote",
    "metaDescription": "PitchBoost lee archivos .pptx. Exporta tu presentación de Google Slides o Keynote a PowerPoint en un paso, súbela y recíbela rediseñada con tu marca.",
    "answer": "PitchBoost acepta archivos de PowerPoint (.pptx), y tanto Google Slides como Keynote exportan a .pptx en un solo paso con el texto, las imágenes y los gráficos intactos. Exporta el archivo, súbelo a PitchBoost y el rediseño funciona exactamente igual que con una presentación de PowerPoint.",
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
        "body": "Inicia sesión, elige \"Mejorar una que ya tengo\" y arrastra el archivo exportado. Luego agrega tu sitio web para que el rediseño use tu marca."
      }
    ],
    "sections": [
      {
        "heading": "Volver a Google Slides o Keynote después",
        "paragraphs": [
          "Descarga el PowerPoint editable desde la pantalla de compartir y ábrelo en cualquiera de las dos aplicaciones: Google Slides importa .pptx a través de Archivo > Importar diapositivas o subiéndolo a Drive, Keynote abre .pptx directamente. Los cuadros de texto y las formas permanecen editables. El enlace de la presentación web también funciona por sí solo, sin necesidad de ninguna aplicación."
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
        "a": "No para un rediseño. Un PDF no tiene estructura de diapositivas que se pueda leer. Exporta .pptx desde la aplicación original. Si solo tienes un PDF, crea una nueva presentación y pega el contenido."
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
    "title": "Cuántas diapositivas rediseña PitchBoost en cada plan",
    "metaDescription": "Free rediseña hasta 10 diapositivas, Starter hasta 25, Pro y Business hasta 60. Qué pasa con una presentación más larga: condensar o rediseñar solo las primeras.",
    "answer": "El plan gratuito rediseña presentaciones de hasta 10 diapositivas, Starter hasta 25, y Pro y Business hasta 60. Si tu presentación es más larga, PitchBoost te ofrece condensarla para que quepa (la misma historia, menos diapositivas) o rediseñar solo las primeras diapositivas. La pantalla de compartir muestra cuántas de tus diapositivas originales se conservaron y cómo rediseñar el resto después de mejorar tu plan.",
    "sections": [
      {
        "heading": "Los límites",
        "paragraphs": [
          "Free: hasta 10 diapositivas por presentación, una presentación con IA al mes. Starter ($9 al mes): hasta 25 diapositivas. Pro ($29 al mes) y Business ($79 al mes): hasta 60 diapositivas. El límite se aplica a la presentación que PitchBoost produce, no al archivo que subes; puedes subir una presentación de 45 diapositivas en cualquier plan."
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
          "Las presentaciones de más de 40 diapositivas siempre se condensan o se cortan a 40 antes de que se aplique el límite del plan, así que una presentación de capacitación de 90 diapositivas en Pro vuelve con 40 diapositivas como máximo. Divide las presentaciones muy largas en módulos y rediseña cada uno."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Al mejorar el plan se rediseñan las diapositivas faltantes automáticamente?",
        "a": "No. Después de mejorar tu plan, abre la presentación y ejecuta el rediseño de nuevo; la pantalla de compartir tiene un botón para eso. La presentación completa reemplaza a la condensada."
      },
      {
        "q": "¿El límite también se aplica a presentaciones nuevas?",
        "a": "Sí. Una presentación construida desde un brief usa el mismo límite de diapositivas por plan."
      },
      {
        "q": "¿Una presentación condensada cuenta como una presentación completa?",
        "a": "Sí. Un rediseño es una presentación con IA, sin importar su longitud, y usa 100 créditos."
      }
    ],
    "related": [
      "redesign-a-powerpoint",
      "credits-and-plans",
      "download-powerpoint-or-pdf"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "download-powerpoint-or-pdf",
    "category": "output",
    "title": "Cómo descargar tu presentación como PowerPoint o PDF",
    "metaDescription": "Todos los planes pueden descargar una presentación como PowerPoint editable, PowerPoint de aspecto exacto o PDF. Dónde están los botones y qué archivo elegir.",
    "answer": "Abre la pantalla de compartir de la presentación y usa los botones de descarga: \"Descargar PowerPoint\" te da un .pptx editable con cuadros de texto y formas reales, \"PowerPoint (editable)\" te da un .pptx de aspecto exacto donde cada diapositiva es una imagen de la presentación web, y \"PDF\" te da una página por diapositiva. Las descargas están disponibles en todos los planes; en el plan gratuito llevan una pequeña insignia de PitchBoost.",
    "steps": [
      {
        "title": "Abre la presentación",
        "body": "Desde tu panel, abre el deal y haz clic en la presentación. La pantalla de compartir muestra la vista previa con los controles de descarga y publicación al lado."
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
          "El PowerPoint editable es cercano al diseño web pero no idéntico pixel por pixel: usa los propios cuadros de texto, formas y fuentes de PowerPoint para que puedas editar cada elemento. El archivo de aspecto exacto es idéntico pixel por pixel porque cada diapositiva es una imagen de alta resolución, lo que también significa que el texto no se puede editar en PowerPoint. En caso de duda, llévate ambos; son gratuitos de generar."
        ]
      },
      {
        "heading": "La insignia",
        "paragraphs": [
          "En el plan gratuito, cada diapositiva lleva una pequeña insignia \"Powered by PitchBoost\", y viaja junto en las descargas de PDF y PowerPoint. Starter ($9 al mes) la elimina de cada presentación y exportación, y también puedes eliminarla de una sola presentación con una compra única desde la pantalla de compartir."
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
        "a": "Descarga el PowerPoint editable e impórtalo en Google Slides a través de Archivo > Importar diapositivas. Todo permanece editable."
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
    "title": "Cómo compartir una presentación como enlace y ver quién la abrió",
    "metaDescription": "Publica una presentación para obtener un enlace no listado, envíalo a un prospecto y recibe una notificación en cuanto lo abra. Qué rastrea el plan Free y qué añade Pro.",
    "answer": "Haz clic en \"Publicar y copiar enlace\" en la pantalla de compartir de la presentación. Eso crea un enlace no listado (cualquiera que lo tenga puede verlo; nadie puede encontrarlo de otra manera) y lo copia a tu portapapeles. Cuando un prospecto abre el enlace, PitchBoost te envía un correo. Free y Starter muestran análisis básicos (aperturas y vistas); Pro y Business muestran qué diapositivas leyó cada espectador y por cuánto tiempo.",
    "steps": [
      {
        "title": "Publica la presentación",
        "body": "En la pantalla de compartir haz clic en \"Publicar y copiar enlace\". Hasta que lo hagas, la presentación es un borrador privado que solo tú y tu equipo pueden ver."
      },
      {
        "title": "Envía el enlace o añade destinatarios",
        "body": "Pega el enlace donde quieras. Para rastreo con nombre, añade destinatarios en el trato: cada uno obtiene un enlace privado para que sepas exactamente quién abrió qué."
      },
      {
        "title": "Monitorea el trato",
        "body": "Recibes un correo en el momento en que se abre la presentación. La página del trato muestra cada visita; en Pro y Business también muestra tiempo por diapositiva y qué diapositivas se omitieron."
      },
      {
        "title": "Desconéctala cuando quieras",
        "body": "\"Hacer privada\" en la pantalla de compartir detiene el funcionamiento del enlace hasta que publiques de nuevo."
      }
    ],
    "sections": [
      {
        "heading": "La sala de trato",
        "paragraphs": [
          "El enlace abre una página que contiene la presentación más cualquier otra cosa que hayas adjuntado al trato (una hoja resumen, un Q&A). Los espectadores pueden hacer una pregunta desde la página; llega a tu bandeja de entrada con su correo electrónico si lo dejaron. Un espectador ve la presentación, nunca tus notas ni el resto de tu cuenta."
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
        "a": "No. Funciona hasta que hagas la presentación privada o elimines el trato."
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
    "metaDescription": "Añade PitchBoost a ChatGPT como conector, inicia sesión una vez y pide a ChatGPT que rediseñe una presentación, cree una nueva o liste tus presentaciones. Los pasos exactos.",
    "answer": "Añade PitchBoost a ChatGPT como conector usando la dirección del servidor https://app.pitchboost.ai/api/mcp, inicia sesión en tu cuenta de PitchBoost cuando ChatGPT lo pida y luego habla con él normalmente: sube una presentación y di \"hazla lucir profesional\", o describe un prospecto y pide una presentación comercial. ChatGPT llama a PitchBoost, que devuelve un enlace a la presentación terminada. Una ficha de aplicación de PitchBoost para ChatGPT está en revisión; hasta que aparezca en el directorio, la ruta del conector a continuación funciona en cuentas con modo desarrollador activado.",
    "steps": [
      {
        "title": "Activa el modo desarrollador",
        "body": "En ChatGPT abre Configuración, luego Conectores, luego Avanzado, y activa el modo desarrollador. Este es el interruptor que permite conectores personalizados."
      },
      {
        "title": "Crea el conector",
        "body": "Aún en Conectores, haz clic en Crear. Nómbralo PitchBoost, pega https://app.pitchboost.ai/api/mcp como URL del servidor MCP, elige OAuth como autenticación y guarda. Si el inicio de sesión falla con un error de cliente desconocido, abre la configuración avanzada del conector y establece el registro de cliente en dinámico (DCR)."
      },
      {
        "title": "Inicia sesión en PitchBoost",
        "body": "ChatGPT abre una ventana de inicio de sesión de PitchBoost. Usa tu cuenta existente o crea una gratuita. Haces esto una sola vez."
      },
      {
        "title": "Úsalo en un chat",
        "body": "Inicia un nuevo chat, activa el conector de PitchBoost en el menú de herramientas y pregunta. Para un rediseño, adjunta el .pptx y pide que se mejore: ChatGPT lee las diapositivas y las envía a PitchBoost, que reconstruye la presentación con tu marca y devuelve el enlace."
      }
    ],
    "sections": [
      {
        "heading": "Qué puede hacer ChatGPT con PitchBoost",
        "paragraphs": [
          "Reconstruir una presentación que subas, verificar si una reconstrucción ha terminado, crear una presentación nueva para un prospecto específico, listar tus presentaciones recientes, obtener el enlace de una y publicar un borrador. También puede hacer una presentación de muestra sin cuenta, con una insignia, que puedes reclamar más tarde.",
          "No puede cambiar tu plan, eliminar nada ni ver presentaciones fuera de tu cuenta. Las reconstrucciones y presentaciones nuevas usan la misma cuota mensual que la aplicación: una presentación al mes en el plan gratuito."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Funciona el conector en una cuenta gratuita de ChatGPT?",
        "a": "Los conectores personalizados necesitan un plan de ChatGPT con modo desarrollador disponible. Revisa Configuración > Conectores > Avanzado en tu cuenta; si el interruptor no está ahí, la ficha del directorio, una vez aprobada, será la ruta."
      },
      {
        "q": "¿Dónde va la presentación reconstruida?",
        "a": "A tu cuenta de PitchBoost, bajo un trato nombrado según la presentación. El enlace que te da ChatGPT la abre directamente; puedes editar y descargar desde ahí como cualquier otra presentación."
      },
      {
        "q": "¿Se envía el contenido de mi presentación a PitchBoost?",
        "a": "Sí, el texto de las diapositivas que ChatGPT extrae se envía a PitchBoost para reconstruir la presentación y se almacena en tu cuenta con el resultado. La política de privacidad explica la retención y eliminación."
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
        "a": "Sí, igual que en la aplicación: una reconstrucción o una presentación nueva cuesta 100 créditos y cuenta como una de tus presentaciones mensuales. Listar y obtener presentaciones es gratis."
      }
    ],
    "related": [
      "connect-chatgpt",
      "redesign-a-powerpoint",
      "credits-and-plans"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "credits-and-plans",
    "category": "account",
    "title": "Cómo funcionan los créditos y planes",
    "metaDescription": "Cada plan incluye créditos mensuales: una presentación cuesta 100, editar una diapositiva 10. Qué incluyen Free, Starter, Pro y Business, qué se acumula y cómo comprar más.",
    "answer": "Cada plan de PitchBoost incluye una asignación mensual de créditos y cada acción de IA tiene un precio fijo: una presentación (nueva o mejorada) cuesta 100 créditos, editar una diapositiva 10, editar la presentación completa 50, escanear un sitio web 10. Free incluye 150 créditos al mes (una presentación), Starter 800, Pro 2,500 y Business 7,000. Los planes de pago acumulan los créditos no usados durante un mes y pueden comprar paquetes adicionales. En la aplicación ves el porcentaje de tu asignación usado, nunca una cifra en dólares.",
    "sections": [
      {
        "heading": "Los planes",
        "paragraphs": [
          "Free: 150 créditos al mes, un trato, presentaciones de hasta 10 diapositivas, exportar en PDF y PowerPoint con una marca pequeña, enlace compartible con análisis básicos. No se requiere tarjeta.",
          "Starter, $9 al mes: 800 créditos, tratos ilimitados, presentaciones de hasta 25 diapositivas, sin marca en ningún lugar, paquetes adicionales.",
          "Pro, $29 al mes: 2,500 créditos, presentaciones de hasta 60 diapositivas, análisis completo del visor con tiempo por diapositiva, plantillas guardadas, dominios personalizados, acceso a API y MCP.",
          "Business, $79 al mes: 7,000 créditos, puestos y permisos de equipo, exportar análisis y enviar desde tu propio dominio.",
          "La facturación anual es más económica: Starter $7, Pro $24 y Business $66 al mes cuando se paga anualmente."
        ]
      },
      {
        "heading": "Acumulación y paquetes",
        "paragraphs": [
          "En los planes de pago, los créditos no usados pasan al siguiente mes hasta la asignación de un mes. En el plan gratuito se reinician. Los paquetes adicionales de 250 ($5), 900 ($15) y 2,800 ($40) créditos están disponibles en planes de pago y nunca expiran mientras tengas una suscripción activa."
        ]
      },
      {
        "heading": "Qué es gratis",
        "paragraphs": [
          "Verificar datos, extraer gráficos, publicar, compartir, ver análisis y descargar archivos nunca cuestan créditos. Solo la generación con IA lo hace."
        ]
      }
    ],
    "faqs": [
      {
        "q": "¿Qué pasa cuando se me acaban?",
        "a": "Las acciones de IA se pausan hasta el siguiente periodo, o inmediatamente después de comprar un paquete o mejorar de plan. Todo lo ya generado permanece disponible: las descargas y enlaces siguen funcionando."
      },
      {
        "q": "¿Cómo cambio o cancelo mi plan?",
        "a": "En la aplicación, abre Configuración y selecciona Plan. Los cambios aplican de inmediato: cancelar mantiene el plan de pago hasta el final del periodo que ya pagaste."
      },
      {
        "q": "¿Puedo quitar la marca sin una suscripción?",
        "a": "Sí. La pantalla de compartir ofrece una eliminación única para esa presentación. Starter la elimina de todas las presentaciones."
      }
    ],
    "related": [
      "slide-limits-by-plan",
      "download-powerpoint-or-pdf",
      "share-a-deck-link"
    ],
    "updated": "2026-09-16"
  },
  {
    "slug": "how-long-does-a-deck-take",
    "category": "redesign",
    "title": "Cuánto tarda una presentación y qué hacer mientras esperas",
    "metaDescription": "Una reconstrucción o presentación nueva tarda entre 3 y 5 minutos, incluyendo la revisión de calidad. Puedes cerrar la pestaña: PitchBoost te envía un enlace por correo cuando está lista.",
    "answer": "Una reconstrucción o presentación nueva tarda entre 3 y 5 minutos, incluyendo una revisión de calidad y verificación de datos que se ejecutan después de redactar las diapositivas. No tienes que esperar en la página: cierra la pestaña y PitchBoost te envía por correo un enlace a la presentación terminada, con una vista previa y la descarga de PowerPoint. La presentación también aparece en tu panel de control tan pronto como está lista.",
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
          "Actualiza la página; la pantalla de progreso se reanuda desde el estado actual. Si pasan diez minutos sin borrador, la reconstrucción falló y no se cobran créditos. Inténtalo de nuevo, y si falla dos veces escribe a support@pitchboost.ai con el enlace del proyecto para que podamos revisar el archivo exacto."
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
        "a": "En los planes de pago, sí. El plan Free incluye un proyecto, así que termina la primera presentación antes de iniciar otra."
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
        "body": "Agrega fotos de productos, retratos o capturas de pantalla. Son la mayor mejora en cómo se ve una presentación. Todo lo que no encaje en el diseño generado se guarda en los recursos de marca del proyecto para usarse en el editor."
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
  }
];
