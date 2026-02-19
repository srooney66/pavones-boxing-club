'use client'

import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { usePathname } from '@/lib/i18n/routing'

export default function FloatingWhatsApp() {
  const pathname = usePathname()
  const isCampPage = pathname.startsWith('/muay-thai-and-surf-camp')

  const href = isCampPage
    ? 'https://wa.me/12674755419'
    : 'https://wa.me/50687474573'
  const source = isCampPage ? 'camp_floating_fab' : 'floating_fab'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 md:hidden"
      aria-label="Contact us on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { source })}
    >
      <MessageCircle className="h-6 w-6 fill-current" />
    </a>
  )
}
