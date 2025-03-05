import Link from "next/link";
import HeaderContactUs from "../buttons/HeaderContactUs";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
        {/* Logo and left nav */}
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>Pavones Boxing Club</Link>
          <div className="flex items-center gap-2">
            {/* OPTIONAL: Add left hand side nav menu to the right of the logo */}
          </div>
        </div>
        {/* Right nav */}
        <div className="flex items-end gap-4">
          <HeaderContactUs />
          <ThemeSwitcher />
        </div>

        {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
      </div>
    </nav>
  );
}
