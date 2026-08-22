function LoadingScreen({ text = "Erlebnisse werden vorbereitet..." }) {
  return (
    <section
      className="relative isolate flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-evently-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex h-28 w-28 items-center justify-center" aria-hidden="true">
        <div className="absolute inset-0 rounded-[2rem] border border-evently-primary/20 bg-evently-surface/50 shadow-[0_20px_70px_rgba(111,60,255,0.18)] backdrop-blur-xl" />
        <div className="absolute inset-3 animate-[spin_1.8s_linear_infinite] rounded-[1.6rem] border-2 border-transparent border-r-evently-primary border-t-evently-primary/80 shadow-[0_0_35px_rgba(124,92,255,0.35)]" />
        <div className="absolute inset-6 animate-pulse rounded-2xl bg-evently-primary-soft" />
        <span className="relative font-evently-brand text-4xl text-evently-primary drop-shadow-[0_0_14px_rgba(124,92,255,0.7)]">
          E
        </span>
      </div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-evently-muted sm:text-sm">
        {text}
      </p>

      <div className="mt-4 flex items-center gap-2" aria-hidden="true">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-evently-primary shadow-[0_0_10px_rgba(124,92,255,0.8)]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] [animation-delay:180ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.8)] [animation-delay:360ms]" />
      </div>

      <p className="mt-6 max-w-sm text-sm leading-6 text-evently-text-secondary">
        Gleich öffnet sich deine nächste besondere Erfahrung.
      </p>
    </section>
  );
}

export default LoadingScreen;