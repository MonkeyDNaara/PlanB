import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { fetchEventById } from "../utils/events";
import { getCurrentUser } from "../utils/auth";

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchEventById(eventId)
      .then(setEvent)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [eventId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !event) return <div>Event not found.</div>;

  const { title, date, location, description, organizerId } = event;
  const currentUser = getCurrentUser();
  const isOwner = currentUser && currentUser.id === organizerId;
  const parsedDate = date ? new Date(date) : null;
  const hasValidDate = parsedDate && !Number.isNaN(parsedDate.getTime());
  const formattedDate = hasValidDate
    ? parsedDate.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Termin folgt";
  const formattedTime = hasValidDate
    ? parsedDate.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Uhrzeit folgt";

  return (
    <div className="px-8 pb-8">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate(-1)}>← Back</button>
        {isOwner && (
          <Link
            to={`/eventdetails/${eventId}/edit`}
            className="text-sm font-bold text-evently-primary"
          >
            Edit event
          </Link>
        )}
      </div>
      <h2 className="text-2xl font-black text-evently-text">{title}</h2>
      <p className="mt-2 text-sm text-evently-text-secondary">
        {formattedDate} · {formattedTime}
      </p>
      <p className="mt-1 text-sm text-evently-text-secondary">{location}</p>
      {description && (
        <p className="mt-4 text-sm leading-6 text-evently-muted">
          {description}
        </p>
      )}
    </div>
  );
};

export default EventDetails;
