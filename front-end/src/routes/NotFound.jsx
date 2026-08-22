import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-9rem)] items-center justify-center overflow-hidden bg-evently-bg px-5 py-16 text-evently-text sm:px-8">
      <div
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-evently-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />

      <section className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-evently-border bg-evently-surface/80 shadow-[0_30px_100px_rgba(15,8,40,0.2)] backdrop-blur-xl">
        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-b border-evently-border bg-evently-bg-secondary p-8 md:min-h-[30rem] md:border-b-0 md:border-r">
            <div
              className="absolute h-52 w-52 rounded-full border border-evently-primary/20 shadow-[0_0_70px_rgba(124,92,255,0.18)] sm:h-64 sm:w-64"
              aria-hidden="true"
            />
            <div
              className="absolute h-36 w-36 rotate-45 rounded-[2rem] border border-cyan-400/20 bg-evently-primary-soft sm:h-44 sm:w-44"
              aria-hidden="true"
            />
            <span className="relative bg-gradient-to-br from-evently-primary via-fuchsia-400 to-cyan-400 bg-clip-text text-8xl font-black tracking-[-0.08em] text-transparent drop-shadow-[0_0_30px_rgba(124,92,255,0.35)] sm:text-9xl">
              404
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-evently-primary">
              Seite nicht gefunden
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-evently-text sm:text-4xl lg:text-5xl">
              Diese Bühne bleibt heute leer.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-evently-text-secondary">
              Die gesuchte Seite ist verschwunden, wurde verschoben oder hat nie
              existiert. Deine nächsten Erlebnisse warten aber schon auf dich.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-evently-primary px-6 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(111,60,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(111,60,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-bg"
              >
                Zur Startseite
              </Link>
              <Link
                to="/eventlist"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-evently-border bg-evently-surface px-6 py-3 text-sm font-bold text-evently-text transition duration-200 hover:-translate-y-0.5 hover:border-evently-primary/60 hover:text-evently-primary hover:shadow-[0_12px_35px_rgba(111,60,255,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-bg"
              >
                Events entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
