import { Route, Routes } from "react-router";
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
import { EventsContext } from "./contexts/EventsContext";
import { fetchEvents, fetchUpcomingEvents } from "./utils/events";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  const { allEvents, setAllEvents } = use(EventsContext);
  useEffect(() => {
    fetchEvents().then(setAllEvents);
  }, [setAllEvents]);
  const { upcomingEvents, setUpcomingEvents } = use(EventsContext);
  useEffect(() => {
    fetchUpcomingEvents().then(setUpcomingEvents);
  }, [setUpcomingEvents]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<UpcomingEvents events={upcomingEvents} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/eventlist"
          element={<EventList events={allEvents} setEvents={setAllEvents} />}
        />
        <Route path="/eventcalendar" element={<EventCalender />} />
        <Route path="/eventdetails/:eventId" element={<EventDetails />} />
        <Route
          path="/createevent"
          element={
            <PrivateRoute>
              <CreateEvent />
            </PrivateRoute>
          }
        />
        {/* ^ protected Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
