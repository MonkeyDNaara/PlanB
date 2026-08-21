import { useRef } from "react";
import { getCategoryTheme } from "../../../design/categoryTheme";

function GlowCard({
  category = "Other",
  children,
  className = "",
}) {
  const theme = getCategoryTheme(category);
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative overflow-hidden
        rounded-2xl
        border
        bg-[#0F1418]/70
        transition-all duration-300
        hover:-translate-y-2
        ${className}
      `}
      style={{
        // theme variables used inside for consistent glow
        "--theme-color": theme.color,
        "--theme-glow": theme.glow,
        "--soft-glow": theme.softGlow,
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* ambient radial glow that follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mx,50%) var(--my,50%), var(--soft-glow), transparent 28%)`,
          mixBlendMode: "screen",
          opacity: 0.92,
          filter: "blur(20px)",
        }}
      />

      {/* subtle neon contour + inner glass border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px var(--theme-color), 0 0 48px var(--theme-glow)`,
          WebkitMaskImage: "linear-gradient(#000, #000)",
          opacity: 0.95,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlowCard;
