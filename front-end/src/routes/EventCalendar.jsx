import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventCard from "../components/EventCard";
import EmptyState from "../components/ui/EmptyState";
import { fetchEvents } from "../utils/events";

//To translate the calender-date string into js-date-format
const toDateKey = (value) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const EventCalender = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({ results: [] });

  useEffect(() => {
    fetchEvents(1, 1000)
      .then(setEvents)
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const selectedDate = toDateKey(date);
  const eventList = events.results;
  const eventsForSelectedDate = eventList.filter(
    (event) => toDateKey(event.date) === selectedDate,
  );

  return (
    <main className="relative isolate min-h-[calc(100vh-9rem)] overflow-hidden bg-evently-bg px-5 py-14 text-evently-text sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-evently-primary">
            PlanB Kalender
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Events nach Datum
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <section aria-live="polite">
            {eventsForSelectedDate.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {eventsForSelectedDate.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="Keine Events"
                message="Für dieses Datum sind noch keine Events eingetragen."
              />
            )}
          </section>

          <aside className="order-first rounded-[1.75rem] border border-evently-border bg-evently-surface p-5 shadow-[0_18px_55px_rgba(15,8,40,0.1)] lg:order-last">
            <p className="mb-4 text-sm font-bold text-evently-text">
              Datum auswählen
            </p>
            <DatePicker
              selected={date}
              onChange={(newDate) => setDate(newDate)}
              dateFormat="yyyy-MM-dd"
              inline
            />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default EventCalender;
