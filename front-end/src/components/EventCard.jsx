import { NavLink } from "react-router";

const CARD_ACCENTS = [
  { color: "#7c3aed", soft: "rgba(124, 58, 237, 0.2)" },
  { color: "#06b6d4", soft: "rgba(6, 182, 212, 0.2)" },
  { color: "#d946ef", soft: "rgba(217, 70, 239, 0.18)" },
  { color: "#f59e0b", soft: "rgba(245, 158, 11, 0.18)" },
];

const EventCard = ({ event }) => {
  const { id, title, date, location, description } = event;

  const parsedDate = date ? new Date(date) : null;
  const hasValidDate = parsedDate && !Number.isNaN(parsedDate.getTime());
  const formattedDate = hasValidDate
    ? parsedDate.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Termin folgt";
  const formattedTime =
    (hasValidDate &&
      parsedDate.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      })) ||
    "Uhrzeit folgt";

  const accentIndex =
    Math.abs(Number(id) || String(title ?? "Evently").length) % CARD_ACCENTS.length;
  const accent = CARD_ACCENTS[accentIndex];

  return (
    <NavLink
      to={`/eventdetails/${id}`}
      className="group block h-full rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-4 focus-visible:ring-offset-evently-bg"
      style={{
        "--event-accent": accent.color,
        "--event-accent-soft": accent.soft,
      }}
      aria-label={`${title || "Event"} ansehen`}
    >
      <article className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[1.75rem] border border-evently-border bg-evently-surface shadow-[0_18px_55px_rgba(15,8,40,0.1)] transition duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--event-accent)] group-hover:shadow-[0_25px_70px_var(--event-accent-soft)]">
        <div className="relative h-44 overflow-hidden bg-evently-bg-secondary" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,var(--event-accent-soft),transparent_32%),radial-gradient(circle_at_82%_78%,rgba(34,211,238,0.16),transparent_30%)]" />
          <div className="absolute -right-8 -top-12 h-40 w-40 rotate-12 rounded-[2.5rem] border border-[var(--event-accent)]/20 bg-evently-surface/50 shadow-[0_0_55px_var(--event-accent-soft)] backdrop-blur-xl transition duration-500 group-hover:rotate-[22deg] group-hover:scale-105" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="inline-flex rounded-full border border-evently-border bg-evently-surface/85 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--event-accent)] shadow-sm backdrop-blur-xl">
              Evently Pick
            </span>
            <span className="font-evently-brand text-5xl text-[var(--event-accent)] opacity-80 drop-shadow-[0_0_18px_var(--event-accent-soft)]">
              E
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--event-accent)]">
            {formattedDate}
          </p>
          <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-evently-text">
            {title || "Unbenanntes Event"}
          </h2>

          <div className="mt-4 space-y-2 text-sm text-evently-text-secondary">
            <p className="flex items-center gap-2">
              <span aria-hidden="true">◷</span>
              {formattedTime}
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden="true">⌖</span>
              {location || "Ort wird bekannt gegeben"}
            </p>
          </div>

          {description && (
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-evently-muted">
              {description}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between border-t border-evently-border pt-5 text-sm font-bold text-evently-text">
            <span>Event ansehen</span>
            <span className="text-xl text-[var(--event-accent)] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </article>
    </NavLink>
  );
};

export default EventCard;
