import { useCallback, useEffect, useState } from "react";

const EVENT_SELECTION_KEY = "evently-selected-events";
const EVENT_SELECTION_CHANGE = "evently:selection-change";
const MAX_SELECTED_EVENTS = 3;

const readSelectedEventIds = () => {
  try {
    const storedValue = window.localStorage.getItem(EVENT_SELECTION_KEY);
    const parsedValue = storedValue ? JSON.parse(storedValue) : [];

    if (!Array.isArray(parsedValue)) return [];

    return [...new Set(parsedValue.map(String))].slice(0, MAX_SELECTED_EVENTS);
  } catch {
    return [];
  }
};

const saveSelectedEventIds = (selectedEventIds) => {
  window.localStorage.setItem(
    EVENT_SELECTION_KEY,
    JSON.stringify(selectedEventIds),
  );
  window.dispatchEvent(
    new CustomEvent(EVENT_SELECTION_CHANGE, {
      detail: { selectedEventIds },
    }),
  );
};

const useEventSelection = () => {
  const [selectedEventIds, setSelectedEventIds] = useState(
    readSelectedEventIds,
  );

  useEffect(() => {
    const updateSelection = (event) => {
      setSelectedEventIds(
        event.detail?.selectedEventIds ?? readSelectedEventIds(),
      );
    };
    const updateSelectionFromStorage = () => {
      setSelectedEventIds(readSelectedEventIds());
    };

    window.addEventListener(EVENT_SELECTION_CHANGE, updateSelection);
    window.addEventListener("storage", updateSelectionFromStorage);

    return () => {
      window.removeEventListener(EVENT_SELECTION_CHANGE, updateSelection);
      window.removeEventListener("storage", updateSelectionFromStorage);
    };
  }, []);

  const toggleEventSelection = useCallback((eventId) => {
    const normalizedEventId = String(eventId);
    const currentSelection = readSelectedEventIds();
    const isSelected = currentSelection.includes(normalizedEventId);

    if (!isSelected && currentSelection.length >= MAX_SELECTED_EVENTS) {
      return;
    }

    const nextSelection = isSelected
      ? currentSelection.filter((id) => id !== normalizedEventId)
      : [...currentSelection, normalizedEventId];

    saveSelectedEventIds(nextSelection);
    setSelectedEventIds(nextSelection);
  }, []);

  return {
    selectedEventIds,
    selectedCount: selectedEventIds.length,
    isPremium: selectedEventIds.length === MAX_SELECTED_EVENTS,
    toggleEventSelection,
  };
};

export { MAX_SELECTED_EVENTS };
export default useEventSelection;
