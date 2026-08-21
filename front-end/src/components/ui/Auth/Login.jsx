import GlowCard from "../GlowCard/GlowCard";
import NeonButton from "../NeonButton/NeonButton";
import '../../../styles/auth.css';

function Login({ setView }) {
  return (
    <div className="py-12 px-6">
      <GlowCard category="Music" className="p-6 md:p-10 max-w-lg mx-auto">
        <div className="max-w-md mx-auto">
          {/* BRANDING - consistent with Register */}
          <div className="flex flex-col items-start gap-1 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase">EVENTLY</h1>
              <p className="text-xs text-[#9AA0B3] mt-1">Premium Events • Unvergessliche Erlebnisse</p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-2">Willkommen zurück</h2>
          <p className="text-sm text-[#9AA0B3] mb-6">Melde dich an, um auf dein Konto zuzugreifen</p>

          <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
            <div>
              <label className="text-xs text-[#9AA0B3]">E-Mail</label>
              <input type="email" placeholder="you@domain.com" className="auth-input w-full mt-2" />
            </div>
            <div>
              <label className="text-xs text-[#9AA0B3]">Passwort</label>
              <input type="password" placeholder="••••••••" className="auth-input w-full mt-2" />
            </div>

            <div className="flex items-center justify-between mt-2">
              <button type="button" className="text-sm text-[#9AA0B3] hover:text-white transition" onClick={()=>{}}>
                Passwort vergessen?
              </button>
            </div>

            <div className="mt-4">
              <NeonButton type="submit" className="w-full py-3" color="#9B5CFF">Anmelden</NeonButton>
            </div>

            <div className="mt-4 text-center text-sm text-[#7E8798]">
              <span>Noch kein Konto?</span>
              <button type="button" className="auth-link ml-2" onClick={()=>setView?.('register')}>Registrieren</button>
            </div>
          </form>
        </div>
      </GlowCard>
    </div>
  );
}

export default Login;
