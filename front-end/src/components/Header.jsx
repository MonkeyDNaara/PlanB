import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <h1>Bock auf Party, PlanB!</h1>
      <button>Login</button>
      <button>Home</button>
      <ThemeToggle />
    </header>
  );
};

export default Header;
