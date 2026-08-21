import { useState } from "react";

const toggleClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-evently-border bg-white/[0.02] text-evently-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-evently-primary/40 hover:text-evently-text hover:shadow-[0_0_20px_var(--evently-primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60";

export default function SoundToggle() {
  const [muted, setMuted] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setMuted((value) => !value)}
      aria-pressed={muted}
      aria-label={muted ? "Sound einschalten" : "Sound ausschalten"}
      className={toggleClass}
      title={muted ? "Sound aus" : "Sound an"}
    >
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 9v6h4l3 3V6l-3 3H9z" />
        {muted ? <path d="m18 9 3 3-3 3" /> : <path d="M19 9a4 4 0 0 1 0 6" />}
      </svg>
    </button>
  );
}
