import Link from "next/link";
import HeaderContactUs from "@/components/buttons/HeaderContactUs";
import { ThemeSwitcher } from "@/components/theme-switcher";
import ContactModal from "@/components/modals/ContactModal";

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-pbcGreen border-opacity-20 h-16">
      <div className="w-full max-w-7xl flex justify-between items-center py-3 px-8 text-sm">
        {/* Logo and left nav */}
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>Pavones Boxing Club</Link>
          <div className="flex items-center gap-2">
            {/* OPTIONAL: Add left hand side nav menu to the right of the logo */}
          </div>
        </div>
        {/* Right nav */}
        <div className="flex items-end gap-4">
          {/* <HeaderContactUs /> */}
          <ContactModal />
          <ThemeSwitcher />
        </div>

        {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
      </div>
    </nav>
  );
}
