function EmptyState({
  title = "Hier gibt es gerade noch nichts zu sehen.",
  message = "Neue Erlebnisse sind bestimmt schon unterwegs. Schau einfach später noch einmal vorbei.",
}) {
  return (
    <section
      className="relative isolate flex min-h-[320px] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-evently-border bg-evently-surface/80 px-6 py-14 text-center shadow-[0_24px_80px_rgba(15,8,40,0.12)] backdrop-blur-xl sm:min-h-[380px] sm:px-10"
      role="status"
      aria-live="polite"
    >
      <div
        className="pointer-events-none absolute -left-16 -top-16 -z-10 h-48 w-48 rounded-full bg-evently-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-16 -z-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative mb-8 flex h-24 w-24 items-center justify-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rotate-6 rounded-[1.75rem] border border-evently-primary/20 bg-evently-primary-soft shadow-[0_18px_55px_rgba(111,60,255,0.2)]" />
        <div className="absolute inset-3 -rotate-6 rounded-2xl border border-cyan-400/20 bg-evently-surface/70 backdrop-blur-md" />
        <span className="relative bg-gradient-to-br from-evently-primary via-fuchsia-400 to-cyan-400 bg-clip-text text-4xl text-transparent drop-shadow-[0_0_16px_rgba(124,92,255,0.45)]">
          ✦
        </span>
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-evently-primary">
        Noch ganz ruhig hier
      </p>

      <h2 className="mt-4 max-w-xl text-2xl font-black tracking-tight text-evently-text sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 max-w-lg text-sm leading-6 text-evently-text-secondary sm:text-base sm:leading-7">
        {message}
      </p>
    </section>
  );
}

export default EmptyState;