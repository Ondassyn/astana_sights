'use client';

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Title from './Title';
import Background from './Background';
import Credits from './Credits';
import Button from './Button';
import { PLACES } from '@/data/places';

const Main = () => {
  const [index, setIndex] = useState(0);
  const [effect, setEffect] = useState(false);
  const [titleY, setTitleY] = useState(0);
  const [descriptionY, setDescriptionY] = useState(0);

  useEffect(() => {
    let timer: any;

    if (!effect) {
      timer = setTimeout(() => {
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
      }, 5000);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [effect]);

  return (
    <div className="h-screen overflow-hidden relative cursor-default select-none">
      <Background effect={effect} index={index} />

      <Title titleY={titleY} descriptionY={descriptionY} />

      <Credits />

      <Button
        index={index}
        setIndex={setIndex}
        effect={effect}
        setEffect={setEffect}
        setTitleY={setTitleY}
        setDescriptionY={setDescriptionY}
      />
    </div>
  );
};

export default Main;
