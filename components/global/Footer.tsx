import { ThemeSwitcher } from '@/components/theme-switcher'
import LocalizedLink from '@/components/global/LocalizedLink'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')
  return (
    <footer className="mt-auto w-full border-t border-t-pbcGreen border-opacity-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact & Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pbcGreen">{t('contactLocation')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-pbcGreen" />
                <div>
                  <p className="font-medium">Pavones Boxing Club</p>
                  <p className="text-muted-foreground">{t('mainRoad')}</p>
                  <p className="text-muted-foreground">{t('location')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-pbcGreen" />
                <a 
                  href="https://wa.me/50687474573" 
                  className="hover:text-pbcGreen transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +506 8747-4573 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-pbcGreen" />
                <p className="text-muted-foreground">{t('contactForSchedule')}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pbcGreen">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LocalizedLink href="/" className="hover:text-pbcGreen transition-colors">
                  {tNav('home')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/gym-tajalin" className="hover:text-pbcGreen transition-colors">
                  {tNav('gymTajalin')}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="#classes" className="hover:text-pbcGreen transition-colors">
                  {tNav('classes')} <span className="text-xs text-muted-foreground">({tNav('comingSoon')})</span>
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="#about" className="hover:text-pbcGreen transition-colors">
                  {tNav('about')}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          {/* Training Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pbcGreen">{t('training')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t('boxingTraining')}</li>
              <li>• {t('muayThaiClasses')}</li>
              <li>• {t('privateSessions')}</li>
              <li>• {t('allLevels')}</li>
              <li>• {t('professionalCoaching')}</li>
            </ul>
            <p className="mt-4 text-sm font-medium">
              {t('coach')}: Pierre
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-pbcGreen/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Pavones Boxing Club. {t('rights')}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground">
                {t('developedBy')}{' '}
                <a
                  href="https://RooneyIT.tech"
                  target="_blank"
                  className="font-semibold hover:text-pbcGreen transition-colors"
                  rel="noreferrer"
                >
                  RooneyIT Solutions
                </a>
              </p>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}