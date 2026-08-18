import { getCategoryTheme } from "../../../design/categoryTheme";

function GlowCard({
  category = "Other",
  children,
  className = "",
}) {
  const theme = getCategoryTheme(category);

  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl
        border
        bg-[#10141E]
        transition-all duration-300
        hover:-translate-y-1.5
        ${className}
      `}
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
      }}
    >
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            circle at 50% 0%,
            ${theme.softGlow} 0%,
            transparent 58%
          )`,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          boxShadow: `inset 0 0 0 1px ${theme.color}, 0 0 32px ${theme.glow}`,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlowCard;