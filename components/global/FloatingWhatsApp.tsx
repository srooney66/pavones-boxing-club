'use client'

import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/50687474573"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 md:hidden"
      aria-label="Contact us on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating_fab' })}
    >
      <MessageCircle className="h-6 w-6 fill-current" />
    </a>
  )
}
