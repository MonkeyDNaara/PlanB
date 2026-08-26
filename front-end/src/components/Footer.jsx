import AnimatedEventlyLogo from "./ui/AnimatedEventlyLogo";

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
          <AnimatedEventlyLogo />
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
