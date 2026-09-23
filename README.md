# Nexus Gamer Cañete

**Estudiante:** Eloy Francesco Matos Guando  
**Taller:** Creación de una Landing Page con Angular  
**Temática:** Tienda Gamer

## Descripción

Nexus Gamer Cañete es una landing page para una tienda gamer ubicada en Cañete. Presenta una selección de periféricos y accesorios para mejorar cualquier setup. La interfaz usa una identidad visual elegante y tecnológica, con una paleta grafito, verde lima, azul acero y coral. El diseño incluye navegación por secciones, cards de productos, estadísticas, formulario de contacto y footer informativo.

## Tecnologías usadas

- Angular 17.3.17
- TypeScript
- HTML semántico
- CSS3, Flexbox y CSS Grid
- Google Fonts: Space Grotesk y Manrope
- Angular CLI

## Instalación y ejecución

Requisitos: Node.js, npm y Angular CLI.

```bash
npm install
ng serve
```

Después abre `http://localhost:4200/` en el navegador.

Para generar una compilación de producción:

```bash
ng build
```

## Estructura de carpetas

```text
src/app/
├── features/
│   └── landing/
│       ├── components/
│       │   ├── navbar/
│       │   ├── hero/
│       │   ├── productos/
│       │   ├── nosotros/
│       │   ├── contacto/
│       │   └── footer/
│       └── pages/
│           └── inicio/
├── app.component.ts
└── app.config.ts
```

Los componentes se organizan por feature y `app.component` carga únicamente la página `inicio`.

## Conceptos de Angular aplicados

- **Componentes standalone:** cada sección funciona como un componente independiente y declara sus propios imports.
- **Interpolación:** títulos, descripciones, precios, contactos y etiquetas se muestran desde propiedades TypeScript mediante `{{ }}`.
- **Property binding:** se usan bindings como `[href]`, `[class.featured]` y `[attr.aria-label]`.
- **Event binding:** el menú móvil responde a `(click)` y el formulario a `(submit)`.
- **`@for`:** renderiza enlaces, productos, estadísticas, datos de marca y redes sociales.
- **`@if`:** muestra el mensaje de confirmación después de enviar el formulario.
- **Feature structure:** la landing está agrupada dentro de `features/landing`.

## Imágenes sugeridas

La versión actual utiliza composiciones CSS para funcionar sin archivos externos. Para incorporar imágenes reales, guárdalas en `src/assets/img/` con estos nombres sugeridos:

```text
hero-setup-gamer.jpg
teclado-mecanico.jpg
mouse-gaming.jpg
audifonos-gaming.jpg
monitor-gaming.jpg
```

Busca fotografías propias o con licencia permitida usando términos como `dark gaming setup`, `mechanical gaming keyboard` y `gaming monitor high refresh rate`.

## Publicación en GitHub

El repositorio debe llamarse exactamente:

```text
Taller_fe_MatosGuando
```
