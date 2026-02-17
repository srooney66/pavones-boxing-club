import LocalizedLink from '@/components/global/LocalizedLink'
import { ThemeSwitcher } from '@/components/theme-switcher'
import ContactModal from '@/components/modals/ContactModal'
import TrackedWhatsAppLink from '@/components/global/TrackedWhatsAppLink'
import { Phone } from 'lucide-react'
import MobileMenuToggle from './MobileMenuToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { getTranslations } from 'next-intl/server'

export default async function Header() {
  const t = await getTranslations('nav')
  
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/gym-tajalin', label: t('gymTajalin') },
    { href: '#classes', label: t('classes'), comingSoon: true },
    { href: '#about', label: t('about') },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-b-pbcGreen border-opacity-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Desktop Nav */}
          <div className="flex items-center">
            <LocalizedLink href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-pbcGreen">Pavones Boxing Club</span>
            </LocalizedLink>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <LocalizedLink
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground/80 hover:text-pbcGreen transition-colors"
                >
                  {item.label}
                  {item.comingSoon && (
                    <span className="ml-2 text-xs text-muted-foreground">({t('comingSoon')})</span>
                  )}
                </LocalizedLink>
              ))}
            </div>
          </div>

          {/* Desktop Right Side - Contact Info */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <TrackedWhatsAppLink
              source="header_desktop"
              className="flex items-center gap-2 text-sm font-medium text-pbcGreen hover:text-pbcGreen/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+506 8747-4573</span>
            </TrackedWhatsAppLink>
            <ContactModal />
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile menu button and phone */}
          <div className="flex items-center md:hidden">
            <TrackedWhatsAppLink
              source="header_mobile"
              className="mr-4 text-pbcGreen"
            >
              <Phone className="h-5 w-5" />
            </TrackedWhatsAppLink>
            <MobileMenuToggle navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}