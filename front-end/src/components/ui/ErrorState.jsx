function ErrorState({
  title = "Das hat leider nicht funktioniert.",
  message = "Die gewünschten Informationen konnten gerade nicht geladen werden. Bitte versuche es noch einmal.",
  onRetry,
  retryLabel = "Erneut versuchen",
}) {
  return (
    <section
      className="relative isolate flex min-h-[320px] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-red-500/20 bg-evently-surface/80 px-6 py-14 text-center shadow-[0_24px_80px_rgba(50,5,18,0.14)] backdrop-blur-xl sm:min-h-[380px] sm:px-10"
      role="alert"
      aria-live="assertive"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative mb-8 flex h-24 w-24 items-center justify-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-[1.75rem] border border-red-500/25 bg-red-500/10 shadow-[0_18px_55px_rgba(239,68,68,0.2)]" />
        <div className="absolute inset-3 rotate-45 rounded-xl border border-fuchsia-400/20 bg-evently-surface/70 backdrop-blur-md" />
        <span className="relative text-4xl font-black text-red-500 drop-shadow-[0_0_16px_rgba(239,68,68,0.5)]">
          !
        </span>
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
        Kurze Unterbrechung
      </p>

      <h2 className="mt-4 max-w-xl text-2xl font-black tracking-tight text-evently-text sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-lg text-sm leading-6 text-evently-text-secondary sm:text-base sm:leading-7">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl border border-red-500/40 bg-red-500/10 px-6 py-3 text-sm font-bold text-red-500 transition duration-200 hover:-translate-y-0.5 hover:border-red-500/70 hover:bg-red-500/15 hover:shadow-[0_14px_38px_rgba(239,68,68,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-evently-bg active:translate-y-0 active:bg-red-500/20"
        >
          {retryLabel}
        </button>
      )}
    </section>
  );
}

export default ErrorState;