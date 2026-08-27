import honeyballGold from "../../assets/backgrounds/planb-honeyball-gold-v2.png";
import honeyballViolet from "../../assets/backgrounds/planb-honeyball-violet-v2.png";
import spaceBackground from "../../assets/backgrounds/planb-space.webp";

const PremiumAtmosphere = () => {
  return (
    <>
      <div
        className="planb-light-wireball pointer-events-none fixed left-1/2 top-1/2 z-0"
        aria-hidden="true"
      >
        <div className="planb-light-wireball-grid absolute inset-0" />
        <div className="planb-light-wireball-shade absolute inset-0" />
      </div>

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

        <div className="planb-honeyball-reflection-frame absolute inset-0">
          <div
            className="planb-honeyball-reflection absolute inset-[3%] rounded-full"
            style={{
              "--planb-reflection-background": `url(${spaceBackground})`,
            }}
          />
        </div>
      </div>

        <div className="planb-space-vignette absolute inset-0" />
      </div>
    </>
  );
};

export default PremiumAtmosphere;
