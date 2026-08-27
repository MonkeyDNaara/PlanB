import { Link, useNavigate } from "react-router";
import { useState } from "react";

import { login, isAuthenticated } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("E-Mail-Adresse und Passwort sind erforderlich.");
      return;
    }

    try {
      setIsSubmitting(true);

      await login(email, password);
    } catch (error) {
      setError(error || "Die Anmeldung ist derzeit nicht möglich.");
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
      <main className="relative isolate flex min-h-[calc(100vh-9rem)] items-center justify-center overflow-hidden px-5 py-16 text-evently-text sm:px-8">
        <div
          className="pointer-events-none absolute -left-28 top-6 -z-10 h-80 w-80 rounded-full bg-evently-primary/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        />

        <section className="w-full max-w-xl rounded-[2rem] border border-evently-border bg-evently-surface/85 p-8 text-center shadow-[0_30px_100px_rgba(15,8,40,0.2)] backdrop-blur-xl sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-evently-primary-soft text-3xl text-evently-primary shadow-[0_0_40px_rgba(124,92,255,0.25)]">
            ✓
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-evently-primary">
            Session aktiv
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Du bist bereits angemeldet.
          </h1>
          <p className="mx-auto mt-4 max-w-md leading-7 text-evently-text-secondary">
            Deine PlanB-Welt wartet schon. Entdecke neue Erlebnisse und plane
            deinen nächsten besonderen Moment.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-evently-primary px-7 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(111,60,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(111,60,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-bg"
          >
            Zur Startseite
          </Link>
        </section>
      </main>
    );
  else
    return (
      <main className="relative isolate flex min-h-[calc(100vh-9rem)] items-center justify-center overflow-hidden px-5 py-12 text-evently-text sm:px-8 sm:py-16">
        <div
          className="pointer-events-none absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-evently-primary/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        />

        <section className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-evently-border bg-evently-surface/85 shadow-[0_30px_100px_rgba(15,8,40,0.2)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative isolate hidden min-h-[40rem] overflow-hidden border-r border-evently-border bg-evently-bg-secondary p-12 lg:flex lg:flex-col lg:justify-between">
            <div
              className="pointer-events-none absolute -left-20 top-12 -z-10 h-72 w-72 rounded-full bg-evently-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
              aria-hidden="true"
            />

            <div>
              <span className="inline-flex rounded-full border border-evently-primary/25 bg-evently-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-evently-primary">
                Dein Zugang
              </span>
              <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight">
                Deine nächste Nacht beginnt hier.
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-evently-text-secondary">
                Melde dich an und finde Events, die nicht nur im Kalender,
                sondern im Gedächtnis bleiben.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["01", "Entdecken"],
                ["02", "Erleben"],
                ["03", "Erinnern"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-evently-border bg-evently-surface/60 p-4"
                >
                  <span className="text-xs font-bold text-evently-primary">
                    {number}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-evently-primary">
              PlanB Login
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Willkommen zurück.
            </h2>
            <p className="mt-3 text-sm leading-6 text-evently-text-secondary sm:text-base">
              Melde dich an und mach dort weiter, wo dein Erlebnis begonnen hat.
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
                <input
                  id="password-input"
                  className="min-h-12 w-full rounded-xl border border-evently-border bg-evently-bg-secondary/70 px-4 py-3 text-evently-text outline-none transition placeholder:text-evently-muted focus:border-evently-primary focus:ring-4 focus:ring-evently-primary-soft"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Dein Passwort"
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

              <button
                id="loginButton"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-evently-primary px-6 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(111,60,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(111,60,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evently-primary focus-visible:ring-offset-2 focus-visible:ring-offset-evently-surface disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Anmeldung läuft..." : "Jetzt anmelden"}
              </button>
            </form>

            <p
              id="SignUp_Link"
              className="mt-7 text-center text-sm text-evently-text-secondary"
            >
              Noch kein Konto?{" "}
              <Link
                className="font-bold text-evently-primary transition hover:drop-shadow-[0_0_10px_rgba(124,92,255,0.65)]"
                to="/signup"
              >
                Jetzt registrieren
              </Link>
            </p>
          </div>
        </section>
      </main>
    );
};

export default Login;
