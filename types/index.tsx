import { StaticImageData } from 'next/image';

export type Place = {
  src: StaticImageData;
  title: string;
  description: string;
  link: string;
};
