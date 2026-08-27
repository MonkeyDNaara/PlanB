import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { deleteEvent, fetchEventById } from "../utils/events";
import { getCurrentUser, getToken } from "../utils/auth";

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loadedEventId, setLoadedEventId] = useState(null);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    let requestIsActive = true;

    fetchEventById(eventId)
      .then((loadedEvent) => {
        if (!requestIsActive) return;
        setEvent(loadedEvent);
        setError(null);
      })
      .catch((fetchError) => {
        if (!requestIsActive) return;
        setEvent(null);
        setError(fetchError);
      })
      .finally(() => {
        if (requestIsActive) setLoadedEventId(eventId);
      });

    return () => {
      requestIsActive = false;
    };
  }, [eventId]);

  const isLoading = loadedEventId !== eventId;

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

  if (isLoading) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-5xl items-center justify-center px-4 py-10">
        <div className="rounded-2xl border border-white/15 bg-[#080914]/85 px-6 py-4 text-sm font-bold text-white shadow-2xl backdrop-blur-xl">
          Event wird geladen…
        </div>
      </main>
    );
  }

  if (error || !event) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-5xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-red-400/25 bg-[#11090d]/90 p-6 text-center shadow-2xl backdrop-blur-xl">
          <p className="text-lg font-black text-white">
            Event nicht gefunden
          </p>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:border-violet-300/50 hover:bg-violet-500/20"
          >
            ← Zurück
          </button>
        </div>
      </main>
    );
  }

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
    <main className="relative mx-auto flex min-h-[calc(100svh-9rem)] w-full max-w-6xl items-center px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <article className="evently-event-details-card relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#080914]/85 shadow-[0_24px_90px_rgba(0,0,0,0.55),0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-2xl">
        <div
          className="evently-event-details-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(139,92,246,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]"
          aria-hidden="true"
        />

        <div className="relative p-5 sm:p-8 lg:p-10">
          <div className="evently-event-details-toolbar flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="evently-event-details-back inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-bold text-white transition hover:border-violet-300/55 hover:bg-violet-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
            >
              ← Zurück
            </button>

            {isOwner && (
              <div className="grid grid-cols-1 gap-2 sm:flex sm:items-center">
                <Link
                  to={`/eventdetails/${eventId}/edit`}
                  className="inline-flex items-center justify-center rounded-full border border-violet-300/35 bg-violet-500/15 px-4 py-2.5 text-sm font-bold text-violet-100 transition hover:border-violet-200/70 hover:bg-violet-500/30"
                >
                  Event bearbeiten
                </Link>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="inline-flex items-center justify-center rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-sm font-bold text-red-200 transition hover:border-red-300/60 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isDeleting ? "Wird gelöscht…" : "Event löschen"}
                </button>
              </div>
            )}
          </div>

          {deleteError && (
            <p
              className="mt-5 rounded-2xl border border-red-400/30 bg-red-500/12 px-4 py-3 text-sm font-semibold text-red-100"
              role="alert"
            >
              {deleteError.message ?? "Das Event konnte nicht gelöscht werden."}
            </p>
          )}

          <div className="pt-7 sm:pt-9">
            <span className="evently-event-details-badge inline-flex rounded-full border border-violet-300/30 bg-violet-500/15 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.24em] text-violet-200">
              Eventdetails
            </span>

            <h1 className="evently-event-details-title mt-4 max-w-4xl text-pretty text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-[0.85fr_0.7fr_1.8fr]">
              <div className="evently-event-details-info rounded-2xl border border-white/10 bg-black/25 p-4">
                <span className="evently-event-details-label block text-[0.65rem] font-black uppercase tracking-[0.2em] text-violet-300">
                  Datum
                </span>
                <strong className="evently-event-details-value mt-2 block text-base text-white sm:text-lg">
                  {formattedDate}
                </strong>
              </div>

              <div className="evently-event-details-info rounded-2xl border border-white/10 bg-black/25 p-4">
                <span className="evently-event-details-label block text-[0.65rem] font-black uppercase tracking-[0.2em] text-violet-300">
                  Uhrzeit
                </span>
                <strong className="evently-event-details-value mt-2 block text-base text-white sm:text-lg">
                  {formattedTime}
                </strong>
              </div>

              <div className="evently-event-details-info min-w-0 rounded-2xl border border-white/10 bg-black/25 p-4">
                <span className="evently-event-details-label block text-[0.65rem] font-black uppercase tracking-[0.2em] text-violet-300">
                  Ort
                </span>
                <strong className="evently-event-details-value mt-2 block break-words text-base text-white sm:text-lg">
                  {location || "Ort wird noch bekannt gegeben"}
                </strong>
              </div>
            </div>

            {description && (
              <section className="evently-event-details-description mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h2 className="evently-event-details-description-title text-xs font-black uppercase tracking-[0.2em] text-violet-300">
                  Über dieses Event
                </h2>
                <p className="evently-event-details-description-text mt-3 max-w-4xl whitespace-pre-line text-sm leading-7 text-slate-200 sm:text-base">
                  {description}
                </p>
              </section>
            )}
          </div>
        </div>
      </article>
    </main>
  );
};

export default EventDetails;
