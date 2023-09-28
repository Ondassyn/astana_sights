import hub from '@/public/hub.jpg';
import pavilion from '@/public/pavilion.jpg';
import alley from '@/public/alley.jpg';
import bridge from '@/public/bridge.jpg';
import baiterek from '@/public/baiterek.webp';
import { Place } from '@/types';

export const PLACES: Place[] = [
  {
    src: hub,
    title: 'Fintech Hub',
    description: 'AIFC Tech Hub',
    link: 'https://tech.aifc.kz/en/main',
  },
  {
    src: bridge,
    title: 'Atyrau Bridge',
    description: 'Parametric Architecture',
    link: 'https://parametric-architecture.com/atyrau-bridge-by-new-moon-architects-in-astana-kazakhstan/',
  },
  {
    src: pavilion,
    title: 'EXPO Pavilion',
    description: 'EXPO 2020 Dubai',
    link: 'https://www.expo2020dubai.com/de/understanding-expo/participants/country-pavilions/kazakhstan.html',
  },
  {
    src: baiterek,
    title: 'Baiterek',
    description: 'Monument',
    link: 'https://www.advantour.com/kazakhstan/astana/bayterek.htm',
  },
];
