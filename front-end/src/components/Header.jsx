import { useState } from "react";
import { NavLink } from "react-router";

import ThemeToggle from "./ThemeToggle";

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

const Header = () => {
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
            <span
              className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-400 shadow-[0_0_24px_var(--evently-primary-soft)] transition duration-300 group-hover:scale-105"
              aria-hidden="true"
            />
            <span className="truncate font-evently-brand text-2xl font-normal tracking-[0.03em]">
              Evently
            </span>
            <span className="relative ml-2 hidden overflow-hidden rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-300/[0.06] via-yellow-200/[0.12] to-amber-400/[0.06] px-4 py-1.5 text-base font-bold tracking-[0.08em] text-[#d6b574] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_14px_rgba(214,181,116,0.08)] transition-all duration-500 before:absolute before:inset-y-0 before:-left-8 before:w-5 before:-skew-x-12 before:bg-white/60 before:blur-sm before:transition-all before:duration-700 hover:-translate-y-0.5 hover:border-evently-primary/70 hover:bg-evently-primary-soft hover:text-[#a78bfa] hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.95)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_24px_var(--evently-primary-soft)] hover:before:left-[115%] sm:inline-flex sm:font-[Georgia,serif] sm:italic">
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
