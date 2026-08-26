import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { deleteEvent, fetchEventById } from "../utils/events";
import { getCurrentUser, getToken } from "../utils/auth";

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchEventById(eventId)
      .then(setEvent)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [eventId]);

  const handleDelete = async () => {
    if (!window.confirm("Dieses Event wirklich löschen?")) return;

    setIsDeleting(true);
    setDeleteError(null);
    try {
      await deleteEvent(eventId, getToken());
      navigate("/eventlist");
    } catch (submitError) {
      setDeleteError(submitError);
      setIsDeleting(false);
    }
  };

  if (isLoading) return <div>Laden...</div>;
  if (error || !event) return <div>Event nicht gefunden.</div>;

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
        <button onClick={() => navigate(-1)}>← Zurück</button>
        {isOwner && (
          <div className="flex items-center gap-4">
            <Link
              to={`/eventdetails/${eventId}/edit`}
              className="text-sm font-bold text-evently-primary"
            >
              Event bearbeiten
            </Link>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="text-sm font-bold text-red-600 disabled:opacity-60"
            >
              {isDeleting ? "Löschen…" : "Event löschen"}
            </button>
          </div>
        )}
      </div>
      {deleteError && (
        <p
          className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-600"
          role="alert"
        >
          {deleteError.message ?? "Das Event konnte nicht gelöscht werden."}
        </p>
      )}
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
