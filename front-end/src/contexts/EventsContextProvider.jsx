import { useState } from "react";
import { EventsContext } from "./EventsContext";

const EventsContextProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState({ results: [] });
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  return (
    <EventsContext
      value={{
        allEvents,
        setAllEvents,
        upcomingEvents,
        setUpcomingEvents,
      }}
    >
      {children}
    </EventsContext>
  );
};

export default EventsContextProvider;
