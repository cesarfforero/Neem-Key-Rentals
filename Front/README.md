# Neem Key – Luxury Header (v1)

Este proyecto inicia la construcción del nuevo front-end de **Neem Key Rentals**, comenzando por un **header premium**, inspirado en el estilo elegante y minimalista de la cultura hotelera.

El objetivo fue crear un encabezado totalmente responsive, mobile-first, con un enfoque luxury: tipografías finas, espaciados suaves, iconografía minimalista y botones tipo boutique.

---

## ✨ Características Principales

### ✔️ Diseño Premium (Luxury UI)

- Fondo marfil claro (#F8F3E9)
- Tipografía marrón/dorado suave para el menú
- Botón “Reserve” en azul oscuro estilo resort
- Logo vertical con **NK arriba / NEEM KEY abajo**

### ✔️ Mobile First

Estructura construida primero para móvil:

- Logo centrado
- Menú hamburguesa a la izquierda
- Ícono de teléfono a la derecha
- Menú principal oculto y desplegable con animación toggle

### ✔️ Desktop Responsive

- Logo alineado a la izquierda
- Menú principal centrado
- Botones “Contact Us” y “Reserve” alineados a la derecha
- Flexbox + spacing premium para simular navegación de hotel 5 estrellas

### ✔️ Interactividad con Vanilla JS

Un pequeño script controla:

- Apertura/cierre del menú móvil
- Sincronización del menú cuando se cambia a desktop
- Aria-attributes para accesibilidad

### ✔️ Código Limpio y Escalable

- HTML semántico
- CSS organizado por secciones
- Mobile-first breakpoints
- Variables CSS para fácil personalización
- Estructura profesional sin frameworks (no Bootstrap, no Tailwind)

---

# Neem Key – Luxury Hero Section & Explore More (Día 2)

Este documento resume el trabajo realizado hoy en el desarrollo del front-end de **Neem Key**, continuando la construcción de una interfaz premium inspirada en marcas de lujo como Explora Journeys, Four Seasons, Aman y Rosewood.

El enfoque del día fue completar la **sección principal (hero)**, refinando tanto desktop como mobile, y mejorar la experiencia de navegación con una opción suave de _Explore more_.

---

## ✨ Objetivos del Día

### ✔ Completar el Hero principal

Se implementó una hero section de alto nivel:

- Imagen/video de fondo con **gradient overlay** para mejorar la legibilidad.
- Título premium en mayúsculas: _“UNA INVITACIÓN EXCLUSIVA”_.
- Subtítulo debajo con tipografía elegante.
- Posicionamiento centrado tanto en mobile como desktop.
- Comportamiento responsivo totalmente fluido.

---

## 🧭 Tarjeta de Búsqueda (Search Card)

Se creó un bloque premium similar al de Explora:

- Dos campos: **“¿A dónde?”** y **“¿Cuándo?”**.
- Íconos decorativos (ubicación y calendario).
- Líneas inferiores finas estilo boutique hotel.
- Dropdown arrows minimalistas.
- Botón dorado **“MIRA LAS 3 CASAS DISPONIBLES”** con look luxury.

### Adaptaciones responsivas:

- **Mobile:** campos apilados + CTA completa.
- **Desktop:** campos alineados horizontalmente con CTA a la derecha.
- Sombras suaves, bordes redondeados y spacing profesional.

---

## 🧩 Explore More + Scroll Suave

Se añadió la sección **Explore more**, incluyendo:

- Texto centrado elegante.
- Flecha minimalista.
- Bloque inferior con color suave tipo resort.
- Botón que, al hacer clic, realiza un **scroll suave** hacia la siguiente sección.

Implementado con vanilla JS:

```javascript
targetSection.scrollIntoView({ behavior: "smooth" });



## 📁 Archivos del Proyecto

/
│── index.html → estructura principal del header
│── styles.css → estilos (mobile-first, desktop, luxury palette)
│── index.js → toggle del menú
└── package.json → live-server para desarrollo rápido

Tecnologías Usadas

HTML5

CSS3 (Flexbox + Responsive Design)

Vanilla JavaScript

Mobile First Development

live-server para desarrollo ágil

Desarrollado como parte de la nueva plataforma visual de Neem Key Rentals
```
