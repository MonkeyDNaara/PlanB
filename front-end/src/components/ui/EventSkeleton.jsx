function EventSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141E]">
      <div className="relative h-56 overflow-hidden bg-[#151B27]">
        <div className="absolute inset-0 animate-pulse bg-white/5" />
      </div>

      <div className="space-y-4 p-5">
        <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />

        <div className="h-7 w-3/4 animate-pulse rounded-lg bg-white/10" />

        <div className="flex gap-3">
          <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-32 animate-pulse rounded bg-white/10" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-white/5" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-white/5" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export default EventSkeleton;