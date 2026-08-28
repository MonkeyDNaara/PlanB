import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/eventCalendar.css";
import { getCategoryTheme } from "../design/categoryTheme";
import useEventSelection, {
  MAX_SELECTED_EVENTS,
} from "../hooks/useEventSelection";
import { fetchEvents } from "../utils/events";

const FALLBACK_COLORS = ["#9b5cff", "#00a8ff", "#ff3b5c", "#ffd23f"];

const toDateKey = (value) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) return null;

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getEventDate = (event) => {
  const parsedDate = event?.date ? new Date(event.date) : null;
  return parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate : null;
};

const getEventColor = (event) => {
  const category = String(event?.category ?? event?.type ?? "").trim();

  if (category) return getCategoryTheme(category).color;

  const colorIndex = Math.abs(Number(event?.id) || 0) % FALLBACK_COLORS.length;
  return FALLBACK_COLORS[colorIndex];
};

const formatEventDate = (value) =>
  value.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatEventTime = (value) =>
  value.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

const weekDayNames = {
  Sunday: "So",
  Monday: "Mo",
  Tuesday: "Di",
  Wednesday: "Mi",
  Thursday: "Do",
  Friday: "Fr",
  Saturday: "Sa",
};

const EventCalender = ({ events }) => {
  const [date, setDate] = useState(new Date());
  const [eventList, setEventList] = useState(events?.results ?? []);
  const { selectedEventIds, selectedCount, toggleEventSelection } =
    useEventSelection();

  useEffect(() => {
    let requestIsActive = true;

    fetchEvents(1, 500)
      .then((response) => {
        if (requestIsActive) setEventList(response?.results ?? []);
      })
      .catch(() => {
        if (requestIsActive) setEventList(events?.results ?? []);
      });

    return () => {
      requestIsActive = false;
    };
  }, [events]);

  const validEvents = useMemo(
    () =>
      eventList
        .map((event) => ({ event, parsedDate: getEventDate(event) }))
        .filter(({ parsedDate }) => parsedDate)
        .sort((first, second) => first.parsedDate - second.parsedDate),
    [eventList],
  );

  const eventsByDate = useMemo(() => {
    const groupedEvents = new Map();

    validEvents.forEach(({ event, parsedDate }) => {
      const dateKey = toDateKey(parsedDate);
      const eventsForDay = groupedEvents.get(dateKey) ?? [];
      eventsForDay.push(event);
      groupedEvents.set(dateKey, eventsForDay);
    });

    return groupedEvents;
  }, [validEvents]);

  const selectedIdSet = useMemo(
    () => new Set(selectedEventIds.map(String)),
    [selectedEventIds],
  );
  const selectedEvents = validEvents.filter(({ event }) =>
    selectedIdSet.has(String(event.id)),
  );
  const selectedDateKey = toDateKey(date);
  const eventsForSelectedDate = eventsByDate.get(selectedDateKey) ?? [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextEvents = validEvents
    .filter(({ parsedDate }) => parsedDate >= today)
    .slice(0, 3)
    .map(({ event }) => event);
  const displayedEvents =
    eventsForSelectedDate.length > 0
      ? eventsForSelectedDate.slice(0, 3)
      : nextEvents;
  const listShowsSelectedDate = eventsForSelectedDate.length > 0;

  const renderCalendarDay = (dayOfMonth, calendarDate) => {
    const dayEvents = eventsByDate.get(toDateKey(calendarDate)) ?? [];
    const hasSelectedEvent = dayEvents.some((event) =>
      selectedIdSet.has(String(event.id)),
    );

    return (
      <span
        className={`evently-calendar-day ${
          hasSelectedEvent ? "evently-calendar-day--selected-event" : ""
        }`}
      >
        <span className="evently-calendar-day__number">{dayOfMonth}</span>
        {dayEvents.length > 0 && (
          <span className="evently-calendar-day__dots" aria-hidden="true">
            {dayEvents.slice(0, 3).map((event) => (
              <span
                className="evently-calendar-day__dot"
                style={{ backgroundColor: getEventColor(event) }}
                key={event.id}
              />
            ))}
          </span>
        )}
        {hasSelectedEvent && (
          <span
            className="evently-calendar-day__check"
            aria-label="Ausgewähltes Event an diesem Tag"
          >
            ✓
          </span>
        )}
      </span>
    );
  };

  return (
    <main className="relative isolate min-h-[calc(100vh-9rem)] px-4 py-10 text-evently-text sm:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-7 sm:mb-9">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-evently-primary">
            PlanB Kalender
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Deine Events im Blick
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-evently-muted sm:text-base">
            Farbige Punkte zeigen Eventtage. Gold markierte Tage enthalten
            deine persönliche Auswahl.
          </p>
        </header>

        {selectedCount > 0 && (
          <section
            className="evently-selection-panel mb-6 rounded-[1.5rem] border p-4 backdrop-blur-xl sm:p-5"
            aria-label="Deine ausgewählten Events"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="shrink-0">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.24em] text-amber-300">
                  Deine Auswahl
                </p>
                <p className="evently-selection-count mt-1 text-lg font-black">
                  {selectedCount}/{MAX_SELECTED_EVENTS} Events
                </p>
              </div>
              <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {selectedEvents.map(({ event, parsedDate }) => (
                  <NavLink
                    to={`/eventdetails/${event.id}`}
                    className="evently-selection-link rounded-xl border px-4 py-3 transition"
                    key={event.id}
                  >
                    <strong className="evently-selection-link-title block truncate text-sm">
                      ✓ {event.title || "Unbenanntes Event"}
                    </strong>
                    <span className="evently-selection-link-meta mt-1 block text-xs">
                      {formatEventDate(parsedDate)} · {formatEventTime(parsedDate)}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(21rem,0.65fr)] xl:items-start">
          <section className="evently-calendar-panel overflow-hidden rounded-[2rem] border p-4 backdrop-blur-2xl sm:p-6 lg:p-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="evently-calendar-eyebrow text-[0.65rem] font-black uppercase tracking-[0.24em]">
                  Monatsübersicht
                </p>
                <h2 className="evently-calendar-title mt-2 text-2xl font-black">
                  Datum auswählen
                </h2>
              </div>
              <p className="evently-calendar-meta text-sm">
                {validEvents.length} Events geladen
              </p>
            </div>

            <div className="evently-calendar-picker">
              <DatePicker
                selected={date}
                onChange={(newDate) => newDate && setDate(newDate)}
                formatWeekDay={(dayName) =>
                  weekDayNames[dayName] ?? dayName.slice(0, 2)
                }
                renderCustomHeader={({
                  date: headerDate,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div className="evently-calendar-header">
                    <button
                      type="button"
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      aria-label="Vorheriger Monat"
                    >
                      ←
                    </button>
                    <strong>
                      {headerDate.toLocaleDateString("de-DE", {
                        month: "long",
                        year: "numeric",
                      })}
                    </strong>
                    <button
                      type="button"
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      aria-label="Nächster Monat"
                    >
                      →
                    </button>
                  </div>
                )}
                renderDayContents={renderCalendarDay}
                inline
              />
            </div>
          </section>

          <aside
            className="evently-upcoming-panel rounded-[2rem] border p-5 backdrop-blur-2xl sm:p-6"
            aria-live="polite"
          >
            <p className="text-[0.65rem] font-black uppercase tracking-[0.24em] text-violet-300">
              {listShowsSelectedDate ? "An diesem Tag" : "Als Nächstes"}
            </p>
            <h2 className="evently-upcoming-title mt-2 text-2xl font-black">
              {listShowsSelectedDate
                ? formatEventDate(date)
                : "Die nächsten 3 Events"}
            </h2>
            {!listShowsSelectedDate && (
              <p className="evently-upcoming-copy mt-2 text-sm leading-6">
                Am gewählten Tag findet nichts statt. Hier sind die nächsten
                Termine.
              </p>
            )}

            <div className="mt-5 space-y-3">
              {displayedEvents.map((event) => {
                const parsedDate = getEventDate(event);
                const isSelected = selectedIdSet.has(String(event.id));
                const selectionLimitReached =
                  !isSelected && selectedCount >= MAX_SELECTED_EVENTS;
                const eventColor = getEventColor(event);

                return (
                  <article
                    className={`evently-upcoming-card rounded-2xl border p-4 transition ${
                      isSelected
                        ? "evently-upcoming-card--selected"
                        : "evently-upcoming-card--default"
                    }`}
                    style={{ "--calendar-event-color": eventColor }}
                    key={event.id}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 h-10 w-1 shrink-0 rounded-full bg-[var(--calendar-event-color)] shadow-[0_0_16px_var(--calendar-event-color)]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs font-bold text-[var(--calendar-event-color)]">
                            {formatEventDate(parsedDate)} · {formatEventTime(parsedDate)}
                          </p>
                          {isSelected && (
                            <span className="evently-upcoming-selected-badge rounded-full px-2 py-1 text-[0.6rem] font-black uppercase tracking-wider">
                              ✓ Ausgewählt
                            </span>
                          )}
                        </div>
                        <h3 className="evently-upcoming-card-title mt-2 text-lg font-black leading-tight">
                          {event.title || "Unbenanntes Event"}
                        </h3>
                        <p className="evently-upcoming-card-location mt-2 line-clamp-1 text-sm">
                          {event.location || "Ort wird bekannt gegeben"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                      <NavLink
                        to={`/eventdetails/${event.id}`}
                        className="evently-upcoming-view-button inline-flex min-h-10 items-center justify-center rounded-xl border px-3 text-sm font-bold transition"
                      >
                        Ansehen
                      </NavLink>
                      <button
                        type="button"
                        onClick={() => toggleEventSelection(String(event.id))}
                        disabled={selectionLimitReached}
                        aria-pressed={isSelected}
                        className={`evently-upcoming-select-button min-h-10 rounded-xl border px-3 text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-40 ${
                          isSelected
                            ? "evently-upcoming-select-button--selected"
                            : "evently-upcoming-select-button--default"
                        }`}
                      >
                        {isSelected ? "✓ Gewählt" : "+ Auswählen"}
                      </button>
                    </div>
                  </article>
                );
              })}

              {displayedEvents.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-8 text-center text-sm text-slate-400">
                  Es wurden keine kommenden Events gefunden.
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default EventCalender;
