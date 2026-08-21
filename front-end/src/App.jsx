import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import UpcomingEvents from "./routes/UpcomingEvents";
import EventList from "./routes/EventList";
import EventCalender from "./routes/EventCalendar";
import CreateEvent from "./routes/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upcomingevents" element={<UpcomingEvents />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/eventcalendar" element={<EventCalender />} />
        <Route path="/createevent" element={<CreateEvent />} />
        {/* ^ protected Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
