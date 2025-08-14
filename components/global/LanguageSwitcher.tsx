'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/lib/i18n/routing'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'
    
    // Store current scroll position
    const scrollY = window.scrollY
    
    startTransition(() => {
      // For shared pathnames, we just switch the locale
      router.push(pathname, {locale: newLocale, scroll: false})
      
      // Restore scroll position after navigation
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
      })
    })
  }

  return (
    <Button
      onClick={switchLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 hover:text-pbcGreen"
      aria-label={locale === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {locale === 'en' ? 'ES' : 'EN'}
      </span>
      <span className="sm:hidden">
        {locale === 'en' ? 'ES' : 'EN'}
      </span>
    </Button>
  )
}