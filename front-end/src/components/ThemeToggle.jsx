import { use } from "react";
import { ThemeContext } from ".././contexts/ThemeContext.jsx";

const ThemeToggle = () => {
  const { theme, setTheme } = use(ThemeContext);

  const handleTheme = () => {
    theme == "light" ? setTheme("neon") : setTheme("light");
  };

  return (
    <div>
      <input
        type="checkbox"
        className="theme-controller"
        onClick={() => {
          handleTheme();
        }}
      />
    </div>
  );
};

export default ThemeToggle;
