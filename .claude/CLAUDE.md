# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Pavones Boxing Club website - a Next.js 15 application for a boxing and muay thai gym in Costa Rica. The site features public pages for gym information, a gallery, and member authentication via Supabase.

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

# Format code with Prettier
npx prettier --write .
```

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router - All pages use the `/app` directory structure
- **React 19** with TypeScript - Components use modern React patterns and server components where appropriate
- **Supabase** - Handles authentication, database, and media storage
- **Tailwind CSS** with shadcn/ui - Styling uses utility classes and pre-built components from `/components/ui`
- **Theme Support** - Dark/light mode via next-themes

### Key Architectural Patterns

1. **Authentication Flow**
   - Server actions in `/app/actions.ts` handle sign-in, sign-up, and sign-out
   - Supabase middleware in `/utils/supabase/middleware.ts` manages sessions
   - Protected routes under `/app/protected/` require authentication
   - Auth pages use server-side validation and redirect patterns

2. **Component Organization**
   - `/components/ui/` - shadcn/ui components (don't modify directly, use CLI to add new ones)
   - `/components/global/` - Site-wide components like Header and Footer
   - `/components/modals/` - Modal components like ContactModal
   - Page-specific components are co-located with their pages

3. **Supabase Integration**
   - Client creation in `/utils/supabase/client.ts` (browser) and `/utils/supabase/server.ts` (server)
   - Environment variables: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Images served from Supabase storage, configured in `next.config.ts`

4. **Styling Approach**
   - Use Tailwind utility classes for styling
   - Custom brand color available as `pbcGreen` (defined as #6BA368)
   - Components use `cn()` utility from `/lib/utils` for conditional classes
   - Follow existing component patterns when creating new UI elements

### Important Files and Their Roles

- `/app/layout.tsx` - Root layout with theme provider and global components
- `/app/actions.ts` - All server actions for authentication
- `/utils/supabase/middleware.ts` - Session management middleware
- `/components.json` - shadcn/ui configuration (don't modify manually)
- `/tailwind.config.ts` - Tailwind configuration with custom colors and animations

## Code Conventions

1. **Server Components by Default** - Use client components only when needed (interactivity, hooks, browser APIs)
2. **Server Actions** - Prefer server actions in `/app/actions.ts` for form handling and data mutations
3. **Error Handling** - Server actions return redirect() or return error messages to display
4. **Image Optimization** - Use Next.js Image component with Supabase URLs
5. **Type Safety** - Leverage TypeScript strictly, avoid `any` types

## Adding New Features

When adding new shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

When working with Supabase:
- Use `createClient` from `/utils/supabase/server.ts` in server components
- Use `createClient` from `/utils/supabase/client.ts` in client components
- Always handle authentication states and errors

## Common Patterns

### Protected Page Pattern
```typescript
// Check authentication in server component
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
if (!user) return redirect("/sign-in")
```

### Form Handling Pattern
```typescript
// Use server actions with form data
export async function actionName(formData: FormData) {
  "use server"
  // Validate, process, and redirect
}
```