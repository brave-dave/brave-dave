import { TailwindComponent } from '@/src/components/TailwindComponent';
import Image from 'next/image';
import { introAvatarStyles } from './styles';
import { Typography } from '@/src/components/Typography';

export const IntroAvatar = () => (
  <TailwindComponent as="div" styles={introAvatarStyles.wrapper}>
    <TailwindComponent
      as={Image}
      src="/images/bravedave_avatar.png"
      alt="Avatar"
      styles={introAvatarStyles.avatar}
      width={100}
      height={100}
    />
    <Typography variant="displayMediumEmphasized">Brave Dave</Typography>
  </TailwindComponent>
);
