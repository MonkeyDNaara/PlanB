const sizes = {
  sm: {
    wrapper: "h-10 w-10",
    logo: "h-9 w-9 text-lg",
    radius: "rounded-xl",
  },
  md: {
    wrapper: "h-11 w-11",
    logo: "h-10 w-10 text-xl",
    radius: "rounded-2xl",
  },
};

const AnimatedEventlyLogo = ({ size = "md", premium = false }) => {
  const dimensions = sizes[size] ?? sizes.md;

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center ${dimensions.wrapper}`}
      aria-hidden="true"
    >
      <span
        className={`absolute inset-0 animate-[spin_6s_linear_infinite] border motion-reduce:animate-none ${dimensions.radius} ${
          premium ? "border-amber-300/70" : "border-evently-primary/25"
        }`}
      >
        <span
          className={`absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full ${
            premium
              ? "bg-yellow-200 shadow-[0_0_14px_rgba(253,224,71,0.95)]"
              : "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.85)]"
          }`}
        />
        <span
          className={`absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${
            premium
              ? "bg-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.95)]"
              : "bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.85)]"
          }`}
        />
      </span>

      <span
        className={`flex items-center justify-center font-evently-brand transition duration-500 hover:rotate-6 hover:scale-105 motion-reduce:transform-none ${dimensions.logo} ${dimensions.radius} ${
          premium
            ? "bg-gradient-to-br from-amber-500 via-yellow-300 to-amber-600 text-amber-950 shadow-[0_0_28px_rgba(245,158,11,0.55)]"
            : "bg-gradient-to-br from-evently-primary via-fuchsia-500 to-cyan-400 text-white shadow-[0_8px_24px_rgba(111,60,255,0.28)] hover:shadow-[0_10px_34px_rgba(111,60,255,0.45)]"
        }`}
      >
        P
      </span>
    </span>
  );
};

export default AnimatedEventlyLogo;
