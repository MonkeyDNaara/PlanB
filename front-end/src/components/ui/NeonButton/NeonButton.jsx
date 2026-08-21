function NeonButton({
  children,
  color = "#7C5CFF",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group neon-btn relative overflow-hidden rounded-xl
        px-6 py-3
        font-semibold tracking-wide
        text-white
        transition-all duration-300
        disabled:cursor-not-allowed
        disabled:opacity-50
        hover:-translate-y-1
        ${className}
      `}
      style={{
        border: `1px solid rgba(255,255,255,0.06)`,
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
        boxShadow: `0 10px 30px ${color}18, inset 0 1px 0 rgba(255,255,255,0.03)`,
      }}
    >
      <span
        className="
          absolute inset-0
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(circle at center, ${color}22 0%, transparent 70%)`,
          mixBlendMode: "screen",
        }}
      />

      <span
        className="
          absolute inset-x-0 bottom-0
          h-px
          scale-x-0
          transition-transform duration-300
          group-hover:scale-x-100
        "
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}55`,
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default NeonButton;
