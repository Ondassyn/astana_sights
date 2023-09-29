import React, { useEffect, useState } from 'react';

const Loader = ({ imagesLoaded }: { imagesLoaded: boolean }) => {
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    let timer: any;

    if (!effect) {
      timer = setTimeout(() => {
        setEffect(true);
        setTimeout(() => {
          setEffect(false);
        }, 500);
      }, 0);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [effect]);

  return (
    <div
      className={`absolute top-0 left-0 bg-slate-100 z-50 h-screen w-full
        flex flex-col justify-center items-center ${
          imagesLoaded && 'opacity-0 transition duration-500 ease-in'
        }`}
    >
      <div className="relative">
        <div
          className="absolute bg-gray-800 rounded-full 
            h-[6vw] w-[6vw] -top-[3vw] -left-[3vw]"
        ></div>
        <div
          className={`absolute bg-slate-100 h-[6vw] w-[0.8vw]
             -top-[3vw] -left-[0.4vw] ${
               effect && 'animate-[my-spin_ease-in-out_1s_1_0.3s]'
             }`}
        ></div>
        <div
          className="absolute bg-slate-100 rounded-full 
            h-[5.4vw] w-[5.4vw] -top-[2.7vw] -left-[2.7vw]"
        ></div>

        <div
          className="absolute bg-gray-800 rounded-full 
            h-[4vw] w-[4vw] -top-[2vw] -left-[2vw]"
        ></div>
        <div
          className={`absolute bg-slate-100 h-[4vw] w-[0.8vw]
             -top-[2vw] -left-[0.4vw] ${
               effect && 'animate-[my-spin_ease-in-out_1s_1]'
             }`}
        ></div>
        <div
          className="absolute bg-slate-100 rounded-full 
            h-[3.4vw] w-[3.4vw] -top-[1.7vw] -left-[1.7vw]"
        ></div>
      </div>

      <div
        className="fixed top-[3%] w-full text-center
        text-2xl font-bold tracking-widest text-gray-800"
      >
        ASTANA SIGHTS
      </div>
      <div
        className="fixed bottom-[3%] w-full text-center
        text-lg font-semibold tracking-widest text-gray-800"
      >
        Powered by <span className="text-purple-400">COFFEE</span>
      </div>
    </div>
  );
};

export default Loader;
