'use client'

import { trackEvent } from '@/lib/analytics'
import { ReactNode } from 'react'

interface TrackedWhatsAppLinkProps {
  source: string
  className?: string
  children: ReactNode
}

export default function TrackedWhatsAppLink({ source, className, children }: TrackedWhatsAppLinkProps) {
  return (
    <a
      href="https://wa.me/50687474573"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent('whatsapp_click', { source })}
    >
      {children}
    </a>
  )
}
