# AI Coding Agent Instructions - Omar Montoya Portfolio

## Architecture Overview

This is an **Astro 5 + Vue 3** multilingual (en/es) portfolio site with Keystatic CMS integration. The architecture follows a **hybrid rendering** pattern with client-side hydration for interactivity and server-side rendering for performance.

### Key Integration Points

- **Astro Content Collections**: Blog posts (`src/content/blog/`) and site data (`src/content/site/`) use Astro's type-safe content layer
- **Keystatic CMS**: GitHub-based CMS configured in `keystatic.config.ts` - manages blog and site data collections
- **Nanostores**: Global state management for language switching (`src/store/language.ts`)
- **Tailwind v4**: CSS framework with custom theme tokens in `src/styles/global.css`

## Critical Patterns

### 1. I18n Architecture (No Framework)

**Custom implementation using Nanostores + Content Collections:**

```typescript
// Language state: src/store/language.ts
export const currentLang = atom<'en' | 'es'>('en');
```

- Site translations stored in `src/content/site/{en,es}.json` (structured by section: hero, about, projects, etc.)
- Components receive `siteData` prop containing BOTH languages: `{ en: {...}, es: {...} }`
- Vue components use `useHydratedLang()` composable to reactively select language
- **Hydration-safe pattern**: Returns 'en' until component mounts to prevent SSR/client mismatches

**When adding translatable content:**
1. Update BOTH `src/content/site/en.json` AND `es.json`
2. Update schema in `src/content/config.ts` and `keystatic.config.ts`
3. Pass `siteData` to components via props

### 2. Vue Component Hydration Strategy

**Astro client directives control when Vue components activate:**

```astro
<Hero client:load siteData={siteData} />        <!-- Immediately on page load -->
<About client:visible siteData={siteData} />    <!-- When scrolled into view -->
```

- `client:load` - Critical above-fold content (Hero, LanguageSwitcher)
- `client:visible` - Deferred hydration for performance (About, Projects, Blog, Footer)
- All interactive components are Vue SFCs in `src/components/`

### 3. Content Collection Schemas

**Blog posts** require `lang` field ('en'|'es') for filtering:
```typescript
const enPosts = posts.filter(post => post.data.lang === 'en');
```

**Site data** structured by section (hero, about, projects, footer, notFound) - see `src/content/config.ts` for full schemas.

### 4. Design System

**Blueprint/terminal aesthetic with CSS custom properties:**

```css
/* src/styles/global.css */
--color-blueprint-bg: #0a192f;
--color-blueprint-accent: #64ffda; /* Cyan accent color */
```

- Use `.glass-panel` utility for frosted glass cards
- Grid background: `.bg-blueprint` utility
- Maintain monospace font (Fira Code) and terminal-style labels (e.g., "SYS.STATUS:", "ID:")

## Development Workflows

### Local Development
```bash
npm run dev          # Start dev server on localhost:4321
```

### Production Build & Deploy
```bash
npm run build        # Build to ./dist/
npm run preview      # Test production build locally
```

**PM2 deployment** (see `ecosystem.config.cjs`):
- Runs in cluster mode for scalability
- Entry point: `./dist/server/entry.mjs`
- Environment: `NODE_ENV=production`, `PORT=4321`

### Keystatic CMS Access
- Development: `/keystatic` route (requires GitHub OAuth setup)
- Manages blog posts and site translations via GitHub storage

## Common Tasks

### Adding a New Blog Post
1. Create in Keystatic UI at `/keystatic` OR manually in `src/content/blog/`
2. Set `lang: 'en'` or `'es'` field
3. Images go in `src/assets/blog/{post-slug}/`
4. Use Markdown with frontmatter (title, pubDate, description, author, tags, lang, image)

### Adding a New Site Section
1. Update schema in `src/content/config.ts` (Zod schema)
2. Update schema in `keystatic.config.ts` (Keystatic fields)
3. Add content to `src/content/site/en.json` and `es.json`
4. Create Vue component in `src/components/`
5. Import and add to `src/pages/index.astro` with appropriate `client:*` directive

### Modifying Translation Content
- Edit `src/content/site/en.json` and `es.json` directly OR via Keystatic
- Structure is hierarchical by section (hero.title, about.stack, etc.)
- Changes require server restart in dev mode

## File Organization

```
src/
├── assets/blog/          # Blog post images (per-post folders)
├── components/           # Vue SFCs (Hero, About, Projects, etc.)
├── composables/          # Vue composables (useHydratedLang)
├── content/              # Astro content collections
│   ├── blog/            # Markdown blog posts
│   ├── site/            # JSON translations (en.json, es.json)
│   └── config.ts        # Zod schemas for content collections
├── layouts/              # Astro layouts (MainLayout)
├── pages/                # File-based routing
│   ├── blog/[slug].astro  # Dynamic blog post pages
│   └── index.astro        # Homepage
├── store/                # Nanostores (language state)
└── styles/global.css     # Tailwind + custom theme
```

## Tech Stack Specifics

- **Astro 5**: Uses `astro:content` with glob loaders, SSR mode with Node adapter
- **Vue 3**: Composition API, `<script setup>` syntax
- **Tailwind 4**: New `@theme` syntax in CSS, Vite plugin integration
- **TypeScript**: Strict typing for content schemas and components

## Non-Obvious Conventions

1. **Language detection priority**: localStorage > navigator.language > default 'en'
2. **Blog list pages**: No pagination implemented yet (renders all posts filtered by lang)
3. **404 handling**: Custom component with translations in `src/pages/404.astro`
4. **External links**: GitHub social link hardcoded to `https://github.com/omarmtya`
5. **Image optimization**: Use Astro's `<Image>` component for blog cover images
