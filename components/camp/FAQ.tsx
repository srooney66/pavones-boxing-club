'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

const faqKeys = ['level', 'bring', 'lodging', 'travel', 'dates'] as const

export default function FAQ() {
  const t = useTranslations('surfCamp.faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full">
      <h2 className="text-center">{t('title')}</h2>
      <div className="mx-auto max-w-2xl space-y-3">
        {faqKeys.map((key, i) => (
          <div key={key} className="rounded-lg border border-pbcGreen/20 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
            >
              {t(`items.${key}.question`)}
              <ChevronDown
                className={`h-5 w-5 text-pbcGreen shrink-0 ml-2 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === i && (
              <div className="border-t border-pbcGreen/10 px-4 pb-4 pt-3 text-muted-foreground">
                {t(`items.${key}.answer`)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
