'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import LocalizedLink from '@/components/global/LocalizedLink'
import ContactModal from '@/components/modals/ContactModal'
import { ThemeSwitcher } from '@/components/theme-switcher'
import LanguageSwitcher from './LanguageSwitcher'

interface NavItem {
  href: string
  label: string
  comingSoon?: boolean
}

export default function MobileMenuToggle({ navItems }: { navItems: NavItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pbcGreen"
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <X className="block h-6 w-6" />
        ) : (
          <Menu className="block h-6 w-6" />
        )}
      </button>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 md:hidden bg-background border-b border-pbcGreen/20">
          <div className="space-y-1 pb-3 pt-2">
            {navItems.map((item) => (
              <LocalizedLink
                key={item.href}
                href={item.href}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-foreground/80 hover:border-pbcGreen hover:bg-muted hover:text-pbcGreen"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {item.comingSoon && (
                  <span className="ml-2 text-xs text-muted-foreground">(Coming Soon)</span>
                )}
              </LocalizedLink>
            ))}
            <div className="border-t border-muted px-4 py-3">
              <div className="flex flex-col space-y-3">
                <a
                  href="https://wa.me/50687474573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-pbcGreen"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp: +506 8747-4573</span>
                </a>
                <ContactModal />
                <div className="pt-2 flex items-center gap-4">
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}