import { ThemeSwitcher } from '@/components/theme-switcher'
import Link from 'next/link'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-t-pbcGreen border-opacity-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact & Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pbcGreen">Contact & Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-pbcGreen" />
                <div>
                  <p className="font-medium">Pavones Boxing Club</p>
                  <p className="text-muted-foreground">Main Road, Pavones</p>
                  <p className="text-muted-foreground">Puntarenas, Costa Rica</p>
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
                <p className="text-muted-foreground">Contact for schedule</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pbcGreen">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-pbcGreen transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gym-tajalin" className="hover:text-pbcGreen transition-colors">
                  Gym Tajalin
                </Link>
              </li>
              <li>
                <Link href="#classes" className="hover:text-pbcGreen transition-colors">
                  Classes <span className="text-xs text-muted-foreground">(Coming Soon)</span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-pbcGreen transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pbcGreen">Training</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Boxing Training</li>
              <li>• Muay Thai Classes</li>
              <li>• Private Sessions Available</li>
              <li>• All Skill Levels Welcome</li>
              <li>• Professional Coaching</li>
            </ul>
            <p className="mt-4 text-sm font-medium">
              Coach: Pierre
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-pbcGreen/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Pavones Boxing Club. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground">
                Development & hosting by{' '}
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