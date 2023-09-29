'use client';
import { PLACES } from '@/data/places';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Main from './Main';

const Dispatch = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises: Promise<void>[] = PLACES.map((place) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = place.src.src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  }, []);

  return (
    <div className="h-screen w-full">
      <Main />
      <Loader imagesLoaded={imagesLoaded} />
    </div>
  );
};

export default Dispatch;
