import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SoundToggle from "../SoundToggle/SoundToggle";

const navLinkClass =
  "block rounded-lg px-3 py-2 text-sm font-medium text-evently-text-secondary transition-colors duration-200 hover:bg-white/[0.04] hover:text-evently-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-evently-border bg-evently-bg-secondary/90 text-evently-text shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-xl"
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="evently-mobile-navigation"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            className="rounded-lg p-2 text-evently-text transition-all duration-200 hover:bg-white/[0.04] hover:shadow-[0_0_0_3px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60 md:hidden"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <a
            href="#top"
            className="flex items-center gap-2 rounded-lg text-evently-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60"
          >
            <span
              className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 shadow-[0_0_24px_rgba(124,92,255,0.24)]"
              aria-hidden="true"
            />
            <span className="font-bold tracking-wide">EVENTLY</span>
            <span className="ml-1 hidden text-xs text-evently-muted sm:inline">Premium</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-1 md:flex">
            <li><a href="#events" className={navLinkClass}>Events</a></li>
            <li><a href="#calendar" className={navLinkClass}>Kalender</a></li>
            <li><a href="#about" className={navLinkClass}>Über uns</a></li>
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <SoundToggle />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="evently-mobile-navigation"
          className="border-t border-evently-border px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            <li><a href="#events" className={navLinkClass}>Events</a></li>
            <li><a href="#calendar" className={navLinkClass}>Kalender</a></li>
            <li><a href="#about" className={navLinkClass}>Über uns</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
