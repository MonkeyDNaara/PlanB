import { NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1>Bock auf Party, PlanB!</h1>
        <NavLink to="/login" end>
          Login
        </NavLink>
        <NavLink to="/" end>
          Home
        </NavLink>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
