import { apiRequest } from "./api";

const fetchEvents = (page = 1, limit = 10) => {
  return apiRequest(`/events?page=${page}&limit=${limit}`);
};

const fetchUpcomingEvents = () => {
  return apiRequest("/events/upcoming");
};

const createEvent = (event, token) => {
  return apiRequest("/events", {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: JSON.stringify(event),
  });
};

export { fetchEvents, createEvent, fetchUpcomingEvents };
