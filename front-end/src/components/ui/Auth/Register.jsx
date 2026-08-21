import GlowCard from "../GlowCard/GlowCard";
import NeonButton from "../NeonButton/NeonButton";

const inputClass =
  "mt-2 w-full rounded-xl border border-evently-border bg-white/[0.02] px-3.5 py-3 text-evently-text outline-none transition-all duration-200 placeholder:text-evently-muted/60 focus:-translate-y-px focus:border-evently-primary focus:shadow-[0_8px_40px_var(--evently-primary-soft),0_0_8px_var(--evently-primary)]";

function Register({ setView }) {
  return (
    <div className="px-6 py-12">
      <GlowCard category="Music" className="mx-auto max-w-lg p-6 md:p-10">
        <div className="mx-auto max-w-md">
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold uppercase tracking-widest text-evently-text md:text-4xl">EVENTLY</h1>
            <p className="mt-1 text-xs text-evently-muted">Premium Events • Unvergessliche Erlebnisse</p>
          </div>

          <h2 className="mb-2 text-xl font-semibold text-evently-text md:text-2xl">Konto erstellen</h2>
          <p className="mb-6 text-sm text-evently-muted">Registriere dich, entdecke Events und verwalte deine Buchungen.</p>

          <form onSubmit={(event) => event.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="register-name" className="text-xs text-evently-muted">Name</label>
              <input id="register-name" type="text" autoComplete="name" placeholder="Dein vollständiger Name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="register-email" className="text-xs text-evently-muted">E-Mail</label>
              <input id="register-email" type="email" autoComplete="email" placeholder="you@domain.com" className={inputClass} />
            </div>
            <div>
              <label htmlFor="register-password" className="text-xs text-evently-muted">Passwort</label>
              <input id="register-password" type="password" autoComplete="new-password" placeholder="••••••••" className={inputClass} />
            </div>
            <div>
              <label htmlFor="register-password-confirm" className="text-xs text-evently-muted">Passwort bestätigen</label>
              <input id="register-password-confirm" type="password" autoComplete="new-password" placeholder="••••••••" className={inputClass} />
            </div>

            <NeonButton type="submit" className="w-full py-3" color="#9B5CFF">Registrieren</NeonButton>

            <div className="pt-1 text-center text-sm text-evently-muted">
              <span>Schon ein Konto?</span>
              <button type="button" className="ml-2 font-semibold text-evently-primary transition-colors hover:text-violet-300" onClick={() => setView?.("login")}>Anmelden</button>
            </div>
          </form>
        </div>
      </GlowCard>
    </div>
  );
}

export default Register;
