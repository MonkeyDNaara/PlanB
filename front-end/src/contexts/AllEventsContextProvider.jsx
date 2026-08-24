import { useState } from "react";
import { AllEventsContext } from "./AllEventsContext";

const AllEventsContextProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState({ results: [] });

  return (
    <AllEventsContext
      value={{
        allEvents,
        setAllEvents,
      }}
    >
      {children}
    </AllEventsContext>
  );
};

export default AllEventsContextProvider;
