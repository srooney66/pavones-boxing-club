'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'
import MapIframe from '../global/MapIframe'
import { useTranslations } from 'next-intl'
import { Phone, Clock, MapPin, MessageCircle, X } from 'lucide-react'

export default function ContactModal() {
  const t = useTranslations('contact')
  
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="default" className="hover:bg-pbcGreen hover:text-white transition-colors">
          {t('button')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[95%] md:max-w-[600px] p-0 overflow-hidden">
        <AlertDialogHeader className="relative bg-pbcGreen text-white p-6">
          <AlertDialogTitle className="text-2xl font-bold pr-8">{t('title')}</AlertDialogTitle>
          <AlertDialogCancel className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 border-0 p-0 text-white">
            <X className="h-4 w-4" />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <div className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-pbcGreen mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{t('trainer')}: Pierre</p>
                <a 
                  href="https://wa.me/50687474573" 
                  className="text-pbcGreen hover:underline flex items-center gap-1 mt-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  +506 8747-4573 ({t('whatsapp')})
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-pbcGreen mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">{t('schedule')}</p>
                <p className="text-muted-foreground">{t('scheduleComingSoon')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-pbcGreen mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Pavones Boxing Club</p>
                <p className="text-muted-foreground">Main Road, Pavones, Costa Rica</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 border border-pbcGreen/20">
            <p className="text-sm italic text-muted-foreground">{t('pricing')}</p>
          </div>

          <div className="rounded-lg overflow-hidden border border-pbcGreen/20">
            <MapIframe />
          </div>
        </div>

        <AlertDialogFooter className="px-6 pb-6">
          <a 
            href="https://wa.me/50687474573" 
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-pbcGreen hover:bg-pbcGreen/90 text-white gap-2">
              <MessageCircle className="h-4 w-4" />
              {t('whatsapp')} {t('button')}
            </Button>
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
