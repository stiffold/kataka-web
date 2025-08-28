import React from 'react';
import Particles from 'react-particles';

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 8,
            },
            repulse: {
              distance: 300,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: [
              '#ec4899', '#0ea5e9', '#f472b6', '#38bdf8', 
              '#f97316', '#06b6d4', '#8b5cf6', '#10b981',
              '#f59e0b', '#ef4444', '#84cc16', '#6366f1',
              '#a855f7', '#14b8a6', '#fbbf24', '#f87171'
            ],
          },
          links: {
            color: '#ec4899',
            distance: 120,
            enable: true,
            opacity: 0.6,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 200,
          },
          opacity: {
            value: 0.8,
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.2,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 3, max: 12 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
