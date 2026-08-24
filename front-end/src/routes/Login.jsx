import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { login, isAuthenticated } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);

      await login(email, password);
    } catch (error) {
      setError(error || "Unable to Login.");
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setPassword("");
      alert("youre logged in");
      navigate("/login");
    }
  };
  if (isAuthenticated() === true)
    return (
      <div>
        <div>Youre already Logged In 🪩</div>
        <Link to="/">Home</Link>{" "}
      </div>
    );
  else
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="email-input"
            type="email"
            placeholder="kevins@crazymail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            id="password-input"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button id="loginButton" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </form>
        <div id="SignUp_Link">
          <Link to="/signup">No Account, Sign Up!</Link>
        </div>
        {error && <p role="alert">{error}</p>}
      </div>
    );
};

export default Login;
