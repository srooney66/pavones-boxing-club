# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Pavones Boxing Club website - a Next.js 15 application for a boxing and muay thai gym in Costa Rica. The site features public pages for gym information, a gallery, and **full internationalization support (English/Spanish)**.

- **Production URL**: `pavonesboxingclub.com`
- **Deployed on**: Vercel (uses `VERCEL_URL` env var for base URL)

### Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=        # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # Supabase anonymous key
# VERCEL_URL is set automatically by Vercel at deploy time
```

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
- **Supabase** - Handles database and media storage (images from Supabase storage)
- **Tailwind CSS** with shadcn/ui - Styling uses utility classes and pre-built components from `/components/ui`
- **Theme Support** - Dark/light mode via next-themes

### Current Routes
Only two pages exist under `/app/[locale]/`:
- `/` - Home page (HomeHero + AboutPBC + Gallery)
- `/gym-tajalin` - Gym Tajalin page (PageHero + Gallery)

Note: `sitemap.ts` references `/sign-in`, `/sign-up`, `/forgot-password` but these pages do not exist yet.

### Internationalization (i18n) Architecture

The site supports English (`en`) and Spanish (`es`) languages with automatic locale detection and routing.

#### Key i18n Files:
- `/lib/i18n/routing.ts` - Defines supported locales (`en`, `es`), default locale (`en`), `localePrefix: 'always'`, and exports `Link`, `redirect`, `usePathname`, `useRouter`
- `/lib/i18n/request.ts` - Configures dynamic message loading per locale for server components
- `/messages/en.json` and `/messages/es.json` - Translation files
- `/middleware.ts` - Uses only `next-intl/middleware` for locale routing (Supabase auth middleware exists in `utils/supabase/middleware.ts` but is **not wired in**)

#### Translation Namespaces:
`nav`, `hero`, `about`, `gymTajalin`, `contact`, `footer`, `gallery`, `theme`, `accessibility`

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

3. **Supabase Integration**
   - Client creation in `/utils/supabase/client.ts` (browser) and `/utils/supabase/server.ts` (server)
   - Environment variables: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Images served from Supabase storage, configured in `next.config.ts`

4. **Styling Approach**
   - Use Tailwind utility classes for styling
   - Custom brand color `pbcGreen` (#6BA368) is defined at `theme.colors` in tailwind config — **this replaces the entire default Tailwind color palette**. Standard colors like `white`, `black`, `red-500` etc. are NOT available. Only `pbcGreen` and the CSS variable-based shadcn colors in `extend.colors` work.
   - Components use `cn()` utility from `/lib/utils` for conditional classes
   - Follow existing component patterns when creating new UI elements

5. **SEO**
   - `/app/_seo/metadata.ts` - `generateSiteMetadata(locale)` for locale-aware metadata
   - `/app/_seo/structured-data.ts` - Schema.org `SportsActivityLocation` JSON-LD
   - `/app/_seo/SeoHead.tsx` - Injects structured data script tag
   - `/app/robots.ts` and `/app/sitemap.ts` - Auto-generated SEO files

### Important Files and Their Roles

- `/app/layout.tsx` - Minimal root layout (HTML shell + Geist font)
- `/app/[locale]/layout.tsx` - Locale-specific layout with providers, Header, Footer, FloatingWhatsApp
- `/middleware.ts` - Locale routing only (next-intl)
- `/components/global/LocalizedLink.tsx` - Wrapper for i18n-aware navigation; also exports `ExternalLink` for outbound links
- `/components/global/FloatingWhatsApp.tsx` - Fixed WhatsApp FAB (mobile only)

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

1. **Await Params in Next.js 15** - Always await params: `const { locale } = await params`
2. **Client vs Server Translations** - Use `getTranslations` (server) vs `useTranslations` (client)
3. **Tailwind Default Colors Missing** - `pbcGreen` replaces (not extends) the default palette. Use CSS variable-based colors from shadcn (e.g., `bg-background`, `text-foreground`) or add needed colors to `extend.colors`
4. **Scroll Position** - Language switcher preserves scroll to prevent jarring UX
5. **Locale in URLs** - All internal links automatically get locale prefix via LocalizedLink
6. **Supabase Auth Not Active** - Auth middleware exists (`utils/supabase/middleware.ts`) but is not connected in `middleware.ts`. If enabling auth, wire `updateSession` into the middleware chain.

## Testing i18n

1. Test language switching preserves page state
2. Verify all text updates when switching languages
3. Check metadata is locale-specific in browser dev tools
4. Ensure URLs update with locale prefix
5. Test that scroll position is maintained during language switch