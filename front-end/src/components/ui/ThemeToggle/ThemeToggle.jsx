import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // apply dark theme class to html for global styles
    if (isDark) document.documentElement.classList.add('theme-dark');
    else document.documentElement.classList.remove('theme-dark');
  }, [isDark]);

  const btnStyle = {
    background: 'linear-gradient(90deg, rgba(255,255,255,0.02), transparent)',
    border: '1px solid rgba(255,255,255,0.06)',
    padding: '6px 8px',
    borderRadius: 8,
    color: 'inherit',
    cursor: 'pointer',
    transition: 'transform 140ms ease, box-shadow 140ms ease',
  };

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-pressed={isDark}
      aria-label={isDark ? 'Wechsel zu hellem Theme' : 'Wechsel zu dunklem Theme'}
      style={btnStyle}
      title={isDark ? 'Dark Theme aktiv' : 'Light Theme aktiv'}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M4.93 4.93l1.41 1.41"></path>
          <path d="M17.66 17.66l1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="M4.93 19.07l1.41-1.41"></path>
          <path d="M17.66 6.34l1.41-1.41"></path>
        </svg>
      )}
    </button>
  );
}
