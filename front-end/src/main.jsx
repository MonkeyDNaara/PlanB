import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContextProvider.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import AllEventsContextProvider from "./contexts/allEventsContextProvider.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <AllEventsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AllEventsContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
