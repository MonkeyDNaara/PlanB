import veniceBiennaleArtwork from "../assets/events/real/venice-biennale.jpg";
import artBaselArtwork from "../assets/events/real/art-basel.jpg";
import friezeLondonArtwork from "../assets/events/real/frieze-london.jpg";
import documentaKasselArtwork from "../assets/events/real/documenta-kassel.jpg";
import parisPhotoArtwork from "../assets/events/real/paris-photo.jpg";
import athensPhotoWorldArtwork from "../assets/events/real/athens-photo-world.jpg";
import primaveraSoundArtwork from "../assets/events/real/primavera-sound-barcelona.jpg";
import tomorrowlandArtwork from "../assets/events/real/tomorrowland.jpg";
import roskildeArtwork from "../assets/events/real/roskilde-festival.jpg";
import montreuxJazzArtwork from "../assets/events/real/montreux-jazz-festival.jpg";
import szigetArtwork from "../assets/events/real/sziget-festival-budapest.jpg";
import nosAliveArtwork from "../assets/events/real/nos-alive.jpg";
import oyaFestivalArtwork from "../assets/events/real/oya-festival.jpg";
import flowFestivalArtwork from "../assets/events/real/flow-festival-helsinki.jpg";
import rockAmRingArtwork from "../assets/events/real/rock-am-ring.jpg";
import glastonburyArtwork from "../assets/events/real/glastonbury-festival.jpg";
import reykjavikPrideArtwork from "../assets/events/real/reykjavik-pride.jpg";
import laTomatinaArtwork from "../assets/events/real/la-tomatina.jpg";
import sanFerminArtwork from "../assets/events/real/san-fermin.jpg";
import bastilleArtwork from "../assets/events/real/bastille-day-paris.jpg";
import stPatricksArtwork from "../assets/events/real/st-patricks-dublin.jpg";
import carnavalNiceArtwork from "../assets/events/real/carnaval-de-nice.jpg";
import cultureArtwork from "../assets/events/planb-culture.webp";
import foodArtwork from "../assets/events/planb-food.webp";
import musicArtwork from "../assets/events/planb-music.webp";
import sportArtwork from "../assets/events/planb-sport.webp";

const ARTWORKS = [musicArtwork, cultureArtwork, foodArtwork, sportArtwork];

const REAL_EVENT_ARTWORK = {
  "Bastille Day Paris": bastilleArtwork,
  "St. Patrick's Festival Dublin": stPatricksArtwork,
  "Carnaval de Nice": carnavalNiceArtwork,
  "Reykjavik Pride": reykjavikPrideArtwork,
  "La Tomatina Buñol": laTomatinaArtwork,
  "San Fermín Running of the Bulls": sanFerminArtwork,
  "Primavera Sound Barcelona": primaveraSoundArtwork,
  "Tomorrowland": tomorrowlandArtwork,
  "Roskilde Festival": roskildeArtwork,
  "Montreux Jazz Festival": montreuxJazzArtwork,
  "Sziget Festival Budapest": szigetArtwork,
  "NOS Alive": nosAliveArtwork,
  "Øya Festival": oyaFestivalArtwork,
  "Flow Festival Helsinki": flowFestivalArtwork,
  "Rock am Ring": rockAmRingArtwork,
  "Glastonbury Festival": glastonburyArtwork,
  "Venice Biennale": veniceBiennaleArtwork,
  "Art Basel": artBaselArtwork,
  "Frieze London": friezeLondonArtwork,
  "documenta Kassel": documentaKasselArtwork,
  "Paris Photo": parisPhotoArtwork,
  "Athens Photo World": athensPhotoWorldArtwork,
};


const ARTWORK_GROUPS = [
  {
    artwork: musicArtwork,
    words: [
      "music",
      "musik",
      "concert",
      "festival",
      "jazz",
      "rock",
      "edm",
      "night",
      "party",
      "pride",
      "carnival",
    ],
  },
  {
    artwork: foodArtwork,
    words: [
      "food",
      "wine",
      "vin",
      "beer",
      "bier",
      "taste",
      "culinary",
      "chocolate",
      "tomatina",
      "fête",
    ],
  },
  {
    artwork: sportArtwork,
    words: [
      "sport",
      "running",
      "run",
      "marathon",
      "race",
      "bulls",
      "trekking",
      "cycling",
      "bike",
      "ski",
      "surf",
      "adventure",
    ],
  },
  {
    artwork: cultureArtwork,
    words: [
      "art",
      "culture",
      "kultur",
      "book",
      "film",
      "theatre",
      "theater",
      "biennale",
      "conference",
      "fair",
      "museum",
    ],
  },
];

const stableArtworkIndex = (value) => {
  const text = String(value ?? "PlanB");

  return [...text].reduce((sum, character) => sum + character.charCodeAt(0), 0) % ARTWORKS.length;
};

export const hasRealEventArtwork = (event) => {
  const suppliedArtwork = event.imageUrl ?? event.image ?? event.picture;
  return Boolean(suppliedArtwork || REAL_EVENT_ARTWORK[event.title]);
};

const getEventArtwork = (event) => {
  const suppliedArtwork = event.imageUrl ?? event.image ?? event.picture;

  if (suppliedArtwork) return suppliedArtwork;

  const realArtwork = REAL_EVENT_ARTWORK[event.title];
  if (realArtwork) return realArtwork;

  const searchableText = `${event.title ?? ""} ${event.description ?? ""}`.toLowerCase();
  const matchingGroup = ARTWORK_GROUPS.find(({ words }) =>
    words.some((word) => searchableText.includes(word)),
  );

  return matchingGroup?.artwork ?? ARTWORKS[stableArtworkIndex(event.id ?? event.title)];
};

export default getEventArtwork;
