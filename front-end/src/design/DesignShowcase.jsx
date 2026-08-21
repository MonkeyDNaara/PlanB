import { useState } from 'react';
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
    description:
      "Electronic music, immersive visuals and a futuristic nightlife experience.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Championship Night",
    category: "Sport",
    date: "30.08.2026",
    location: "Berlin Arena",
    description:
      "An electric sports night with atmosphere, competition and full stadium energy.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Late Night Comedy",
    category: "Comedy",
    date: "04.09.2026",
    location: "Comedy Club Berlin",
    description:
      "Stand-up comedy, sharp punchlines and a night built around pure entertainment.",
    image:
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Urban Experience",
    category: "Other",
    date: "12.09.2026",
    location: "Berlin Mitte",
    description:
      "A premium city event combining culture, networking, food and modern experiences.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
  },
];

function DesignShowcase() {
  const [view, setView] = useState('home');

  return (
    <main className="min-h-screen bg-[#050608] px-6 py-16 text-white md:px-10 xl:px-20">
      <div className="mx-auto max-w-[1500px]">

        {/* Toggle between Home, Event Detail, Login and Register preview */}
        <div className="mb-8 flex items-center justify-end gap-3">
          <div className="mr-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7E8798]">Design Preview</p>
            <h3 className="mt-1 text-sm font-medium text-[#9AA0B3]">Toggle to inspect different UI pieces</h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView('home')}
              className={`px-3 py-1 rounded ${view === 'home' ? 'bg-white text-black' : 'bg-transparent border border-[#2b2b2b] text-[#7E8798]'}`}
            >
              Home
            </button>
            <button
              onClick={() => setView('detail')}
              className={`px-3 py-1 rounded ${view === 'detail' ? 'bg-white text-black' : 'bg-transparent border border-[#2b2b2b] text-[#7E8798]'}`}
            >
              Event Detail
            </button>
            <button
              onClick={() => setView('login')}
              className={`px-3 py-1 rounded ${view === 'login' ? 'bg-white text-black' : 'bg-transparent border border-[#2b2b2b] text-[#7E8798]'}`}
            >
              Login
            </button>
            <button
              onClick={() => setView('register')}
              className={`px-3 py-1 rounded ${view === 'register' ? 'bg-white text-black' : 'bg-transparent border border-[#2b2b2b] text-[#7E8798]'}`}
            >
              Register
            </button>
          </div>
        </div>

        {view === 'home' ? (
          <>
            {/* HERO */}
            <Hero events={demoEvents} />

            {/* EVENTS GRID */}
            <section>
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#7E8798]">Featured</p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">Upcoming Experiences</h2>
                </div>
                <span className="hidden text-sm text-[#7E8798] md:block">Hover over each event</span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {demoEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    category={event.category}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    image={event.image}
                  />
                ))}
              </div>
            </section>
          </>
        ) : view === 'detail' ? (
          <section>
            {/* Event detail showcase - rendered in place of the home demo when toggled */}
            <EventDetailShowcase />
          </section>
        ) : view === 'login' ? (
          <section>
            <div className="mx-auto max-w-[900px]">
              <Login setView={setView} />
            </div>
          </section>
        ) : (
          <section>
            <div className="mx-auto max-w-[900px]">
              <Register setView={setView} />
            </div>
          </section>
        )}

      </div>
    </main>
  );
}

export default DesignShowcase;
