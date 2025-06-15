import { TailwindComponent } from '@/src/components/TailwindComponent';
import { IntroAvatar } from '../../components';
import { SectionStyles } from './styles';
import { IntroCard } from '../../components/IntroCard';

export function IntroSection() {
  return (
    <TailwindComponent as="section" styles={SectionStyles}>
      <IntroAvatar />
      <IntroCard />
    </TailwindComponent>
  );
}
