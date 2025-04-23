import Link from 'next/link'
import { ThemeSwitcher } from '@/components/theme-switcher'
import ContactModal from '@/components/modals/ContactModal'

export default function Header() {
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-pbcGreen border-opacity-20">
      <div className="flex w-full max-w-7xl items-center justify-between px-8 py-3 text-sm">
        {/* Logo and left nav */}
        <div className="flex items-center gap-5 font-semibold">
          <Link href={'/'}>Pavones Boxing Club</Link>
          <div className="flex items-center gap-2">
            {/* OPTIONAL: Add left hand side nav menu to the right of the logo */}
          </div>
        </div>
        {/* Right nav */}
        <div className="flex items-end gap-4">
          <ContactModal />
          <ThemeSwitcher />
        </div>
        {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
      </div>
    </nav>
  )
}
