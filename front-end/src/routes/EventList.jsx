import EventCard from "../components/EventCard";

const EventList = ({ events }) => {
  const eventList = events.results;
  return (
    <div>
      <h2>Events</h2>
      <div className="px-8 pb-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {eventList.map((entry) => (
          <EventCard event={entry} key={entry.id} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
