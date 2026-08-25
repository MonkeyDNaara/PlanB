import { useState } from "react";
import { useNavigate } from "react-router";

import { createEvent } from "../utils/events";
import { getToken } from "../utils/auth";

const initialEvent = {
  title: "",
  description: "",
  date: "",
  location: "",
  latitude: "",
  longitude: "",
};

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(initialEvent);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const createdEvent = await createEvent(payload, getToken());
      navigate(createdEvent?.id ? `/eventdetails/${createdEvent.id}` : "/eventlist");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Das Event konnte gerade nicht erstellt werden.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden bg-evently-bg px-5 py-12 text-evently-text sm:px-8 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute -left-28 top-16 -z-10 h-80 w-80 rounded-full bg-evently-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/12 blur-3xl"
        aria-hidden="true"
      />

      <section className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-evently-border bg-evently-surface/90 shadow-[0_30px_100px_rgba(15,8,40,0.16)] backdrop-blur-xl lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-evently-primary">
            Dein Moment
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-[-0.035em] text-evently-text sm:text-4xl">
            Erstelle dein Event.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-evently-text-secondary sm:text-base">
            Von der ersten Idee bis zum gefüllten Kalender: Gib deinem Erlebnis
            einen Namen, einen Ort und den richtigen Zeitpunkt.
          </p>

          <form className="mt-9 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-bold text-evently-text" htmlFor="event-title">
                Eventname
              </label>
              <input
                className="mt-2 min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none transition placeholder:text-evently-muted/70 hover:border-evently-primary/40 focus:border-evently-primary focus:bg-evently-surface focus:ring-4 focus:ring-evently-primary/10"
                id="event-title"
                name="title"
                type="text"
                placeholder="Zum Beispiel: Neon Night Berlin"
                value={eventData.title}
                onChange={handleChange}
                minLength={3}
                maxLength={100}
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <label className="text-sm font-bold text-evently-text" htmlFor="event-description">
                  Beschreibung
                </label>
                <span className="text-xs text-evently-muted">
                  {eventData.description.length}/500
                </span>
              </div>
              <textarea
                className="mt-2 min-h-32 w-full resize-y rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm leading-6 text-evently-text outline-none transition placeholder:text-evently-muted/70 hover:border-evently-primary/40 focus:border-evently-primary focus:bg-evently-surface focus:ring-4 focus:ring-evently-primary/10"
                id="event-description"
                name="description"
                placeholder="Was macht dein Event besonders?"
                value={eventData.description}
                onChange={handleChange}
                maxLength={500}
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-evently-text" htmlFor="event-date">
                  Datum und Uhrzeit
                </label>
                <input
                  className="mt-2 min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none transition hover:border-evently-primary/40 focus:border-evently-primary focus:bg-evently-surface focus:ring-4 focus:ring-evently-primary/10"
                  id="event-date"
                  name="date"
                  type="datetime-local"
                  value={eventData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-bold text-evently-text" htmlFor="event-location">
                  Veranstaltungsort
                </label>
                <input
                  className="mt-2 min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-3 text-sm text-evently-text outline-none transition placeholder:text-evently-muted/70 hover:border-evently-primary/40 focus:border-evently-primary focus:bg-evently-surface focus:ring-4 focus:ring-evently-primary/10"
                  id="event-location"
                  name="location"
                  type="text"
                  placeholder="Club, Bühne oder Adresse"
                  value={eventData.location}
                  onChange={handleChange}
                  maxLength={160}
                  required
                />
              </div>
            </div>

            <details className="rounded-2xl border border-evently-border bg-evently-bg-secondary/60 p-4 open:bg-evently-surface">
              <summary className="cursor-pointer text-sm font-bold text-evently-text marker:text-evently-primary">
                Genaue Koordinaten hinzufügen
                <span className="ml-2 font-normal text-evently-muted">optional</span>
              </summary>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-evently-text-secondary" htmlFor="event-latitude">
                    Breitengrad
                  </label>
                  <input
                    className="mt-2 min-h-11 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-2.5 text-sm text-evently-text outline-none transition focus:border-evently-primary focus:ring-4 focus:ring-evently-primary/10"
                    id="event-latitude"
                    name="latitude"
                    type="number"
                    inputMode="decimal"
                    min="-90"
                    max="90"
                    step="any"
                    placeholder="52.5200"
                    value={eventData.latitude}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-evently-text-secondary" htmlFor="event-longitude">
                    Längengrad
                  </label>
                  <input
                    className="mt-2 min-h-11 w-full rounded-xl border border-evently-border bg-evently-bg-secondary px-4 py-2.5 text-sm text-evently-text outline-none transition focus:border-evently-primary focus:ring-4 focus:ring-evently-primary/10"
                    id="event-longitude"
                    name="longitude"
                    type="number"
                    inputMode="decimal"
                    min="-180"
                    max="180"
                    step="any"
                    placeholder="13.4050"
                    value={eventData.longitude}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </details>

            {error && (
              <p
                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-600"
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-evently-primary px-6 py-3 text-sm font-black text-white shadow-[0_14px_38px_rgba(111,60,255,0.32)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(111,60,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-surface disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Event wird erstellt …" : "Event veröffentlichen"}
            </button>
          </form>
        </div>

        <aside className="relative hidden overflow-hidden border-l border-evently-border bg-evently-bg-secondary p-10 lg:flex lg:flex-col lg:justify-between">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-evently-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="inline-flex rounded-full border border-evently-primary/20 bg-evently-primary-soft px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-evently-primary">
              Live Vorschau
            </span>
            <h2 className="mt-8 max-w-md text-4xl font-black leading-tight tracking-[-0.04em] text-evently-text">
              {eventData.title || "Dein Event bekommt hier seine Bühne."}
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-evently-text-secondary">
              {eventData.description ||
                "Ein klarer Titel, ein besonderer Ort und eine gute Beschreibung machen aus einer Idee ein Erlebnis."}
            </p>
          </div>

          <div className="relative mt-12 rounded-[1.75rem] border border-evently-border bg-evently-surface/85 p-6 shadow-[0_24px_70px_rgba(15,8,40,0.13)] backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-evently-primary via-fuchsia-500 to-cyan-400 text-xl text-white shadow-[0_10px_30px_rgba(111,60,255,0.28)]">
                ✦
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-evently-primary">
                  Evently Tipp
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-evently-text">
                  Beschreibe nicht nur, was passiert – sondern warum man dabei
                  sein möchte.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CreateEvent;
