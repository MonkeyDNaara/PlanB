import { Route, Routes } from "react-router";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import UpcomingEvents from "./routes/UpcomingEvents";
import EventList from "./routes/EventList";
import EventCalender from "./routes/EventCalendar";
import CreateEvent from "./routes/CreateEvent";
import MainLayout from "./layouts/mainLayout";
import NotFound from "./routes/NotFound";
import EventDetails from "./routes/EventDetails";
import EditEvent from "./routes/EditEvent";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<UpcomingEvents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/eventcalendar" element={<EventCalender />} />
        <Route path="/eventdetails/:eventId" element={<EventDetails />} />
        <Route
          path="/eventdetails/:eventId/edit"
          element={
            <PrivateRoute>
              <EditEvent />
            </PrivateRoute>
          }
        />
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
