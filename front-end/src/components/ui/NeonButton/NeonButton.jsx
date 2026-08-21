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
      className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] px-6 py-3 font-semibold tracking-wide text-white shadow-[0_10px_30px_color-mix(in_srgb,var(--button-color)_10%,transparent),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-color)]/60 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      style={{ "--button-color": color }}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--button-color)_14%,transparent)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-[var(--button-color)] shadow-[0_0_10px_color-mix(in_srgb,var(--button-color)_35%,transparent)] transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default NeonButton;
