import { useState } from "react";
import { NavLink } from "react-router";

import ThemeToggle from "./ThemeToggle";
import AnimatedEventlyLogo from "./ui/AnimatedEventlyLogo";

const navigation = [
  { label: "Events entdecken", to: "/eventlist" },
  { label: "Kalender", to: "/eventcalendar" },
  { label: "Event erstellen", to: "/createevent" },
];

const navLinkClass = ({ isActive }) =>
  `rounded-lg border px-3 py-2 text-[0.82rem] font-semibold tracking-[0.015em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60 ${
    isActive
      ? "border-evently-primary bg-evently-primary text-white shadow-[0_0_24px_var(--evently-primary-soft)]"
      : "border-transparent text-evently-text-secondary hover:border-evently-primary/50 hover:bg-evently-primary-soft hover:text-evently-text"
  }`;

const Header = ({ isPremium = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileNavigation = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-evently-border bg-evently-bg/90 text-evently-text shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((isOpen) => !isOpen)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-evently-border bg-white/[0.02] text-evently-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-evently-primary/60 hover:bg-evently-primary-soft hover:text-evently-text hover:shadow-[0_0_22px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="evently-mobile-navigation"
            aria-label={mobileOpen ? "Navigation schließen" : "Navigation öffnen"}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <path d="m6 6 12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <NavLink
            to="/"
            end
            onClick={closeMobileNavigation}
            className="group flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60"
            aria-label="Evently Startseite"
          >
            <AnimatedEventlyLogo size="sm" premium={isPremium} />
            <span className="truncate font-evently-brand text-2xl font-normal tracking-[0.03em]">
              Evently
            </span>
            <span
              title={
                isPremium
                  ? "Premium freigeschaltet"
                  : "Wähle drei Events, um Premium freizuschalten"
              }
              className={`relative ml-2 hidden rounded-lg border px-3 py-2 text-[0.82rem] font-semibold tracking-[0.015em] transition-all duration-500 sm:inline-flex ${
                isPremium
                  ? "overflow-hidden border-amber-300/70 bg-gradient-to-r from-amber-500/20 via-yellow-200/25 to-amber-400/20 font-[Georgia,serif] italic tracking-[0.08em] text-amber-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_26px_rgba(245,158,11,0.38)] before:absolute before:inset-y-0 before:-left-8 before:w-5 before:-skew-x-12 before:bg-white/70 before:blur-sm before:transition-all before:duration-700 hover:-translate-y-0.5 hover:before:left-[115%]"
                  : "border-evently-border bg-white/[0.02] text-evently-text-secondary hover:-translate-y-0.5 hover:border-evently-primary/50 hover:bg-evently-primary-soft hover:text-evently-text hover:shadow-[0_0_22px_var(--evently-primary-soft)]"
              }`}
            >
              <span className="relative z-10">Premium</span>
            </span>
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="inline-flex min-h-10 items-center justify-center rounded-xl border border-evently-border bg-white/[0.02] px-3 text-sm text-evently-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-evently-primary/60 hover:bg-evently-primary-soft hover:text-evently-text hover:shadow-[0_0_22px_var(--evently-primary-soft)]">
            <ThemeToggle />
          </div>

          <NavLink
            to="/login"
            onClick={closeMobileNavigation}
            className={({ isActive }) =>
              `hidden rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60 sm:inline-flex ${
                isActive
                  ? "border-evently-primary bg-evently-primary text-white shadow-[0_0_24px_var(--evently-primary-soft)]"
                  : "border-evently-border bg-white/[0.02] text-evently-text hover:border-evently-primary/50 hover:bg-evently-primary-soft"
              }`
            }
          >
            Anmelden
          </NavLink>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="evently-mobile-navigation"
          className="border-t border-evently-border bg-evently-bg px-4 py-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobileNavigation}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              onClick={closeMobileNavigation}
              className="mt-2 rounded-xl bg-evently-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_24px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60 sm:hidden"
            >
              Anmelden
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
