import React from 'react';
import Particles from 'react-particles-js';

import Particle1 from '../../../common/src/assets/image/saas/particles/particle-1.png';
import Particle2 from '../../../common/src/assets/image/saas/particles/particle-2.png';
import Particle3 from '../../../common/src/assets/image/saas/particles/particle-3.png';
import Particle4 from '../../../common/src/assets/image/saas/particles/particle-4.png';
import Particle5 from '../../../common/src/assets/image/saas/particles/particle-5.png';
import Particle6 from '../../../common/src/assets/image/saas/particles/particle-6.png';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 6,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Particle1}`,
                  width: 25,
                  height: 25,
                },
                {
                  src: `${Particle2}`,
                  width: 18,
                  height: 18,
          