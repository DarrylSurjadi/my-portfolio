'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
                speed: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 180,
            },
            opacity: {
              value: 0.4,
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.05,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}