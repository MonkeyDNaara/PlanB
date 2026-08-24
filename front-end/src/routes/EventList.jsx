import { useState } from "react";
import EventCard from "../components/EventCard";
import { fetchEvents } from "../utils/events";

const EventList = ({ events, setEvents }) => {
  const [isLoading, setIsLoading] = useState(false);
  const eventList = events.results;

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
    <div>
      <h2>Events</h2>
      <div className="px-8 pb-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {eventList.map((entry) => (
          <EventCard event={entry} key={entry.id} />
        ))}
      </div>
      {events.hasNextPage && (
        <button onClick={handleShowMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Show more"}
        </button>
      )}
    </div>
  );
};

export default EventList;
