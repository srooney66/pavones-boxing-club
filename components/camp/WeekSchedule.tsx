import { getTranslations } from 'next-intl/server'

export default async function WeekSchedule() {
  const t = await getTranslations('surfCamp.schedule')

  const days = [
    { day: t('monday'), morning: t('muayThai'), afternoon: t('surf') },
    { day: t('tuesday'), morning: t('freeSurf'), afternoon: t('conditioning') },
    { day: t('wednesday'), morning: t('muayThai'), afternoon: t('surf') },
    { day: t('thursday'), morning: t('freeSurf'), afternoon: t('conditioning') },
    { day: t('friday'), morning: t('muayThai'), afternoon: t('freeSurf') },
    { day: t('saturday'), morning: t('muayThai'), afternoon: t('excursion') },
    { day: t('sunday'), morning: t('rest'), afternoon: t('excursion') },
  ]

  return (
    <section className="w-full">
      <h2 className="text-center">{t('title')}</h2>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-pbcGreen/20">
        <div className="grid grid-cols-3 bg-pbcGreen/10 text-sm font-semibold">
          <div className="p-3" />
          <div className="p-3 text-center">{t('morning')}</div>
          <div className="p-3 text-center">{t('afternoon')}</div>
        </div>
        {days.map((row, i) => (
          <div
            key={row.day}
            className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-muted/30' : ''} ${i < days.length - 1 ? 'border-b border-pbcGreen/10' : ''}`}
          >
            <div className="p-3 font-medium">{row.day}</div>
            <div className="p-3 text-center text-muted-foreground">
              {row.morning}
            </div>
            <div className="p-3 text-center text-muted-foreground">
              {row.afternoon}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
