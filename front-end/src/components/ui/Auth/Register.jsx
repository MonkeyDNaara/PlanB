import GlowCard from "../GlowCard/GlowCard";
import NeonButton from "../NeonButton/NeonButton";
import '../../../styles/auth.css';

function Register({ setView }) {
  return (
    <div className="py-12 px-6">
      <GlowCard className="p-8 md:p-12 max-w-lg mx-auto">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-start gap-1 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase">EVENTLY</h1>
              <p className="text-xs text-[#9AA0B3] mt-1">Premium Events • Unvergessliche Erlebnisse</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Create account</h2>
          <p className="text-sm text-[#9AA0B3] mb-6">Sign up to discover events and manage your bookings</p>

          <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
            <div>
              <label className="text-xs text-[#9AA0B3]">Name</label>
              <input type="text" placeholder="Your full name" className="auth-input w-full mt-2" />
            </div>
            <div>
              <label className="text-xs text-[#9AA0B3]">E-Mail</label>
              <input type="email" placeholder="you@domain.com" className="auth-input w-full mt-2" />
            </div>
            <div>
              <label className="text-xs text-[#9AA0B3]">Passwort</label>
              <input type="password" placeholder="••••••••" className="auth-input w-full mt-2" />
            </div>
            <div>
              <label className="text-xs text-[#9AA0B3]">Passwort bestätigen</label>
              <input type="password" placeholder="••••••••" className="auth-input w-full mt-2" />
            </div>

            <div className="mt-4">
              <NeonButton type="submit" className="w-full py-3" color="#9B5CFF">Registrieren</NeonButton>
            </div>

            <div className="mt-4 text-center text-sm text-[#7E8798]">
              <span>Schon ein Konto?</span>
              <button type="button" className="auth-link ml-2" onClick={()=>setView?.('login')}>Anmelden</button>
            </div>
          </form>
        </div>
      </GlowCard>
    </div>
  );
}

export default Register;
