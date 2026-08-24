function LoadingScreen({ text = "Loading experience..." }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border border-[#9B5CFF]/20" />

        <div className="absolute inset-2 animate-pulse rounded-full border border-[#9B5CFF]/50 shadow-[0_0_35px_rgba(155,92,255,0.25)]" />

        <div className="absolute inset-[30px] rounded-full bg-[#9B5CFF] shadow-[0_0_25px_rgba(155,92,255,0.8)]" />
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#9299A8]">
        {text}
      </p>
    </div>
  );
}

export default LoadingScreen;