import React from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = async (engine: Engine) => {
    await loadBasic(engine); // ✅ loads only the basic preset
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#000000" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#00ffff" },
          links: { enable: true, color: "#00ffff", distance: 120 },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
