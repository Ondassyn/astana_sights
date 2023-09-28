'use client';

import { PLACES } from '@/data/places';
import React from 'react';

const Title = ({
  titleY,
  descriptionY,
}: {
  titleY: number;
  descriptionY: number;
}) => {
  return (
    <div className="fixed flex flex-col gap-8 h-screen w-full justify-center items-center">
      <div className="h-[8.8rem] flex flex-col gap-2 items-center overflow-hidden whitespace-nowrap">
        {PLACES.map((place) => (
          <div
            key={place.title}
            className={`text-9xl tracking-[0.2em] font-light 
          transition-transform duration-500 ease-in-out delay-500`}
            style={{ transform: `translateY(${titleY}%)` }}
          >
            {place.title}
          </div>
        ))}
      </div>
      <div className="bg-white h-[0.1rem] w-[30vw]"></div>
      <div className="h-[3.3rem] flex flex-col-reverse gap-3 items-center overflow-hidden">
        {PLACES.map((place) => (
          <div
            key={place.title}
            className={`text-5xl tracking-widest font-light 
          transition-transform duration-500 ease-in-out delay-500`}
            style={{ transform: `translateY(${descriptionY}%)` }}
          >
            {place.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
