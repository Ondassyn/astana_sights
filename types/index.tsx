import { StaticImageData } from 'next/image';

export type Place = {
  src: StaticImageData | string;
  title: string;
  description: string;
  link: string;
};
