const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="group relative w-full overflow-hidden border-t border-evently-border bg-evently-surface/80 text-evently-text backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px animate-pulse bg-gradient-to-r from-transparent via-evently-primary to-transparent opacity-80 motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 animate-pulse rounded-full bg-evently-primary/10 blur-3xl [animation-duration:4s] motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 animate-pulse rounded-full bg-cyan-400/10 blur-3xl [animation-delay:1s] [animation-duration:5s] motion-reduce:animate-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
        <div className="flex items-center gap-3">
          <span
            className="relative flex h-11 w-11 items-center justify-center"
            aria-hidden="true"
          >
            <span className="absolute inset-0 animate-[spin_6s_linear_infinite] rounded-2xl border border-evently-primary/25 motion-reduce:animate-none">
              <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.85)]" />
              <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.85)]" />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-evently-primary via-fuchsia-500 to-cyan-400 font-evently-brand text-xl text-white shadow-[0_8px_24px_rgba(111,60,255,0.28)] transition duration-500 group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-[0_10px_34px_rgba(111,60,255,0.45)] motion-reduce:transform-none">
              E
            </span>
          </span>
          <div>
            <p className="font-evently-brand text-xl leading-none text-evently-text transition duration-300 group-hover:text-evently-primary">
              PlanB
            </p>
            <p className="mt-1 text-xs text-evently-muted">
              Mehr erleben. Weniger suchen.
            </p>
          </div>
        </div>

        <p className="text-xs leading-5 text-evently-muted sm:text-right">
          © {currentYear} PlanB · Niko, Muju &amp; Marlin
          <span className="block">Alle Rechte vorbehalten.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
