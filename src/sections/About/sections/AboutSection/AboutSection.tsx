import { TailwindComponent } from '@/src/components/TailwindComponent';
import { AboutCard, AboutImage, AboutHeader } from '../../components';
import { aboutSectionStyles } from './styles';
import { Section } from '@/src/components/Section';

export function AboutSection() {
  return (
    <Section styles={aboutSectionStyles.root}>
      <TailwindComponent styles={aboutSectionStyles.container}>
        <AboutHeader />
        <TailwindComponent styles={aboutSectionStyles.content}>
          <AboutImage />
          <AboutCard />
        </TailwindComponent>
      </TailwindComponent>
    </Section>
  );
}
