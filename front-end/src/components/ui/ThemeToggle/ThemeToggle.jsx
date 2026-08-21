import { useEffect, useState } from "react";

const toggleClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-evently-border bg-white/[0.02] text-evently-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-evently-primary/40 hover:text-evently-text hover:shadow-[0_0_20px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDark);
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((value) => !value)}
      aria-pressed={isDark}
      aria-label={isDark ? "Zum hellen Theme wechseln" : "Zum dunklen Theme wechseln"}
      className={toggleClass}
      title={isDark ? "Dark Theme aktiv" : "Light Theme aktiv"}
    >
      {isDark ? (
        <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
