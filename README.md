# Omar Montoya - Portfolio & Blog

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

Portfolio personal y blog técnico de Omar Montoya - Solutions Architect & Full-Stack Developer.

## 🎯 Características

- ✅ **Astro 5** con SSR y Node adapter
- ✅ **Vue 3** para componentes interactivos
- ✅ **Tailwind CSS v4** con diseño blueprint/terminal
- ✅ **Multiidioma** (EN/ES) sin framework externo
- ✅ **Blog** con Markdown y Content Collections
- ✅ **Keystatic CMS** para gestión de contenido
- ✅ **SEO completo** con Open Graph, Schema.org y Sitemap
- ✅ **Performance** optimizado con hydration estratégica

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Validar SEO
npm run validate:seo
```

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── robots.txt          # Control de rastreo
│   ├── favicon.svg         # Favicon
│   ├── og-default.svg      # Imagen Open Graph (SVG)
│   └── logo.svg            # Logo para Schema.org (SVG)
├── src/
│   ├── assets/blog/        # Imágenes de blog posts
│   ├── components/         # Componentes Vue + SEO
│   │   ├── SEO.astro      # Meta tags y Open Graph
│   │   ├── SchemaOrg.astro # JSON-LD estructurado
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── Blog.vue
│   │   └── Footer.vue
│   ├── composables/        # Vue composables
│   │   └── useHydratedLang.ts
│   ├── content/            # Content Collections
│   │   ├── blog/          # Posts en Markdown
│   │   └── site/          # Traducciones (en.json, es.json)
│   ├── layouts/
│   │   └── MainLayout.astro # Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── 404.astro      # Not found
│   │   └── blog/
│   │       ├── index.astro  # Lista de posts
│   │       └── [slug].astro # Post individual
│   ├── store/
│   │   └── language.ts    # Nanostore para idioma
│   └── styles/
│       └── global.css     # Tailwind + theme custom
├── scripts/
│   └── validate-seo.mjs   # Validación SEO automática
├── astro.config.mjs       # Configuración Astro + Sitemap
├── keystatic.config.ts    # CMS configuration
├── SEO-GUIDE.md          # Guía completa de SEO
└── IMAGE-GUIDE.md        # Guía de imágenes
```

## 🔍 SEO Implementado

### ✅ Completado

- [x] **Sitemap XML** automático con soporte multiidioma
- [x] **Meta tags** completos (Open Graph + Twitter Cards)
- [x] **Schema.org** JSON-LD (WebSite + BlogPosting)
- [x] **Canonical URLs** y hreflang para EN/ES
- [x] **Robots.txt** con referencias al sitemap
- [x] **Componentes reutilizables** (SEO.astro, SchemaOrg.astro)
- [x] **Optimización por página** (homepage, blog, posts)
- [x] **Imágenes SEO** (SVG generado)

### ⚠️ Pendiente

- [ ] Configurar Google Search Console
- [ ] Agregar Google Analytics / Plausible

## 📝 Agregar Blog Posts

### Vía Keystatic CMS

1. Accede a `/keystatic` en desarrollo
2. Crea nuevo post en la colección "Blog"
3. Completa todos los campos SEO:
   - Title (< 60 caracteres)
   - Description (150-160 caracteres)
   - Tags (3-5 keywords)
   - Image (1200x630px)
   - Lang (en/es)

### Vía Markdown

```markdown
---
title: "Tu Título Aquí"
pubDate: 2025-12-10T00:00:00.000Z
description: "Descripción SEO optimizada"
author: Omar Montoya
tags: [javascript, typescript, tutorial]
lang: en
image: ../../assets/blog/tu-slug/cover.jpg
imageAlt: "Descripción de la imagen"
---

## Introducción

Tu contenido aquí...
```

## 🌐 Multiidioma

El sitio usa un sistema custom sin frameworks:

- **Traducciones:** `src/content/site/{en,es}.json`
- **State global:** Nanostore en `src/store/language.ts`
- **Composable:** `useHydratedLang()` para componentes Vue
- **Blog:** Filtra posts por campo `lang`

### Agregar traducción

1. Edita `src/content/site/en.json` y `es.json`
2. Actualiza schema en `src/content/config.ts`
3. Actualiza Keystatic en `keystatic.config.ts`

## 🎨 Diseño

Sistema de diseño **blueprint/terminal**:

- **Paleta:** Azul oscuro + cyan accent
- **Tipografía:** Fira Code (monospace)
- **Efectos:** Glassmorphism, grid patterns, glowing borders
- **Utilidades:** `.glass-panel`, `.bg-blueprint`

## 🛠️ Tech Stack

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Astro** | 5.x | Framework principal + SSR |
| **Vue** | 3.x | Componentes interactivos |
| **Tailwind CSS** | 4.x | Estilos + diseño |
| **Nanostores** | 1.x | State management |
| **Keystatic** | 5.x | CMS headless |

## 📊 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Puerto 4321

# Producción
npm run build           # Build a ./dist
npm run preview         # Test local del build

# SEO & Validación
npm run validate:seo    # Verifica configuración SEO

# Keystatic CMS
# Acceder a /keystatic en modo desarrollo
```

## 🚀 Deployment

### PM2 (Configurado)

```bash
# Build
npm run build

# Start con PM2
pm2 start ecosystem.config.cjs
pm2 save
```

### Vercel / Netlify

```bash
# Build command
npm run build

# Output directory
dist

# Environment variables
NODE_VERSION=20
```

## 📖 Documentación Adicional

- [copilot-instructions.md](./.github/copilot-instructions.md) - Arquitectura del proyecto

## 🔗 Links

- **Portfolio:** https://omarmtya.com
- **GitHub:** https://github.com/omarmtya
- **Blog:** /blog

## 📄 Licencia

MIT © Omar Montoya

---

**Desarrollado con** ❤️ **usando Astro + Vue**
