import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import EmptyState from "../components/ui/EmptyState";
import Hero from "../components/ui/Hero";
import { fetchUpcomingEvents } from "../utils/events";

const UpcomingEvents = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    fetchUpcomingEvents().then(setEventList);
  }, []);

  return (
    <main className="relative isolate min-h-[calc(100vh-9rem)] overflow-hidden bg-evently-bg px-5 py-8 text-evently-text sm:px-8 sm:py-12 lg:py-16">
      <div
        className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-evently-primary/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl">
        <Hero events={eventList} />

        <section className="mt-16" aria-labelledby="upcoming-events-title">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-evently-primary">
                Demnächst
              </p>
              <h2
                id="upcoming-events-title"
                className="mt-3 text-3xl font-black tracking-[-0.03em] text-evently-text sm:text-4xl"
              >
                Deine nächsten Erlebnisse
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-evently-text-secondary">
              Ausgewählte Veranstaltungen, besondere Orte und gute Gründe,
              heute noch etwas vorzuhaben.
            </p>
          </div>

          {eventList.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {eventList.map((entry) => (
                <EventCard event={entry} key={entry.id} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Die nächste Bühne wird gerade vorbereitet."
              message="Schau später wieder vorbei – neue Evently-Erlebnisse sind bereits unterwegs."
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default UpcomingEvents;
