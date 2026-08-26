import { apiRequest } from "./api";

const fetchEvents = (page = 1, limit = 10) => {
  return apiRequest(`/events?page=${page}&limit=${limit}`);
};

const fetchUpcomingEvents = () => {
  return apiRequest("/events/upcoming");
};

const fetchEventById = (id) => {
  return apiRequest(`/events/${id}`);
};

const createEvent = (event, token) => {
  return apiRequest("/events", {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: JSON.stringify(event),
  });
};

const updateEvent = (id, event, token) => {
  return apiRequest(`/events/${id}`, {
    method: "PUT",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: JSON.stringify(event),
  });
};

const deleteEvent = (id, token) => {
  return apiRequest(`/events/${id}`, {
    method: "DELETE",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
};

export {
  fetchEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  fetchUpcomingEvents,
  fetchEventById,
};
