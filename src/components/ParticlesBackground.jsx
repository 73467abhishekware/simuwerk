import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: { value: "#0f172a" }, // dark blue-black
        },
        particles: {
          number: { value: 80 },
          color: { value: ["#3b82f6", "#60a5fa", "#93c5fd"] },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: { min: 0.3, max: 0.8 } },
          move: { enable: true, speed: 0.5 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 200, links: { opacity: 0.5 } } },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}