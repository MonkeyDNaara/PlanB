import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../utils/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("E-Mail-Adresse und Passwort sind erforderlich.");
      return;
    }

    try {
      setIsSubmitting(true);

      await registerUser(email, password);

      setMessage("Dein Konto wurde erfolgreich erstellt.");
    } catch (error) {
      setError(error.message || "Das Konto konnte nicht erstellt werden.");
    } finally {
      setIsSubmitting(false);
      navigate("/login");
      alert("register successful now just sign in");
    }
  };

  return (
    <main className="relative isolate flex min-h-[calc(100vh-9rem)] items-center justify-center overflow-hidden bg-evently-bg px-5 py-12 text-evently-text sm:px-8 sm:py-16">
      <div
        className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-8 -z-10 h-80 w-80 rounded-full bg-evently-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <section className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-evently-border bg-evently-surface/85 shadow-[0_30px_100px_rgba(15,8,40,0.2)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-evently-primary">
            Willkommen bei Evently
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Dein Platz ist reserviert.
          </h1>
          <p className="mt-3 text-sm leading-6 text-evently-text-secondary sm:text-base">
            Erstelle dein Konto und entdecke Events, die zu dir und deinem
            Leben passen.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
          >
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-evently-text"
                htmlFor="email-input"
              >
                E-Mail-Adresse
              </label>
              <input
                id="email-input"
                className="min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary/70 px-4 py-3 text-evently-text outline-none transition placeholder:text-evently-muted focus:border-evently-primary focus:ring-4 focus:ring-evently-primary-soft"
                type="email"
                autoComplete="email"
                placeholder="du@domain.de"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label
                  className="block text-sm font-semibold text-evently-text"
                  htmlFor="password-input"
                >
                  Passwort
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-evently-muted">8–50 Zeichen</span>
                  <button
                    className="rounded-lg px-2 py-1 text-xs font-bold text-evently-primary transition hover:bg-evently-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary"
                    type="button"
                    aria-controls="password-input"
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    {showPassword ? "Verbergen" : "Anzeigen"}
                  </button>
                </div>
              </div>
              <input
                id="password-input"
                className="min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary/70 px-4 py-3 text-evently-text outline-none transition placeholder:text-evently-muted focus:border-evently-primary focus:ring-4 focus:ring-evently-primary-soft"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                minLength={8}
                maxLength={50}
                placeholder="Sicheres Passwort wählen"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && (
              <p
                className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500"
                role="alert"
              >
                {error}
              </p>
            )}
            {message && (
              <p
                className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-500"
                role="status"
                aria-live="polite"
              >
                {message}
              </p>
            )}

            <button
              id="signupButton"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-evently-primary px-6 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(111,60,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(111,60,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-surface disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Konto wird erstellt..." : "Konto erstellen"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-evently-text-secondary">
            Schon registriert?{" "}
            <Link
              className="font-bold text-evently-primary transition hover:drop-shadow-[0_0_10px_rgba(124,92,255,0.65)]"
              to="/login"
            >
              Zur Anmeldung
            </Link>
          </p>
        </div>

        <aside className="relative isolate hidden min-h-[42rem] overflow-hidden border-l border-evently-border bg-evently-bg-secondary p-12 lg:flex lg:flex-col lg:justify-between">
          <div
            className="pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-evently-primary/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
            aria-hidden="true"
          />

          <div>
            <span className="inline-flex rounded-full border border-evently-primary/25 bg-evently-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-evently-primary">
              Dein nächstes Erlebnis
            </span>
            <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight">
              Mehr erleben. Weniger suchen.
            </h2>
            <p className="mt-6 text-base leading-7 text-evently-text-secondary">
              Von Clubnacht bis Comedy, von Sport bis Secret Event – Evently
              bringt dich genau dorthin, wo etwas passiert.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-evently-border bg-evently-surface/65 p-6 shadow-[0_20px_60px_rgba(15,8,40,0.12)] backdrop-blur-xl">
            <p className="text-sm font-bold text-evently-primary">EVENTLY TIPP</p>
            <p className="mt-3 text-lg font-bold leading-7">
              Speichere Favoriten, plane deinen Kalender und verpasse keinen
              besonderen Moment.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default SignUp;
