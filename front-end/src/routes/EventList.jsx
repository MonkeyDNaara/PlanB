import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import EmptyState from "../components/ui/EmptyState";
import { fetchEvents } from "../utils/events";

const EventList = () => {
  const [events, setEvents] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const eventList = events.results;

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const handleShowMore = async () => {
    setIsLoading(true);
    const nextPage = await fetchEvents(events.currentPage + 1);
    setEvents((previous) => ({
      ...nextPage,
      results: [...previous.results, ...nextPage.results],
    }));
    setIsLoading(false);
  };

  return (
    <main className="relative isolate min-h-[calc(100vh-9rem)] overflow-hidden bg-evently-bg px-5 py-14 text-evently-text sm:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute -left-28 top-16 -z-10 h-80 w-80 rounded-full bg-evently-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-20 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-evently-primary">
              PlanB entdecken
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-evently-text sm:text-5xl">
              Events, die zu dir passen.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-evently-text-secondary">
              Von spontanen Nächten bis zu besonderen Bühnen: Finde dein
              nächstes Erlebnis und mach mehr aus deinem Kalender.
            </p>
          </div>
          {eventList.length > 0 && (
            <p
              className="text-sm font-semibold text-evently-muted"
              aria-live="polite"
            >
              {eventList.length} {eventList.length === 1 ? "Event" : "Events"}{" "}
              geladen
            </p>
          )}
        </header>

        {eventList.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {eventList.map((entry) => (
              <EventCard event={entry} key={entry.id} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Gerade ist noch kein Event im Rampenlicht."
            message="Sobald neue Erlebnisse verfügbar sind, findest du sie genau hier."
          />
        )}

        {events.hasNextPage && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleShowMore}
              disabled={isLoading}
              aria-busy={isLoading}
              className="inline-flex min-h-12 min-w-44 items-center justify-center rounded-xl bg-evently-primary px-7 py-3 text-sm font-bold text-white shadow-[0_14px_38px_rgba(111,60,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(111,60,255,0.44)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-bg disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0"
            >
              {isLoading ? "Events werden geladen …" : "Mehr Events anzeigen"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default EventList;
