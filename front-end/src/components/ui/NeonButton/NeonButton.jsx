function NeonButton({
  children,
  color = "#9B5CFF",
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
        group relative overflow-hidden rounded-xl
        px-5 py-3
        font-semibold tracking-wide
        text-white
        transition-all duration-300
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      style={{
        border: `1px solid ${color}`,
        background: "rgba(255,255,255,0.03)",
        boxShadow: `0 0 0 ${color}`,
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
          background: `radial-gradient(circle at center, ${color}33 0%, transparent 70%)`,
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
          boxShadow: `0 0 14px ${color}`,
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default NeonButton;