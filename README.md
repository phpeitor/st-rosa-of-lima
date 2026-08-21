# Santa Rosa de Lima 🌸🌹
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

<a href="https://www.instagram.com/amvsoft.tech/">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/f3da0a207400365.66dcfc833368d.jpg" alt="Sta. Rosa de Lima" width="600">
</a>

Landing conmemorativa e interactiva dedicada a Santa Rosa de Lima. La experiencia combina un video ambiental, composición visual con SVG, efectos de pétalos, rosas y corazones, y una línea de tiempo sobre su vida.

## Características

- Hero visual a pantalla completa con video de fondo.
- Emblema central interactivo con pulso luminoso y ráfaga de pétalos PNG.
- Lightbox accesible para ampliar el emblema secundario.
- Selector de efectos con cuatro opciones: pétalos, rosas, corazones y modo aleatorio.
- Timeline responsive con los principales hitos de Santa Rosa de Lima.
- Soporte para teclado y `prefers-reduced-motion`.
- Sin proceso de compilación ni dependencias de servidor: es un sitio estático.

## Requisitos

- Un navegador moderno con soporte para HTML5, CSS3, SVG y JavaScript.
- Opcionalmente, cualquier servidor HTTP estático para probar el proyecto con rutas relativas.
- Node.js únicamente si se desea ejecutar la validación sintáctica del script.

## Ejecución local

El proyecto no requiere Apache, Node.js ni un proceso de compilación para funcionar.

### Opción 1: abrir el HTML

Abre `index.html` directamente en el navegador. Esta opción es suficiente para una revisión rápida de la interfaz.

Algunos navegadores pueden restringir recursos locales por políticas de seguridad. Si el video, las imágenes o los SVG no cargan correctamente, utiliza una de las opciones con servidor local.

### Opción 2: servidor local con Python

Si tienes Python instalado, ejecuta desde la raíz del proyecto:

```bash
python -m http.server 8000
```

Después abre:

```text
http://localhost:8000/
```

En Windows también puede ser necesario utilizar `py`:

```bash
py -m http.server 8000
```

### Opción 3: Apache

Si ya utilizas Apache, coloca el proyecto dentro de su `DocumentRoot` y abre:

```text
http://localhost/st-rosa-of-lima/
```

En una instalación de Apache para Windows, la ruta habitual es:

```text
C:\Apache24\htdocs\st-rosa-of-lima
```

Apache es una alternativa válida, pero no es un requisito del proyecto.

### Validación de JavaScript

```bash
node --check js/script.js
```

## Estructura

```text
st-rosa-of-lima/
├── index.html                 # Markup de la experiencia y timeline
├── css/
│   └── style.css              # Layout, responsive, efectos y accesibilidad visual
├── js/
│   ├── jquery.min.js           # Dependencia local usada por la animación decorativa
│   └── script.js               # Interacciones, efectos y lightbox
├── resources/
│   ├── video.mp4               # Fondo audiovisual
│   ├── st-rosa-of-lima.svg      # Ilustración principal
│   ├── rose1.svg ... rose5.svg  # Variantes de rosas
│   ├── heart1.svg ... heart5.svg # Variantes de corazones
│   ├── petal1.png ... petal4.png # Variantes de pétalos
│   └── logo.webp, logo.png      # Emblemas secundarios
└── ia-context/                 # Reglas y roles de trabajo del proyecto
```

## Interacciones

El emblema central funciona como control accesible. Al activarlo con clic, `Enter` o barra espaciadora, ejecuta un pulso visual, libera una ráfaga de pétalos y desplaza la vista hacia el timeline.

El widget inferior permite cambiar el efecto decorativo en tiempo real. El modo `Petalos` es el valor inicial; `Aleatorio` alterna entre pétalos, rosas y corazones.

El logo ubicado en la esquina superior izquierda abre un lightbox que puede cerrarse con el botón, haciendo clic fuera de la imagen o presionando `Escape`.

## Convenciones de desarrollo

- Mantener la estructura separada: HTML para contenido, CSS para presentación y JavaScript para comportamiento.
- Usar rutas relativas desde la raíz del sitio (`./css`, `./js` y `./resources`).
- No incrustar assets SVG o HTML extenso dentro de `script.js`.
- Mantener los nombres de variantes sincronizados con `resources/`.
- Priorizar `transform` y `opacity` en animaciones.
- Probar desktop y móvil después de cambios visuales.
- Respetar `prefers-reduced-motion` en cualquier efecto nuevo.

## Accesibilidad y rendimiento

- Los controles interactivos tienen foco de teclado, etiqueta accesible y estado `aria-pressed` cuando corresponde.
- Los recursos decorativos se marcan como no informativos para lectores de pantalla.
- El video se reproduce silenciado y en línea para evitar bloqueos del navegador.
- Los elementos decorativos se eliminan periódicamente para limitar la acumulación de nodos.
- Las animaciones se desactivan o reducen cuando el usuario lo solicita.
- Antes de publicar, comprueba contraste, desbordes en 360 px y carga de recursos desde Apache.

## Despliegue

El despliegue consiste en copiar el directorio al `DocumentRoot` de Apache. Para producción, configura como mínimo:

- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` compatible con las fuentes y recursos externos utilizados
- Cache de larga duración para imágenes, SVG, video, CSS y JavaScript versionado

Si se conserva la fuente de Google Fonts o el enlace externo de la cabecera visual, revisa sus implicaciones de privacidad y disponibilidad antes del despliegue.

## Créditos y recursos

Los recursos visuales deben conservar sus atribuciones originales cuando provengan de terceros. Antes de distribuir una versión pública, verifica las licencias de los SVG, imágenes, video, tipografía y material enlazado desde redes externas.

## Licencia

Este repositorio no declara una licencia de software explícita. Consulta al propietario del proyecto antes de reutilizar, redistribuir o modificar sus assets para otro producto.