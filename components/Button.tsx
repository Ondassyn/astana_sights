import { PLACES } from '@/data/places';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import React, { Dispatch, SetStateAction } from 'react';

const Button = ({
  effect,
  index,
  setIndex,
  setEffect,
  setTitleY,
  setDescriptionY,
}: {
  effect: boolean;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;

  setEffect: Dispatch<SetStateAction<boolean>>;

  setTitleY: Dispatch<SetStateAction<number>>;
  setDescriptionY: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="fixed bottom-[4%] right-20 flex flex-row items-center gap-8">
      <div className="text-xl font-bold">{`Press to see next >`}</div>
      <div className="relative">
        <div
          className={`absolute -top-6 rounded-full bg-yellow-100
      h-12 w-12 flex flex-col justify-center items-center
      ${
        effect &&
        'transition scale-[3] duration-1000 opacity-0 ease-out'
      }
      `}
        ></div>

        <div
          className="absolute  -top-6 rounded-full bg-yellow-500 cursor-pointer
      h-12 w-12 flex flex-col justify-center items-center z-10"
          onClick={() => {
            setIndex((prev) => (prev + 1) % PLACES.length);
            setEffect(true);
            setTimeout(() => {
              setEffect(false);
            }, 1400);
            setTitleY((prev) => {
              if (index === PLACES.length - 1) {
                return 0;
              } else {
                return prev - 108;
              }
            });

            setDescriptionY((prev) => {
              if (index === PLACES.length - 1) {
                return 0;
              } else {
                return prev + 115;
              }
            });
          }}
        >
          <ArrowPathIcon className="h-6 text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Button;
