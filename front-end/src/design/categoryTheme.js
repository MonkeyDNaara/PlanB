export const categoryTheme = {
  music: {
    label: "Music",
    color: "#9B5CFF",
    glow: "rgba(155, 92, 255, 0.45)",
    softGlow: "rgba(155, 92, 255, 0.16)",
  },

  sport: {
    label: "Sport",
    color: "#00A8FF",
    glow: "rgba(0, 168, 255, 0.45)",
    softGlow: "rgba(0, 168, 255, 0.16)",
  },

  comedy: {
    label: "Comedy",
    color: "#FF3B5C",
    glow: "rgba(255, 59, 92, 0.45)",
    softGlow: "rgba(255, 59, 92, 0.16)",
  },

  other: {
    label: "Other",
    color: "#FFD23F",
    glow: "rgba(255, 210, 63, 0.45)",
    softGlow: "rgba(255, 210, 63, 0.16)",
  },
};

export const getCategoryTheme = (category = "") => {
  const normalizedCategory = category.toLowerCase().trim();

  if (normalizedCategory.includes("music")) {
    return categoryTheme.music;
  }

  if (
    normalizedCategory.includes("sport") ||
    normalizedCategory.includes("football") ||
    normalizedCategory.includes("soccer")
  ) {
    return categoryTheme.sport;
  }

  if (
    normalizedCategory.includes("comedy") ||
    normalizedCategory.includes("stand-up") ||
    normalizedCategory.includes("standup")
  ) {
    return categoryTheme.comedy;
  }

  return categoryTheme.other;
};