import {
  TailwindComponent,
  TailwindStyles,
  TailwindStylesMulti,
} from '../TailwindComponent';
import NextImage from 'next/image';
import type { ImageProps as NextImageProps } from 'next/image';
import path from 'path';
import fs from 'fs';
import sizeOf from 'image-size';

const getImageDimensions = ({ width, height, fill, src }: ImageProps) => {
  if (fill) {
    return { width: undefined, height: undefined };
  }
  if (width !== undefined && height !== undefined) {
    return { width, height };
  }
  const imagePath = path.join(process.cwd(), `public/${src}`);
  const buffer = fs.readFileSync(imagePath);
  return sizeOf(buffer);
};

type DimensionsKeys = 'width' | 'height';
type NextImageKeysToOmit = DimensionsKeys | 'src' | 'fill';

type ImageBaseProps = Omit<NextImageProps, NextImageKeysToOmit> &
  Partial<Record<DimensionsKeys, number>> & {
    src: string;
  };

type ImageWithoutFillProps = ImageBaseProps & {
  fill?: false;
  styles?: TailwindStyles;
};

const ImageWithoutFill = (props: ImageWithoutFillProps) => {
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

type ImageWithFillProps = ImageBaseProps & {
  fill: true;
  styles?: TailwindStylesMulti<'root' | 'image'>;
};

const ImageWithFill = ({ fill, styles, ...props }: ImageWithFillProps) => {
  return (
    <TailwindComponent styles={styles?.root}>
      <ImageWithoutFill styles={styles?.image} {...props} />
    </TailwindComponent>
  );
};

type ImageProps = ImageWithFillProps | ImageWithoutFillProps;

export const Image = (props: ImageProps) => {
  if (props.fill) {
    return <ImageWithFill {...props} />;
  }
  return <ImageWithoutFill {...props} />;
};
