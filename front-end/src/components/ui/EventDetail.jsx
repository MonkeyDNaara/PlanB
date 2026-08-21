export default function EventDetail({ event }) {
  const currentEvent = event || {
    title: "Neon Nights — Berlin",
    category: { name: "Music", color: "#7C4DFF" },
    date: "Sat, Aug 21, 2026",
    time: "22:00 - 04:00",
    location: "Kiez Klub, Berlin",
    shortDescription: "A curated night of synth-driven beats, immersive lights and forward-thinking DJs.",
    longDescription:
      "Neon Nights invites you to an atmospheric journey through electronic music and art. Expect a carefully curated line-up of local and international DJs, layered visual installations and an immersive lighting design that brings the city’s nocturnal spirit to life.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    ctaLabel: "Jetzt teilnehmen",
  };

  const metaItems = [
    ["Datum", currentEvent.date],
    ["Uhrzeit", currentEvent.time],
    ["Ort", currentEvent.location],
  ];

  return (
    <section
      className="text-evently-text"
      aria-labelledby="event-title"
      style={{ "--category-color": currentEvent.category.color }}
    >
      <div
        className="relative flex min-h-[360px] items-end overflow-hidden rounded-b-[18px] bg-cover bg-center p-4 sm:min-h-[420px] sm:p-7"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.58)), url(${currentEvent.image})`,
        }}
        role="img"
        aria-label={currentEvent.title}
      >
        <div className="pointer-events-none absolute -inset-x-[10%] -top-[30%] h-4/5 translate-y-[-8%] bg-[radial-gradient(circle_at_25%_30%,var(--category-color)_0%,transparent_28%),radial-gradient(circle_at_80%_70%,rgba(80,120,255,0.18)_0%,transparent_40%)] opacity-35 blur-[64px]" aria-hidden="true" />

        <div className="relative w-full rounded-xl border border-white/[0.04] bg-gradient-to-b from-black/20 to-black/40 p-4 shadow-[0_6px_28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div className="max-w-full sm:max-w-[70%]">
              <h1 id="event-title" className="text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl">{currentEvent.title}</h1>
              <span className="mt-2 inline-flex rounded-full bg-[var(--category-color)] px-3 py-1.5 text-xs font-semibold text-white">{currentEvent.category.name}</span>
            </div>
            <button className="hidden rounded-xl bg-gradient-to-b from-[#9b85ff] to-[#6f3cff] px-4 py-2.5 font-bold text-white shadow-[0_10px_40px_rgba(25,10,60,0.55),0_0_32px_color-mix(in_srgb,var(--category-color)_18%,transparent)] transition-transform hover:-translate-y-0.5 sm:block" aria-label={currentEvent.ctaLabel}>{currentEvent.ctaLabel}</button>
          </div>

          <dl className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            {metaItems.map(([label, value], index) => (
              <div key={label} className={`relative min-w-[110px] ${index ? "border-l border-white/[0.06] pl-4" : ""}`}>
                <dt className="text-xs text-slate-300">{label}</dt>
                <dd className="text-sm font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-blue-100 sm:text-base">{currentEvent.shortDescription}</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border-t border-[color-mix(in_srgb,var(--category-color)_20%,transparent)] bg-gradient-to-b from-white/[0.03] to-black/20 p-5 shadow-[0_8px_40px_rgba(2,6,23,0.6),inset_0_1px_0_rgba(255,255,255,0.02)]">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-lg font-bold text-evently-text before:mb-3 before:block before:h-1 before:w-12 before:rounded-full before:bg-gradient-to-r before:from-[var(--category-color)] before:to-indigo-400">Über das Event</h2>
          <p className="mt-3 max-w-[70ch] leading-7 text-evently-text-secondary">{currentEvent.longDescription}</p>
          <button className="mt-5 w-full rounded-xl bg-gradient-to-b from-[#9b85ff] to-[#6f3cff] px-4 py-3 font-bold text-white shadow-[0_10px_40px_rgba(25,10,60,0.55)] sm:hidden" aria-label={currentEvent.ctaLabel}>{currentEvent.ctaLabel}</button>
        </div>
      </div>
    </section>
  );
}
