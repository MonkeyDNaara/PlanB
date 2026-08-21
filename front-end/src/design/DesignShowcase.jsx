import { useState } from "react";
import Navbar from "../components/ui/Navbar/Navbar";
import EventCard from "../components/ui/EventCard/EventCard";
import Hero from "../components/ui/Hero/Hero";
import EventDetailShowcase from "./EventDetailShowcase";
import Login from "../components/ui/Auth/Login";
import Register from "../components/ui/Auth/Register";

const demoEvents = [
  {
    id: 1,
    title: "Neon Nights Berlin",
    category: "Music",
    date: "28.08.2026",
    location: "Berlin",
    description: "Electronic music, immersive visuals and a futuristic nightlife experience.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Championship Night",
    category: "Sport",
    date: "30.08.2026",
    location: "Berlin Arena",
    description: "An electric sports night with atmosphere, competition and full stadium energy.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Late Night Comedy",
    category: "Comedy",
    date: "04.09.2026",
    location: "Comedy Club Berlin",
    description: "Stand-up comedy, sharp punchlines and a night built around pure entertainment.",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Urban Experience",
    category: "Other",
    date: "12.09.2026",
    location: "Berlin Mitte",
    description: "A premium city event combining culture, networking, food and modern experiences.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
  },
];

const previewTabs = [
  ["home", "Home"],
  ["detail", "Event Detail"],
  ["login", "Login"],
  ["register", "Register"],
];

function DesignShowcase() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-evently-bg text-evently-text transition-colors duration-300">
      <Navbar />

      <main className="px-4 py-10 sm:px-6 md:px-10 md:py-14 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-evently-muted">Design Preview</p>
              <h3 className="mt-1 text-sm font-medium text-evently-text-secondary">Alle UI-Bausteine nutzen gemeinsame Tailwind-Tokens.</h3>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Designansicht auswählen">
              {previewTabs.map(([value, label]) => {
                const active = view === value;
                return (
                  <button
                    key={value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setView(value)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/60 ${active ? "border-evently-primary bg-evently-primary text-white shadow-[0_0_24px_var(--evently-primary-soft)]" : "border-evently-border bg-transparent text-evently-muted hover:border-evently-primary/40 hover:text-evently-text"}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {view === "home" && (
            <>
              <Hero events={demoEvents} />
              <section id="events" aria-labelledby="events-title">
                <div className="mb-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-evently-muted">Featured</p>
                    <h2 id="events-title" className="mt-2 text-2xl font-bold md:text-3xl">Upcoming Experiences</h2>
                  </div>
                  <span className="hidden text-sm text-evently-muted md:block">Hover over each event</span>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {demoEvents.map((event) => <EventCard key={event.id} {...event} />)}
                </div>
              </section>
            </>
          )}

          {view === "detail" && <EventDetailShowcase />}
          {view === "login" && <div className="mx-auto max-w-[900px]"><Login setView={setView} /></div>}
          {view === "register" && <div className="mx-auto max-w-[900px]"><Register setView={setView} /></div>}
        </div>
      </main>
    </div>
  );
}

export default DesignShowcase;
