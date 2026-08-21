import { useNavigate } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Navigation() {
  const navigate = useNavigate();
}

const Header = () => {
  return (
    <header>
      <h1>Bock auf Party, PlanB!</h1>
      <button onClick={() => navigate("/Login")}>Login</button>
      <button onClick={() => navigate("/")}>Home</button>
      <ThemeToggle />
    </header>
  );
};

export default Header;
