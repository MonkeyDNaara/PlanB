import EventDetail from "../components/ui/EventDetail/EventDetail";

const sampleEvent = {
  title: "Neon Nights Berlin",
  category: { name: "Music / Musik", color: "#7C4DFF" },
  date: "28.08.2026",
  time: "23:00 - 05:00",
  location: "Berlin",
  shortDescription: "Elektronische Musik, immersive Lichtwelten und eine Nacht voller Energie.",
  longDescription:
    "Erlebe eine pulsierende Nacht im Herzen Berlins: treibende elektronische Sounds, cutting-edge Lichtinstallationen und ein sorgfältig kuratiertes Line-up lokaler sowie internationaler DJs. Neon Nights verbindet Clubkultur mit zeitgenössischem Design und bietet eine Atmosphäre zum Tanzen, Entdecken und Netzwerken.",
  image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
  ctaLabel: "Jetzt teilnehmen",
};

export default function EventDetailShowcase() {
  return (
    <div className="min-h-screen bg-evently-bg p-4 sm:p-8 lg:p-10">
      <EventDetail event={sampleEvent} />
    </div>
  );
}
