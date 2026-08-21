import { useState } from 'react';

export default function SoundToggle() {
  const [muted, setMuted] = useState(false);

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
      onClick={() => setMuted(!muted)}
      aria-pressed={!muted}
      aria-label={muted ? 'Sound einschalten' : 'Sound ausschalten'}
      style={btnStyle}
      title={muted ? 'Sound aus' : 'Sound an'}
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 9v6h4l3 3V6l-3 3H9z"></path>
          <path d="M18 9l3 3-3 3"></path>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 9v6h4l3 3V6l-3 3H9z"></path>
        </svg>
      )}
    </button>
  );
}
