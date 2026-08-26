import cultureArtwork from "../assets/events/planb-culture.webp";
import foodArtwork from "../assets/events/planb-food.webp";
import musicArtwork from "../assets/events/planb-music.webp";
import sportArtwork from "../assets/events/planb-sport.webp";

const ARTWORKS = [musicArtwork, cultureArtwork, foodArtwork, sportArtwork];

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

const getEventArtwork = (event) => {
  const suppliedArtwork = event.imageUrl ?? event.image ?? event.picture;

  if (suppliedArtwork) return suppliedArtwork;

  const searchableText = `${event.title ?? ""} ${event.description ?? ""}`.toLowerCase();
  const matchingGroup = ARTWORK_GROUPS.find(({ words }) =>
    words.some((word) => searchableText.includes(word)),
  );

  return matchingGroup?.artwork ?? ARTWORKS[stableArtworkIndex(event.id ?? event.title)];
};

export default getEventArtwork;
