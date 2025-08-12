import Image from 'next/image'
import { ReactNode } from 'react'

interface PageHeroProps {
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  children: ReactNode
  priority?: boolean
}

export default function PageHero({ 
  imageSrc, 
  imageAlt, 
  imagePosition = 'left',
  children,
  priority = false 
}: PageHeroProps) {
  return (
    <section className="w-full">
      <div className={`flex w-full items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 
        ${imagePosition === 'left' 
          ? 'flex-col lg:flex-row' 
          : 'flex-col lg:flex-row-reverse'
        }`}
      >
        {/* Content Container - Shows first on mobile */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left w-full">
          {children}
        </div>

        {/* Image Container - Shows second on mobile, responsive sizing */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] aspect-square">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}