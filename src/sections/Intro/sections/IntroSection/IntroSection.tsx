import { TailwindComponent } from '@/src/components/TailwindComponent';
import { IntroAvatar } from '../../components';
import { introSectionStyles } from './styles';
import { IntroCard } from '../../components/IntroCard';
import { Section } from '@/src/components/Section';

export function IntroSection() {
  return (
    <Section styles={introSectionStyles.root}>
      <TailwindComponent as="div" styles={introSectionStyles.content}>
        <IntroAvatar styles={introSectionStyles.avatar} />
        <IntroCard />
      </TailwindComponent>
    </Section>
  );
}
