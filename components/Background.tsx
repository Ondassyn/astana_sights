import { PLACES } from '@/data/places';
import Image from 'next/image';
import React from 'react';

const Background = ({
  effect,
  index,
}: {
  effect: boolean;
  index: number;
}) => {
  return (
    <div>
      <div
        className={`${
          effect && 'animate-[my-spin-out_ease-in-out_1.4s_1]'
        } fixed`}
      >
        <Image
          src={
            PLACES[(PLACES.length + index - 1) % PLACES.length].src
          }
          alt="img"
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            scale: '1.5',
            objectPosition: '50% 50%',
          }}
          className={`${
            effect && 'animate-[my-pulse_ease-in-out_1.4s_1]'
          }`}
        />
      </div>
      <div
        className={`${
          effect && 'animate-[my-spin-out_ease-in-out_1.2s_1]'
        } fixed`}
        style={{
          clipPath: 'circle(50% at center)',
        }}
      >
        <Image
          src={
            PLACES[(PLACES.length + index - 1) % PLACES.length].src
          }
          alt="img"
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            scale: '1.5',
            objectPosition: '50% 50%',
            filter: 'brightness(65%)',
          }}
          className={`${
            effect && 'animate-[my-pulse_ease-in-out_1.2s_1]'
          }`}
        />
      </div>

      <div
        className={`${
          effect && 'animate-[my-spin-out_ease-in-out_1s_1]'
        } fixed`}
        style={{ clipPath: 'circle(25% at center)' }}
      >
        <Image
          src={
            PLACES[(PLACES.length + index - 1) % PLACES.length].src
          }
          alt="img"
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            scale: '1.5',
            objectPosition: '50% 50%',
          }}
          className={`${
            effect && 'animate-[my-pulse_ease-in-out_1s_1]'
          }`}
        />
      </div>

      <div
        className={`${
          effect && 'animate-[my-spin-in_ease-in-out_1.4s_1]'
        } fixed`}
      >
        <Image
          src={PLACES[index].src}
          alt="img"
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            scale: '1.5',
            objectPosition: '50% 50%',
          }}
          className={`${
            effect && 'animate-[my-pulse_ease-in-out_1.4s_1]'
          }`}
        />
      </div>
      <div
        className={`${
          effect && 'animate-[my-spin-in_ease-in-out_1.2s_1]'
        } fixed`}
        style={{
          clipPath: 'circle(50% at center)',
        }}
      >
        <Image
          src={PLACES[index].src}
          alt="img"
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            scale: '1.5',
            objectPosition: '50% 50%',
            filter: 'brightness(65%)',
          }}
          className={`${
            effect && 'animate-[my-pulse_ease-in-out_1.2s_1]'
          }`}
        />
      </div>

      <div
        className={`${
          effect && 'animate-[my-spin-in_ease-in-out_1s_1]'
        } fixed`}
        style={{ clipPath: 'circle(25% at center)' }}
      >
        <Image
          src={PLACES[index].src}
          alt="img"
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            scale: '1.5',
            objectPosition: '50% 50%',
          }}
          className={`${
            effect && 'animate-[my-pulse_ease-in-out_1s_1]'
          }`}
        />
      </div>
    </div>
  );
};

export default Background;
