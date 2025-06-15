import { TailwindComponent } from '@/src/components/TailwindComponent';
import { IntroAvatar } from '../../components';
import { sectionStyles } from './styles';
import { IntroCard } from '../../components/IntroCard';

export function IntroSection() {
  return (
    <TailwindComponent as="section" styles={sectionStyles.root}>
      <TailwindComponent as="div" styles={sectionStyles.content}>
        <IntroAvatar styles={sectionStyles.avatar} />
        <IntroCard />
      </TailwindComponent>
    </TailwindComponent>
  );
}
