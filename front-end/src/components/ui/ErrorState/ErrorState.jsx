function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the requested data.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-[#FF3B5C]/20 bg-[#FF3B5C]/[0.03] px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF3B5C]/40 bg-[#FF3B5C]/10 text-2xl text-[#FF3B5C] shadow-[0_0_35px_rgba(255,59,92,0.16)]">
        !
      </div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-[#9299A8]">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="
            mt-6 rounded-xl
            border border-[#FF3B5C]/50
            px-5 py-2.5
            text-sm font-semibold text-[#FF6B82]
            transition-all duration-300
            hover:border-[#FF3B5C]
            hover:bg-[#FF3B5C]/10
            hover:shadow-[0_0_25px_rgba(255,59,92,0.22)]
          "
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;