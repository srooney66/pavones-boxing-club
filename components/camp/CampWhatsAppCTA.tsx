'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'
import { useTranslations } from 'next-intl'

interface CampWhatsAppCTAProps {
  source: string
}

export default function CampWhatsAppCTA({ source }: CampWhatsAppCTAProps) {
  const t = useTranslations('surfCamp')

  return (
    <section className="w-full py-4 text-center">
      <h2>{t('cta.title')}</h2>
      <p className="mx-auto max-w-xl text-muted-foreground">{t('cta.subtitle')}</p>
      <a
        href="https://wa.me/12674755419"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('camp_whatsapp_click', { source })}
      >
        <Button
          size="lg"
          className="text-white mt-6 gap-2 bg-pbcGreen px-8 py-6 text-lg hover:bg-pbcGreen/90"
        >
          <MessageCircle className="h-5 w-5" />
          {t('cta.button')}
        </Button>
      </a>
    </section>
  )
}
