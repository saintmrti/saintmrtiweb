---
name: saintmrti.com
description: Esmalte azul medianoche, señalética de porcelana y tres líneas de color; aprender, construir y apps unidas por el infinito.
colors:
  ground: "#0b0a29"
  band: "#100d33"
  sign: "#0e0c31"
  porcelain: "#f4f0ff"
  ink-2: "#c9c1ee"
  lilac: "#b9a6ee"
  aprender: "#ff2fdc"
  construir: "#4a5bff"
  apps: "#00ffff"
  violet: "#b705e5"
  violet-deep: "#2c0f43"
  field: "#0a0927"
  placeholder: "#9f95cf"
  error: "#ff8a8a"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "96px"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "68px"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  heading:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  wordmark:
    fontFamily: "Zilla Slab, Georgia, serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  tag: "6px"
  control: "8px"
  sign: "12px"
  image: "18px"
  pill: "999px"
spacing:
  section-y: "clamp(64px, 9vw, 120px)"
  gutter: "clamp(16px, 4vw, 56px)"
  container: "1440px"
  field-gap: "10px"
  grid-gap: "56px"
components:
  button-primary:
    backgroundColor: "{colors.aprender}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  button-construir:
    backgroundColor: "{colors.construir}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  button-apps:
    backgroundColor: "{colors.apps}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "50px"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "46px"
  sign:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.sign}"
    padding: "18px 20px 20px"
  tag:
    backgroundColor: "{colors.aprender}"
    textColor: "{colors.ground}"
    rounded: "{rounded.tag}"
    padding: "7px 10px 6px"
  button-nav:
    backgroundColor: "{colors.violet-deep}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.pill}"
    padding: "8px 18px 8px 14px"
  menu-button:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.control}"
    padding: "0"
    height: "44px"
---

# Design System: saintmrti.com

## Overview

**Creative North Star: "La Línea Infinito"**

La oferta de Saint es un recorrido (aprender, construir, apps) y el infinito de su marca es el transbordo. Eso se dibujó como un plano de transporte: esmalte azul medianoche, señalética con borde de porcelana y tres tintas de línea. El mapa manda solo en la entrada; el resto del sitio usa secciones normales con los mismos colores, la misma tipografía y la misma señalética, sin repetir el diagrama.

La voz visual es de rotulación pública: titulares condensados en mayúsculas, texto humanista legible, color plano. Es una página de venta para quien llega desde el celular y no conoce a Saint, así que la prioridad es claridad y honestidad: lo que todavía no existe se marca como tal (punteado, "Próximamente", "En preparación"). Rechaza el hero de IA genérico: brillo sobre negro, titular centrado y fila de tarjetas.

**Key Characteristics:**
- Fondo único de esmalte oscuro; la porcelana es la tinta de señal y de texto.
- Tres colores de línea con significado fijo: Aprender (magenta), Construir (azul), Apps (cian).
- Color plano y bordes de 2px; sin glow, glass, degradado en texto ni sombras decorativas.
- Mobile first: el CSS base es para celular y las reglas suben con `min-width`.
- Honestidad como regla de diseño (ver Do's and Don'ts).

## Colors

Paleta de tres tintas sobre un esmalte casi negro azulado, con porcelana lila como único claro.

### Primary
- **Magenta Aprender** (`aprender`): la línea Aprender y la acción principal. Botón primario, etiqueta "Aprender", acento "IA" del H1, subrayado de titulares de sección, cursor y selección, barra de scroll, flecha de las preguntas frecuentes.
- **Azul Construir** (`construir`): la línea Construir (servicios de Saint Technology). Botón y etiqueta de servicios (texto blanco), viñetas de listas de servicios, subrayado de titulares de esa sección.
- **Cian Apps** (`apps`): el cian de Money Manager (el `--primary` de la propia app). La línea Apps. Botón y etiqueta de apps, y además el color del anillo de foco y de la flecha del enlace a WhatsApp. Fuera de la línea Apps solo aparece como señal de interacción o de estado (punto "Próximamente").

### Accent
- **Violeta de barra** (`violet` #b705e5 y `violet-deep` #2c0f43): contorno y relleno del botón "Lista de espera" de la barra, tomados de la pastilla del botón "Regístrate" del portafolio de Saint. No se usan en ningún otro lugar.

### Neutral
- **Esmalte Medianoche** (`ground`): fondo de página, barra de navegación, hero y pie; también texto sobre botones de color.
- **Banda Violeta** (`band`): secciones alternas (`.banda`) con filete de porcelana al 10%; separa sin cambiar de mundo.
- **Placa de Señal** (`sign`): fondo de la señalética (formulario, ilustraciones). Casi igual al esmalte; la placa se distingue por su borde, no por su color.
- **Porcelana** (`porcelain`): texto principal, bordes de señal, estaciones del mapa y botón de contorno.
- **Tinta Dos** (`ink-2`): texto secundario, subtítulos, notas y filetes de lista.
- **Lila** (`lilac`): etiquetas del mapa, "TECHNOLOGY" del logotipo y línea de stack.
- **Campo, marcador y error** (`field`, `placeholder`, `error`): solo para los campos de formulario; el error es un coral claro, nunca el magenta.

### Named Rules
**The Line-Meaning Rule.** Cada color de línea significa una sola cosa (Aprender, Construir, Apps) y las secciones lo declaran con `--linea`. No se usa un color de línea para decorar otra línea.

**The Enamel Rule.** Las superficies son esmalte, banda o placa; el contraste viene de la porcelana y de las tintas planas, nunca de sombras o brillos. Los filetes son porcelana a 10-28% de opacidad (`rgba(244,240,255,…)`), el borde de señal a 85-90%.

## Typography

**Display Font:** Barlow Condensed (700; 600 cargado; fallback Arial Narrow, sans-serif)
**Body Font:** Barlow (400, 500, 600, 700; fallback system-ui)
**Wordmark Font:** Zilla Slab 700 (solo el logotipo "SAINT")

**Character:** Rotulación pública: condensada y en mayúsculas para anunciar, humanista para leer. La slab aparece una sola vez, en el sello SAINT TECHNOLOGY.

### Hierarchy
Cada nivel tiene un tamaño en celular y otro desde 900px (`--fs-*` en `global.css`, en rem). Todos los elementos de un nivel se ven igual en todas las páginas.

| Nivel | Celular | Desde 900px | Uso |
|---|---|---|---|
| **Display** (Barlow Condensed 700, 0.92, mayúsculas) | 64px | 96px | solo el H1 de la entrada, con "IA" en magenta |
| **Headline** (Barlow Condensed 700, 0.96, mayúsculas, balanceado) | 40px | 68px | H2 de cada sección y H1 de página interior, con una barra de 72x8px del color de línea debajo |
| **Title** (Barlow Condensed 700, 1, mayúsculas, balanceado) | 32px | 40px | H3: nombre de un plan, app o clase, y subsecciones ("Para quién es", "Avísame cuando salga", encabezados del aviso de privacidad) |
| **Heading** (Barlow Condensed 700, 1, 0.04em, mayúsculas) | 22px | 22px | encabezados chicos: columnas del pie |
| **Lead** (Barlow 400, 1.5, Tinta Dos, máx. 58ch) | 20px | 20px | párrafo de entrada, subtítulo de la entrada; en 600: pregunta frecuente, marca y mensaje de éxito |
| **Body** (Barlow 400, 1.5) | 18px | 18px | texto corrido, listas y campos; en 600: estados ("Próximamente"), `b` y título de la placa |
| **Small** (Barlow 400, 1.5) | 14px | 14px | notas, pies de foto, línea de stack, letra chica del formulario, texto legal; la clase `.secundario` lo aplica en celular al enlace de cotizar de la entrada y a la nota de las videollamadas (desde 900px pasan a Body) |
| **Label** (Barlow Condensed 700, 0.08em, mayúsculas) | 15px | 15px | etiquetas `.tag` |
| **Button** (Barlow 700, 1) | 19px | 19px | botones `.btn`; el botón compacto de la barra es de 15px |
| **Nav** (Barlow 500) | n/a | 16px | enlaces de la barra de escritorio; en el menú móvil, nivel Lead |
| **Wordmark** (Zilla Slab 700, 0.14em) | 26px | 34px | "SAINT"; "TECHNOLOGY" en Barlow 500, 0.42em, Lila: 11px / 14px |

El precio de una clase disponible usa `--fs-price` (48px). El texto del mapa de la entrada se dibuja en unidades del SVG y escala con el ancho del diagrama: queda fuera de la escala.

### Named Rules
**The Announce-Then-Read Rule.** Condensada mayúscula para titulares y etiquetas de línea; Barlow para todo lo que se lee de corrido. Los titulares no pasan de una familia condensada.

**The Slab-Once Rule.** Zilla Slab solo existe en el sello SAINT TECHNOLOGY.

**The One-Size-Per-Level Rule.** Un nivel, un tamaño por breakpoint, definido una sola vez como variable. Los componentes usan `var(--fs-*)` y no declaran tamaños propios; si hace falta un tamaño nuevo, se agrega a la escala.

## Layout

Contenedor `.wrap` de 1440px máximo con gutter `clamp(16px, 4vw, 56px)`. Secciones con relleno vertical `clamp(64px, 9vw, 120px)`, alternando fondo esmalte y banda violeta. Mobile first: una columna base y cuadrículas a 640px (acciones en fila), 900px (el salto principal: hero en dos columnas, clase 1fr/1fr, servicios 380px / texto / 240px, sobre mí 420px / texto, cierre 1fr/1fr; la navegación cambia de tira a enlaces) y 560px dentro del formulario (dos campos en fila). Los huecos de columna son de 40-64px; las listas se separan con filetes en lugar de tarjetas.

Entrada (1440x900): a la izquierda H1, subtítulo, placa del formulario y enlace a WhatsApp; a la derecha el diagrama a escala (viewBox 700x780), alto máximo `100vh - 140px`. Las dos columnas van en proporción (`0.84fr / 1fr`, 588px y 700px a 1440px) para que el titular de 96px y el formulario quepan desde 900px. En celular: titular, formulario y diagrama vertical, con el formulario visible sin desplazar.

Navegación fija de 68px (76px desde 900px), variable `--nav-h`, con `scroll-padding-top` de barra + 16px (84px / 92px). En celular la barra lleva la marca y un botón de hamburguesa; las secciones están en un menú que entra por la derecha.

### El mapa (solo la entrada)
Líneas de 16px de grosor a 45° y 90° sobre calles apenas visibles; funda de esmalte de 28px bajo las líneas para que crucen limpio; estaciones de porcelana (r=11) con borde esmalte; punteado `22 14` = en preparación, animado lento; transbordo = disco de porcelana con el infinito. "Estás aquí" pulsa en la Clase 1; al apuntarse el pulso se detiene, la estación se rellena y la etiqueta cambia a "Ya estás en la lista". Pasar o tocar una línea atenúa las demás al 30% (teclado: Enter/Espacio).

## Elevation & Depth

Plano por defecto. La profundidad se logra con capas tonales (esmalte, banda, placa), bordes de porcelana y filetes, no con sombras. La única `box-shadow` es un anillo de 3px sin desenfoque (`0 0 0 3px` en color de línea) alrededor de las viñetas circulares de porcelana. No hay glow, glass ni degradados. El estado se comunica con `filter: brightness(1.1)` y un `translateY(-1px)` en botones, no con elevación.

### Named Rules
**The Flat-Enamel Rule.** Ninguna superficie lleva sombra difusa. Una viñeta es un punto de porcelana con anillo de color de línea; no hay otra sombra.

## Shapes

Esquinas moderadas, no redondeadas de juguete (la única píldora, 999px, es el botón "Lista de espera" de la barra): 6px etiquetas, 8px botones y campos, 12px placas de señal, 18px imágenes y portadas, 22px captura móvil de la app. Las viñetas son círculos de 9px con anillo. Las imágenes reales y capturas llevan borde de porcelana de 2px (85%), salvo el retrato de Sobre mí, que es circular y sin borde (decisión de Saint). Las líneas del mapa tienen uniones redondeadas y ángulos de 45/90 grados.

## Components

### Buttons
- **Shape:** 8px, altura mínima 50px, Barlow 700 a 19px, borde de 2px transparente.
- **Primary (`btn-m`):** fondo Aprender, texto Esmalte; es la acción de lista de espera. **Construir (`btn-b`):** azul con texto blanco, cotizar servicios. **Apps (`btn-a`):** cian con texto Esmalte, abrir la app.
- **Line (`btn-line`):** contorno de porcelana al 85%, transparente; acción secundaria (WhatsApp, portafolio, "Cuéntame qué mejorarías").
- **Posición:** "Escríbeme por WhatsApp" (cierre) va a la izquierda del texto; "Ver mi portafolio" (Sobre mí) va centrado en celular y a la izquierda desde 900px. Decisión de Saint, 2026-11-07.
- **Hover / Focus:** `brightness(1.1)` y -1px en los de color (el de Apps oscurece a `brightness(0.9)`, porque el cian ya está al máximo); los botones de contorno (`btn-line`) y el de la barra se llenan de magenta con texto Esmalte: con cursor, al pasar encima y, en pantallas táctiles, mientras se presionan. Foco global: anillo de 2px cian con desfase de 3px.

### Tags
- Etiqueta condensada en mayúsculas (6px de radio) con el color de su línea; `tag-p` en porcelana para "Próximamente". Nombra la línea de una pieza (Aprender, etiqueta de servicio, versión de la app); no se usa como sobretítulo de titulares.

### Sign (placa de formulario)
- Borde de porcelana 2px, radio 12px, fondo `sign`. Contiene la etiqueta Aprender, "Clase 1 · Próximamente", dos campos (Nombre, Correo) y el botón primario de ancho completo. Estados: error en campo con borde coral y mensaje en vivo; éxito reemplaza campos por "Listo, quedaste en la lista…". Si el Google Form no está conectado, en producción la placa ofrece solo "Avísame por WhatsApp".

### Fields
- 46px, 8px de radio, borde de 2px porcelana al 28% (55% en hover), fondo `field`; el foco sustituye el borde por anillo cian.

### Navigation
- Barra transparente arriba del todo y esmalte sólido con filete en cuanto se hace scroll (más de 8px; sin JavaScript queda sólida, y si se entra a mitad de página también). Lleva la marca (infinito + "saintmrti"), enlaces Tinta Dos que se subrayan en magenta al pasar, y el botón "Lista de espera" en pastilla violeta con ícono de persona con "+", que se llena de magenta al pasar el cursor (en pantallas táctiles, mientras se presiona). En celular, la barra solo lleva la marca y el botón de hamburguesa (ícono de 20px sin borde, con área táctil de 44px); el botón "Lista de espera" pasa al menú.
- Menú móvil: panel de `min(86vw, 360px)` que entra por la derecha en 0.3s sobre un fondo oscuro. Lleva la marca, la X de cerrar, los cuatro enlaces (Lead, con filete) y el botón primario "Lista de espera". Se cierra con la X, tocando fuera, con Escape o al elegir un enlace; mientras está abierto, lo demás queda inerte y el scroll se bloquea. Desde 900px no existe.
- Pie esmalte en tres columnas (marca, contacto en texto subrayado con el número de WhatsApp (sin la palabra), el correo y el dominio del portafolio, redes) y una línea legal centrada, sin filete que la separe ni enlace al aviso de privacidad. Las redes son íconos magenta de 26px con área táctil de 44px (Simple Icons, CC0) que pasan a porcelana al pasar el cursor; la línea dice "© año Saint Technology" (sin el nombre de Saint) y casi pegada al borde inferior (12px de relleno).

### Service rows, class data and FAQ
- Filas separadas por filetes (no tarjetas): imagen, título con etiqueta, descripción, viñetas con anillo azul, "Entrega" y botón azul. FAQ con `details` y una flecha en V magenta.
- Cabecera de servicios (inicio y `/servicios`, clase `.cab-sello`): título, texto y sello SAINT TECHNOLOGY. En celular van uno bajo otro; desde 900px el sello pasa a la derecha, en la fila del título, centrado con él y alineado al borde derecho (sobre la columna de los botones "Cotiza por WhatsApp"). El sello no lleva margen propio: lo da la cabecera.

### Imagery
- Personajes originales de estilo videojuego: un guía con armadura azul medianoche y porcelana en escenas de negocio, para la portada de la Clase 1, las tres ilustraciones de servicios y el banner de cierre (16:9, 21:9 desde 900px). Retrato real de Saint y capturas reales de Money Manager (con la nota "Vista de ejemplo con datos ficticios"). `Ilustracion` es un respaldo en SVG con la misma señalética cuando falta la imagen.

## Do's and Don'ts

### Do:
- **Do** mantener las superficies planas: esmalte, banda y placa con bordes de porcelana de 2px.
- **Do** asignar el color de línea por tema (Aprender magenta, Construir azul, Apps cian) y expresarlo con `--linea`.
- **Do** escribir CSS base para celular y subir con `min-width`; el salto de diseño es 900px.
- **Do** usar solo las variables `--fs-*` para el tamaño de texto; un nivel se ve igual en todas las páginas.
- **Do** marcar lo inexistente como tal: punteado en el mapa, "Próximamente" con lista de espera, Money Manager con su estado real.
- **Do** publicar servicios sin precio.
- **Do** usar personajes originales (el guía de armadura medianoche y porcelana) para escenas de negocio, retrato y capturas reales para lo verdadero.
- **Do** respetar `prefers-reduced-motion` (el punteado y el pulso se detienen).

### Don't:
- **Don't** usar glow, glass, texto en degradado ni sombras difusas.
- **Don't** repetir el diagrama de mapa fuera de la entrada; el resto del sitio son secciones normales.
- **Don't** usar el hero de IA genérico (brillo sobre negro, titular centrado, fila de tarjetas) ni un tono infantil o de juguete.
- **Don't** inventar testimonios, nombres de empresas o proyectos privados, ni mostrar precios de servicios.
- **Don't** prometer un correo cuando el formulario no está conectado.
- **Don't** usar Zilla Slab fuera del sello SAINT TECHNOLOGY.

## Known divergences and open items (not canonized)

- Google Form de la lista de espera sin conectar; el aviso de privacidad es un borrador; el banner de cierre podría cambiarse por una versión con listones si el usuario lo decide.
- Procedencia de los rasters: cumplida. Las 9 imágenes de `src/assets` llevan su origen incrustado en los metadatos del archivo (el prompt exacto y el modelo en las 5 generadas con Higgsfield; el origen en la foto, el logo y las 2 capturas de Money Manager). Se verifica con `impeccable embed-prompt --scan src/assets` (0 sin registro). No es visible en el código porque vive dentro de cada archivo.
- Contrato vs. build: el contrato pide que el formulario no tenga más que Nombre y Correo (cumple); el hero usa `min-height` de 820px, no un alto exacto de 900.
