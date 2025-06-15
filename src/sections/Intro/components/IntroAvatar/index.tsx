import {
  TailwindComponent,
  TailwindStyles,
} from '@/src/components/TailwindComponent';
import Image from 'next/image';
import { introAvatarStyles } from './styles';

type IntroAvatarProps = {
  styles?: TailwindStyles;
};

export const IntroAvatar = ({ styles }: IntroAvatarProps) => (
  <TailwindComponent as="div" styles={[introAvatarStyles.wrapper, styles]}>
    <TailwindComponent
      as={Image}
      src="/images/bravedave_avatar.png"
      alt="Avatar"
      styles={introAvatarStyles.avatar}
      width={100}
      height={100}
    />
  </TailwindComponent>
);
