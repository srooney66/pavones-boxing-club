import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <p>
        Development, design & hosting by{" "}
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
  );
}
