import { TailwindComponent, TailwindStyles } from '../TailwindComponent';
import NextImage from 'next/image';
import type { ImageProps as NextImageProps } from 'next/image';
import path from 'path';
import fs from 'fs';
import sizeOf from 'image-size';

const getImageDimensions = ({ width, height, src }: ImageProps) => {
  if (width !== undefined && height !== undefined) {
    return { width, height };
  }
  const imagePath = path.join(process.cwd(), `public/${src}`);
  const buffer = fs.readFileSync(imagePath);
  return sizeOf(buffer);
};

type ImageProps = Omit<NextImageProps, 'width' | 'height' | 'src'> &
  Partial<Record<'width' | 'height', number>> & {
    styles?: TailwindStyles;
    src: string;
  };

export const Image = (props: ImageProps) => {
  const { width, height } = getImageDimensions(props);

  return (
    <TailwindComponent
      as={NextImage}
      width={width}
      height={height}
      {...props}
    />
  );
};
