const PremiumAtmosphere = () => {
  return (
    <>
      <div
        className="evently-honeycomb-depth pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />
      <div
        className="evently-honeycomb pointer-events-none fixed inset-0 z-[1]"
        aria-hidden="true"
      />
      <div
        className="premium-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="premium-stars absolute inset-0" />

        <div className="premium-aurora premium-aurora-violet absolute -left-[18rem] -top-[16rem] h-[42rem] w-[42rem] rounded-full" />
        <div className="premium-aurora premium-aurora-cyan absolute -bottom-[20rem] -right-[16rem] h-[46rem] w-[46rem] rounded-full" />
        <div className="premium-aurora premium-aurora-gold absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,1,8,0.74)_100%)]" />
        <div className="premium-gold-horizon absolute inset-x-0 top-16 h-px" />
      </div>
    </>
  );
};

export default PremiumAtmosphere;
