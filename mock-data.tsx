import { v4 } from 'uuid';

const path = "/assets";

export type ImageType = {
  img: string,
  id: string,
};

export const images = [
  { img: `${path}/tenis1.webp`, id: v4() },
  { img: `${path}/tenis2.jpg`, id: v4() },
  { img: `${path}/tenis3.webp`, id: v4() },
  { img: `${path}/tenis4.webp`, id: v4() },
  { img: `${path}/tenis5.webp`, id: v4() },
  { img: `${path}/tenis6.webp`, id: v4() },
  { img: `${path}/tenis7.webp`, id: v4() },
  { img: `${path}/tenis8.webp`, id: v4() },
  { img: `${path}/tenis9.webp`, id: v4() },
  { img: `${path}/tenis10.webp`, id: v4() },
];