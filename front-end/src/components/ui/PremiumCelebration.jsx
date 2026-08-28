import { useEffect, useRef } from "react";
import premiumCrowdSound from "../../assets/audio/premium-jubel-applaus.mp3";
import { PREMIUM_UNLOCK_EVENT } from "../../hooks/useEventSelection";

const LASER_COLORS = [
  "#ff2bd6",
  "#8b5cf6",
  "#22d3ee",
  "#3b82f6",
  "#a3ff12",
  "#f472b6",
];

const LASER_BEAMS = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${-6 + ((index * 19) % 112)}%`,
  fromBottom: index % 4 === 0 || index % 7 === 0,
  angleFrom: `${-58 + ((index * 31) % 116)}deg`,
  angleTo: `${-46 + ((index * 47) % 104)}deg`,
  delay: `${(index % 8) * -73}ms`,
  duration: `${240 + (index % 6) * 46}ms`,
  color: LASER_COLORS[index % LASER_COLORS.length],
}));

const CONFETTI_PIECES = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 45}ms`,
  duration: `${1250 + (index % 7) * 90}ms`,
  drift: `${-90 + ((index * 47) % 180)}px`,
  rotation: `${240 + (index % 6) * 95}deg`,
  color: ["#facc15", "#f59e0b", "#fde68a", "#c084fc", "#67e8f9"][
    index % 5
  ],
}));

const playPremiumCrowd = () => {
  try {
    const crowdAudio = new Audio(premiumCrowdSound);
    crowdAudio.preload = "auto";
    crowdAudio.volume = 0.9;

    const playPromise = crowdAudio.play();
    if (playPromise) {
      void playPromise.catch(() => {
        // Der Browser kann Audio blockieren, wenn kein direkter Klick vorausging.
      });
    }
  } catch {
    // Die Animation funktioniert auch auf Browsern ohne Audio-Unterstützung.
  }
};

const PremiumCelebration = ({ active = false }) => {
  const lastPlayedAt = useRef(0);

  useEffect(() => {
    const playUnlockedSound = () => {
      lastPlayedAt.current = Date.now();
      playPremiumCrowd();
    };

    window.addEventListener(PREMIUM_UNLOCK_EVENT, playUnlockedSound);

    return () => {
      window.removeEventListener(PREMIUM_UNLOCK_EVENT, playUnlockedSound);
    };
  }, []);

  useEffect(() => {
    const soundWasNotStartedByTheClick = Date.now() - lastPlayedAt.current > 500;

    if (active && soundWasNotStartedByTheClick) {
      playPremiumCrowd();
      lastPlayedAt.current = Date.now();
    }
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="premium-celebration pointer-events-none fixed inset-0 z-[70] overflow-hidden"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Premium wurde freigeschaltet.</span>
      <div className="premium-celebration-flash absolute inset-0" />

      <div className="premium-laser-show absolute inset-0" aria-hidden="true">
        {LASER_BEAMS.map((beam) => (
          <span
            key={beam.id}
            className={`premium-laser-burst absolute ${
              beam.fromBottom ? "premium-laser-burst-bottom" : ""
            }`}
            style={{
              "--laser-left": beam.left,
              "--laser-angle-from": beam.angleFrom,
              "--laser-angle-to": beam.angleTo,
              "--laser-delay": beam.delay,
              "--laser-duration": beam.duration,
              "--laser-color": beam.color,
            }}
          />
        ))}
      </div>

      <div className="premium-confetti absolute inset-0" aria-hidden="true">
        {CONFETTI_PIECES.map((piece) => (
          <span
            key={piece.id}
            className="premium-confetti-piece absolute top-[-2rem]"
            style={{
              "--confetti-left": piece.left,
              "--confetti-delay": piece.delay,
              "--confetti-duration": piece.duration,
              "--confetti-drift": piece.drift,
              "--confetti-rotation": piece.rotation,
              "--confetti-color": piece.color,
            }}
          />
        ))}
      </div>

      <div className="premium-unlocked" aria-hidden="true">
        <span className="premium-unlocked-star">★</span>
        <strong className="premium-unlocked-label">
          Premium
        </strong>
      </div>
    </div>
  );
};

export default PremiumCelebration;
