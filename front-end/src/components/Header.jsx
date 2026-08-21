import { NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <h1>Bock auf Party, PlanB!</h1>
      <NavLink to="/login" end>
        Login
      </NavLink>
      <NavLink to="/" end>
        Home
      </NavLink>
      <ThemeToggle />
    </header>
  );
};

export default Header;
