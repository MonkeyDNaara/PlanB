import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContextProvider.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import EventsContextProvider from "./contexts/EventsContextProvider.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <EventsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </EventsContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
