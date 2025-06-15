import { ReactNode } from 'react';
import { TailwindComponent, TailwindStyles } from '../TailwindComponent';
import { cardStyles } from './styles';

type CardProps = {
  styles?: TailwindStyles;
  children: ReactNode;
};

export function Card({ styles, children }: CardProps) {
  return (
    <TailwindComponent as="div" styles={[cardStyles.root, styles]}>
      {children}
    </TailwindComponent>
  );
}
