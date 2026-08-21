function EmptyState({
  title = "No events found",
  message = "There are currently no events to display.",
}) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FFD23F]/30 bg-[#FFD23F]/10 text-3xl shadow-[0_0_30px_rgba(255,210,63,0.12)]">
        ✦
      </div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-[#9299A8]">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;