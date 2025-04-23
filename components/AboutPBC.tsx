import VideoIframe from '@/components/global/VideoIframe'

export default function AboutPBC() {
  const videoUrl =
    'https://fysvpznwbdceugzufbnd.supabase.co/storage/v1/object/public/publicMedia/videos/Pavones-boxing-club-join-video-1.mp4'
  return (
    <div className="flex w-full flex-col justify-center text-center">
      <h2>About Pavones Boxing Club</h2>
      <div className="">
        <p className="mx-auto max-w-[800px]">
          Pavones Boxing Club was created in 2024 to improve access to fitness
          training, classes and activities including boxing, muay thai, kickboxing,
          weight training, cardio, core, flexibility and much more. In addition, the
          club trainers and coaches offer private training sessions personalized to
          your needs. Pavones Boxing Club is located in Playa Pavones, Costa Rica.
          Nestled in the breath-taking jungles and beaches of the souther pacific
          zone of Costa Rica, it's no wonder that people travel from all over the
          world to surf in Pavones and train at Pavones Boxing Club.
        </p>
      </div>
      <VideoIframe srcUrl={videoUrl} />
    </div>
  )
}
