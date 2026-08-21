import { useRef } from "react";
import { getCategoryTheme } from "../../design/categoryTheme";

function GlowCard({ category = "Other", children, className = "" }) {
  const theme = getCategoryTheme(category);
  const ref = useRef(null);

  function handleMouseMove(event) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  function handleMouseLeave() {
    ref.current?.style.setProperty("--mx", "50%");
    ref.current?.style.setProperty("--my", "50%");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-evently-surface/70 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 ${className}`}
      style={{
        "--theme-color": theme.color,
        "--theme-glow": theme.glow,
        "--soft-glow": theme.softGlow,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),var(--soft-glow),transparent_28%)] opacity-90 blur-[20px] mix-blend-screen" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_var(--theme-color),0_0_48px_var(--theme-glow)] opacity-95" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GlowCard;
