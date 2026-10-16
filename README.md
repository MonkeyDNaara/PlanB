# PlanB – Mehr erleben. Weniger suchen.

An event platform built as a team project at WBS Coding School. Visitors can browse
upcoming events in a list or a calendar, and signed-in users can create, edit and delete
their own events. The **React front-end** is our work. It runs on top of a prepared
Node.js/Express **events API** provided by the course.

The UI is in German.

## Features

- **Upcoming events:** a home page with a hero section and the next events as animated cards
- **Event list and calendar:** all events as a list or in a calendar view (react-datepicker)
- **Event details:** a detail page with a back button, loaded by id
- **Accounts:** sign up and log in with JWT; the session is stored in `localStorage`
- **Own events:** create, edit and delete your own events. These routes are protected,
  so logged-out users are redirected.
- **Light and dark theme** with a toggle (React Context)
- **Premium celebration:** pick 3 events and the page unlocks a laser and applause animation 🎉
- Loading skeletons, empty and error states, a 404 page and a responsive layout

## Tech stack

| Part | Tools |
|---|---|
| Front-end | React 19, React Router 7, Vite, Tailwind CSS 4, react-datepicker |
| Back-end (provided) | Node.js, Express 5, Sequelize + SQLite, JWT, bcrypt, Joi, Swagger UI, Docker |

## Getting started

You need [Node.js](https://nodejs.org/) and two terminals.

**1. Start the API** (port 3001)

```bash
cd events-api
npm install
printf 'PORT=3001\nJWT_SECRET=change-me\nNODE_ENV=development\n' > .env
npm run seed      # once: 10 users and ~100 sample events
npm run dev
```

Swagger docs: http://localhost:3001/api-docs

**2. Start the front-end**

```bash
cd front-end
npm install
npm run dev
```

The front-end calls `http://localhost:3001/api` by default. To use another API, set
`VITE_API_URL` in `front-end/.env`.

## Project structure

```
PlanB/
├── front-end/
│   └── src/
│       ├── routes/       # pages: UpcomingEvents, EventList, EventCalendar, EventDetails,
│       │                 #        CreateEvent, EditEvent, Login, SignUp, NotFound
│       ├── components/   # Header, Footer, EventCard, Modal, ThemeToggle, ui/ (Hero, GlowCard, …)
│       ├── contexts/     # AuthContext, ThemeContext
│       ├── hooks/        # useEventSelection (3-event pick and premium unlock)
│       ├── utils/        # api.js (fetch wrapper), auth.js, events.js, ProtectedRoute
│       └── design/       # theme tokens, category themes, motion presets
├── events-api/           # provided Express API (see events-api/README.md)
└── docs/concept.excalidraw
```

## API endpoints used

| Method | Endpoint | Auth |
|---|---|---|
| `POST` | `/api/users` (sign up) | – |
| `POST` | `/api/auth/login` | – |
| `GET` | `/api/events/upcoming` | – |
| `GET` | `/api/events`, `/api/events/:id` | – |
| `POST` | `/api/events` | Bearer token |
| `PUT` / `DELETE` | `/api/events/:id` | Bearer token |

## Team

- **Niko** · [@MonkeyDNaara](https://github.com/MonkeyDNaara): project setup and data
  structure, event details, edit and delete for your own events, theme toggle, routing
  updates
- **Mario Muju**: UI design system, event theme and design tokens, premium celebration,
  responsive styling
- **[@Firewalldefender](https://github.com/Firewalldefender)**: router setup, header and
  footer, event calendar and basic styling

Each feature was built on its own branch with a pull request (100+ PRs).
