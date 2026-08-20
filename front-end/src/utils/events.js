import { apiRequest } from "./api";

const fetchEvents = () => {
  return apiRequest("/events");
};

const createEvent = (event, token) => {
  return apiRequest("/events", {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: JSON.stringify(event),
  });
};

export { fetchEvents, createEvent };
