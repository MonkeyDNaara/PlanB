import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);

      await registerUser(email, password);

      setMessage("Account created successfully.");
      navigate("/login");
    } catch (error) {
      setError(error.message || "Unable to create account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up right now and become a part of the culture</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-input">E-Mail</label>
        <input
          id="email-input"
          type="email"
          placeholder="kevins@crazymail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="password-input">Your new password</label>
        <input
          id="password-input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button id="loginButton" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
        {error && <p role="alert">{error}</p>}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
