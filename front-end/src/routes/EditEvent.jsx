import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchEventById, updateEvent } from "../utils/events";
import { getToken } from "../utils/auth";

const EditEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEventById(eventId).then((event) => {
      setEventData({
        title: event.title ?? "",
        description: event.description ?? "",
        date: event.date ? event.date.slice(0, 16) : "",
        location: event.location ?? "",
        latitude: event.latitude ?? "",
        longitude: event.longitude ?? "",
      });
    });
  }, [eventId]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEventData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const payload = {
      title: eventData.title.trim(),
      description: eventData.description.trim(),
      date: new Date(eventData.date).toISOString(),
      location: eventData.location.trim(),
      ...(eventData.latitude && { latitude: Number(eventData.latitude) }),
      ...(eventData.longitude && { longitude: Number(eventData.longitude) }),
    };

    try {
      await updateEvent(eventId, payload, getToken());
      navigate(`/eventdetails/${eventId}`);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Das Event konnte nicht aktualisiert werden.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!eventData) return <div className="px-8 pb-8">Loading...</div>;

  return (
    <main className="px-8 pb-8">
      <h2 className="text-2xl font-black text-evently-text">
        Event bearbeiten
      </h2>

      <form className="mt-6 max-w-xl space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            className="text-sm font-bold text-evently-text"
            htmlFor="event-title"
          >
            Eventname
          </label>
          <input
            className="mt-2 min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none"
            id="event-title"
            name="title"
            type="text"
            value={eventData.title}
            onChange={handleChange}
            minLength={3}
            maxLength={100}
            required
          />
        </div>

        <div>
          <label
            className="text-sm font-bold text-evently-text"
            htmlFor="event-description"
          >
            Beschreibung
          </label>
          <textarea
            className="mt-2 min-h-32 w-full resize-y rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none"
            id="event-description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            maxLength={500}
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              className="text-sm font-bold text-evently-text"
              htmlFor="event-date"
            >
              Datum und Uhrzeit
            </label>
            <input
              className="mt-2 min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none"
              id="event-date"
              name="date"
              type="datetime-local"
              value={eventData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              className="text-sm font-bold text-evently-text"
              htmlFor="event-location"
            >
              Veranstaltungsort
            </label>
            <input
              className="mt-2 min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none"
              id="event-location"
              name="location"
              type="text"
              value={eventData.location}
              onChange={handleChange}
              maxLength={160}
              required
            />
          </div>
        </div>

        {error && (
          <p
            className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-evently-primary px-6 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Speichern …" : "Änderungen speichern"}
        </button>
      </form>
    </main>
  );
};

export default EditEvent;
