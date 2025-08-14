import VideoIframe from '@/components/global/VideoIframe'
import { getTranslations } from 'next-intl/server'

export default async function AboutPBC() {
  const t = await getTranslations('about')
  const videoUrl =
    'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/videos/Pavones-boxing-club-join-video-1.mp4'
  return (
    <div className="flex w-full flex-col justify-center text-center">
      <h2>{t('title')}</h2>
      <div className="">
        <p className="mx-auto max-w-[800px]">
          {t('description')}
        </p>
      </div>
      <VideoIframe srcUrl={videoUrl} />
    </div>
  )
}
