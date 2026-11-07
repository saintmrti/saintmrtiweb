# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Público principal: personas en México sin conocimientos técnicos que quieren entender y usar la inteligencia artificial** en su trabajo o en su vida diaria (profesionales, empleados, emprendedores). Llegan desde TikTok e Instagram, casi siempre desde el celular, donde Saint apenas empieza a publicar contenido: no lo conocen y no tienen razones previas para confiar en él. Su trabajo en el sitio: entender en segundos quién es Saint, por qué creerle y apuntarse a la lista de espera de la primera clase.

**Segundo público: dueños de PyMEs mexicanas, profesionales independientes y startups** que necesitan un producto web o automatizar procesos con IA. Su trabajo: ver que Saint Technology puede construirlo y pedir una cotización por WhatsApp.

**Tercer público: quien quiera conocer las apps de Saint** (hoy, Money Manager; ver Evidence on Hand).

## Product Purpose

saintmrti.com es la página central de la marca personal de Saint-Martín Méndez (saintmrti), desarrollador full stack con 4+ años de experiencia, en México. Tiene tres objetivos:

1. Vender clases grabadas (~2 h cada una, pago por clase, en una plataforma externa todavía por definir). La primera, "Introducción a la era de la inteligencia artificial: conceptos básicos", todavía no está grabada ni editada: se publica como "Próximamente" con lista de espera.
2. Vender los servicios de Saint Technology ("Desarrollo de Productos Web & Automatización con IA"), cotizados por WhatsApp.
3. Promocionar sus apps.

Éxito (inferido del plan, sin confirmar): registros en la lista de espera hoy; compras de clases cuando existan; mensajes de cotización por WhatsApp. Saint quiere dedicar su tiempo a grabar y editar videos y a TikTok e Instagram.

## Positioning

Un programador que usa IA a diario para construir productos, la explica sin tecnicismos a quien no sabe nada de tecnología y además puede construirle la solución: del aprender al construir. Lo respalda una trayectoria profesional real (4+ años en desarrollo full stack y paso por 3 grandes compañías), no seguidores ni testimonios: quien lo descubre hoy no sabe nada de él.

"Una clase, un tema, un pago" es el modelo comercial, no lo que lo distingue; no se vende como diferenciador.

## Operating Context

- Las clases se venden y se entregan en una plataforma externa todavía por definir, una por una: el sitio no la nombra hasta que Saint decida. Una plataforma propia se considera cuando se vendan unas 50 clases al mes.
- Escalera de oferta: tip gratis en TikTok/Instagram, clase introductoria, clases más específicas, clases personalizadas (`/registro`), servicios de Saint Technology.
- La lista de espera es un formulario propio del sitio que envía a un Google Form nuevo (las respuestas caen en la hoja de cálculo de Saint). `/registro` conserva el Google Form actual de clases personalizadas de IA para profesionales.
- Servicios: 3 videollamadas y atención por WhatsApp. Plan Básico (landing de 5 secciones, entrega en 2 semanas), Plan Estándar (app web con Next.js, TypeScript, Supabase/PostgreSQL e integración con IA, entrega en 3 a 4 semanas) y extras a cotizar (módulos a la medida, microservicios, chatbots con IA, automatización).
- Contacto: saintmartindev@gmail.com y WhatsApp +52 56 5321 1904. Redes: Instagram y Facebook @saintmrtidev, X @saintmrti, LinkedIn /in/saintmartin, GitHub saintmrti, TikTok @saintmrti.
- El portafolio actual (Next.js en Vercel) vive en `work.saintmrti.com`.

## Capabilities and Constraints

- Sitio en español para México. Voz: tú, más profesional (confirmada por Saint).
- Precios de clases, editables en el contenido: introductoria MX$249 normal y MX$149 de lanzamiento; específicas MX$299 a 399; paquete de 3 a MX$599. El precio de lanzamiento solo existe con una fecha de fin real.
- Los servicios no llevan precio en el sitio: cada plan muestra qué incluye y su tiempo de entrega, con el botón "Cotiza por WhatsApp" y mensaje prellenado.
- Se necesita un aviso de privacidad (ley mexicana), porque la lista de espera junta datos personales. Saint debe revisarlo.
- El contenido (clases, servicios, apps) se edita como archivos de contenido, sin tocar código. La sección de apps se oculta si no hay ninguna.
- La clase no muestra temario, ficha de datos, duración ni plataforma de venta: Saint los quitó el 2026-11-06 (la plataforma puede cambiar, así que el sitio no la nombra todavía). Su presentación es el texto de la clase y "Para quién es".
- Decisiones abiertas: fecha real de fin del precio de lanzamiento; si hay más apps que mostrar además de Money Manager; si se puede usar la cifra de 6 proyectos del portafolio.
- El sitio se publica en Cloudflare, cuando Saint lo apruebe.

## Brand Commitments

- Marca principal: Saint-Martín Méndez / saintmrti, con la línea "Desarrollador web & automatización con IA" de su tarjeta. Saint Technology ("Desarrollo de Productos Web & Automatización con IA") aparece solo en la sección de servicios.
- El infinito (degradado magenta, violeta y azul) es el ícono del sitio. El logo lleva "SAINT" en slab grueso y "TECHNOLOGY" delgado y espaciado.
- La paleta de su marca manda: navy `#100d28`, magenta `#ff00e2`, violeta `#8906e6`, azul eléctrico del degradado y acento ámbar de sus posts de servicios.
- Voz: tú, más profesional (cercano pero sobrio).
- Referencia para la entrada de la página, aportada por Saint el 2026-11-03 ("es una referencia", no una plantilla): captura en `.impeccable/references/dribbble-reflect-hero.png`. Es trabajo de terceros: se toma como inspiración, no se copia.
- Confidencialidad: los proyectos del portafolio y los de las grandes compañías donde trabajó son de empresas privadas y sus nombres están ocultos a propósito. En el sitio nuevo no se nombran empresas ni proyectos; solo se puede decir, en general, que trabajó en proyectos importantes para empresas privadas bajo confidencialidad.

## Evidence on Hand

- 4+ años de experiencia como desarrollador full stack y trabajo en 3 grandes compañías (declarado por Saint, ya público en su portafolio actual y confirmado por él el 2026-11-03). Además, proyectos importantes para empresas privadas: se mencionan en general, sin nombres ni detalles.
- Portafolio en `work.saintmrti.com`: proyectos de empresas privadas con nombres ocultos. Solo se enlaza.
- Money Manager: app propia de finanzas personales en la que Saint lleva meses trabajando (repo en `~/Documents/projects/manage-money`, 132 commits, manual de usuario edición 2026). Según el manual: periodos personalizados, movimientos, metas, importación desde Monefy, gastos compartidos y pagos programados; tiene CLI y tokens de API. Stack: React 19, Vite, Tailwind, Express, Prisma/PostgreSQL, TypeScript. Según el manual (octubre de 2026), el registro público estaba cerrado y el acceso era por invitación. Está en línea en `moneymanager.saintmrti.com` (sin guion; verificado el 2026-11-03, responde 200). El subdominio con guion que aparece en el repo da 404 y no es el de producción. Saint pidió presentarla en la sección de apps como abierta al público (2026-11-03): la abre él mismo ahora, así que por defecto se presenta como disponible, como la versión 1 real (no como beta), dejando claro que sigue mejorando con la opinión de quienes la usan (Saint lo pidió así), con enlace a `https://moneymanager.saintmrti.com`. Antes de publicar el sitio se verifica que el registro público realmente esté abierto. Las capturas del manual usan datos ficticios.
- Material de marca en `~/Documents/Saint Mac 2026/Marca/` (logos, tarjeta, foto) y el PDF de servicios en `Desarrollo de Productos Web/`. No se usan `Clientes/`, `Cotizaciones/` ni `ASPEL/`.
- Ausencias que no se deben fabricar: no hay testimonios, clientes citables, resultados de alumnos (todavía no hay clases vendidas), cifras de seguidores ni casos de estudio públicos. Saint quitó la sección de testimonios del sitio el 2026-11-06: ya no la quiere.
- El portafolio actual muestra "4 años, 6 proyectos, 3 grandes compañías". Saint confirmó los 4+ años y las grandes compañías; la cifra de 6 proyectos sigue sin confirmar y no se usa.

## Product Principles

1. La confianza se gana con trayectoria real, no con prueba social inventada: 4+ años, trabajo en grandes compañías y un portafolio respaldan a alguien que apenas empieza a publicar. Lo que todavía no existe se muestra como "próximamente", no se maquilla.
2. Claro para quien no sabe nada de tecnología: sin jerga, la IA se explica con ejemplos de su día a día.
3. Cada oferta tiene su propia acción simple: lista de espera para la clase, WhatsApp para cotizar un servicio.
4. Del aprender al construir: el sitio lleva de las clases a los servicios sin presión. Saint Technology es el siguiente paso, no el disfraz de la marca personal.
5. Honestidad comercial: sin precios de servicios que no estén decididos, sin escasez falsa y sin fechas de fin inventadas.

## Accessibility & Inclusion

Saint no fijó un requisito específico. Base asumida (inferida, sin confirmar): WCAG 2.2 AA, lectura cómoda en celular porque el tráfico llega desde TikTok e Instagram, y buen rendimiento en conexiones móviles de México.
