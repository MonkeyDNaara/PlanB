import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SoundToggle from '../SoundToggle/SoundToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hamburgerFocused, setHamburgerFocused] = useState(false);

  const navStyle = {
    background: 'linear-gradient(180deg, #071018 0%, #0b1220 100%)',
    color: '#e6eef8',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    boxShadow: '0 1px 0 rgba(255,255,255,0.02) inset',
  };

  const containerStyle = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const hamburgerBase = {
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    fontSize: 20,
    cursor: 'pointer',
    padding: 6,
    borderRadius: 8,
    transition: 'background 120ms ease, box-shadow 120ms ease, transform 120ms ease',
  };

  const hamburgerHover = hamburgerFocused
    ? { background: 'rgba(255,255,255,0.03)', boxShadow: '0 0 0 3px rgba(124,58,237,0.12)' }
    : { background: 'transparent' };

  return (
    <nav style={navStyle} aria-label="Hauptnavigation">
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            onFocus={() => setHamburgerFocused(true)}
            onBlur={() => setHamburgerFocused(false)}
            style={{ ...hamburgerBase, ...hamburgerHover }}
          >
            {/* simple hamburger */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }} aria-hidden />
            <span style={{ fontWeight: 700, letterSpacing: 0.2 }}>EVENTLY</span>
            <span style={{ opacity: 0.8, fontSize: 12, marginLeft: 6 }}>Dark</span>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ul style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <a
                href="#events"
                style={{ color: 'inherit', textDecoration: 'none', padding: '0.4rem 0.6rem', borderRadius: 6, transition: 'background 120ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#calendar"
                style={{ color: 'inherit', textDecoration: 'none', padding: '0.4rem 0.6rem', borderRadius: 6, transition: 'background 120ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{ color: 'inherit', textDecoration: 'none', padding: '0.4rem 0.6rem', borderRadius: 6, transition: 'background 120ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                About
              </a>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ThemeToggle />
            <SoundToggle />
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ padding: '0.5rem 1rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <a href="#events" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem', borderRadius: 6, display: 'block' }}>
                Events
              </a>
            </li>
            <li>
              <a href="#calendar" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem', borderRadius: 6, display: 'block' }}>
                Calendar
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem', borderRadius: 6, display: 'block' }}>
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
