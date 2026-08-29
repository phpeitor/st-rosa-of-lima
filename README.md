# Sta. Rosa de Lima 🌸
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

<a href="https://www.instagram.com/amvsoft.tech/">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/f3da0a207400365.66dcfc833368d.jpg" alt="Sta. Rosa de Lima" width="600">
</a>

Landing conmemorativa e interactiva dedicada a Santa Rosa de Lima.

## Descripción general

Este proyecto es una landing estática orientada a la narrativa y la estética visual, con un enfoque contemplativo y ceremonial. Está construida como una experiencia de una sola página, sin framework ni proceso de build, para mantener la entrega simple, ligera y fácil de publicar en un entorno HTML estático.

## Características

- Hero visual a pantalla completa con video de fondo.
- Emblema central interactivo con pulso luminoso y ráfaga de pétalos.
- Lightbox accesible para ampliar el emblema secundario.
- Selector de efectos con cuatro modos: pétalos, rosas, corazones y aleatorio.
- Timeline responsive con hitos clave de la vida de Santa Rosa de Lima.
- Soporte para navegación por teclado y reducción de movimiento con `prefers-reduced-motion`.
- Estructura estática y portable: no requiere compilación ni servidor específico para funcionar.

## Requisitos

- Navegador moderno con soporte para HTML5, CSS3, SVG y JavaScript.
- Cualquier servidor HTTP estático para pruebas locales con rutas relativas.
- Node.js solo si se desea validar sintaxis del JavaScript.

## Ejecución local

### Opción 1: abrir directamente el HTML

Puedes abrir `index.html` en el navegador para una vista rápida del proyecto.

Si el navegador bloquea recursos locales, usa una de las siguientes opciones con servidor local.

### Opción 2: servidor local con Python

Desde la raíz del proyecto:

```bash
python -m http.server 8000
```

Y luego abre:

```text
http://localhost:8000/
```

En Windows también puedes usar:

```bash
py -m http.server 8000
```

### Opción 3: Apache

Si ya tienes Apache configurado, coloca la carpeta en tu `DocumentRoot` y visita:

```text
http://localhost/st-rosa-of-lima/
```

Ruta típica en Windows:

```text
C:\Apache24\htdocs\st-rosa-of-lima
```

## Validación

```bash
node --check js/script.js
```

## Estructura del proyecto

```text
st-rosa-of-lima/
├── index.html                 # Estructura principal y contenido de la landing
├── css/
│   └── style.css              # Estilos, layout, animaciones y accesibilidad visual
├── js/
│   ├── jquery.min.js           # Dependencia local usada por animaciones decorativas
│   └── script.js               # Lógica interactiva, efectos y lightbox
├── resources/
│   ├── video.mp4               # Fondo ambiental principal
│   ├── main.mp4                # Variante opcional para escenarios alternativos
│   ├── st-rosa-of-lima.svg     # Ilustración principal
│   ├── rose1.svg ... rose5.svg # Variantes de rosas
│   ├── heart1.svg ... heart5.svg # Variantes de corazones
│   ├── petal1.png ... petal4.png # Variantes de pétalos
│   └── logo.webp, logo.png     # Emblemas secundarios
└── README.md                  # Documentación del proyecto
```

## Comportamiento interactivo

El botón principal funciona como control accesible. Al activarse con clic, `Enter` o barra espaciadora, dispara una animación central, genera una ráfaga de pétalos y desplaza la vista hacia la línea de tiempo.

El selector inferior permite cambiar el efecto decorativo en tiempo real. El modo `Petalos` es la opción por defecto; `Aleatorio` alterna entre los distintos tipos de elementos visuales.

El logo superior abre un lightbox que se puede cerrar con botón, clic fuera o presionando `Escape`.

## Convenciones de desarrollo

- HTML para contenido estructural.
- CSS para presentación visual y responsive.
- JavaScript para interacciones, estados y efectos.
- Mantener rutas relativas desde la raíz del proyecto: `./css`, `./js` y `./resources`.
- Sin incrustar SVG o HTML grande dentro de `script.js`.
- Mantener consistencia entre nombres de assets y archivos reales.
- Dar prioridad a `transform` y `opacity` en animaciones.
- Probar en desktop y móvil cuando se toquen detalles visuales.
- Respetar `prefers-reduced-motion` en cualquier nueva animación.

## Accesibilidad y rendimiento

- Los controles interactivos cuentan con foco de teclado y etiquetas accesibles.
- Los elementos decorativos se marcan como no informativos para lectores de pantalla.
- El video se reproduce en silencio y en la línea principal del documento para evitar bloqueos del navegador.
- Los elementos decorativos se eliminan periódicamente para evitar acumulación de nodos en el DOM.
- Las animaciones se reducen o desactivan si el usuario lo solicita.
- Antes de publicar, validar contraste, desbordes y carga de assets en resolución móvil.

## Despliegue

La estrategia de despliegue es sencilla: copiar la carpeta al `DocumentRoot` de Apache o servirla desde un host estático. En producción se recomienda al menos:

- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` compatible con fuentes y recursos externos
- Caché de larga duración para imágenes, SVG, CSS y JS versionados

## Créditos y recursos

Los recursos visuales y tipográficos que provengan de terceros deben conservar sus atribuciones y licencias apropiadas. Antes de distribución pública, valida los derechos de uso de SVG, imágenes, video, tipografía y materiales externos.

## Licencia

Este proyecto se distribuye como software libre bajo la licencia MIT.

Se permite el uso, copia, modificación, fusión, publicación, distribución, sublicencia y/o venta de copias del software, y de permitir hacerlo a terceros, bajo las siguientes condiciones:

- Se debe incluir el aviso de copyright y esta licencia en todas las copias o partes sustanciales del software.
- El software se proporciona "tal cual", sin garantía de ningún tipo, expresa o implícita, incluyendo, pero no limitado a, garantías de comerciabilidad, idoneidad para un propósito particular y no infracción.