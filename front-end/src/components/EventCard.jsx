import { NavLink } from "react-router";
import useEventSelection, {
  MAX_SELECTED_EVENTS,
} from "../hooks/useEventSelection";
import getEventArtwork from "../utils/eventArtwork";

const CARD_ACCENTS = [
  { color: "#7c3aed", soft: "rgba(124, 58, 237, 0.2)" },
  { color: "#06b6d4", soft: "rgba(6, 182, 212, 0.2)" },
  { color: "#d946ef", soft: "rgba(217, 70, 239, 0.18)" },
  { color: "#f59e0b", soft: "rgba(245, 158, 11, 0.18)" },
];

const EventCard = ({ event }) => {
  const { id, title, date, location, description } = event;
  const { selectedEventIds, selectedCount, toggleEventSelection } =
    useEventSelection();
  const eventId = String(id);
  const isSelected = selectedEventIds.includes(eventId);
  const selectionLimitReached =
    !isSelected && selectedCount >= MAX_SELECTED_EVENTS;
  const artwork = getEventArtwork(event);

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
    Math.abs(Number(id) || String(title ?? "PlanB").length) % CARD_ACCENTS.length;
  const accent = CARD_ACCENTS[accentIndex];

  return (
    <article
      className={`group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-[1.75rem] border bg-evently-surface/92 shadow-[0_18px_55px_rgba(15,8,40,0.1)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${
        isSelected
          ? "border-amber-300/80 shadow-[0_0_0_1px_rgba(250,204,21,0.18),0_25px_70px_rgba(245,158,11,0.2)]"
          : "border-evently-border hover:border-[var(--event-accent)] hover:shadow-[0_25px_70px_var(--event-accent-soft)]"
      }`}
      style={{
        "--event-accent": accent.color,
        "--event-accent-soft": accent.soft,
      }}
    >
      <NavLink
        to={`/eventdetails/${id}`}
        className="flex flex-1 cursor-pointer flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-evently-primary"
        aria-label={`${title || "Event"} ansehen`}
      >
        <div className="relative h-52 overflow-hidden bg-evently-bg-secondary">
          <img
            src={artwork}
            alt={`${title || "Event"} – PlanB Veranstaltungsbild`}
            className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070611]/95 via-[#070611]/20 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,var(--event-accent-soft),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(34,211,238,0.14),transparent_35%)] mix-blend-screen" aria-hidden="true" />
          <div className="event-card-light-sweep absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 blur-sm group-hover:opacity-100" aria-hidden="true" />

          {isSelected && (
            <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-200/80 bg-amber-400/90 text-lg font-black text-amber-950 shadow-[0_0_28px_rgba(250,204,21,0.75)]" aria-label="Event ausgewählt">
              ✓
            </span>
          )}

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="inline-flex rounded-full border border-white/15 bg-[#080714]/75 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--event-accent)] shadow-sm backdrop-blur-xl">
              PlanB Pick
            </span>
            <span className="font-evently-brand text-5xl text-[var(--event-accent)] opacity-90 drop-shadow-[0_0_18px_var(--event-accent-soft)]" aria-hidden="true">
              P
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 pt-6">
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

        </div>
      </NavLink>

      <div className="m-6 mt-5 grid grid-cols-[1fr_auto] items-center gap-3 border-t border-evently-border pt-5">
        <NavLink
          to={`/eventdetails/${id}`}
          className="inline-flex min-h-11 items-center font-bold text-evently-text transition hover:text-[var(--event-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary"
        >
          Event ansehen <span className="ml-2 text-xl" aria-hidden="true">→</span>
        </NavLink>
        <button
          type="button"
          onClick={() => toggleEventSelection(eventId)}
          disabled={selectionLimitReached}
          aria-pressed={isSelected}
          title={
            selectionLimitReached
              ? "Du hast bereits drei Events ausgewählt"
              : undefined
          }
          className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-4 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-evently-surface disabled:cursor-not-allowed disabled:opacity-45 ${
            isSelected
              ? "border-amber-300/80 bg-gradient-to-r from-amber-500/25 to-yellow-300/20 text-amber-300 shadow-[0_0_22px_rgba(245,158,11,0.3)] focus-visible:ring-amber-300"
              : "border-evently-border bg-evently-bg-secondary text-evently-text-secondary hover:border-evently-primary hover:bg-evently-primary-soft hover:text-evently-text focus-visible:ring-evently-primary"
          }`}
        >
          <span aria-hidden="true">{isSelected ? "✓" : "+"}</span>
          <span className="ml-2">
            {isSelected
              ? `Ausgewählt · ${selectedCount}/${MAX_SELECTED_EVENTS}`
              : "Auswählen"}
          </span>
        </button>
      </div>
    </article>
  );
};

export default EventCard;
