import { Route, Routes } from "react-router-dom";
import { use, useEffect } from "react";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import UpcomingEvents from "./routes/UpcomingEvents";
import EventList from "./routes/EventList";
import EventCalender from "./routes/EventCalendar";
import CreateEvent from "./routes/CreateEvent";
import MainLayout from "./layouts/mainLayout";
import NotFound from "./routes/NotFound";
import EventDetails from "./routes/EventDetails";
import { AllEventsContext } from "./contexts/AllEventsContext";
import { fetchEvents } from "./utils/events";

function App() {
  const { allEvents, setAllEvents } = use(AllEventsContext);
  useEffect(() => {
    fetchEvents().then(setAllEvents);
  }, [setAllEvents]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<UpcomingEvents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/eventlist" element={<EventList events={allEvents} />} />
        <Route path="/eventcalendar" element={<EventCalender />} />
        <Route path="/eventdetails/:eventId" element={<EventDetails />} />
        <Route path="/createevent" element={<CreateEvent />} />
        {/* ^ protected Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
