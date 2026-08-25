import { Link } from "react-router";

function Hero({ events = [] }) {
  const featured = events[0] || {
    title: "Dein nächster Lieblingsmoment",
    date: null,
    location: "In deiner Nähe",
  };
  const parsedDate = featured.date ? new Date(featured.date) : null;
  const featuredDate =
    parsedDate && !Number.isNaN(parsedDate.getTime())
      ? parsedDate.toLocaleDateString("de-DE", {
          weekday: "short",
          day: "2-digit",
          month: "long",
        })
      : "Neue Events folgen";

  return (
    <section
      className="relative isolate mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2rem] border border-evently-border bg-evently-surface/85 shadow-[0_30px_100px_rgba(15,8,40,0.14)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]"
      id="top"
    >
      <div
        className="pointer-events-none absolute -left-28 -top-28 -z-10 h-80 w-80 rounded-full bg-evently-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        <p className="text-xs font-black uppercase tracking-[0.34em] text-evently-primary">
          Entdecke Evently
        </p>
        <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-evently-text sm:text-5xl lg:text-6xl">
          Mehr erleben.
          <span className="block bg-gradient-to-r from-evently-primary via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Weniger suchen.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-evently-text-secondary sm:text-lg">
          Finde besondere Events, spontane Lieblingsorte und Momente, die nicht
          nur im Kalender bleiben.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/eventlist"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-evently-primary px-6 py-3 text-sm font-bold text-white shadow-[0_14px_38px_rgba(111,60,255,0.32)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(111,60,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-bg"
          >
            Events entdecken
          </Link>
          <Link
            to="/createevent"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-evently-border bg-evently-surface px-6 py-3 text-sm font-bold text-evently-text transition duration-200 hover:-translate-y-0.5 hover:border-evently-primary/60 hover:text-evently-primary hover:shadow-[0_14px_38px_rgba(111,60,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary"
          >
            Event erstellen
          </Link>
        </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden border-t border-evently-border bg-evently-bg-secondary p-7 sm:min-h-[430px] sm:p-10 lg:border-l lg:border-t-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(124,92,255,0.25),transparent_32%),radial-gradient(circle_at_20%_86%,rgba(34,211,238,0.2),transparent_34%)]" aria-hidden="true" />
        <div className="absolute left-[12%] top-[14%] h-36 w-36 rotate-12 rounded-[2.5rem] border border-evently-primary/20 bg-evently-surface/35 shadow-[0_30px_80px_rgba(111,60,255,0.18)] backdrop-blur-xl sm:h-44 sm:w-44" aria-hidden="true" />
        <div className="absolute right-[10%] top-[8%] font-evently-brand text-8xl text-evently-primary/15 sm:text-9xl" aria-hidden="true">
          E
        </div>

        <div className="relative mt-28 rounded-[1.75rem] border border-evently-border bg-evently-surface/85 p-6 shadow-[0_25px_70px_rgba(15,8,40,0.14)] backdrop-blur-xl sm:mt-40 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-evently-primary-soft px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-evently-primary">
              Als Nächstes
            </span>
            <span className="text-xs font-semibold text-evently-muted">{featuredDate}</span>
          </div>
          <h2 className="mt-5 text-2xl font-black leading-tight text-evently-text sm:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-sm text-evently-text-secondary">
            ⌖ {featured.location || "Ort wird bekannt gegeben"}
          </p>
          {featured.id && (
            <Link
              to={`/eventdetails/${featured.id}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-evently-primary transition hover:gap-3"
            >
              Event ansehen <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
