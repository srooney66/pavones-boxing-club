import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full items-center justify-center gap-4 border-t border-t-pbcGreen border-opacity-20 p-3 text-center text-xs lg:gap-8">
      <p className="text-sm">
        Development, design & hosting by{' '}
        <a
          href="https://RooneyIT.tech"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          RooneyIT Solutions
        </a>
      </p>
      <ThemeSwitcher />
    </footer>
  )
}
