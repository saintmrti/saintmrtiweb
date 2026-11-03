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
  apps: "#ffc967"
  field: "#0a0927"
  placeholder: "#9f95cf"
  error: "#ff8a8a"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(56px, 16vw, 76px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 68px)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "20px"
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
  nav-pill:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
---

# Design System: saintmrti.com

## Overview

**Creative North Star: "La Línea Infinito"**

La oferta de Saint es un recorrido (aprender, construir, apps) y el infinito de su marca es el transbordo. Eso se dibujó como un plano de transporte: esmalte azul medianoche, señalética con borde de porcelana y tres tintas de línea. El mapa manda solo en la entrada; el resto del sitio usa secciones normales con los mismos colores, la misma tipografía y la misma señalética, sin repetir el diagrama.

La voz visual es de rotulación pública: titulares condensados en mayúsculas, texto humanista legible, color plano. Es una página de venta para quien llega desde el celular y no conoce a Saint, así que la prioridad es claridad y honestidad: lo que todavía no existe se marca como tal (punteado, "Próximamente", "En preparación"). Rechaza el hero de IA genérico: brillo sobre negro, titular centrado y fila de tarjetas.

**Key Characteristics:**
- Fondo único de esmalte oscuro; la porcelana es la tinta de señal y de texto.
- Tres colores de línea con significado fijo: Aprender (magenta), Construir (azul), Apps (ámbar).
- Color plano y bordes de 2px; sin glow, glass, degradado en texto ni sombras decorativas.
- Mobile first: el CSS base es para celular y las reglas suben con `min-width`.
- Honestidad como regla de diseño (ver Do's and Don'ts).

## Colors

Paleta de tres tintas sobre un esmalte casi negro azulado, con porcelana lila como único claro.

### Primary
- **Magenta Aprender** (`aprender`): la línea Aprender y la acción principal. Botón primario, etiqueta "Aprender", acento "IA" del H1, subrayado de titulares de sección, cursor y selección, flecha de las preguntas frecuentes, numerales del temario.
- **Azul Construir** (`construir`): la línea Construir (servicios de Saint Technology). Botón y etiqueta de servicios (texto blanco), viñetas de listas de servicios, subrayado de titulares de esa sección.
- **Ámbar Apps** (`apps`): la línea Apps. Botón y etiqueta de apps, y además el color del anillo de foco y de la flecha del enlace a WhatsApp. Fuera de la línea Apps solo aparece como señal de interacción o de estado (punto "Próximamente").

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
- **Display** (700, `clamp(56px, 16vw, 76px)` en celular; `clamp(72px, 6.7vw, 96px)` desde 900px; 0.92): solo el H1 de la entrada, mayúsculas, con "IA" en magenta.
- **Headline** (700, `clamp(40px, 5.4vw, 68px)`, 0.96, mayúsculas, texto balanceado): `.h2` de cada sección, con una barra de 72x8px de color de línea debajo.
- **Title** (700, 32px, 1, mayúsculas): `.h3`; sube a 40px en servicios y 44px en la ficha de app.
- **Body** (400, 18px, 1.5; el `lead` es 20px en Tinta Dos, máx. 58ch): párrafos; notas a 14-16px.
- **Label** (Barlow Condensed 700, 15px, 0.08em, mayúsculas): etiquetas `.tag`; en el mapa 20-26px.
- **Wordmark** (Zilla Slab 700, 34px, 0.14em) con "TECHNOLOGY" en Barlow 500, 14px, 0.42em, Lila.

### Named Rules
**The Announce-Then-Read Rule.** Condensada mayúscula para titulares y etiquetas de línea; Barlow para todo lo que se lee de corrido. Los titulares no pasan de una familia condensada.

**The Slab-Once Rule.** Zilla Slab solo existe en el sello SAINT TECHNOLOGY.

## Layout

Contenedor `.wrap` de 1440px máximo con gutter `clamp(16px, 4vw, 56px)`. Secciones con relleno vertical `clamp(64px, 9vw, 120px)`, alternando fondo esmalte y banda violeta. Mobile first: una columna base y cuadrículas a 640px (acciones en fila), 900px (el salto principal: hero en dos columnas, clase 1fr/1fr, servicios 380px / texto / 240px, sobre mí 420px / texto, cierre 1fr/1fr; la navegación cambia de tira a enlaces) y 560px dentro del formulario (dos campos en fila). Los huecos de columna son de 40-64px; las listas se separan con filetes en lugar de tarjetas.

Entrada (1440x900): a la izquierda H1, subtítulo, placa del formulario y enlace a WhatsApp; a la derecha el diagrama a escala (viewBox 700x780), alto máximo `100vh - 140px`. En celular: titular, formulario y diagrama vertical, con el formulario visible sin desplazar.

Navegación fija de 68px (76px desde 900px) con `scroll-padding-top` de 132px/92px. En celular las secciones van en una tira de píldoras con desplazamiento horizontal bajo la barra.

### El mapa (solo la entrada)
Líneas de 16px de grosor a 45° y 90° sobre calles apenas visibles; funda de esmalte de 28px bajo las líneas para que crucen limpio; estaciones de porcelana (r=11) con borde esmalte; punteado `22 14` = en preparación, animado lento; transbordo = disco de porcelana con el infinito. "Estás aquí" pulsa en la Clase 1; al apuntarse el pulso se detiene, la estación se rellena y la etiqueta cambia a "Ya estás en la lista". Pasar o tocar una línea atenúa las demás al 30% (teclado: Enter/Espacio).

## Elevation & Depth

Plano por defecto. La profundidad se logra con capas tonales (esmalte, banda, placa), bordes de porcelana y filetes, no con sombras. La única `box-shadow` es un anillo de 3px sin desenfoque (`0 0 0 3px` en color de línea) alrededor de las viñetas circulares de porcelana. No hay glow, glass ni degradados. El estado se comunica con `filter: brightness(1.1)` y un `translateY(-1px)` en botones, no con elevación.

### Named Rules
**The Flat-Enamel Rule.** Ninguna superficie lleva sombra difusa. Una viñeta es un punto de porcelana con anillo de color de línea; no hay otra sombra.

## Shapes

Esquinas moderadas, no redondeadas de juguete: 6px etiquetas, 8px botones y campos, 12px placas de señal, 18px imágenes y portadas, 22px captura móvil de la app, píldora (999px) solo en la tira de navegación móvil. Las viñetas son círculos de 9px con anillo. Las imágenes reales y capturas llevan borde de porcelana de 2px (85%). Las líneas del mapa tienen uniones redondeadas y ángulos de 45/90 grados.

## Components

### Buttons
- **Shape:** 8px, altura mínima 50px, Barlow 700 a 19px, borde de 2px transparente.
- **Primary (`btn-m`):** fondo Aprender, texto Esmalte; es la acción de lista de espera. **Construir (`btn-b`):** azul con texto blanco, cotizar servicios. **Apps (`btn-a`):** ámbar con texto Esmalte, abrir la app.
- **Line (`btn-line`):** contorno de porcelana al 85%, transparente; acción secundaria (WhatsApp, portafolio, "Cuéntame qué mejorarías").
- **Hover / Focus:** `brightness(1.1)` y -1px en los de color; fondo de porcelana al 10% en el de contorno. Foco global: anillo de 2px ámbar con desfase de 3px.

### Tags
- Etiqueta condensada en mayúsculas (6px de radio) con el color de su línea; `tag-p` en porcelana para "Próximamente". Nombra la línea de una pieza (Aprender, etiqueta de servicio, versión de la app); no se usa como sobretítulo de titulares.

### Sign (placa de formulario)
- Borde de porcelana 2px, radio 12px, fondo `sign`. Contiene la etiqueta Aprender, "Clase 1 · Próximamente", dos campos (Nombre, Correo) y el botón primario de ancho completo. Estados: error en campo con borde coral y mensaje en vivo; éxito reemplaza campos por "Listo, quedaste en la lista…". Si el Google Form no está conectado, en producción la placa ofrece solo "Avísame por WhatsApp".

### Fields
- 46px, 8px de radio, borde de 2px porcelana al 28% (55% en hover), fondo `field`; el foco sustituye el borde por anillo ámbar.

### Navigation
- Barra esmalte con marca (infinito + "saintmrti"), enlaces Tinta Dos que se subrayan en magenta al pasar, y botón de contorno "Lista de espera". En celular, tira de píldoras de 1.5px.

### Service rows, class data and FAQ
- Filas separadas por filetes (no tarjetas): imagen, título con etiqueta, descripción, viñetas con anillo azul, "Entrega" y botón azul. Lista de datos de la clase con filetes. FAQ con `details` y una flecha en V magenta. Testimonios con borde superior de porcelana; solo los reales entran al build.

### Imagery
- Personajes originales de estilo videojuego: un guía con armadura azul medianoche y porcelana en escenas de negocio, para la portada de la Clase 1, las tres ilustraciones de servicios y el banner de cierre (16:9, 21:9 desde 900px). Retrato real de Saint y capturas reales de Money Manager (con la nota "Vista de ejemplo con datos ficticios"). `Ilustracion` es un respaldo en SVG con la misma señalética cuando falta la imagen.

## Do's and Don'ts

### Do:
- **Do** mantener las superficies planas: esmalte, banda y placa con bordes de porcelana de 2px.
- **Do** asignar el color de línea por tema (Aprender magenta, Construir azul, Apps ámbar) y expresarlo con `--linea`.
- **Do** escribir CSS base para celular y subir con `min-width`; el salto de diseño es 900px.
- **Do** marcar lo inexistente como tal: punteado en el mapa, "Próximamente" con lista de espera, Money Manager con su estado real.
- **Do** publicar servicios sin precio y solo testimonios reales; los ejemplos con `muestra: true` aparecen únicamente en desarrollo.
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
