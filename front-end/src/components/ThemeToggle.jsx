import { use } from "react";
import { ThemeContext } from ".././contexts/ThemeContext.jsx";

const ThemeToggle = () => {
  const { theme, setTheme } = use(ThemeContext);

  const handleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button
      type="button"
      onClick={handleTheme}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-evently-text-secondary transition duration-300 hover:-translate-y-0.5 hover:text-evently-primary hover:drop-shadow-[0_0_12px_var(--evently-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary/70"
      aria-label={theme === "light" ? "Dark Mode aktivieren" : "Light Mode aktivieren"}
      title={theme === "light" ? "Dark Mode" : "Light Mode"}
    >
      {theme === "light" ? (
        <svg
          className="h-5 w-5 transition duration-300 group-hover:-rotate-12 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 text-amber-300 transition duration-500 group-hover:rotate-45 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
