import { ShareIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Credits = () => {
  return (
    <div>
      <div
        className="fixed top-[3%] w-full text-center
        text-2xl font-bold tracking-widest"
      >
        ASTANA SIGHTS
      </div>
      <div
        className="fixed bottom-[3%] w-full text-center
        text-lg font-semibold tracking-widest"
      >
        Powered by <span className="text-purple-400">COFFEE</span>
      </div>
      <ShareIcon className="h-6 fixed bottom-[4%] left-[4%]" />
    </div>
  );
};

export default Credits;
