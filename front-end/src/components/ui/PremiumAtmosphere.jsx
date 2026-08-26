import honeyballGold from "../../assets/backgrounds/planb-honeyball-gold.webp";
import honeyballViolet from "../../assets/backgrounds/planb-honeyball-violet.webp";
import spaceBackground from "../../assets/backgrounds/planb-space.webp";

const PremiumAtmosphere = () => {
  return (
    <div
      className="planb-space-scene pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ "--planb-space-background": `url(${spaceBackground})` }}
      aria-hidden="true"
    >
      <div
        className="planb-space-backdrop absolute inset-0"
      >
        <div className="planb-space-shade absolute inset-0" />
      </div>

      <div className="planb-honeyball absolute left-1/2 top-1/2">
        <img
          className="planb-honeyball-image planb-honeyball-violet absolute inset-0 h-full w-full object-contain"
          src={honeyballViolet}
          alt=""
        />
        <img
          className="planb-honeyball-image planb-honeyball-gold absolute inset-0 h-full w-full object-contain"
          src={honeyballGold}
          alt=""
        />
      </div>

      <div className="planb-space-vignette absolute inset-0" />
    </div>
  );
};

export default PremiumAtmosphere;
