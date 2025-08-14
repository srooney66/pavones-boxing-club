# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Pavones Boxing Club website - a Next.js 15 application for a boxing and muay thai gym in Costa Rica. The site features public pages for gym information, a gallery, and **full internationalization support (English/Spanish)**.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type check
npx tsc --noEmit

# Format code with Prettier
npx prettier --write .
```

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router - All pages use the `/app/[locale]` directory structure for i18n
- **React 19** with TypeScript - Components use modern React patterns and server components where appropriate
- **next-intl** - Handles internationalization with English and Spanish support
- **Supabase** - Handles database and media storage
- **Tailwind CSS** with shadcn/ui - Styling uses utility classes and pre-built components from `/components/ui`
- **Theme Support** - Dark/light mode via next-themes

### Internationalization (i18n) Architecture

The site supports English (`en`) and Spanish (`es`) languages with automatic locale detection and routing.

#### Key i18n Files:
- `/lib/i18n/routing.ts` - Defines supported locales and navigation exports
- `/lib/i18n/request.ts` - Configures message loading for server components
- `/messages/en.json` - English translations
- `/messages/es.json` - Spanish translations
- `/middleware.ts` - Handles locale routing and redirects

#### i18n Patterns:

**Server Components** - Use `getTranslations`:
```typescript
import { getTranslations } from 'next-intl/server'

export default async function Component() {
  const t = await getTranslations('namespace')
  return <h1>{t('key')}</h1>
}
```

**Client Components** - Use `useTranslations`:
```typescript
'use client'
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations('namespace')
  return <h1>{t('key')}</h1>
}
```

**Navigation** - Use localized routing:
```typescript
import { Link } from '@/lib/i18n/routing'
// Or use the LocalizedLink component wrapper
import LocalizedLink from '@/components/global/LocalizedLink'

<LocalizedLink href="/about">About</LocalizedLink>
```

**Dynamic Metadata** - Generate for each locale:
```typescript
export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return generateSiteMetadata(locale)
}
```

### Key Architectural Patterns

1. **Localized Routing**
   - All pages live under `/app/[locale]/` dynamic segment
   - Middleware handles locale detection and redirects
   - URLs are prefixed with locale (e.g., `/en/about`, `/es/about`)
   - Language switcher preserves scroll position during transitions

2. **Component Organization**
   - `/components/ui/` - shadcn/ui components (don't modify directly, use CLI to add new ones)
   - `/components/global/` - Site-wide components like Header, Footer, LanguageSwitcher
   - `/components/modals/` - Modal components like ContactModal
   - Page-specific components are co-located with their pages

3. **SEO & Metadata**
   - `/app/_seo/metadata.ts` - Centralized metadata generation with locale support
   - Each page can override with locale-specific metadata
   - Structured data includes multi-language support

4. **Supabase Integration**
   - Client creation in `/utils/supabase/client.ts` (browser) and `/utils/supabase/server.ts` (server)
   - Environment variables: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Images served from Supabase storage, configured in `next.config.ts`

5. **Styling Approach**
   - Use Tailwind utility classes for styling
   - Custom brand color available as `pbcGreen` (defined as #6BA368)
   - Components use `cn()` utility from `/lib/utils` for conditional classes
   - Follow existing component patterns when creating new UI elements

### Important Files and Their Roles

- `/app/layout.tsx` - Minimal root layout (just HTML structure)
- `/app/[locale]/layout.tsx` - Locale-specific layout with providers and global components
- `/lib/i18n/routing.ts` - i18n routing configuration and navigation exports
- `/lib/i18n/request.ts` - Server-side i18n configuration
- `/messages/*.json` - Translation files for each locale
- `/middleware.ts` - Handles locale routing
- `/components/global/LanguageSwitcher.tsx` - Language switching component
- `/components/global/LocalizedLink.tsx` - Wrapper for i18n-aware navigation

## Code Conventions

1. **Server Components by Default** - Use client components only when needed (interactivity, hooks, browser APIs)
2. **Always Use Translations** - Never hardcode UI text; always use translation keys
3. **Locale-Aware Navigation** - Use `LocalizedLink` or imports from `/lib/i18n/routing` for internal navigation
4. **Image Optimization** - Use Next.js Image component with Supabase URLs
5. **Type Safety** - Leverage TypeScript strictly, avoid `any` types
6. **Brand Consistency** - Keep "Pavones Boxing Club" unchanged across languages (it's the brand name)

## Adding New Features

### Adding New Translations:
1. Add keys to both `/messages/en.json` and `/messages/es.json`
2. Use consistent namespacing (e.g., `nav.home`, `footer.contact`)
3. Import and use in components as shown in patterns above

### Adding New Pages:
1. Create under `/app/[locale]/page-name/page.tsx`
2. Add translations for page content
3. Generate locale-specific metadata
4. Update navigation in Header/Footer with translation keys

### Adding shadcn/ui Components:
```bash
npx shadcn@latest add [component-name]
```

## Common Gotchas

1. **Dynamic Imports in request.ts** - The messages are loaded with dynamic imports to only load needed locale
2. **Await Params in Next.js 15** - Always await params: `const { locale } = await params`
3. **Client vs Server Translations** - Use `getTranslations` (server) vs `useTranslations` (client)
4. **Scroll Position** - Language switcher preserves scroll to prevent jarring UX
5. **Locale in URLs** - All internal links automatically get locale prefix via LocalizedLink

## Testing i18n

1. Test language switching preserves page state
2. Verify all text updates when switching languages
3. Check metadata is locale-specific in browser dev tools
4. Ensure URLs update with locale prefix
5. Test that scroll position is maintained during language switch