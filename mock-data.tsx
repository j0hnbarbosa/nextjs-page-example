import { v4 } from 'uuid';

const path = "/assets";

export interface ImageInterface {
  src: string,
  id: string,
};
export type ImageType = {
  src: string,
  id: string,
};

export const images = [
  { src: `${path}/tenis1.webp`, id: v4() },
  { src: `${path}/tenis2.jpg`, id: v4() },
  { src: `${path}/tenis3.webp`, id: v4() },
  { src: `${path}/tenis4.webp`, id: v4() },
  { src: `${path}/tenis5.webp`, id: v4() },
  { src: `${path}/tenis6.webp`, id: v4() },
  { src: `${path}/tenis7.webp`, id: v4() },
  { src: `${path}/tenis8.webp`, id: v4() },
  { src: `${path}/tenis9.webp`, id: v4() },
  { src: `${path}/tenis10.webp`, id: v4() },
];