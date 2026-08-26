import { useEffect, useRef } from "react";

const CELEBRATION_DURATION = 2;

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
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return;

  try {
    const audioContext = new AudioContext();
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(
      1,
      sampleRate * CELEBRATION_DURATION,
      sampleRate,
    );
    const samples = buffer.getChannelData(0);

    for (let index = 0; index < samples.length; index += 1) {
      const time = index / sampleRate;
      const applausePulse = Math.pow(
        Math.max(0, Math.sin(time * Math.PI * (18 + Math.sin(time * 9) * 3))),
        14,
      );
      const crowdSwell = Math.sin(Math.min(1, time * 4) * Math.PI * 0.5);
      samples[index] =
        (Math.random() * 2 - 1) *
        (0.16 + applausePulse * 0.74) *
        crowdSwell *
        Math.max(0, 1 - time / (CELEBRATION_DURATION + 0.2));
    }

    const crowdSource = audioContext.createBufferSource();
    const crowdFilter = audioContext.createBiquadFilter();
    const crowdGain = audioContext.createGain();

    crowdSource.buffer = buffer;
    crowdFilter.type = "bandpass";
    crowdFilter.frequency.value = 1450;
    crowdFilter.Q.value = 0.65;
    crowdGain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    crowdGain.gain.exponentialRampToValueAtTime(
      0.32,
      audioContext.currentTime + 0.08,
    );
    crowdGain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + CELEBRATION_DURATION,
    );

    crowdSource.connect(crowdFilter);
    crowdFilter.connect(crowdGain);
    crowdGain.connect(audioContext.destination);
    crowdSource.start();
    crowdSource.stop(audioContext.currentTime + CELEBRATION_DURATION);

    [392, 440, 523.25, 659.25].forEach((frequency, index) => {
      const voice = audioContext.createOscillator();
      const voiceGain = audioContext.createGain();
      const voiceStart = audioContext.currentTime + 0.08 + index * 0.11;

      voice.type = "triangle";
      voice.frequency.setValueAtTime(frequency, voiceStart);
      voice.frequency.exponentialRampToValueAtTime(
        frequency * 1.42,
        voiceStart + 0.48,
      );
      voiceGain.gain.setValueAtTime(0.0001, voiceStart);
      voiceGain.gain.exponentialRampToValueAtTime(0.018, voiceStart + 0.08);
      voiceGain.gain.exponentialRampToValueAtTime(0.0001, voiceStart + 0.72);
      voice.connect(voiceGain);
      voiceGain.connect(audioContext.destination);
      voice.start(voiceStart);
      voice.stop(voiceStart + 0.75);
    });

    window.setTimeout(() => {
      void audioContext.close();
    }, 2200);
  } catch {
    // Browsers may block sound before the first direct user interaction.
  }
};

const PremiumCelebration = ({ active = false }) => {
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (active && !hasPlayed.current) {
      playPremiumCrowd();
      hasPlayed.current = true;
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

      <div className="premium-unlocked absolute left-1/2 top-24 -translate-x-1/2 text-center">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.42em] text-amber-200">
          Drei Erlebnisse gewählt
        </span>
        <strong className="mt-2 block font-evently-brand text-4xl font-normal text-amber-100 sm:text-5xl">
          Premium freigeschaltet
        </strong>
      </div>
    </div>
  );
};

export default PremiumCelebration;
